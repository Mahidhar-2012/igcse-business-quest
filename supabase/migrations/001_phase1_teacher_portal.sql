-- Phase 1: roles, schools, classrooms, enrolment, announcements, notifications, attempts, audit log.
-- Run AFTER supabase/schema.sql (which creates public.progress). Run once in the Supabase SQL Editor.
-- Security model: every table has row-level security. Users can never change their own role or school; roles are
-- granted only by security-definer functions (redeem_teacher_invite below, school admins in Phase 3).

create extension if not exists pgcrypto with schema extensions;

-- ---------------------------------------------------------------------------------------------------------------
-- Schools and profiles
-- ---------------------------------------------------------------------------------------------------------------
create table public.schools (
  id         uuid primary key default gen_random_uuid(),
  name       text not null check (char_length(name) between 2 and 120),
  created_at timestamptz not null default now()
);

create table public.profiles (
  id         uuid primary key references auth.users (id) on delete cascade,
  role       text not null default 'student' check (role in ('student', 'teacher', 'school_admin')),
  full_name  text not null default '' check (char_length(full_name) <= 80),
  school_id  uuid references public.schools (id),
  created_at timestamptz not null default now()
);

-- Every new auth user becomes a STUDENT. The role is never read from client-supplied metadata.
create function public.handle_new_user() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, left(coalesce(new.raw_user_meta_data ->> 'full_name', ''), 80));
  return new;
end $$;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- Blocks signed-in users (the 'authenticated' role) from editing role or school directly.
create function public.guard_profile() returns trigger language plpgsql as $$
begin
  if current_user in ('authenticated', 'anon') and (new.role is distinct from old.role or new.school_id is distinct from old.school_id or new.id <> old.id) then
    raise exception 'role and school can only be changed by the system';
  end if;
  return new;
end $$;
create trigger profiles_guard before update on public.profiles for each row execute function public.guard_profile();

-- ---------------------------------------------------------------------------------------------------------------
-- Helper functions (security definer so policies can look across tables without recursion)
-- ---------------------------------------------------------------------------------------------------------------
create function public.my_role() returns text language sql stable security definer set search_path = '' as $$
  select role from public.profiles where id = auth.uid() $$;

create function public.my_school() returns uuid language sql stable security definer set search_path = '' as $$
  select school_id from public.profiles where id = auth.uid() $$;

-- The subject ids used by the app and the localStorage keys its progress is saved under.
create function public.subject_id_of_key(k text) returns text language sql immutable as $$
  select case k
    when 'igcse-physics-quest:v1' then 'physics' when 'igcse-chemistry-quest:v1' then 'chemistry'
    when 'igcse-economics-quest:v1' then 'economics' when 'igcse-biology-quest:v1' then 'biology'
    when 'igcse-maths-quest:v1' then 'maths' when 'igcse-addmaths-quest:v1' then 'addmaths'
    when 'igcse-cs-quest:v1' then 'cs' when 'igcse-business-quest:v2' then 'business'
    when 'igcse-english:v1' then 'english' end $$;

-- ---------------------------------------------------------------------------------------------------------------
-- Classrooms
-- ---------------------------------------------------------------------------------------------------------------
create table public.classrooms (
  id            uuid primary key default gen_random_uuid(),
  school_id     uuid not null references public.schools (id),
  created_by    uuid not null references public.profiles (id),
  name          text not null check (char_length(name) between 2 and 80),
  grade         text not null default '' check (char_length(grade) <= 20),
  section       text not null default '' check (char_length(section) <= 20),
  subject_id    text not null check (subject_id in ('physics','chemistry','economics','biology','maths','addmaths','cs','business','english')),
  academic_year text not null check (char_length(academic_year) between 4 and 12),
  join_code     text not null unique,
  archived      boolean not null default false,
  created_at    timestamptz not null default now()
);

create table public.classroom_teachers (
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  teacher_id   uuid not null references public.profiles (id) on delete cascade,
  added_at     timestamptz not null default now(),
  primary key (classroom_id, teacher_id)
);

create table public.classroom_students (
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  student_id   uuid not null references public.profiles (id) on delete cascade,
  joined_at    timestamptz not null default now(),
  primary key (classroom_id, student_id)
);
create index on public.classroom_students (student_id);

create table public.classroom_invites (
  id           uuid primary key default gen_random_uuid(),
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  email        text not null check (email = lower(email) and char_length(email) <= 200),
  created_by   uuid not null references public.profiles (id),
  created_at   timestamptz not null default now(),
  unique (classroom_id, email)
);

create function public.is_teacher_of(cid uuid) returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.classroom_teachers where classroom_id = cid and teacher_id = auth.uid()) $$;

create function public.is_student_in(cid uuid) returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.classroom_students where classroom_id = cid and student_id = auth.uid()) $$;

-- The signed-in teacher shares a classroom with this student.
create function public.teaches_student(sid uuid) returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.classroom_students cs join public.classroom_teachers ct on ct.classroom_id = cs.classroom_id
                 where cs.student_id = sid and ct.teacher_id = auth.uid()) $$;

-- The signed-in student is in a classroom taught by this teacher.
create function public.studies_under(tid uuid) returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.classroom_students cs join public.classroom_teachers ct on ct.classroom_id = cs.classroom_id
                 where cs.student_id = auth.uid() and ct.teacher_id = tid) $$;

-- The signed-in student has a pending invitation (by email) to this classroom, so they can see its name before joining.
create function public.has_invite(cid uuid) returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.classroom_invites where classroom_id = cid and email = lower(coalesce(auth.jwt() ->> 'email', ''))) $$;

-- A teacher may read a student's saved progress for a subject only through a classroom that teaches that subject.
create function public.teacher_can_see(sid uuid, subj text) returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.classroom_students cs
                 join public.classroom_teachers ct on ct.classroom_id = cs.classroom_id
                 join public.classrooms c on c.id = cs.classroom_id
                 where cs.student_id = sid and ct.teacher_id = auth.uid() and c.subject_id = subj and not c.archived) $$;

-- ---------------------------------------------------------------------------------------------------------------
-- Announcements, notifications, attempts, audit, parent links
-- ---------------------------------------------------------------------------------------------------------------
create table public.announcements (
  id           uuid primary key default gen_random_uuid(),
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  author_id    uuid not null references public.profiles (id),
  title        text not null check (char_length(title) between 1 and 120),
  body         text not null check (char_length(body) between 1 and 4000),
  created_at   timestamptz not null default now()
);
create index on public.announcements (classroom_id, created_at desc);

create table public.notifications (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles (id) on delete cascade,
  kind       text not null,
  title      text not null,
  body       text not null default '',
  link       text,
  read       boolean not null default false,
  created_at timestamptz not null default now()
);
create index on public.notifications (user_id, created_at desc);

-- One row per first-attempt answer, so teachers see real accuracy and trends. Only the student writes their own rows.
create table public.attempts (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references public.profiles (id) on delete cascade default auth.uid(),
  subject_id text not null,
  lesson_id  text not null,
  qid        text not null,
  correct    boolean not null,
  created_at timestamptz not null default now()
);
create index on public.attempts (user_id, subject_id, created_at desc);

create table public.audit_log (
  id         bigint generated always as identity primary key,
  actor_id   uuid,
  school_id  uuid,
  action     text not null,
  target     text,
  meta       jsonb not null default '{}',
  created_at timestamptz not null default now()
);

-- Future-ready parent portal: access only through an explicitly VERIFIED link. No policy grants access yet (Phase 1).
create table public.parent_links (
  parent_id   uuid not null references public.profiles (id) on delete cascade,
  student_id  uuid not null references public.profiles (id) on delete cascade,
  verified_at timestamptz,
  verified_by uuid references public.profiles (id),
  primary key (parent_id, student_id)
);

create table public.teacher_invites (
  id         uuid primary key default gen_random_uuid(),
  school_id  uuid not null references public.schools (id),
  email      text check (email is null or email = lower(email)),
  code_hash  text not null unique,
  expires_at timestamptz not null default now() + interval '14 days',
  used_by    uuid references public.profiles (id),
  used_at    timestamptz,
  created_at timestamptz not null default now()
);

create table public.attempt_throttle (
  user_id uuid not null,
  kind    text not null,
  at      timestamptz not null default now()
);
create index on public.attempt_throttle (user_id, kind, at desc);

-- ---------------------------------------------------------------------------------------------------------------
-- Row-level security
-- ---------------------------------------------------------------------------------------------------------------
alter table public.schools            enable row level security;
alter table public.profiles           enable row level security;
alter table public.classrooms         enable row level security;
alter table public.classroom_teachers enable row level security;
alter table public.classroom_students enable row level security;
alter table public.classroom_invites  enable row level security;
alter table public.announcements      enable row level security;
alter table public.notifications      enable row level security;
alter table public.attempts           enable row level security;
alter table public.audit_log          enable row level security;      -- no policies: readable only by the system (admins in Phase 3)
alter table public.parent_links       enable row level security;      -- no policies yet
alter table public.teacher_invites    enable row level security;      -- no policies: managed by functions only
alter table public.attempt_throttle   enable row level security;      -- no policies

create policy "see own school" on public.schools for select using (id = public.my_school());

create policy "profiles: own, my students, my teachers" on public.profiles for select
  using (id = auth.uid() or public.teaches_student(id) or public.studies_under(id));
create policy "profiles: edit own" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());

create policy "classrooms: members read" on public.classrooms for select using (public.is_teacher_of(id) or public.is_student_in(id) or public.has_invite(id));
create policy "classrooms: teachers edit" on public.classrooms for update using (public.is_teacher_of(id)) with check (public.is_teacher_of(id));

create policy "classroom teachers: read" on public.classroom_teachers for select using (public.is_teacher_of(classroom_id) or public.is_student_in(classroom_id));

create policy "classroom students: teacher or self read" on public.classroom_students for select
  using (public.is_teacher_of(classroom_id) or student_id = auth.uid());
create policy "classroom students: teacher removes or student leaves" on public.classroom_students for delete
  using (public.is_teacher_of(classroom_id) or student_id = auth.uid());

create policy "invites: teacher or invitee read" on public.classroom_invites for select
  using (public.is_teacher_of(classroom_id) or email = lower(coalesce(auth.jwt() ->> 'email', '')));
create policy "invites: teacher creates" on public.classroom_invites for insert
  with check (public.is_teacher_of(classroom_id) and created_by = auth.uid());
create policy "invites: teacher cancels or invitee declines" on public.classroom_invites for delete
  using (public.is_teacher_of(classroom_id) or email = lower(coalesce(auth.jwt() ->> 'email', '')));

create policy "announcements: members read" on public.announcements for select using (public.is_teacher_of(classroom_id) or public.is_student_in(classroom_id));
create policy "announcements: teacher posts" on public.announcements for insert with check (public.is_teacher_of(classroom_id) and author_id = auth.uid());
create policy "announcements: teacher deletes" on public.announcements for delete using (public.is_teacher_of(classroom_id));

create policy "notifications: own read" on public.notifications for select using (user_id = auth.uid());
create policy "notifications: own update" on public.notifications for update using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "attempts: own insert" on public.attempts for insert with check (user_id = auth.uid());
create policy "attempts: own or my students" on public.attempts for select using (user_id = auth.uid() or public.teacher_can_see(user_id, subject_id));

-- Teachers can read (not write) saved progress of students in a classroom for that classroom's subject only.
create policy "own rows teachers read" on public.progress for select using (public.teacher_can_see(user_id, public.subject_id_of_key(subject)));

-- ---------------------------------------------------------------------------------------------------------------
-- Guards, audit triggers, notification fan-out
-- ---------------------------------------------------------------------------------------------------------------
create function public.guard_classroom() returns trigger language plpgsql as $$
begin
  if current_user in ('authenticated', 'anon') and (new.school_id <> old.school_id or new.created_by <> old.created_by or new.join_code <> old.join_code or new.subject_id <> old.subject_id) then
    raise exception 'school, owner, join code and subject cannot be changed';
  end if;
  return new;
end $$;
create trigger classrooms_guard before update on public.classrooms for each row execute function public.guard_classroom();

create function public.audit_classroom() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if tg_op = 'INSERT' then
    insert into public.audit_log (actor_id, school_id, action, target, meta) values (auth.uid(), new.school_id, 'classroom.created', new.id::text, jsonb_build_object('name', new.name));
  elsif new.archived is distinct from old.archived then
    insert into public.audit_log (actor_id, school_id, action, target) values (auth.uid(), new.school_id, case when new.archived then 'classroom.archived' else 'classroom.restored' end, new.id::text);
  end if;
  return new;
end $$;
create trigger classrooms_audit after insert or update on public.classrooms for each row execute function public.audit_classroom();

create function public.audit_student_removed() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.audit_log (actor_id, school_id, action, target, meta)
  select auth.uid(), c.school_id, 'classroom.student_removed', old.classroom_id::text, jsonb_build_object('student', old.student_id) from public.classrooms c where c.id = old.classroom_id;
  return old;
end $$;
create trigger classroom_students_audit after delete on public.classroom_students for each row execute function public.audit_student_removed();

create function public.notify_announcement() returns trigger language plpgsql security definer set search_path = '' as $$
declare cname text;
begin
  select name into cname from public.classrooms where id = new.classroom_id;
  insert into public.notifications (user_id, kind, title, body, link)
  select cs.student_id, 'announcement', new.title, 'New announcement in ' || cname, '#/classes/' || new.classroom_id
  from public.classroom_students cs where cs.classroom_id = new.classroom_id;
  return new;
end $$;
create trigger announcements_notify after insert on public.announcements for each row execute function public.notify_announcement();

-- ---------------------------------------------------------------------------------------------------------------
-- RPC functions (the only way to create classrooms, join, and become a teacher)
-- ---------------------------------------------------------------------------------------------------------------
create function public.throttle(kind text, max_hits int, minutes int) returns void language plpgsql security definer set search_path = '' as $$
begin
  if (select count(*) from public.attempt_throttle t where t.user_id = auth.uid() and t.kind = throttle.kind and t.at > now() - make_interval(mins => minutes)) >= max_hits then
    raise exception 'Too many tries. Wait a few minutes and try again.';
  end if;
  insert into public.attempt_throttle (user_id, kind) values (auth.uid(), throttle.kind);
end $$;

create function public.create_classroom(p_name text, p_grade text, p_section text, p_subject text, p_year text)
returns public.classrooms language plpgsql security definer set search_path = '' as $$
declare me public.profiles; code text; r public.classrooms; tries int := 0;
begin
  select * into me from public.profiles where id = auth.uid();
  if me.role <> 'teacher' or me.school_id is null then raise exception 'Only teachers can create classrooms'; end if;
  loop
    code := upper(translate(encode(extensions.gen_random_bytes(5), 'hex'), '01oil', 'WXYZK'));   -- hex minus look-alike characters
    code := left(code, 7);
    begin
      insert into public.classrooms (school_id, created_by, name, grade, section, subject_id, academic_year, join_code)
      values (me.school_id, me.id, trim(p_name), trim(coalesce(p_grade, '')), trim(coalesce(p_section, '')), p_subject, trim(p_year), code)
      returning * into r;
      exit;
    exception when unique_violation then
      tries := tries + 1;
      if tries > 5 then raise; end if;
    end;
  end loop;
  insert into public.classroom_teachers (classroom_id, teacher_id) values (r.id, me.id);
  return r;
end $$;

create function public.join_classroom(p_code text) returns public.classrooms language plpgsql security definer set search_path = '' as $$
declare c public.classrooms;
begin
  if public.my_role() <> 'student' then raise exception 'Only student accounts can join a classroom'; end if;
  perform public.throttle('join', 10, 15);
  select * into c from public.classrooms where join_code = upper(trim(p_code)) and not archived;
  if not found then raise exception 'That code does not match an open classroom'; end if;
  insert into public.classroom_students (classroom_id, student_id) values (c.id, auth.uid()) on conflict do nothing;
  delete from public.classroom_invites where classroom_id = c.id and email = lower(coalesce(auth.jwt() ->> 'email', ''));
  return c;
end $$;

create function public.accept_invite(p_invite uuid) returns public.classrooms language plpgsql security definer set search_path = '' as $$
declare inv public.classroom_invites; c public.classrooms;
begin
  if public.my_role() <> 'student' then raise exception 'Only student accounts can join a classroom'; end if;
  select * into inv from public.classroom_invites where id = p_invite and email = lower(coalesce(auth.jwt() ->> 'email', ''));
  if not found then raise exception 'Invitation not found'; end if;
  select * into c from public.classrooms where id = inv.classroom_id and not archived;
  if not found then raise exception 'That classroom is closed'; end if;
  insert into public.classroom_students (classroom_id, student_id) values (c.id, auth.uid()) on conflict do nothing;
  delete from public.classroom_invites where id = inv.id;
  return c;
end $$;

-- Another teacher from the SAME school, by email, gets access to a classroom the caller teaches.
create function public.share_classroom(p_classroom uuid, p_email text) returns void language plpgsql security definer set search_path = '' as $$
declare tid uuid;
begin
  if not public.is_teacher_of(p_classroom) then raise exception 'Not your classroom'; end if;
  select u.id into tid from auth.users u join public.profiles p on p.id = u.id
   where lower(u.email) = lower(trim(p_email)) and p.role = 'teacher' and p.school_id = public.my_school();
  if tid is null then raise exception 'No teacher with that email at your school'; end if;
  insert into public.classroom_teachers (classroom_id, teacher_id) values (p_classroom, tid) on conflict do nothing;
  insert into public.audit_log (actor_id, school_id, action, target, meta) values (auth.uid(), public.my_school(), 'classroom.shared', p_classroom::text, jsonb_build_object('teacher', tid));
end $$;

-- A teacher turns a signed-up account into a teacher by entering an invitation code from their school.
create function public.redeem_teacher_invite(p_code text) returns void language plpgsql security definer set search_path = '' as $$
declare inv public.teacher_invites; mail text; confirmed timestamptz;
begin
  if auth.uid() is null then raise exception 'Sign in first'; end if;
  select u.email, u.email_confirmed_at into mail, confirmed from auth.users u where u.id = auth.uid();
  if confirmed is null then raise exception 'Confirm your email address first (check your inbox)'; end if;
  perform public.throttle('invite', 5, 15);
  select * into inv from public.teacher_invites
   where code_hash = encode(extensions.digest(upper(trim(p_code)), 'sha256'), 'hex') and used_at is null and expires_at > now();
  if not found or (inv.email is not null and inv.email <> lower(mail)) then raise exception 'That invitation code is not valid'; end if;
  update public.profiles set role = 'teacher', school_id = inv.school_id where id = auth.uid() and role = 'student';
  if not found then raise exception 'This account cannot become a teacher account'; end if;
  update public.teacher_invites set used_by = auth.uid(), used_at = now() where id = inv.id;
  insert into public.audit_log (actor_id, school_id, action, target) values (auth.uid(), inv.school_id, 'teacher.activated', auth.uid()::text);
end $$;

-- Run by the project owner (SQL editor, runs as postgres) until the school portal exists in Phase 3.
create function public.admin_create_teacher_invite(p_school uuid, p_email text default null) returns text language plpgsql security definer set search_path = '' as $$
declare code text := upper(encode(extensions.gen_random_bytes(5), 'hex'));
begin
  insert into public.teacher_invites (school_id, email, code_hash)
  values (p_school, nullif(lower(trim(p_email)), ''), encode(extensions.digest(code, 'sha256'), 'hex'));
  return code;
end $$;

revoke all on function public.admin_create_teacher_invite(uuid, text) from public, anon, authenticated;
revoke all on function public.throttle(text, int, int) from public, anon, authenticated;
revoke all on function public.handle_new_user() from public, anon, authenticated;
grant execute on function public.my_role(), public.my_school(), public.is_teacher_of(uuid), public.is_student_in(uuid), public.teaches_student(uuid),
  public.studies_under(uuid), public.has_invite(uuid), public.teacher_can_see(uuid, text), public.subject_id_of_key(text),
  public.create_classroom(text, text, text, text, text), public.join_classroom(text), public.accept_invite(uuid),
  public.share_classroom(uuid, text), public.redeem_teacher_invite(text) to authenticated;
revoke execute on function public.create_classroom(text, text, text, text, text), public.join_classroom(text), public.accept_invite(uuid),
  public.share_classroom(uuid, text), public.redeem_teacher_invite(text) from anon, public;

-- Live updates (Realtime) for the tables the portals watch.
alter publication supabase_realtime add table public.announcements, public.notifications, public.classroom_students, public.progress;

-- Phase 1 permission tests. Run in the Supabase SQL Editor AFTER schema.sql and 001_phase1_teacher_portal.sql.
-- Everything happens inside one transaction that is rolled back at the end, so it leaves no data behind.
-- Any failed check raises an exception and stops the script. Success prints: PHASE 1 PERMISSION TESTS PASSED.
begin;

create schema t;
grant usage on schema t to public;

create function t.as_user(uid uuid, mail text) returns void language plpgsql as $$
begin
  perform set_config('request.jwt.claims', json_build_object('sub', uid, 'email', mail, 'role', 'authenticated')::text, true);
  perform set_config('request.jwt.claim.sub', uid::text, true);
  perform set_config('request.jwt.claim.email', mail, true);
  set local role authenticated;
end $$;

create function t.ok(cond boolean, label text) returns void language plpgsql as $$
begin
  if cond is not true then raise exception 'FAILED: %', label; end if;
  raise notice 'ok   - %', label;
end $$;

-- the statement must raise an error (a permission or validation failure)
create function t.denied(stmt text, label text) returns void language plpgsql as $$
begin
  begin
    execute stmt;
  exception when others then
    raise notice 'ok   - % (%)', label, sqlerrm;
    return;
  end;
  raise exception 'FAILED (was allowed): %', label;
end $$;

create function t.n(stmt text) returns bigint language plpgsql as $$
declare c bigint;
begin
  execute 'select count(*) from (' || stmt || ') q' into c;
  return c;
end $$;

grant execute on all functions in schema t to public;

-- fixtures (as the project owner) ------------------------------------------------------------------------------
insert into public.schools (id, name) values ('00000000-0000-0000-0000-0000000000a1', 'North School'), ('00000000-0000-0000-0000-0000000000a2', 'South School');

insert into auth.users (id, email, email_confirmed_at) values
  ('00000000-0000-0000-0000-000000000001', 'ta@north.test', now()),   -- teacher A (North)
  ('00000000-0000-0000-0000-000000000002', 'tb@south.test', now()),   -- teacher B (South)
  ('00000000-0000-0000-0000-000000000003', 's1@x.test', now()),       -- student 1
  ('00000000-0000-0000-0000-000000000004', 's2@x.test', now()),       -- student 2
  ('00000000-0000-0000-0000-000000000005', 'ta2@north.test', now()),  -- second North teacher
  ('00000000-0000-0000-0000-000000000006', 'unconfirmed@x.test', null);

select t.ok((select count(*) from public.profiles where role = 'student') = 6, 'every new account starts as a student');

create table t.codes (who text primary key, code text);
insert into t.codes values
  ('ta',  public.admin_create_teacher_invite('00000000-0000-0000-0000-0000000000a1')),
  ('tb',  public.admin_create_teacher_invite('00000000-0000-0000-0000-0000000000a2')),
  ('ta2', public.admin_create_teacher_invite('00000000-0000-0000-0000-0000000000a1', 'ta2@north.test')),
  ('un',  public.admin_create_teacher_invite('00000000-0000-0000-0000-0000000000a1'));
grant select on t.codes to public;
create table t.rooms (who text primary key, id uuid, code text);
grant all on t.rooms to public;

insert into public.progress (user_id, subject, data) values
  ('00000000-0000-0000-0000-000000000003', 'igcse-physics-quest:v1',   '{"xp":120}'),
  ('00000000-0000-0000-0000-000000000003', 'igcse-chemistry-quest:v1', '{"xp":80}'),
  ('00000000-0000-0000-0000-000000000004', 'igcse-physics-quest:v1',   '{"xp":10}');

-- students cannot grant themselves anything ----------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000003', 's1@x.test');
select t.denied($q$update public.profiles set role = 'teacher' where id = auth.uid()$q$, 'a student cannot make themselves a teacher');
select t.denied($q$update public.profiles set school_id = '00000000-0000-0000-0000-0000000000a1' where id = auth.uid()$q$, 'a student cannot join a school');
select t.ok((select count(*) from public.profiles where role = 'teacher') = 0, 'students cannot see other accounts');
update public.profiles set full_name = 'Sam' where id = auth.uid();
select t.ok((select full_name from public.profiles where id = auth.uid()) = 'Sam', 'a student can edit their own name');
select t.denied($q$select public.create_classroom('X', '9', 'A', 'physics', '2026-27')$q$, 'a student cannot create a classroom');
select t.denied($q$select public.redeem_teacher_invite('NOTACODE')$q$, 'a wrong invitation code fails');
select t.ok((select count(*) from public.teacher_invites) = 0, 'invite table shows users no rows');
select t.ok((select count(*) from public.audit_log) = 0, 'audit log shows users no rows');
select t.ok((select count(*) from public.parent_links) = 0, 'parent links show users no rows');
reset role;

-- activating teachers --------------------------------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000006', 'unconfirmed@x.test');
select t.denied(format('select public.redeem_teacher_invite(%L)', (select code from t.codes where who = 'un')), 'an unconfirmed email cannot redeem an invitation');
reset role;

select t.as_user('00000000-0000-0000-0000-000000000001', 'ta@north.test');
select public.redeem_teacher_invite((select code from t.codes where who = 'ta'));
select t.ok(public.my_role() = 'teacher' and public.my_school() = '00000000-0000-0000-0000-0000000000a1', 'a valid invitation activates a teacher at the right school');
select t.denied(format('select public.redeem_teacher_invite(%L)', (select code from t.codes where who = 'ta')), 'an invitation cannot be used twice');
reset role;

select t.as_user('00000000-0000-0000-0000-000000000002', 'tb@south.test');
select public.redeem_teacher_invite((select code from t.codes where who = 'tb'));
reset role;

select t.as_user('00000000-0000-0000-0000-000000000004', 's2@x.test');
select t.denied(format('select public.redeem_teacher_invite(%L)', (select code from t.codes where who = 'ta2')), 'an invitation tied to another email is refused');
reset role;

select t.as_user('00000000-0000-0000-0000-000000000005', 'ta2@north.test');
select public.redeem_teacher_invite((select code from t.codes where who = 'ta2'));
reset role;

-- classrooms -----------------------------------------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000001', 'ta@north.test');
insert into t.rooms select 'a', c.id, c.join_code from public.create_classroom('Physics 10A', '10', 'A', 'physics', '2026-27') c;
select t.ok((select count(*) from public.classrooms) = 1, 'a teacher sees their classroom');
select t.ok((select char_length(code) from t.rooms where who = 'a') = 7, 'a join code is generated');
select t.denied($q$select public.create_classroom('Bad', '9', 'A', 'astrology', '2026-27')$q$, 'an unknown subject is refused');
reset role;

select t.as_user('00000000-0000-0000-0000-000000000002', 'tb@south.test');
insert into t.rooms select 'b', c.id, c.join_code from public.create_classroom('Chem 10B', '10', 'B', 'chemistry', '2026-27') c;
select t.ok((select count(*) from public.classrooms) = 1, 'teacher B sees only their own classroom');
select t.ok((select count(*) from public.classrooms where id = (select id from t.rooms where who = 'a')) = 0, 'a teacher at another school cannot see this classroom');
update public.classrooms set name = 'Hacked' where id = (select id from t.rooms where who = 'a');
reset role;
select t.ok((select name from public.classrooms where id = (select id from t.rooms where who = 'a')) = 'Physics 10A', 'another school cannot edit this classroom');
select t.as_user('00000000-0000-0000-0000-000000000002', 'tb@south.test');
select t.denied(format($q$insert into public.announcements (classroom_id, author_id, title, body) values (%L, auth.uid(), 'x', 'y')$q$, (select id from t.rooms where who = 'a')), 'another school cannot post announcements here');
select t.denied(format($q$select public.share_classroom(%L, 'ta2@north.test')$q$, (select id from t.rooms where who = 'a')), 'a stranger cannot share someone else''s classroom');
reset role;

-- enrolment ------------------------------------------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000003', 's1@x.test');
select t.denied($q$select public.join_classroom('ZZZZZZZ')$q$, 'a wrong join code fails');
select public.join_classroom((select code from t.rooms where who = 'a'));
select t.ok((select count(*) from public.classrooms) = 1, 'the student now sees the classroom');
select t.ok((select count(*) from public.profiles where role = 'teacher') = 1, 'the student can see their teacher');
update public.classrooms set name = 'Mine' where id = (select id from t.rooms where who = 'a');
select t.denied(format($q$insert into public.classroom_students values (%L, auth.uid())$q$, (select id from t.rooms where who = 'b')), 'a student cannot enrol themselves directly');
select t.denied(format($q$insert into public.announcements (classroom_id, author_id, title, body) values (%L, auth.uid(), 'x', 'y')$q$, (select id from t.rooms where who = 'a')), 'a student cannot post announcements');
reset role;
select t.ok((select name from public.classrooms where id = (select id from t.rooms where who = 'a')) = 'Physics 10A', 'a student cannot edit classrooms');

select t.as_user('00000000-0000-0000-0000-000000000004', 's2@x.test');
select t.ok((select count(*) from public.classrooms) = 0, 'a student outside the class sees no classrooms');
select t.ok((select count(*) from public.profiles) = 1, 'a student outside the class sees only themselves');
select t.ok((select count(*) from public.classroom_students) = 0, 'a student outside the class sees no enrolments');
reset role;

-- progress privacy -----------------------------------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000001', 'ta@north.test');
select t.ok((select count(*) from public.profiles where id = '00000000-0000-0000-0000-000000000003') = 1, 'teacher A can see an enrolled student');
select t.ok((select count(*) from public.progress where user_id = '00000000-0000-0000-0000-000000000003') = 1, 'teacher A sees only the physics progress of a physics student');
select t.ok((select count(*) from public.progress where subject = 'igcse-chemistry-quest:v1') = 0, 'teacher A cannot see the same student''s chemistry progress');
select t.ok((select count(*) from public.progress where user_id = '00000000-0000-0000-0000-000000000004') = 0, 'teacher A cannot see a student who is not enrolled');
select t.ok((select count(*) from public.profiles where id = '00000000-0000-0000-0000-000000000004') = 0, 'teacher A cannot see a student who is not enrolled (profile)');
reset role;
select t.as_user('00000000-0000-0000-0000-000000000002', 'tb@south.test');
select t.ok((select count(*) from public.progress) = 0, 'teacher B sees no student progress');
select t.ok((select count(*) from public.profiles where id = '00000000-0000-0000-0000-000000000003') = 0, 'teacher B cannot see another school''s student');
reset role;
select t.as_user('00000000-0000-0000-0000-000000000004', 's2@x.test');
select t.ok((select count(*) from public.progress where user_id <> auth.uid()) = 0, 'a student cannot read another student''s progress');
reset role;

-- attempts -------------------------------------------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000003', 's1@x.test');
insert into public.attempts (subject_id, lesson_id, qid, correct) values ('physics', 'l1', 'q1', false), ('physics', 'l1', 'q2', true);
select t.denied($q$insert into public.attempts (user_id, subject_id, lesson_id, qid, correct) values ('00000000-0000-0000-0000-000000000004', 'physics', 'l1', 'q1', true)$q$, 'a student cannot log attempts for someone else');
reset role;
select t.as_user('00000000-0000-0000-0000-000000000001', 'ta@north.test');
select t.ok((select count(*) from public.attempts) = 2, 'the teacher sees the enrolled student''s attempts');
reset role;
select t.as_user('00000000-0000-0000-0000-000000000004', 's2@x.test');
select t.ok((select count(*) from public.attempts) = 0, 'other students cannot see those attempts');
reset role;

-- announcements and notifications --------------------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000001', 'ta@north.test');
insert into public.announcements (classroom_id, author_id, title, body) values ((select id from t.rooms where who = 'a'), auth.uid(), 'Test on Friday', 'Chapters 1 to 3');
select t.ok((select count(*) from public.announcements) = 1, 'the teacher can post an announcement');
reset role;
select t.as_user('00000000-0000-0000-0000-000000000003', 's1@x.test');
select t.ok((select count(*) from public.announcements) = 1, 'the enrolled student can read it');
select t.ok((select count(*) from public.notifications where kind = 'announcement') = 1, 'the enrolled student gets a notification');
update public.notifications set read = true;
select t.ok((select count(*) from public.notifications where read) = 1, 'a student can mark their notification read');
reset role;
select t.as_user('00000000-0000-0000-0000-000000000004', 's2@x.test');
select t.ok((select count(*) from public.announcements) = 0, 'an outsider cannot read the announcement');
select t.ok((select count(*) from public.notifications) = 0, 'an outsider gets no notification');
reset role;

-- sharing and invites --------------------------------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000001', 'ta@north.test');
select public.share_classroom((select id from t.rooms where who = 'a'), 'ta2@north.test');
select t.denied(format($q$select public.share_classroom(%L, 'tb@south.test')$q$, (select id from t.rooms where who = 'a')), 'a classroom cannot be shared with a teacher from another school');
insert into public.classroom_invites (classroom_id, email, created_by) values ((select id from t.rooms where who = 'a'), 's2@x.test', auth.uid());
reset role;
select t.as_user('00000000-0000-0000-0000-000000000005', 'ta2@north.test');
select t.ok((select count(*) from public.classrooms) = 1, 'a shared classroom is visible to the second teacher');
reset role;
select t.as_user('00000000-0000-0000-0000-000000000004', 's2@x.test');
select t.ok((select count(*) from public.classroom_invites) = 1, 'an invited student sees their invitation');
select t.ok((select count(*) from public.classrooms) = 1, 'an invited student can read the classroom name');
select public.accept_invite((select id from public.classroom_invites limit 1));
select t.ok((select count(*) from public.classroom_students) = 1, 'accepting an invitation enrols the student');
reset role;

-- removal and audit ----------------------------------------------------------------------------------------------
select t.as_user('00000000-0000-0000-0000-000000000001', 'ta@north.test');
delete from public.classroom_students where student_id = '00000000-0000-0000-0000-000000000003';
select t.ok((select count(*) from public.classroom_students) = 1, 'a teacher can remove a student');
update public.classrooms set archived = true where id = (select id from t.rooms where who = 'a');
reset role;
select t.as_user('00000000-0000-0000-0000-000000000003', 's1@x.test');
select t.ok((select count(*) from public.classrooms) = 0, 'a removed student loses access');
reset role;
select t.ok((select count(*) from public.audit_log where action in ('classroom.created', 'classroom.student_removed', 'classroom.archived', 'classroom.shared', 'teacher.activated')) >= 6, 'sensitive actions are written to the audit log');

do $$ begin raise notice 'PHASE 1 PERMISSION TESTS PASSED'; end $$;
rollback;

-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- One row per user per subject; `data` is that subject's saved progress (the same JSON the app keeps in localStorage).

create table if not exists public.progress (
  user_id    uuid        not null references auth.users (id) on delete cascade,
  subject    text        not null,
  data       jsonb       not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, subject)
);

alter table public.progress enable row level security;

-- Each signed-in user can read and write only their own rows. The public "anon" key cannot touch anyone's data.
create policy "own rows: select" on public.progress for select using (auth.uid() = user_id);
create policy "own rows: insert" on public.progress for insert with check (auth.uid() = user_id);
create policy "own rows: update" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own rows: delete" on public.progress for delete using (auth.uid() = user_id);

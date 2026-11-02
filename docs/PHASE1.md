# Phase 1: Teacher portal and classroom integration

Status: code complete, database logic verified in an in-process Postgres, **not yet run against a real Supabase project** (none exists yet).

## What was built

| Area | Where |
|---|---|
| Roles (student, teacher, school_admin), schools, profiles; every new account is a student | `supabase/migrations/001_phase1_teacher_portal.sql` |
| Teacher activation by school invitation code (hashed, single use, 14 days, rate limited) | `redeem_teacher_invite`, `admin_create_teacher_invite` |
| Classrooms: name, grade, section, subject, academic year, join code, archive, sharing with a teacher of the same school | `classrooms`, `create_classroom`, `share_classroom` |
| Enrolment by join code or by email invitation; students can leave; teachers can remove | `join_classroom`, `accept_invite`, `classroom_students`, `classroom_invites` |
| Announcements to one or several of the teacher's classrooms, with a notification per enrolled student | `announcements`, `notify_announcement` trigger |
| Per-answer log so teachers see real accuracy and trends | `attempts` table, `logAttempt` in `src/lib/cloud.js` |
| Teacher can read a student's saved progress only for the subject of a shared, unarchived classroom | policy `own rows teachers read` on `progress` |
| Audit log (activation, classroom created, archived, shared, student removed) | `audit_log` (no user can read it yet; the school portal in Phase 3 will) |
| Parent portal groundwork: verified student-parent link table, no access granted | `parent_links` |
| Teacher portal: sign in, create account, 2FA (authenticator app, optional), invitation activation, dashboard, classrooms, roster, invitations, announcements, settings, individual student profile | `src/teacher/` |
| Student side: Classes tab (join, invitations, announcements), notification bell with live updates | `src/classes/`, `src/hub/Bell.jsx` |

Existing student features are untouched. The Classes tab and the account button only appear when a Supabase project is configured.

## How it was verified

- `npm test`: 30 tests pass (6 new for teacher analytics, 8 for merge, plus the existing suites).
- `npm run build`: passes.
- `supabase/tests/phase1_permissions.sql`: 56 checks run against the real SQL (in PGlite with a stand-in `auth` schema). They cover: students cannot grant themselves a role or school; a wrong, reused, unconfirmed-email or other-email invitation fails; teachers at another school cannot see, edit or post in a classroom; students outside a class see nothing; a teacher sees an enrolled student's progress for that classroom's subject only; attempts cannot be written for someone else; announcements notify only enrolled students; sharing across schools is refused; removal revokes access; sensitive actions reach the audit log. Two deliberate security holes were introduced to confirm the tests fail when a rule is broken.
- Browser smoke test of the signed-out screens (hub, Classes tab, teacher sign-in and sign-up, Physics): renders, no console errors.

## Not verified yet (needs a real Supabase project)

Email confirmation, password reset links, authenticator-app 2FA enrolment and challenge, Realtime live updates, and every signed-in screen. These use Supabase features that the in-process test cannot reproduce. Run the checklist below once the project is set up.

## Setup after `docs/ACCOUNTS.md` steps 1 to 5

1. SQL Editor: run `supabase/schema.sql` (if not already), then `supabase/migrations/001_phase1_teacher_portal.sql`.
2. SQL Editor: run `supabase/tests/phase1_permissions.sql`. It must end with the notice `PHASE 1 PERMISSION TESTS PASSED` and leaves no data behind.
3. Create your school and a teacher invitation (runs as the project owner):
   ```sql
   insert into public.schools (name) values ('Your School Name') returning id;
   select public.admin_create_teacher_invite('<school id from above>', null);   -- or pass the teacher's email to tie it to one address
   ```
   The query returns a 10-character code. Give it to the teacher. It works once.
4. Authentication, Providers, Email: keep "Confirm email" on. Authentication, MFA: make sure TOTP is enabled (it is by default).

## Manual test checklist

1. Sign up a teacher account at `#/teacher`, confirm the email, sign in, enter the invitation code: you land on the dashboard.
2. Create a classroom. Copy its join code.
3. In another browser, sign up a student, open Classes, enter the code: the student appears in the teacher's roster without a refresh.
4. Student studies a lesson (signed in). Teacher opens the student: lessons, accuracy and activity appear.
5. Teacher posts an announcement: the student's bell shows it live.
6. Teacher invites a second student by email: they see the invitation and accept it.
7. Teacher turns on 2FA in Profile, signs out and in again: a code is requested.
8. Teacher removes the student: the student loses the classroom.

## Known limits

- Teacher invitation codes are created by the project owner in SQL until the school portal exists (Phase 3).
- "Topic-wise completion" is shown per lesson (first-try accuracy by lesson, lessons done of total), not grouped by syllabus topic.
- Teacher feedback history, assignment and assessment scores arrive in Phase 2. The dashboard shows only what exists today.
- A student's name comes from the name they entered at sign-up. Email addresses are not shown to teachers.
- Login lockout after repeated failed password attempts and email OTP for sign-in are Supabase project settings (rate limits) and Phase 5 work. Phase 1 adds rate limiting to the invitation-code and join-code checks.
- Real-time updates need the Supabase Realtime tables enabled by the migration; if Realtime is switched off in the project, screens still update on reload.

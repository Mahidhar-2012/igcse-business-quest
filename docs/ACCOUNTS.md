# Accounts and cloud save

The app works with no account: progress lives in the browser. With a Supabase project configured, an account icon appears on the home screen. Signing in saves every subject's progress to a database and loads it on any device.

## One-time setup (about 5 minutes, free tier)

1. Create a project at https://supabase.com (any name, any region near you).
2. SQL Editor, New query, paste `supabase/schema.sql`, Run. This creates the `progress` table and the rules that let each user touch only their own rows.
3. Authentication, Sign In / Providers, Email: keep it on. Under Authentication, URL Configuration, set **Site URL** to `https://mahidhar-2012.github.io/igcse-business-quest/` (confirmation and reset links return there). Optional: turn off "Confirm email" if you want sign-up to log in immediately.
4. Project Settings, API: copy the **Project URL** and the **anon public** key. Never use the `service_role` key.
5. In the GitHub repo, Settings, Secrets and variables, Actions, **Variables** tab: add `SUPABASE_URL` and `SUPABASE_ANON_KEY` with those two values. Re-run the Deploy workflow.
6. Local testing: copy `.env.example` to `.env.local`, fill it in, `npm run dev`.

The URL and anon key are meant to be public; the table's row-level security is what protects the data.

## How it behaves

- Signed-out visitors never download the Supabase library and nothing changes for them.
- Changes are uploaded about 2.5 seconds after they happen and when the tab is hidden or closed. Offline changes upload when the connection returns.
- First sign-in on a device merges what is already there with the account (larger XP, completed lessons and stars win, mistakes are joined, the later review date wins), so nothing is lost.
- Reset (per subject or everything) is stamped with a time and wins over older copies on other devices.
- Sign out saves, then clears this browser's copy so the next person on a shared computer starts clean.
- Limits: a mistake cleared on one device can reappear if another device still has it; two devices studying at the same moment merge when next synced, not live.

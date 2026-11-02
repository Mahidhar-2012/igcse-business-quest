// Optional accounts and cloud save (Supabase). Without a configured project the app stays local-only and none of this
// loads. The Supabase library is imported on demand, so signed-out visitors never download it.
import { SUBJECTS_META } from '../subjects.meta.js';
import { mergeState, sameState } from './merge.js';

const PROJECT_URL = import.meta.env?.VITE_SUPABASE_URL;
const ANON = import.meta.env?.VITE_SUPABASE_ANON_KEY;
export const cloudEnabled = !!(PROJECT_URL && ANON);

const KEYS = SUBJECTS_META.map((s) => s.storageKey);
const PUSH_DELAY = 2500;

const KEY_TO_SUBJECT = Object.fromEntries(SUBJECTS_META.map((s) => [s.storageKey, s.id]));

let clientPromise = null;
export const getClient = () => client();
const client = () => {
  if (!cloudEnabled) return Promise.resolve(null);
  clientPromise ||= import('@supabase/supabase-js').then(({ createClient }) =>
    createClient(PROJECT_URL, ANON, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }));
  return clientPromise;
};

// ---- status, for the account button -------------------------------------------------------------------------------
let status = { user: null, profile: null, state: 'idle', at: null, error: '' }; // state: idle | syncing | synced | error; profile: { role, full_name, school_id }
const listeners = new Set();
const setStatus = (patch) => {
  status = { ...status, ...patch };
  listeners.forEach((fn) => fn(status));
};
export const getStatus = () => status;
export const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

// ---- raw storage (bypasses the write hook so merged data is not pushed straight back) -------------------------------
const rawSet = Storage.prototype.setItem;
const readLocal = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null');
  } catch {
    return null;
  }
};
const writeLocal = (key, value) => {
  try {
    rawSet.call(localStorage, key, JSON.stringify(value));
  } catch {
    /* storage full or blocked */
  }
};

// ---- profile (role comes from the database, never from the browser) -------------------------------------------------
/** Loads the signed-in user's profile row. Roles are enforced by the database; this is only for choosing what to show. */
export async function refreshProfile() {
  const sb = await client();
  if (!sb || !status.user) return null;
  const { data } = await sb.from('profiles').select('role,full_name,school_id').eq('id', status.user.id).maybeSingle();
  setStatus({ profile: data || null });
  return data || null;
}

// ---- attempts (first-try answers, so teachers see real accuracy) ------------------------------------------------------
let attemptQ = [];

/** Queues one first-attempt answer. Only signed-in users are logged; nothing is sent otherwise. */
export function logAttempt(courseKey, lessonId, qid, correct) {
  const subject_id = KEY_TO_SUBJECT[courseKey];
  if (!status.user || !subject_id) return;
  attemptQ.push({ subject_id, lesson_id: lessonId, qid, correct: !!correct });
  if (attemptQ.length > 500) attemptQ = attemptQ.slice(-500);
  clearTimeout(timer);
  timer = setTimeout(flush, PUSH_DELAY);
}

async function flushAttempts() {
  const batch = attemptQ;
  if (!batch.length) return;
  attemptQ = [];
  const sb = await client();
  const { error } = await sb.from('attempts').insert(batch);
  if (error) {
    attemptQ = [...batch, ...attemptQ].slice(-500);
    throw error;
  }
}

// ---- push -----------------------------------------------------------------------------------------------------------
const dirty = new Set();
let timer = null;

async function push(keys) {
  const sb = await client();
  const user = status.user;
  if (!sb || !user || !keys.length) return;
  const rows = keys
    .map((subject) => ({ subject, data: readLocal(subject) }))
    .filter((r) => r.data)
    .map((r) => ({ user_id: user.id, subject: r.subject, data: r.data, updated_at: new Date().toISOString() }));
  if (!rows.length) return;
  const { error } = await sb.from('progress').upsert(rows, { onConflict: 'user_id,subject' });
  if (error) throw error;
}

async function flush() {
  clearTimeout(timer);
  timer = null;
  const keys = [...dirty];
  dirty.clear();
  if ((!keys.length && !attemptQ.length) || !status.user) return;
  setStatus({ state: 'syncing' });
  try {
    await push(keys);
    await flushAttempts();
    setStatus({ state: 'synced', at: Date.now(), error: '' });
  } catch (e) {
    keys.forEach((k) => dirty.add(k));
    setStatus({ state: 'error', error: e?.message || 'Could not save' });
    timer = setTimeout(flush, 15000); // retry later, e.g. once the connection is back
  }
}

let hooked = false;
function hookStorage() {
  if (hooked) return;
  hooked = true;
  Storage.prototype.setItem = function (key, value) {
    rawSet.call(this, key, value);
    if (this === window.localStorage && status.user && KEYS.includes(key)) {
      dirty.add(key);
      clearTimeout(timer);
      timer = setTimeout(flush, PUSH_DELAY);
    }
  };
  const now = () => (dirty.size || attemptQ.length) && flush();
  window.addEventListener('pagehide', now);
  document.addEventListener('visibilitychange', () => document.visibilityState === 'hidden' && now());
  window.addEventListener('online', now);
}

// ---- pull and merge -------------------------------------------------------------------------------------------------
/** Brings the account's copy together with this browser's. Returns true when local data changed. */
export async function syncNow() {
  const sb = await client();
  if (!sb || !status.user) return false;
  setStatus({ state: 'syncing' });
  try {
    const { data, error } = await sb.from('progress').select('subject,data');
    if (error) throw error;
    const remote = Object.fromEntries((data || []).filter((r) => KEYS.includes(r.subject)).map((r) => [r.subject, r.data]));
    let changed = false;
    const toPush = [];
    for (const key of KEYS) {
      const local = readLocal(key);
      const theirs = remote[key] || null;
      const merged = mergeState(local, theirs);
      if (!merged) continue;
      if (!sameState(merged, local)) {
        writeLocal(key, merged);
        changed = true;
      }
      if (!sameState(merged, theirs)) toPush.push(key);
    }
    await push(toPush);
    setStatus({ state: 'synced', at: Date.now(), error: '' });
    return changed;
  } catch (e) {
    setStatus({ state: 'error', error: e?.message || 'Could not sync' });
    return false;
  }
}

/** "Reset everything" for a signed-in user: stamps every subject as reset and uploads, so other devices follow. */
export async function resetEverything() {
  const stamp = { resetAt: Date.now() };
  KEYS.forEach((k) => localStorage.setItem(k, JSON.stringify(stamp)));
  await flush();
}

// ---- auth -----------------------------------------------------------------------------------------------------------
const friendly = (e) => {
  const m = e?.message || 'Something went wrong';
  if (/invalid login/i.test(m)) return 'Wrong email or password.';
  if (/already registered/i.test(m)) return 'That email already has an account. Try signing in.';
  if (/email not confirmed/i.test(m)) return 'Confirm your email first: check your inbox for the link.';
  if (/rate limit/i.test(m)) return 'Too many tries. Wait a minute and try again.';
  return m;
};

export async function signIn(email, password) {
  const sb = await client();
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw new Error(friendly(error));
}

/** Returns 'confirm' when the project requires email confirmation before the first sign-in. */
export async function signUp(email, password, fullName = '') {
  const sb = await client();
  const { data, error } = await sb.auth.signUp({ email, password, options: { data: { full_name: fullName.trim().slice(0, 80) }, emailRedirectTo: window.location.origin + window.location.pathname } });
  if (error) throw new Error(friendly(error));
  return data.session ? 'in' : 'confirm';
}

export async function sendReset(email) {
  const sb = await client();
  const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + window.location.pathname });
  if (error) throw new Error(friendly(error));
}

export async function setNewPassword(password) {
  const sb = await client();
  const { error } = await sb.auth.updateUser({ password });
  if (error) throw new Error(friendly(error));
}

/** Saves, signs out and wipes this browser's copy, so the next person on a shared device starts clean. */
export async function signOut() {
  const sb = await client();
  await flush();
  if (status.state === 'error') throw new Error('Your latest progress has not been saved yet. Check your connection and try again.');
  await sb.auth.signOut();
  try {
    KEYS.forEach((k) => localStorage.removeItem(k));
  } catch {
    /* ignore */
  }
  window.location.hash = '';
  window.location.reload();
}

// ---- start-up -------------------------------------------------------------------------------------------------------
/** True when a saved Supabase session exists, so start-up only touches the network for signed-in users. */
const hasSavedSession = () => {
  try {
    return Object.keys(localStorage).some((k) => /^sb-.*-auth-token$/.test(k));
  } catch {
    return false;
  }
};

let started = false;
/** Call once before the first render. Pulls the account's progress (bounded wait) so the app opens with it. */
export async function initCloud() {
  if (!cloudEnabled || started) return;
  started = true;
  hookStorage();
  const sb = hasSavedSession() ? await client() : null;
  const session = sb ? (await sb.auth.getSession()).data.session : null;
  if (session) {
    setStatus({ user: { id: session.user.id, email: session.user.email } });
    await Promise.race([Promise.all([syncNow(), refreshProfile()]), new Promise((r) => setTimeout(r, 3500))]);
  }
  // later changes: sign-in, sign-out, token refresh, and a password-reset link
  client().then((c) =>
    c.auth.onAuthStateChange((event, s) => {
      const user = s?.user ? { id: s.user.id, email: s.user.email } : null;
      const was = status.user?.id;
      setStatus({ user, profile: user && user.id === was ? status.profile : null, state: user ? status.state : 'idle', recovery: event === 'PASSWORD_RECOVERY' });
      if (user && user.id !== was && event === 'SIGNED_IN') {
        refreshProfile();
        syncNow().then((changed) => changed && window.location.reload());
      }
    }));
}

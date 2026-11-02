import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { UserRound, Cloud, CloudOff, X, LoaderCircle } from 'lucide-react';
import { cloudEnabled, getStatus, subscribe, signIn, signUp, signOut, sendReset, setNewPassword, syncNow } from '../lib/cloud.js';

const useCloud = () => useSyncExternalStore(subscribe, getStatus);

const ago = (t) => {
  if (!t) return '';
  const m = Math.round((Date.now() - t) / 60000);
  return m < 1 ? 'just now' : `${m} min ago`;
};

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-500">{label}</span>
      <input {...props} className="mt-1 w-full rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 font-semibold outline-none focus:border-brand" />
    </label>
  );
}

function SignedOut({ onDone }) {
  const [mode, setMode] = useState('in'); // in | up | reset
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState({ kind: '', text: '' });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg({ kind: '', text: '' });
    try {
      if (mode === 'in') {
        await signIn(email.trim(), password);
        onDone();
      } else if (mode === 'up') {
        const r = await signUp(email.trim(), password, name);
        if (r === 'in') onDone();
        else setMsg({ kind: 'ok', text: 'Almost there: we sent a confirmation link to your email. Open it, then sign in here.' });
      } else {
        await sendReset(email.trim());
        setMsg({ kind: 'ok', text: 'If that email has an account, a reset link is on its way.' });
      }
    } catch (err) {
      setMsg({ kind: 'err', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  const title = { in: 'Sign in', up: 'Create account', reset: 'Reset password' }[mode];
  return (
    <form onSubmit={submit} className="space-y-3">
      <p className="text-sm font-semibold text-slate-500">
        {mode === 'reset' ? 'Enter your email and we will send a link.' : 'Save your progress online and pick up on any device. What you have already done here is kept and added to your account.'}
      </p>
      {mode === 'up' && <Field label="Your name (your teacher sees this)" autoComplete="name" required maxLength={80} value={name} onChange={(e) => setName(e.target.value)} />}
      <Field label="Email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      {mode !== 'reset' && (
        <Field label="Password" type="password" autoComplete={mode === 'up' ? 'new-password' : 'current-password'} required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
      )}
      {mode === 'up' && <p className="text-xs font-semibold text-slate-500">At least 8 characters.</p>}
      {msg.text && <p role="status" className={`rounded-xl px-3 py-2 text-sm font-bold ${msg.kind === 'err' ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}>{msg.text}</p>}
      <button type="submit" disabled={busy} className="btn btn-green w-full">{busy ? 'Please wait…' : title}</button>
      <div className="flex flex-wrap justify-between gap-2 text-sm font-bold text-brand-dark">
        {mode !== 'in' && <button type="button" onClick={() => { setMode('in'); setMsg({ kind: '', text: '' }); }} className="underline">Sign in</button>}
        {mode !== 'up' && <button type="button" onClick={() => { setMode('up'); setMsg({ kind: '', text: '' }); }} className="underline">Create account</button>}
        {mode === 'in' && <button type="button" onClick={() => { setMode('reset'); setMsg({ kind: '', text: '' }); }} className="underline">Forgot password?</button>}
      </div>
    </form>
  );
}

function Recovery({ onDone }) {
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    try {
      await setNewPassword(password);
      onDone();
    } catch (err) {
      setMsg(err.message);
    }
  };
  return (
    <form onSubmit={submit} className="space-y-3">
      <p className="text-sm font-semibold text-slate-500">Choose a new password for your account.</p>
      <Field label="New password" type="password" autoComplete="new-password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
      {msg && <p role="status" className="rounded-xl bg-rose-50 px-3 py-2 text-sm font-bold text-rose-700">{msg}</p>}
      <button type="submit" className="btn btn-green w-full">Save password</button>
    </form>
  );
}

function SignedIn({ st }) {
  const [err, setErr] = useState('');
  const [out, setOut] = useState(false);
  const leave = async () => {
    setOut(true);
    try {
      await signOut();
    } catch (e) {
      setErr(e.message);
      setOut(false);
    }
  };
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-500">Signed in as</p>
      <p className="break-all text-lg font-black">{st.profile?.full_name || st.user.email}</p>
      {st.profile?.full_name && <p className="-mt-2 break-all text-sm font-semibold text-slate-500">{st.user.email}</p>}
      {st.profile?.role === 'teacher' && <a href="#/teacher" className="btn btn-blue w-full">Open teacher portal</a>}
      <p className="flex items-center gap-2 text-sm font-bold text-slate-500" role="status">
        {st.state === 'syncing' && <><LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> Saving…</>}
        {st.state === 'synced' && <><Cloud className="h-4 w-4 text-emerald-600" aria-hidden /> Saved to your account {ago(st.at)}</>}
        {st.state === 'idle' && <><Cloud className="h-4 w-4" aria-hidden /> Progress is saved automatically</>}
        {st.state === 'error' && <><CloudOff className="h-4 w-4 text-rose-600" aria-hidden /> Not saved yet: {st.error}. Will retry.</>}
      </p>
      {err && <p role="status" className="rounded-xl bg-rose-50 px-3 py-2 text-sm font-bold text-rose-700">{err}</p>}
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={() => syncNow().then((c) => c && window.location.reload())} className="btn btn-ghost !px-3 !text-xs">Sync now</button>
        <button type="button" onClick={leave} disabled={out} className="btn btn-red !px-3 !text-xs">{out ? 'Signing out…' : 'Sign out'}</button>
      </div>
      <p className="text-xs font-semibold text-slate-500">Signing out clears the progress stored in this browser (it stays safe in your account).</p>
    </div>
  );
}

/** Header button and dialog for accounts. Renders nothing when no cloud project is configured. */
export default function AccountButton() {
  const st = useCloud();
  const [open, setOpen] = useState(false);
  const btn = useRef(null);
  const close = () => { setOpen(false); btn.current?.focus(); };

  // a password-reset link opens the dialog straight on the new-password form
  useEffect(() => { if (st.recovery) setOpen(true); }, [st.recovery]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!cloudEnabled) return null;
  const label = st.user ? `Account: ${st.user.email}` : 'Sign in to save progress online';
  return (
    <>
      <button ref={btn} type="button" onClick={() => setOpen(true)} className="icon-btn relative" aria-label={label} title={label}>
        <UserRound className="h-5 w-5" aria-hidden />
        {st.user && <span className={`absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white ${st.state === 'error' ? 'bg-rose-500' : 'bg-emerald-500'}`} aria-hidden />}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4" onClick={close}>
          <div role="dialog" aria-modal="true" aria-labelledby="acct-title" className="pop w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center gap-3">
              <UserRound className="h-6 w-6 text-brand-dark" aria-hidden />
              <h2 id="acct-title" className="flex-1 text-xl font-black">{st.user ? 'Your account' : 'Save your progress'}</h2>
              <button type="button" onClick={close} aria-label="Close" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"><X className="h-5 w-5" /></button>
            </div>
            {st.recovery && st.user ? <Recovery onDone={close} /> : st.user ? <SignedIn st={st} /> : <SignedOut onDone={close} />}
          </div>
        </div>
      )}
    </>
  );
}

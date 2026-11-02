import { useEffect, useState, useSyncExternalStore } from 'react';
import { GraduationCap, LayoutDashboard, School, UserRound, ArrowLeft } from 'lucide-react';
import { Logo } from '../hub/parts.jsx';
import { getStatus, subscribe, refreshProfile, signIn, signUp, sendReset, signOut } from '../lib/cloud.js';
import { redeemTeacherInvite, mfaChallengeNeeded, mfaFactors, mfaVerify } from '../lib/classes.js';
import { Spinner, ErrorNote, TextField } from '../components/ui.jsx';
import Dashboard from './Dashboard.jsx';
import Classrooms from './Classrooms.jsx';
import ClassroomView from './ClassroomView.jsx';
import StudentProfile from './StudentProfile.jsx';
import Profile from './Profile.jsx';

function Frame({ children, nav }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 border-b-2 border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-2">
          <a href="#/teacher" className="flex items-center gap-2" aria-label="Teacher portal home">
            <Logo size={32} />
            <span className="font-display text-lg font-black leading-none text-brand-dark">IGCSE Quest <span className="text-slate-500">Teacher</span></span>
          </a>
          {nav}
          <a href="#/" className="ml-auto flex items-center gap-1 text-sm font-extrabold text-slate-500 hover:text-brand-dark"><ArrowLeft className="h-4 w-4" aria-hidden /> Student app</a>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-5 outline-none">{children}</main>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="mx-auto mt-6 max-w-sm">
      <div className="card p-5">
        <h1 className="mb-3 flex items-center gap-2 font-display text-2xl font-black"><GraduationCap className="h-6 w-6 text-brand-dark" aria-hidden /> {title}</h1>
        {children}
      </div>
    </div>
  );
}

function TeacherAuth() {
  const [mode, setMode] = useState('in');
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
      if (mode === 'in') await signIn(email.trim(), password);
      else if (mode === 'up') {
        const r = await signUp(email.trim(), password, name);
        if (r === 'confirm') setMsg({ kind: 'ok', text: 'We sent a confirmation link to your email. Open it, then sign in here.' });
      } else {
        await sendReset(email.trim());
        setMsg({ kind: 'ok', text: 'If that email has an account, a reset link is on its way.' });
      }
    } catch (x) {
      setMsg({ kind: 'err', text: x.message });
    } finally {
      setBusy(false);
    }
  };
  const go = (m) => { setMode(m); setMsg({ kind: '', text: '' }); };
  return (
    <Card title={{ in: 'Teacher sign in', up: 'Create teacher account', reset: 'Reset password' }[mode]}>
      <form onSubmit={submit} className="space-y-3">
        {mode === 'up' && <TextField label="Your name" required maxLength={80} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />}
        <TextField label="Email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {mode !== 'reset' && <TextField label="Password" type="password" required minLength={8} autoComplete={mode === 'up' ? 'new-password' : 'current-password'} value={password} onChange={(e) => setPassword(e.target.value)} hint={mode === 'up' ? 'At least 8 characters.' : undefined} />}
        {msg.text && <p role="status" className={`rounded-xl px-3 py-2 text-sm font-bold ${msg.kind === 'err' ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}>{msg.text}</p>}
        <button type="submit" disabled={busy} className="btn btn-green w-full">{busy ? 'Please wait…' : { in: 'Sign in', up: 'Create account', reset: 'Send link' }[mode]}</button>
        <div className="flex flex-wrap justify-between gap-2 text-sm font-bold text-brand-dark">
          {mode !== 'in' && <button type="button" onClick={() => go('in')} className="underline">Sign in</button>}
          {mode !== 'up' && <button type="button" onClick={() => go('up')} className="underline">Create account</button>}
          {mode === 'in' && <button type="button" onClick={() => go('reset')} className="underline">Forgot password?</button>}
        </div>
        <p className="text-xs font-semibold text-slate-500">After you confirm your email, your school gives you an invitation code to activate teacher access.</p>
      </form>
    </Card>
  );
}

function Activate({ st }) {
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      await redeemTeacherInvite(code);
      await refreshProfile();
    } catch (x) {
      setErr(x.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Card title="Activate teacher access">
      <p className="mb-3 text-sm font-semibold text-slate-500">Signed in as {st.user.email}. Enter the invitation code your school gave you.</p>
      <form onSubmit={submit} className="space-y-3">
        <TextField label="Invitation code" required autoComplete="off" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} />
        <ErrorNote>{err}</ErrorNote>
        <button type="submit" disabled={busy || code.trim().length < 6} className="btn btn-green w-full">{busy ? 'Checking…' : 'Activate'}</button>
      </form>
      <button type="button" onClick={() => signOut()} className="mt-3 text-sm font-bold underline">Sign out</button>
    </Card>
  );
}

function MfaChallenge({ onDone }) {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      const [f] = await mfaFactors();
      if (!f) throw new Error('No authenticator is set up for this account.');
      await mfaVerify(f.id, code);
      onDone();
    } catch (x) {
      setErr(x.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Card title="Two-factor check">
      <p className="mb-3 text-sm font-semibold text-slate-500">Enter the 6-digit code from your authenticator app.</p>
      <form onSubmit={submit} className="space-y-3">
        <TextField label="Code" inputMode="numeric" autoComplete="one-time-code" required maxLength={6} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} />
        <ErrorNote>{err}</ErrorNote>
        <button type="submit" disabled={busy || code.length !== 6} className="btn btn-green w-full">{busy ? 'Checking…' : 'Verify'}</button>
      </form>
      <button type="button" onClick={() => signOut()} className="mt-3 text-sm font-bold underline">Sign out</button>
    </Card>
  );
}

const NAV = [['', 'Dashboard', LayoutDashboard], ['classes', 'Classes', School], ['profile', 'Profile', UserRound]];

function Portal({ path }) {
  const [a, b, c, d] = path;
  const nav = (
    <nav aria-label="Teacher" className="flex gap-1">
      {NAV.map(([seg, label, Icon]) => {
        const on = (a || '') === seg || (seg === 'classes' && a === 'class');
        return (
          <a key={label} href={`#/teacher${seg ? `/${seg}` : ''}`} aria-current={on ? 'page' : undefined} className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-extrabold transition ${on ? 'bg-brand-soft text-brand-dark' : 'text-slate-500 hover:bg-slate-100'}`}>
            <Icon className="h-4 w-4" aria-hidden /> {label}
          </a>
        );
      })}
    </nav>
  );
  let body;
  if (a === 'classes') body = <Classrooms />;
  else if (a === 'class' && c === 'student' && d) body = <StudentProfile classroomId={b} studentId={d} />;
  else if (a === 'class' && b) body = <ClassroomView classroomId={b} />;
  else if (a === 'profile') body = <Profile />;
  else body = <Dashboard />;
  return <Frame nav={nav}>{body}</Frame>;
}

/** Teacher portal gate. The role shown here comes from the database; the database itself enforces what each role may read or write. */
export default function TeacherApp({ path }) {
  const st = useSyncExternalStore(subscribe, getStatus);
  const [aal, setAal] = useState('checking'); // checking | need | ok
  const [profileTried, setProfileTried] = useState(false);

  useEffect(() => {
    if (!st.user) { setAal('checking'); setProfileTried(false); return; }
    let live = true;
    mfaChallengeNeeded().then((need) => live && setAal(need ? 'need' : 'ok'), () => live && setAal('ok'));
    if (!st.profile) refreshProfile().finally(() => live && setProfileTried(true));
    return () => { live = false; };
  }, [st.user?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!st.user) return <Frame><TeacherAuth /></Frame>;
  if (aal === 'checking' || (!st.profile && !profileTried)) return <Frame><Spinner /></Frame>;
  if (aal === 'need') return <Frame><MfaChallenge onDone={() => setAal('ok')} /></Frame>;
  if (!st.profile) return <Frame><Card title="Could not load your account"><ErrorNote onRetry={() => { setProfileTried(false); refreshProfile().finally(() => setProfileTried(true)); }}>Check your connection and try again.</ErrorNote></Card></Frame>;
  if (st.profile.role === 'school_admin') return <Frame><Card title="School account"><p className="text-sm font-semibold text-slate-500">This is a school administrator account. The school portal arrives in a later release.</p></Card></Frame>;
  if (st.profile.role !== 'teacher') return <Frame><Activate st={st} /></Frame>;
  return <Portal path={path} />;
}

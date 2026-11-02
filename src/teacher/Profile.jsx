import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { getStatus, refreshProfile, signOut } from '../lib/cloud.js';
import { updateMyName, mfaFactors, mfaEnroll, mfaVerify, mfaUnenroll } from '../lib/classes.js';
import { useAsync } from '../lib/useAsync.js';
import { Spinner, ErrorNote, TextField } from '../components/ui.jsx';

function NameForm() {
  const st = getStatus();
  const [name, setName] = useState(st.profile?.full_name || '');
  const [msg, setMsg] = useState({ kind: '', text: '' });
  const save = async (e) => {
    e.preventDefault();
    setMsg({ kind: '', text: '' });
    try {
      await updateMyName(name);
      await refreshProfile();
      setMsg({ kind: 'ok', text: 'Saved.' });
    } catch (x) {
      setMsg({ kind: 'err', text: x.message });
    }
  };
  return (
    <form onSubmit={save} className="card space-y-3 p-4">
      <h2 className="font-display text-lg font-black">Your details</h2>
      <TextField label="Name (students see this)" required maxLength={80} value={name} onChange={(e) => setName(e.target.value)} />
      <p className="text-sm font-semibold text-slate-500">Email: {st.user.email}</p>
      {msg.text && <p role="status" className={`text-sm font-bold ${msg.kind === 'err' ? 'text-rose-700' : 'text-emerald-700'}`}>{msg.text}</p>}
      <button type="submit" className="btn btn-green">Save</button>
    </form>
  );
}

function TwoFactor() {
  const factors = useAsync(mfaFactors, []);
  const [setup, setSetup] = useState(null); // { id, qr, secret }
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const start = async () => {
    setErr('');
    try {
      const f = await mfaEnroll();
      setSetup({ id: f.id, qr: f.totp.qr_code, secret: f.totp.secret });
    } catch (x) {
      setErr(x.message);
    }
  };
  const confirm = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      await mfaVerify(setup.id, code);
      setSetup(null);
      setCode('');
      factors.reload();
    } catch (x) {
      setErr(x.message);
    } finally {
      setBusy(false);
    }
  };
  const remove = async (id) => {
    if (!window.confirm('Turn off two-factor sign-in for this account?')) return;
    setErr('');
    try {
      await mfaUnenroll(id);
      factors.reload();
    } catch (x) {
      setErr(x.message);
    }
  };
  const on = factors.data?.length > 0;
  return (
    <section className="card space-y-3 p-4" aria-label="Two-factor authentication">
      <h2 className="flex items-center gap-2 font-display text-lg font-black"><ShieldCheck className="h-5 w-5" aria-hidden /> Two-factor sign-in (optional)</h2>
      <p className="text-sm font-semibold text-slate-500">Adds a 6-digit code from an authenticator app (Google Authenticator, Microsoft Authenticator, 1Password) to every sign-in.</p>
      {factors.loading && !factors.data && <Spinner />}
      <ErrorNote>{err || factors.error}</ErrorNote>
      {!setup && factors.data && (on ? (
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-extrabold text-emerald-700">On</span>
          <button type="button" onClick={() => remove(factors.data[0].id)} className="btn btn-ghost !px-3 !text-xs">Turn off</button>
        </div>
      ) : <button type="button" onClick={start} className="btn btn-blue">Set up</button>)}
      {setup && (
        <form onSubmit={confirm} className="space-y-3">
          <p className="text-sm font-semibold">1. Scan this QR code with your authenticator app.</p>
          <img src={setup.qr} alt="QR code for your authenticator app" className="h-40 w-40 rounded-xl border-2 border-slate-200 bg-white p-1" />
          <p className="break-all text-xs font-semibold text-slate-500">Cannot scan? Enter this key instead: <span className="font-mono font-bold">{setup.secret}</span></p>
          <TextField label="2. Enter the 6-digit code it shows" inputMode="numeric" autoComplete="one-time-code" maxLength={6} required value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} />
          <div className="flex gap-2">
            <button type="submit" disabled={busy || code.length !== 6} className="btn btn-green">Turn on</button>
            <button type="button" onClick={() => setSetup(null)} className="btn btn-ghost">Cancel</button>
          </div>
        </form>
      )}
    </section>
  );
}

export default function Profile() {
  return (
    <div className="mx-auto max-w-lg space-y-4">
      <h1 className="font-display text-2xl font-black">Profile</h1>
      <NameForm />
      <TwoFactor />
      <button type="button" onClick={() => signOut().catch((e) => window.alert(e.message))} className="btn btn-ghost">Sign out</button>
    </div>
  );
}

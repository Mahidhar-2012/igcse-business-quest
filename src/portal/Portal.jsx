import { useMemo, useState } from 'react';
import { GraduationCap, UserRound, LayoutGrid, LogOut, RefreshCw, BookOpen } from 'lucide-react';
import { units } from '../physics/data/index.js';
import { getActiveStudent, setActiveStudent, listStudents, studentKey } from './session.js';

// Convenience gate only — these passwords live in the page source and protect nothing.
// Physics-only class mode (same device). Teacher password supplied by the user.
const TEACHER_PW = '0625@garvit';
const studentPw = (roll) => `${roll}@0625`;

function summarise(roll) {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(studentKey(roll)) || 'null'); } catch { /* ignore */ }
  const s = raw || {};
  const subs = s.subs || {};
  let total = 0, done = 0, stars = 0;
  for (const u of units) {
    for (const sub of u.submodules) {
      total += 1;
      if (subs[sub.id]?.done) done += 1;
      stars += subs[sub.id]?.stars || 0;
    }
  }
  const acc = s.acc || {};
  let r = 0, w = 0;
  for (const k in acc) { r += acc[k].r || 0; w += acc[k].w || 0; }
  return {
    roll,
    done,
    total,
    mastery: total ? Math.round((stars / (total * 3)) * 100) : 0,
    xp: s.xp || 0,
    streak: s.streak || 0,
    accuracy: r + w ? Math.round((r / (r + w)) * 100) : null,
    mistakes: (s.mistakes || []).length,
    started: !!raw,
  };
}

const goHome = () => { window.location.hash = ''; };
const goPhysics = () => { window.location.hash = '#/physics'; };

function Shell({ title, children }) {
  return (
    <main className="mx-auto min-h-screen max-w-xl px-4 pb-24 pt-5">
      <header className="mb-5 flex items-center gap-3">
        <button type="button" onClick={goHome} className="icon-btn" aria-label="All subjects"><LayoutGrid className="h-5 w-5" /></button>
        <h1 className="flex items-center gap-2 text-2xl font-black text-brand-dark">
          <GraduationCap className="h-6 w-6 text-indigo-600" aria-hidden /> {title}
        </h1>
      </header>
      {children}
      <p className="mt-6 rounded-xl bg-slate-100 p-3 text-center text-xs font-semibold text-slate-500">
        Class mode saves progress in <b>this browser on this device</b>. It is a convenience sign-in, not secure login or cloud sync.
      </p>
    </main>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-xs font-extrabold uppercase tracking-wide text-slate-500">{label}</span>
      <input {...props} className="mt-1 w-full rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 text-base font-bold text-slate-800 outline-none focus:border-indigo-400" />
    </label>
  );
}

function Login({ onTeacher, onStudent }) {
  const [tab, setTab] = useState('student');
  const [roll, setRoll] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setErr('');
    if (tab === 'teacher') {
      if (pw === TEACHER_PW) onTeacher();
      else setErr('Wrong teacher password.');
      return;
    }
    const id = roll.trim();
    if (!id) return setErr('Enter your roll number.');
    if (pw === studentPw(id)) onStudent(id);
    else setErr('Wrong password. It is your roll number, then @0625.');
  };

  return (
    <Shell title="Physics class">
      <div className="mb-4 flex gap-2">
        {[['student', 'Student', UserRound], ['teacher', 'Teacher', GraduationCap]].map(([k, label, Icon]) => (
          <button
            key={k}
            type="button"
            onClick={() => { setTab(k); setErr(''); }}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-3 py-2 text-sm font-black transition ${tab === k ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
          >
            <Icon className="h-4 w-4" aria-hidden /> {label}
          </button>
        ))}
      </div>

      <form onSubmit={submit} className="space-y-3 rounded-2xl border-2 border-slate-200 bg-white p-4">
        {tab === 'student' && (
          <Field label="Roll number" value={roll} onChange={(e) => setRoll(e.target.value)} placeholder="e.g. 17" autoComplete="off" />
        )}
        <Field
          label="Password"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder={tab === 'student' ? 'roll number @0625' : '••••••••'}
          autoComplete="off"
        />
        {err && <p className="text-sm font-bold text-rose-600">{err}</p>}
        <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-base font-black text-white hover:bg-indigo-700">
          {tab === 'teacher' ? 'Open teacher dashboard' : 'Sign in'}
        </button>
        <p className="text-xs font-semibold text-slate-500">
          {tab === 'student'
            ? 'Your password is your roll number followed by @0625 (for example, 17@0625).'
            : 'Teachers can see every student who has signed in on this device.'}
        </p>
      </form>
    </Shell>
  );
}

function StudentHome({ roll, onLogout }) {
  const sum = useMemo(() => summarise(roll), [roll]);
  return (
    <Shell title="Physics class">
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-bold text-emerald-700">Signed in as</p>
        <p className="text-2xl font-black text-emerald-900">Roll {roll}</p>
        <p className="mt-1 text-sm font-semibold text-emerald-800">Your Physics progress is saved under your roll number on this device.</p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <Stat label="Lessons" value={`${sum.done}/${sum.total}`} />
        <Stat label="Mastery" value={`${sum.mastery}%`} />
        <Stat label="XP" value={sum.xp} />
      </div>

      <button type="button" onClick={goPhysics} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-base font-black text-white hover:bg-indigo-700">
        <BookOpen className="h-5 w-5" aria-hidden /> Open Physics
      </button>
      <button type="button" onClick={onLogout} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-600 hover:bg-slate-50">
        <LogOut className="h-4 w-4" aria-hidden /> Sign out
      </button>
    </Shell>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border-2 border-slate-200 bg-white p-2">
      <p className="text-lg font-black text-slate-800">{value}</p>
      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{label}</p>
    </div>
  );
}

function TeacherDashboard({ onExit }) {
  const [tick, setTick] = useState(0);
  const rows = useMemo(() => listStudents().map(summarise), [tick]);
  const started = rows.filter((r) => r.started);

  return (
    <Shell title="Teacher dashboard">
      <div className="mb-3 flex items-center gap-2">
        <p className="text-sm font-bold text-slate-500">Physics · {started.length} student{started.length === 1 ? '' : 's'} active on this device</p>
        <button type="button" onClick={() => setTick((t) => t + 1)} className="icon-btn ml-auto" aria-label="Refresh"><RefreshCw className="h-4 w-4" /></button>
        <button type="button" onClick={onExit} className="rounded-xl border-2 border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600 hover:bg-slate-50">Sign out</button>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center">
          <p className="font-black text-slate-700">No students yet</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            Ask each student to open this app on this device, go to Physics class, and sign in with their roll number (password: roll number @0625). Their progress will then appear here.
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {rows.map((r) => (
            <li key={r.roll} className="rounded-2xl border-2 border-slate-200 bg-white p-3">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-100 text-sm font-black text-indigo-700">{String(r.roll).slice(0, 3)}</span>
                <span className="font-black text-slate-800">Roll {r.roll}</span>
                {!r.started && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500">signed in, no work yet</span>}
                <span className="ml-auto text-xs font-bold text-slate-400">🔥 {r.streak} · ⚡ {r.xp} XP</span>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-2 text-center">
                <Mini label="Lessons" value={`${r.done}/${r.total}`} />
                <Mini label="Mastery" value={`${r.mastery}%`} />
                <Mini label="Accuracy" value={r.accuracy == null ? '—' : `${r.accuracy}%`} />
                <Mini label="To review" value={r.mistakes} />
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-indigo-500" style={{ width: `${r.mastery}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </Shell>
  );
}

function Mini({ label, value }) {
  return (
    <div>
      <p className="text-base font-black text-slate-800">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{label}</p>
    </div>
  );
}

export default function Portal() {
  const [screen, setScreen] = useState(() => (getActiveStudent() ? { name: 'student', roll: getActiveStudent() } : { name: 'login' }));

  if (screen.name === 'teacher') return <TeacherDashboard onExit={() => setScreen({ name: 'login' })} />;
  if (screen.name === 'student') {
    return (
      <StudentHome
        roll={screen.roll}
        onLogout={() => { setActiveStudent(null); setScreen({ name: 'login' }); }}
      />
    );
  }
  return (
    <Login
      onTeacher={() => setScreen({ name: 'teacher' })}
      onStudent={(roll) => { setActiveStudent(roll); setScreen({ name: 'student', roll }); }}
    />
  );
}

import { useMemo, useState } from 'react';
import { GraduationCap, UserRound, LayoutGrid, LogOut, RefreshCw, BookOpen, Trophy, Plus, Minus, Pencil, Check } from 'lucide-react';
import { units } from '../physics/data/index.js';
import {
  getActiveStudent, setActiveStudent, upsertStudent, getStudent, listStudents,
  studentKey, isEmail, getTeams, addTeamPoints, renameTeam, resetTeamPoints, teamName,
} from './session.js';

// Convenience gate only — this password lives in the page source and protects nothing.
const TEACHER_PW = '0625@garvit';

function summarise(email) {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(studentKey(email)) || 'null'); } catch { /* ignore */ }
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
    done, total,
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [team, setTeam] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const teams = useMemo(getTeams, []);

  const submit = (e) => {
    e.preventDefault();
    setErr('');
    if (tab === 'teacher') {
      if (pw === TEACHER_PW) onTeacher();
      else setErr('Wrong teacher password.');
      return;
    }
    if (!name.trim()) return setErr('Enter your name.');
    if (!isEmail(email)) return setErr('Enter a valid email address.');
    if (!team) return setErr('Choose your team.');
    onStudent({ name: name.trim(), email, team });
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
        {tab === 'student' ? (
          <>
            <Field label="Your name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Aditi Sharma" autoComplete="off" />
            <Field label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="off" />
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Your team</span>
              <div className="mt-1 flex flex-wrap gap-2">
                {teams.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTeam(t.id)}
                    className={`flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-black transition ${team === t.id ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <Field label="Teacher password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="••••••••" autoComplete="off" />
        )}
        {err && <p className="text-sm font-bold text-rose-600">{err}</p>}
        <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-base font-black text-white hover:bg-indigo-700">
          {tab === 'teacher' ? 'Open teacher dashboard' : 'Start learning'}
        </button>
      </form>
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

function StudentHome({ email, onLogout }) {
  const profile = useMemo(() => getStudent(email), [email]);
  const sum = useMemo(() => summarise(email), [email]);
  const myTeam = useMemo(() => teamName(profile?.team), [profile]);

  return (
    <Shell title="Physics class">
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-bold text-emerald-700">Signed in</p>
        <p className="text-2xl font-black text-emerald-900">{profile?.name || email}</p>
        <p className="mt-1 text-sm font-semibold text-emerald-800">
          Team <b>{myTeam}</b> · {email} — your Physics progress saves on this device.
        </p>
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

function TeamCard({ team, leading, onPoints, onRename }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(team.name);
  const save = () => { onRename(team.id, draft); setEditing(false); };

  return (
    <div className={`rounded-2xl border-2 p-4 ${leading ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-white'}`}>
      <div className="flex items-center gap-2">
        {editing ? (
          <>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && save()}
              className="min-w-0 flex-1 rounded-lg border-2 border-indigo-300 px-2 py-1 text-base font-black text-slate-800 outline-none"
              aria-label="Team name"
              autoFocus
            />
            <button type="button" onClick={save} className="icon-btn !text-emerald-600" aria-label="Save team name"><Check className="h-4 w-4" /></button>
          </>
        ) : (
          <>
            <span className="flex items-center gap-1.5 text-lg font-black text-slate-800">
              {leading && <Trophy className="h-5 w-5 text-amber-500" aria-hidden />} {team.name}
            </span>
            <button type="button" onClick={() => { setDraft(team.name); setEditing(true); }} className="icon-btn !h-7 !w-7 !text-slate-400" aria-label={`Rename ${team.name}`}><Pencil className="h-3.5 w-3.5" /></button>
          </>
        )}
        <span className="ml-auto text-3xl font-black tabular-nums text-indigo-700">{team.points}</span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {[1, 3, 5].map((n) => (
          <button key={n} type="button" onClick={() => onPoints(team.id, n)} className="flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-black text-white hover:bg-indigo-700">
            <Plus className="h-3.5 w-3.5" aria-hidden /> {n}
          </button>
        ))}
        <button type="button" onClick={() => onPoints(team.id, -1)} className="ml-auto flex items-center gap-1 rounded-xl border-2 border-slate-200 bg-white px-3 py-1.5 text-sm font-black text-slate-600 hover:bg-slate-50" aria-label={`Subtract 1 from ${team.name}`}>
          <Minus className="h-3.5 w-3.5" aria-hidden /> 1
        </button>
      </div>
    </div>
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

function StudentRow({ s }) {
  const sum = summarise(s.email);
  return (
    <li className="rounded-2xl border-2 border-slate-200 bg-white p-3">
      <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-100 text-sm font-black text-indigo-700">{(s.name || '?').slice(0, 1).toUpperCase()}</span>
        <div className="min-w-0">
          <p className="truncate font-black text-slate-800">{s.name || s.email}</p>
          <p className="truncate text-xs font-semibold text-slate-400">{s.email}</p>
        </div>
        <span className="ml-auto whitespace-nowrap text-xs font-bold text-slate-400">🔥 {sum.streak} · ⚡ {sum.xp}</span>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-2 text-center">
        <Mini label="Lessons" value={`${sum.done}/${sum.total}`} />
        <Mini label="Mastery" value={`${sum.mastery}%`} />
        <Mini label="Accuracy" value={sum.accuracy == null ? '—' : `${sum.accuracy}%`} />
        <Mini label="To review" value={sum.mistakes} />
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-indigo-500" style={{ width: `${sum.mastery}%` }} />
      </div>
    </li>
  );
}

function TeacherDashboard({ onExit }) {
  const [tick, setTick] = useState(0);
  const refresh = () => setTick((t) => t + 1);
  const teams = useMemo(getTeams, [tick]);
  const students = useMemo(listStudents, [tick]);
  const maxPoints = Math.max(0, ...teams.map((t) => t.points || 0));

  const onPoints = (id, delta) => { addTeamPoints(id, delta); refresh(); };
  const onRename = (id, name) => { renameTeam(id, name); refresh(); };

  return (
    <Shell title="Teacher dashboard">
      <div className="mb-2 flex items-center gap-2">
        <h2 className="flex items-center gap-1.5 text-sm font-black uppercase tracking-wide text-slate-500"><Trophy className="h-4 w-4 text-amber-500" aria-hidden /> Team points</h2>
        <button type="button" onClick={() => { if (window.confirm('Reset both teams to 0 points?')) { resetTeamPoints(); refresh(); } }} className="ml-auto rounded-lg border-2 border-slate-200 bg-white px-2 py-1 text-xs font-black text-slate-500 hover:bg-slate-50">Reset points</button>
        <button type="button" onClick={onExit} className="rounded-lg border-2 border-slate-200 bg-white px-2 py-1 text-xs font-black text-slate-600 hover:bg-slate-50">Sign out</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {teams.map((t) => (
          <TeamCard key={t.id} team={t} leading={maxPoints > 0 && t.points === maxPoints} onPoints={onPoints} onRename={onRename} />
        ))}
      </div>

      <div className="mb-2 mt-6 flex items-center gap-2">
        <h2 className="text-sm font-black uppercase tracking-wide text-slate-500">Students · Physics ({students.length})</h2>
        <button type="button" onClick={refresh} className="icon-btn ml-auto" aria-label="Refresh"><RefreshCw className="h-4 w-4" /></button>
      </div>

      {students.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center">
          <p className="font-black text-slate-700">No students yet</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">Ask each student to open this app on this device, go to Physics class, and sign in with their name, email and team. They will appear here.</p>
        </div>
      ) : (
        teams.map((t) => {
          const members = students.filter((s) => s.team === t.id);
          if (!members.length) return null;
          return (
            <section key={t.id} className="mt-3">
              <p className="mb-1 text-xs font-black uppercase tracking-wide text-indigo-500">{t.name} · {members.length}</p>
              <ul className="space-y-2">{members.map((s) => <StudentRow key={s.email} s={s} />)}</ul>
            </section>
          );
        })
      )}
      {students.some((s) => !teams.find((t) => t.id === s.team)) && (
        <section className="mt-3">
          <p className="mb-1 text-xs font-black uppercase tracking-wide text-slate-400">No team</p>
          <ul className="space-y-2">{students.filter((s) => !teams.find((t) => t.id === s.team)).map((s) => <StudentRow key={s.email} s={s} />)}</ul>
        </section>
      )}
    </Shell>
  );
}

export default function Portal() {
  const [screen, setScreen] = useState(() => (getActiveStudent() ? { name: 'student', email: getActiveStudent() } : { name: 'login' }));

  if (screen.name === 'teacher') return <TeacherDashboard onExit={() => setScreen({ name: 'login' })} />;
  if (screen.name === 'student') {
    return <StudentHome email={screen.email} onLogout={() => { setActiveStudent(null); setScreen({ name: 'login' }); }} />;
  }
  return (
    <Login
      onTeacher={() => setScreen({ name: 'teacher' })}
      onStudent={({ name, email, team }) => {
        upsertStudent({ name, email, team });
        setActiveStudent(email);
        setScreen({ name: 'student', email });
      }}
    />
  );
}

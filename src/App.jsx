import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Briefcase, PenLine, Atom, FlaskConical, TrendingUp, ArrowRight, Flame, Zap, Target, Play, ShieldAlert } from 'lucide-react';
import { loadOverview } from './lib/overview.js';
import { SUBJECTS_META } from './subjects.meta.js';

// Each subject is its own chunk, so the hub opens quickly and a subject downloads only when it is chosen.
// To add a subject: add it to src/subjects.meta.js, then register its icon and loader here.
const ICONS = { physics: Atom, business: Briefcase, english: PenLine, chemistry: FlaskConical, economics: TrendingUp };
const LOADERS = {
  business: lazy(() => import('./BusinessApp.jsx')),
  english: lazy(() => import('./english/EnglishApp.jsx')),
  physics: lazy(() => import('./physics/PhysicsApp.jsx')),
  chemistry: lazy(() => import('./chemistry/ChemistryApp.jsx')),
  economics: lazy(() => import('./economics/EconomicsApp.jsx')),
};
const SUBJECTS = SUBJECTS_META.filter((s) => LOADERS[s.id]).map((s) => ({ ...s, icon: ICONS[s.id] }));
const routeFromHash = () => SUBJECTS.find((s) => s.hash === window.location.hash)?.id ?? null;

function Ring({ pct, color, size = 56, stroke = 6, children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (c * pct) / 100} style={{ transition: 'stroke-dashoffset .6s ease' }} />
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}

const Stat = ({ icon: Icon, label, value, tint }) => (
  <div className="flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-4 py-3">
    <span className={`grid h-10 w-10 place-items-center rounded-xl ${tint}`}><Icon className="h-5 w-5" aria-hidden /></span>
    <div>
      <p className="text-xl font-black leading-none">{value}</p>
      <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-slate-500">{label}</p>
    </div>
  </div>
);

function Hub({ onOpen }) {
  const ov = useMemo(loadOverview, []);
  const goalPct = Math.min(100, Math.round((ov.todayXp / ov.goal) * 100));
  const resume = SUBJECTS.find((s) => s.id === ov.lastSubject);
  const totalDone = Object.values(ov.subjects).reduce((n, s) => n + s.done, 0);
  const totalLessons = Object.values(ov.subjects).reduce((n, s) => n + s.total, 0);
  const mistakes = Object.values(ov.subjects).reduce((n, s) => n + s.mistakes, 0);

  return (
    <main id="main" tabIndex={-1} className="mx-auto min-h-screen max-w-4xl outline-none px-4 pb-16 pt-6 sm:pt-10">
      <header className="mb-6">
        <h1 className="text-3xl font-black text-brand-dark sm:text-4xl">IGCSE Quest</h1>
        <p className="mt-1 font-semibold text-slate-600">
          {resume ? 'Welcome back. Pick up where you left off.' : 'Pick a subject and start with your first lesson.'}
        </p>
      </header>

      {resume && (
        <section aria-label="Continue learning" className="mb-6">
          <button
            type="button"
            onClick={() => onOpen(resume)}
            className="group flex w-full items-center gap-4 rounded-3xl p-5 text-left text-white transition hover:brightness-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            style={{ background: `linear-gradient(135deg, ${resume.color}, #1e293b)` }}
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/20"><Play className="h-7 w-7 fill-white" aria-hidden /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-extrabold uppercase tracking-widest text-white/80">Continue learning</span>
              <span className="block truncate text-xl font-black">{resume.title}</span>
              <span className="block text-sm font-bold text-white/85">{ov.subjects[resume.id].done}/{ov.subjects[resume.id].total} lessons · {ov.subjects[resume.id].pct}%</span>
            </span>
            <ArrowRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-1" aria-hidden />
          </button>
        </section>
      )}

      <section aria-label="Your progress" className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat icon={Flame} label="Day streak" value={ov.streak} tint="bg-orange-100 text-orange-500" />
        <Stat icon={Zap} label="Total XP" value={ov.xp} tint="bg-amber-100 text-amber-500" />
        <Stat icon={Target} label={`Goal ${ov.todayXp}/${ov.goal} XP`} value={`${goalPct}%`} tint="bg-emerald-100 text-emerald-600" />
        <Stat icon={ShieldAlert} label="To review" value={mistakes} tint="bg-rose-100 text-rose-500" />
        <div className="col-span-2 sm:col-span-4" aria-hidden={false}>
          <div className="h-3 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={goalPct} aria-label="Daily XP goal">
            <div className="h-full rounded-full bg-brand transition-all duration-700" style={{ width: `${goalPct}%` }} />
          </div>
          <p className="mt-1 text-xs font-bold text-slate-500">
            {goalPct >= 100 ? 'Daily goal reached. Great work!' : `${ov.goal - ov.todayXp} XP to today’s goal. Answer questions in any subject to earn XP.`}
            {' '}{totalDone} of {totalLessons} lessons finished overall.
          </p>
        </div>
      </section>

      <h2 className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-500">Your subjects</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {SUBJECTS.map((s) => {
          const st = ov.subjects[s.id];
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onOpen(s)}
                className="card group flex h-full w-full items-start gap-4 p-5 text-left transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"
              >
                <Ring pct={st.pct} color={s.color} size={64}>
                  <span className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ background: s.color }}><s.icon className="h-5 w-5" aria-hidden /></span>
                </Ring>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-black leading-tight">{s.title}</span>
                  <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-500">{s.code} · {s.tag}</span>
                  <span className="mt-2 block text-sm font-semibold text-slate-600">{s.blurb}</span>
                  <span className="mt-3 flex items-center gap-2 text-sm font-black" style={{ color: s.text }}>
                    {st.started ? `${st.done}/${st.total} lessons · ${st.pct}%` : 'Start'}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                  </span>
                </span>
              </button>
            </li>
          );
        })}
        <li>
          <div className="flex h-full items-start gap-4 rounded-3xl border-2 border-dashed border-slate-300 p-5 text-slate-500">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-slate-200"><FlaskConical className="h-6 w-6" aria-hidden /></span>
            <span>
              <span className="block text-lg font-black leading-tight">More subjects</span>
              <span className="mt-1 block text-sm font-semibold">Biology, Maths and more are planned.</span>
            </span>
          </div>
        </li>
      </ul>
      <p className="mt-8 text-center text-xs font-semibold text-slate-500">
        Your progress is saved on this device only. Independent study tool, not affiliated with or endorsed by Cambridge.
      </p>
    </main>
  );
}

const Loading = () => (
  <div className="grid min-h-screen place-items-center" role="status" aria-live="polite">
    <p className="animate-pulse text-lg font-black text-slate-500">Loading…</p>
  </div>
);

export default function App() {
  const [subject, setSubject] = useState(routeFromHash);

  // keep the browser back button working
  useEffect(() => {
    const onHash = () => setSubject(routeFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const open = (s) => { window.location.hash = s.hash; };
  const home = () => { window.location.hash = ''; setSubject(null); window.scrollTo(0, 0); };

  const Active = subject ? LOADERS[subject] : null;

  return (
    <Suspense fallback={<Loading />}>
      <a href="#main" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
      {Active && <Active onHome={home} />}
      {!subject && <Hub onOpen={open} />}
    </Suspense>
  );
}

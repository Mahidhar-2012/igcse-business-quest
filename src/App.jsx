import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { loadOverview } from './lib/overview.js';
import { SUBJECTS_META } from './subjects.meta.js';
import { Logo, BottomNav, ThemeButton, ICONS } from './hub/parts.jsx';
import { Learn, Recall, NotesTab, Progress, StatChips } from './hub/Tabs.jsx';
import AccountButton from './hub/Account.jsx';
import { getStatus, resetEverything } from './lib/cloud.js';

// Each subject is its own chunk, so the hub opens quickly and a subject downloads only when it is chosen.
// To add a subject: add it to src/subjects.meta.js, then register its icon in src/hub/parts.jsx and its loader here.
const LOADERS = {
  business: lazy(() => import('./BusinessApp.jsx')),
  english: lazy(() => import('./english/EnglishApp.jsx')),
  physics: lazy(() => import('./physics/PhysicsApp.jsx')),
  chemistry: lazy(() => import('./chemistry/ChemistryApp.jsx')),
  economics: lazy(() => import('./economics/EconomicsApp.jsx')),
  biology: lazy(() => import('./biology/BiologyApp.jsx')),
  maths: lazy(() => import('./maths/MathsApp.jsx')),
  addmaths: lazy(() => import('./addmaths/AddMathsApp.jsx')),
  cs: lazy(() => import('./cs/CSApp.jsx')),
};
const SUBJECTS = SUBJECTS_META.filter((s) => LOADERS[s.id] && ICONS[s.id]);
const TABS = ['learn', 'recall', 'notes', 'progress'];
const CURRENT_KEY = 'iq:current';

/** #/ is Learn; #/recall, #/notes, #/progress are hub tabs; #/maths opens a subject; #/maths/notes and #/maths/mistakes deep-link into it. */
const parseHash = () => {
  const [a, b] = window.location.hash.replace(/^#\/?/, '').split('/');
  if (!a) return { tab: 'learn' };
  if (TABS.includes(a)) return { tab: a };
  const s = SUBJECTS.find((x) => x.id === a);
  return s ? { subject: s.id, deep: b || null } : { tab: 'learn' };
};

const readCurrent = () => {
  try { return localStorage.getItem(CURRENT_KEY) || SUBJECTS[0].id; } catch { return SUBJECTS[0].id; }
};

function Hub({ tab }) {
  const ov = useMemo(loadOverview, [tab]);
  const [current, setCurrentState] = useState(readCurrent);
  const setCurrent = (id) => {
    setCurrentState(id);
    try { localStorage.setItem(CURRENT_KEY, id); } catch { /* private mode: the choice just will not persist */ }
  };
  const resetAll = () => {
    if (!window.confirm('Reset ALL progress, XP, streak and mistakes in every subject?')) return;
    const done = () => { window.location.hash = ''; window.location.reload(); };
    if (getStatus().user) { resetEverything().then(done, done); return; } // signed in: reset the saved copy too
    try { SUBJECTS.forEach((s) => localStorage.removeItem(s.storageKey)); } catch { /* ignore */ }
    done();
  };
  const totalDone = Object.values(ov.subjects).reduce((n, s) => n + s.done, 0);
  const totalLessons = Object.values(ov.subjects).reduce((n, s) => n + s.total, 0);

  return (
    <>
      <main id="main" tabIndex={-1} className="mx-auto min-h-screen max-w-xl px-4 pb-28 pt-4 outline-none">
        <header className="flex items-center gap-3">
          <Logo size={40} />
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-2xl font-black leading-none text-brand-dark">IGCSE Quest</h1>
            <p className="mt-0.5 text-xs font-bold text-slate-500">{totalDone} of {totalLessons} lessons done</p>
          </div>
          <AccountButton />
          <ThemeButton />
        </header>
        <div className="mt-3"><StatChips ov={ov} /></div>
        {tab === 'learn' && <Learn subjects={SUBJECTS} ov={ov} current={current} setCurrent={setCurrent} />}
        {tab === 'recall' && <Recall subjects={SUBJECTS} ov={ov} />}
        {tab === 'notes' && <NotesTab subjects={SUBJECTS} ov={ov} />}
        {tab === 'progress' && <Progress subjects={SUBJECTS} ov={ov} onReset={resetAll} />}
        <p className="mt-8 text-center text-xs font-semibold text-slate-500">
          Independent study tool, not affiliated with or endorsed by Cambridge.
        </p>
      </main>
      <BottomNav tab={tab} />
    </>
  );
}

const Loading = () => (
  <div className="grid min-h-screen place-items-center" role="status" aria-live="polite">
    <p className="animate-pulse text-lg font-black text-slate-500">Loading…</p>
  </div>
);

export default function App() {
  const [route, setRoute] = useState(parseHash);

  // keep the browser back button working
  useEffect(() => {
    const onHash = () => { setRoute(parseHash()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const home = () => { window.location.hash = ''; };
  const Active = route.subject ? LOADERS[route.subject] : null;

  return (
    <Suspense fallback={<Loading />}>
      <a href="#main" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
      {Active && <Active key={`${route.subject}:${route.deep || ''}`} onHome={home} deep={route.deep} />}
      {!route.subject && <Hub tab={route.tab} />}
    </Suspense>
  );
}
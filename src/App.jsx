import { useEffect, useState } from 'react';
import { Briefcase, PenLine, Atom, FlaskConical, ArrowRight } from 'lucide-react';
import BusinessApp from './BusinessApp.jsx';
import EnglishApp from './english/EnglishApp.jsx';
import PhysicsApp from './physics/PhysicsApp.jsx';
import { countEnglishDone } from './english/useEnglishProgress.js';
import { allLessons } from './english/data/index.js';

const SUBJECTS = [
  {
    id: 'english',
    hash: '#/english',
    title: 'English as a Second Language',
    code: '0510 / 0511',
    blurb: 'Byte-sized notes and model answers for every writing task: email, review, report, essay and article.',
    tag: 'Notes only',
    icon: PenLine,
    color: '#0ea5e9',
  },
  {
    id: 'physics',
    hash: '#/physics',
    title: 'Physics',
    code: '0625',
    blurb: 'Knowledge bytes with diagrams, tests, and past-paper questions exactly as they appear in the exam.',
    tag: 'Lessons + past papers',
    icon: Atom,
    color: '#6366f1',
  },
  {
    id: 'business',
    hash: '#/business',
    title: 'Business Studies',
    code: '0264',
    blurb: 'Knowledge bytes, tests, mega quizzes, exam-style questions and an exam technique unit.',
    tag: 'Lessons + quizzes',
    icon: Briefcase,
    color: '#58cc02',
  },
];

const routeFromHash = () => SUBJECTS.find((s) => s.hash === window.location.hash)?.id ?? null;

function Hub({ onOpen }) {
  const englishDone = countEnglishDone();
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-black text-brand-dark">IGCSE Quest</h1>
        <p className="mt-2 font-semibold text-slate-600">Pick a subject to start studying.</p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {SUBJECTS.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onOpen(s)}
              className="card group flex h-full w-full flex-col p-5 text-left transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"
            >
              <span className="mb-3 grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ background: s.color }}>
                <s.icon className="h-7 w-7" aria-hidden />
              </span>
              <span className="text-xl font-black leading-tight">{s.title}</span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">{s.code} · {s.tag}</span>
              <span className="mt-2 flex-1 text-sm font-semibold text-slate-600">{s.blurb}</span>
              {s.id === 'english' && englishDone > 0 && (
                <span className="mt-2 text-xs font-extrabold text-sky-700">{englishDone}/{allLessons.length} lessons read</span>
              )}
              <span className="mt-3 flex items-center gap-1 text-sm font-black" style={{ color: s.color }}>
                Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </button>
          </li>
        ))}
        <li>
          <div className="flex h-full flex-col rounded-3xl border-2 border-dashed border-slate-300 p-5 text-slate-400">
            <span className="mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-slate-200"><FlaskConical className="h-7 w-7" aria-hidden /></span>
            <span className="text-xl font-black leading-tight">More subjects</span>
            <span className="mt-2 text-sm font-semibold">Coming soon.</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

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

  if (subject === 'business') return <BusinessApp onHome={home} />;
  if (subject === 'english') return <EnglishApp onHome={home} />;
  if (subject === 'physics') return <PhysicsApp onHome={home} />;
  return <Hub onOpen={open} />;
}

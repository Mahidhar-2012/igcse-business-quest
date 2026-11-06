import { useState } from 'react';
import { LayoutGrid, X, ChevronLeft, ChevronRight, Check, CheckCircle2, Trash2, FileText, Globe } from 'lucide-react';
import { HOWTO, PAPERS, marksOf, TOPIC_LIST, GP_TOTAL } from './data/index.js';
import { useGPProgress } from './useGPProgress.js';
import GPCard from './GPCard.jsx';
import GPPlayer from './GPPlayer.jsx';
import { checkTotal } from '../lib/overview.js';

checkTotal('gp', GP_TOTAL);

function Reader({ lesson, done, onFinish, onExit, onNext }) {
  const [i, setI] = useState(0);
  const total = lesson.cards.length;
  const last = i === total - 1;
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-6">
      <div className="flex items-center gap-3 py-4">
        <button type="button" onClick={onExit} aria-label="Close" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100"><X className="h-6 w-6" /></button>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={i + 1}><div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${((i + 1) / total) * 100}%` }} /></div>
        <span className="text-sm font-extrabold text-slate-500">{i + 1}/{total}</span>
      </div>
      <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">How to answer · {lesson.title}</p>
      <main className="flex-1" key={`${lesson.id}-${i}`}><GPCard card={lesson.cards[i]} no={i + 1} of={total} /></main>
      <div className="sticky bottom-0 -mx-4 mt-6 flex gap-3 border-t-2 border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <button type="button" className="btn btn-ghost" disabled={i === 0} onClick={() => setI(i - 1)}><ChevronLeft className="h-5 w-5" aria-hidden /> Back</button>
        {last ? (
          <>
            <button type="button" className="btn btn-green ml-auto" onClick={() => { onFinish(lesson.id); onExit(); }}><Check className="h-5 w-5" aria-hidden /> {done ? 'Done' : 'Mark as read'}</button>
            {onNext && <button type="button" className="btn btn-blue" onClick={() => { onFinish(lesson.id); onNext(); }}>Next <ChevronRight className="h-5 w-5" aria-hidden /></button>}
          </>
        ) : <button type="button" className="btn btn-blue ml-auto" onClick={() => setI(i + 1)}>Next <ChevronRight className="h-5 w-5" aria-hidden /></button>}
      </div>
    </div>
  );
}

export default function GPApp({ onHome }) {
  const { done, exams, markRead, recordExam, reset } = useGPProgress();
  const [view, setView] = useState({ name: 'dashboard' });
  const pct = Math.round((done.length / GP_TOTAL) * 100);

  if (view.name === 'howto') {
    const idx = HOWTO.indexOf(view.lesson);
    const next = HOWTO[idx + 1];
    return <Reader key={view.lesson.id} lesson={view.lesson} done={done.includes(view.lesson.id)} onFinish={markRead} onExit={() => setView({ name: 'dashboard' })} onNext={next ? () => setView({ name: 'howto', lesson: next }) : null} />;
  }
  if (view.name === 'paper') {
    return <GPPlayer key={view.paper.id} paper={view.paper} onExit={() => setView({ name: 'dashboard' })} onFinish={(pctScore) => recordExam(view.paper.id, pctScore)} />;
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b-2 border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2.5">
          <button type="button" onClick={onHome} aria-label="Back to all subjects" title="All subjects" className="icon-btn"><LayoutGrid className="h-5 w-5" /></button>
          <span className="text-lg font-black text-indigo-700">Global Perspectives</span>
          <span className="ml-auto text-sm font-extrabold text-slate-500">{done.length}/{GP_TOTAL} done · {pct}%</span>
          <button type="button" aria-label="Reset progress" title="Reset progress" onClick={() => { if (window.confirm('Reset your Global Perspectives progress?')) reset(); }} className="icon-btn hover:!bg-rose-50 hover:!text-rose-500"><Trash2 className="h-5 w-5" /></button>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="mx-auto max-w-5xl space-y-8 px-4 py-6 outline-none">
        <section className="rounded-3xl border-2 border-indigo-200 bg-indigo-50 p-5">
          <h1 className="flex items-center gap-2 text-2xl font-black"><Globe className="h-7 w-7 text-indigo-600" aria-hidden /> Global Perspectives (0457)</h1>
          <p className="mt-1 text-sm font-semibold text-slate-600">
            Built around the <b>Written Exam (Component 1)</b>: how to answer every question type, then original mock papers with sources, model answers and self-marking. The exam tests skills, not knowledge of the topic — everything you need is in the sources.
          </p>
          <p className="mt-2 text-xs font-bold text-slate-600">The mock papers are original practice written for this app in the exam’s style, not Cambridge past papers. Your own past papers and teacher feedback remain the final guide.</p>
        </section>

        <section aria-labelledby="h-howto">
          <h2 id="h-howto" className="mb-3 text-xl font-black">How to answer the written exam</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {HOWTO.map((l) => {
              const isDone = done.includes(l.id);
              return (
                <li key={l.id}>
                  <button type="button" onClick={() => setView({ name: 'howto', lesson: l })} className="card flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                    <span className="text-3xl" aria-hidden>{l.emoji}</span>
                    <span className="flex-1"><span className="block font-black leading-tight">{l.title}</span><span className="text-xs font-bold text-slate-500">{l.blurb}</span></span>
                    {isDone && <CheckCircle2 className="h-6 w-6 text-indigo-500" aria-label="Read" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="h-papers">
          <h2 id="h-papers" className="mb-3 text-xl font-black">Mock papers (with mark schemes)</h2>
          <ul className="space-y-3">
            {PAPERS.map((p) => {
              const best = exams[p.id];
              return (
                <li key={p.id}>
                  <button type="button" onClick={() => setView({ name: 'paper', paper: p })} className="card flex w-full items-center gap-4 p-4 text-left transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white" style={{ background: '#4f46e5' }} aria-hidden><FileText className="h-7 w-7" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-black leading-tight">{p.title}</span>
                      <span className="block text-xs font-bold text-slate-500">{p.topic} · {marksOf(p)} marks · {p.minutes} min · self-marked</span>
                      {best > 0 && <span className="text-xs font-extrabold text-indigo-600">Best: {best}%</span>}
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="h-topics">
          <h2 id="h-topics" className="mb-2 text-xl font-black">The topic list</h2>
          <p className="mb-2 text-sm font-semibold text-slate-500">Your exam issue comes from one of these topics. You don’t need to have studied it — the sources give you everything.</p>
          <ul className="flex flex-wrap gap-2">
            {TOPIC_LIST.map((t) => <li key={t} className="rounded-xl border-2 border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700">{t}</li>)}
          </ul>
        </section>
      </main>
    </div>
  );
}

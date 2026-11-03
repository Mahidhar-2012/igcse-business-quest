import { ArrowLeft, ArrowRight, Clock, FileText, ClipboardCheck } from 'lucide-react';
import { paper1Mocks, paper2Mocks, unitPapers, marksOf } from '../data/megaExams.js';

const minutes = (marks) => Math.round(marks * 1.1);

function MockCard({ exam, best, onStart }) {
  const marks = marksOf(exam);
  return (
    <li className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white" style={{ background: '#7c3aed' }} aria-hidden><FileText className="h-7 w-7" /></span>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-black leading-tight">{exam.title}</h3>
        <p className="flex flex-wrap items-center gap-x-3 text-xs font-bold text-slate-500">
          <span>{marks} marks</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden /> about {minutes(marks)} min</span>
          <span>{exam.questions.length} questions</span>
          {best > 0 && <span className="font-extrabold text-violet-600">Best: {best}%</span>}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-600">Covers: {exam.covers.join(' · ')}</p>
      </div>
      <button type="button" className="btn btn-blue !px-4 !py-2 text-sm" onClick={() => onStart(exam)} aria-label={`Start ${exam.title}`}>Start <ArrowRight className="h-4 w-4" aria-hidden /></button>
    </li>
  );
}

/** Whole-syllabus Paper 1 and Paper 2 practice: mock papers, plus every unit's paper unlocked. */
export default function MegaUnit({ onBack, exams = {}, onStart }) {
  const byUnit = [...new Map(unitPapers.map(({ unit }) => [unit.id, unit])).values()];
  return (
    <main id="main" tabIndex={-1} className="mx-auto max-w-3xl space-y-6 px-4 pb-16 pt-4 outline-none">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onBack} aria-label="Back to the units" className="icon-btn"><ArrowLeft className="h-6 w-6" aria-hidden /></button>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-violet-600">Business Studies 0264</p>
          <h1 className="font-display text-3xl font-black leading-tight">Exam Mega Unit</h1>
        </div>
      </div>

      <section className="card space-y-2 p-4 text-sm font-semibold leading-relaxed" aria-label="How it works">
        <p className="font-black">Whole-syllabus Paper 1 and Paper 2 practice, with mark schemes</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Write each answer as you would in the exam. The paper suggests about a minute per mark.</li>
          <li>Show the model answer. It is colour-coded by assessment objective, so you can see where each mark comes from.</li>
          <li>Open the mark scheme points and tick the ones your answer earned. Your score and a breakdown by assessment objective appear at the end.</li>
        </ol>
        <p className="text-slate-500">These are original practice questions written in the style of the papers, not past papers. They use the same question format as the unit practice and do not need every lesson to be finished. Check your own specimen paper for the exact length and mark total of the real papers.</p>
      </section>

      <section aria-label="Paper 1 mock papers">
        <h2 className="mb-1 font-display text-xl font-black">Paper 1 mocks</h2>
        <p className="mb-2 text-sm font-semibold text-slate-500">Short-answer and data-response questions: parts (a) to (d) on each business, from four different units.</p>
        <ul className="space-y-3">{paper1Mocks.map((e) => <MockCard key={e.id} exam={e} best={exams[e.id]} onStart={onStart} />)}</ul>
      </section>

      <section aria-label="Paper 2 mock papers">
        <h2 className="mb-1 font-display text-xl font-black">Paper 2 mocks</h2>
        <p className="mb-2 text-sm font-semibold text-slate-500">Case-study questions: read the case, then answer the 8-mark and 12-mark questions. Each mock uses two case studies.</p>
        <ul className="space-y-3">{paper2Mocks.map((e) => <MockCard key={e.id} exam={e} best={exams[e.id]} onStart={onStart} />)}</ul>
      </section>

      <section aria-label="Practise one unit">
        <h2 className="mb-1 font-display text-xl font-black">Practise one unit</h2>
        <p className="mb-2 text-sm font-semibold text-slate-500">The Paper 1 and Paper 2 questions for a single unit, unlocked.</p>
        <ul className="card divide-y divide-slate-100">
          {byUnit.map((u) => (
            <li key={u.id} className="flex flex-wrap items-center gap-2 p-3">
              <span className="min-w-0 flex-1 font-extrabold leading-tight"><span className="mr-1 text-xs font-extrabold uppercase tracking-wider text-slate-500">Unit {u.number}</span> {u.title}</span>
              {u.exams.map((e) => (
                <button key={e.id} type="button" className="btn btn-ghost !px-3 !py-2 text-xs" onClick={() => onStart(e)} aria-label={`${u.title}, Paper ${e.paper}${exams[e.id] > 0 ? `, best ${exams[e.id]} percent` : ''}`}>
                  <ClipboardCheck className="h-4 w-4" aria-hidden /> Paper {e.paper}{exams[e.id] > 0 ? ` · ${exams[e.id]}%` : ''}
                </button>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

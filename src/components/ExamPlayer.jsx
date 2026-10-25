import { useEffect, useMemo, useRef, useState } from 'react';
import { X, ArrowRight, Eye, ClipboardCheck, Trophy, Clock, FileText, Lightbulb } from 'lucide-react';
import { SoundController } from '../lib/SoundController.js';
import { celebrate } from '../lib/fx.js';

const HINTS = {
  Define: 'Give the precise meaning. For 2 marks: the core definition plus a little extra detail or a short example.',
  Identify: 'Just name it (no explanation needed). One mark per correct item.',
  State: 'Express it clearly and briefly. One mark per correct point.',
  Outline: 'Set out the main points briefly. Usually each point = the point + a short development.',
  Calculate: 'Write the formula and show your working. Marks are often given for method as well as the answer.',
  Explain: 'Make a point, then develop it: because… so… which leads to…. Always apply it to THIS business.',
  Consider: 'Weigh up both sides using the information given, then reach a conclusion.',
  Justify: 'Support your decision with reasons from the case. Include a reason against the alternative, then a clear conclusion.',
  Evaluate: 'Weigh advantages and disadvantages, apply them to the business and give a justified recommendation.',
};

const gradeFor = (pct) =>
  pct >= 80 ? 'A*' : pct >= 70 ? 'A' : pct >= 60 ? 'B' : pct >= 50 ? 'C' : pct >= 40 ? 'D' : pct >= 30 ? 'E' : 'Keep practising';

function Table({ table }) {
  if (!table) return null;
  return (
    <figure className="my-3 overflow-x-auto">
      {table.caption && <figcaption className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-500">{table.caption}</figcaption>}
      <table className="w-full min-w-[18rem] border-collapse text-sm">
        <thead>
          <tr>{table.head.map((h) => <th key={h} className="border-2 border-slate-200 bg-slate-100 px-3 py-1.5 text-left font-extrabold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j} className="border-2 border-slate-200 px-3 py-1.5 font-semibold">{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

const Source = ({ title, paragraphs, table }) => (
  <section className="mb-4 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-4" aria-label="Source material">
    {title && <h3 className="mb-1 flex items-center gap-2 text-sm font-black text-sky-800"><FileText className="h-4 w-4" aria-hidden />{title}</h3>}
    <div className="space-y-2 text-sm font-semibold leading-relaxed text-slate-700">
      {paragraphs?.map((p) => <p key={p}>{p}</p>)}
    </div>
    <Table table={table} />
  </section>
);

function Frame({ onExit, progressPct, score, totalMarks, children, footer }) {
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-4 pb-32 pt-4">
      <div className="mb-5 flex items-center gap-3">
        <button type="button" onClick={onExit} aria-label="Exit exam practice (Esc)" className="rounded-xl p-2 text-slate-400 hover:bg-slate-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
          <X className="h-6 w-6" />
        </button>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progressPct)} aria-label="Exam progress">
          <div className="h-full rounded-full bg-violet-500 transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="text-sm font-extrabold text-violet-600" title="Marks so far">{score}/{totalMarks}</span>
      </div>
      {children}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-slate-200 bg-white/95 px-4 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-2xl justify-end gap-3">{footer}</div>
      </div>
    </div>
  );
}

export default function ExamPlayer({ exam, onExit, onFinish }) {
  const parts = useMemo(
    () => exam.questions.flatMap((q, qi) => q.parts.map((p) => ({ q, qi, p, key: `${qi}${p.label}` }))),
    [exam],
  );
  const totalMarks = useMemo(() => parts.reduce((n, x) => n + x.p.marks, 0), [parts]);

  const [phase, setPhase] = useState('intro');
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [ticks, setTicks] = useState({}); // key -> Set of point indices
  const finished = useRef(false);

  const scoreFor = (x) => {
    const set = ticks[x.key];
    if (!set) return 0;
    const sum = x.p.points.reduce((n, pt, idx) => (set.has(idx) ? n + (pt.m || 1) : n), 0);
    return Math.min(sum, x.p.marks);
  };
  const score = parts.reduce((n, x) => n + scoreFor(x), 0);
  const pct = Math.round((score / totalMarks) * 100);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onExit();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onExit]);

  useEffect(() => {
    if (phase !== 'done' || finished.current) return;
    finished.current = true;
    onFinish(pct, score, totalMarks);
    SoundController.complete();
    if (pct >= 50) celebrate();
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  const cur = parts[i];
  const toggle = (idx) =>
    setTicks((t) => {
      const set = new Set(t[cur.key] || []);
      set.has(idx) ? set.delete(idx) : set.add(idx);
      return { ...t, [cur.key]: set };
    });

  const next = () => {
    SoundController.click();
    if (i + 1 >= parts.length) setPhase('done');
    else setI(i + 1);
    window.scrollTo({ top: 0 });
  };

  const progressPct = phase === 'intro' ? 3 : phase === 'done' ? 100 : Math.max(3, (i / parts.length) * 100);
  // NOTE: Frame lives outside this component so the textarea keeps focus between renders.
  const frame = { onExit, progressPct, score, totalMarks };

  /* ---------- Intro ---------- */
  if (phase === 'intro') {
    return (
      <Frame {...frame} footer={<button type="button" autoFocus className="btn btn-blue" onClick={() => setPhase('work')}>Start <ArrowRight className="h-5 w-5" aria-hidden /></button>}>
        <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-violet-600">{exam.paper === 1 ? 'Paper 1 style · Short answer and data response' : 'Paper 2 style · Case study'}</p>
        <h1 className="mb-3 text-3xl font-black">{exam.title}</h1>
        <div className="mb-4 grid grid-cols-3 gap-3 text-center">
          <div className="card p-3"><p className="text-2xl font-black">{totalMarks}</p><p className="text-xs font-bold text-slate-400">marks</p></div>
          <div className="card p-3"><p className="text-2xl font-black">{parts.length}</p><p className="text-xs font-bold text-slate-400">parts</p></div>
          <div className="card p-3"><p className="flex items-center justify-center gap-1 text-2xl font-black"><Clock className="h-5 w-5" aria-hidden />{Math.round(totalMarks * 1.1)}</p><p className="text-xs font-bold text-slate-400">suggested minutes</p></div>
        </div>
        {exam.intro && <Source title={exam.intro.title} paragraphs={exam.intro.paragraphs} table={exam.intro.table} />}
        <div className="card p-4 text-sm font-semibold leading-relaxed">
          <p className="mb-2 font-black">How this works</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Write your answer for each part as you would in the exam (aim for about one minute per mark).</li>
            <li>Reveal the model answer and mark scheme.</li>
            <li>Tick each mark point your answer really made. Be honest — that is how you find your gaps.</li>
          </ol>
        </div>
      </Frame>
    );
  }

  /* ---------- Results ---------- */
  if (phase === 'done') {
    const byQ = exam.questions.map((q, qi) => {
      const ps = parts.filter((x) => x.qi === qi);
      return { qi, got: ps.reduce((n, x) => n + scoreFor(x), 0), of: ps.reduce((n, x) => n + x.p.marks, 0) };
    });
    const weak = parts.filter((x) => scoreFor(x) / x.p.marks < 0.5).map((x) => `Q${x.qi + 1}(${x.p.label}) ${x.p.command}`);
    return (
      <Frame {...frame} footer={<button type="button" autoFocus className="btn btn-green" onClick={onExit}>Back to map</button>}>
        <div className="card pop p-8 text-center">
          <Trophy className="mx-auto mb-3 h-14 w-14 text-amber-400" aria-hidden />
          <h1 className="text-3xl font-black">{score} / {totalMarks} marks</h1>
          <p className="mt-1 text-lg font-extrabold text-violet-600">{pct}% · {gradeFor(pct)}</p>
          <ul className="mx-auto mt-5 max-w-xs space-y-1 text-left text-sm font-bold">
            {byQ.map((b) => <li key={b.qi} className="flex justify-between border-b border-slate-100 py-1"><span>Question {b.qi + 1}</span><span>{b.got}/{b.of}</span></li>)}
          </ul>
          {weak.length > 0 && (
            <p className="mt-4 text-left text-sm font-semibold text-slate-600"><strong>Revisit:</strong> {weak.join(' · ')}</p>
          )}
          <p className="mt-4 text-xs font-semibold text-slate-400">Self-marked against the mark scheme. Real examiners credit other valid points too.</p>
        </div>
      </Frame>
    );
  }

  /* ---------- Working ---------- */
  const { q, qi, p } = cur;
  const isRevealed = !!revealed[cur.key];
  const got = scoreFor(cur);
  const intro = exam.intro;
  return (
    <Frame
      {...frame}
      footer={
        !isRevealed ? (
          <button type="button" className="btn btn-blue" onClick={() => setRevealed((r) => ({ ...r, [cur.key]: true }))}>
            <Eye className="h-5 w-5" aria-hidden /> Show mark scheme
          </button>
        ) : (
          <button type="button" className="btn btn-green" onClick={next}>
            {i + 1 >= parts.length ? 'Finish' : 'Next part'} <ArrowRight className="h-5 w-5" aria-hidden />
          </button>
        )
      }
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-extrabold text-violet-700">Question {qi + 1}</span>
        <span className="text-xs font-extrabold text-slate-400">Part {i + 1} of {parts.length}</span>
      </div>

      {intro && <details className="mb-3 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-3"><summary className="cursor-pointer text-sm font-black text-sky-800">Case study material (tap to open)</summary><div className="mt-2"><Source title={intro.title} paragraphs={intro.paragraphs} table={intro.table} /></div></details>}
      {(q.stem || q.table) && <Source title={q.stemTitle} paragraphs={q.stem ? [q.stem] : []} table={q.table} />}

      <div className="card p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h2 className="text-lg font-black leading-snug"><span className="mr-2 rounded-lg bg-slate-100 px-2 py-0.5 text-sm">({p.label})</span><span className="text-violet-700">{p.command}</span> {p.text}</h2>
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-800">[{p.marks}]</span>
        </div>
        <p className="mb-3 flex items-start gap-2 text-xs font-semibold text-slate-500"><Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />{HINTS[p.command] || HINTS.Explain}</p>
        <label className="sr-only" htmlFor="answer">Your answer</label>
        <textarea
          id="answer"
          value={answers[cur.key] || ''}
          onChange={(e) => setAnswers((a) => ({ ...a, [cur.key]: e.target.value }))}
          rows={Math.min(12, Math.max(4, p.marks + 1))}
          disabled={isRevealed}
          placeholder="Write your answer here…"
          className="w-full rounded-2xl border-2 border-slate-200 bg-white p-3 text-base font-semibold outline-none focus:border-violet-400 disabled:bg-slate-50"
        />
      </div>

      {isRevealed && (
        <div className="pop mt-4 space-y-4">
          <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-4">
            <h3 className="mb-1 text-sm font-black text-green-800">Model answer</h3>
            <p className="text-sm font-semibold leading-relaxed text-slate-700">{p.model}</p>
          </section>
          <section className="rounded-2xl border-2 border-violet-200 bg-white p-4" aria-label="Mark scheme checklist">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-black text-violet-800"><ClipboardCheck className="h-4 w-4" aria-hidden />Tick every point your answer made — {got}/{p.marks} marks</h3>
            <ul className="space-y-2">
              {p.points.map((pt, idx) => {
                const on = ticks[cur.key]?.has(idx);
                return (
                  <li key={idx}>
                    <label className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-2.5 text-sm font-semibold ${on ? 'border-green-300 bg-green-50' : 'border-slate-200'}`}>
                      <input type="checkbox" checked={!!on} onChange={() => toggle(idx)} className="mt-0.5 h-4 w-4 accent-green-600" />
                      <span className="flex-1">{pt.t}</span>
                      {(pt.m || 1) > 1 && <span className="rounded-full bg-amber-100 px-2 text-xs font-black text-amber-800">{pt.m} marks</span>}
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      )}
    </Frame>
  );
}

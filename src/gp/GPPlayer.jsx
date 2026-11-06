import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { X, ArrowRight, Eye, ClipboardCheck, Trophy, Clock, FileText, Lightbulb, BookOpen } from 'lucide-react';
import { partsOf, marksOf } from './data/index.js';
import { gradeFor } from './data/marks.js';
import { Rich } from './GPCard.jsx';

/* ---------- source booklet ---------- */
function Table({ table }) {
  if (!table) return null;
  return (
    <figure className="my-2 overflow-x-auto">
      {table.caption && <figcaption className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-500">{table.caption}</figcaption>}
      <table className="w-full min-w-[16rem] border-collapse text-sm">
        <thead><tr>{table.head.map((h, i) => <th key={i} className="border-2 border-slate-200 bg-slate-100 px-3 py-1.5 text-left font-extrabold">{h}</th>)}</tr></thead>
        <tbody>{table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className="border-2 border-slate-200 px-3 py-1.5 font-semibold">{c}</td>)}</tr>)}</tbody>
      </table>
    </figure>
  );
}

function Insert({ insert }) {
  const { statements: st } = insert;
  return (
    <div className="space-y-3">
      {insert.note && <p className="rounded-xl border-2 border-amber-300 bg-amber-50 p-2.5 text-xs font-semibold text-amber-900">{insert.note}</p>}
      {insert.sources.map((s) => (
        <section key={s.id} className="rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-4" aria-label={s.id}>
          <p className="text-xs font-extrabold uppercase tracking-widest text-sky-700">{s.id} · {s.kind}</p>
          <h3 className="font-black text-ink">{s.title}</h3>
          {s.byline && <p className="mb-1 text-xs font-semibold italic text-slate-500">{s.byline}</p>}
          <div className="space-y-2 text-sm font-semibold leading-relaxed text-slate-700">{s.paras.map((p) => <p key={p}>{p}</p>)}</div>
          <Table table={s.table} />
        </section>
      ))}
      {st && (
        <section className="rounded-2xl border-2 border-violet-200 bg-violet-50/70 p-4" aria-label="Source 4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-violet-700">Source 4 · Two viewpoints</p>
          <p className="mb-2 text-sm font-semibold text-slate-600">{st.lead}</p>
          {[st.a, st.b].map((v) => (
            <div key={v.name} className="mb-2 rounded-xl border-2 border-white bg-white p-3 last:mb-0">
              <p className="text-sm font-black">{v.name} <span className="font-semibold italic text-slate-500">· {v.role}</span></p>
              {v.paras.map((p) => <p key={p} className="mt-1 text-sm font-semibold leading-relaxed text-slate-700">{p}</p>)}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

function Frame({ onExit, progressPct, score, total, children, footer }) {
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-4 pb-32 pt-4">
      <div className="mb-5 flex items-center gap-3">
        <button type="button" onClick={onExit} aria-label="Exit (Esc)" className="rounded-xl p-2 text-slate-500 hover:bg-slate-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"><X className="h-6 w-6" /></button>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progressPct)} aria-label="Progress"><div className="h-full rounded-full bg-indigo-500 transition-all duration-500" style={{ width: `${progressPct}%` }} /></div>
        <span className="text-sm font-extrabold text-indigo-600" title="Marks so far">{score}/{total}</span>
      </div>
      {children}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-slate-200 bg-white/95 px-4 py-4 backdrop-blur"><div className="mx-auto flex max-w-2xl flex-wrap justify-end gap-3">{footer}</div></div>
    </div>
  );
}

const FORMAT = { points: 'Short answer — a mark for each creditworthy point.', levels: 'Extended answer — marked in levels. Explain, use the source, and reach a judgement.' };

export default function GPPlayer({ paper, onExit, onFinish }) {
  const parts = useMemo(() => partsOf(paper), [paper]);
  const total = useMemo(() => marksOf(paper), [paper]);
  const [phase, setPhase] = useState('intro');
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [ticks, setTicks] = useState({}); // key -> Set(point idx)
  const [levels, setLevels] = useState({}); // key -> level idx
  const finished = useRef(false);

  useEffect(() => { const onKey = (e) => e.key === 'Escape' && onExit(); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, [onExit]);

  const keyOf = (idx) => `k${idx}`;
  const scoreForIdx = (idx) => {
    const { p } = parts[idx];
    const key = keyOf(idx);
    if (p.scheme.type === 'points') {
      const set = ticks[key];
      if (!set) return 0;
      return Math.min(p.marks, [...set].reduce((n, pi) => n + (p.scheme.points[pi]?.m || 0), 0));
    }
    const li = levels[key];
    return li == null ? 0 : p.scheme.levels[li].marks;
  };
  const score = parts.reduce((n, _, idx) => n + scoreForIdx(idx), 0);
  const pct = Math.round((score / total) * 100);

  useEffect(() => {
    if (phase !== 'done' || finished.current) return;
    finished.current = true;
    onFinish(pct, score, total);
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  const progressPct = phase === 'intro' ? 3 : phase === 'done' ? 100 : Math.max(3, (i / parts.length) * 100);
  const frame = { onExit, progressPct, score, total };

  /* ---------- intro ---------- */
  if (phase === 'intro') {
    return (
      <Frame {...frame} footer={<button type="button" autoFocus className="btn btn-blue" onClick={() => setPhase('work')}>Start the paper <ArrowRight className="h-5 w-5" aria-hidden /></button>}>
        <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-indigo-600">Global Perspectives 0457 · Written Exam (mock)</p>
        <h1 className="mb-1 text-3xl font-black">{paper.title}</h1>
        <p className="mb-3 text-sm font-bold text-slate-500">Topic: {paper.topic} · Issue: {paper.issue}</p>
        <div className="mb-4 grid grid-cols-3 gap-3 text-center">
          <div className="card p-3"><p className="text-2xl font-black">{total}</p><p className="text-xs font-bold text-slate-500">marks</p></div>
          <div className="card p-3"><p className="text-2xl font-black">{parts.length}</p><p className="text-xs font-bold text-slate-500">parts</p></div>
          <div className="card p-3"><p className="flex items-center justify-center gap-1 text-2xl font-black"><Clock className="h-5 w-5" aria-hidden />{paper.minutes}</p><p className="text-xs font-bold text-slate-500">minutes</p></div>
        </div>
        <section className="card mb-4 p-4" aria-label="Insert booklet">
          <h2 className="mb-2 flex items-center gap-2 text-lg font-black"><BookOpen className="h-5 w-5 text-sky-600" aria-hidden /> Insert booklet — read the sources</h2>
          <Insert insert={paper.insert} />
        </section>
        <div className="card p-4 text-sm font-semibold leading-relaxed">
          <p className="mb-2 font-black">How this works</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Answer each part as you would in the exam. Everything you need is in the sources — the topic itself is not marked.</li>
            <li>Press “Show model answer” and compare it with yours, part by part.</li>
            <li>Tick the marks you earned (short answers) or choose the level your answer reached (longer answers). Your score and a breakdown appear at the end.</li>
          </ol>
        </div>
      </Frame>
    );
  }

  /* ---------- results ---------- */
  if (phase === 'done') {
    const marked = Object.keys(ticks).length > 0 || Object.keys(levels).length > 0;
    return (
      <Frame {...frame} footer={<button type="button" autoFocus className="btn btn-green" onClick={onExit}>Back</button>}>
        <div className="card pop p-6 text-center">
          <Trophy className="mx-auto mb-2 h-12 w-12 text-amber-400" aria-hidden />
          {marked ? (<><h1 className="text-3xl font-black">{score} / {total} marks</h1><p className="mt-1 text-lg font-extrabold text-indigo-600">{pct}% · {gradeFor(pct)}</p></>)
            : (<><h1 className="text-3xl font-black">Paper complete</h1><p className="mt-1 text-sm font-bold text-slate-500">You didn’t self-mark, so no score is shown. Re-read the model answers and try again.</p></>)}
          <p className="mt-2 text-xs font-semibold text-slate-500">Indicative grade only. Cambridge sets grade boundaries each series.</p>
        </div>
        {marked && (
          <section className="card mt-4 p-5" aria-label="Marks by question">
            <h2 className="mb-3 text-lg font-black">Your marks by question</h2>
            <ul className="space-y-2">
              {paper.questions.map((q) => {
                const idxs = parts.map((x, idx) => ({ ...x, idx })).filter((x) => x.q === q);
                const got = idxs.reduce((n, x) => n + scoreForIdx(x.idx), 0);
                const max = idxs.reduce((n, x) => n + x.p.marks, 0);
                return (
                  <li key={q.n}>
                    <div className="mb-1 flex items-center justify-between text-sm font-extrabold"><span>Question {q.n}</span><span>{got}/{max}</span></div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${max ? (got / max) * 100 : 0}%` }} /></div>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        <section className="card mt-4 p-5" aria-label="Next step">
          <h2 className="mb-2 flex items-center gap-2 text-lg font-black"><Lightbulb className="h-5 w-5 text-amber-500" aria-hidden /> To improve</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm font-semibold text-slate-700">
            <li>Wherever you only described a point, add a sentence explaining <b>why it matters</b>.</li>
            <li>In Questions 3 and 4, check you quoted the source and reached a <b>clear, balanced conclusion</b>.</li>
            <li>Re-read the “How to answer” guidance for any question that lost marks.</li>
          </ul>
        </section>
      </Frame>
    );
  }

  /* ---------- working ---------- */
  const { q, p } = parts[i];
  const key = keyOf(i);
  const isRevealed = !!revealed[key];
  const got = scoreForIdx(i);
  const next = () => { if (i + 1 >= parts.length) setPhase('done'); else setI(i + 1); window.scrollTo({ top: 0 }); };
  const footer = !isRevealed
    ? <button type="button" className="btn btn-blue" onClick={() => setRevealed((r) => ({ ...r, [key]: true }))}><Eye className="h-5 w-5" aria-hidden /> Show model answer</button>
    : <button type="button" className="btn btn-green" onClick={next}>{i + 1 >= parts.length ? 'Finish' : 'Next part'} <ArrowRight className="h-5 w-5" aria-hidden /></button>;

  return (
    <Frame {...frame} footer={footer}>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-extrabold text-indigo-700">Question {q.n}</span>
        <span className="text-xs font-extrabold text-slate-500">Part {i + 1} of {parts.length} · about {q.about}</span>
      </div>
      <details className="mb-3 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-3">
        <summary className="cursor-pointer text-sm font-black text-sky-800">Insert booklet — sources (tap to open)</summary>
        <div className="mt-2"><Insert insert={paper.insert} /></div>
      </details>

      <div className="card p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h2 className="text-lg font-black leading-snug">{p.label && <span className="mr-2 rounded-lg bg-slate-100 px-2 py-0.5 text-sm">({p.label})</span>}<span className="text-indigo-700">{p.command}</span> {p.text}</h2>
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-800">[{p.marks}]</span>
        </div>
        <p className="mb-1 flex items-start gap-2 text-xs font-semibold text-slate-500"><Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />{p.hint}</p>
        <p className="mb-3 text-xs font-semibold text-slate-500">{FORMAT[p.scheme.type]}</p>
        <label className="sr-only" htmlFor="gp-answer">Your answer</label>
        <textarea id="gp-answer" value={answers[key] || ''} onChange={(e) => setAnswers((a) => ({ ...a, [key]: e.target.value }))} rows={p.scheme.type === 'points' ? 4 : 10} disabled={isRevealed} placeholder="Write your answer here…" className="w-full rounded-2xl border-2 border-slate-200 bg-white p-3 text-base font-semibold outline-none focus:border-indigo-400 disabled:bg-slate-50" />
      </div>

      {isRevealed && (
        <div className="pop mt-4 space-y-4">
          <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-4">
            <h3 className="mb-1 text-sm font-black text-green-800">Model answer</h3>
            {p.model.split('\n\n').map((para, k) => <p key={k} className="mb-2 text-sm font-semibold leading-relaxed text-slate-700 last:mb-0">{para}</p>)}
          </section>

          <details className="rounded-2xl border-2 border-indigo-200 bg-white p-4" open>
            <summary className="flex cursor-pointer items-center gap-2 text-sm font-black text-indigo-800"><ClipboardCheck className="h-4 w-4" aria-hidden /> Mark your answer ({got}/{p.marks})</summary>
            <div className="mt-3">
              {p.scheme.type === 'points' ? (
                <ul className="space-y-2">
                  {p.scheme.points.map((pt, idx) => {
                    const on = ticks[key]?.has(idx);
                    return (
                      <li key={idx}>
                        <label className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-2.5 text-sm font-semibold ${on ? 'border-green-300 bg-green-50' : 'border-slate-200'}`}>
                          <input type="checkbox" checked={!!on} onChange={() => setTicks((t) => { const s = new Set(t[key] || []); s.has(idx) ? s.delete(idx) : s.add(idx); return { ...t, [key]: s }; })} className="mt-0.5 h-4 w-4 accent-green-600" />
                          <span className="flex-1">{pt.t}</span>
                          <span className="rounded-full bg-amber-100 px-2 text-xs font-black text-amber-800">{pt.m} mark{pt.m > 1 ? 's' : ''}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <>
                  <p className="mb-2 text-xs font-semibold text-slate-500">Read the levels and choose the one your answer reached. Be honest — it is the best way to see what to add.</p>
                  <ul className="space-y-2">
                    {p.scheme.levels.map((lv, idx) => {
                      const on = levels[key] === idx;
                      return (
                        <li key={idx}>
                          <label className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-2.5 text-sm font-semibold ${on ? 'border-indigo-300 bg-indigo-50' : 'border-slate-200'}`}>
                            <input type="radio" name={`lv-${key}`} checked={on} onChange={() => setLevels((l) => ({ ...l, [key]: idx }))} className="mt-0.5 h-4 w-4 accent-indigo-600" />
                            <span className="flex-1"><b>{lv.band}</b> — {lv.desc}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </details>
        </div>
      )}
    </Frame>
  );
}

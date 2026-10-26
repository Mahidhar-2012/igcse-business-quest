import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { X, ArrowRight, Eye, ClipboardCheck, Trophy, Clock, FileText, Lightbulb, Target, Bot, Loader2, CheckCircle2, XCircle, AlertTriangle, Sparkles } from 'lucide-react';
import { SoundController } from '../lib/SoundController.js';
import { celebrate } from '../lib/fx.js';
import { AO_INFO } from '../data/exams/helpers.js';
import { aiReady, markPart, overallReport } from '../lib/ai.js';
import AiSettingsModal from './AiSettingsModal.jsx';

/* ------------------------------------------------------------------ */
/* Command-word guidance: what the examiner wants + how marks are earned */
/* ------------------------------------------------------------------ */
const HINTS = {
  Define: 'Give a precise meaning (2 AO1 marks). Add a short example in case your definition is vague.',
  Identify: 'Just name it — no explanation needed (1 AO1 mark each).',
  State: 'Say it clearly and briefly (1 AO1 mark each).',
  Calculate: 'Write the formula, show working, give the answer with units. Your numbers count as application.',
  Outline: 'Briefly set out each way: a knowledge point + a business detail (AO1 + AO2). No explanation needed.',
  Explain: 'For EACH way: Knowledge point → Application to this business → Analysis (what → how → effect).',
  Consider: 'Weigh up each option (advantage + disadvantage with impact), then recommend one and reject the others.',
  Justify: 'Make a decision, justify it for THIS business, and reject the alternative(s).',
  Evaluate: 'Weigh the options, make a decision and justify it, rejecting the alternative(s).',
};

const FORMATS = {
  '2': 'Structure: Definition (1) + clarifying detail/example (1).',
  '4': 'Structure: Way 1 = knowledge (1) + application (1). Way 2 = knowledge (1) + application (1).',
  '6': 'Structure: for each way — Knowledge (1) + Application (1) + Analysis (1).',
  '8': 'Structure (8 marks): Knowledge + Application + Analysis for each of two points, then evaluation: choose + justify (1) and reject the alternative (1). OR 4 knowledge + 4 application / analysis — read the command words.',
  '12': 'Structure (12 marks, levels): identify each option (knowledge) → ≥2 analysed paragraphs (advantage AND disadvantage with impact) → conclusion: reject each alternative + justify the best, with application in the case.',
};

const gradeFor = (pct) =>
  pct >= 80 ? 'A*' : pct >= 70 ? 'A' : pct >= 60 ? 'B' : pct >= 50 ? 'C' : pct >= 40 ? 'D' : pct >= 30 ? 'E' : 'Keep practising';

/* Colour-coded model answer: [[K|text]] [[A|text]] [[N|text]] [[E|text]] */
function Model({ text }) {
  const parts = text.split(/(\[\[[KANE]\|.*?\]\])/g).filter(Boolean);
  return (
    <p className="text-sm font-semibold leading-loose text-slate-700">
      {parts.map((p, i) => {
        const m = p.match(/^\[\[([KANE])\|(.*)\]\]$/);
        return m ? (
          <mark key={i} className={`rounded px-1 ${AO_INFO[m[1]].colour}`} title={`${AO_INFO[m[1]].ao} ${AO_INFO[m[1]].name}`}>{m[2]}</mark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        );
      })}
    </p>
  );
}

const Legend = () => (
  <ul className="mb-2 flex flex-wrap gap-2 text-[11px] font-extrabold" aria-label="Colour key">
    {Object.entries(AO_INFO).map(([k, v]) => <li key={k} className={`rounded-full px-2 py-0.5 ${v.colour}`}>{v.ao} {v.name}</li>)}
  </ul>
);

const aoBadge = (k) => <span className={`h-fit shrink-0 rounded px-1 text-[10px] font-black ${AO_INFO[k].colour}`}>{AO_INFO[k].ao}</span>;

/* ------------------------------------------------------------------ */
function Table({ table }) {
  if (!table) return null;
  return (
    <figure className="my-3 overflow-x-auto">
      {table.caption && <figcaption className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-500">{table.caption}</figcaption>}
      <table className="w-full min-w-[18rem] border-collapse text-sm">
        <thead>
          <tr>{table.head.map((h, i) => <th key={i} className="border-2 border-slate-200 bg-slate-100 px-3 py-1.5 text-left font-extrabold">{h}</th>)}</tr>
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
        <div className="mx-auto flex max-w-2xl flex-wrap justify-end gap-3">{footer}</div>
      </div>
    </div>
  );
}

/* AI teacher's marking report for one part */
function AiReport({ r, part }) {
  const rows = ['K', 'A', 'N', 'E'].filter((k) => r.max[k] > 0);
  const groups = rows.map((k) => ({ k, pts: r.markPoints.filter((p) => p.ao === k) })).filter((g) => g.pts.length);
  return (
    <section className="rounded-2xl border-2 border-violet-300 bg-white p-4" aria-label="AI teacher marking">
      <div className="mb-3 flex items-center gap-3">
        <Bot className="h-6 w-6 text-violet-600" aria-hidden />
        <h3 className="flex-1 text-base font-black text-violet-900">AI teacher’s marking</h3>
        <span className="rounded-full bg-violet-600 px-3 py-1 text-lg font-black text-white">{r.total}/{part.marks}</span>
      </div>
      {r.level && <p className="mb-3 rounded-xl bg-amber-50 p-2 text-sm font-extrabold text-amber-900">{r.level}</p>}

      <ul className="mb-4 space-y-2">
        {rows.map((k) => (
          <li key={k}>
            <div className="mb-0.5 flex items-center justify-between text-xs font-extrabold">
              <span className={`rounded-full px-2 py-0.5 ${AO_INFO[k].colour}`}>{AO_INFO[k].ao} · {AO_INFO[k].name}</span>
              <span>{r.awarded[k]}/{r.max[k]}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full" style={{ width: `${(r.awarded[k] / r.max[k]) * 100}%`, background: AO_INFO[k].bar }} /></div>
          </li>
        ))}
      </ul>

      {r.comment && <p className="mb-4 rounded-xl bg-slate-50 p-3 text-sm font-semibold leading-relaxed text-slate-700"><strong>Examiner comment:</strong> {r.comment}</p>}

      <h4 className="mb-2 text-sm font-black">Mark by mark</h4>
      {groups.map((g) => (
        <div key={g.k} className="mb-3">
          <ul className="space-y-2">
            {g.pts.map((p, i) => (
              <li key={i} className={`rounded-xl border-2 p-2.5 text-sm ${p.awarded ? 'border-green-200 bg-green-50' : 'border-rose-200 bg-rose-50'}`}>
                <p className="flex items-start gap-2 font-extrabold">
                  {p.awarded ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-label="Awarded" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" aria-label="Not awarded" />}
                  {aoBadge(p.ao)} <span>{p.description}</span>
                </p>
                {p.evidence && <p className="mt-1 pl-6 text-xs font-semibold italic text-slate-600">“{p.evidence}”</p>}
                {p.comment && <p className="mt-1 pl-6 text-xs font-semibold text-slate-700">{p.comment}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {r.strengths.length > 0 && (
        <div className="mb-3 rounded-xl border-2 border-green-200 bg-green-50 p-3">
          <p className="mb-1 text-sm font-black text-green-800">What you did well</p>
          <ul className="list-disc space-y-1 pl-5 text-sm font-semibold text-slate-700">{r.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      )}

      {r.improvements.length > 0 && (
        <div className="mb-3 rounded-xl border-2 border-amber-200 bg-amber-50 p-3">
          <p className="mb-1 flex items-center gap-1 text-sm font-black text-amber-900"><Lightbulb className="h-4 w-4" aria-hidden /> How to gain more marks</p>
          <ol className="list-decimal space-y-2 pl-5 text-sm font-semibold text-slate-700">
            {r.improvements.map((im, i) => (
              <li key={i}><span className="mr-1">{aoBadge(im.ao)}</span><strong>{im.problem}</strong> <span>{im.fix}</span></li>
            ))}
          </ol>
        </div>
      )}

      {r.upgrade && (
        <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-3">
          <p className="mb-1 flex items-center gap-1 text-sm font-black text-violet-900"><Sparkles className="h-4 w-4" aria-hidden /> Your answer, upgraded</p>
          <p className="text-sm font-semibold leading-relaxed text-slate-700">{r.upgrade}</p>
        </div>
      )}
    </section>
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
  const [ticks, setTicks] = useState({}); // manual self-marking (used only when AI marking is off)
  const [aiRes, setAiRes] = useState({});
  const [busy, setBusy] = useState(false);
  const [aiErr, setAiErr] = useState('');
  const [settings, setSettings] = useState(false);
  const [, bump] = useState(0);
  const [report, setReport] = useState({ busy: false, data: null, error: '' });
  const finished = useRef(false);
  const aiOn = aiReady();

  const earnedBy = (x) => {
    const by = { K: 0, A: 0, N: 0, E: 0 };
    const ai = aiRes[x.key];
    if (ai) return { ...ai.awarded };
    const set = ticks[x.key];
    if (!set) return by;
    x.p.points.forEach((pt, idx) => { if (set.has(idx)) by[pt.ao] += pt.m; });
    const total = by.K + by.A + by.N + by.E;
    if (total > x.p.marks) for (const k of Object.keys(by)) by[k] = (by[k] * x.p.marks) / total;
    return by;
  };
  const scoreFor = (x) => Object.values(earnedBy(x)).reduce((a, b) => a + b, 0);
  const score = Math.round(parts.reduce((n, x) => n + scoreFor(x), 0));
  const pct = Math.round((score / totalMarks) * 100);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && !settings && onExit();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onExit, settings]);

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
    setAiErr('');
    if (i + 1 >= parts.length) setPhase('done');
    else setI(i + 1);
    window.scrollTo({ top: 0 });
  };

  const runAi = async () => {
    setBusy(true);
    setAiErr('');
    try {
      const r = await markPart({ exam, question: cur.q, part: cur.p, answer: answers[cur.key] || '' });
      setAiRes((a) => ({ ...a, [cur.key]: r }));
      setRevealed((v) => ({ ...v, [cur.key]: true }));
      SoundController.success();
    } catch (e) {
      setAiErr(e.message);
      SoundController.error();
    } finally {
      setBusy(false);
    }
  };

  const runReport = async () => {
    setReport({ busy: true, data: null, error: '' });
    try {
      const data = await overallReport({
        exam,
        parts: parts.map((x) => ({ ...x, ai: aiRes[x.key], answer: answers[x.key] || '' })),
      });
      setReport({ busy: false, data, error: '' });
    } catch (e) {
      setReport({ busy: false, data: null, error: e.message });
    }
  };

  const progressPct = phase === 'intro' ? 3 : phase === 'done' ? 100 : Math.max(3, (i / parts.length) * 100);
  const frame = { onExit, progressPct, score, totalMarks };
  const modal = settings && <AiSettingsModal onClose={() => setSettings(false)} onSaved={() => bump((n) => n + 1)} />;

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

        <div className={`card mb-4 flex items-start gap-3 p-4 ${aiOn ? '!border-violet-300' : ''}`}>
          <Bot className="mt-0.5 h-6 w-6 shrink-0 text-violet-600" aria-hidden />
          <div className="flex-1 text-sm font-semibold leading-relaxed">
            <p className="font-black">{aiOn ? 'AI teacher is ready' : 'AI teacher is not set up'}</p>
            <p className="text-slate-600">
              {aiOn
                ? 'After each part, the AI teacher marks your answer by assessment objective, quotes your own words as evidence and shows how to gain the missing marks.'
                : 'Without it you will compare your answer with the model answer yourself. Add an API key to have an expert examiner mark every answer.'}
            </p>
            <button type="button" className="btn btn-ghost mt-2 !px-3 !py-1.5 text-xs" onClick={() => setSettings(true)}>{aiOn ? 'AI settings' : 'Set up AI teacher'}</button>
          </div>
        </div>

        <div className="card p-4 text-sm font-semibold leading-relaxed">
          <p className="mb-2 font-black">How this works</p>
          <Legend />
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>Write your answer as you would in the exam (about a minute per mark).</li>
            <li>{aiOn ? 'Press “Mark with AI teacher”: you get marks per objective, evidence, and fixes.' : 'Press “Show model answer” and compare it with yours.'}</li>
            <li>The colour-coded A* model answer shows where each type of mark comes from.</li>
          </ol>
        </div>
        {modal}
      </Frame>
    );
  }

  /* ---------- Results ---------- */
  if (phase === 'done') {
    const byAo = { K: [0, 0], A: [0, 0], N: [0, 0], E: [0, 0] };
    parts.forEach((x) => {
      const got = earnedBy(x);
      for (const k of Object.keys(byAo)) {
        byAo[k][0] += got[k];
        byAo[k][1] += x.p.points.filter((pt) => pt.ao === k).reduce((n, pt) => n + pt.m, 0);
      }
    });
    const rows = Object.entries(byAo).filter(([, v]) => v[1] > 0).map(([k, [g, a]]) => ({ k, g: Math.round(g * 10) / 10, a, pct: Math.round((g / a) * 100) }));
    const weakest = [...rows].sort((a, b) => a.pct - b.pct).filter((r) => r.pct < 70).slice(0, 2);
    const anyAi = Object.keys(aiRes).length > 0;
    return (
      <Frame {...frame} footer={<button type="button" autoFocus className="btn btn-green" onClick={onExit}>Back to map</button>}>
        <div className="card pop p-6 text-center">
          <Trophy className="mx-auto mb-2 h-12 w-12 text-amber-400" aria-hidden />
          <h1 className="text-3xl font-black">{score} / {totalMarks} marks</h1>
          <p className="mt-1 text-lg font-extrabold text-violet-600">{pct}% · {gradeFor(pct)}</p>
          {anyAi && <p className="mt-1 text-xs font-bold text-slate-400">Marked by the AI teacher{Object.keys(aiRes).length < parts.length ? ` (${Object.keys(aiRes).length} of ${parts.length} parts)` : ''}</p>}
        </div>

        <section className="card mt-4 p-5" aria-label="Assessment objective breakdown">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-black"><Target className="h-5 w-5 text-violet-600" aria-hidden />Your marks by assessment objective</h2>
          <ul className="space-y-3">
            {rows.map((r) => (
              <li key={r.k}>
                <div className="mb-1 flex items-center justify-between text-sm font-extrabold">
                  <span className={`rounded-full px-2 py-0.5 ${AO_INFO[r.k].colour}`}>{AO_INFO[r.k].ao} · {AO_INFO[r.k].name}</span>
                  <span>{r.g}/{r.a} ({r.pct}%)</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: AO_INFO[r.k].bar }} /></div>
                <p className="mt-1 text-xs font-semibold text-slate-500">{AO_INFO[r.k].descriptor}</p>
              </li>
            ))}
          </ul>
        </section>

        {aiOn && anyAi && (
          <section className="card mt-4 p-5" aria-label="Overall teacher report">
            <h2 className="mb-2 flex items-center gap-2 text-lg font-black"><Bot className="h-5 w-5 text-violet-600" aria-hidden />Overall teacher report</h2>
            {!report.data && !report.busy && (
              <button type="button" className="btn btn-blue" onClick={runReport}>Get my teacher’s report</button>
            )}
            {report.busy && <p className="flex items-center gap-2 text-sm font-bold text-slate-500"><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Your teacher is reading all your answers…</p>}
            {report.error && <p className="text-sm font-bold text-rose-700" role="alert">{report.error}</p>}
            {report.data && (
              <div className="space-y-3 text-sm font-semibold text-slate-700">
                <p className="font-black">{report.data.headline}</p>
                <ul className="space-y-1">{report.data.by_ao.map((v) => <li key={v.ao} className="flex gap-2">{aoBadge(v.ao)}<span>{v.verdict}</span></li>)}</ul>
                <div><p className="mb-1 font-black">Your 3 priorities</p><ol className="list-decimal space-y-1 pl-5">{report.data.priorities.map((p) => <li key={p}>{p}</li>)}</ol></div>
                <div><p className="mb-1 font-black">Study plan</p><ol className="list-decimal space-y-1 pl-5">{report.data.study_plan.map((p) => <li key={p}>{p}</li>)}</ol></div>
              </div>
            )}
          </section>
        )}

        {!anyAi && (
          <section className="card mt-4 p-5" aria-label="How to improve">
            <h2 className="mb-2 flex items-center gap-2 text-lg font-black"><Lightbulb className="h-5 w-5 text-amber-500" aria-hidden />How to improve</h2>
            {weakest.length === 0 ? (
              <p className="text-sm font-semibold text-slate-600">Every objective is at 70% or above. Next, check each answer for a missing “how” in the analysis and a clear rejection of the alternative in the evaluation.</p>
            ) : (
              weakest.map((r) => (
                <div key={r.k} className="mb-3 last:mb-0">
                  <p className={`mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-extrabold ${AO_INFO[r.k].colour}`}>Focus: {AO_INFO[r.k].ao} {AO_INFO[r.k].name} ({r.pct}%)</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm font-semibold text-slate-700">{AO_INFO[r.k].tips.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              ))
            )}
          </section>
        )}

        <section className="card mt-4 p-5" aria-label="Part by part">
          <h2 className="mb-2 text-lg font-black">Part by part: what you missed</h2>
          <ul className="space-y-3 text-sm">
            {parts.map((x) => {
              const ai = aiRes[x.key];
              const set = ticks[x.key] || new Set();
              const missed = ai
                ? ai.markPoints.filter((p) => !p.awarded).map((p) => ({ ao: p.ao, t: p.comment ? `${p.description} — ${p.comment}` : p.description }))
                : x.p.points.filter((_, idx) => !set.has(idx)).map((pt) => ({ ao: pt.ao, t: pt.t }));
              return (
                <li key={x.key} className="rounded-xl border-2 border-slate-100 p-3">
                  <p className="flex justify-between font-extrabold"><span>Q{x.qi + 1}({x.p.label}) {x.p.command}</span><span>{Math.round(scoreFor(x) * 10) / 10}/{x.p.marks}</span></p>
                  {missed.length === 0 ? <p className="font-semibold text-green-700">All mark points made.</p> : (
                    <ul className="mt-1 space-y-1">{missed.map((m, k) => <li key={k} className="flex gap-2 font-semibold text-slate-600">{aoBadge(m.ao)}{m.t}</li>)}</ul>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
        {modal}
      </Frame>
    );
  }

  /* ---------- Working ---------- */
  const { q, qi, p } = cur;
  const isRevealed = !!revealed[cur.key];
  const ai = aiRes[cur.key];
  const got = Math.round(scoreFor(cur) * 10) / 10;
  const intro = exam.intro;
  const hasAnswer = (answers[cur.key] || '').trim().length > 0;
  const grouped = ['K', 'A', 'N', 'E'].map((k) => ({ k, items: p.points.map((pt, idx) => ({ pt, idx })).filter(({ pt }) => pt.ao === k) })).filter((g) => g.items.length);

  const footer = !isRevealed ? (
    <>
      {aiOn ? (
        <>
          <button type="button" className="btn btn-ghost" onClick={() => setRevealed((r) => ({ ...r, [cur.key]: true }))} disabled={busy}>
            <Eye className="h-5 w-5" aria-hidden /> Just show model answer
          </button>
          <button type="button" className="btn btn-blue" onClick={runAi} disabled={busy || !hasAnswer} title={hasAnswer ? undefined : 'Write an answer first'}>
            {busy ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : <Bot className="h-5 w-5" aria-hidden />} {busy ? 'Marking…' : 'Mark with AI teacher'}
          </button>
        </>
      ) : (
        <button type="button" className="btn btn-blue" onClick={() => setRevealed((r) => ({ ...r, [cur.key]: true }))}>
          <Eye className="h-5 w-5" aria-hidden /> Show model answer
        </button>
      )}
    </>
  ) : (
    <>
      {aiOn && !ai && (
        <button type="button" className="btn btn-ghost" onClick={runAi} disabled={busy || !hasAnswer}>
          {busy ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : <Bot className="h-5 w-5" aria-hidden />} Mark with AI teacher
        </button>
      )}
      <button type="button" className="btn btn-green" onClick={next} disabled={busy}>
        {i + 1 >= parts.length ? 'Finish' : 'Next part'} <ArrowRight className="h-5 w-5" aria-hidden />
      </button>
    </>
  );

  return (
    <Frame {...frame} footer={footer}>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-extrabold text-violet-700">Question {qi + 1}</span>
        <span className="text-xs font-extrabold text-slate-400">Part {i + 1} of {parts.length}</span>
        <button type="button" onClick={() => setSettings(true)} className="ml-auto flex items-center gap-1 rounded-full border-2 border-slate-200 px-2 py-0.5 text-xs font-extrabold text-slate-500 hover:bg-slate-100">
          <Bot className="h-3.5 w-3.5" aria-hidden /> {aiOn ? 'AI teacher on' : 'Set up AI teacher'}
        </button>
      </div>

      {intro && <details className="mb-3 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-3"><summary className="cursor-pointer text-sm font-black text-sky-800">Case study material (tap to open)</summary><div className="mt-2"><Source title={intro.title} paragraphs={intro.paragraphs} table={intro.table} /></div></details>}
      {(q.stem || q.table) && <Source title={q.stemTitle} paragraphs={q.stem ? [q.stem] : []} table={q.table} />}

      <div className="card p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h2 className="text-lg font-black leading-snug"><span className="mr-2 rounded-lg bg-slate-100 px-2 py-0.5 text-sm">({p.label})</span><span className="text-violet-700">{p.command}</span> {p.text}</h2>
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-800">[{p.marks}]</span>
        </div>
        <p className="mb-1 flex items-start gap-2 text-xs font-semibold text-slate-500"><Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />{HINTS[p.command] || HINTS.Explain}</p>
        <p className="mb-3 text-xs font-semibold text-slate-400">{FORMATS[String(p.marks)]}</p>
        <label className="sr-only" htmlFor="answer">Your answer</label>
        <textarea
          id="answer"
          value={answers[cur.key] || ''}
          onChange={(e) => setAnswers((a) => ({ ...a, [cur.key]: e.target.value }))}
          rows={Math.min(14, Math.max(4, p.marks + 1))}
          disabled={isRevealed || busy}
          placeholder="Write your answer here…"
          className="w-full rounded-2xl border-2 border-slate-200 bg-white p-3 text-base font-semibold outline-none focus:border-violet-400 disabled:bg-slate-50"
        />
      </div>

      {aiErr && (
        <p className="mt-3 flex items-start gap-2 rounded-xl bg-rose-50 p-3 text-sm font-bold text-rose-800" role="alert">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {aiErr}
        </p>
      )}
      {busy && (
        <p className="mt-3 flex items-center gap-2 rounded-xl bg-violet-50 p-3 text-sm font-bold text-violet-800" role="status">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Your teacher is marking your answer against the assessment objectives…
        </p>
      )}

      {isRevealed && (
        <div className="pop mt-4 space-y-4">
          {ai && <AiReport r={ai} part={p} />}

          <details open={!ai} className="rounded-2xl border-2 border-green-200 bg-green-50 p-4">
            <summary className="cursor-pointer text-sm font-black text-green-800">Model answer (colour-coded by assessment objective)</summary>
            <div className="mt-2">
              <Legend />
              <Model text={p.model} />
            </div>
          </details>

          {ai ? (
            <details className="rounded-2xl border-2 border-slate-200 bg-white p-4">
              <summary className="cursor-pointer text-sm font-black text-slate-700">Mark scheme points used as guidance</summary>
              <ul className="mt-2 space-y-1.5 text-sm font-semibold text-slate-600">
                {p.points.map((pt, idx) => <li key={idx} className="flex gap-2">{aoBadge(pt.ao)}<span>{pt.t}{pt.m > 1 ? ` (${pt.m} marks)` : ''}</span></li>)}
              </ul>
            </details>
          ) : (
            <section className="rounded-2xl border-2 border-violet-200 bg-white p-4" aria-label="Mark scheme checklist">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-black text-violet-800"><ClipboardCheck className="h-4 w-4" aria-hidden />Self-mark: tick every point your answer really made — {got}/{p.marks}</h3>
              <p className="mb-2 text-xs font-semibold text-slate-400">Add an API key to have the AI teacher do this for you, strictly and with feedback.</p>
              {grouped.map((g) => (
                <div key={g.k} className="mb-3 last:mb-0">
                  <p className={`mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-extrabold ${AO_INFO[g.k].colour}`}>{AO_INFO[g.k].ao} {AO_INFO[g.k].name}</p>
                  <ul className="space-y-2">
                    {g.items.map(({ pt, idx }) => {
                      const on = ticks[cur.key]?.has(idx);
                      return (
                        <li key={idx}>
                          <label className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-2.5 text-sm font-semibold ${on ? 'border-green-300 bg-green-50' : 'border-slate-200'}`}>
                            <input type="checkbox" checked={!!on} onChange={() => toggle(idx)} className="mt-0.5 h-4 w-4 accent-green-600" />
                            <span className="flex-1">{pt.t}</span>
                            {pt.m > 1 && <span className="rounded-full bg-amber-100 px-2 text-xs font-black text-amber-800">{pt.m} marks</span>}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </section>
          )}
        </div>
      )}
      {modal}
    </Frame>
  );
}

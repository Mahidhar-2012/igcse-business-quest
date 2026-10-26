import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { X, ArrowRight, Eye, ClipboardCheck, Trophy, Clock, FileText, Lightbulb, CheckCircle2, AlertTriangle, Target } from 'lucide-react';
import { SoundController } from '../lib/SoundController.js';
import { celebrate } from '../lib/fx.js';
import { AO_INFO } from '../data/exams/helpers.js';
import { findTerms } from '../data/glossary.js';

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

const STOP = new Set('about above after again against all also although and any are because been before being below between both but can could did does doing down during each few for from further had has have having her here him his how into its just more most not now off once only other our out over own same she should some such than that the their them then there these they this those through too under until very was were what when where which while who whom why will with would your you business businesses company firm explain outline identify define state consider justify calculate give reasons reason ways way using use used suitable likely might may could'.split(' '));

const tokenise = (s) => (s.toLowerCase().match(/[a-z$%0-9][a-z0-9$%.,]*/g) || []).map((w) => w.replace(/[.,]+$/, ''));

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
const plainModel = (t) => t.replace(/\[\[[KANE]\|(.*?)\]\]/g, '$1');

const Legend = () => (
  <ul className="mb-2 flex flex-wrap gap-2 text-[11px] font-extrabold" aria-label="Colour key">
    {Object.entries(AO_INFO).map(([k, v]) => <li key={k} className={`rounded-full px-2 py-0.5 ${v.colour}`}>{v.ao} {v.name}</li>)}
  </ul>
);

/* ------------------------------------------------------------------ */
/* Instant checker: heuristic feedback on the student's own text        */
/* ------------------------------------------------------------------ */
function checkAnswer(text, part, caseWords, questionWords) {
  const clean = text.trim();
  const words = clean ? clean.split(/\s+/).length : 0;
  const aos = new Set(part.points.map((p) => p.ao));
  const countAo = (ao) => part.points.filter((p) => p.ao === ao).length;
  const out = [];
  const add = (ok, msg) => out.push({ ok, msg });

  if (!clean) return [{ ok: false, msg: 'You did not write an answer — in the exam a blank answer scores 0. Always try, even briefly.' }];

  const minWords = { 2: 8, 4: 18, 6: 40, 8: 70, 12: 120 }[part.marks] || part.marks * 8;
  add(words >= minWords, words >= minWords ? `Length is reasonable (${words} words for ${part.marks} marks).` : `Short for ${part.marks} marks (${words} words). Aim for at least ~${minWords}, with each mark point clearly made.`);

  if (aos.has('K')) {
    const terms = [...new Set(findTerms(clean, { allowGeneric: true }).map((h) => h.entry.term))];
    const needed = Math.min(countAo('K'), 2);
    add(terms.length >= needed, terms.length >= needed ? `AO1: you used business terminology (${terms.slice(0, 4).join(', ')}).` : 'AO1: few recognised business keywords. Name the exact syllabus concept (e.g. “economies of scale”, “working capital”).');
    if (part.command === 'Define') {
      add(/e\.g\.|for example|such as|like |for instance/i.test(clean), /e\.g\.|for example|such as|like |for instance/i.test(clean) ? 'AO1: you gave an example, which protects a vague definition.' : 'AO1: add a short example after your definition (e.g. “…, for example underperforming at work”) so it can’t be judged vague.');
    }
  }
  if (aos.has('A')) {
    const used = new Set();
    for (const w of tokenise(clean)) if (caseWords.has(w) && !questionWords.has(w) && !STOP.has(w) && w.length > 3) used.add(w);
    const need = countAo('A');
    const ok = used.size >= need;
    const ideas = [...caseWords].filter((w) => !questionWords.has(w) && !STOP.has(w) && w.length > 4 && !used.has(w)).slice(0, 5);
    add(ok, ok ? `AO2: you linked to the case (${[...used].slice(0, 4).join(', ')}).` : `AO2: you need ${need} application mark(s) from the case. Try details such as: ${ideas.join(', ') || 'what the business sells or does, or numbers in the data'} — but not the business/owner name or words already in the question.`);
  }
  if (aos.has('N')) {
    const links = (clean.match(/\b(because|this means|which means|so that|therefore|as a result|this leads|leads to|which leads|resulting in|results in|this will|this allows|this reduces|this increases|consequently|due to|meaning that)\b/gi) || []).length;
    const need = countAo('N');
    add(links >= need, links >= need ? `AO3: your answer has ${links} reasoning link${links === 1 ? '' : 's'} (WHAT → HOW → EFFECT).` : `AO3: only ${links} reasoning link(s) found, you need about ${need}. After each point add the “how” and the effect: “This means that… which leads to… (e.g. higher profit / better reputation)”.`);
  }
  if (aos.has('E')) {
    const decision = /(best|most important|better|should|recommend|i think|i would|overall|on balance|outweigh|greater than|most suitable|more suitable|the right)/i.test(clean);
    const reject = /(not as|less important|less suitable|rather than|instead of|whereas|not the best|worse|however|but this|alternative|the other)/i.test(clean);
    add(decision, decision ? 'AO4: you made a decision/recommendation.' : 'AO4: no clear decision found. State which option is best (“Option X is best because…”).');
    add(reject, reject ? 'AO4: you contrasted with the alternative (rejection).' : 'AO4: reject the alternative: explain why the other option is less suitable (it is a separate mark).');
  }
  return out;
}

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

  // words from the case / stem / data: used by the application checker
  const caseWordsFor = (x) => {
    const bits = [];
    if (exam.intro) bits.push(...(exam.intro.paragraphs || []), ...(exam.intro.table ? [...exam.intro.table.head, ...exam.intro.table.rows.flat()] : []));
    if (x.q.stem) bits.push(x.q.stem);
    if (x.q.table) bits.push(...x.q.table.head, ...x.q.table.rows.flat());
    return new Set(tokenise(bits.join(' ')).filter((w) => !STOP.has(w)));
  };

  const [phase, setPhase] = useState('intro');
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [ticks, setTicks] = useState({});
  const finished = useRef(false);

  const earnedBy = (x) => {
    const set = ticks[x.key];
    const by = { K: 0, A: 0, N: 0, E: 0 };
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
          <p className="mb-2 font-black">Marked against the Cambridge assessment objectives</p>
          <Legend />
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>Write your answer as you would in the exam (about a minute per mark).</li>
            <li>The app checks it for each objective, then shows a colour-coded model answer.</li>
            <li>Tick the mark points you honestly made. At the end you get a per-objective report and how to improve.</li>
          </ol>
        </div>
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
    return (
      <Frame {...frame} footer={<button type="button" autoFocus className="btn btn-green" onClick={onExit}>Back to map</button>}>
        <div className="card pop p-6 text-center">
          <Trophy className="mx-auto mb-2 h-12 w-12 text-amber-400" aria-hidden />
          <h1 className="text-3xl font-black">{score} / {totalMarks} marks</h1>
          <p className="mt-1 text-lg font-extrabold text-violet-600">{pct}% · {gradeFor(pct)}</p>
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

        <section className="card mt-4 p-5" aria-label="How to improve">
          <h2 className="mb-2 flex items-center gap-2 text-lg font-black"><Lightbulb className="h-5 w-5 text-amber-500" aria-hidden />How to improve</h2>
          {weakest.length === 0 ? (
            <p className="text-sm font-semibold text-slate-600">Every objective is at 70% or above — well done. To push for A*, check each answer for a missing “how” in the analysis and a clear rejection of the alternative in the evaluation.</p>
          ) : (
            weakest.map((r) => (
              <div key={r.k} className="mb-3 last:mb-0">
                <p className={`mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-extrabold ${AO_INFO[r.k].colour}`}>Focus: {AO_INFO[r.k].ao} {AO_INFO[r.k].name} ({r.pct}%)</p>
                <ul className="list-disc space-y-1 pl-5 text-sm font-semibold text-slate-700">{AO_INFO[r.k].tips.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            ))
          )}
        </section>

        <section className="card mt-4 p-5" aria-label="Part by part">
          <h2 className="mb-2 text-lg font-black">Part by part: what you missed</h2>
          <ul className="space-y-3 text-sm">
            {parts.map((x) => {
              const set = ticks[x.key] || new Set();
              const missed = x.p.points.map((pt, idx) => ({ pt, idx })).filter(({ idx }) => !set.has(idx));
              return (
                <li key={x.key} className="rounded-xl border-2 border-slate-100 p-3">
                  <p className="flex justify-between font-extrabold"><span>Q{x.qi + 1}({x.p.label}) {x.p.command}</span><span>{Math.round(scoreFor(x) * 10) / 10}/{x.p.marks}</span></p>
                  {missed.length === 0 ? <p className="text-green-700 font-semibold">All mark points made.</p> : (
                    <ul className="mt-1 space-y-1">{missed.map(({ pt, idx }) => <li key={idx} className="flex gap-2 font-semibold text-slate-600"><span className={`h-fit shrink-0 rounded px-1 text-[10px] font-black ${AO_INFO[pt.ao].colour}`}>{AO_INFO[pt.ao].ao}</span>{pt.t}</li>)}</ul>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-xs font-semibold text-slate-400">Self-marked against the mark scheme. Real examiners credit other valid points too.</p>
        </section>
      </Frame>
    );
  }

  /* ---------- Working ---------- */
  const { q, qi, p } = cur;
  const isRevealed = !!revealed[cur.key];
  const got = Math.round(scoreFor(cur) * 10) / 10;
  const intro = exam.intro;
  const questionWords = new Set(tokenise(`${p.text} ${p.command}`));
  const checks = isRevealed ? checkAnswer(answers[cur.key] || '', p, caseWordsFor(cur), questionWords) : [];
  const grouped = ['K', 'A', 'N', 'E'].map((k) => ({ k, items: p.points.map((pt, idx) => ({ pt, idx })).filter(({ pt }) => pt.ao === k) })).filter((g) => g.items.length);

  return (
    <Frame
      {...frame}
      footer={
        !isRevealed ? (
          <button type="button" className="btn btn-blue" onClick={() => setRevealed((r) => ({ ...r, [cur.key]: true }))}>
            <Eye className="h-5 w-5" aria-hidden /> Check my answer
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
        <p className="mb-1 flex items-start gap-2 text-xs font-semibold text-slate-500"><Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />{HINTS[p.command] || HINTS.Explain}</p>
        <p className="mb-3 text-xs font-semibold text-slate-400">{FORMATS[String(p.marks)]}</p>
        <label className="sr-only" htmlFor="answer">Your answer</label>
        <textarea
          id="answer"
          value={answers[cur.key] || ''}
          onChange={(e) => setAnswers((a) => ({ ...a, [cur.key]: e.target.value }))}
          rows={Math.min(14, Math.max(4, p.marks + 1))}
          disabled={isRevealed}
          placeholder="Write your answer here…"
          className="w-full rounded-2xl border-2 border-slate-200 bg-white p-3 text-base font-semibold outline-none focus:border-violet-400 disabled:bg-slate-50"
        />
      </div>

      {isRevealed && (
        <div className="pop mt-4 space-y-4">
          <section className="rounded-2xl border-2 border-violet-200 bg-white p-4" aria-label="Instant feedback on your answer">
            <h3 className="mb-2 text-sm font-black text-violet-800">Instant feedback on your answer</h3>
            <ul className="space-y-1.5 text-sm font-semibold">
              {checks.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  {c.ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-label="Good" /> : <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-label="Improve" />}
                  <span className={c.ok ? 'text-slate-700' : 'text-amber-900'}>{c.msg}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs font-semibold text-slate-400">Automatic check of structure only — you still tick the real mark points below.</p>
          </section>

          <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-4">
            <h3 className="mb-1 text-sm font-black text-green-800">Model answer (colour-coded by assessment objective)</h3>
            <Legend />
            <Model text={p.model} />
          </section>

          <section className="rounded-2xl border-2 border-violet-200 bg-white p-4" aria-label="Mark scheme checklist">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-black text-violet-800"><ClipboardCheck className="h-4 w-4" aria-hidden />Tick every point your answer really made — {got}/{p.marks} marks</h3>
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
        </div>
      )}
    </Frame>
  );
}

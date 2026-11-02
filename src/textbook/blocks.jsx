import { Fragment, useId, useState } from 'react';
import { Check, X, Lightbulb, TriangleAlert, Compass, Eye } from 'lucide-react';
import { gradeNumeric } from './check.js';

/** **bold** is the only markup content may use. Everything else is plain text. */
export const Rich = ({ text }) => text.split('**').map((s, i) => (i % 2 ? <strong key={i}>{s}</strong> : <Fragment key={i}>{s}</Fragment>));

const btn = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border-2 border-b-4 border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-700 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300';
const btnMain = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border-b-4 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-sky-300 disabled:opacity-50';
const mainStyle = { background: 'var(--btn)', borderColor: 'var(--btn-edge)' };

const Panel = ({ title, kicker, children }) => (
  <section aria-label={title} className="card space-y-3 p-4">
    {kicker && <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">{kicker}</p>}
    <h3 className="font-display text-lg font-black leading-tight">{title}</h3>
    {children}
  </section>
);

/* ---------- simple blocks ---------- */

const CALLOUT = {
  key: { icon: Lightbulb, box: 'border-sky-200 bg-sky-50 text-sky-900', label: 'Key idea' },
  misconception: { icon: TriangleAlert, box: 'border-amber-300 bg-amber-50 text-amber-900', label: 'Common misconception' },
  application: { icon: Compass, box: 'border-emerald-200 bg-emerald-50 text-emerald-900', label: 'Real-world use' },
};

function Callout({ block }) {
  const c = CALLOUT[block.kind];
  const Icon = c.icon;
  return (
    <aside className={`rounded-2xl border-2 p-4 ${c.box}`}>
      <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider"><Icon className="h-4 w-4" aria-hidden /> {c.label}</p>
      <h3 className="mt-1 font-display text-lg font-black leading-tight">{block.title}</h3>
      <p className="mt-1 leading-relaxed"><Rich text={block.text} /></p>
    </aside>
  );
}

function Equation({ block }) {
  return (
    <div role="group" aria-label={`Equation: ${block.say}`} className="rounded-2xl border-2 border-sky-200 bg-sky-50 px-4 py-3 text-center text-sky-900">
      <p aria-hidden="true" className="font-display text-2xl font-black">{block.tex}</p>
      {block.note && <p className="mt-1 text-sm font-semibold">{block.note}</p>}
    </div>
  );
}

function FigureBlock({ id, meta, Draw }) {
  return (
    <figure className="my-1">
      <div className="paper overflow-x-auto rounded-2xl border-2 border-slate-200 p-2">
        <div className="min-w-[520px] sm:min-w-0">{Draw ? <Draw alt={meta.alt} /> : <p className="p-4 font-bold text-rose-700">Figure “{id}” could not be drawn.</p>}</div>
      </div>
      <p className="mt-1 text-xs font-semibold text-slate-500 sm:hidden">Scroll sideways to see the whole figure.</p>
      <figcaption className="mt-2 text-sm font-bold text-slate-600">{meta.caption}</figcaption>
      <details className="mt-1">
        <summary className="inline-flex min-h-11 cursor-pointer items-center text-sm font-extrabold text-brand-dark">Text version of this figure</summary>
        <p className="leading-relaxed text-slate-700">{meta.text}</p>
      </details>
    </figure>
  );
}

/* ---------- worked example ---------- */

function Worked({ block }) {
  const [shown, setShown] = useState(0);
  const n = block.steps.length;
  const done = shown >= n;
  return (
    <Panel title={block.title} kicker="Worked example">
      <p className="leading-relaxed"><Rich text={block.problem} /></p>
      <p className="text-sm font-semibold text-slate-500">Try the first step yourself, then reveal each step to compare. Each step says why it works.</p>
      {shown > 0 && (
        <ol className="space-y-3">
          {block.steps.slice(0, shown).map((s, i) => (
            <li key={i} className="rounded-xl border-2 border-slate-200 p-3">
              <p className="font-bold leading-relaxed"><span className="mr-2 inline-grid h-6 w-6 place-items-center rounded-full bg-slate-200 text-xs font-black text-slate-700">{i + 1}</span><Rich text={s.text} /></p>
              <p className="mt-1 pl-8 text-sm leading-relaxed text-slate-600"><b>Why:</b> <Rich text={s.why} /></p>
            </li>
          ))}
        </ol>
      )}
      {!done ? (
        <div className="flex flex-wrap gap-2">
          <button type="button" className={btnMain} style={mainStyle} onClick={() => setShown(shown + 1)}>{shown === 0 ? 'Show step 1' : `Show step ${shown + 1}`}</button>
          <button type="button" className={btn} onClick={() => setShown(n)}>Show all steps</button>
        </div>
      ) : (
        <div role="status" className="space-y-2">
          <p className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 font-extrabold text-emerald-900"><Rich text={block.answer} /></p>
          <p className="rounded-xl border-2 border-sky-200 bg-sky-50 p-3 text-sm font-semibold leading-relaxed text-sky-900"><b>Is it reasonable?</b> <Rich text={block.check} /></p>
          <button type="button" className={btn} onClick={() => setShown(0)}>Hide steps and try again</button>
        </div>
      )}
    </Panel>
  );
}

/* ---------- interaction: slider tied to a distance–time graph ---------- */

function SliderGraph({ block }) {
  const id = useId();
  const [v, setV] = useState(block.start);
  const [verdict, setVerdict] = useState(null);
  const d = v * block.seconds;
  const X = (t) => 50 + (t / block.seconds) * 280;
  const Y = (m) => 200 - (m / (block.max * block.seconds)) * 180;
  const ticksT = [0, 2, 4, 6, 8, 10];
  const ticksD = [0, 20, 40, 60, 80, 100];
  const fmt = (x) => (Number.isInteger(x) ? String(x) : x.toFixed(1));
  const ink = '#111827';
  return (
    <Panel title={block.title} kicker="Interactive">
      <p className="leading-relaxed"><Rich text={block.prompt} /></p>
      <div className="paper rounded-2xl border-2 border-slate-200 p-2">
        <svg viewBox="0 0 360 240" role="img" aria-label={`Distance–time graph of an object moving at ${fmt(v)} metres per second. After ${block.seconds} seconds it has travelled ${fmt(d)} metres.`} className="mx-auto block h-auto w-full max-w-md" fontFamily="system-ui, sans-serif">
          {ticksT.map((t) => <line key={`t${t}`} x1={X(t)} y1={20} x2={X(t)} y2={200} stroke="#d6d3d1" />)}
          {ticksD.map((m) => <line key={`d${m}`} x1={50} y1={Y(m)} x2={330} y2={Y(m)} stroke="#d6d3d1" />)}
          <line x1="50" y1="200" x2="342" y2="200" stroke={ink} strokeWidth="2" />
          <line x1="50" y1="200" x2="50" y2="10" stroke={ink} strokeWidth="2" />
          {ticksT.map((t) => <text key={`tt${t}`} x={X(t)} y={216} textAnchor="middle" fontSize="12" fill={ink}>{t}</text>)}
          {ticksD.map((m) => <text key={`dt${m}`} x={44} y={Y(m) + 4} textAnchor="end" fontSize="12" fill={ink}>{m}</text>)}
          <text x="190" y="236" textAnchor="middle" fontSize="13" fontWeight="700" fill={ink}>Time (s)</text>
          <text x="10" y="110" textAnchor="middle" fontSize="13" fontWeight="700" fill={ink} transform="rotate(-90 10 110)">Distance (m)</text>
          <line x1={X(0)} y1={Y(0)} x2={X(block.seconds)} y2={Y(d)} stroke="#1d4ed8" strokeWidth="3.5" strokeLinecap="round" />
          <line x1={X(block.seconds)} y1={Y(0)} x2={X(block.seconds)} y2={Y(d)} stroke={ink} strokeWidth="1.5" strokeDasharray="5 4" />
          <circle cx={X(block.seconds)} cy={Y(d)} r="5" fill="#1d4ed8" />
          <text x={X(block.seconds) - 8} y={Math.min(Y(d) - 8, 192)} textAnchor="end" fontSize="13" fontWeight="700" fill={ink}>{fmt(d)} m</text>
        </svg>
      </div>
      <div>
        <label htmlFor={id} className="flex items-baseline justify-between gap-2 text-sm font-extrabold">
          <span>Speed</span><span className="font-display text-lg font-black">{fmt(v)} m/s</span>
        </label>
        <input id={id} type="range" min={block.min} max={block.max} step={block.step} value={v} onChange={(e) => { setV(Number(e.target.value)); setVerdict(null); }} className="mt-1 h-11 w-full cursor-pointer accent-orange-600" aria-describedby={`${id}-out`} />
      </div>
      <p id={`${id}-out`} aria-live="polite" className="rounded-xl border-2 border-sky-200 bg-sky-50 p-3 text-sm font-bold leading-relaxed text-sky-900">
        At {fmt(v)} m/s the object travels {fmt(d)} m in {block.seconds} s. Gradient of the line = {fmt(d)} m ÷ {block.seconds} s = {fmt(v)} m/s, the same as the speed.
      </p>
      <div className="space-y-2 border-t-2 border-slate-200 pt-3">
        <p className="text-sm font-bold"><b>Challenge:</b> {block.target.hint}</p>
        <button type="button" className={btnMain} style={mainStyle} onClick={() => setVerdict(v === block.target.value ? 'right' : 'wrong')}>Check my setting</button>
        {verdict && (
          <p role="status" className={`flex items-start gap-2 rounded-xl border-2 p-3 text-sm font-bold ${verdict === 'right' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-amber-300 bg-amber-50 text-amber-900'}`}>
            {verdict === 'right' ? <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
            <span>{verdict === 'right' ? block.target.right : block.target.wrong}</span>
          </p>
        )}
      </div>
    </Panel>
  );
}

/* ---------- interaction: predict, then reveal ---------- */

function Predict({ block }) {
  const [picked, setPicked] = useState(null);
  const [shown, setShown] = useState(false);
  const pick = picked === null ? null : block.options[picked];
  const reveal = shown || (pick && pick.correct);
  return (
    <Panel title={block.title} kicker="Interactive">
      <p className="leading-relaxed"><Rich text={block.prompt} /></p>
      <div role="group" aria-label="Choose a prediction" className="grid gap-2">
        {block.options.map((o, i) => {
          const on = picked === i;
          return (
            <button key={i} type="button" aria-pressed={on} onClick={() => setPicked(i)}
              className={`choice min-h-11 ${on ? (o.correct ? '!border-emerald-400 !bg-emerald-50' : '!border-amber-400 !bg-amber-50') : ''}`}>
              {o.text}
            </button>
          );
        })}
      </div>
      {pick && (
        <p role="status" className={`flex items-start gap-2 rounded-xl border-2 p-3 text-sm font-bold leading-relaxed ${pick.correct ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-amber-300 bg-amber-50 text-amber-900'}`}>
          {pick.correct ? <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
          <span>{pick.feedback}{!pick.correct && ' Try another choice.'}</span>
        </p>
      )}
      {!reveal && picked !== null && <button type="button" className={btn} onClick={() => setShown(true)}><Eye className="h-4 w-4" aria-hidden /> Show the working</button>}
      {reveal && <div className="space-y-1 rounded-xl border-2 border-sky-200 bg-sky-50 p-3 text-sm font-semibold leading-relaxed text-sky-900">{block.reveal.map((r, i) => <p key={i}><Rich text={r} /></p>)}</div>}
    </Panel>
  );
}

/* ---------- interaction: classify statements ---------- */

function Classify({ block }) {
  const [ans, setAns] = useState({});
  const right = block.items.filter((it, i) => ans[i] === it.group).length;
  const answered = Object.keys(ans).length;
  return (
    <Panel title={block.title} kicker="Interactive">
      <p className="leading-relaxed"><Rich text={block.prompt} /></p>
      <ul className="space-y-3">
        {block.items.map((it, i) => {
          const a = ans[i];
          const ok = a === it.group;
          return (
            <li key={i} className="rounded-xl border-2 border-slate-200 p-3">
              <p className="font-bold leading-relaxed">{it.text}</p>
              <div role="group" aria-label={`Choose a graph for: ${it.text}`} className="mt-2 flex flex-wrap gap-2">
                {block.groups.map((g) => (
                  <button key={g.id} type="button" aria-pressed={a === g.id} onClick={() => setAns((cur) => ({ ...cur, [i]: g.id }))}
                    className={`${btn} ${a === g.id ? (ok ? '!border-emerald-400 !bg-emerald-50 !text-emerald-900' : '!border-amber-400 !bg-amber-50 !text-amber-900') : ''}`}>{g.label}</button>
                ))}
              </div>
              {a && (
                <p role="status" className={`mt-2 flex items-start gap-2 text-sm font-semibold leading-relaxed ${ok ? 'text-emerald-800' : 'text-amber-900'}`}>
                  {ok ? <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
                  <span>{ok ? 'Correct. ' : `Not this one. It belongs to ${block.groups.find((g) => g.id === it.group).label.toLowerCase()}. `}{it.why}</span>
                </p>
              )}
            </li>
          );
        })}
      </ul>
      <p aria-live="polite" className="text-sm font-extrabold text-slate-600">{answered === 0 ? 'Nothing sorted yet.' : `${right} of ${block.items.length} correct so far${answered < block.items.length ? ` (${block.items.length - answered} left)` : ''}.`}</p>
    </Panel>
  );
}

/* ---------- practice ---------- */

function PracticeMcq({ q }) {
  const [picked, setPicked] = useState(null);
  const [open, setOpen] = useState(false);
  const pick = picked === null ? null : q.options[picked];
  return (
    <div className="space-y-2">
      <div role="group" aria-label="Answer choices" className="grid gap-2">
        {q.options.map((o, i) => {
          const on = picked === i;
          return <button key={i} type="button" aria-pressed={on} onClick={() => setPicked(i)} className={`choice min-h-11 ${on ? (o.correct ? '!border-emerald-400 !bg-emerald-50' : '!border-amber-400 !bg-amber-50') : ''}`}>{o.text}</button>;
        })}
      </div>
      {pick && (
        <p role="status" className={`flex items-start gap-2 rounded-xl border-2 p-3 text-sm font-bold leading-relaxed ${pick.correct ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-amber-300 bg-amber-50 text-amber-900'}`}>
          {pick.correct ? <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
          <span>{pick.feedback}{!pick.correct && ' Try another choice.'}</span>
        </p>
      )}
      <Explain open={open || (pick && pick.correct)} onOpen={() => setOpen(true)} steps={null} text={q.explain} />
    </div>
  );
}

function PracticeNum({ q }) {
  const id = useId();
  const [text, setText] = useState('');
  const [res, setRes] = useState(null);
  const [open, setOpen] = useState(false);
  const submit = (e) => { e.preventDefault(); setRes(gradeNumeric(q, text)); };
  const tone = !res ? '' : res.state === 'correct' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-amber-300 bg-amber-50 text-amber-900';
  return (
    <div className="space-y-2">
      <form onSubmit={submit} className="flex flex-wrap items-end gap-2">
        <div>
          <label htmlFor={id} className="block text-sm font-extrabold">Your answer ({q.unit})</label>
          <input id={id} inputMode="decimal" autoComplete="off" value={text} onChange={(e) => { setText(e.target.value); setRes(null); }} className="mt-1 h-11 w-40 rounded-xl border-2 border-slate-300 bg-white px-3 font-bold" />
        </div>
        <button type="submit" className={btnMain} style={mainStyle}>Check</button>
      </form>
      {res && (
        <p role="status" className={`flex items-start gap-2 rounded-xl border-2 p-3 text-sm font-bold leading-relaxed ${tone}`}>
          {res.state === 'correct' ? <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
          <span>{res.state === 'correct' ? `Correct: ${q.answer} ${q.unit}.` : res.feedback}</span>
        </p>
      )}
      <Explain open={open || (res && res.state === 'correct')} onOpen={() => setOpen(true)} steps={q.steps} text={q.explain} />
    </div>
  );
}

function Explain({ open, onOpen, steps, text }) {
  if (!open) return <button type="button" className={btn} onClick={onOpen}><Eye className="h-4 w-4" aria-hidden /> Show worked solution</button>;
  return (
    <div className="space-y-1 rounded-xl border-2 border-sky-200 bg-sky-50 p-3 text-sm font-semibold leading-relaxed text-sky-900">
      {steps && <ol className="list-decimal space-y-0.5 pl-5">{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>}
      <p><Rich text={text} /></p>
    </div>
  );
}

function Practice({ block }) {
  return (
    <div className="space-y-4">
      {block.items.map((q, i) => (
        <section key={q.id} aria-label={`Question ${i + 1}`} className="card space-y-3 p-4">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Question {i + 1} of {block.items.length}</p>
          <p className="font-bold leading-relaxed"><Rich text={q.q} /></p>
          {q.kind === 'mcq' ? <PracticeMcq q={q} /> : <PracticeNum q={q} />}
        </section>
      ))}
    </div>
  );
}

function Retrieval({ block }) {
  const [open, setOpen] = useState({});
  return (
    <ol className="space-y-3">
      {block.prompts.map((p, i) => (
        <li key={i} className="card space-y-2 p-4">
          <p className="font-bold leading-relaxed">{p.q}</p>
          {open[i]
            ? <p role="status" className="rounded-xl border-2 border-sky-200 bg-sky-50 p-3 text-sm font-semibold leading-relaxed text-sky-900"><Rich text={p.a} /></p>
            : <button type="button" className={btn} onClick={() => setOpen((cur) => ({ ...cur, [i]: true }))}><Eye className="h-4 w-4" aria-hidden /> Show answer</button>}
        </li>
      ))}
    </ol>
  );
}

/* ---------- dispatcher ---------- */

export function Block({ block, chapter, figures }) {
  switch (block.type) {
    case 'p': return <p className="text-[1.0625rem] leading-[1.75]"><Rich text={block.text} /></p>;
    case 'list': return <ul className="list-disc space-y-2 pl-6 text-[1.0625rem] leading-[1.7]">{block.items.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ul>;
    case 'eq': return <Equation block={block} />;
    case 'callout': return <Callout block={block} />;
    case 'figure': return <FigureBlock id={block.id} meta={chapter.figures[block.id]} Draw={figures[block.id]} />;
    case 'worked': return <Worked block={block} />;
    case 'practice': return <Practice block={block} />;
    case 'retrieval': return <Retrieval block={block} />;
    case 'interaction':
      if (block.kind === 'slider') return <SliderGraph block={block} />;
      if (block.kind === 'predict') return <Predict block={block} />;
      if (block.kind === 'classify') return <Classify block={block} />;
      return null;
    default: return null;
  }
}

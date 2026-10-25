import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, X, Lightbulb, RotateCcw } from 'lucide-react';

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const Prompt = ({ label, children }) => (
  <div className="mb-5">
    <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-slate-400">{label}</p>
    <h2 className="text-xl font-extrabold leading-snug sm:text-2xl">{children}</h2>
  </div>
);

const Verdict = ({ correct, children }) => (
  <div
    role="status"
    aria-live="polite"
    className={`pop mt-5 rounded-2xl border-2 p-4 ${
      correct ? 'border-green-300 bg-green-50 text-green-900' : 'border-rose-300 bg-rose-50 text-rose-900'
    }`}
  >
    <p className="mb-1 flex items-center gap-2 font-extrabold">
      {correct ? <Check className="h-5 w-5" aria-hidden /> : <X className="h-5 w-5" aria-hidden />}
      {correct ? 'Correct!' : 'Not quite — it will come back in the Boss Fight.'}
    </p>
    <div className="text-sm font-semibold leading-relaxed">{children}</div>
  </div>
);

/** Number-key shortcuts (1..n) while a question is open. */
function useNumberKeys(count, onPick, active) {
  useEffect(() => {
    if (!active) return undefined;
    const handler = (e) => {
      if (e.target instanceof HTMLInputElement) return;
      const n = Number(e.key);
      if (n >= 1 && n <= count) onPick(n - 1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [count, onPick, active]);
}

/* ---------- 1. Multi-choice with distractor analysis ---------- */
export function MultiChoice({ q, onResolve }) {
  const order = useMemo(() => shuffle(q.options.map((_, i) => i)), [q]);
  const [picked, setPicked] = useState(null);
  const resolved = picked !== null;

  const choose = (displayIdx) => {
    if (resolved) return;
    const original = order[displayIdx];
    setPicked(original);
    onResolve(original === q.answer);
  };
  useNumberKeys(order.length, choose, !resolved);

  return (
    <div>
      <Prompt label="Multiple choice">{q.q}</Prompt>
      <ul className="space-y-3">
        {order.map((orig, di) => {
          const opt = q.options[orig];
          const isRight = orig === q.answer;
          const isPicked = picked === orig;
          let style = '';
          if (resolved && isRight) style = '!border-green-400 !bg-green-50';
          else if (resolved && isPicked) style = '!border-rose-400 !bg-rose-50 shake';
          return (
            <li key={orig}>
              <button type="button" className={`choice ${style}`} disabled={resolved} onClick={() => choose(di)}>
                <span className="flex items-start gap-3">
                  <kbd className="mt-0.5 rounded-lg border-2 border-slate-200 px-2 text-xs font-extrabold text-slate-400">
                    {di + 1}
                  </kbd>
                  <span className="flex-1">{opt.text}</span>
                  {resolved && isRight && <Check className="h-5 w-5 text-green-600" aria-label="Correct answer" />}
                  {resolved && isPicked && !isRight && <X className="h-5 w-5 text-rose-600" aria-label="Your answer" />}
                </span>
                {resolved && (
                  <span className={`mt-2 block pl-9 text-sm font-semibold ${isRight ? 'text-green-800' : 'text-slate-600'}`}>
                    {isRight ? '✔ ' : '✘ '}
                    {opt.why}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      {resolved && <Verdict correct={picked === q.answer}>Read why each option is right or wrong above — the distractors are where exam marks are lost.</Verdict>}
    </div>
  );
}

/* ---------- 2. Chain-of-reasoning ordering ---------- */
export function Ordering({ q, onResolve }) {
  const items = useMemo(() => {
    let s = shuffle(q.steps.map((text, i) => ({ text, i })));
    // guarantee it isn't already solved
    for (let tries = 0; tries < 5 && s.every((x, k) => x.i === k); tries++) s = shuffle(s);
    return s;
  }, [q]);
  const [seq, setSeq] = useState([]); // indices into `items`
  const [result, setResult] = useState(null);
  const resolved = result !== null;

  const add = (idx) => !resolved && !seq.includes(idx) && setSeq([...seq, idx]);
  const remove = (idx) => !resolved && setSeq(seq.filter((x) => x !== idx));
  const check = () => {
    const ok = seq.every((idx, pos) => items[idx].i === pos);
    setResult(ok);
    onResolve(ok);
  };
  const full = seq.length === items.length;

  return (
    <div>
      <Prompt label="Put it in order — tap steps in sequence">{q.q}</Prompt>
      <ol className="mb-4 min-h-[3.5rem] space-y-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-3" aria-label="Your sequence">
        {seq.length === 0 && <li className="text-sm font-semibold text-slate-400">Tap the steps below, first step first…</li>}
        {seq.map((idx, pos) => {
          const correctHere = resolved && items[idx].i === pos;
          const wrongHere = resolved && !correctHere;
          return (
            <li key={idx}>
              <button
                type="button"
                onClick={() => remove(idx)}
                disabled={resolved}
                title={resolved ? undefined : 'Tap to remove'}
                className={`choice flex items-center gap-3 ${correctHere ? '!border-green-400 !bg-green-50' : ''} ${wrongHere ? '!border-rose-400 !bg-rose-50' : ''}`}
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-sky-quest text-xs font-extrabold text-white">{pos + 1}</span>
                {items[idx].text}
              </button>
            </li>
          );
        })}
      </ol>
      {!resolved && (
        <>
          <div className="flex flex-wrap gap-2" aria-label="Available steps">
            {items.map((it, idx) => (
              <button key={idx} type="button" className="choice !w-auto" disabled={seq.includes(idx)} onClick={() => add(idx)}>
                {it.text}
              </button>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <button type="button" className="btn btn-green" disabled={!full} onClick={check}>Check order</button>
            <button type="button" className="btn btn-ghost" disabled={!seq.length} onClick={() => setSeq([])}>
              <RotateCcw className="h-4 w-4" aria-hidden /> Reset
            </button>
          </div>
        </>
      )}
      {resolved && (
        <Verdict correct={result}>
          <ol className="mb-2 list-decimal space-y-0.5 pl-5">
            {q.steps.map((s) => <li key={s}>{s}</li>)}
          </ol>
          {q.explain}
        </Verdict>
      )}
    </div>
  );
}

/* ---------- 3. Scenario / case-study bite ---------- */
export function Scenario({ q, onResolve }) {
  const order = useMemo(() => shuffle(q.decisions.map((_, i) => i)), [q]);
  const [picked, setPicked] = useState(null);
  const resolved = picked !== null;
  const choose = (di) => {
    if (resolved) return;
    const orig = order[di];
    setPicked(orig);
    onResolve(q.decisions[orig].best);
  };
  useNumberKeys(order.length, choose, !resolved);

  return (
    <div>
      <Prompt label="Scenario — make the call">{q.q}</Prompt>
      <ul className="space-y-3">
        {order.map((orig, di) => {
          const d = q.decisions[orig];
          const isPicked = picked === orig;
          let style = '';
          if (resolved && isPicked) style = d.best ? '!border-green-400 !bg-green-50' : '!border-rose-400 !bg-rose-50 shake';
          return (
            <li key={orig}>
              <button type="button" className={`choice ${style}`} disabled={resolved} onClick={() => choose(di)}>
                <span className="flex items-start gap-3">
                  <kbd className="mt-0.5 rounded-lg border-2 border-slate-200 px-2 text-xs font-extrabold text-slate-400">{di + 1}</kbd>
                  <span className="flex-1">{d.text}</span>
                </span>
                {resolved && (
                  <span className="mt-2 block pl-9 text-sm font-semibold text-slate-700">
                    <strong>{isPicked ? 'Consequence: ' : 'Had you chosen this: '}</strong>
                    {d.outcome}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      {resolved && (
        <Verdict correct={q.decisions[picked].best}>
          <span className="flex items-start gap-2"><Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{q.explain}</span>
        </Verdict>
      )}
    </div>
  );
}

/* ---------- 4. Formula & calculation checker ---------- */
const parseNumber = (raw) => {
  let s = String(raw).trim().replace(/−/g, '-').replace(/[$,%\s]/g, '');
  const ratio = s.match(/^(-?[\d.]+):1$/);
  if (ratio) s = ratio[1];
  s = s.replace(/[a-z]+$/i, '');
  const n = Number(s);
  return Number.isFinite(n) && s !== '' ? n : null;
};

export function Calculation({ q, onResolve }) {
  const [val, setVal] = useState('');
  const [result, setResult] = useState(null);
  const ref = useRef(null);
  const resolved = result !== null;
  useEffect(() => ref.current?.focus(), []);

  const check = () => {
    const n = parseNumber(val);
    if (n === null) return;
    const ok = Math.abs(n - q.answer) <= q.tol;
    setResult(ok);
    onResolve(ok);
  };
  const onKey = (e) => {
    if (e.key === 'Enter' && !resolved) {
      e.stopPropagation();
      check();
    }
  };

  return (
    <div>
      <Prompt label="Calculate">{q.q}</Prompt>
      <p className="mb-3 rounded-xl bg-sky-50 px-3 py-2 text-sm font-bold text-sky-800">Formula: {q.formula}</p>
      <div className="flex gap-3">
        <input
          ref={ref}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={onKey}
          disabled={resolved}
          inputMode="decimal"
          aria-label="Your numeric answer"
          placeholder="Type your answer"
          className={`w-full rounded-2xl border-2 border-b-4 px-4 py-3 text-lg font-extrabold outline-none focus:border-sky-400 ${
            resolved ? (result ? 'border-green-400 bg-green-50' : 'border-rose-400 bg-rose-50') : 'border-slate-200 bg-white'
          }`}
        />
        {q.unit && <span className="grid place-items-center text-sm font-extrabold text-slate-400">{q.unit}</span>}
        {!resolved && (
          <button type="button" className="btn btn-green" disabled={parseNumber(val) === null} onClick={check}>Check</button>
        )}
      </div>
      {resolved && (
        <Verdict correct={result}>
          <p className="mb-1">Answer: <strong>{q.answer}{q.unit && q.unit !== ': 1' ? ` ${q.unit}` : ''}</strong></p>
          <ol className="list-decimal space-y-0.5 pl-5">{q.steps.map((s) => <li key={s}>{s}</li>)}</ol>
        </Verdict>
      )}
    </div>
  );
}

/* ---------- 5. Rapid-fire True / False / Depends ---------- */
const TFD_OPTIONS = [
  { id: 'true', label: 'True' },
  { id: 'false', label: 'False' },
  { id: 'depends', label: 'Depends on context' },
];

export function TrueFalse({ q, onResolve }) {
  const [picked, setPicked] = useState(null);
  const resolved = picked !== null;
  const choose = (i) => {
    if (resolved) return;
    const id = TFD_OPTIONS[i].id;
    setPicked(id);
    onResolve(id === q.answer);
  };
  useNumberKeys(3, choose, !resolved);

  return (
    <div>
      <Prompt label="Rapid fire — true, false or depends?">“{q.q}”</Prompt>
      <div className="grid gap-3 sm:grid-cols-3">
        {TFD_OPTIONS.map((o, i) => {
          let style = '';
          if (resolved && o.id === q.answer) style = '!border-green-400 !bg-green-50';
          else if (resolved && o.id === picked) style = '!border-rose-400 !bg-rose-50 shake';
          return (
            <button key={o.id} type="button" disabled={resolved} onClick={() => choose(i)} className={`choice text-center ${style}`}>
              <kbd className="mr-2 rounded-lg border-2 border-slate-200 px-2 text-xs font-extrabold text-slate-400">{i + 1}</kbd>
              {o.label}
            </button>
          );
        })}
      </div>
      {resolved && (
        <Verdict correct={picked === q.answer}>
          <p><strong>Answer: {TFD_OPTIONS.find((o) => o.id === q.answer).label}.</strong> {q.explain}</p>
        </Verdict>
      )}
    </div>
  );
}

export const VIEWS = {
  mcq: MultiChoice,
  order: Ordering,
  scenario: Scenario,
  calc: Calculation,
  tfd: TrueFalse,
};

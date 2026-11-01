import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, X, Lightbulb, RotateCcw } from 'lucide-react';
import Figure from './Figure.jsx';

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const AO_CHIP = {
  1: ['AO1 Knowledge', 'bg-yellow-200 text-yellow-900'],
  2: ['AO2 Application', 'bg-sky-200 text-sky-900'],
  3: ['AO3 Analysis', 'bg-green-200 text-green-900'],
  4: ['AO4 Evaluation', 'bg-orange-200 text-orange-900'],
};

const Prompt = ({ label, ao, fig, children }) => (
  <div className="mb-5">
    <p className="mb-2 flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">
      {label}
      {ao && AO_CHIP[ao] && <span className={`rounded-full px-2 py-0.5 normal-case tracking-normal ${AO_CHIP[ao][1]}`}>{AO_CHIP[ao][0]}</span>}
    </p>
    <h2 className="text-xl font-extrabold leading-snug sm:text-2xl">{children}</h2>
    {fig && <Figure fig={fig} />}
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
      <Prompt label="Multiple choice" ao={q.ao} fig={q.fig}>{q.q}</Prompt>
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
                  <kbd className="mt-0.5 rounded-lg border-2 border-slate-200 px-2 text-xs font-extrabold text-slate-500">
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
      <Prompt label="Put it in order — tap steps in sequence" ao={q.ao} fig={q.fig}>{q.q}</Prompt>
      <ol className="mb-4 min-h-[3.5rem] space-y-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-3" aria-label="Your sequence">
        {seq.length === 0 && <li className="text-sm font-semibold text-slate-500">Tap the steps below, first step first…</li>}
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
      <Prompt label="Scenario — make the call" ao={q.ao} fig={q.fig}>{q.q}</Prompt>
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
                  <kbd className="mt-0.5 rounded-lg border-2 border-slate-200 px-2 text-xs font-extrabold text-slate-500">{di + 1}</kbd>
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
      <Prompt label="Calculate" ao={q.ao} fig={q.fig}>{q.q}</Prompt>
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
        {q.unit && <span className="grid place-items-center text-sm font-extrabold text-slate-500">{q.unit}</span>}
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
      <Prompt label="Rapid fire — true, false or depends?" ao={q.ao} fig={q.fig}>“{q.q}”</Prompt>
      <div className="grid gap-3 sm:grid-cols-3">
        {TFD_OPTIONS.map((o, i) => {
          let style = '';
          if (resolved && o.id === q.answer) style = '!border-green-400 !bg-green-50';
          else if (resolved && o.id === picked) style = '!border-rose-400 !bg-rose-50 shake';
          return (
            <button key={o.id} type="button" disabled={resolved} onClick={() => choose(i)} className={`choice text-center ${style}`}>
              <kbd className="mr-2 rounded-lg border-2 border-slate-200 px-2 text-xs font-extrabold text-slate-500">{i + 1}</kbd>
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

/* ---------- Past-paper multiple choice: the question is shown as it appears in the paper ---------- */
export function PaperMCQ({ q, onResolve }) {
  const [picked, setPicked] = useState(null);
  const resolved = picked !== null;
  const letters = ['A', 'B', 'C', 'D'];

  const choose = (i) => {
    if (resolved) return;
    setPicked(i);
    onResolve(i === q.answer);
  };
  useNumberKeys(4, choose, !resolved);

  return (
    <div>
      <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">Past-paper question · {q.src}</p>
      <Figure fig={{ src: q.img, alt: 'Exam question with its diagram and options' }} />
      <p className="mb-2 mt-4 text-sm font-extrabold text-slate-500">Choose your answer</p>
      <ul className="grid grid-cols-4 gap-3">
        {letters.map((L, i) => {
          let style = '';
          if (resolved && i === q.answer) style = '!border-green-400 !bg-green-50';
          else if (resolved && i === picked) style = '!border-rose-400 !bg-rose-50 shake';
          return (
            <li key={L}>
              <button type="button" className={`choice !text-center text-xl font-black ${style}`} disabled={resolved} onClick={() => choose(i)} aria-label={`Option ${L}`}>
                {L}
              </button>
            </li>
          );
        })}
      </ul>
      {resolved && (
        <Verdict correct={picked === q.answer}>
          <p className="mb-1 font-extrabold">The answer is {letters[q.answer]}.</p>
          {q.why}
        </Verdict>
      )}
    </div>
  );
}

/* ---------- Past-paper written question: answer on paper, reveal the mark scheme, self-mark ---------- */
export function PaperWritten({ q, onResolve }) {
  const [shown, setShown] = useState(false);
  const [done, setDone] = useState(false);
  const rate = (good) => {
    if (done) return;
    setDone(true);
    onResolve(good);
  };
  return (
    <div>
      <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">Written question · {q.src}</p>
      <p className="mb-2 text-sm font-bold text-slate-500">Answer it on paper first{q.marks ? ` (${q.marks} marks)` : ''}, then compare with the mark scheme.</p>
      <Figure fig={{ src: q.img, alt: 'Exam question with its diagrams', full: true }} />
      {!shown ? (
        <button type="button" className="btn btn-blue mt-4 w-full" onClick={() => setShown(true)}>Show mark scheme</button>
      ) : (
        <>
          <p className="mb-1 mt-5 text-sm font-extrabold text-green-700">Mark scheme</p>
          <Figure fig={{ src: q.msImg, alt: 'Mark scheme for this question', full: true }} />
          {!done ? (
            <div className="mt-4">
              <p className="mb-2 text-sm font-extrabold text-slate-500">How did you do?</p>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="btn btn-green" onClick={() => rate(true)}>Got most marks</button>
                <button type="button" className="btn btn-red" onClick={() => rate(false)}>Missed marks</button>
              </div>
            </div>
          ) : (
            <Verdict correct={true}>Saved. Questions you marked as missed go to your Mistake Bank so you can retry them.</Verdict>
          )}
        </>
      )}
    </div>
  );
}

/* ---------- 6. Select ALL that apply ---------- */
export function MultiSelect({ q, onResolve }) {
  const order = useMemo(() => shuffle(q.options.map((_, i) => i)), [q]);
  const [sel, setSel] = useState([]);
  const [result, setResult] = useState(null);
  const resolved = result !== null;
  const toggle = (orig) => !resolved && setSel((s) => (s.includes(orig) ? s.filter((x) => x !== orig) : [...s, orig]));
  const check = () => {
    const ok = q.options.every((o, i) => o.correct === sel.includes(i));
    setResult(ok);
    onResolve(ok);
  };
  const needed = q.options.filter((o) => o.correct).length;

  return (
    <div>
      <Prompt label={`Select all that apply${resolved ? '' : ' — tick every correct statement'}`} ao={q.ao} fig={q.fig}>{q.q}</Prompt>
      <ul className="space-y-3">
        {order.map((orig) => {
          const opt = q.options[orig];
          const on = sel.includes(orig);
          let style = on ? '!border-sky-400 !bg-sky-50' : '';
          if (resolved) style = opt.correct ? '!border-green-400 !bg-green-50' : on ? '!border-rose-400 !bg-rose-50' : '';
          return (
            <li key={orig}>
              <button type="button" role="checkbox" aria-checked={on} className={`choice ${style}`} disabled={resolved} onClick={() => toggle(orig)}>
                <span className="flex items-start gap-3">
                  <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 ${on ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-300'}`} aria-hidden>
                    {on && <Check className="h-4 w-4" />}
                  </span>
                  <span className="flex-1">{opt.text}</span>
                </span>
                {resolved && (
                  <span className={`mt-2 block pl-9 text-sm font-semibold ${opt.correct ? 'text-green-800' : 'text-slate-600'}`}>
                    {opt.correct ? '✔ Should be ticked. ' : '✘ Should not be ticked. '}
                    {opt.why}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      {!resolved && (
        <button type="button" className="btn btn-green mt-4" disabled={!sel.length} onClick={check}>Check ({needed} correct)</button>
      )}
      {resolved && <Verdict correct={result}>{q.explain || 'You need every correct statement and none of the wrong ones.'}</Verdict>}
    </div>
  );
}

/* ---------- 7. Match the pairs ---------- */
export function Matching({ q, onResolve }) {
  const right = useMemo(() => {
    let r = shuffle(q.pairs.map((p, i) => ({ text: p.right, i })));
    for (let t = 0; t < 5 && r.every((x, k) => x.i === k); t++) r = shuffle(r);
    return r;
  }, [q]);
  const [chosen, setChosen] = useState(null); // index of left item awaiting a partner
  const [pairing, setPairing] = useState({}); // left index -> right item index (position in `right`)
  const [result, setResult] = useState(null);
  const resolved = result !== null;
  const used = Object.values(pairing);

  const pickLeft = (i) => {
    if (resolved) return;
    if (pairing[i] !== undefined) {
      setPairing(({ [i]: _, ...rest }) => rest);
      setChosen(i);
    } else setChosen(i);
  };
  const pickRight = (pos) => {
    if (resolved || chosen === null || used.includes(pos)) return;
    setPairing((p) => ({ ...p, [chosen]: pos }));
    setChosen(null);
  };
  const full = Object.keys(pairing).length === q.pairs.length;
  const check = () => {
    const ok = q.pairs.every((_, i) => right[pairing[i]].i === i);
    setResult(ok);
    onResolve(ok);
  };

  return (
    <div>
      <Prompt label="Match them up — tap a term, then its partner" ao={q.ao} fig={q.fig}>{q.q}</Prompt>
      <div className="grid gap-4 sm:grid-cols-2">
        <ul className="space-y-2" aria-label="Terms">
          {q.pairs.map((p, i) => {
            const paired = pairing[i] !== undefined;
            const good = resolved && right[pairing[i]]?.i === i;
            const bad = resolved && !good;
            return (
              <li key={p.left}>
                <button
                  type="button"
                  disabled={resolved}
                  onClick={() => pickLeft(i)}
                  className={`choice ${chosen === i ? '!border-sky-400 !bg-sky-50' : ''} ${paired && !resolved ? '!border-indigo-300 !bg-indigo-50' : ''} ${good ? '!border-green-400 !bg-green-50' : ''} ${bad ? '!border-rose-400 !bg-rose-50' : ''}`}
                >
                  <span className="font-extrabold">{p.left}</span>
                  {paired && <span className="mt-1 block text-sm font-semibold text-slate-600">→ {right[pairing[i]].text}</span>}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2" aria-label="Partners">
          {right.map((r, pos) => (
            <li key={r.text}>
              <button type="button" className="choice" disabled={resolved || used.includes(pos) || chosen === null} onClick={() => pickRight(pos)}>
                {r.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {!resolved && <button type="button" className="btn btn-green mt-4" disabled={!full} onClick={check}>Check matches</button>}
      {resolved && (
        <Verdict correct={result}>
          <ul className="mb-2 space-y-1">{q.pairs.map((p) => <li key={p.left}><strong>{p.left}</strong> — {p.right}</li>)}</ul>
          {q.explain}
        </Verdict>
      )}
    </div>
  );
}

/* ---------- 8. Fill the gaps from a word bank ---------- */
export function Cloze({ q, onResolve }) {
  const parts = useMemo(() => q.text.split('___'), [q]);
  const bank = useMemo(() => shuffle([...q.answers, ...q.extras].map((w, i) => ({ w, i }))), [q]);
  const [fills, setFills] = useState(() => parts.slice(1).map(() => null)); // bank positions
  const [result, setResult] = useState(null);
  const resolved = result !== null;
  const nextBlank = fills.indexOf(null);

  const addWord = (pos) => {
    if (resolved || nextBlank === -1 || fills.includes(pos)) return;
    setFills((f) => f.map((x, i) => (i === nextBlank ? pos : x)));
  };
  const clearBlank = (i) => !resolved && setFills((f) => f.map((x, k) => (k === i ? null : x)));
  const check = () => {
    const ok = fills.every((pos, i) => bank[pos].w === q.answers[i]);
    setResult(ok);
    onResolve(ok);
  };

  return (
    <div>
      <Prompt label="Fill the gaps — tap words from the bank" ao={q.ao} fig={q.fig}>{q.q}</Prompt>
      <p className="mb-4 rounded-2xl border-2 border-slate-200 bg-white p-4 text-lg font-semibold leading-loose">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < fills.length && (
              <button
                type="button"
                onClick={() => clearBlank(i)}
                disabled={resolved || fills[i] === null}
                aria-label={fills[i] === null ? `Blank ${i + 1}, empty` : `Blank ${i + 1}: ${bank[fills[i]].w}. Tap to clear`}
                className={`mx-1 inline-block min-w-[5.5rem] rounded-lg border-b-4 px-2 text-center font-extrabold ${
                  resolved
                    ? bank[fills[i]].w === q.answers[i] ? 'border-green-500 bg-green-50 text-green-800' : 'border-rose-500 bg-rose-50 text-rose-800'
                    : fills[i] === null ? 'border-slate-300 bg-slate-100 text-transparent' : 'border-sky-400 bg-sky-50 text-sky-900'
                }`}
              >
                {fills[i] === null ? '____' : bank[fills[i]].w}
              </button>
            )}
          </span>
        ))}
      </p>
      <div className="flex flex-wrap gap-2" aria-label="Word bank">
        {bank.map((b, pos) => (
          <button key={pos} type="button" className="choice !w-auto" disabled={resolved || fills.includes(pos)} onClick={() => addWord(pos)}>
            {b.w}
          </button>
        ))}
      </div>
      {!resolved && <button type="button" className="btn btn-green mt-4" disabled={nextBlank !== -1} onClick={check}>Check</button>}
      {resolved && (
        <Verdict correct={result}>
          <p className="mb-1"><strong>Answer:</strong> {q.answers.join(', ')}.</p>
          {q.explain}
        </Verdict>
      )}
    </div>
  );
}

/* ---------- 9. Written answer, self-marked against a mark scheme (definitions and exam questions) ---------- */
export function ShortAnswer({ q, onResolve }) {
  const [text, setText] = useState('');
  const [shown, setShown] = useState(false);
  const [ticked, setTicked] = useState([]);
  const [done, setDone] = useState(false);
  const need = Math.max(1, Math.ceil(q.points.length * 0.6));
  const finish = () => {
    if (done) return;
    setDone(true);
    onResolve(ticked.length >= need);
  };
  return (
    <div>
      <Prompt label={`${q.kind} · ${q.marks} mark${q.marks > 1 ? 's' : ''}${q.command ? ` · command word: ${q.command}` : ''}`} ao={q.ao} fig={q.fig}>{q.q}</Prompt>
      <label className="mb-1 block text-sm font-extrabold text-slate-500" htmlFor="short-answer">Write your answer, then compare it with the mark scheme.</label>
      <textarea
        id="short-answer"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={shown}
        rows={5}
        className="w-full rounded-2xl border-2 border-b-4 border-slate-200 bg-white p-3 text-base font-semibold outline-none focus:border-sky-400"
        placeholder="Type your answer here (or write it on paper)"
      />
      {!shown && <button type="button" className="btn btn-blue mt-3 w-full" onClick={() => setShown(true)}>Show mark scheme</button>}
      {shown && (
        <div className="mt-4">
          <p className="mb-2 text-sm font-extrabold text-green-700">Mark scheme: tick each point your answer made</p>
          <ul className="space-y-2">
            {q.points.map((pt, i) => {
              const on = ticked.includes(i);
              return (
                <li key={pt}>
                  <button type="button" role="checkbox" aria-checked={on} disabled={done} onClick={() => setTicked((t) => (t.includes(i) ? t.filter((x) => x !== i) : [...t, i]))} className={`choice ${on ? '!border-green-400 !bg-green-50' : ''}`}>
                    <span className="flex items-start gap-3">
                      <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 ${on ? 'border-green-500 bg-green-500 text-white' : 'border-slate-300'}`} aria-hidden>{on && <Check className="h-4 w-4" />}</span>
                      <span className="flex-1">{pt}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-900"><strong>Model answer:</strong> {q.model}</p>
          {!done ? (
            <button type="button" className="btn btn-green mt-4 w-full" onClick={finish}>Save my mark ({ticked.length}/{q.marks})</button>
          ) : (
            <Verdict correct={ticked.length >= need}>
              You scored {ticked.length} out of {q.marks}. {ticked.length >= need ? 'Good: that is a secure answer.' : 'This goes to your Mistake Bank so you can try it again.'} Be honest when you tick: the only person who loses out from generous marking is you.
            </Verdict>
          )}
        </div>
      )}
    </div>
  );
}

export const VIEWS = {
  multi: MultiSelect,
  match: Matching,
  cloze: Cloze,
  short: ShortAnswer,
  paper: PaperMCQ,
  written: PaperWritten,
  mcq: MultiChoice,
  order: Ordering,
  scenario: Scenario,
  calc: Calculation,
  tfd: TrueFalse,
};

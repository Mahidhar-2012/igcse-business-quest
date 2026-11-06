import { useMemo, useState } from 'react';
import { X, Eye, PenLine, ClipboardCheck, Lightbulb, Trophy } from 'lucide-react';
import { Rich } from './EnglishCard.jsx';
import { CONTENT_BANDS, LANGUAGE_BANDS, CONTENT_MAX, LANGUAGE_MAX, WRITING_MAX, writingVerdict } from './data/writingMarks.js';

const Bands = ({ title, max, bands, value, onPick, accent }) => (
  <fieldset className="rounded-2xl border-2 border-slate-200 p-3">
    <legend className="px-1 text-sm font-black">{title} <span className="font-bold text-slate-500">(out of {max})</span></legend>
    <ul className="space-y-2">
      {bands.map((b, i) => {
        const on = value === i;
        return (
          <li key={i}>
            <label className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-2.5 text-sm font-semibold ${on ? `${accent}` : 'border-slate-200'}`}>
              <input type="radio" name={title} checked={on} onChange={() => onPick(i)} className="mt-0.5 h-4 w-4 accent-sky-600" />
              <span className="flex-1"><b>{b.band}</b> — {b.desc}</span>
            </label>
          </li>
        );
      })}
    </ul>
  </fieldset>
);

export default function EnglishWriting({ task, best, onExit, onScore }) {
  const [text, setText] = useState('');
  const [shown, setShown] = useState(false);
  const [content, setContent] = useState(null);
  const [language, setLanguage] = useState(null);

  // Hide any rubric lines baked into older sample prompts (mark splits / word limits); the app states these itself,
  // consistently with the current 15-mark (6 Content + 9 Language) scheme.
  const taskLines = useMemo(
    () => task.task.filter((line) => !/you will receive up to|marks? for (the )?(content|style|language)|style and accuracy of your language|should be between \d+ and \d+ words|\bbetween \d+ and \d+ words long|\b\d+ (and|to) \d+ words long/i.test(line)),
    [task],
  );
  const words = useMemo(() => text.trim().split(/\s+/).filter(Boolean).length, [text]);
  const marked = content !== null && language !== null;
  const total = (content !== null ? CONTENT_BANDS[content].marks : 0) + (language !== null ? LANGUAGE_BANDS[language].marks : 0);
  const verdict = writingVerdict(total);

  const pickContent = (i) => { setContent(i); if (language !== null) onScore(CONTENT_BANDS[i].marks + LANGUAGE_BANDS[language].marks); };
  const pickLanguage = (i) => { setLanguage(i); if (content !== null) onScore(CONTENT_BANDS[content].marks + LANGUAGE_BANDS[i].marks); };

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-4 pb-16 pt-4">
      <div className="mb-4 flex items-center gap-3">
        <button type="button" onClick={onExit} aria-label="Back to writing tasks" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"><X className="h-6 w-6" /></button>
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-widest text-sky-700">Writing practice · {task.type} · Exercise {task.ex}</p>
          <h1 className="truncate text-xl font-black leading-tight">{task.title}</h1>
        </div>
        {best > 0 && <span className="ml-auto shrink-0 rounded-full bg-sky-100 px-3 py-1 text-xs font-extrabold text-sky-700">Best: {best}/{WRITING_MAX}</span>}
      </div>

      <section className="rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-4" aria-label="Task">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-sky-800">Your task</p>
        <div className="space-y-1.5 text-sm font-semibold leading-relaxed text-slate-700">{taskLines.map((t, i) => <p key={i}><Rich text={t} /></p>)}</div>
        <p className="mt-2 text-xs font-bold text-slate-500">Marked out of {WRITING_MAX}: {CONTENT_MAX} for Content and {LANGUAGE_MAX} for Language. The model answer is {task.modelWords} words — aim for a similar length.</p>
      </section>

      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between">
          <label htmlFor="writing" className="text-sm font-extrabold">Write your answer</label>
          <span className={`text-xs font-bold ${words === 0 ? 'text-slate-400' : 'text-slate-500'}`}>{words} word{words === 1 ? '' : 's'}</span>
        </div>
        <textarea id="writing" value={text} onChange={(e) => setText(e.target.value)} rows={12} placeholder="Type your answer here, as you would in the exam…" className="w-full rounded-2xl border-2 border-slate-200 bg-white p-3 text-base font-semibold leading-relaxed outline-none focus:border-sky-400" />
      </div>

      {!shown ? (
        <button type="button" className="btn btn-blue mt-4 w-full" onClick={() => setShown(true)}><Eye className="h-5 w-5" aria-hidden /> Show model answer & mark scheme</button>
      ) : (
        <div className="pop mt-4 space-y-4">
          <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-4" aria-label="Model answer">
            <p className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-green-800"><PenLine className="h-4 w-4" aria-hidden /> A* model answer <span className="font-bold text-green-700">· {task.modelWords} words</span></p>
            {task.model.map((p, i) => <p key={i} className="mb-2 text-sm font-semibold leading-loose text-slate-700 last:mb-0"><Rich text={p} /></p>)}
          </section>

          {task.why.length > 0 && (
            <section className="rounded-2xl border-2 border-slate-200 bg-white p-4" aria-label="Why it works">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-black"><Lightbulb className="h-4 w-4 text-amber-500" aria-hidden /> Why it works</h3>
              <ul className="space-y-1.5 text-sm font-semibold leading-snug text-slate-700">{task.why.map((w) => <li key={w} className="flex gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" aria-hidden /><span><Rich text={w} /></span></li>)}</ul>
            </section>
          )}

          <section className="rounded-2xl border-2 border-sky-200 bg-white p-4" aria-label="Mark your answer">
            <h3 className="mb-1 flex items-center gap-2 text-sm font-black text-sky-800"><ClipboardCheck className="h-4 w-4" aria-hidden /> Mark your own answer</h3>
            <p className="mb-3 text-xs font-semibold text-slate-500">Compare your answer with the model, then choose the band that honestly fits for each. Be strict — it is the fastest way to improve.</p>
            <div className="space-y-3">
              <Bands title="Content" max={CONTENT_MAX} bands={CONTENT_BANDS} value={content} onPick={pickContent} accent="border-green-300 bg-green-50" />
              <Bands title="Language" max={LANGUAGE_MAX} bands={LANGUAGE_BANDS} value={language} onPick={pickLanguage} accent="border-sky-300 bg-sky-50" />
            </div>
          </section>

          {marked && (
            <section className="card pop p-5 text-center" aria-live="polite">
              <Trophy className="mx-auto mb-1 h-10 w-10 text-amber-400" aria-hidden />
              <p className="text-2xl font-black">{total} / {WRITING_MAX} marks</p>
              <p className="mt-1 font-extrabold text-sky-600">{verdict.pct}% · {verdict.label}</p>
              <p className="mt-2 text-xs font-semibold text-slate-500">Indicative only — your teacher’s marking and your own past papers are the real guide.</p>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

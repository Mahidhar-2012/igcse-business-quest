import { Fragment } from 'react';
import { BookOpen, ThumbsUp, ThumbsDown, Lightbulb, PenLine } from 'lucide-react';

/** Renders **bold** and {{phrase}} markup. */
export function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\{\{.*?\}\})/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i} className="font-black text-ink">{part.slice(2, -2)}</strong>;
    if (part.startsWith('{{')) return <mark key={i} className="rounded bg-amber-200/80 px-1 font-bold text-amber-950">{part.slice(2, -2)}</mark>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

const Label = ({ icon: Icon, children, color = 'text-sky-600' }) => (
  <p className={`mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest ${color}`}>
    <Icon className="h-4 w-4" aria-hidden /> {children}
  </p>
);

function Note({ card }) {
  return (
    <ul className="space-y-3 text-lg font-semibold leading-snug text-slate-700">
      {card.points.map((p) => (
        <li key={p} className="flex gap-3">
          <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-quest" aria-hidden />
          <span><Rich text={p} /></span>
        </li>
      ))}
    </ul>
  );
}

function Steps({ card }) {
  return (
    <ol className="space-y-3">
      {card.items.map((s, i) => (
        <li key={s} className="flex gap-3 rounded-2xl border-2 border-slate-200 bg-white p-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-quest text-sm font-black text-white">{i + 1}</span>
          <span className="pt-0.5 text-base font-semibold leading-snug text-slate-700"><Rich text={s} /></span>
        </li>
      ))}
    </ol>
  );
}

function Dont({ card }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-4">
        <p className="mb-2 flex items-center gap-1 text-xs font-extrabold uppercase text-green-700"><ThumbsUp className="h-3.5 w-3.5" aria-hidden /> Do</p>
        <ul className="space-y-1.5 text-sm font-semibold text-slate-700">
          {card.doList.map((t) => <li key={t}>+ <Rich text={t} /></li>)}
        </ul>
      </section>
      <section className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-4">
        <p className="mb-2 flex items-center gap-1 text-xs font-extrabold uppercase text-rose-700"><ThumbsDown className="h-3.5 w-3.5" aria-hidden /> Avoid</p>
        <ul className="space-y-1.5 text-sm font-semibold text-slate-700">
          {card.avoidList.map((t) => <li key={t}>− <Rich text={t} /></li>)}
        </ul>
      </section>
    </div>
  );
}

function Bank({ card }) {
  return (
    <div className="space-y-3">
      {card.groups.map((g) => (
        <section key={g.label} className="rounded-2xl border-2 border-amber-200 bg-amber-50/70 p-4">
          <h3 className="mb-2 text-sm font-black text-amber-900">{g.label}</h3>
          <ul className="flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
            {g.items.map((it) => <li key={it} className="rounded-xl bg-white px-3 py-1.5 shadow-sm"><Rich text={it} /></li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}

function Model({ card }) {
  return (
    <div className="space-y-4">
      <section className="rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-4 text-sm font-semibold leading-relaxed text-slate-700" aria-label="Task">
        <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-sky-700">Task</p>
        {[].concat(card.task).map((t) => <p key={t} className="mb-1.5 last:mb-0"><Rich text={t} /></p>)}
        {card.words && <p className="mt-2 text-xs font-extrabold text-slate-500">{card.words}</p>}
      </section>
      <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-4" aria-label="Model answer">
        <p className="mb-2 flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-green-700"><PenLine className="h-4 w-4" aria-hidden /> Model answer</p>
        {card.paras.map((p) => (
          <p key={p} className="mb-3 text-sm font-semibold leading-loose text-slate-700 last:mb-0"><Rich text={p} /></p>
        ))}
      </section>
      {card.why.length > 0 && <section className="rounded-2xl border-2 border-slate-200 bg-white p-4" aria-label="Why it works">
        <h3 className="mb-2 flex items-center gap-2 text-sm font-black"><Lightbulb className="h-4 w-4 text-amber-500" aria-hidden /> Notes</h3>
        <ul className="space-y-1.5 text-sm font-semibold leading-snug text-slate-700">
          {card.why.map((w) => (
            <li key={w} className="flex gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" aria-hidden /><span><Rich text={w} /></span></li>
          ))}
        </ul>
      </section>}
    </div>
  );
}

const BODY = { note: Note, steps: Steps, dont: Dont, bank: Bank, model: Model };
const KIND = { note: 'Note', steps: 'Steps', dont: 'Do & avoid', bank: 'Phrase bank', model: 'Model answer' };

export default function EnglishCard({ card, no, of }) {
  const Body = BODY[card.type] || Note;
  return (
    <div className="pop">
      <Label icon={BookOpen}>{KIND[card.type]} · byte {no} of {of}</Label>
      <h2 className="mb-4 text-2xl font-black leading-tight">{card.title}</h2>
      <Body card={card} />
    </div>
  );
}

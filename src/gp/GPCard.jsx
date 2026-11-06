import { Fragment } from 'react';
import { BookOpen, ThumbsUp, ThumbsDown, ListChecks, Quote, Lightbulb } from 'lucide-react';

/** Renders **bold** and {{highlight}} markup as elements (never raw HTML). */
export function Rich({ text }) {
  return String(text).split(/(\*\*[^*]+\*\*|\{\{.*?\}\})/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i} className="font-black text-ink">{part.slice(2, -2)}</strong>;
    if (part.startsWith('{{')) return <mark key={i} className="rounded bg-amber-200/80 px-1 font-bold text-amber-950">{part.slice(2, -2)}</mark>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

const Note = ({ card }) => (
  <ul className="space-y-3 text-lg font-semibold leading-snug text-slate-700">
    {card.points.map((p) => (
      <li key={p} className="flex gap-3"><span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: 'var(--brand)' }} aria-hidden /><span><Rich text={p} /></span></li>
    ))}
  </ul>
);

const Steps = ({ card }) => (
  <div className="space-y-3">
    {card.intro && <p className="text-base font-semibold text-slate-600"><Rich text={card.intro} /></p>}
    <ol className="space-y-3">
      {card.items.map((s, i) => (
        <li key={s} className="flex gap-3 rounded-2xl border-2 border-slate-200 bg-white p-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ background: 'var(--brand)' }}>{i + 1}</span>
          <span className="pt-0.5 text-base font-semibold leading-snug text-slate-700"><Rich text={s} /></span>
        </li>
      ))}
    </ol>
  </div>
);

const Dont = ({ card }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-4">
      <p className="mb-2 flex items-center gap-1 text-xs font-extrabold uppercase text-green-700"><ThumbsUp className="h-3.5 w-3.5" aria-hidden /> Do</p>
      <ul className="space-y-1.5 text-sm font-semibold text-slate-700">{card.doList.map((t) => <li key={t}>+ <Rich text={t} /></li>)}</ul>
    </section>
    <section className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-4">
      <p className="mb-2 flex items-center gap-1 text-xs font-extrabold uppercase text-rose-700"><ThumbsDown className="h-3.5 w-3.5" aria-hidden /> Avoid</p>
      <ul className="space-y-1.5 text-sm font-semibold text-slate-700">{card.avoidList.map((t) => <li key={t}>− <Rich text={t} /></li>)}</ul>
    </section>
  </div>
);

const Stems = ({ card }) => (
  <div className="space-y-3">
    {card.intro && <p className="text-base font-semibold text-slate-600"><Rich text={card.intro} /></p>}
    <ul className="space-y-2">
      {card.items.map((s) => (
        <li key={s} className="flex gap-2 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-3 text-base font-semibold text-slate-700"><Quote className="mt-1 h-4 w-4 shrink-0 text-sky-500" aria-hidden /><span><Rich text={s} /></span></li>
      ))}
    </ul>
  </div>
);

const Concepts = ({ card }) => (
  <div className="space-y-3">
    {card.intro && <p className="text-base font-semibold text-slate-600"><Rich text={card.intro} /></p>}
    <dl className="divide-y divide-slate-100 rounded-2xl border-2 border-slate-200 bg-white">
      {card.rows.map(([term, meaning]) => (
        <div key={term} className="p-3"><dt className="font-black text-ink">{term}</dt><dd className="text-sm font-semibold leading-snug text-slate-600"><Rich text={meaning} /></dd></div>
      ))}
    </dl>
  </div>
);

const BODY = { note: Note, steps: Steps, dont: Dont, stems: Stems, concepts: Concepts };
const KIND = { note: 'Key points', steps: 'Method', dont: 'Do & avoid', stems: 'Sentence starters', concepts: 'Key words' };
const ICON = { note: BookOpen, steps: ListChecks, dont: Lightbulb, stems: Quote, concepts: BookOpen };

export default function GPCard({ card, no, of }) {
  const Body = BODY[card.type] || Note;
  const Icon = ICON[card.type] || BookOpen;
  return (
    <div className="pop">
      <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-indigo-700"><Icon className="h-4 w-4" aria-hidden /> {KIND[card.type]} · byte {no} of {of}</p>
      <h2 className="mb-4 text-2xl font-black leading-tight">{card.title}</h2>
      <Body card={card} />
    </div>
  );
}

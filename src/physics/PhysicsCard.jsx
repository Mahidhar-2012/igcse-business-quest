import { Fragment } from 'react';
import { BookOpen, Sparkles, Sigma } from 'lucide-react';
import Figure from '../components/Figure.jsx';

/** **bold** key terms and {{phrase}} highlights. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\{\{.*?\}\})/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**')) return <mark key={i} className="rounded bg-amber-200/80 px-1 font-extrabold text-amber-950">{part.slice(2, -2)}</mark>;
    if (part.startsWith('{{')) return <strong key={i} className="font-black text-ink">{part.slice(2, -2)}</strong>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function PhysicsCard({ card, no, of, recap, hasPractice }) {
  const hasTest = (card.tests?.length || 0) > 0;
  return (
    <div className="pop">
      <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-sky-600">
        {recap ? <Sparkles className="h-4 w-4" aria-hidden /> : <BookOpen className="h-4 w-4" aria-hidden />}
        {recap ? (hasPractice ? 'Recap · then a practice round' : 'Recap') : hasTest ? `Knowledge byte ${no} of ${of} · read it, then you’ll be tested` : `Knowledge byte ${no} of ${of}`}
      </p>
      <h2 className="mb-4 text-2xl font-black leading-tight">{card.title}</h2>

      {card.fig && !card.figAfter && <Figure fig={card.fig} />}
      <ul className="space-y-3 text-lg font-semibold leading-snug text-slate-700">
        {card.points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-quest" aria-hidden />
            <span><Rich text={p} /></span>
          </li>
        ))}
      </ul>
      {card.fig && card.figAfter && <Figure fig={card.fig} />}

      {card.eq?.length > 0 && (
        <aside className="mt-5 rounded-2xl border-2 border-violet-200 bg-violet-50 p-4" aria-label="Equations">
          <p className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-violet-700">
            <Sigma className="h-4 w-4" aria-hidden /> Equations to know
          </p>
          <ul className="space-y-1 text-base font-black text-violet-950">
            {card.eq.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </aside>
      )}
    </div>
  );
}

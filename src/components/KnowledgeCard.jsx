import { Fragment, useMemo } from 'react';
import { BookOpen, Sparkles, ThumbsUp, ThumbsDown, KeyRound } from 'lucide-react';
import { findTerms } from '../data/glossary.js';

/**
 * Turns text with **bold** segments into render-ready parts and highlights glossary terms.
 * `seen` (Set of lowercased term names) means each term is only highlighted once per card;
 * `found` collects the terms in order of appearance for the Key terms box.
 */
function annotate(text, seen, found) {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part) => {
    const bold = part.startsWith('**');
    const body = bold ? part.slice(2, -2) : part;
    const segs = [];
    let cursor = 0;
    for (const h of findTerms(body, { allowGeneric: bold })) {
      const key = h.entry.term.toLowerCase();
      if (seen.has(key) || h.start < cursor) continue;
      seen.add(key);
      found.push(h.entry);
      if (h.start > cursor) segs.push({ text: body.slice(cursor, h.start) });
      segs.push({ text: h.text, entry: h.entry });
      cursor = h.end;
    }
    if (cursor < body.length) segs.push({ text: body.slice(cursor) });
    return { bold, segs };
  });
}

function Rich({ parts }) {
  return parts.map((part, pi) => {
    const inner = part.segs.map((s, si) =>
      s.entry ? (
        <mark key={si} title={s.entry.def} className="rounded bg-amber-200/80 px-1 font-extrabold text-amber-950">{s.text}</mark>
      ) : (
        <Fragment key={si}>{s.text}</Fragment>
      ),
    );
    return part.bold ? <strong key={pi} className="font-black text-ink">{inner}</strong> : <Fragment key={pi}>{inner}</Fragment>;
  });
}

const Header = ({ recap, no, of, pc }) => (
  <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-sky-600">
    {recap ? <Sparkles className="h-4 w-4" aria-hidden /> : <BookOpen className="h-4 w-4" aria-hidden />}
    {recap ? 'Recap · then a practice round' : pc ? `Advantages & disadvantages · byte ${no} of ${of}` : `Knowledge byte ${no} of ${of} · read it, then you’ll be tested`}
  </p>
);

function KeyTerms({ terms }) {
  if (!terms.length) return null;
  return (
    <aside className="mt-6 rounded-2xl border-2 border-amber-200 bg-amber-50 p-4" aria-label="Key terms">
      <p className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-700">
        <KeyRound className="h-4 w-4" aria-hidden /> Key terms
      </p>
      <dl className="space-y-2 text-sm leading-snug">
        {terms.map((t) => (
          <div key={t.term}>
            <dt className="inline font-black text-amber-950">{t.term}</dt>
            <dd className="inline font-semibold text-slate-700"> — {t.def}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export default function KnowledgeCard({ card, no, of, recap }) {
  const view = useMemo(() => {
    const seen = new Set();
    const found = [];
    let body;
    if (card.options) {
      body = {
        options: card.options.map((o) => ({
          name: annotate(o.name, seen, found),
          pros: o.pros.map((p) => ({ raw: p, parts: annotate(p, seen, found) })),
          cons: o.cons.map((p) => ({ raw: p, parts: annotate(p, seen, found) })),
        })),
      };
    } else {
      body = { points: card.points.map((p) => ({ raw: p, parts: annotate(p, seen, found) })) };
    }
    // also surface key terms named only in the title
    for (const h of findTerms(card.title, { allowGeneric: true })) {
      const key = h.entry.term.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        found.push(h.entry);
      }
    }
    return { body, terms: found };
  }, [card]);

  return (
    <div className="pop">
      <Header recap={recap} no={no} of={of} pc={!!card.options} />
      <h2 className="mb-4 text-2xl font-black leading-tight">{card.title}</h2>

      {view.body.options ? (
        <div className="space-y-4">
          {view.body.options.map((o, oi) => (
            <section key={oi} className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white">
              <h3 className="border-b-2 border-slate-100 bg-slate-50 px-4 py-2 text-base font-black"><Rich parts={o.name} /></h3>
              <div className="grid sm:grid-cols-2">
                <div className="border-b-2 border-green-100 bg-green-50/60 p-3 sm:border-b-0 sm:border-r-2">
                  <p className="mb-1 flex items-center gap-1 text-xs font-extrabold uppercase text-green-700"><ThumbsUp className="h-3.5 w-3.5" aria-hidden /> Advantages</p>
                  <ul className="space-y-1 text-sm font-semibold text-slate-700">
                    {o.pros.map((p) => <li key={p.raw}>+ <Rich parts={p.parts} /></li>)}
                  </ul>
                </div>
                <div className="bg-rose-50/60 p-3">
                  <p className="mb-1 flex items-center gap-1 text-xs font-extrabold uppercase text-rose-700"><ThumbsDown className="h-3.5 w-3.5" aria-hidden /> Disadvantages</p>
                  <ul className="space-y-1 text-sm font-semibold text-slate-700">
                    {o.cons.map((p) => <li key={p.raw}>− <Rich parts={p.parts} /></li>)}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <ul className="space-y-3 text-lg font-semibold leading-snug text-slate-700">
          {view.body.points.map((p) => (
            <li key={p.raw} className="flex gap-3">
              <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-quest" aria-hidden />
              <span><Rich parts={p.parts} /></span>
            </li>
          ))}
        </ul>
      )}

      <KeyTerms terms={view.terms} />
    </div>
  );
}

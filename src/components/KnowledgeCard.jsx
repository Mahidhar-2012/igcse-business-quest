import { Fragment, useMemo } from 'react';
import { BookOpen, Sparkles, ThumbsUp, ThumbsDown, KeyRound } from 'lucide-react';
import { findTerms } from '../data/glossary.js';

/**
 * Turns text with **bold** segments into render-ready parts and highlights glossary terms.
 * `seen` (Set of lowercased term names) means each term is only highlighted once per card;
 * `found` collects the terms in order of appearance for the Key terms box.
 */
function annotate(text, seen, found) {
  // [[K|text]] [[A|text]] [[N|text]] [[E|text]] segments are rendered as objective-coloured highlights
  return text.split(/(\[\[[KANE]\|.*?\]\]|\*\*[^*]+\*\*)/g).filter(Boolean).map((part) => {
    const aoMatch = part.match(/^\[\[([KANE])\|(.*)\]\]$/);
    if (aoMatch) return { ao: aoMatch[1], segs: [{ text: aoMatch[2] }] };
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
    if (part.ao) return <mark key={pi} className={`rounded px-1 ${AO_KEY[part.ao][1]}`} title={AO_KEY[part.ao][0]}>{inner}</mark>;
    return part.bold ? <strong key={pi} className="font-black text-ink">{inner}</strong> : <Fragment key={pi}>{inner}</Fragment>;
  });
}

const Header = ({ recap, no, of, pc, example, hasTest, hasPractice }) => (
  <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-sky-600">
    {recap ? <Sparkles className="h-4 w-4" aria-hidden /> : <BookOpen className="h-4 w-4" aria-hidden />}
    {recap
      ? hasPractice ? 'Recap · then a practice round' : 'Recap'
      : example
        ? `Worked A* answer · byte ${no} of ${of}`
        : pc
          ? `Advantages & disadvantages · byte ${no} of ${of}`
          : hasTest
            ? `Knowledge byte ${no} of ${of} · read it, then you’ll be tested`
            : `Knowledge byte ${no} of ${of}`}
  </p>
);

const AO_KEY = {
  K: ['AO1 Knowledge', 'bg-yellow-200 text-yellow-900'],
  A: ['AO2 Application', 'bg-sky-200 text-sky-900'],
  N: ['AO3 Analysis', 'bg-green-200 text-green-900'],
  E: ['AO4 Evaluation', 'bg-orange-200 text-orange-900'],
};

/** Colour-coded model answer: [[K|text]] [[A|text]] [[N|text]] [[E|text]] */
function ColouredAnswer({ text }) {
  return text.split(/(\[\[[KANE]\|.*?\]\])/g).filter(Boolean).map((p, i) => {
    const m = p.match(/^\[\[([KANE])\|(.*)\]\]$/);
    return m ? (
      <mark key={i} className={`rounded px-1 ${AO_KEY[m[1]][1]}`} title={AO_KEY[m[1]][0]}>{m[2]}</mark>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    );
  });
}

const boldify = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((p, i) => (p.startsWith('**') ? <strong key={i} className="font-black text-ink">{p.slice(2, -2)}</strong> : <Fragment key={i}>{p}</Fragment>));

function Worked({ ex }) {
  return (
    <div className="space-y-4">
      {ex.stem && (
        <section className="rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-4 text-sm font-semibold leading-relaxed text-slate-700" aria-label="Case">
          {ex.stem}
        </section>
      )}
      <section className="rounded-2xl border-2 border-violet-200 bg-white p-4" aria-label="Question">
        <div className="flex items-start justify-between gap-3">
          <p className="font-black leading-snug">{ex.question}</p>
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-800">[{ex.marks}]</span>
        </div>
        {ex.map && <p className="mt-2 text-xs font-extrabold text-slate-500">Marks: {ex.map}</p>}
      </section>
      <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-4" aria-label="A star model answer">
        <h3 className="mb-2 text-sm font-black text-green-800">A* answer, colour-coded by objective</h3>
        <ul className="mb-3 flex flex-wrap gap-2 text-[11px] font-extrabold" aria-label="Colour key">
          {Object.values(AO_KEY).map(([label, cls]) => <li key={label} className={`rounded-full px-2 py-0.5 ${cls}`}>{label}</li>)}
        </ul>
        {ex.answer.map((para, i) => (
          <p key={i} className="mb-2 text-sm font-semibold leading-loose text-slate-700 last:mb-0"><ColouredAnswer text={para} /></p>
        ))}
      </section>
      {ex.notes?.length > 0 && (
        <section className="rounded-2xl border-2 border-slate-200 bg-white p-4" aria-label="Why this scores">
          <h3 className="mb-2 text-sm font-black">Why this earns full marks</h3>
          <ul className="space-y-1.5 text-sm font-semibold leading-snug text-slate-700">
            {ex.notes.map((n) => <li key={n} className="flex gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" aria-hidden /><span>{boldify(n)}</span></li>)}
          </ul>
        </section>
      )}
    </div>
  );
}

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

export default function KnowledgeCard({ card, no, of, recap, hasPractice }) {
  const view = useMemo(() => {
    const seen = new Set();
    const found = [];
    let body;
    if (card.example) {
      body = { example: card.example };
    } else if (card.options) {
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
      <Header recap={recap} no={no} of={of} pc={!!card.options} example={!!card.example} hasTest={(card.tests?.length || 0) > 0} hasPractice={hasPractice} />
      <h2 className="mb-4 text-2xl font-black leading-tight">{card.title}</h2>

      {view.body.example ? (
        <Worked ex={view.body.example} />
      ) : view.body.options ? (
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

      {!view.body.example && <KeyTerms terms={view.terms} />}
    </div>
  );
}

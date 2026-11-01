import { Fragment, useMemo, useState } from 'react';
import { ArrowLeft, Printer, FileText, CheckSquare, Square } from 'lucide-react';
import Figure from '../components/Figure.jsx';

/** **bold** key terms are highlighted; {{phrase}} is emphasised. */
function Rich({ text }) {
  return String(text).split(/(\*\*[^*]+\*\*|\{\{.*?\}\}|\*[^*]+\*)/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**')) return <mark key={i}>{part.slice(2, -2)}</mark>;
    if (part.startsWith('{{')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Everything a cheat sheet needs from one lesson, taken from the bytes already in the course. */
function lessonNotes(sub) {
  const defs = [];
  const seen = new Set();
  const collect = (q) => {
    if (q?.type === 'short' && q.kind === 'Definition' && q.model && !seen.has(q.q)) {
      seen.add(q.q);
      defs.push({ q: q.q.replace(/^(Define|State) (the term )?/i, '').replace(/[“”".]/g, '').trim(), model: q.model });
    }
  };
  (sub.challenges || []).forEach(collect);
  sub.cards.forEach((c) => (c.tests || []).forEach(collect));
  return { defs };
}

const countBytes = (units, ids) => units.flatMap((u) => u.submodules).filter((s) => ids.has(s.id)).reduce((n, s) => n + s.cards.length, 0);

function ByteBlock({ card, opts }) {
  const hasContent = card.points || card.options || card.example;
  if (!hasContent) return null;
  return (
    <section className="nb">
      <h4>{card.title}</h4>
      {opts.figures && card.fig && !card.figAfter && <Figure fig={card.fig} className="nfig" />}
      {card.points && (
        <ul>
          {card.points.map((p) => <li key={p}><Rich text={p} /></li>)}
        </ul>
      )}
      {card.options && (
        <div className="npc">
          {card.options.map((o) => (
            <div key={o.name}>
              <b>{o.name}</b>
              <p className="pro">+ {o.pros.join('; ')}</p>
              <p className="con">− {o.cons.join('; ')}</p>
            </div>
          ))}
        </div>
      )}
      {card.example && (
        <p className="nex"><b>Worked example:</b> {card.example.question} ({card.example.marks} marks)</p>
      )}
      {opts.figures && card.fig && card.figAfter && <Figure fig={card.fig} className="nfig" />}
      {opts.equations && card.eq?.length > 0 && (
        <p className="neq">{card.eq.join('   •   ')}</p>
      )}
    </section>
  );
}

function Sheet({ title, code, units, ids, opts }) {
  const chosen = units.map((u) => ({ ...u, subs: u.submodules.filter((s) => ids.has(s.id)) })).filter((u) => u.subs.length);
  return (
    <article className={`notes-sheet ${opts.twoCol ? 'two-col' : ''}`}>
      <header className="nhead">
        <h1>{title} cheat sheet{code ? ` · ${code}` : ''}</h1>
        <p>
          {chosen.length > 4 ? `${chosen.length} units, ${chosen.reduce((n, u) => n + u.subs.length, 0)} lessons` : chosen.map((u) => `Unit ${u.number}: ${u.title}`).join(' · ')}
        </p>
      </header>
      {chosen.map((u) => (
        <div key={u.id}>
          {u.subs.map((sub) => {
            const { defs } = lessonNotes(sub);
            return (
              <div key={sub.id} className="nlesson">
                <h2><span>{sub.syllabus ? `${sub.syllabus} · ` : ''}{sub.title}</span></h2>
                {sub.microConcept && (
                  <p className="nsum">
                    {(Array.isArray(sub.microConcept) ? sub.microConcept : [sub.microConcept]).map((m, i) => <span key={i}><Rich text={m} /> </span>)}
                  </p>
                )}
                {sub.cards.map((c, i) => <ByteBlock key={`${c.title}-${i}`} card={c} opts={opts} />)}
                {opts.definitions && defs.length > 0 && (
                  <section className="nb ndef">
                    <h4>Key definitions</h4>
                    <ul>
                      {defs.map((d) => <li key={d.q}><b>{d.q}:</b> {d.model}</li>)}
                    </ul>
                  </section>
                )}
              </div>
            );
          })}
        </div>
      ))}
      <footer className="nfoot">Original study notes made from the app’s knowledge bytes. Not endorsed by Cambridge University Press &amp; Assessment. Check the official syllabus for exact wording.</footer>
    </article>
  );
}

/**
 * Chapter picker and printable cheat sheet. Pick chapters, then use "Print / save as PDF".
 * units: course units with submodules (lessons) whose cards hold the bytes.
 */
export default function NotesBuilder({ title, code, units, onBack }) {
  const allIds = useMemo(() => units.flatMap((u) => u.submodules.map((s) => s.id)), [units]);
  const [ids, setIds] = useState(() => new Set());
  const [opts, setOpts] = useState({ figures: true, definitions: true, equations: true, twoCol: true });
  const [preview, setPreview] = useState(false);

  const toggle = (id) => setIds((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleUnit = (u) => setIds((s) => {
    const n = new Set(s);
    const all = u.submodules.every((x) => n.has(x.id));
    u.submodules.forEach((x) => (all ? n.delete(x.id) : n.add(x.id)));
    return n;
  });
  const opt = (k) => setOpts((o) => ({ ...o, [k]: !o[k] }));

  if (preview) {
    return (
      <div className="notes-root">
        <div className="no-print sticky top-0 z-30 flex flex-wrap items-center gap-2 border-b-2 border-slate-200 bg-white/95 px-3 py-2">
          <button type="button" className="btn btn-ghost" onClick={() => setPreview(false)}><ArrowLeft className="h-4 w-4" aria-hidden /> Change chapters</button>
          <button type="button" className="btn btn-green" onClick={() => window.print()}><Printer className="h-4 w-4" aria-hidden /> Print / save as PDF</button>
          <span className="text-sm font-bold text-slate-500">{ids.size} lessons · {countBytes(units, ids)} bytes. In the print window choose “Save as PDF”.</span>
        </div>
        <div className="mx-auto max-w-[900px] bg-white p-4 print:p-0">
          <Sheet title={title} code={code} units={units} ids={ids} opts={opts} />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-5">
      <button type="button" className="btn btn-ghost mb-3" onClick={onBack}><ArrowLeft className="h-4 w-4" aria-hidden /> Back to {title}</button>
      <h1 className="mb-1 flex items-center gap-2 text-2xl font-black"><FileText className="h-6 w-6" aria-hidden /> Printable notes</h1>
      <p className="mb-4 text-sm font-semibold text-slate-600">Pick the chapters you want. The app puts the knowledge bytes, diagrams, equations and key definitions for those chapters onto a concise cheat sheet that you can print or save as a PDF.</p>

      <div className="mb-4 flex flex-wrap gap-2">
        <button type="button" className="btn btn-ghost" onClick={() => setIds(new Set(allIds))}>Select all</button>
        <button type="button" className="btn btn-ghost" onClick={() => setIds(new Set())}>Clear</button>
      </div>

      <fieldset className="mb-4 rounded-2xl border-2 border-slate-200 bg-white p-3">
        <legend className="px-1 text-xs font-extrabold uppercase tracking-widest text-slate-500">Include</legend>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
          {[['figures', 'Diagrams'], ['definitions', 'Key definitions'], ['equations', 'Equations'], ['twoCol', 'Two columns']].map(([k, label]) => (
            <label key={k} className="flex items-center gap-2"><input type="checkbox" checked={opts[k]} onChange={() => opt(k)} className="h-5 w-5" />{label}</label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-3">
        {units.map((u) => {
          const all = u.submodules.every((s) => ids.has(s.id));
          return (
            <section key={u.id} className="rounded-2xl border-2 border-slate-200 bg-white p-3">
              <button type="button" onClick={() => toggleUnit(u)} className="flex w-full items-center gap-2 text-left text-base font-extrabold" aria-pressed={all}>
                {all ? <CheckSquare className="h-5 w-5 text-green-600" aria-hidden /> : <Square className="h-5 w-5 text-slate-400" aria-hidden />}
                <span aria-hidden>{u.emoji}</span> Unit {u.number}: {u.title}
              </button>
              <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                {u.submodules.map((s) => (
                  <li key={s.id}>
                    <label className="flex min-h-11 items-center gap-2 rounded-xl px-2 text-sm font-semibold hover:bg-slate-50">
                      <input type="checkbox" checked={ids.has(s.id)} onChange={() => toggle(s.id)} className="h-5 w-5" />
                      <span>{s.syllabus ? <b>{s.syllabus} </b> : null}{s.title}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div className="sticky bottom-0 mt-4 flex items-center gap-3 border-t-2 border-slate-200 bg-white/95 py-3">
        <button type="button" className="btn btn-green" disabled={ids.size === 0} onClick={() => { setPreview(true); window.scrollTo(0, 0); }}>
          Make cheat sheet
        </button>
        <span className="text-sm font-bold text-slate-500">{ids.size} lessons selected · {countBytes(units, ids)} bytes</span>
      </div>
    </div>
  );
}

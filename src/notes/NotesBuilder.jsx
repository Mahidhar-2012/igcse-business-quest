import { Fragment, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Download, Printer, FileText, CheckSquare, Square } from 'lucide-react';
import Figure from '../components/Figure.jsx';
import { TIPS } from './tips.js';

/** **bold** key terms are highlighted; {{phrase}} is emphasised; *text* is italic. */
function Rich({ text }) {
  return String(text).split(/(\*\*[^*]+\*\*|\{\{.*?\}\}|\*[^*]+\*)/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**')) return <mark key={i}>{part.slice(2, -2)}</mark>;
    if (part.startsWith('{{')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

const stripMarks = (s) => String(s).replace(/\*\*|\{\{|\}\}/g, '');

/** Cleans "Define the term “x”." into "x". */
const termOf = (q) => stripMarks(q)
  .replace(/^(Define|State|Describe) (the term |the meaning of |what is meant by )?/i, '')
  .replace(/[“”".?]/g, '')
  .replace(/^(a|an|the) /i, '')
  .trim();

/** Definition line: bold the term, avoid saying it twice ("Homeostasis is..." not "homeostasis: Homeostasis is..."). */
function DefLine({ term, model }) {
  const t = term.charAt(0).toUpperCase() + term.slice(1);
  if (model.toLowerCase().startsWith(term.toLowerCase())) {
    return <><b>{model.slice(0, term.length)}</b>{model.slice(term.length)}</>;
  }
  return <><b>{t}:</b> {model}</>;
}

/** Everything a cheat sheet needs from one lesson, taken from the bytes already in the course. */
function lessonNotes(sub, findGlossary) {
  const defs = [];
  const exam = [];
  const seen = new Set();
  const collect = (q) => {
    if (q?.type !== 'short' || !q.model || seen.has(q.q)) return;
    seen.add(q.q);
    if (q.kind === 'Definition') defs.push({ term: termOf(q.q), model: q.model });
    else exam.push(q);
  };
  (sub.challenges || []).forEach(collect);
  sub.cards.forEach((c) => (c.tests || []).forEach(collect));

  let terms = [];
  if (findGlossary) {
    const seenT = new Set();
    for (const c of sub.cards) {
      const bold = (c.points || []).flatMap((p) => [...String(p).matchAll(/\*\*([^*]+)\*\*/g)].map((m) => m[1]));
      const text = [c.title, ...bold].join(' . ');
      for (const h of findGlossary(text, { allowGeneric: false }) || []) {
        const k = h.entry.term.toLowerCase();
        if (!seenT.has(k)) { seenT.add(k); terms.push(h.entry); }
      }
    }
    terms = terms.slice(0, 10);
  }
  const eqs = sub.cards.flatMap((c) => c.eq || []);
  return { defs, exam, terms, eqs };
}

const COMMAND_WORDS = [
  ['State / Name', 'Give a short answer: no explanation needed.'],
  ['Define', 'Give the exact meaning, in a sentence.'],
  ['Describe', 'Say what you see or what happens: features, steps, pattern.'],
  ['Explain', 'Give the reason: use “because”, “so” or “which means”.'],
  ['Calculate', 'Show the formula, the working and the unit.'],
  ['Compare', 'Give similarities and differences, with both sides stated.'],
  ['Suggest', 'Apply your knowledge to a new situation.'],
  ['Evaluate / Justify', 'Weigh both sides, then give a reasoned judgement.'],
];

const countBytes = (units, ids) => units.flatMap((u) => u.submodules).filter((s) => ids.has(s.id)).reduce((n, s) => n + s.cards.length, 0);

const hasBody = (c) => !!(c.points || c.options || c.example || c.items || c.doList || c.groups || c.task || c.parts);
// (vocab cards carry `items`, already covered above)
const asList = (v) => (Array.isArray(v) ? v : v ? [v] : []);

/** English card types (steps, do/avoid, phrase banks, model answers, try-it and annotated examples). */
function EnglishBody({ card, opts }) {
  switch (card.type) {
    case 'steps':
      return <ol className="nsteps">{card.items.map((i) => <li key={i}><Rich text={i} /></li>)}</ol>;
    case 'dont':
      return (
        <div className="npc">
          <div><b>Do</b>{card.doList.map((x) => <p key={x} className="pro">+ <Rich text={x} /></p>)}</div>
          <div><b>Avoid</b>{card.avoidList.map((x) => <p key={x} className="con">− <Rich text={x} /></p>)}</div>
        </div>
      );
    case 'bank':
      return <div>{card.groups.map((g) => <p key={g.label}><b>{g.label}:</b> {g.items.map((x, i) => <span key={i} className="nchip"><Rich text={x} /></span>)}</p>)}</div>;
    case 'vocab':
      return <ul>{card.items.map(([w, m, ex]) => <li key={w}><b>{w}</b> — {m}{ex ? <i> ({ex})</i> : null}</li>)}</ul>;
    case 'model':
      return (
        <div>
          <p className="nex"><b>Task:</b> {asList(card.task).filter((x) => !String(x).startsWith('[Pictures')).slice(0, 4).map((x) => stripMarks(x)).join(' ')}{card.words ? ` (${card.words} words)` : ''}</p>
          {asList(card.why).length > 0 && <ul>{asList(card.why).map((w) => <li key={w}><Rich text={w} /></li>)}</ul>}
          {opts.models && asList(card.paras).map((p, i) => <p key={i} className="nmodel"><Rich text={p} /></p>)}
        </div>
      );
    case 'try':
      return (
        <div>
          <p><b>Try:</b> {asList(card.task).map((x) => stripMarks(x)).join(' ')}</p>
          {card.hint && <p className="nhint">Hint: {card.hint}</p>}
          <p><b>Answer:</b> <Rich text={asList(card.answer).join(' ')} /></p>
        </div>
      );
    case 'annotated':
      return (
        <div>
          <p className="nex">{stripMarks(card.task)}</p>
          {asList(card.summary).length > 0 && <ul>{asList(card.summary).map((s) => <li key={s}><Rich text={s} /></li>)}</ul>}
          {opts.models && <ul className="nparts">{asList(card.parts).map(([text, why], i) => <li key={i}><i>{stripMarks(text)}</i> — <Rich text={why} /></li>)}</ul>}
        </div>
      );
    default:
      return null;
  }
}

function ByteBlock({ card, opts }) {
  if (!hasBody(card)) return null;
  const english = ['steps', 'dont', 'bank', 'model', 'try', 'annotated', 'vocab'].includes(card.type);
  return (
    <section className="nb">
      <h4>{card.title}</h4>
      {opts.figures && card.fig && !card.figAfter && <><Figure fig={card.fig} className="nfig" />{opts.recall && <p className="nhint">Test yourself: cover the labels and redraw this from memory.</p>}</>}
      {english && <EnglishBody card={card} opts={opts} />}
      {!english && card.points && (
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
function Sheet({ title, code, units, ids, opts, findGlossary }) {
  const chosen = units.map((u) => ({ ...u, subs: u.submodules.filter((s) => ids.has(s.id)) })).filter((u) => u.subs.length);
  const notes = useMemo(() => {
    const m = new Map();
    chosen.forEach((u) => u.subs.forEach((s) => m.set(s.id, lessonNotes(s, findGlossary))));
    return m;
  }, [chosen, findGlossary]);

  const allEq = chosen.flatMap((u) => u.subs.flatMap((s) => notes.get(s.id).eqs.map((e) => ({ e, ref: s.syllabus || s.title }))));
  const eqSeen = new Set();
  const formulae = allEq.filter(({ e }) => (eqSeen.has(e) ? false : eqSeen.add(e)));
  const allExam = chosen.flatMap((u) => u.subs.flatMap((s) => notes.get(s.id).exam.map((q) => ({ q, ref: s.syllabus || s.title }))));
  const lessonCount = chosen.reduce((n, u) => n + u.subs.length, 0);

  return (
    <article className={`notes-sheet ${opts.twoCol ? 'two-col' : ''} ${opts.mono ? 'mono' : ''} ${opts.large ? 'large' : ''}`}>
      <header className="nhead">
        <h1>{title}{code ? ` ${code}` : ''}: cheat sheet</h1>
        <p>{chosen.length > 4 ? `${chosen.length} units, ${lessonCount} lessons` : chosen.map((u) => `Unit ${u.number}: ${u.title}`).join(' · ')}</p>
      </header>

      <section className="nb ncover">
        <h4>How to use this sheet</h4>
        <ol>
          <li><b>Read</b> a chapter once. <b>Cover</b> the page and write down everything you remember.</li>
          <li><b>Check</b> against the sheet and tick the box for each point you can now explain.</li>
          <li>Do the <b>Test yourself</b> questions at the end, then mark them with the answers page.</li>
          <li><b>Repeat</b> on day 2, day 7 and day 21: spacing beats cramming.</li>
        </ol>
      </section>

      {opts.commandWords && (
        <section className="nb ncmd">
          <h4>Command words: what the examiner wants</h4>
          <table><tbody>{COMMAND_WORDS.map(([w, d]) => <tr key={w}><th>{w}</th><td>{d}</td></tr>)}</tbody></table>
          <p className="nhint">Marks shown on a question are a guide to the number of separate points to make.</p>
        </section>
      )}

      {opts.equations && formulae.length > 0 && (
        <section className="nb nformulae">
          <h4>Formulae and equations to know</h4>
          <ul>{formulae.map(({ e, ref }) => <li key={e}>{e} <span>({ref})</span></li>)}</ul>
        </section>
      )}

      {chosen.map((u) => (
        <div key={u.id}>
          {u.subs.map((sub) => {
            const { defs, terms } = notes.get(sub.id);
            return (
              <div key={sub.id} className="nlesson">
                <h2><span>{sub.syllabus ? `${sub.syllabus} · ` : ''}{sub.title}</span></h2>
                {sub.microConcept && (
                  <p className="nsum">
                    <b>In short: </b>
                    {(Array.isArray(sub.microConcept) ? sub.microConcept : [sub.microConcept]).map((m, i) => <span key={i}><Rich text={m} /> </span>)}
                  </p>
                )}
                {sub.cards.map((c, i) => <ByteBlock key={`${c.title}-${i}`} card={c} opts={opts} />)}
                {opts.tips && TIPS[sub.id] && (
                  <section className="nb ntip">
                    <p><b>Examiner tip:</b> {TIPS[sub.id][0]}</p>
                    <p className="nmis"><b>Common mistake:</b> {TIPS[sub.id][1]}</p>
                  </section>
                )}
                {opts.definitions && defs.length > 0 && (
                  <section className="nb ndef">
                    <h4>Key definitions</h4>
                    <ul>{defs.map((d) => <li key={d.term}><DefLine term={d.term} model={d.model} /></li>)}</ul>
                  </section>
                )}
                {opts.definitions && defs.length === 0 && terms.length > 0 && (
                  <section className="nb ndef">
                    <h4>Key terms</h4>
                    <ul>{terms.map((t) => <li key={t.term}><b>{t.term}</b> — {t.def}</li>)}</ul>
                  </section>
                )}
                {opts.checklist && (
                  <p className="ncheck"><b>Tick when you can explain:</b> {sub.cards.filter(hasBody).map((c) => <span key={c.title}>☐ {c.title}</span>)}</p>
                )}
              </div>
            );
          })}
        </div>
      ))}

      {opts.examQs && allExam.length > 0 && (
        <>
          <h2 className="npagebreak">Test yourself: write your answers first</h2>
          <ol className="nqs">
            {allExam.map(({ q, ref }, i) => (
              <li key={q.q}><b className="qn">Q{i + 1}.</b> <b>[{q.marks} mark{q.marks > 1 ? 's' : ''}]</b> {q.command ? <i>({q.command}) </i> : null}{q.q} <span className="nref">{ref}</span></li>
            ))}
          </ol>
          <h2 className="npagebreak">Answers: mark yourself honestly</h2>
          <ol className="nqs nans">
            {allExam.map(({ q }, i) => (
              <li key={q.q}>
                <span><b className="qn">Q{i + 1}.</b> {q.points.map((p) => `✓ ${p}`).join('  ')}</span>
                <em>Model: {q.model}</em>
              </li>
            ))}
          </ol>
        </>
      )}

      <footer className="nfoot">Original study notes made from the app’s knowledge bytes. Not endorsed by Cambridge University Press &amp; Assessment. Check the official syllabus for exact wording.</footer>
    </article>
  );
}

const OPTIONS = [
  ['figures', 'Diagrams'],
  ['tips', 'Examiner tips and common mistakes'],
  ['definitions', 'Key definitions and terms'],
  ['equations', 'Formulae box'],
  ['commandWords', 'Command words'],
  ['checklist', 'Tick-box checklists'],
  ['recall', 'Redraw-from-memory prompts'],
  ['examQs', 'Test yourself + answers'],
  ['models', 'Full model answers (English, long)'],
  ['twoCol', 'Two columns'],
  ['large', 'Larger text'],
  ['mono', 'Black and white (saves ink)'],
];

/**
 * Chapter picker and printable cheat sheet. Pick chapters, then use "Print / save as PDF".
 * units: course units with submodules (lessons) whose cards hold the bytes.
 * findGlossary: optional (text) => [{ entry: { term, def } }], used for subjects with a glossary (Business).
 */
export default function NotesBuilder({ title, code, units, onBack, findGlossary }) {
  const allIds = useMemo(() => units.flatMap((u) => u.submodules.map((s) => s.id)), [units]);
  const [ids, setIds] = useState(() => new Set());
  const [opts, setOpts] = useState({ figures: true, tips: true, definitions: true, equations: true, commandWords: true, checklist: true, recall: true, examQs: true, models: false, twoCol: true, large: false, mono: false });
  const [preview, setPreview] = useState(false);
  const sheetRef = useRef(null);

  // Build a clean, self-contained copy of the sheet and hand it to the browser's own
  // print-to-PDF engine (via a hidden iframe). This renders the diagrams natively — exactly
  // as on screen, with no content change — and produces a real PDF, not an HTML file.
  const downloadPdf = () => {
    if (!sheetRef.current) return;
    const css = [...document.styleSheets].map((sh) => {
      try { return [...sh.cssRules].map((r) => r.cssText).join('\n'); } catch { return ''; }
    }).join('\n');
    const name = `${title.replace(/[^\w]+/g, '-').replace(/^-|-$/g, '')}-notes`;
    const html = `<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${name}</title><style>${css}\nbody{margin:0;background:#fff;color:#111}.wrap{max-width:900px;margin:0 auto;padding:16px}@media print{.wrap{max-width:none;padding:0}}</style></head><body><div class="wrap">${sheetRef.current.innerHTML}</div></body></html>`;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('aria-hidden', 'true');
    Object.assign(iframe.style, { position: 'fixed', right: '0', bottom: '0', width: '0', height: '0', border: '0', opacity: '0' });
    iframe.srcdoc = html;
    iframe.onload = () => {
      const win = iframe.contentWindow;
      if (!win) { iframe.remove(); return; }
      win.addEventListener('afterprint', () => setTimeout(() => iframe.remove(), 300));
      setTimeout(() => { try { win.focus(); win.print(); } catch { iframe.remove(); } }, 300);
      setTimeout(() => { if (document.body.contains(iframe)) iframe.remove(); }, 60000);
    };
    document.body.appendChild(iframe);
  };

  const toggle =(id) => setIds((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
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
          <button type="button" className="btn btn-green" onClick={downloadPdf}><Download className="h-4 w-4" aria-hidden /> Download PDF</button>
          <button type="button" className="btn btn-ghost" onClick={() => window.print()}><Printer className="h-4 w-4" aria-hidden /> Print</button>
          <span className="text-sm font-bold text-slate-500">{ids.size} lessons · {countBytes(units, ids)} bytes. Saves a PDF — if a print dialog appears, choose “Save as PDF”.</span>
        </div>
        <div ref={sheetRef} className="mx-auto max-w-[900px] bg-white p-4 print:p-0">
          <Sheet title={title} code={code} units={units} ids={ids} opts={opts} findGlossary={findGlossary} />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-5">
      <button type="button" className="btn btn-ghost mb-3" onClick={onBack}><ArrowLeft className="h-4 w-4" aria-hidden /> Back to {title}</button>
      <h1 className="mb-1 flex items-center gap-2 text-2xl font-black"><FileText className="h-6 w-6" aria-hidden /> Printable notes</h1>
      <p className="mb-4 text-sm font-semibold text-slate-600">Pick the chapters you want. The app puts the knowledge bytes, diagrams, formulae and key definitions for those chapters onto a concise cheat sheet, with command words, tick-box checklists and a self-test with answers. Download it as a PDF, or print it.</p>

      <div className="mb-4 flex flex-wrap gap-2">
        <button type="button" className="btn btn-ghost" onClick={() => setIds(new Set(allIds))}>Select all</button>
        <button type="button" className="btn btn-ghost" onClick={() => setIds(new Set())}>Clear</button>
      </div>

      <fieldset className="mb-4 rounded-2xl border-2 border-slate-200 bg-white p-3">
        <legend className="px-1 text-xs font-extrabold uppercase tracking-widest text-slate-500">Include</legend>
        <div className="grid gap-x-5 gap-y-2 text-sm font-bold sm:grid-cols-2">
          {OPTIONS.map(([k, label]) => (
            <label key={k} className="flex min-h-9 items-center gap-2"><input type="checkbox" checked={opts[k]} onChange={() => opt(k)} className="h-5 w-5" />{label}</label>
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

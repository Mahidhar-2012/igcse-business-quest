// Builds a textbook chapter from the lessons the app already has: one chapter per unit, one section per lesson.
// Pure functions (no React) so the build script and the tests can run them in Node.
//
// What carries over: each knowledge byte's key points, equations, diagrams, advantages and disadvantages,
// worked examples, and the byte's test questions (turned into practice and recall prompts). What does NOT exist
// in these chapters: the longer connected explanations of a hand-written chapter.

const KEEP_PRACTICE = 8;
const KEEP_RECALL = 4;

const hash = (s) => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const rng = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/** Same question, same order every time (so a chapter never reshuffles under the reader), but not "correct answer first". */
const shuffled = (arr, key) => {
  const r = rng(hash(key));
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'x';
const plain = (s) => String(s).replace(/\*\*|\{\{|\}\}/g, '');
const unmark = (s) => String(s).replace(/\[\[[A-Z]\|([\s\S]*?)\]\]/g, '$1');
const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);

/* ---------- questions -> practice and recall ---------- */

function toPractice(q, id) {
  if (!q || !q.q) return null;
  const fig = q.fig ? { fig: q.fig } : {};
  if (q.type === 'mcq' && q.options?.[q.answer]) {
    const options = q.options.map((o, i) => ({ text: o.text, correct: i === q.answer, feedback: o.why || (i === q.answer ? 'Correct.' : 'Not this one.') }));
    return { id, kind: 'mcq', q: q.q, options: shuffled(options, q.q), explain: q.options[q.answer].why || 'Correct.', ...fig };
  }
  if (q.type === 'calc' && typeof q.answer === 'number') {
    return { id, kind: 'num', q: q.q, answer: q.answer, tol: q.tol ?? 0.01, unit: q.unit || '', steps: list(q.steps).map(String), wrong: [], explain: q.formula ? `Method: ${q.formula}` : 'Work through the steps above.', ...fig };
  }
  if (q.type === 'tfd' && ['true', 'false', 'depends'].includes(q.answer)) {
    const labels = { true: 'True', false: 'False', depends: 'It depends on the context' };
    const options = ['true', 'false', 'depends'].map((k) => ({ text: labels[k], correct: k === q.answer, feedback: k === q.answer ? `Right. ${q.explain || ''}`.trim() : `Not quite. ${q.explain || ''}`.trim() }));
    return { id, kind: 'mcq', q: q.q, options, explain: q.explain || `The answer is: ${labels[q.answer]}.`, ...fig };
  }
  return null;
}

function toRecall(q) {
  if (q?.type !== 'short' || !q.model) return null;
  const pts = list(q.points).length ? ` Mark points: ${list(q.points).map(plain).join('; ')}.` : '';
  return { q: plain(q.q), a: `${q.model}${pts}` };
}

/* ---------- cards -> blocks ---------- */

function cardBlocks(card) {
  const out = [];
  if (card.title) out.push({ type: 'h3', text: card.title });
  const fig = card.fig ? { type: 'figure', fig: card.fig } : null;
  if (fig && !card.figAfter) out.push(fig);

  switch (card.type) {
    case 'steps': out.push({ type: 'list', ordered: true, items: card.items }); break;
    case 'dont': out.push({ type: 'proscons', options: [{ name: 'Do and avoid', pros: card.doList, cons: card.avoidList, proLabel: 'Do', conLabel: 'Avoid' }] }); break;
    case 'bank': out.push({ type: 'list', items: card.groups.map((g) => `**${g.label}:** ${g.items.join(' · ')}`) }); break;
    case 'vocab': out.push({ type: 'list', items: (card.items || []).map(([w, m, ex]) => `**${w}** — ${m}${ex ? ` (${ex})` : ''}`) }); break;
    case 'model':
      out.push({ type: 'example', title: 'Model answer', stem: list(card.task).filter((x) => !String(x).startsWith('[Pictures')).join(' ') + (card.words ? ` (${card.words} words)` : ''), answer: list(card.paras), notes: list(card.why) });
      break;
    case 'try':
      out.push({ type: 'retrieval', prompts: [{ q: list(card.task).map(plain).join(' ') + (card.hint ? ` Hint: ${card.hint}` : ''), a: list(card.answer).join(' ') }] });
      break;
    case 'annotated':
      out.push({ type: 'example', title: 'Annotated example', stem: plain(card.task || ''), answer: list(card.parts).map(([t]) => t), notes: [...list(card.summary), ...list(card.parts).map(([t, why]) => `“${plain(t)}”: ${why}`)] });
      break;
    default:
      if (card.points?.length) out.push({ type: 'list', items: card.points });
  }
  (card.eq || []).forEach((e) => out.push({ type: 'eq', tex: String(e), say: String(e) }));
  if (card.options?.length) out.push({ type: 'proscons', options: card.options.map((o) => ({ name: o.name, pros: o.pros, cons: o.cons, proLabel: 'For', conLabel: 'Against' })) });
  if (card.example) {
    const e = card.example;
    out.push({ type: 'example', title: card.title || 'Worked example', stem: e.stem || '', question: e.question || '', marks: e.marks ?? null, answer: list(e.answer).map(unmark), notes: list(e.notes) });
  }
  if (fig && card.figAfter) out.push(fig);
  return out.filter((b) => !(b.type === 'h3' && !b.text));
}

function lessonSection(lesson, usedIds) {
  let id = slug(lesson.id);
  while (usedIds.has(id)) id += '-x';
  usedIds.add(id);

  const blocks = [];
  const micro = list(lesson.microConcept).map(String).filter(Boolean);
  if (micro.length) blocks.push({ type: 'callout', kind: 'key', title: 'In short', text: micro.join(' ') });

  const practice = [];
  const recall = [];
  for (const card of lesson.cards || []) {
    blocks.push(...cardBlocks(card));
    for (const t of card.tests || []) {
      const p = practice.length < KEEP_PRACTICE ? toPractice(t, `${id}-q${practice.length + 1}`) : null;
      if (p) { practice.push(p); continue; }
      const r = recall.length < KEEP_RECALL ? toRecall(t) : null;
      if (r) recall.push(r);
    }
  }
  if (practice.length) blocks.push({ type: 'h3', text: 'Check yourself' }, { type: 'practice', items: practice });
  if (recall.length) blocks.push({ type: 'h3', text: 'Recall' }, { type: 'retrieval', prompts: recall });
  return { id, title: lesson.title, covers: [], blocks };
}

const boldTerms = (lessons, sectionIds) => {
  const seen = new Set();
  const terms = [];
  lessons.forEach((l, i) => {
    for (const c of l.cards || []) {
      const text = [...list(c.points), ...list(c.items), ...list(c.paras)].map(String).join(' ');
      for (const m of text.matchAll(/\*\*([^*]+)\*\*/g)) {
        const t = m[1].trim().replace(/[:.,;]+$/, '');
        const k = t.toLowerCase();
        if (t.length < 3 || t.length > 40 || /^[\d\s.,%-]+$/.test(t) || seen.has(k)) continue;
        seen.add(k);
        terms.push([t, sectionIds[i]]);
      }
    }
  });
  return terms.slice(0, 60);
};

const REVIEW = 'Auto-built from this app’s lessons: key points, equations, diagrams, worked examples and practice, in lesson order. It has not been reviewed by a subject expert, and it does not yet have the longer connected explanations of a hand-written chapter.';
const NOT_COVERED = [
  'Longer connected explanations that link the ideas together (hand-written chapters add these)',
  'Question types that need dragging, matching or ordering. Those stay in the lessons.',
  'Any part of the syllabus the lessons themselves do not yet cover',
];

function assemble({ id, unit, unitTitle, title, subtitle, syllabusRef, lessons, subjectTitle, subjectHash }) {
  const used = new Set();
  const sections = lessons.map((l) => lessonSection(l, used));
  const terms = boldTerms(lessons, sections.map((s) => s.id));
  const summary = lessons.map((l) => ({ l, m: list(l.microConcept).map(String).filter(Boolean).join(' ') })).filter((x) => x.m).map((x) => `**${x.l.title}.** ${x.m}`);
  return {
    schema: 1,
    generated: true,
    id, unit, unitTitle, title, subtitle, syllabusRef,
    status: 'draft',
    review: { state: REVIEW },
    minutes: Math.max(10, lessons.length * 6),
    prerequisites: [],
    objectives: lessons.map((l, i) => ({ id: sections[i].id, text: `${l.title}${l.syllabus ? ` (syllabus ${l.syllabus})` : ''}` })),
    glossary: [],
    terms,
    figures: {},
    sections,
    summary: summary.length ? summary : [`This chapter covers ${lessons.length} lesson${lessons.length === 1 ? '' : 's'}.`],
    lessonLinks: [{ label: `Practise this unit in the ${subjectTitle} lessons`, href: subjectHash }],
    notCovered: NOT_COVERED,
    provenance: 'Built from the lessons already in this app, which are original to it. No textbook, past paper or mark scheme was copied.',
  };
}

/** A unit of a lesson-based subject (Physics, Chemistry, ...). `number` is the unit's position in its subject. */
export function chapterFromUnit(subject, unit, number) {
  const syl = unit.submodules.map((s) => s.syllabus).filter(Boolean);
  const range = syl.length ? (syl.length > 1 && syl[0] !== syl[syl.length - 1] ? `${syl[0]} to ${syl[syl.length - 1]}` : syl[0]) : `Unit ${number}`;
  return assemble({
    id: `unit-${number}`,
    unit: number,
    unitTitle: unit.title,
    title: unit.title,
    subtitle: `${unit.submodules.length} lesson${unit.submodules.length === 1 ? '' : 's'}, in the order of the course`,
    syllabusRef: range,
    lessons: unit.submodules,
    subjectTitle: subject.title,
    subjectHash: subject.hash,
  });
}

/** A section of the English notes. */
export function chapterFromEnglishSection(subject, section, number) {
  return assemble({
    id: `unit-${number}`,
    unit: number,
    unitTitle: section.title,
    title: section.title,
    subtitle: section.blurb || '',
    syllabusRef: 'English as a Second Language',
    lessons: section.lessons,
    subjectTitle: subject.title,
    subjectHash: subject.hash,
  });
}

/** Light metadata for the contents page and search (no blocks), plus the compact term list. */
export function metaOf(ch) {
  return {
    id: ch.id,
    kind: 'generated',
    unit: ch.unit,
    unitTitle: ch.unitTitle,
    title: ch.title,
    syllabusRef: ch.syllabusRef,
    status: ch.status,
    minutes: ch.minutes,
    objectives: ch.objectives,
    terms: ch.terms,
    sections: ch.sections.map((s) => ({ id: s.id, title: s.title })),
  };
}

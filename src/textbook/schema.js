// Textbook content schema (version 1) and its validator. Plain JS with no React, so `npm test` can check every chapter.
//
// Chapter = { schema, id, unit, unitTitle, title, subtitle, syllabusRef, status, review, minutes,
//             objectives[{id,text}], prerequisites[], glossary[{term,def}], figures{id:{alt,caption,text}},
//             sections[{id,title,covers[],blocks[]}], summary[], lessonLinks[{label,href}], notCovered[], provenance }
// Block types: p, list, eq, callout, figure, worked, interaction (slider | predict | classify), practice, retrieval.
// Text fields may use **bold**; nothing else is interpreted, so content can never inject markup.

export const SCHEMA_VERSION = 1;
export const STATUSES = ['draft', 'reviewed'];
export const BLOCK_TYPES = ['p', 'list', 'eq', 'callout', 'figure', 'worked', 'interaction', 'practice', 'retrieval'];
export const CALLOUT_KINDS = ['key', 'misconception', 'application'];
export const INTERACTION_KINDS = ['slider', 'predict', 'classify'];

const nonEmpty = (s) => typeof s === 'string' && s.trim().length > 0;
const balanced = (s) => (s.match(/\*\*/g) || []).length % 2 === 0;

/** Every string a block shows to the reader, flattened (used by the validator and by search). */
export function blockStrings(b) {
  const out = [];
  const walk = (v) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(b);
  return out;
}

export function validateChapter(ch, { figureIds = [] } = {}) {
  const errs = [];
  const err = (m) => errs.push(m);

  if (ch.schema !== SCHEMA_VERSION) err(`schema must be ${SCHEMA_VERSION}`);
  for (const k of ['id', 'title', 'unitTitle', 'syllabusRef']) if (!nonEmpty(ch[k])) err(`missing ${k}`);
  if (!Number.isInteger(ch.unit)) err('unit must be a whole number');
  if (!STATUSES.includes(ch.status)) err(`status must be one of ${STATUSES.join(', ')}`);
  if (!ch.review || !nonEmpty(ch.review.state)) err('review.state is required');
  if (ch.status === 'reviewed' && !(ch.review && nonEmpty(ch.review.reviewer) && nonEmpty(ch.review.date))) err('a reviewed chapter needs review.reviewer and review.date');
  if (ch.status === 'draft' && ch.review && /reviewed by/i.test(ch.review.state) && !/not/i.test(ch.review.state)) err('a draft chapter must not claim a review');

  const objectives = ch.objectives || [];
  if (!objectives.length) err('a chapter needs learning objectives');
  const objIds = new Set(objectives.map((o) => o.id));
  if (objIds.size !== objectives.length) err('objective ids must be unique');
  objectives.forEach((o) => { if (!nonEmpty(o.id) || !nonEmpty(o.text)) err('every objective needs an id and text'); });

  (ch.glossary || []).forEach((g) => { if (!nonEmpty(g.term) || !nonEmpty(g.def)) err('every glossary entry needs a term and a definition'); });
  if (new Set((ch.glossary || []).map((g) => g.term.toLowerCase())).size !== (ch.glossary || []).length) err('glossary terms must be unique');

  const sections = ch.sections || [];
  if (!sections.length) err('a chapter needs sections');
  const secIds = sections.map((s) => s.id);
  if (new Set(secIds).size !== secIds.length) err('section ids must be unique');
  const coveredByText = new Set();
  const coveredByPractice = new Set();
  const itemIds = new Set();

  sections.forEach((s) => {
    const at = `section "${s.id}"`;
    if (!/^[a-z0-9-]+$/.test(s.id || '')) err(`${at}: id must be lowercase letters, digits and hyphens`);
    if (!nonEmpty(s.title)) err(`${at}: missing title`);
    if (!s.blocks || !s.blocks.length) err(`${at}: needs blocks`);
    (s.covers || []).forEach((c) => { if (!objIds.has(c)) err(`${at}: covers unknown objective ${c}`); else coveredByText.add(c); });

    (s.blocks || []).forEach((b, i) => {
      const bat = `${at} block ${i + 1} (${b.type})`;
      if (!BLOCK_TYPES.includes(b.type)) { err(`${bat}: unknown block type`); return; }
      blockStrings(b).forEach((str) => {
        if (!balanced(str)) err(`${bat}: unbalanced ** in "${str.slice(0, 40)}"`);
        if (/TODO|lorem|xxx/i.test(str)) err(`${bat}: placeholder text`);
      });
      if (b.type === 'p' && !nonEmpty(b.text)) err(`${bat}: empty text`);
      if (b.type === 'list' && !(b.items && b.items.length && b.items.every(nonEmpty))) err(`${bat}: list items missing`);
      if (b.type === 'eq' && !(nonEmpty(b.tex) && nonEmpty(b.say))) err(`${bat}: equations need tex and a spoken form (say)`);
      if (b.type === 'callout' && !(CALLOUT_KINDS.includes(b.kind) && nonEmpty(b.title) && nonEmpty(b.text))) err(`${bat}: callout needs kind, title and text`);
      if (b.type === 'figure') {
        const f = (ch.figures || {})[b.id];
        if (!f) err(`${bat}: figure ${b.id} has no entry in chapter.figures`);
        else if (!(nonEmpty(f.alt) && nonEmpty(f.caption) && nonEmpty(f.text))) err(`${bat}: figure ${b.id} needs alt, caption and a text equivalent`);
        if (!figureIds.includes(b.id)) err(`${bat}: figure ${b.id} has no drawing`);
      }
      if (b.type === 'worked') {
        if (!(nonEmpty(b.title) && nonEmpty(b.problem) && nonEmpty(b.answer) && nonEmpty(b.check))) err(`${bat}: worked example needs title, problem, answer and a reasonableness check`);
        if (!(b.steps && b.steps.length >= 2 && b.steps.every((s2) => nonEmpty(s2.text) && nonEmpty(s2.why)))) err(`${bat}: worked example needs 2+ steps, each with text and why`);
      }
      if (b.type === 'interaction') {
        if (!INTERACTION_KINDS.includes(b.kind)) err(`${bat}: unknown interaction ${b.kind}`);
        if (!nonEmpty(b.title) || !nonEmpty(b.prompt)) err(`${bat}: interaction needs title and prompt`);
        if (b.kind === 'predict') {
          const o = b.options || [];
          if (o.length < 3 || o.filter((x) => x.correct).length !== 1) err(`${bat}: predict needs 3+ options with exactly one correct`);
          o.forEach((x) => { if (!nonEmpty(x.text) || !nonEmpty(x.feedback)) err(`${bat}: every option needs text and feedback`); });
          if (!(b.reveal && b.reveal.length)) err(`${bat}: predict needs a reveal explanation`);
        }
        if (b.kind === 'classify') {
          const gs = (b.groups || []).map((g) => g.id);
          if (gs.length !== 2) err(`${bat}: classify needs exactly 2 groups`);
          if ((b.items || []).length < 4) err(`${bat}: classify needs 4+ items`);
          (b.items || []).forEach((x) => { if (!gs.includes(x.group) || !nonEmpty(x.text) || !nonEmpty(x.why)) err(`${bat}: classify item needs text, a valid group and why`); });
        }
        if (b.kind === 'slider') {
          const t = b.target || {};
          if (!(typeof t.value === 'number' && nonEmpty(t.hint) && nonEmpty(t.right))) err(`${bat}: slider needs target.value, target.hint and target.right`);
        }
      }
      if (b.type === 'practice') {
        (b.items || []).forEach((q) => {
          const qat = `${bat} item ${q.id}`;
          if (!nonEmpty(q.id) || itemIds.has(q.id)) err(`${qat}: id missing or repeated`);
          itemIds.add(q.id);
          if (!objIds.has(q.objective)) err(`${qat}: objective unknown`); else coveredByPractice.add(q.objective);
          if (!nonEmpty(q.q)) err(`${qat}: missing question`);
          if (q.kind === 'mcq') {
            const o = q.options || [];
            if (o.length < 3 || o.filter((x) => x.correct).length !== 1) err(`${qat}: needs 3+ options with exactly one correct`);
            o.forEach((x) => { if (!nonEmpty(x.text) || !nonEmpty(x.feedback)) err(`${qat}: every option needs text and feedback`); });
          } else if (q.kind === 'num') {
            if (typeof q.answer !== 'number' || typeof q.tol !== 'number' || !nonEmpty(q.unit)) err(`${qat}: numeric items need answer, tol and unit`);
            if (!(q.steps && q.steps.length && q.steps.every(nonEmpty))) err(`${qat}: numeric items need a worked solution`);
            (q.wrong || []).forEach((w) => { if (typeof w.value !== 'number' || !nonEmpty(w.feedback)) err(`${qat}: wrong-answer hints need value and feedback`); });
          } else err(`${qat}: unknown kind`);
          if (!nonEmpty(q.explain)) err(`${qat}: missing explanation`);
        });
      }
      if (b.type === 'retrieval' && !(b.prompts && b.prompts.length && b.prompts.every((p) => nonEmpty(p.q) && nonEmpty(p.a)))) err(`${bat}: retrieval prompts need q and a`);
    });
  });

  objIds.forEach((id) => {
    if (!coveredByText.has(id)) err(`objective ${id} is not taught in any section`);
    if (!coveredByPractice.has(id)) err(`objective ${id} has no practice item`);
  });
  if (!(ch.summary && ch.summary.length)) err('a chapter needs a summary');
  const used = new Set(sections.flatMap((s) => (s.blocks || []).filter((b) => b.type === 'figure').map((b) => b.id)));
  Object.keys(ch.figures || {}).forEach((id) => { if (!used.has(id)) err(`figure ${id} is declared but never used`); });
  return errs;
}

/** Light index data for the contents page and search, derived from a full chapter. */
export const indexOf = (ch) => ({
  title: ch.title,
  objectives: ch.objectives.map((o) => ({ id: o.id, text: o.text })),
  terms: (ch.glossary || []).map((g) => g.term),
  sections: ch.sections.map((s) => ({ id: s.id, title: s.title })),
});

// Textbook tests: content schema, registry/chapter agreement, answer checking, reading state and search.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { BOOKS } = await import('../src/textbook/books.js');
const { validateChapter, indexOf, blockStrings } = await import('../src/textbook/schema.js');
const { gradeNumeric, parseNumber, longestAnswerShare } = await import('../src/textbook/check.js');
const P = await import('../src/textbook/progress.js');
const { searchBook } = await import('../src/textbook/search.js');
const { SUBJECTS_META } = await import('../src/subjects.meta.js');

const book = BOOKS[0];
const meta = book.chapters[0];
const chapter = (await meta.load()).default;

// the drawings are JSX, which Node cannot import, so read the ids they register
const figureIds = [...readFileSync(path.join(root, 'src/textbook/figures/motion.jsx'), 'utf8').match(/FIGURES = \{([^}]*)\}/)[1].matchAll(/'([^']+)'\s*:/g)].map((m) => m[1]);

test('the pilot chapter passes the content schema', () => {
  assert.deepEqual(validateChapter(chapter, { figureIds }), []);
});

test('the validator rejects broken chapters', () => {
  const clone = () => structuredClone(chapter);
  const bad = (mutate, expect) => {
    const c = clone();
    mutate(c);
    const errs = validateChapter(c, { figureIds });
    assert.ok(errs.some((e) => expect.test(e)), `expected ${expect} in ${JSON.stringify(errs)}`);
  };
  bad((c) => { c.status = 'reviewed'; }, /reviewer/);
  bad((c) => { c.objectives.push({ id: 'o9', text: 'An objective nothing teaches' }); }, /o9 is not taught/);
  bad((c) => { c.sections[1].covers = ['nope']; }, /unknown objective/);
  bad((c) => { c.sections[1].blocks[0].text = 'Unbalanced **bold'; }, /unbalanced/);
  bad((c) => { c.sections[3].blocks.push({ type: 'wibble' }); }, /unknown block type/);
  bad((c) => { c.figures['dt-graph'].alt = ''; }, /alt, caption/);
  bad((c) => { c.sections[1].blocks.find((b) => b.type === 'worked').check = ''; }, /reasonableness/);
  const pr = (c) => c.sections.find((s) => s.id === 'practice').blocks.find((b) => b.type === 'practice');
  bad((c) => { pr(c).items[1].options.forEach((o) => { o.correct = false; }); }, /exactly one correct/);
  bad((c) => { delete pr(c).items[0].explain; }, /missing explanation/);
  bad((c) => { pr(c).items.splice(0, pr(c).items.length, ...pr(c).items.filter((q) => q.objective !== 'o2')); }, /o2 has no practice/);
});

test('the chapter meets the pilot acceptance criteria', () => {
  const blocks = chapter.sections.flatMap((s) => s.blocks);
  assert.ok(blocks.filter((b) => b.type === 'figure').length >= 2, 'two figures');
  assert.ok(blocks.filter((b) => b.type === 'worked').length >= 2, 'two worked examples');
  assert.ok(blocks.filter((b) => b.type === 'interaction').length >= 2, 'two interactions');
  assert.ok(new Set(blocks.filter((b) => b.type === 'interaction').map((b) => b.kind)).size >= 2, 'different kinds of interaction');
  assert.ok(blocks.some((b) => b.type === 'callout' && b.kind === 'misconception'), 'a misconception');
  assert.ok(blocks.some((b) => b.type === 'callout' && b.kind === 'application'), 'an unfamiliar application');
  assert.ok(blocks.some((b) => b.type === 'retrieval'), 'a retrieval check');
  const items = blocks.filter((b) => b.type === 'practice').flatMap((b) => b.items);
  assert.ok(items.length >= 5);
  assert.ok(items.some((q) => /transfer/i.test(q.q)), 'a transfer question');
  assert.equal(chapter.status, 'draft', 'an unreviewed chapter must say so');
  assert.ok(!/^reviewed/i.test(chapter.review.state));
});

test('multiple-choice answers do not give themselves away by length or position', () => {
  const items = chapter.sections.flatMap((s) => s.blocks).filter((b) => b.type === 'practice').flatMap((b) => b.items).filter((q) => q.kind === 'mcq');
  assert.ok(longestAnswerShare(items) <= 0.34, `the correct answer is the unique longest in ${Math.round(longestAnswerShare(items) * 100)}% of questions`);
  const positions = items.map((q) => q.options.findIndex((o) => o.correct));
  assert.ok(new Set(positions).size >= 2, 'the correct option should not always sit in the same place');
  items.forEach((q) => assert.ok(new Set(q.options.map((o) => o.text)).size === q.options.length, `${q.id}: repeated options`));
});

test('every worked numeric answer matches its own working', () => {
  const items = chapter.sections.flatMap((s) => s.blocks).filter((b) => b.type === 'practice').flatMap((b) => b.items).filter((q) => q.kind === 'num');
  const expected = { q1: 400 / 50, q3: (19 - 4) / 5, q6: 0.5 * 8 * (1.5 * 8) + 1.5 * 8 * 10 };
  for (const q of items) {
    assert.ok(Math.abs(q.answer - expected[q.id]) < 1e-9, `${q.id}: answer ${q.answer} but the working gives ${expected[q.id]}`);
    q.wrong.forEach((w) => assert.equal(gradeNumeric(q, String(w.value)).state, 'hint'));
  }
  // the numbers quoted in the prose and the figures
  assert.equal(0.5 * 5 * 20 + 10 * 20 + 0.5 * 5 * 20, 300);
  assert.ok(Math.abs(18 / (50 / 60) - 21.6) < 1e-9);
  assert.ok(Math.abs(2000 / 60 * 3.6 - 120) < 1e-9);
  assert.equal((25 - 5) / 8, 2.5);
});

test('the registry matches the chapter file', () => {
  const idx = indexOf(chapter);
  assert.equal(meta.id, chapter.id);
  assert.equal(meta.unit, chapter.unit);
  assert.equal(meta.unitTitle, chapter.unitTitle);
  assert.equal(meta.status, chapter.status);
  assert.equal(meta.syllabusRef, chapter.syllabusRef);
  assert.equal(meta.title, idx.title);
  assert.deepEqual(meta.objectives, idx.objectives);
  assert.deepEqual(meta.terms, idx.terms);
  assert.deepEqual(meta.sections.slice(0, idx.sections.length), idx.sections);
  assert.equal(meta.sections.length, idx.sections.length);
});

test('numeric answers are read forgivingly and graded with specific feedback', () => {
  assert.equal(parseNumber('8'), 8);
  assert.equal(parseNumber(' 8.0 m/s'), 8);
  assert.equal(parseNumber('8,5'), 8.5);
  assert.equal(parseNumber('-2'), -2);
  assert.equal(parseNumber('abc'), null);
  const q = { answer: 8, tol: 0.05, wrong: [{ value: 0.125, feedback: 'inverted' }] };
  assert.equal(gradeNumeric(q, '8').state, 'correct');
  assert.equal(gradeNumeric(q, '8.04 m/s').state, 'correct');
  assert.equal(gradeNumeric(q, '0.125').state, 'hint');
  assert.equal(gradeNumeric(q, '0.125').feedback, 'inverted');
  assert.equal(gradeNumeric(q, '9').state, 'wrong');
  assert.equal(gradeNumeric(q, '').state, 'empty');
});

test('reading state: positions, bookmarks, read marks and damaged storage', () => {
  const memory = () => { const m = new Map(); return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)) }; };
  let s = P.emptyState();
  s = P.setPosition(s, 'physics', 'motion', 'speed');
  assert.equal(P.positionOf(s, 'physics', 'motion'), 'speed');
  assert.equal(P.lastChapter(s, 'physics'), 'motion');
  s = P.toggleBookmark(s, 'physics', 'motion', 'speed');
  assert.ok(P.isMarked(s, 'physics', 'motion', 'speed'));
  s = P.toggleBookmark(s, 'physics', 'motion', 'speed');
  assert.ok(!P.isMarked(s, 'physics', 'motion', 'speed'));
  s = P.setRead(s, 'physics', 'motion', true, '2026-11-02T10:00:00Z');
  assert.ok(P.isRead(s, 'physics', 'motion'));
  s = P.setRead(s, 'physics', 'motion', false);
  assert.ok(!P.isRead(s, 'physics', 'motion'));

  const store = memory();
  P.save(store, P.toggleBookmark(P.setPosition(P.emptyState(), 'physics', 'motion', 'acceleration'), 'physics', 'motion', 'summary'));
  const back = P.load(store);
  assert.equal(P.positionOf(back, 'physics', 'motion'), 'acceleration');
  assert.deepEqual(P.bookmarksOf(back, 'physics'), [{ chapterId: 'motion', sectionId: 'summary' }]);

  for (const junk of ['not json', '[]', '{"v":99,"books":{}}', '{"v":1,"books":"x"}', '{"v":1,"books":{"physics":{"pos":{"motion":5},"marks":{"motion":"x"}}}}']) {
    const st = memory();
    st.setItem(P.BOOK_KEY, junk);
    const loaded = P.load(st);
    assert.equal(loaded.v, 1);
    assert.equal(P.positionOf(loaded, 'physics', 'motion'), null);
    assert.deepEqual(P.bookmarksOf(loaded, 'physics'), []);
  }
  assert.doesNotThrow(() => P.save({ setItem() { throw new Error('quota'); } }, s));
});

test('the textbook never touches lesson progress or the cloud-synced keys', () => {
  assert.ok(!SUBJECTS_META.some((x) => x.storageKey === P.BOOK_KEY));
  assert.ok(!P.BOOK_KEY.startsWith('igcse-'));
});

test('search finds titles, terms, sections and objectives, and needs every word', () => {
  const kinds = (q) => searchBook(book, q).map((r) => r.kind);
  assert.ok(kinds('describing').includes('chapter'));
  assert.ok(kinds('acceleration').includes('term'));
  assert.ok(kinds('graphs').includes('section'));
  assert.ok(kinds('average speed').includes('objective'));
  assert.deepEqual(searchBook(book, 'zzz nothing'), []);
  assert.deepEqual(searchBook(book, '   '), []);
  assert.equal(searchBook(book, 'acceleration')[0].kind !== undefined, true);
  const term = searchBook(book, 'velocity').find((r) => r.kind === 'term');
  assert.equal(term.sectionId, 'terms');
  assert.equal(searchBook(book, 'speed time').every((r) => /speed/i.test(r.text) && /time/i.test(r.text)), true);
});

test('content contains no markup other than **bold**', () => {
  const strings = chapter.sections.flatMap((s) => s.blocks.flatMap(blockStrings));
  strings.forEach((t) => assert.ok(!/[<>]/.test(t), `markup characters in: ${t.slice(0, 50)}`));
});

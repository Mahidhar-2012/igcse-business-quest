// Textbook tests: content schema, registry/chapter agreement, answer checking, reading state and search.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { makeBook } = await import('../src/textbook/books.js');
const { BOOK_SUBJECTS } = await import('../src/textbook/available.js');
const { SOURCES, buildChapters } = await import('../src/textbook/sources.js');
const { metaOf } = await import('../src/textbook/generate.js');
const generatedJson = (id) => JSON.parse(readFileSync(path.join(root, `src/textbook/generated/${id}.json`), 'utf8'));
const { validateChapter, indexOf, blockStrings } = await import('../src/textbook/schema.js');
const { gradeNumeric, parseNumber, longestAnswerShare } = await import('../src/textbook/check.js');
const P = await import('../src/textbook/progress.js');
const { searchBook } = await import('../src/textbook/search.js');
const { SUBJECTS_META } = await import('../src/subjects.meta.js');

const book = makeBook('physics', generatedJson('physics'));
const meta = book.chapters.find((c) => c.id === 'motion');
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
  assert.deepEqual(meta.terms.map((t) => t.term), idx.terms);
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

test('the book list matches the textbook sources and every one builds', () => {
  // Every subject with a book is a real subject; some subjects (e.g. Global Perspectives) have no textbook.
  const ids = new Set(SUBJECTS_META.map((s) => s.id));
  assert.ok([...BOOK_SUBJECTS].every((id) => ids.has(id)), 'a book subject is not a real subject');
  assert.deepEqual([...BOOK_SUBJECTS].sort(), Object.keys(SOURCES).sort());
  for (const id of BOOK_SUBJECTS) assert.ok(makeBook(id, generatedJson(id)), `${id}: no book`);
});

test('the generated contents files are up to date (run `npm run textbook:index` if this fails)', async () => {
  for (const id of BOOK_SUBJECTS) {
    const fresh = (await buildChapters(id)).map(metaOf);
    assert.deepEqual(generatedJson(id), JSON.parse(JSON.stringify(fresh)), `${id}: src/textbook/generated/${id}.json is stale`);
  }
});

test('every unit of every subject has a chapter, with one section per lesson', async () => {
  for (const id of BOOK_SUBJECTS) {
    const chapters = await buildChapters(id);
    const data = await SOURCES[id]();
    const units = id === 'english' ? data.sections : data.units;
    assert.equal(chapters.length, units.length, `${id}: chapters vs units`);
    const lessons = id === 'english' ? data.allLessons.length : units.flatMap((u) => u.submodules).length;
    assert.equal(chapters.reduce((n, c) => n + c.sections.length, 0), lessons, `${id}: sections vs lessons`);
    assert.equal(SUBJECTS_META.find((s) => s.id === id).total, lessons, `${id}: hub total`);
  }
});

test('every generated chapter passes the schema and is honestly labelled', async () => {
  let blocks = 0;
  for (const id of BOOK_SUBJECTS) {
    for (const c of await buildChapters(id)) {
      const errs = validateChapter(c, { figureIds: [] });
      assert.deepEqual(errs, [], `${id}/${c.id}: ${errs.slice(0, 3).join(' | ')}`);
      assert.equal(c.status, 'draft');
      assert.ok(/not been reviewed/.test(c.review.state), `${id}/${c.id}: must say it is unreviewed`);
      blocks += c.sections.reduce((n, s) => n + s.blocks.length, 0);
    }
  }
  assert.ok(blocks > 3000, `expected a large book, got ${blocks} blocks`);
});

test('generated practice does not put the correct answer first, and keeps its figures', async () => {
  let mcq = 0;
  let first = 0;
  let figures = 0;
  for (const id of BOOK_SUBJECTS) {
    for (const c of await buildChapters(id)) {
      for (const s of c.sections) for (const b of s.blocks) {
        if (b.type === 'figure') figures += 1;
        if (b.type !== 'practice') continue;
        for (const q of b.items) {
          if (q.kind !== 'mcq' || q.options.length !== 4) continue;
          mcq += 1;
          if (q.options[0].correct) first += 1;
        }
      }
    }
  }
  assert.ok(mcq > 300, `expected many multiple-choice questions, got ${mcq}`);
  assert.ok(first / mcq < 0.4, `the correct answer is first in ${Math.round((first / mcq) * 100)}% of questions`);
  assert.ok(figures >= 200, `expected the lesson diagrams to carry over, got ${figures}`);
});

test('generated term links point at real sections, and search works in every book', async () => {
  for (const id of BOOK_SUBJECTS) {
    const b = makeBook(id, generatedJson(id));
    for (const c of b.chapters) {
      const sec = new Set(c.sections.map((s) => s.id));
      c.terms.forEach((t) => assert.ok(t.sectionId === 'terms' || sec.has(t.sectionId), `${id}/${c.id}: term "${t.term}" links to missing section ${t.sectionId}`));
    }
    const title = b.chapters[b.chapters.length - 1].sections[0].title;
    assert.ok(searchBook(b, title).length > 0, `${id}: searching for "${title}" found nothing`);
  }
});

test('content contains no markup other than **bold**', () => {
  const strings = chapter.sections.flatMap((s) => s.blocks.flatMap(blockStrings));
  strings.forEach((t) => assert.ok(!/[<>]/.test(t), `markup characters in: ${t.slice(0, 50)}`));
});

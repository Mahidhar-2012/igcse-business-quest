// Content integrity tests: run with `npm test` (uses Node's built-in test runner, no extra packages).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (p) => path.join(root, 'public', p);

const physics = await import('../src/physics/data/index.js');
const business = await import('../src/data/syllabusData.js');
const chemistry = await import('../src/chemistry/data/index.js');
const economics = await import('../src/economics/data/index.js');
const english = await import('../src/english/data/index.js');
const { SUBJECT_META } = await import('../src/lib/overview.js');

const lessonsOf = (units) => units.flatMap((u) => u.submodules);
const allQuestions = (course) => Object.values(course.questionIndex);

test('lesson totals used by the hub match the real content', () => {
  assert.equal(SUBJECT_META.physics.total, lessonsOf(physics.units).length);
  assert.equal(SUBJECT_META.business.total, lessonsOf(business.units).length);
  assert.equal(SUBJECT_META.chemistry.total, lessonsOf(chemistry.units).length);
  assert.equal(SUBJECT_META.economics.total, lessonsOf(economics.units).length);
  assert.equal(SUBJECT_META.english.total, english.allLessons.length);
});

test('every question id is unique and every lesson has content', () => {
  for (const [name, course] of [['physics', physics], ['business', business], ['chemistry', chemistry], ['economics', economics]]) {
    const ids = Object.keys(course.questionIndex);
    assert.equal(new Set(ids).size, ids.length, `${name}: duplicate question ids`);
    for (const sub of lessonsOf(course.units)) assert.ok(sub.cards.length > 0, `${name}: ${sub.id} has no cards`);
  }
});

test('multiple-choice and scenario questions are well formed', () => {
  for (const [name, course] of [['physics', physics], ['business', business], ['chemistry', chemistry], ['economics', economics]]) {
    for (const { qid, challenge: q } of allQuestions(course)) {
      if (q.type === 'mcq') {
        assert.ok(q.options.length >= 2, `${name} ${qid}: needs 2+ options`);
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${name} ${qid}: bad answer index`);
        assert.ok(q.options.every((o) => o.text && o.why), `${name} ${qid}: option missing text or explanation`);
      }
      if (q.type === 'scenario') {
        assert.equal(q.decisions.filter((d) => d.best).length, 1, `${name} ${qid}: scenario needs exactly one best decision`);
      }
      if (q.type === 'calc') {
        assert.ok(Number.isFinite(q.answer), `${name} ${qid}: calc answer must be a number`);
        assert.ok(q.steps?.length > 0, `${name} ${qid}: calc needs worked steps`);
      }
    }
  }
});

test('new question types (select-all, matching, gap-fill, written) are well formed', () => {
  let seen = { multi: 0, match: 0, cloze: 0, short: 0 };
  for (const [name, course] of [['physics', physics], ['business', business], ['chemistry', chemistry], ['economics', economics]]) {
    for (const { qid, challenge: q } of allQuestions(course)) {
      if (q.type === 'multi') {
        seen.multi += 1;
        assert.ok(q.options.length >= 3, `${name} ${qid}: multi needs 3+ options`);
        assert.ok(q.options.some((o) => o.correct) && q.options.some((o) => !o.correct), `${name} ${qid}: multi needs correct and wrong options`);
        assert.ok(q.options.every((o) => o.text && o.why), `${name} ${qid}: option missing text or explanation`);
      }
      if (q.type === 'match') {
        seen.match += 1;
        assert.ok(q.pairs.length >= 3, `${name} ${qid}: match needs 3+ pairs`);
        assert.equal(new Set(q.pairs.map((p) => p.right)).size, q.pairs.length, `${name} ${qid}: duplicate partners in match`);
      }
      if (q.type === 'cloze') {
        seen.cloze += 1;
        assert.equal(q.text.split('___').length - 1, q.answers.length, `${name} ${qid}: blanks and answers differ`);
      }
      if (q.type === 'short') {
        seen.short += 1;
        assert.ok(q.points.length >= 1 && q.model, `${name} ${qid}: short answer needs mark points and a model answer`);
      }
    }
  }
  assert.ok(seen.multi > 0 && seen.match > 0 && seen.cloze > 0 && seen.short > 0, `expected every new type to be used: ${JSON.stringify(seen)}`);
});

test('business: multiple-choice answers cannot be guessed from their length', () => {
  let n = 0, longest = 0;
  for (const { challenge: q } of allQuestions(business)) {
    if (q.type !== 'mcq') continue;
    n += 1;
    if (q.options[q.answer].text.length === Math.max(...q.options.map((o) => o.text.length))) longest += 1;
  }
  assert.ok(longest / n < 0.6, `the correct answer is the longest option in ${longest} of ${n} questions`);
});

test('physics: every past-paper image exists and every answer is A to D', () => {
  let count = 0;
  for (const unit of physics.units) {
    for (const p of unit.papers) {
      assert.ok(p.questions.length > 0, `${p.id}: empty set`);
      for (const q of p.questions) {
        count += 1;
        if (q.type === 'paper') {
          assert.ok(existsSync(pub(q.img)), `missing image ${q.img}`);
          assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3, `${q.src}: bad answer`);
        } else {
          assert.equal(q.type, 'written');
          assert.ok(existsSync(pub(q.img)), `missing question image ${q.img}`);
          assert.ok(existsSync(pub(q.msImg)), `missing mark scheme image ${q.msImg}`);
        }
      }
    }
  }
  assert.ok(count > 1500, `expected 1500+ past-paper questions, found ${count}`);
});

test('physics: figure references point to existing vector diagrams', async () => {
  const fs = await import('node:fs');
  const src = ['svgFigs.jsx', 'svgChem.jsx', 'svgEcon.jsx'].map((f) => fs.readFileSync(path.join(root, 'src/components', f), 'utf8')).join('\n');
  const keys = new Set([...src.matchAll(/^  (\w+): \w+,$/gm)].map((m) => m[1]));
  let checked = 0;
  for (const course of [physics, chemistry, economics]) {
    for (const { qid, challenge } of allQuestions(course)) {
      if (challenge.fig?.svg) { checked += 1; assert.ok(keys.has(challenge.fig.svg), `${qid}: unknown diagram ${challenge.fig.svg}`); }
    }
    for (const sub of lessonsOf(course.units)) {
      for (const card of sub.cards) if (card.fig?.svg) { checked += 1; assert.ok(keys.has(card.fig.svg), `${sub.id}: unknown diagram ${card.fig.svg}`); }
    }
  }
  assert.ok(checked > 30, `expected diagram references to check, found ${checked}`);
});

test('english: lessons have unique ids and valid card types', () => {
  const ids = english.allLessons.map((l) => l.id);
  assert.equal(new Set(ids).size, ids.length, 'duplicate english lesson ids');
  const types = new Set(['note', 'steps', 'dont', 'bank', 'model', 'try', 'annotated']);
  for (const lesson of english.allLessons) {
    assert.ok(lesson.cards.length > 0, `${lesson.id}: no cards`);
    for (const card of lesson.cards) {
      assert.ok(types.has(card.type), `${lesson.id}: unknown card type ${card.type}`);
      assert.ok(card.title, `${lesson.id}: card without title`);
    }
  }
});

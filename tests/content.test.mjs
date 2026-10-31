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
const english = await import('../src/english/data/index.js');
const { SUBJECT_META } = await import('../src/lib/overview.js');

const lessonsOf = (units) => units.flatMap((u) => u.submodules);
const allQuestions = (course) => Object.values(course.questionIndex);

test('lesson totals used by the hub match the real content', () => {
  assert.equal(SUBJECT_META.physics.total, lessonsOf(physics.units).length);
  assert.equal(SUBJECT_META.business.total, lessonsOf(business.units).length);
  assert.equal(SUBJECT_META.english.total, english.allLessons.length);
});

test('every question id is unique and every lesson has content', () => {
  for (const [name, course] of [['physics', physics], ['business', business]]) {
    const ids = Object.keys(course.questionIndex);
    assert.equal(new Set(ids).size, ids.length, `${name}: duplicate question ids`);
    for (const sub of lessonsOf(course.units)) assert.ok(sub.cards.length > 0, `${name}: ${sub.id} has no cards`);
  }
});

test('multiple-choice and scenario questions are well formed', () => {
  for (const [name, course] of [['physics', physics], ['business', business]]) {
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
  const src = (await import('node:fs')).readFileSync(path.join(root, 'src/components/svgFigs.jsx'), 'utf8');
  const keys = new Set([...src.matchAll(/^  (\w+): \w+,$/gm)].map((m) => m[1]));
  for (const { qid, challenge } of allQuestions(physics)) {
    if (challenge.fig?.svg) assert.ok(keys.has(challenge.fig.svg), `${qid}: unknown diagram ${challenge.fig.svg}`);
  }
  for (const sub of lessonsOf(physics.units)) {
    for (const card of sub.cards) if (card.fig?.svg) assert.ok(keys.has(card.fig.svg), `${sub.id}: unknown diagram ${card.fig.svg}`);
  }
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

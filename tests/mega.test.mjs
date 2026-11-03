// Business "Exam Mega Unit": the mock papers must be complete, correctly totalled and cover every unit.
import { test } from 'node:test';
import assert from 'node:assert/strict';

const { units } = await import('../src/data/syllabusData.js');
const { paper1Mocks, paper2Mocks, mockPapers, unitPapers, marksOf } = await import('../src/data/megaExams.js');

const parts = (exam) => exam.questions.flatMap((q) => q.parts);

test('there are three Paper 1 mocks and three Paper 2 mocks, 80 marks each', () => {
  assert.equal(paper1Mocks.length, 3);
  assert.equal(paper2Mocks.length, 3);
  for (const e of mockPapers) {
    assert.equal(e.questions.length, 4, `${e.id}: questions`);
    assert.equal(marksOf(e), 80, `${e.id}: marks`);
    assert.equal(e.mock, true);
  }
});

test('mock ids are unique and do not collide with unit exam ids', () => {
  const ids = mockPapers.map((e) => e.id);
  assert.equal(new Set(ids).size, ids.length);
  const unitIds = new Set(units.flatMap((u) => u.exams.map((e) => e.id)));
  ids.forEach((id) => assert.ok(!unitIds.has(id), `${id} collides with a unit exam`));
});

test('every Paper 1 question and every Paper 2 case study is used exactly once', () => {
  const used = paper1Mocks.flatMap((e) => e.questions.map((q) => `${q.unitId}|${q.stemTitle.replace(/^Question \d+:\s*/, '')}`));
  const all = units.flatMap((u) => u.exams.filter((e) => e.paper === 1).flatMap((e) => e.questions.map((q) => `${u.id}|${q.stemTitle.replace(/^Question \d+:\s*/, '')}`)));
  assert.equal(used.length, all.length);
  assert.deepEqual([...used].sort(), [...all].sort());

  const cases = paper2Mocks.flatMap((e) => e.questions.map((q) => q.unitId));
  const expected = units.flatMap((u) => u.exams.filter((e) => e.paper === 2).flatMap((e) => e.questions.map(() => u.id)));
  assert.deepEqual([...cases].sort(), [...expected].sort());
});

test('each Paper 1 mock spans four different units, and every unit is in the set', () => {
  for (const e of paper1Mocks) assert.equal(new Set(e.questions.map((q) => q.unitId)).size, 4, `${e.id}: units`);
  const seen = new Set(paper1Mocks.flatMap((e) => e.questions.map((q) => q.unitId)));
  const examUnits = units.filter((u) => u.exams.length).map((u) => u.id);
  assert.deepEqual([...seen].sort(), [...examUnits].sort());
  for (const e of paper1Mocks) assert.deepEqual(e.questions.map((q) => q.stemTitle.match(/^Question (\d+):/)[1]), ['1', '2', '3', '4'], `${e.id}: question numbers`);
});

test('each Paper 2 mock carries its own case study with every question', () => {
  for (const e of paper2Mocks) {
    for (const q of e.questions) {
      assert.ok(q.intro && q.intro.title && q.intro.paragraphs.length, `${e.id}: a question has no case study`);
    }
    assert.equal(new Set(e.questions.map((q) => q.intro.title)).size, 2, `${e.id}: should use two case studies`);
  }
});

test('every part has a full mark scheme and a model answer that adds up', () => {
  for (const e of mockPapers) {
    for (const p of parts(e)) {
      const where = `${e.id} (${p.label}) ${p.command}`;
      assert.ok(p.text && p.command && p.model, `${where}: missing text or model answer`);
      assert.ok(p.points.length > 0, `${where}: no mark scheme points`);
      const awarded = p.points.reduce((n, pt) => n + pt.m, 0);
      assert.ok(awarded >= p.marks, `${where}: mark scheme gives ${awarded} but the part is worth ${p.marks}`);
      assert.ok(p.points.every((pt) => ['K', 'A', 'N', 'E'].includes(pt.ao) && pt.t), `${where}: a point has no objective or text`);
    }
  }
});

test('unit papers are available for single-topic practice', () => {
  assert.equal(unitPapers.length, units.reduce((n, u) => n + u.exams.length, 0));
  assert.ok(unitPapers.length >= 12);
});

// English writing-practice tasks and the Content/Language self-marking bands.
import { test } from 'node:test';
import assert from 'node:assert/strict';

const { WRITING_TASKS, WRITING_GROUPS, taskById } = await import('../src/english/data/writing.js');
const { CONTENT_BANDS, LANGUAGE_BANDS, CONTENT_MAX, LANGUAGE_MAX, WRITING_MAX, writingVerdict } = await import('../src/english/data/writingMarks.js');

test('every writing task is complete and has a model answer', () => {
  assert.ok(WRITING_TASKS.length >= 20, `expected many tasks, got ${WRITING_TASKS.length}`);
  const ids = WRITING_TASKS.map((t) => t.id);
  assert.equal(new Set(ids).size, ids.length, 'task ids must be unique');
  for (const t of WRITING_TASKS) {
    assert.ok(t.title && t.type && t.aim, `${t.id}: missing label`);
    assert.ok([5, 6].includes(t.ex), `${t.id}: exercise must be 5 or 6`);
    assert.ok(Array.isArray(t.task) && t.task.length && t.task.every((x) => typeof x === 'string'), `${t.id}: task text`);
    assert.ok(Array.isArray(t.model) && t.model.length && t.model.every((x) => x && x.trim()), `${t.id}: model answer`);
    assert.ok(t.modelWords > 20, `${t.id}: model should be a real answer`);
    assert.ok(!/teacher-marked/i.test(t.title), `${t.id}: teacher-marked responses should be excluded`);
    assert.equal(taskById(t.id), t, `${t.id}: lookup`);
  }
});

test('emails are Exercise 5 and the longer tasks are Exercise 6', () => {
  const email = WRITING_GROUPS.find((g) => g.key === 'email');
  assert.ok(email && email.ex === 5 && email.tasks.every((t) => t.ex === 5));
  for (const g of WRITING_GROUPS.filter((g) => g.key !== 'email')) {
    assert.equal(g.ex, 6, `${g.key}: Exercise 6`);
    assert.ok(g.tasks.length > 0, `${g.key}: has tasks`);
  }
  assert.ok(WRITING_GROUPS.some((g) => g.key === 'article') && WRITING_GROUPS.some((g) => g.key === 'essay'));
});

test('the Content and Language bands total 15 and rise from 0 to full marks', () => {
  assert.equal(CONTENT_MAX + LANGUAGE_MAX, WRITING_MAX);
  assert.equal(WRITING_MAX, 15);
  for (const [bands, max] of [[CONTENT_BANDS, CONTENT_MAX], [LANGUAGE_BANDS, LANGUAGE_MAX]]) {
    assert.equal(bands[0].marks, 0, 'first band is 0');
    assert.equal(bands[bands.length - 1].marks, max, 'top band is full marks');
    for (let i = 1; i < bands.length; i++) assert.ok(bands[i].marks > bands[i - 1].marks && bands[i].band && bands[i].desc, 'bands rise and are described');
  }
});

test('the verdict reflects the total out of 15', () => {
  assert.equal(writingVerdict(15).label, 'A* standard');
  assert.equal(writingVerdict(15).pct, 100);
  assert.equal(writingVerdict(0).label, 'Keep practising');
  assert.ok(/Developing|Good|Strong/.test(writingVerdict(9).label));
});

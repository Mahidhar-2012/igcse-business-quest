// Spaced repetition and weakness finder: run with `npm test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { schedule, dueIds, dueCount, weakLessons, addDays, INTERVALS } from '../src/lib/srs.js';

test('addDays crosses month and year ends', () => {
  assert.equal(addDays('2026-01-30', 3), '2026-02-02');
  assert.equal(addDays('2026-12-31', 1), '2027-01-01');
});

test('a wrong answer is due tomorrow in box 0', () => {
  assert.deepEqual(schedule(undefined, false, '2026-11-01'), { box: 0, due: '2026-11-02' });
  assert.deepEqual(schedule({ box: 4, due: '2026-11-01' }, false, '2026-11-01'), { box: 0, due: '2026-11-02' });
});

test('a new correct answer starts at 3 days and each correct review moves it up one box', () => {
  let e = schedule(undefined, true, '2026-11-01');
  assert.deepEqual(e, { box: 2, due: '2026-11-04' });
  e = schedule(e, true, '2026-11-04');
  assert.equal(e.box, 3);
  assert.equal(e.due, addDays('2026-11-04', INTERVALS[2]));
});

test('the box never goes above the longest interval', () => {
  const e = schedule({ box: INTERVALS.length, due: '2026-11-01' }, true, '2026-11-01');
  assert.equal(e.box, INTERVALS.length);
  assert.equal(e.due, addDays('2026-11-01', INTERVALS[INTERVALS.length - 1]));
});

test('dueIds returns only due questions, most overdue first, and skips missing ones', () => {
  const srs = { a: { box: 2, due: '2026-11-01' }, b: { box: 1, due: '2026-10-28' }, c: { box: 3, due: '2026-11-09' }, d: { box: 1, due: '2026-10-30' } };
  assert.deepEqual(dueIds(srs, '2026-11-01'), ['b', 'd', 'a']);
  assert.deepEqual(dueIds(srs, '2026-11-01', (id) => id !== 'b'), ['d', 'a']);
  assert.equal(dueCount(srs, '2026-11-01'), 3);
});

test('weakLessons needs a few attempts and ranks the lowest accuracy first', () => {
  const acc = { x: { r: 1, w: 1, t: 'Too few' }, y: { r: 2, w: 3, t: 'Hard' }, z: { r: 9, w: 1, t: 'Fine' }, w: { r: 1, w: 3, t: 'Hardest' } };
  const weak = weakLessons(acc);
  assert.deepEqual(weak.map((l) => l.id), ['w', 'y']);
  assert.equal(weak[0].pct, 25);
});

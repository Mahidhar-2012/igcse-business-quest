// Teacher analytics: run with `npm test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { summarise, supportFlags, weeklyTrend, lessonBreakdown } from '../src/lib/insights.js';

test('no saved data means not started and no accuracy figure', () => {
  const s = summarise(null, 20);
  assert.equal(s.started, false);
  assert.equal(s.accuracy, null);
  assert.equal(s.pctDone, 0);
  assert.deepEqual(supportFlags(s, '2026-11-02'), []);
});

test('accuracy needs at least five answers', () => {
  assert.equal(summarise({ xp: 5, acc: { a: { r: 2, w: 1, t: 'A' } } }, 10).accuracy, null);
  assert.equal(summarise({ xp: 5, acc: { a: { r: 4, w: 1, t: 'A' } } }, 10).accuracy, 80);
});

test('lessons are strong or weak only after three answers', () => {
  const b = lessonBreakdown({ a: { r: 1, w: 1, t: 'Too few' }, b: { r: 1, w: 3, t: 'Weak' }, c: { r: 9, w: 1, t: 'Strong' } });
  assert.deepEqual(b.weak.map((x) => x.id), ['b']);
  assert.deepEqual(b.strong.map((x) => x.id), ['c']);
  assert.deepEqual(b.rows.map((x) => x.id), ['b', 'c']);
});

test('lesson completion counts finished lessons against the subject total', () => {
  const s = summarise({ xp: 50, subs: { x: { done: true, stars: 3 }, y: { done: false, stars: 1 }, z: { done: true, stars: 2 } } }, 10);
  assert.equal(s.done, 2);
  assert.equal(s.pctDone, 20);
  assert.equal(s.stars, 6);
});

test('support indicators name their evidence and stay silent without it', () => {
  const struggling = summarise({ xp: 10, lastDay: '2026-10-01', mistakes: new Array(16).fill('q'), acc: { a: { r: 1, w: 4, t: 'Forces' }, b: { r: 0, w: 5, t: 'Moments' }, c: { r: 3, w: 3, t: 'Energy' } } }, 10);
  const flags = supportFlags(struggling, '2026-11-02');
  assert.equal(flags.length, 4);
  assert.match(flags[0], /accuracy/);
  assert.ok(flags.some((f) => /32 days/.test(f)));
  assert.ok(flags.some((f) => /Forces/.test(f)));
  const fine = summarise({ xp: 90, lastDay: '2026-11-01', acc: { a: { r: 9, w: 1, t: 'A' } } }, 10);
  assert.deepEqual(supportFlags(fine, '2026-11-02'), []);
});

test('weekly trend gives null for weeks with too few answers', () => {
  const at = (day, correct) => ({ created_at: `${day}T10:00:00Z`, correct });
  const attempts = [at('2026-11-02', true), at('2026-11-02', true), at('2026-11-01', false), at('2026-10-31', true), at('2026-10-30', true), at('2026-10-20', true)];
  const t = weeklyTrend(attempts, '2026-11-02', 4);
  assert.equal(t.length, 4);
  assert.equal(t[3].n, 5);
  assert.equal(t[3].pct, 80);
  assert.equal(t[2].pct, null);
});

// Cloud-save merge rules: run with `npm test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mergeState, sameState } from '../src/lib/merge.js';

test('a missing side returns the other', () => {
  assert.deepEqual(mergeState(null, { xp: 5 }), { xp: 5 });
  assert.deepEqual(mergeState({ xp: 5 }, null), { xp: 5 });
  assert.equal(mergeState(null, null), null);
});

test('xp, lessons, stars, bosses and exams keep the larger side', () => {
  const a = { xp: 100, subs: { s1: { done: true, stars: 2 } }, bosses: { u1: 1 }, exams: { e1: 40 } };
  const b = { xp: 140, subs: { s1: { done: true, stars: 3 }, s2: { done: true, stars: 1 } }, bosses: { u1: 3 }, exams: { e1: 30, e2: 70 } };
  const m = mergeState(a, b);
  assert.equal(m.xp, 140);
  assert.deepEqual(m.subs, { s1: { done: true, stars: 3 }, s2: { done: true, stars: 1 } });
  assert.deepEqual(m.bosses, { u1: 3 });
  assert.deepEqual(m.exams, { e1: 40, e2: 70 });
});

test('streak and today XP come from whichever side studied most recently', () => {
  const m = mergeState({ lastDay: '2026-11-01', streak: 4, todayXp: 10 }, { lastDay: '2026-11-02', streak: 5, todayXp: 30 });
  assert.equal(m.lastDay, '2026-11-02');
  assert.equal(m.streak, 5);
  assert.equal(m.todayXp, 30);
});

test('mistakes are joined, srs keeps the later review date, accuracy keeps the side with more attempts', () => {
  const a = { mistakes: ['q1'], srs: { q1: { box: 1, due: '2026-11-03' } }, acc: { l1: { r: 1, w: 1, t: 'L' } } };
  const b = { mistakes: ['q1', 'q2'], srs: { q1: { box: 2, due: '2026-11-08' } }, acc: { l1: { r: 5, w: 2, t: 'L' } } };
  const m = mergeState(a, b);
  assert.deepEqual(m.mistakes, ['q1', 'q2']);
  assert.equal(m.srs.q1.box, 2);
  assert.equal(m.acc.l1.r, 5);
});

test('local settings win', () => {
  assert.equal(mergeState({ sound: false }, { sound: true }).sound, false);
});

test('notes subjects join their finished lessons', () => {
  assert.deepEqual(mergeState({ done: ['a', 'b'] }, { done: ['b', 'c'] }).done, ['a', 'b', 'c']);
});

test('the more recent reset wins outright, in either direction', () => {
  const fresh = { xp: 0, resetAt: 2000 };
  const old = { xp: 900, resetAt: 1000 };
  assert.deepEqual(mergeState(old, fresh), fresh);
  assert.deepEqual(mergeState(fresh, old), fresh);
  assert.equal(mergeState({ xp: 50 }, { resetAt: 5 }).xp ?? 0, 0);
});

test('sameState ignores key order', () => {
  assert.ok(sameState({ a: 1, b: { c: 2, d: 3 } }, { b: { d: 3, c: 2 }, a: 1 }));
  assert.ok(!sameState({ a: 1 }, { a: 2 }));
});

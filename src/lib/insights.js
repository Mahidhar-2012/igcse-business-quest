// Teacher-facing summaries of a student's real saved data. Pure functions. Nothing here guesses: when there is too
// little evidence the result is null and the screen says "Not enough data yet".
import { addDays, dueCount } from './srs.js';

export const MIN_ATTEMPTS = 5; // answers needed before an accuracy figure is shown
const MIN_PER_LESSON = 3;
export const STRONG = 85;
export const WEAK = 60;

const pct = (r, w) => Math.round((r / (r + w)) * 100);

/** Per-lesson first-try accuracy from the saved `acc` map, split into strong and weaker lessons. */
export function lessonBreakdown(acc) {
  const rows = Object.entries(acc || {})
    .map(([id, a]) => ({ id, title: a.t || id, r: a.r || 0, w: a.w || 0 }))
    .filter((x) => x.r + x.w >= MIN_PER_LESSON)
    .map((x) => ({ ...x, pct: pct(x.r, x.w) }))
    .sort((a, b) => a.pct - b.pct);
  return { rows, weak: rows.filter((x) => x.pct < WEAK), strong: rows.filter((x) => x.pct >= STRONG).reverse() };
}

/** Headline numbers from one student's saved progress for one subject (data may be null if they have not started). */
export function summarise(data, total) {
  const d = data || {};
  const subs = Object.values(d.subs || {});
  const done = subs.filter((s) => s?.done).length;
  const r = Object.values(d.acc || {}).reduce((n, a) => n + (a.r || 0), 0);
  const w = Object.values(d.acc || {}).reduce((n, a) => n + (a.w || 0), 0);
  return {
    started: !!data && (done > 0 || (d.xp || 0) > 0),
    xp: d.xp || 0,
    streak: d.streak || 0,
    lastDay: d.lastDay || null,
    done,
    total: total || 0,
    pctDone: total ? Math.min(100, Math.round((done / total) * 100)) : 0,
    stars: subs.reduce((n, s) => n + (s?.stars || 0), 0),
    mistakes: (d.mistakes || []).length,
    due: dueCount(d.srs, undefined),
    answers: r + w,
    accuracy: r + w >= MIN_ATTEMPTS ? pct(r, w) : null,
    lessons: lessonBreakdown(d.acc),
  };
}

const daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);

/** Support indicators: prompts for a conversation, not judgements. Each carries the evidence that triggered it. */
export function supportFlags(s, today) {
  if (!s.started) return [];
  const out = [];
  if (s.accuracy !== null && s.accuracy < WEAK && s.answers >= 10) out.push(`First-try accuracy is ${s.accuracy}% over ${s.answers} answers`);
  if (s.lessons.weak.length >= 2) out.push(`${s.lessons.weak.length} lessons under ${WEAK}% first-try: ${s.lessons.weak.slice(0, 2).map((l) => l.title).join(', ')}`);
  if (s.lastDay && today && daysBetween(s.lastDay, today) >= 14) out.push(`No study activity for ${daysBetween(s.lastDay, today)} days`);
  if (s.mistakes >= 15) out.push(`${s.mistakes} questions still in the mistake bank`);
  return out;
}

/** Accuracy for each of the last `weeks` weeks (oldest first) from logged attempts; null where there are too few answers. */
export function weeklyTrend(attempts, today, weeks = 4) {
  const out = [];
  for (let i = weeks - 1; i >= 0; i--) {
    const from = addDays(today, -7 * (i + 1) + 1);
    const to = addDays(today, -7 * i);
    const inWeek = (attempts || []).filter((a) => {
      const day = String(a.created_at).slice(0, 10);
      return day >= from && day <= to;
    });
    const r = inWeek.filter((a) => a.correct).length;
    out.push({ from, to, n: inWeek.length, pct: inWeek.length >= MIN_ATTEMPTS ? pct(r, inWeek.length - r) : null });
  }
  return out;
}

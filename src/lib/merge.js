// Merging two copies of one subject's saved progress (this browser's and the account's), so that signing in on a
// second device never loses work. Pure functions: no storage, no network.

const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : 0);

const mergeMap = (a, b, pick) => {
  const out = { ...obj(a) };
  for (const [k, v] of Object.entries(obj(b))) out[k] = k in out ? pick(out[k], v) : v;
  return out;
};

const maxOf = (x, y) => Math.max(num(x), num(y));
const later = (x, y) => ((y?.due || '') > (x?.due || '') ? y : x);
const moreAttempts = (x, y) => (num(y?.r) + num(y?.w) > num(x?.r) + num(x?.w) ? y : x);

/** Merge two saved states. `a` is local and wins on personal settings; counts and completed work take the larger side. */
export function mergeState(a, b) {
  if (!a) return b || null;
  if (!b) return a;
  // A reset on either side is deliberate: the more recent reset wins outright, so a reset is not undone by an old copy.
  const ra = num(a.resetAt);
  const rb = num(b.resetAt);
  if (ra !== rb) return ra > rb ? a : b;

  const out = { ...b, ...a };
  if (Array.isArray(a.done) || Array.isArray(b.done)) out.done = [...new Set([...(a.done || []), ...(b.done || [])])]; // notes-only subjects
  if ('xp' in a || 'xp' in b) out.xp = maxOf(a.xp, b.xp);
  // streak and today's XP belong to whichever side studied most recently
  const recent = (b.lastDay || '') > (a.lastDay || '') ? b : a;
  out.lastDay = recent.lastDay ?? null;
  if ('streak' in recent) out.streak = recent.streak;
  if ('todayXp' in recent) out.todayXp = recent.todayXp;
  if ('subs' in a || 'subs' in b) {
    out.subs = mergeMap(a.subs, b.subs, (x, y) => ({ done: !!(x?.done || y?.done), stars: maxOf(x?.stars, y?.stars) }));
  }
  if ('bosses' in a || 'bosses' in b) out.bosses = mergeMap(a.bosses, b.bosses, maxOf);
  if ('exams' in a || 'exams' in b) out.exams = mergeMap(a.exams, b.exams, maxOf);
  if ('mistakes' in a || 'mistakes' in b) out.mistakes = [...new Set([...(a.mistakes || []), ...(b.mistakes || [])])];
  if ('srs' in a || 'srs' in b) out.srs = mergeMap(a.srs, b.srs, later);
  if ('acc' in a || 'acc' in b) out.acc = mergeMap(a.acc, b.acc, moreAttempts);
  return out;
}

const canon = (v) => {
  if (Array.isArray(v)) return v.map(canon);
  if (v && typeof v === 'object') return Object.fromEntries(Object.keys(v).sort().map((k) => [k, canon(v[k])]));
  return v;
};

/** Comparison of two saved states that ignores key order. */
export const sameState = (a, b) => JSON.stringify(canon(a)) === JSON.stringify(canon(b));

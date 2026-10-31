// Personal learning overview for the hub. Reads each subject's saved progress straight from localStorage
// (no subject content is loaded, so the hub stays light). Everything here belongs to this browser only.

/** Lesson totals are kept here so the hub never has to load the subject data. Each subject app warns in the console if its data disagrees. */
export const SUBJECT_META = {
  english: { key: 'igcse-english:v1', total: 42, lessonsLabel: 'lessons read' },
  physics: { key: 'igcse-physics-quest:v1', total: 26, lessonsLabel: 'lessons done' },
  business: { key: 'igcse-business-quest:v2', total: 38, lessonsLabel: 'lessons done' },
};

export const DAILY_GOAL_XP = 50;

const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null');
  } catch {
    return null;
  }
};

/** Warn (dev aid) when a subject's real lesson count differs from the number used by the hub. */
export const checkTotal = (subject, actual) => {
  if (SUBJECT_META[subject].total !== actual) {
    console.warn(`overview: ${subject} has ${actual} lessons but SUBJECT_META says ${SUBJECT_META[subject].total}`);
  }
};

export function loadOverview() {
  const today = dayKey();
  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yesterday = dayKey(y);

  const subjects = {};
  let xp = 0;
  let todayXp = 0;
  let streak = 0;
  let lastActive = null;
  let lastSubject = null;

  for (const [id, meta] of Object.entries(SUBJECT_META)) {
    const s = read(meta.key);
    let done = 0;
    let stars = 0;
    if (id === 'english') {
      done = Array.isArray(s?.done) ? s.done.length : 0;
    } else if (s?.subs) {
      const recs = Object.values(s.subs);
      done = recs.filter((r) => r?.done).length;
      stars = recs.reduce((n, r) => n + (r?.stars || 0), 0);
    }
    const pct = Math.min(100, Math.round((done / meta.total) * 100));
    const active = s?.lastDay || null;
    subjects[id] = { done, total: meta.total, pct, stars, mistakes: s?.mistakes?.length || 0, lastDay: active, started: done > 0 || (s?.xp || 0) > 0 };
    if (s && id !== 'english') {
      xp += s.xp || 0;
      if (s.lastDay === today) todayXp += s.todayXp || 0;
      if ((s.lastDay === today || s.lastDay === yesterday) && (s.streak || 0) > streak) streak = s.streak;
    }
    if (active && (!lastActive || active > lastActive)) {
      lastActive = active;
      lastSubject = id;
    }
  }
  return { subjects, xp, todayXp, streak, lastSubject, goal: DAILY_GOAL_XP };
}

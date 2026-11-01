// Spaced repetition (a simple Leitner scheme) and the weakness finder. Pure functions, so they are easy to test.
// srs[qid]  = { box, due: 'YYYY-MM-DD' }          every question the learner has answered
// acc[subId] = { r, w, t }                          right and wrong first attempts per lesson, and the lesson title

/** Days until the next review for boxes 1 to 6. A wrong answer drops the question to box 0, due tomorrow. */
export const INTERVALS = [1, 3, 7, 14, 30, 60];
export const SESSION_SIZE = 10;
export const MIN_ATTEMPTS = 3;

export const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const addDays = (key, n) => {
  const [y, m, d] = key.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + n));
};

/** Next srs entry after a first attempt. A new question answered correctly starts in box 2 (3 days). */
export const schedule = (entry, correct, today = dayKey()) => {
  if (!correct) return { box: 0, due: addDays(today, INTERVALS[0]) };
  const box = entry ? Math.min(entry.box + 1, INTERVALS.length) : 2;
  return { box, due: addDays(today, INTERVALS[box - 1]) };
};

/** Question ids due today or earlier, most overdue first. */
export const dueIds = (srs = {}, today = dayKey(), exists = () => true) =>
  Object.entries(srs)
    .filter(([qid, e]) => e && e.due <= today && exists(qid))
    .sort((a, b) => (a[1].due < b[1].due ? -1 : a[1].due > b[1].due ? 1 : a[1].box - b[1].box))
    .map(([qid]) => qid);

/** Count of entries due, used by the hub, which does not load subject content. */
export const dueCount = (srs = {}, today = dayKey()) => Object.values(srs).filter((e) => e && e.due <= today).length;

/** Lessons ranked by how often the first attempt was wrong; needs a few attempts before a lesson is judged. */
export const weakLessons = (acc = {}, limit = 5) =>
  Object.entries(acc)
    .map(([id, a]) => ({ id, title: a.t, right: a.r, wrong: a.w, attempts: a.r + a.w, pct: Math.round((a.r / (a.r + a.w)) * 100) }))
    .filter((l) => l.attempts >= MIN_ATTEMPTS && l.pct < 85)
    .sort((a, b) => a.pct - b.pct || b.attempts - a.attempts)
    .slice(0, limit);

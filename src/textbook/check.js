// Answer checking for textbook practice. Pure functions so they can be tested without a browser.

/** Reads the first number out of what the student typed ("8", "8.0 m/s", "8,5"). Returns null if there is none. */
export function parseNumber(text) {
  const m = String(text ?? '').trim().replace(',', '.').match(/^[-+]?(\d+\.?\d*|\.\d+)/);
  return m ? Number(m[0]) : null;
}

const close = (a, b, tol) => Math.abs(a - b) <= tol;

/**
 * Grades a numeric practice item.
 * -> { state: 'empty' | 'correct' | 'hint' | 'wrong', feedback? }
 * 'hint' means the answer matches a known common mistake and carries its specific feedback.
 */
export function gradeNumeric(item, text) {
  const n = parseNumber(text);
  if (n === null) return { state: 'empty', feedback: 'Type a number first. You can add the unit if you like.' };
  if (close(n, item.answer, item.tol)) return { state: 'correct' };
  const known = (item.wrong || []).find((w) => close(n, w.value, Math.max(item.tol, Math.abs(w.value) * 0.01)));
  if (known) return { state: 'hint', feedback: known.feedback };
  return { state: 'wrong', feedback: 'Not quite. Check which formula applies, then check the units and the arithmetic. You can also open the worked solution.' };
}

/** The share of options in a set of MCQs where the correct option is strictly the longest (a giveaway to avoid). */
export function longestAnswerShare(mcqs) {
  if (!mcqs.length) return 0;
  const tells = mcqs.filter((q) => {
    const len = q.options.map((o) => o.text.length);
    const right = q.options.find((o) => o.correct).text.length;
    return right === Math.max(...len) && len.filter((l) => l === right).length === 1;
  });
  return tells.length / mcqs.length;
}

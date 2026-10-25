/**
 * Exam part builder.
 * P(label, command, text, marks, points, model)
 *   points: array of strings. Marks for a point are written in the string as (1), (2), (3) or (1+1);
 *           no marker = 1 mark. The marker is removed from the text shown to the student.
 *   model: an example full-marks answer shown after the student writes theirs.
 */
const MARK = /\s*\(([1-4](?:\+[1-4])*)\)/g;

const parsePoint = (p) => {
  let m = 0;
  const t = p.replace(MARK, (_, nums) => {
    m += nums.split('+').reduce((a, b) => a + Number(b), 0);
    return '';
  });
  return { t: t.trim(), m: m || 1 };
};

export const P = (label, command, text, marks, points, model) => ({
  label,
  command,
  text,
  marks,
  points: points.map(parsePoint),
  model,
});

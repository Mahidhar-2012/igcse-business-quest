// Self-marking bands for Cambridge IGCSE ESL (0510/0511) Paper 1 writing (Exercise 5 email, Exercise 6 longer text).
// Both exercises are marked out of 15: Content (6 marks) + Language (9 marks), on two band tables.
// These band descriptions are ORIGINAL plain-English summaries written for this app — they capture what each
// Cambridge band rewards (task fulfilment, relevance, development; range and accuracy of language) without
// reproducing the official mark-scheme wording. Choose the band that best fits your answer.

export const CONTENT_MAX = 6;
export const LANGUAGE_MAX = 9;
export const WRITING_MAX = CONTENT_MAX + LANGUAGE_MAX; // 15

export const CONTENT_BANDS = [
  { marks: 0, band: '0 marks', desc: 'Nothing relevant to credit.' },
  { marks: 2, band: 'Band 1 (1–2)', desc: 'Task only partly done. Some points covered or you drift off the task; ideas are thin or just listed; the style and sense of audience are not quite right.' },
  { marks: 4, band: 'Band 2 (3–4)', desc: 'Task generally done. Most points are covered and relevant; ideas are generally developed; the style generally suits the text type and reader.' },
  { marks: 6, band: 'Band 3 (5–6)', desc: 'Task fully done. Every point is covered and fully relevant; ideas are well developed with detail; the style and tone clearly fit the text type and audience.' },
];

export const LANGUAGE_BANDS = [
  { marks: 0, band: '0 marks', desc: 'Nothing to credit for language.' },
  { marks: 3, band: 'Band 1 (1–3)', desc: 'Meaning is often unclear. Mostly simple structures and common words; frequent errors that get in the way of communication.' },
  { marks: 6, band: 'Band 2 (4–6)', desc: 'Meaning is clear. A range of common vocabulary and some complex sentences, with an attempt at less common words; errors are present but usually do not block meaning.' },
  { marks: 9, band: 'Band 3 (7–9)', desc: 'Communicates skilfully. A wide range of vocabulary (including less common words) and varied simple and complex structures; highly accurate, with only minor slips.' },
];

/** A short, encouraging read-out for a Content+Language total out of 15 (indicative, not an exam grade). */
export const writingVerdict = (marks) => {
  const pct = Math.round((marks / WRITING_MAX) * 100);
  if (marks >= 13) return { label: 'A* standard', pct };
  if (marks >= 11) return { label: 'Strong (A)', pct };
  if (marks >= 9) return { label: 'Good (B/C)', pct };
  if (marks >= 6) return { label: 'Developing', pct };
  return { label: 'Keep practising', pct };
};

// Mathematics reuses the shared byte-card and question builders. Unlike the other subjects, lessons carry their
// practice questions directly (the third argument group of `lesson`), because every question here has computed answers.
export { byte, mc, calc, tfd, fig } from '../../physics/data/helpers.js';
export { multi, match, cloze, short, ord, scn } from '../../data/builders.js';

export const lesson = (id, title, syllabus, microConcept, cards, challenges = []) => ({
  id,
  title,
  syllabus,
  microConcept,
  cards,
  challenges,
});

/** Definition written question: self-marked against the points. */
export const def = (q, points, model) => ({ type: 'short', q, kind: 'Definition', points, model, marks: points.length });

/** Exam-style written question with a command word. */
export const exam = (q, command, points, model) => ({ type: 'short', q, kind: 'Exam question', command, points, model, marks: points.length });

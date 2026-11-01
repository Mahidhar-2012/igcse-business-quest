// Tiny helpers so question data stays compact and readable.

/** Tag a question with the assessment objective it trains (2 = application, 3 = analysis, 4 = evaluation). */
export const ao = (n, question) => ({ ...question, ao: n });

/** Multi-choice with distractor analysis. options = [[text, whyThisIsRightOrWrong], ...]; answer = index of correct option. */
export const mc = (q, options, answer) => ({
  type: 'mcq',
  q,
  options: options.map(([text, why]) => ({ text, why })),
  answer,
});

/**
 * "Select ALL that apply". options = [[text, why, isCorrect], ...]. Needs every correct option and no wrong one.
 */
export const multi = (q, options, explain) => ({
  type: 'multi',
  q,
  options: options.map(([text, why, correct]) => ({ text, why, correct: !!correct })),
  explain,
});

/** Match each item on the left to its partner on the right. pairs = [[left, right], ...] (right column is shuffled). */
export const match = (q, pairs, explain) => ({ type: 'match', q, pairs: pairs.map(([left, right]) => ({ left, right })), explain });

/**
 * Fill the gaps. text uses ___ for each blank; answers = words in order; extras = wrong words added to the word bank.
 */
export const cloze = (q, text, answers, extras = [], explain) => ({ type: 'cloze', q, text, answers, extras, explain });

/**
 * Written answer that the learner self-marks against a mark scheme.
 * kind: 'Definition' | 'Exam question'. points = the creditworthy points (each is one mark). model = a full-mark answer.
 */
export const short = (q, { kind = 'Exam question', points, model, command }) => ({
  type: 'short',
  q,
  kind,
  command,
  points,
  model,
  marks: points.length,
});

/** Chain-of-reasoning ordering. steps are given in the CORRECT order (the UI shuffles them). */
export const ord = (q, steps, explain) => ({ type: 'order', q, steps, explain });

/** Scenario with decisions. decisions = [[text, consequence, isBest], ...]. */
export const scn = (q, decisions, explain) => ({
  type: 'scenario',
  q,
  decisions: decisions.map(([text, outcome, best]) => ({ text, outcome, best: !!best })),
  explain,
});

/** Numeric calculation. steps = array of strings shown after answering. */
export const calc = (q, answer, { unit = '', formula, steps, tol = 0.01 }) => ({
  type: 'calc',
  q,
  answer,
  unit,
  formula,
  steps,
  tol,
});

/**
 * A knowledge byte: a few short points, immediately followed by test question(s) on exactly that byte.
 * Use **double asterisks** in a point to bold a key term.
 */
export const card = (title, points, ...tests) => ({ title, points, tests });

/**
 * Worked A* example (no test). Shows a case, a question, the mark map and a colour-coded model answer.
 *   answer: string or array of paragraphs; wrap segments in [[K|…]] [[A|…]] [[N|…]] [[E|…]] to colour them by objective.
 *   notes:  short bullets explaining why the answer earns the marks.
 */
export const worked = (title, { stem, question, marks, map, answer, notes }) => ({
  title,
  example: { stem, question, marks, map, answer: Array.isArray(answer) ? answer : [answer], notes },
  tests: [],
});

/**
 * Advantages & disadvantages card. options = [[name, [pros...], [cons...]], ...], then test question(s).
 */
export const pc = (title, options, ...tests) => ({
  title,
  options: options.map(([name, pros, cons]) => ({ name, pros, cons })),
  tests,
});

/** Rapid-fire True / False / Depends on context. answer = 'true' | 'false' | 'depends'. */
export const tfd = (q, answer, explain) => ({ type: 'tfd', q, answer, explain });

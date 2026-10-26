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
 * Advantages & disadvantages card. options = [[name, [pros...], [cons...]], ...], then test question(s).
 */
export const pc = (title, options, ...tests) => ({
  title,
  options: options.map(([name, pros, cons]) => ({ name, pros, cons })),
  tests,
});

/** Rapid-fire True / False / Depends on context. answer = 'true' | 'false' | 'depends'. */
export const tfd = (q, answer, explain) => ({ type: 'tfd', q, answer, explain });

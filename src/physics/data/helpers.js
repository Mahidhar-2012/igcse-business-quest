import { mc, calc, tfd } from '../../data/builders.js';

export { mc, calc, tfd };

/**
 * A physics knowledge byte: a few short points, then one test of that byte.
 *  extra.fig  = { svg: 'name', caption } or { src, alt, caption } diagram shown with the card
 *  extra.eq   = array of equations shown in an "Equations to know" box
 *  extra.figAfter = show the diagram after the points
 * Use **bold** for key terms and {{text}} for emphasis.
 */
export const byte = (title, points, test, extra = {}) => ({
  title,
  points,
  tests: test ? [test] : [],
  ...extra,
});

/** Attach a diagram to a question: fig({svg:'speedTime'}, mc(...)) */
export const fig = (f, q) => ({ ...q, fig: f });

export const lesson = (id, title, syllabus, microConcept, cards) => ({
  id,
  title,
  syllabus,
  microConcept,
  cards,
  challenges: [],
});

// Cambridge IGCSE Chemistry 0620 — content map (syllabus for 2026–2028, verified on the Cambridge International website).
// Each unit has lessons made of knowledge bytes (notes, optional diagram, then one test).
import { unit1 } from './units/c1.js';
import { unit2 } from './units/c2.js';
import { unit3 } from './units/c3.js';
import { unit4 } from './units/c4.js';
import { unit5 } from './units/c5.js';
import { unit6 } from './units/c6.js';
import { extras } from './units/extras.js';
import { applyOverlay, dropPractical } from '../../data/overlay.js';
import { hard } from './hard.js';
import { FIGURES } from './figures.js';

export const units = [unit1, unit2, unit3, unit4, unit5, unit6];

// Bytes added by the syllabus audit are appended to the lessons they belong to.
for (const id of Object.keys(extras)) {
  if (!units.some((u) => u.submodules.some((s) => s.id === id))) throw new Error(`extras: unknown lesson ${id}`);
}
for (const unit of units) {
  for (const sub of unit.submodules) {
    if (extras[sub.id]) sub.cards = [...sub.cards, ...extras[sub.id]];
  }
}

// Harder replacements and extra question types, keyed by question id.
applyOverlay(units, hard);

// Diagrams for bytes that did not have one.
const figsLeft = new Set(Object.keys(FIGURES));
for (const unit of units) {
  for (const sub of unit.submodules) {
    for (const card of sub.cards) {
      const key = `${sub.id}|${card.title}`;
      if (FIGURES[key] && !card.fig) { card.fig = FIGURES[key]; figsLeft.delete(key); }
    }
  }
}
if (figsLeft.size) throw new Error(`figures: not found: ${[...figsLeft].join(', ')}`);

// Experiment and practical content is not taught here: topic 12 and the experimental-method bytes are removed.
dropPractical(units, {
  lessons: ['c12-design', 'c12-titration', 'c12-chromatography', 'c12-separation', 'c12-tests'],
  cards: { 'c6-rate': ['Measuring the rate of reaction', 'Evaluating methods of following a reaction'] },
});

/** Flat lookup: question id -> { unit, sub, challenge, qid }. Card tests: `subId:c<cardIndex>.<testIndex>`. */
export const questionIndex = (() => {
  const map = {};
  for (const unit of units) {
    for (const sub of unit.submodules) {
      (sub.challenges || []).forEach((challenge, i) => {
        const qid = `${sub.id}:${i}`;
        map[qid] = { unit, sub, challenge, qid };
      });
      sub.cards.forEach((card, ci) =>
        card.tests.forEach((challenge, ti) => {
          const qid = `${sub.id}:c${ci}.${ti}`;
          map[qid] = { unit, sub, challenge, qid };
        }),
      );
    }
  }
  return map;
})();

/** Question ids belonging to a lesson. */
export const subQuestionIds = (sub) => [
  ...sub.cards.flatMap((card, ci) => card.tests.map((_, ti) => `${sub.id}:c${ci}.${ti}`)),
  ...(sub.challenges || []).map((_, i) => `${sub.id}:${i}`),
];

// Cambridge IGCSE Economics 0455 — content map (syllabus for examination in 2027, 2028 and 2029).
// Each unit has lessons made of knowledge bytes (notes, optional diagram, then one test).
import { unit1, unit2 } from './units/ec1.js';
import { unit3, unit4 } from './units/ec2.js';
import { unit5, unit6 } from './units/ec3.js';
import { extrasA } from './units/ec_extras_a.js';
import { extrasB } from './units/ec_extras_b.js';
import { applyOverlay } from '../../data/overlay.js';
import { hard } from './hard.js';

export const units = [unit1, unit2, unit3, unit4, unit5, unit6];

// Bytes added by the syllabus audit are appended to the lessons they belong to.
const extras = { ...extrasA, ...extrasB };
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

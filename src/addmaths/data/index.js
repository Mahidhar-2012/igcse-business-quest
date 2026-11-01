// Cambridge IGCSE Additional Mathematics 0606 — content map.
// Each unit has lessons made of knowledge bytes (notes, optional diagram, then one test) and a practice pool per lesson.
import { unit1, unit2 } from './units/a1.js';
import { unit3, unit4, unit5, unit6 } from './units/a2.js';
import { unit7 } from './units/a3.js';

export const units = [unit1, unit2, unit3, unit4, unit5, unit6, unit7];

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

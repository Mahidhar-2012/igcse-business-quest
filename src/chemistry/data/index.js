// Cambridge IGCSE Chemistry 0620 — content map (syllabus for 2026–2028, verified on the Cambridge International website).
// Each unit has lessons made of knowledge bytes (notes, optional diagram, then one test).
import { unit1 } from './units/c1.js';
import { unit2 } from './units/c2.js';
import { unit3 } from './units/c3.js';
import { unit4 } from './units/c4.js';
import { unit5 } from './units/c5.js';

export const units = [unit1, unit2, unit3, unit4, unit5];

/** Flat lookup: question id -> { unit, sub, challenge, qid }. Card tests: `subId:c<cardIndex>.<testIndex>`. */
export const questionIndex = (() => {
  const map = {};
  for (const unit of units) {
    for (const sub of unit.submodules) {
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
export const subQuestionIds = (sub) =>
  sub.cards.flatMap((card, ci) => card.tests.map((_, ti) => `${sub.id}:c${ci}.${ti}`));

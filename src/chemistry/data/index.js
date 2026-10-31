// Cambridge IGCSE Chemistry 0620 — content map (syllabus for 2026–2028, verified on the Cambridge International website).
// Each unit has lessons made of knowledge bytes (notes, optional diagram, then one test).
import { unit1 } from './units/c1.js';

export const units = [unit1];

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

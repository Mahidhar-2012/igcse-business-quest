// Cambridge IGCSE Biology 0610 — content map (syllabus for examination in 2026, 2027 and 2028, version 3).
// Part 1 covers syllabus topics 1 to 6. Each unit has lessons made of knowledge bytes (notes, optional diagram, then one test).
import { unit1, unit2, unit3 } from './units/bio1.js';
import { unit4, unit5, unit6 } from './units/bio2.js';
import { unit7, unit8, unit9 } from './units/bio3.js';
import { unit10, unit11, unit12, unit13, unit14, unit15 } from './units/bio4.js';
import { dropPractical } from '../../data/overlay.js';

export const units = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11, unit12, unit13, unit14, unit15];

// Experiment and practical bytes are not taught here.
dropPractical(units, { cards: { 'b6-photosynthesis': ['Investigating photosynthesis', 'Gas exchange in an aquatic plant'] } });

/** Flat lookup: question id -> { unit, sub, challenge, qid }. Card tests: `subId:c<cardIndex>.<testIndex>`; practice pool: `subId:<index>`. */
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

// Cambridge IGCSE Business 0264 — content map (syllabus for 2027-2029).
// Each unit lives in ./units/unitN.js (micro-concept + practice questions).
// ./ct/ctN.js holds the critical-thinking questions (card tests + practice pools); ./cards/cardsN.js holds the knowledge bytes
// (small cards, each followed by a test question) that walk through every syllabus point.
import { unit1 } from './units/unit1.js';
import { unit2 } from './units/unit2.js';
import { unit3 } from './units/unit3.js';
import { unit4 } from './units/unit4.js';
import { unit5 } from './units/unit5.js';
import { unit6 } from './units/unit6.js';
import { unit7 } from './units/unit7.js';
import { cards7 } from './cards/cards7.js';
import { cards7b } from './cards/cards7b.js';
import { cards1 } from './cards/cards1.js';
import { cards2 } from './cards/cards2.js';
import { cards3 } from './cards/cards3.js';
import { cards4 } from './cards/cards4.js';
import { cards5 } from './cards/cards5.js';
import { cards6 } from './cards/cards6.js';
import { exams1 } from './exams/exams1.js';
import { exams2 } from './exams/exams2.js';
import { exams3 } from './exams/exams3.js';
import { exams4 } from './exams/exams4.js';
import { exams5 } from './exams/exams5.js';
import { exams6 } from './exams/exams6.js';
import { ct1 } from './ct/ct1.js';
import { ct2 } from './ct/ct2.js';
import { ct3 } from './ct/ct3.js';
import { ct4 } from './ct/ct4.js';
import { ct5 } from './ct/ct5.js';
import { ct6 } from './ct/ct6.js';
import { pc1 } from './procons/pc1.js';
import { pc2 } from './procons/pc2.js';
import { pc3 } from './procons/pc3.js';

export const units = [unit1, unit2, unit3, unit4, unit5, unit6, unit7];

// Written exam practice (Paper 1 and Paper 2 style) shown after each unit's Mega Quiz.
const examMap = { ...exams1, ...exams2, ...exams3, ...exams4, ...exams5, ...exams6 };
for (const unit of units) unit.exams = examMap[unit.id] || [];

const cards = { ...cards1, ...cards2, ...cards3, ...cards4, ...cards5, ...cards6, ...cards7, ...cards7b };
const procons = { ...pc1, ...pc2, ...pc3 };
const ctMap = { ...ct1, ...ct2, ...ct3, ...ct4, ...ct5, ...ct6 };
for (const unit of units) {
  for (const sub of unit.submodules) {
    // advantages/disadvantages cards go after the main bytes
    sub.cards = [...(cards[sub.id] || []), ...(procons[sub.id] || [])];

    // Critical-thinking rewrite: replaces each card's test(s) and the practice pool.
    const ct = ctMap[sub.id];
    if (ct) {
      if (ct.cards.length !== sub.cards.length) {
        throw new Error(`ct: ${sub.id} has ${ct.cards.length} card-test groups but ${sub.cards.length} cards`);
      }
      sub.cards = sub.cards.map((card, i) => ({ ...card, tests: ct.cards[i] }));
      sub.challenges = ct.pool;
    }
  }
}

/** Flat lookup: question id -> { unit, sub, challenge, qid }.
 *  Practice questions: `subId:index`. Card tests: `subId:c<cardIndex>.<testIndex>`. */
export const questionIndex = (() => {
  const map = {};
  for (const unit of units) {
    for (const sub of unit.submodules) {
      sub.challenges.forEach((challenge, i) => {
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

export const findSub = (subId) => {
  for (const unit of units) {
    const sub = unit.submodules.find((s) => s.id === subId);
    if (sub) return { unit, sub };
  }
  return null;
};

/** Every question id belonging to a submodule (card tests + practice). */
export const subQuestionIds = (sub) =>
  Object.keys(questionIndex).filter((id) => questionIndex[id].sub.id === sub.id);

export const unitQuestionIds = (unit) => unit.submodules.flatMap(subQuestionIds);


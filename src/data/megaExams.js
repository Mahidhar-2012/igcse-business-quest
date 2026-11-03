// Business Studies "Exam Mega Unit": full mock papers built from the written exam questions and mark schemes that
// already sit after each unit (src/data/exams/). Nothing here is new question text: it only recombines the existing
// questions so that a whole paper covers several units, and unlocks them without finishing every lesson first.
//
// Paper 1 mocks: four questions (a to d, 20 marks each) from four different units. Every unit appears in two of the
//   three mocks, and each of the 12 Paper 1 questions is used exactly once.
// Paper 2 mocks: two case studies (each a question (a) and (b), 20 marks each), so four questions in all.
//   The six case studies are each used exactly once.
import { units } from './syllabusData.js';

const unitOf = (id) => units.find((u) => u.id === id);
const examOf = (unitId, paper) => unitOf(unitId).exams.find((e) => e.paper === paper);
const marksOf = (exam) => exam.questions.reduce((n, q) => n + q.parts.reduce((m, p) => m + p.marks, 0), 0);

// [unit id, which of that unit's two questions] for each mock
const PAPER1 = [
  [['u1', 0], ['u2', 0], ['u3', 0], ['u4', 0]],
  [['u3', 1], ['u4', 1], ['u5', 0], ['u6', 0]],
  [['u5', 1], ['u6', 1], ['u1', 1], ['u2', 1]],
];
// pairs of units whose case studies are combined
const PAPER2 = [['u1', 'u4'], ['u2', 'u5'], ['u3', 'u6']];

const retitle = (q, n) => ({ ...q, stemTitle: (q.stemTitle || '').replace(/^Question \d+:\s*/, `Question ${n}: `) });

function paper1Mock(spec, i) {
  const questions = spec.map(([uid, which], n) => ({ ...retitle(examOf(uid, 1).questions[which], n + 1), unitId: uid }));
  return {
    id: `mega-p1-${i + 1}`,
    unitId: 'mega',
    paper: 1,
    mock: true,
    title: `Paper 1 mock ${i + 1}`,
    covers: spec.map(([uid]) => unitOf(uid).title),
    questions,
  };
}

function paper2Mock(pair, i) {
  const questions = pair.flatMap((uid) => {
    const ex = examOf(uid, 2);
    return ex.questions.map((q) => ({ ...q, intro: ex.intro, unitId: uid }));
  });
  return {
    id: `mega-p2-${i + 1}`,
    unitId: 'mega',
    paper: 2,
    mock: true,
    title: `Paper 2 mock ${i + 1}`,
    covers: pair.map((uid) => unitOf(uid).title),
    questions,
  };
}

export const paper1Mocks = PAPER1.map(paper1Mock);
export const paper2Mocks = PAPER2.map(paper2Mock);
export const mockPapers = [...paper1Mocks, ...paper2Mocks];

/** Every unit's own paper, unlocked, so a single topic can be practised on its own. */
export const unitPapers = units.flatMap((u) => u.exams.map((e) => ({ exam: e, unit: u })));

export { marksOf };

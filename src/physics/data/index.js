// Cambridge IGCSE Physics 0625 — content map (syllabus for 2026-2028).
// Each unit has lessons (knowledge bytes + one test each) and past-paper practice sets with diagrams.
import { l11, l12, l13, l14 } from './units/p1a.js';
import { l15, l152, l16, l17a, l17b, l18 } from './units/p1b.js';
import { l21, l22, l23 } from './units/p2.js';
import { l31, l32, l33, l34 } from './units/p3.js';
import { l41, l42, l43, l44, l45 } from './units/p4.js';
import { l51, l52, l61, l62 } from './units/p56.js';
import { motionPaper } from './papers/motion.js';
import { massPaper } from './papers/mass.js';
import { densityPaper } from './papers/density.js';
import { momentsPaper } from './papers/moments.js';
import { energyPaper } from './papers/energy.js';
import { thermalPropsPaper } from './papers/thermalprops.js';
import { thermalProcPaper } from './papers/thermalproc.js';
import { waves1Paper } from './papers/waves1.js';
import { waves2Paper } from './papers/waves2.js';
import { emPaper } from './papers/em.js';
import { elecQPaper } from './papers/elecq.js';
import { circuitsPaper } from './papers/circuits.js';
import { radioPaper } from './papers/radio.js';
import { extendedSets } from './extended.js';
import { writtenSets } from './written.js';

const paper = (id, title, questions) => ({ id, title, questions });

export const units = [
  {
    id: 'p1', number: 1, title: 'Motion, Forces & Energy', short: 'Forces', emoji: '🚀', color: 'sky',
    submodules: [l11, l12, l13, l14, l15, l152, l16, l17a, l17b, l18],
    papers: [
      paper('p1-pp-motion', 'Motion (past paper questions)', motionPaper),
      paper('p1-pp-mass', 'Mass and weight (past paper questions)', massPaper),
      paper('p1-pp-density', 'Density (past paper questions)', densityPaper),
      paper('p1-pp-moments', 'Moments and centre of mass (past paper questions)', momentsPaper),
      paper('p1-pp-energy', 'Energy, work and power (past paper questions)', energyPaper),
    ],
  },
  {
    id: 'p2', number: 2, title: 'Thermal Physics', short: 'Thermal', emoji: '🔥', color: 'rose',
    submodules: [l21, l22, l23],
    papers: [
      paper('p2-pp-props', 'Thermal properties and temperature (past paper questions)', thermalPropsPaper),
      paper('p2-pp-proc', 'Thermal processes (past paper questions)', thermalProcPaper),
    ],
  },
  {
    id: 'p3', number: 3, title: 'Waves', short: 'Waves', emoji: '🌊', color: 'teal',
    submodules: [l31, l32, l33, l34],
    papers: [
      paper('p3-pp-waves1', 'General wave properties, set 1 (past paper questions)', waves1Paper),
      paper('p3-pp-waves2', 'General wave properties, set 2 (past paper questions)', waves2Paper),
      paper('p3-pp-em', 'Electromagnetic spectrum (past paper questions)', emPaper),
    ],
  },
  {
    id: 'p4', number: 4, title: 'Electricity & Magnetism', short: 'Electricity', emoji: '⚡', color: 'amber',
    submodules: [l41, l42, l43, l44, l45],
    papers: [
      paper('p4-pp-elecq', 'Electrical quantities (past paper questions)', elecQPaper),
      paper('p4-pp-circuits', 'Electric circuits (past paper questions)', circuitsPaper),
    ],
  },
  {
    id: 'p5', number: 5, title: 'Nuclear Physics', short: 'Nuclear', emoji: '☢️', color: 'violet',
    submodules: [l51, l52],
    papers: [paper('p5-pp-radio', 'Radioactivity (past paper questions)', radioPaper)],
  },
  {
    id: 'p6', number: 6, title: 'Space Physics', short: 'Space', emoji: '🪐', color: 'indigo',
    submodules: [l61, l62],
    papers: [],
  },
];


/** Extended (Paper 2) multiple-choice questions 2020-2025, one random-round set per topic group. */
const SESSION = { m: 'Feb/Mar', s: 'May/Jun', w: 'Oct/Nov' };
const extQuestions = (rows) =>
  rows.map(([code, n, ans]) => ({
    type: 'paper',
    img: `physics/e/${code}-${n}.webp`,
    src: `Extended · ${SESSION[code[0]]} 20${code.slice(1, 3)} · Paper ${code.slice(4)} · Q${n}`,
    answer: ans,
    why: 'This is the answer given in the official Cambridge mark scheme.',
  }));
const EXT = [
  ['motion', 'p1', 'Measurement and motion'],
  ['massdensity', 'p1', 'Mass, weight and density'],
  ['forces', 'p1', 'Forces and momentum'],
  ['moments', 'p1', 'Moments and centre of mass'],
  ['energy', 'p1', 'Energy, work, power and resources'],
  ['pressure', 'p1', 'Pressure'],
  ['thermal', 'p2', 'Particle model and thermal properties'],
  ['transfer', 'p2', 'Thermal energy transfer'],
  ['waves', 'p3', 'General properties of waves'],
  ['light', 'p3', 'Light'],
  ['em', 'p3', 'Electromagnetic spectrum'],
  ['sound', 'p3', 'Sound'],
  ['magem', 'p4', 'Magnetism and electromagnetic effects'],
  ['elec', 'p4', 'Electrical quantities, circuits and safety'],
  ['nuclear', 'p5', 'Atom and radioactivity'],
  ['space', 'p6', 'Space physics'],
];
for (const [g, uid, title] of EXT) {
  const unit = units.find((u) => u.id === uid);
  unit.papers.push({ id: `${uid}-ext-${g}`, title: `Extended exam questions 2020–2025: ${title}`, questions: extQuestions(extendedSets[g] || []), round: 20 });
}
/** Extended (Paper 4) written questions 2020-2025: question and mark scheme images, self-marked. */
const writtenQuestions = (rows) =>
  rows.map(([code, n, marks]) => ({
    type: 'written',
    img: `physics/w/${code}-${n}q.webp`,
    msImg: `physics/w/${code}-${n}m.webp`,
    marks,
    src: `Extended Paper 4 · ${SESSION[code[0]]} 20${code.slice(1, 3)} · Paper ${code.slice(4)} · Q${n}`,
  }));
for (const [g, uid, title] of EXT) {
  const rows = writtenSets[g];
  if (!rows || !rows.length) continue;
  const unit = units.find((u) => u.id === uid);
  unit.papers.push({ id: `${uid}-wr-${g}`, kind: 'written', title: `Extended written questions 2020–2025: ${title}`, questions: writtenQuestions(rows), round: 6 });
}
/** Past-paper sets get ids so that missed questions land in the mistake bank. */
for (const unit of units) {
  for (const p of unit.papers) p.ids = p.questions.map((_, i) => `${p.id}:${i}`);
}

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
    for (const p of unit.papers) {
      p.questions.forEach((challenge, i) => {
        const qid = `${p.id}:${i}`;
        map[qid] = { unit, sub: { id: p.id, title: p.title }, challenge, qid };
      });
    }
  }
  return map;
})();

/** Question ids belonging to a lesson (card tests only). */
export const subQuestionIds = (sub) =>
  sub.cards.flatMap((card, ci) => card.tests.map((_, ti) => `${sub.id}:c${ci}.${ti}`));

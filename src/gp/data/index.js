// Cambridge IGCSE Global Perspectives 0457 — module data: "how to answer" guidance and original mock papers.
import { HOWTO } from './howto.js';
import { paper1 } from './paper1.js';
import { paper2 } from './paper2.js';
import { paper3 } from './paper3.js';
import { paper4 } from './paper4.js';
import { paper5 } from './paper5.js';
import { paper6 } from './paper6.js';

export { HOWTO };
export const PAPERS = [paper1, paper2, paper3, paper4, paper5, paper6];

/** Flatten a paper's parts in order, keeping the question they belong to. */
export const partsOf = (paper) => paper.questions.flatMap((q) => q.parts.map((p) => ({ q, p })));
export const marksOf = (paper) => partsOf(paper).reduce((n, { p }) => n + p.marks, 0);

export const TOPIC_LIST = [
  'Arts in society', 'Change in culture and communities', 'Climate change, energy and resources', 'Conflict and peace',
  'Development, trade and aid', 'Digital world', 'Education for all', 'Employment', 'Environment, pollution and conservation',
  'Globalisation', 'Health and wellbeing', 'Law and criminality', 'Media and communication', 'Migration and urbanisation',
  'Political power and action', 'Poverty and inequality', 'Social identity and inclusion', 'Sport and recreation',
  'Technology, industry and innovation', 'Transport, travel and tourism', 'Values and beliefs', 'Water, food and agriculture',
];

/** Everything that counts towards the hub progress ring: each how-to lesson, each mock paper. */
export const GP_TOTAL = HOWTO.length + PAPERS.length;

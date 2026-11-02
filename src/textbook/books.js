// Textbook registry. A book is its list of chapters. Two kinds of chapter:
//   handwritten: written chapter by chapter (src/textbook/content/...), with original figures and interactions.
//   generated:   built from the lessons already in the app, one per unit (see generate.js).
// Only light metadata is loaded to show contents and search; a chapter's full text loads when it is opened.
// tests/textbook.test.mjs checks every entry here against its chapter.
import { SUBJECTS_META } from '../subjects.meta.js';
import { BOOK_SUBJECTS } from './available.js';
import { buildChapter } from './sources.js';

/** Hand-written chapters, per subject. */
const HANDWRITTEN = {
  physics: [
    {
      id: 'motion',
      kind: 'handwritten',
      unit: 1,
      unitTitle: 'Motion, forces and energy',
      title: 'Describing motion',
      syllabusRef: '1.2 Motion',
      status: 'draft',
      minutes: 30,
      objectives: [
        { id: 'o1', text: 'Define speed and calculate average speed from total distance and total time, including time spent stopped.' },
        { id: 'o2', text: 'Explain the difference between speed and velocity.' },
        { id: 'o3', text: 'Read a distance–time graph: use the gradient to find speed and recognise rest, constant speed and changing speed.' },
        { id: 'o4', text: 'Define acceleration and calculate it from the change in velocity and the time taken, including slowing down.' },
        { id: 'o5', text: 'Read a speed–time graph: use the gradient to find acceleration and the area under it to find distance.' },
      ],
      terms: ['speed', 'average speed', 'velocity', 'scalar', 'vector', 'acceleration', 'deceleration', 'gradient'],
      sections: [
        { id: 'why', title: 'Why we put numbers on movement' },
        { id: 'speed', title: 'Speed and average speed' },
        { id: 'distance-time', title: 'Distance–time graphs' },
        { id: 'velocity', title: 'Speed and velocity' },
        { id: 'acceleration', title: 'Acceleration' },
        { id: 'speed-time', title: 'Speed–time graphs' },
        { id: 'tell-apart', title: 'Telling the two graphs apart' },
        { id: 'practice', title: 'Practice' },
        { id: 'recall', title: 'Check your memory' },
      ],
      load: () => import('./content/physics/motion.js'),
      loadFigures: () => import('./figures/motion.jsx'),
    },
  ],
};

/** Terms are stored as plain strings (hand-written) or [term, sectionId] pairs (generated); both become { term, sectionId }. */
const normaliseTerms = (terms) => (terms || []).map((t) => (Array.isArray(t) ? { term: t[0], sectionId: t[1] } : { term: t, sectionId: 'terms' }));

const withTerms = (c) => ({ ...c, terms: normaliseTerms(c.terms) });

/** Assembles a book from its generated chapter list. Pure, so tests can call it with the JSON read from disk. */
export function makeBook(subjectId, generated) {
  const subject = SUBJECTS_META.find((s) => s.id === subjectId);
  if (!subject || !BOOK_SUBJECTS.includes(subjectId)) return null;
  const hand = HANDWRITTEN[subjectId] || [];
  const chapters = [...hand, ...generated].map(withTerms).sort((a, b) => a.unit - b.unit || (a.kind === 'handwritten' ? -1 : 1) - (b.kind === 'handwritten' ? -1 : 1));
  return {
    id: subjectId,
    subjectId,
    title: subject.title,
    code: subject.code,
    syllabus: `Cambridge IGCSE ${subject.title} ${subject.code}`,
    hash: subject.hash,
    chapters,
  };
}

const GENERATED = {
  physics: () => import('./generated/physics.json'),
  chemistry: () => import('./generated/chemistry.json'),
  economics: () => import('./generated/economics.json'),
  biology: () => import('./generated/biology.json'),
  maths: () => import('./generated/maths.json'),
  addmaths: () => import('./generated/addmaths.json'),
  cs: () => import('./generated/cs.json'),
  business: () => import('./generated/business.json'),
  english: () => import('./generated/english.json'),
};

export async function loadBook(subjectId) {
  if (!GENERATED[subjectId]) return null;
  const m = await GENERATED[subjectId]();
  return makeBook(subjectId, m.default);
}

/** The full chapter and the drawings for hand-written chapters. Generated chapters are built from the lessons on demand. */
export async function loadChapter(book, meta) {
  if (meta.kind === 'generated') return { chapter: await buildChapter(book.id, meta.id), figures: {} };
  const [c, f] = await Promise.all([meta.load(), meta.loadFigures()]);
  return { chapter: c.default, figures: f.FIGURES };
}

export const chapterOf = (book, chapterId) => book.chapters.find((c) => c.id === chapterId) || null;
export const STATUS_LABEL = { draft: 'Draft, not yet reviewed', reviewed: 'Reviewed' };
export const KIND_LABEL = { handwritten: 'Hand-written chapter', generated: 'Auto-built from lessons' };

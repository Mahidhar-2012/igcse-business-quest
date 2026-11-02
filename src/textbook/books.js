// Textbook registry. This is the only textbook data the hub downloads: titles, objectives and terms for the
// contents page and search. Full chapters load on demand through `load`. tests/textbook.test.mjs checks that
// every entry here matches its chapter file, so the two cannot drift apart.
export const BOOKS = [
  {
    id: 'physics',
    subjectId: 'physics',
    title: 'Physics',
    code: '0625',
    syllabus: 'Cambridge IGCSE Physics 0625, 2026–2028 syllabus',
    blurb: 'A readable textbook with original diagrams, worked examples and practice. One pilot chapter so far.',
    chapters: [
      {
        id: 'motion',
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
  },
];

export const bookById = (id) => BOOKS.find((b) => b.id === id) || null;
export const bookForSubject = (subjectId) => BOOKS.find((b) => b.subjectId === subjectId) || null;
export const chapterOf = (book, chapterId) => book.chapters.find((c) => c.id === chapterId) || null;
export const STATUS_LABEL = { draft: 'Draft, not yet reviewed', reviewed: 'Reviewed' };

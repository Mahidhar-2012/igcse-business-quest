// Where each subject's lessons live, and how to turn them into textbook chapters.
// Used by the app (lazily, when a chapter is opened) and by scripts/build-textbook-index.mjs.
import { SUBJECTS_META } from '../subjects.meta.js';
import { chapterFromUnit, chapterFromEnglishSection } from './generate.js';

export const SOURCES = {
  physics: () => import('../physics/data/index.js'),
  chemistry: () => import('../chemistry/data/index.js'),
  economics: () => import('../economics/data/index.js'),
  biology: () => import('../biology/data/index.js'),
  maths: () => import('../maths/data/index.js'),
  addmaths: () => import('../addmaths/data/index.js'),
  cs: () => import('../cs/data/index.js'),
  business: () => import('../data/syllabusData.js'),
  english: () => import('../english/data/index.js'),
};

export const subjectMeta = (id) => SUBJECTS_META.find((s) => s.id === id);

/** Every generated chapter of a subject, in order. */
export async function buildChapters(subjectId) {
  const subject = subjectMeta(subjectId);
  const data = await SOURCES[subjectId]();
  if (subjectId === 'english') return data.sections.map((s, i) => chapterFromEnglishSection(subject, s, i + 1));
  return data.units.map((u, i) => chapterFromUnit(subject, u, i + 1));
}

export async function buildChapter(subjectId, chapterId) {
  const all = await buildChapters(subjectId);
  return all.find((c) => c.id === chapterId) || null;
}

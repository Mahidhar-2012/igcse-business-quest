import { overview, reading, email } from './part1.js';
import { review, report } from './part2.js';
import { essay, article } from './part3.js';
import { language, listenSpeak } from './part4.js';

export const SECTION_COLORS = {
  sky: '#0ea5e9', violet: '#8b5cf6', green: '#58cc02', amber: '#f59e0b',
  rose: '#f43f5e', orange: '#f97316', teal: '#14b8a6',
};

export const sections = [overview, reading, email, review, report, essay, article, language, listenSpeak];
export const allLessons = sections.flatMap((s) => s.lessons);

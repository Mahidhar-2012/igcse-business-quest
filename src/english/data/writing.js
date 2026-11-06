// Writing-practice tasks for the English module: open a task, write your answer, self-mark it on the Content and
// Language bands, then compare with an A* model answer. The tasks and model answers reuse the A* samples already in
// the module. "Teacher-marked" sample responses are left out here, so every practice task has a strong model answer.
import { emailSamples } from './samples_email.js';
import { reviewSamples } from './samples_review.js';
import { reportSamples } from './samples_report.js';
import { articleSamples } from './samples_article.js';
import { essaySamples } from './samples.js';

const wordCount = (paras) => paras.join(' ').replace(/\*\*/g, '').split(/\s+/).filter(Boolean).length;
const clean = (title) => title.replace(/^(Email|Review|Report|Essay|Article)\s*\d+:\s*/, '').replace(/\s*\(teacher-marked\)\s*$/i, '').trim();
const usable = (s) => Array.isArray(s.paras) && s.paras.length > 0 && !/teacher-marked/i.test(s.title);

const build = (key, label, ex, emoji, aim, list) =>
  list.filter(usable).map((s, i) => ({
    id: `w-${key}-${i + 1}`,
    key, type: label, ex, emoji, aim,
    title: clean(s.title),
    task: s.task || ['(No task text was recorded for this sample.)'],
    model: s.paras,
    why: s.why || [],
    modelWords: wordCount(s.paras),
  }));

export const WRITING_GROUPS = [
  { key: 'email', label: 'Email', ex: 5, emoji: '✉️', aim: 'about 100 words', tasks: build('email', 'Email', 5, '✉️', 'about 100 words', emailSamples) },
  { key: 'review', label: 'Review', ex: 6, emoji: '⭐', aim: '150–200 words', tasks: build('review', 'Review', 6, '⭐', '150–200 words', reviewSamples) },
  { key: 'report', label: 'Report', ex: 6, emoji: '📋', aim: '150–200 words', tasks: build('report', 'Report', 6, '📋', '150–200 words', reportSamples) },
  { key: 'essay', label: 'Essay', ex: 6, emoji: '🧠', aim: '150–200 words', tasks: build('essay', 'Essay', 6, '🧠', '150–200 words', essaySamples) },
  { key: 'article', label: 'Article', ex: 6, emoji: '📰', aim: '150–200 words', tasks: build('article', 'Article', 6, '📰', '150–200 words', articleSamples) },
].filter((g) => g.tasks.length > 0);

export const WRITING_TASKS = WRITING_GROUPS.flatMap((g) => g.tasks);
export const taskById = (id) => WRITING_TASKS.find((t) => t.id === id) || null;

// Builds the "Topic vocabulary" section of the English module from the themed word lists in vocabThemes.js.
// One lesson per theme: core words, phrasal verbs, collocations and idioms, each with meanings and examples.
import { lesson, section, note } from './helpers.js';
import { VOCAB_THEMES } from './vocabThemes.js';

/** A word-list card: items are [word, meaning, example]. Rendered as a definition list; prints in the notes builder. */
const vocab = (title, items) => ({ type: 'vocab', title, items });

const chunk = (arr, n) => { const out = []; for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n)); return out; };
const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const HOW_TO = note('Using this vocabulary in the exam',
  'Learn **complete phrases**, not single words. “{{a mixed response}}” or “{{steal the show}}” score more than the bare word.',
  'Use each word **precisely**. A meaning you half-remember often sounds wrong, so only use words you can place in a correct example.',
  'Use **one idiom at most** in a piece of writing. One natural expression is better than several forced in.',
  'Adapt an example sentence to your own task instead of copying it. The examples show the word in a natural context.',
);

function themeLesson(t) {
  const cards = [];
  chunk(t.core, 18).forEach((part, i, all) => cards.push(vocab(all.length > 1 ? `Core words (${i + 1} of ${all.length})` : 'Core words', part)));
  if (t.phrasal.length) cards.push(vocab('Phrasal verbs', t.phrasal));
  if (t.collocations.length) cards.push({ type: 'bank', title: 'Useful phrases', groups: [{ label: 'Collocations to reuse', items: t.collocations }] });
  if (t.idioms.length) cards.push(vocab('Idioms and expressions', t.idioms));
  cards.push(HOW_TO);
  return lesson(`vocab-${slug(t.name)}`, t.name, t.emoji, cards);
}

export const vocabulary = section(
  'vocabulary', 'Topic vocabulary', '🗂️', 'teal',
  'Word banks for every exam theme: core words, phrasal verbs, collocations and idioms, with meanings and examples',
  VOCAB_THEMES.map(themeLesson),
);

// Past-paper multiple-choice questions. The question itself (text + diagram + options) is an image cropped from the paper;
// rows are [correct letter, short explanation].
const LETTERS = 'ABCD';

/** rows may contain null to skip a question (numbering of the cropped images is kept). */
export const paperQuestions = (slug, label, rows) =>
  rows.flatMap((row, i) => {
    if (!row) return []; // question left out (for example when the printed values are unreadable)
    const [letter, why] = row;
    if (!LETTERS.includes(letter)) throw new Error(`paper ${slug} Q${i + 1}: bad answer letter ${letter}`);
    return [{
      type: 'paper',
      img: `physics/q/${slug}-${i + 1}.webp`,
      src: `${label} · Q${i + 1}`,
      answer: LETTERS.indexOf(letter),
      why,
    }];
  });

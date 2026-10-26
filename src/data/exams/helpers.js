/**
 * Exam part builder, aligned with the Cambridge IGCSE Business 0264 assessment objectives.
 *
 * P(label, command, text, marks, points, model)
 *   points: array of mark-scheme points. Each point starts with an AO tag and a bar:
 *       K| knowledge/understanding (AO1)   A| application (AO2)
 *       N| analysis (AO3)                  E| evaluation (AO4)
 *     and may end with a mark marker (1), (2), (1+1). No marker = 1 mark.
 *   model: an example full-marks answer. Wrap segments in [[K|…]], [[A|…]], [[N|…]], [[E|…]]
 *     so the app can colour-code where each type of mark comes from.
 */
const MARK = /\s*\(([1-4](?:\+[1-4])*)\)/g;

const parsePoint = (p) => {
  const tag = p.match(/^([KANE])\|/);
  let m = 0;
  const body = p.replace(/^[KANE]\|/, '').replace(MARK, (_, nums) => {
    m += nums.split('+').reduce((a, b) => a + Number(b), 0);
    return '';
  });
  return { ao: tag ? tag[1] : 'K', t: body.trim(), m: m || 1 };
};

export const P = (label, command, text, marks, points, model) => ({
  label,
  command,
  text,
  marks,
  points: points.map(parsePoint),
  model,
});

/** AO metadata used by the exam feedback screens. */
export const AO_INFO = {
  K: {
    ao: 'AO1',
    name: 'Knowledge & understanding',
    colour: 'bg-yellow-200 text-yellow-900',
    bar: '#eab308',
    descriptor: 'Demonstrate knowledge and understanding of business concepts, terms and theories, and use business terminology.',
    tips: [
      'Learn every definition precisely and add a short example after it so a vague definition still scores.',
      'For “Identify/State” just name the point — explaining earns nothing extra.',
      'Knowledge is about 40% of the course: use the exact syllabus keyword (e.g. “economies of scale”, “labour turnover”).',
    ],
  },
  A: {
    ao: 'AO2',
    name: 'Application',
    colour: 'bg-sky-200 text-sky-900',
    bar: '#0ea5e9',
    descriptor: 'Apply knowledge and understanding of business concepts, terms and theories to a given business.',
    tips: [
      'Use details from the case: what the business sells, what it does, its sector/type, and any numbers.',
      'No marks for the business name or owner’s name, or for words that already appear in the question.',
      'You can reuse the same application in different questions, but not twice inside the same question.',
      'In calculation questions the numbers you use count as application.',
    ],
  },
  N: {
    ao: 'AO3',
    name: 'Analysis',
    colour: 'bg-green-200 text-green-900',
    bar: '#22c55e',
    descriptor: 'Select, organise and interpret business data and information; analyse business information.',
    tips: [
      'Build a chain of reasoning: WHAT (the knowledge point) → HOW (the direct impact) → EFFECT (e.g. profit, reputation, efficiency).',
      'Use link phrases: “this means that…”, “which leads to…”, “as a result…”.',
      'Don’t jump from the point straight to the effect — the missing “how” is why answers read as vague.',
      'Common effects to link to: profit/profit margins, reputation/brand image, efficiency/competitiveness, working capital.',
    ],
  },
  E: {
    ao: 'AO4',
    name: 'Evaluation',
    colour: 'bg-orange-200 text-orange-900',
    bar: '#f97316',
    descriptor: 'Make justified decisions, reach conclusions and make recommendations based on evidence.',
    tips: [
      'Make a clear decision, then justify why it is the best FOR THIS BUSINESS.',
      'Reject the alternative(s): say why the other option is less suitable (this is a separate mark).',
      'Don’t just repeat points you already made, and avoid introducing brand-new knowledge in the conclusion.',
      'In 12-mark questions use one new calculation (e.g. the difference between the options) as your justification.',
    ],
  },
};

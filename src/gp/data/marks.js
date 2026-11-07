// Mark schemes for the GP mock papers. Two styles:
//  - points: a list of creditworthy points, each worth some marks (used for short "identify" questions).
//  - levels: level descriptors; you self-select the level your answer reached, scoring that level's marks.
// Level descriptors are original, written in the style of the published 0457 level-of-response mark schemes
// (which reward explanation, use of the source, balance and a clear judgement — not knowledge of the topic).

/** Level sets keyed by question kind. Each level: { marks, band, desc }. marks is the award for reaching that level. */
export const LEVELS = {
  perspective6: [
    { marks: 0, band: 'Level 0', desc: 'No creditworthy response.' },
    { marks: 2, band: 'Level 1 (1–2)', desc: 'Identifies one or two aspects of the group’s perspective with little detail from the source.' },
    { marks: 4, band: 'Level 2 (3–4)', desc: 'Describes several aspects of the perspective (issue, cause, consequence, values, aims or action) with some support from the source.' },
    { marks: 6, band: 'Level 3 (5–6)', desc: 'Clearly describes three or four aspects of the perspective, each supported with detail or an example from the source.' },
  ],
  significance6: [
    { marks: 0, band: 'Level 0', desc: 'No creditworthy response.' },
    { marks: 2, band: 'Level 1 (1–2)', desc: 'States an issue and asserts a reason or two with no real explanation.' },
    { marks: 4, band: 'Level 2 (3–4)', desc: 'Chooses one issue and gives reasons, with some explanation of why it is significant.' },
    { marks: 6, band: 'Level 3 (5–6)', desc: 'Chooses one issue and briefly explains three or four reasons (impact, scale, duration) why it is the most significant.' },
  ],
  evaluate8: [
    { marks: 0, band: 'Level 0', desc: 'No creditworthy response.' },
    { marks: 3, band: 'Level 1 (1–3)', desc: 'Identifies or lists strengths and/or weaknesses of the research with little or no explanation.' },
    { marks: 6, band: 'Level 2 (4–6)', desc: 'Explains some strengths and weaknesses, referring to the quality of the evidence or data.' },
    { marks: 8, band: 'Level 3 (7–8)', desc: 'Explains several strengths AND weaknesses, clearly linked to reliability, validity, representativeness or the research aim.' },
  ],
  design6: [
    { marks: 0, band: 'Level 0', desc: 'No creditworthy response.' },
    { marks: 2, band: 'Level 1 (1–2)', desc: 'Lists one or more methods or sources with no link to the claim.' },
    { marks: 4, band: 'Level 2 (3–4)', desc: 'Describes methods and sources, with some explanation of how they test the claim.' },
    { marks: 6, band: 'Level 3 (5–6)', desc: 'Explains methods and credible sources, each explicitly linked to testing the specific claim.' },
  ],
  argue16: [
    { marks: 0, band: 'Level 0', desc: 'No creditworthy response.' },
    { marks: 4, band: 'Level 1 (1–4)', desc: 'Asserts which argument is more convincing; little or no use of the source; mostly one-sided.' },
    { marks: 8, band: 'Level 2 (5–8)', desc: 'Describes some strengths/weaknesses of each argument, with some support from the statements.' },
    { marks: 12, band: 'Level 3 (9–12)', desc: 'Explains several points about the reasoning, evidence and/or language of both arguments, using the source, with a conclusion.' },
    { marks: 16, band: 'Level 4 (13–16)', desc: 'Balanced, well-supported evaluation of reasons, evidence AND language, with explicit quotation and a clear, justified judgement.' },
  ],
  action22: [
    { marks: 0, band: 'Level 0', desc: 'No creditworthy response.' },
    { marks: 7, band: 'Level 1 (1–7)', desc: 'Describes actions or personal opinion; generalised and largely unsupported.' },
    { marks: 13, band: 'Level 2 (8–13)', desc: 'Explains some consequences of an action, with some support from the sources.' },
    { marks: 18, band: 'Level 3 (14–18)', desc: 'Balanced reasoning about the impact and consequences of actions, using the sources, reaching a judgement.' },
    { marks: 22, band: 'Level 4 (19–22)', desc: 'Well-supported, logical, balanced assessment of impact, with explicit source and own material, and a clear justified conclusion.' },
  ],
};

/** Grade bands for the 70-mark paper (indicative only — Cambridge sets grade boundaries each series). */
export const gradeFor = (pct) => (pct >= 80 ? 'A*' : pct >= 70 ? 'A' : pct >= 60 ? 'B' : pct >= 50 ? 'C' : pct >= 40 ? 'D' : pct >= 30 ? 'E' : 'Keep practising');

/** Build a part. mark is either {points:[{t,m}]} or {levels:'<key>'}.
 *  options (optional): a list of labelled courses of action the candidate must choose ONE from
 *  (used by Question 4, which offers several actions and asks you to pick and justify one). */
export const P = (label, command, text, marks, mark, hint, model, options) => ({
  label, command, text, marks,
  scheme: mark.points ? { type: 'points', points: mark.points } : { type: 'levels', levels: LEVELS[mark.levels] },
  hint,
  model,
  options,
});

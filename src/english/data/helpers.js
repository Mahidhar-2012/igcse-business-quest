// Card builders for the English module (notes only, no questions).
// Markup inside strings: **bold** = key idea, {{text}} = a phrase worth stealing.

/** Bullet-point note card. */
export const note = (title, ...points) => ({ type: 'note', title, points: points.flat() });

/** A "do / avoid" comparison card. */
export const dont = (title, doList, avoidList) => ({ type: 'dont', title, doList, avoidList });

/** Phrase bank card: groups of [label, items[]]. */
export const bank = (title, ...groups) => ({ type: 'bank', title, groups: groups.map(([label, items]) => ({ label, items })) });

/** Full model answer card with margin comments. */
export const model = (title, { task, words, paras, why }) => ({ type: 'model', title, task, words, paras, why });

/** Step-by-step plan card. */
export const steps = (title, ...items) => ({ type: 'steps', title, items });

export const lesson = (id, title, emoji, cards) => ({ id, title, emoji, cards });
export const section = (id, title, emoji, color, blurb, lessons) => ({ id, title, emoji, color, blurb, lessons });

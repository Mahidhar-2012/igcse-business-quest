// Question overlays: harder, more varied replacements for earlier questions, keyed by question id.
//   replace: { 'lesson-id:3': question, 'lesson-id:c2.0': question }   (practice pool index, or card test)
//   add:     { 'lesson-id': [question, ...] }                          (extra practice-pool questions)
// Used by the Business course (src/data/hard/*.js) and the other subjects' data/hard.js files.
// An id that matches nothing throws, so a typo can never silently leave an old easy question in place.
export function applyOverlay(units, { replace = {}, add = {} }) {
  const left = new Set(Object.keys(replace));
  const subsLeft = new Set(Object.keys(add));
  for (const unit of units) {
    for (const sub of unit.submodules) {
      (sub.challenges || []).forEach((_, i) => {
        const id = `${sub.id}:${i}`;
        if (replace[id]) { sub.challenges[i] = replace[id]; left.delete(id); }
      });
      sub.cards.forEach((card, ci) => {
        card.tests.forEach((_, ti) => {
          const id = `${sub.id}:c${ci}.${ti}`;
          if (replace[id]) { card.tests[ti] = replace[id]; left.delete(id); }
        });
      });
      if (add[sub.id]) {
        sub.challenges = [...(sub.challenges || []), ...add[sub.id]];
        subsLeft.delete(sub.id);
      }
    }
  }
  if (left.size || subsLeft.size) {
    throw new Error(`overlay ids not found: ${[...left, ...subsLeft].join(', ')}`);
  }
}

/**
 * Removes practical and experiment content that the learner asked not to study.
 *   lessons: lesson ids to remove entirely
 *   cards:   { lessonId: [card titles] } to remove from a lesson
 * Runs after applyOverlay. A name that matches nothing throws, so the list cannot go stale unnoticed.
 */
export function dropPractical(units, { lessons = [], cards = {} }) {
  const lessonsLeft = new Set(lessons);
  const cardsLeft = new Set(Object.entries(cards).flatMap(([id, titles]) => titles.map((t) => `${id}|${t}`)));
  for (const unit of units) {
    unit.submodules = unit.submodules.filter((sub) => {
      if (lessonsLeft.has(sub.id)) { lessonsLeft.delete(sub.id); return false; }
      return true;
    });
    for (const sub of unit.submodules) {
      const titles = cards[sub.id];
      if (!titles) continue;
      sub.cards = sub.cards.filter((card) => {
        if (titles.includes(card.title)) { cardsLeft.delete(`${sub.id}|${card.title}`); return false; }
        return true;
      });
    }
  }
  if (lessonsLeft.size || cardsLeft.size) throw new Error(`dropPractical: not found: ${[...lessonsLeft, ...cardsLeft].join(', ')}`);
}

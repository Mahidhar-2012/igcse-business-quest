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

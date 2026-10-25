import confetti from 'canvas-confetti';

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Small burst, used for a 5-answer streak. */
export const streakBurst = () => {
  if (reduced()) return;
  confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 }, ticks: 120 });
};

/** Big celebration, used when a submodule / boss fight is completed. */
export const celebrate = () => {
  if (reduced()) return;
  const end = Date.now() + 900;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 } });
    confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  confetti({ particleCount: 140, spread: 100, origin: { y: 0.6 } });
};

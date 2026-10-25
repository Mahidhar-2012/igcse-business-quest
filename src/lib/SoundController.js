// Synthesised sound effects via the Web Audio API — no audio assets needed.
let ctx = null;
let enabled = true;

const getCtx = () => {
  if (!enabled) return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  } catch {
    return null;
  }
};

const tone = (freq, start, dur, { type = 'sine', gain = 0.15, slideTo } = {}) => {
  const c = getCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  const t0 = c.currentTime + start;
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.05);
};

export const SoundController = {
  setEnabled(value) {
    enabled = !!value;
  },
  isEnabled: () => enabled,
  /** Short rising chime for a correct answer. */
  success() {
    tone(659.25, 0, 0.14);
    tone(880, 0.09, 0.22);
  },
  /** Low buzz for a wrong answer. */
  error() {
    tone(180, 0, 0.28, { type: 'sawtooth', gain: 0.1, slideTo: 110 });
  },
  /** Celebratory arpeggio for finishing a lesson / hitting a streak. */
  complete() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.11, 0.3, { type: 'triangle', gain: 0.16 }));
  },
  click() {
    tone(440, 0, 0.05, { type: 'square', gain: 0.04 });
  },
};

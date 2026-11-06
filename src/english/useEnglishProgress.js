import { useCallback, useState } from 'react';

const KEY = 'igcse-english:v1';

const load = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY));
    return {
      done: Array.isArray(parsed?.done) ? parsed.done : [],
      scores: parsed?.scores && typeof parsed.scores === 'object' ? parsed.scores : {}, // writing-practice best marks per task
      lastDay: parsed?.lastDay || null,
      resetAt: parsed?.resetAt || 0,
    };
  } catch {
    return { done: [], scores: {}, lastDay: null };
  }
};

const save = (state) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* private mode or storage full: progress simply won't persist */
  }
};

export function useEnglishProgress() {
  const [state, setState] = useState(load);

  const markDone = useCallback((id) => {
    setState((s) => {
      if (s.done.includes(id)) return s;
      const d = new Date();
      const lastDay = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const next = { ...s, done: [...s.done, id], lastDay };
      save(next);
      return next;
    });
  }, []);

  const recordScore = useCallback((id, marks) => {
    setState((s) => {
      const best = Math.max(s.scores?.[id] ?? 0, marks);
      if (s.scores?.[id] === best && id in (s.scores || {})) return s;
      const next = { ...s, scores: { ...s.scores, [id]: best } };
      save(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    const next = { done: [], scores: {}, lastDay: null, resetAt: Date.now() };
    save(next);
    setState(next);
  }, []);

  return { done: state.done, scores: state.scores || {}, markDone, recordScore, reset };
}

/** Number of finished English lessons (read without mounting the module, for the hub). */
export const countEnglishDone = () => load().done.length;

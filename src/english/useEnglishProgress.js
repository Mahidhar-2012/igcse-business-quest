import { useCallback, useState } from 'react';

const KEY = 'igcse-english:v1';

const load = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY));
    return { done: Array.isArray(parsed?.done) ? parsed.done : [] };
  } catch {
    return { done: [] };
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
      const next = { done: [...s.done, id] };
      save(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    const next = { done: [] };
    save(next);
    setState(next);
  }, []);

  return { done: state.done, markDone, reset };
}

/** Number of finished English lessons (read without mounting the module, for the hub). */
export const countEnglishDone = () => load().done.length;

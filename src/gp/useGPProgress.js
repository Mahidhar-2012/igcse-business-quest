// Local-only progress for Global Perspectives: which how-to lessons were read, and best score per mock paper.
// Stored under its own key. The `done` array (read lessons + attempted papers) feeds the hub progress ring,
// matching the "notes" subject shape used by the hub overview. resetAt is kept so cloud reset works if used.
import { useCallback, useEffect, useState } from 'react';

const KEY = 'igcse-gp:v1';

const load = () => {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || 'null') || {};
    return { done: Array.isArray(s.done) ? s.done : [], exams: s.exams && typeof s.exams === 'object' ? s.exams : {}, resetAt: s.resetAt || null };
  } catch { return { done: [], exams: {}, resetAt: null }; }
};
const save = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode */ } };

export function useGPProgress() {
  const [state, setState] = useState(load);
  useEffect(() => { save(state); }, [state]);

  const markRead = useCallback((id) => setState((s) => (s.done.includes(id) ? s : { ...s, done: [...s.done, id] })), []);
  const recordExam = useCallback((id, pct) => setState((s) => ({
    ...s,
    done: s.done.includes(id) ? s.done : [...s.done, id],
    exams: { ...s.exams, [id]: Math.max(s.exams[id] || 0, pct) },
  })), []);
  const reset = useCallback(() => setState({ done: [], exams: {}, resetAt: new Date().toISOString() }), []);

  return { done: state.done, exams: state.exams, markRead, recordExam, reset };
}

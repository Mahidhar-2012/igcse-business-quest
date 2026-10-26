import { useCallback, useEffect, useMemo, useState } from 'react';
import { units, questionIndex } from '../data/syllabusData.js';
import { SoundController } from './SoundController.js';

// v2: questions were rewritten as critical-thinking questions, so saved mistake ids from v1 no longer match.
const KEY = 'igcse-business-quest:v2';
const OLD_KEY = 'igcse-business-quest:v1';

const defaults = {
  xp: 0,
  todayXp: 0,
  streak: 0,
  lastDay: null, // YYYY-MM-DD of last study activity
  subs: {}, // subId -> { stars, done }
  bosses: {}, // unitId -> stars
  exams: {}, // examId -> best score percent (written exam practice)
  mistakes: [], // question ids missed and not yet answered correctly
  sound: true,
  openAll: false,
};

const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const yesterdayKey = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dayKey(d);
};

const load = () => {
  try {
    let raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!raw) {
      // migrate progress (XP, streak, completed lessons, settings) from v1 but start with an empty mistake bank
      const old = JSON.parse(localStorage.getItem(OLD_KEY) || 'null');
      if (old) raw = { ...old, mistakes: [], exams: {} };
    }
    const s = { ...defaults, ...(raw || {}) };
    s.mistakes = (s.mistakes || []).filter((id) => questionIndex[id]);
    // reset today's XP and break the streak if a day was missed
    const today = dayKey();
    if (s.lastDay !== today) s.todayXp = 0;
    if (s.lastDay && s.lastDay !== today && s.lastDay !== yesterdayKey()) s.streak = 0;
    return s;
  } catch {
    return { ...defaults };
  }
};

export function useProgress() {
  const [state, setState] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage full or blocked: keep working in memory */
    }
  }, [state]);

  useEffect(() => {
    SoundController.setEnabled(state.sound);
  }, [state.sound]);

  const addXp = useCallback((amount) => {
    setState((s) => {
      const today = dayKey();
      let streak = s.streak;
      if (s.lastDay !== today) streak = s.lastDay === yesterdayKey() ? s.streak + 1 : 1;
      return {
        ...s,
        xp: s.xp + amount,
        todayXp: (s.lastDay === today ? s.todayXp : 0) + amount,
        streak,
        lastDay: today,
      };
    });
  }, []);

  const addMistake = useCallback((qid) => {
    setState((s) => (s.mistakes.includes(qid) ? s : { ...s, mistakes: [...s.mistakes, qid] }));
  }, []);

  const clearMistake = useCallback((qid) => {
    setState((s) => ({ ...s, mistakes: s.mistakes.filter((id) => id !== qid) }));
  }, []);

  const completeSub = useCallback((subId, stars) => {
    setState((s) => {
      const prev = s.subs[subId]?.stars || 0;
      return { ...s, subs: { ...s.subs, [subId]: { done: true, stars: Math.max(prev, stars) } } };
    });
  }, []);

  const completeBoss = useCallback((unitId, stars) => {
    setState((s) => ({ ...s, bosses: { ...s.bosses, [unitId]: Math.max(s.bosses[unitId] || 0, stars) } }));
  }, []);

  const recordExam = useCallback((examId, pct) => {
    setState((s) => ({ ...s, exams: { ...(s.exams || {}), [examId]: Math.max((s.exams || {})[examId] || 0, pct) } }));
  }, []);

  const toggle = useCallback((key) => setState((s) => ({ ...s, [key]: !s[key] })), []);

  const reset = useCallback(() => setState({ ...defaults }), []);

  const unitStats = useMemo(() => {
    const out = {};
    for (const u of units) {
      const subsDone = u.submodules.filter((sub) => state.subs[sub.id]?.done).length;
      const starSum = u.submodules.reduce((n, sub) => n + (state.subs[sub.id]?.stars || 0), 0);
      const mastery = Math.round((starSum / (u.submodules.length * 3)) * 100);
      out[u.id] = {
        subsDone,
        total: u.submodules.length,
        mastery,
        crown: state.bosses[u.id] || 0,
        allDone: subsDone === u.submodules.length,
      };
    }
    return out;
  }, [state.subs, state.bosses]);

  const isSubUnlocked = useCallback(
    (unit, index) => state.openAll || index === 0 || !!state.subs[unit.submodules[index - 1].id]?.done,
    [state.openAll, state.subs],
  );

  return {
    state,
    unitStats,
    isSubUnlocked,
    addXp,
    addMistake,
    clearMistake,
    completeSub,
    completeBoss,
    recordExam,
    toggle,
    reset,
  };
}

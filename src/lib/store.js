import { useCallback, useEffect, useMemo, useState } from 'react';
import { SoundController } from './SoundController.js';
import { schedule, dayKey as srsDay } from './srs.js';

const defaults = {
  xp: 0,
  todayXp: 0,
  streak: 0,
  lastDay: null, // YYYY-MM-DD of last study activity
  subs: {}, // subId -> { stars, done }
  bosses: {}, // unitId -> stars
  exams: {}, // examId -> best score percent (written exam practice)
  mistakes: [], // question ids missed and not yet answered correctly
  srs: {}, // qid -> { box, due }: spaced-repetition schedule (see lib/srs.js)
  acc: {}, // subId -> { r, w, t }: first-attempt results per lesson, for the weakness finder
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

const load = (course) => {
  try {
    let raw = JSON.parse(localStorage.getItem(course.key) || 'null');
    if (!raw && course.oldKey) {
      // migrate progress (XP, streak, completed lessons, settings) from v1 but start with an empty mistake bank
      const old = JSON.parse(localStorage.getItem(course.oldKey) || 'null');
      if (old) raw = { ...old, mistakes: [], exams: {} };
    }
    const s = { ...defaults, ...(raw || {}) };
    s.mistakes = (s.mistakes || []).filter((id) => course.questionIndex[id]);
    s.srs = Object.fromEntries(Object.entries(s.srs || {}).filter(([id]) => course.questionIndex[id]));
    s.acc = s.acc || {};
    // reset today's XP and break the streak if a day was missed
    const today = dayKey();
    if (s.lastDay !== today) s.todayXp = 0;
    if (s.lastDay && s.lastDay !== today && s.lastDay !== yesterdayKey()) s.streak = 0;
    return s;
  } catch {
    return { ...defaults };
  }
};

/** course = { units, questionIndex, key, oldKey }: each subject passes its own content and storage key. */
export function useProgress(course) {
  const [state, setState] = useState(() => load(course));

  useEffect(() => {
    try {
      localStorage.setItem(course.key, JSON.stringify(state));
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

  /** First attempt at a question in a session: schedules its next review and updates the lesson's accuracy. */
  const record = useCallback((qid, correct) => {
    const info = course.questionIndex[qid];
    if (!info) return;
    setState((s) => {
      const a = s.acc?.[info.sub.id] || { r: 0, w: 0, t: info.sub.title };
      return {
        ...s,
        srs: { ...(s.srs || {}), [qid]: schedule((s.srs || {})[qid], correct, srsDay()) },
        acc: { ...(s.acc || {}), [info.sub.id]: { r: a.r + (correct ? 1 : 0), w: a.w + (correct ? 0 : 1), t: info.sub.title } },
      };
    });
  }, [course.questionIndex]);

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

  const reset = useCallback(() => setState({ ...defaults, resetAt: Date.now() }), []); // resetAt: lets cloud sync tell a reset from a fresh device

  const unitStats = useMemo(() => {
    const out = {};
    for (const u of course.units) {
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
  }, [state.subs, state.bosses, course.units]);

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
    record,
    completeSub,
    completeBoss,
    recordExam,
    toggle,
    reset,
  };
}

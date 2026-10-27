import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { X, Zap, Flame, Swords, Star, Trophy, ArrowRight } from 'lucide-react';
import { VIEWS } from './QuestionViews.jsx';
import KnowledgeCard from './KnowledgeCard.jsx';
import { SoundController } from '../lib/SoundController.js';
import { celebrate, streakBurst } from '../lib/fx.js';

const XP_FIRST_TRY = 10;
const XP_RETEST = 5;
const XP_COMPLETE = 20;

const starsFor = (firstTry, total) => {
  if (!total) return 3; // notes-only lesson: finishing it is full credit
  const ratio = firstTry / total;
  return ratio === 1 ? 3 : ratio >= 0.66 ? 2 : 1;
};

/**
 * Generic question engine used for lessons, unit boss fights and mistake-bank drills.
 * mode: 'lesson' (shows micro-concept first) | 'boss' | 'drill'
 */
export default function LessonPlayer({ mode = 'lesson', title, badge, items, actions, onExit, onNextSub, CardView = KnowledgeCard }) {
  // items: { kind: 'card', card, no, of, recap } (read) or { kind: 'q', qid, challenge } (tested)
  const total = items.filter((it) => it.kind === 'q').length;
  const [phase, setPhase] = useState('quiz');
  const [queue, setQueue] = useState(() => items.map((it) => ({ ...it, retest: mode === 'drill' })));
  const [idx, setIdx] = useState(0);
  const [verdict, setVerdict] = useState(null); // null | true | false
  const [cleared, setCleared] = useState(0);
  const [firstTry, setFirstTry] = useState(0);
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [toast, setToast] = useState(null);
  const finished = useRef(false);

  const current = queue[idx];
  const isCard = current?.kind === 'card';
  const View = current && !isCard ? VIEWS[current.challenge.type] : null;
  const inBoss = !isCard && !!current?.retest && mode !== 'drill';
  const canContinue = isCard || verdict !== null;
  // how many first-time questions (not re-tests) have been reached so far
  const qNumber = queue.slice(0, idx + 1).filter((it) => it.kind === 'q' && !it.retest).length;
  const stars = useMemo(() => starsFor(firstTry, total), [firstTry, total]);

  const flash = (text) => {
    setToast(text);
    setTimeout(() => setToast(null), 1800);
  };

  const handleResolve = useCallback(
    (correct) => {
      setVerdict(correct);
      const { qid, retest } = current;
      if (correct) {
        SoundController.success();
        actions.clearMistake(qid);
        const gain = retest ? XP_RETEST : XP_FIRST_TRY;
        actions.addXp(gain);
        setXp((x) => x + gain);
        setCleared((c) => c + 1);
        if (!retest) setFirstTry((f) => f + 1);
        setStreak((s) => {
          const next = s + 1;
          if (next % 5 === 0) {
            streakBurst();
            SoundController.complete();
            flash(`🔥 ${next} in a row!`);
          }
          return next;
        });
      } else {
        SoundController.error();
        actions.addMistake(qid);
        setStreak(0);
        setQueue((q) => [...q, { ...current, retest: true }]); // re-inject until answered correctly
      }
    },
    [current, actions],
  );

  const next = useCallback(() => {
    if (!canContinue) return;
    SoundController.click();
    setVerdict(null);
    const last = idx + 1 >= queue.length;
    if (last) setPhase('done');
    else setIdx(idx + 1);
  }, [canContinue, idx, queue.length]);

  // Persist results + celebrate once when finished.
  useEffect(() => {
    if (phase !== 'done' || finished.current) return;
    finished.current = true;
    actions.addXp(XP_COMPLETE);
    setXp((x) => x + XP_COMPLETE);
    if (mode === 'lesson') actions.completeSub(actions.subId, starsFor(firstTry, total));
    if (mode === 'boss') actions.completeBoss(actions.unitId, starsFor(firstTry, total));
    if (actions.onComplete) actions.onComplete(firstTry, total);
    SoundController.complete();
    celebrate();
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // Enter = primary action (start / continue).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Enter' || e.repeat) return;
      if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement) return;
      if (phase === 'quiz') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, next]);

  // Esc leaves the lesson.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onExit();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onExit]);

  const notesOnly = total === 0;
  const hasPractice = queue.some((it) => it.kind === 'q');
  const nextIsQuestion = queue[idx + 1]?.kind === 'q';
  const pct = notesOnly ? Math.round((idx / Math.max(1, queue.length)) * 100) : Math.min(100, Math.round((cleared / total) * 100));
  const label = isCard
    ? current.recap ? 'Recap' : `Byte ${current.no} of ${current.of}`
    : inBoss
      ? `⚔️ Boss Fight · ${queue.length - idx} left`
      : mode === 'drill'
        ? `Review · ${queue.length - idx} left`
        : `Question ${Math.min(qNumber, total)} of ${total}`;

  /* ---------- Done ---------- */
  if (phase === 'done') {
    return (
      <Shell title={title} badge={badge} pct={100} xp={xp} onExit={onExit}>
        <div className="card pop p-8 text-center">
          <Trophy className="mx-auto mb-3 h-14 w-14 text-amber-400" aria-hidden />
          <h2 className="text-3xl font-black">
            {mode === 'drill' ? 'Mistakes cleared!' : mode === 'boss' ? 'Mega Quiz complete!' : mode === 'paper' ? 'Past-paper set complete!' : 'Lesson complete!'}
          </h2>
          {mode !== 'drill' && (
            <div className="my-4 flex justify-center gap-1" aria-label={`${stars} of 3 stars`}>
              {[1, 2, 3].map((n) => (
                <Star key={n} className={`h-10 w-10 ${n <= stars ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} aria-hidden />
              ))}
            </div>
          )}
          <div className="mx-auto grid max-w-sm grid-cols-2 gap-3 text-left">
            <Stat icon={<Zap className="h-5 w-5 text-amber-500" />} label="XP earned" value={`+${xp}`} />
            <Stat
              icon={<Swords className="h-5 w-5 text-rose-500" />}
              label={notesOnly ? 'Bytes read' : 'First-try correct'}
              value={notesOnly ? `${queue.filter((q) => q.kind === 'card').length}` : mode === 'drill' ? `${total} cleared` : `${firstTry}/${total}`}
            />
          </div>
          {mode !== 'drill' && !notesOnly && stars < 3 && (
            <p className="mt-4 text-sm font-bold text-slate-500">Get every question right first time for 3 stars — replay any time.</p>
          )}
        </div>
        <Footer>
          {mode === 'lesson' && onNextSub && (
            <button type="button" className="btn btn-blue" onClick={onNextSub}>Next lesson <ArrowRight className="h-5 w-5" aria-hidden /></button>
          )}
          <button type="button" className="btn btn-green" autoFocus onClick={onExit}>Back to map</button>
        </Footer>
      </Shell>
    );
  }

  /* ---------- Quiz ---------- */
  return (
    <Shell title={title} badge={badge} pct={pct} xp={xp} streak={streak} onExit={onExit} label={label} boss={inBoss}>
      {toast && (
        <div role="status" className="pop fixed left-1/2 top-20 z-50 -translate-x-1/2 rounded-full bg-amber-400 px-5 py-2 font-black text-amber-950 shadow-lg">
          {toast}
        </div>
      )}
      <div className={`card p-5 sm:p-6 ${isCard ? '!border-sky-200 !bg-sky-50/60' : ''}`} key={`${idx}-${current.qid || current.card?.title}`}>
        {inBoss && (
          <p className="mb-3 inline-flex items-center gap-1 rounded-full bg-rose-100 px-3 py-1 text-xs font-extrabold uppercase text-rose-700">
            <Swords className="h-3.5 w-3.5" aria-hidden /> Re-test: you missed this one
          </p>
        )}
        {isCard ? (
          <CardView card={current.card} no={current.no} of={current.of} recap={current.recap} hasPractice={hasPractice} />
        ) : (
          <View q={current.challenge} onResolve={handleResolve} />
        )}
      </div>
      <Footer>
        <button type="button" className={`btn w-full sm:w-auto ${verdict === false ? 'btn-red' : isCard ? 'btn-blue' : 'btn-green'}`} disabled={!canContinue} onClick={next}>
          {isCard ? (idx + 1 >= queue.length ? 'Finish' : nextIsQuestion ? 'Got it — test me' : 'Next') : 'Continue'} <ArrowRight className="h-5 w-5" aria-hidden />
        </button>
      </Footer>
    </Shell>
  );
}

function Shell({ title, badge, pct, xp, streak = 0, onExit, label, boss, children }) {
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-4 pb-32 pt-4">
      <div className="mb-5 flex items-center gap-3">
        <button type="button" onClick={onExit} aria-label="Exit lesson (Esc)" className="rounded-xl p-2 text-slate-400 hover:bg-slate-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
          <X className="h-6 w-6" />
        </button>
        <div
          className="h-4 flex-1 overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          aria-label="Lesson progress"
        >
          <div className={`h-full rounded-full transition-all duration-500 ${boss ? 'bg-rose-500' : 'bg-brand'}`} style={{ width: `${Math.max(pct, 3)}%` }} />
        </div>
        <span className="flex items-center gap-1 text-sm font-extrabold text-amber-500" title="XP this session"><Zap className="h-4 w-4" aria-hidden />{xp}</span>
        {streak >= 2 && <span className="flex items-center gap-1 text-sm font-extrabold text-orange-500" title="Answers in a row"><Flame className="h-4 w-4" aria-hidden />{streak}</span>}
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {badge && <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-extrabold text-slate-600">{badge}</span>}
        <h1 className="text-sm font-extrabold text-slate-500">{title}</h1>
        {label && <span className="ml-auto text-sm font-extrabold text-slate-400">{label}</span>}
      </div>
      {children}
    </div>
  );
}

const Footer = ({ children }) => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-slate-200 bg-white/95 px-4 py-4 backdrop-blur">
    <div className="mx-auto flex max-w-2xl justify-end gap-3">{children}</div>
  </div>
);

const Stat = ({ icon, label, value }) => (
  <div className="rounded-2xl border-2 border-slate-200 p-3">
    <p className="flex items-center gap-1 text-xs font-extrabold uppercase text-slate-400">{icon}{label}</p>
    <p className="text-2xl font-black">{value}</p>
  </div>
);

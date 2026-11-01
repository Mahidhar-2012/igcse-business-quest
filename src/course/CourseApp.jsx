import { useMemo, useState, useCallback } from 'react';
import Header from '../components/Header.jsx';
import UnitDashboard from '../components/UnitDashboard.jsx';
import LessonPlayer from '../components/LessonPlayer.jsx';
import MistakeBankModal from '../components/MistakeBankModal.jsx';
import NotesBuilder from '../notes/NotesBuilder.jsx';
import { useProgress } from '../lib/store.js';
import { checkTotal } from '../lib/overview.js';

const MEGA_PER_LESSON = 5;
const PRACTICE_SIZE = 4; // random practice questions at the end of each lesson
const pickRandom = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);


/** Lesson = [knowledge byte -> its test] x N, then a recap card. */
const buildLessonItems = (sub, qItem) => {
  const items = [];
  sub.cards.forEach((card, ci) => {
    items.push({ kind: 'card', card, no: ci + 1, of: sub.cards.length });
    card.tests.forEach((_, ti) => items.push(qItem(`${sub.id}:c${ci}.${ti}`)));
  });
  // A short random practice round from the lesson's pool (definitions, exam-style and mixed-type questions).
  const pool = (sub.challenges || []).map((_, i) => i);
  pickRandom(pool, PRACTICE_SIZE).forEach((i) => items.push(qItem(`${sub.id}:${i}`)));
  items.push({ kind: 'card', recap: true, card: { title: `Recap: ${sub.title}`, points: sub.microConcept } });
  return items;
};

/**
 * Generic course screen used by every subject that follows the byte-card format.
 * config = { id, appTitle, heading, gradient, storageKey, units, questionIndex, subQuestionIds, CardView }
 */
export default function CourseApp({ onHome, config }) {
  const { id, appTitle, heading, gradient, storageKey, units, questionIndex, subQuestionIds, CardView } = config;
  const course = useMemo(() => ({ units, questionIndex, key: storageKey, oldKey: null }), [units, questionIndex, storageKey]);
  const qItem = useCallback((qid) => ({ kind: 'q', qid, challenge: questionIndex[qid].challenge }), [questionIndex]);
  useMemo(() => checkTotal(id, units.reduce((n, u) => n + u.submodules.length, 0)), [id, units]);
  const progress = useProgress(course);
  const { state, unitStats, isSubUnlocked, addXp, addMistake, clearMistake, completeSub, completeBoss, recordExam, toggle, reset } = progress;

  const [activeUnitId, setActiveUnitId] = useState(() => (units.find((u) => !unitStats[u.id].allDone) || units[0]).id);
  const [view, setView] = useState({ name: 'dashboard' });
  const [mistakesOpen, setMistakesOpen] = useState(false);
  const baseActions = useMemo(
    () => ({ addXp, addMistake, clearMistake, completeSub, completeBoss }),
    [addXp, addMistake, clearMistake, completeSub, completeBoss],
  );

  const exit = useCallback(() => setView({ name: 'dashboard' }), []);

  const startSub = useCallback((unit, sub) => {
    setActiveUnitId(unit.id);
    setView({ name: 'lesson', unit, sub, items: buildLessonItems(sub, qItem) });
  }, [qItem]);

  const startBoss = useCallback((unit) => {
    const ids = unit.submodules.flatMap((sub) => pickRandom(subQuestionIds(sub), MEGA_PER_LESSON));
    setView({ name: 'boss', unit, ids: pickRandom(ids, ids.length) });
  }, [subQuestionIds]);

  const startPaper = useCallback(
    (unit, paper) => setView({ name: 'paper', unit, paper, ids: paper.round ? pickRandom(paper.ids, paper.round) : paper.ids }),
    [],
  );

  const startDrill = useCallback((ids) => {
    setMistakesOpen(false);
    setView({ name: 'drill', ids: [...ids] });
  }, []);

  let body;
  if (view.name === 'lesson') {
    const { unit, sub } = view;
    const nextSub = unit.submodules[unit.submodules.indexOf(sub) + 1];
    body = (
      <LessonPlayer
        key={sub.id}
        mode="lesson"
        title={sub.title}
        badge={`Unit ${unit.number}`}
        items={view.items}
        actions={{ ...baseActions, subId: sub.id }}
        onExit={exit}
        onNextSub={nextSub ? () => startSub(unit, nextSub) : null}
        CardView={CardView}
      />
    );
  } else if (view.name === 'boss') {
    body = (
      <LessonPlayer
        key={`boss-${view.unit.id}-${view.ids.join()}`}
        mode="boss"
        title={`Unit ${view.unit.number} Mega Quiz`}
        badge="Mega Quiz"
        items={view.ids.map(qItem)}
        actions={{ ...baseActions, unitId: view.unit.id }}
        onExit={exit}
        CardView={CardView}
      />
    );
  } else if (view.name === 'paper') {
    const { paper } = view;
    body = (
      <LessonPlayer
        key={`${paper.id}-${view.ids.join()}`}
        mode="paper"
        title={paper.title}
        badge="Past paper"
        items={view.ids.map(qItem)}
        actions={{
          ...baseActions,
          onComplete: (firstTry, total) => recordExam(paper.id, Math.round((firstTry / total) * 100)),
        }}
        onExit={exit}
        CardView={CardView}
      />
    );
  } else if (view.name === 'notes') {
    body = <NotesBuilder title={heading.replace(/^IGCSE /, '').replace(/\s*\d{4}$/, '')} code={heading.match(/\d{4}/)?.[0] ?? null} units={units} onBack={exit} />;
  } else if (view.name === 'drill') {
    body = (
      <LessonPlayer
        key={`drill-${view.ids.join()}`}
        mode="drill"
        title="Mistake Bank drill"
        badge="Review"
        items={view.ids.map(qItem)}
        actions={baseActions}
        onExit={exit}
        CardView={CardView}
      />
    );
  } else {
    body = (
      <>
        <Header
          title={appTitle}
          courseUnits={units}
          state={state}
          unitStats={unitStats}
          activeUnitId={activeUnitId}
          onSelectUnit={setActiveUnitId}
          onOpenMistakes={() => setMistakesOpen(true)}
          onOpenNotes={() => setView({ name: 'notes' })}
          onHome={onHome}
          onToggle={toggle}
          onReset={reset}
          showUnits
        />
        <UnitDashboard
          units={units}
          heading={heading}
          gradient={gradient}
          state={state}
          unitStats={unitStats}
          isSubUnlocked={isSubUnlocked}
          activeUnitId={activeUnitId}
          onSelectUnit={setActiveUnitId}
          onStartSub={startSub}
          onStartBoss={startBoss}
          onStartPaper={startPaper}
        />
      </>
    );
  }

  return (
    <>
      {body}
      {mistakesOpen && (
        <MistakeBankModal mistakes={state.mistakes} onClose={() => setMistakesOpen(false)} onStartDrill={startDrill} course={course} />
      )}
    </>
  );
}

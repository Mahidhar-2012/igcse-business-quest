import { useMemo, useState, useCallback } from 'react';
import Header from '../components/Header.jsx';
import UnitDashboard from '../components/UnitDashboard.jsx';
import LessonPlayer from '../components/LessonPlayer.jsx';
import MistakeBankModal from '../components/MistakeBankModal.jsx';
import PhysicsCard from './PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';
import { useProgress } from '../lib/store.js';

const course = { units, questionIndex, key: 'igcse-physics-quest:v1', oldKey: null };
const MEGA_PER_LESSON = 5;
const pickRandom = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);
const qItem = (qid) => ({ kind: 'q', qid, challenge: questionIndex[qid].challenge });

/** Lesson = [knowledge byte -> its test] x N, then a recap card. */
const buildLessonItems = (sub) => {
  const items = [];
  sub.cards.forEach((card, ci) => {
    items.push({ kind: 'card', card, no: ci + 1, of: sub.cards.length });
    card.tests.forEach((_, ti) => items.push(qItem(`${sub.id}:c${ci}.${ti}`)));
  });
  items.push({ kind: 'card', recap: true, card: { title: `Recap: ${sub.title}`, points: sub.microConcept } });
  return items;
};

export default function PhysicsApp({ onHome }) {
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
    setView({ name: 'lesson', unit, sub, items: buildLessonItems(sub) });
  }, []);

  const startBoss = useCallback((unit) => {
    const ids = unit.submodules.flatMap((sub) => pickRandom(subQuestionIds(sub), MEGA_PER_LESSON));
    setView({ name: 'boss', unit, ids: pickRandom(ids, ids.length) });
  }, []);

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
        CardView={PhysicsCard}
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
        CardView={PhysicsCard}
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
        CardView={PhysicsCard}
      />
    );
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
        CardView={PhysicsCard}
      />
    );
  } else {
    body = (
      <>
        <Header
          title="Physics Quest"
          courseUnits={units}
          state={state}
          unitStats={unitStats}
          activeUnitId={activeUnitId}
          onSelectUnit={setActiveUnitId}
          onOpenMistakes={() => setMistakesOpen(true)}
          onHome={onHome}
          onToggle={toggle}
          onReset={reset}
          showUnits
        />
        <UnitDashboard
          units={units}
          heading="IGCSE Physics 0625"
          gradient="from-sky-500 to-indigo-500"
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

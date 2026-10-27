import { useMemo, useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import UnitDashboard from './components/UnitDashboard.jsx';
import LessonPlayer from './components/LessonPlayer.jsx';
import MistakeBankModal from './components/MistakeBankModal.jsx';
import ExamPlayer from './components/ExamPlayer.jsx';
import GlossaryModal from './components/GlossaryModal.jsx';import { units, questionIndex, subQuestionIds } from './data/syllabusData.js';
import { useProgress } from './lib/store.js';

const MEGA_PER_LESSON = 5; // mega quiz draws this many questions from EVERY lesson in the unit
const PRACTICE_SIZE = 6; // random practice questions at the end of each lesson
const pickRandom = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);

const qItem = (qid) => ({ kind: 'q', qid, challenge: questionIndex[qid].challenge });

/** Lesson = [byte card -> its test(s)] x N, then recap card, then a random practice round. */
const buildLessonItems = (sub) => {
  const items = [];
  sub.cards.forEach((card, ci) => {
    items.push({ kind: 'card', card, no: ci + 1, of: sub.cards.length });
    card.tests.forEach((_, ti) => items.push(qItem(`${sub.id}:c${ci}.${ti}`)));
  });
  items.push({ kind: 'card', recap: true, card: { title: `Recap: ${sub.title}`, points: sub.microConcept } });
  const practiceIds = sub.challenges.map((_, i) => `${sub.id}:${i}`); // empty for notes-only lessons
  pickRandom(practiceIds, PRACTICE_SIZE).forEach((qid) => items.push(qItem(qid)));
  return items;
};

export default function BusinessApp({ onHome }) {
  const progress = useProgress();
  const { state, unitStats, isSubUnlocked, addXp, addMistake, clearMistake, completeSub, completeBoss, recordExam, toggle, reset } = progress;

  // Start on the first unit that isn't fully done.
  const [activeUnitId, setActiveUnitId] = useState(() => (units.find((u) => !unitStats[u.id].allDone) || units[0]).id);
  const [view, setView] = useState({ name: 'dashboard' });
  const [mistakesOpen, setMistakesOpen] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
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
    // stratified: equal share from every lesson, so the whole unit is covered
    const ids = unit.submodules.flatMap((sub) => pickRandom(subQuestionIds(sub), MEGA_PER_LESSON));
    setView({ name: 'boss', unit, ids: pickRandom(ids, ids.length) });
  }, []);

  const startExam = useCallback((unit, exam) => setView({ name: 'exam', unit, exam }), []);

  const startDrill = useCallback((ids) => {
    setMistakesOpen(false);
    setView({ name: 'drill', ids: [...ids] });
  }, []);

  let body;
  if (view.name === 'lesson') {
    const { unit, sub } = view;
    const subIndex = unit.submodules.indexOf(sub);
    const nextSub = unit.submodules[subIndex + 1];
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
      />
    );
  } else if (view.name === 'exam') {
    body = (
      <ExamPlayer
        key={view.exam.id}
        exam={view.exam}
        onExit={exit}
        onFinish={(pct, score) => {
          recordExam(view.exam.id, pct);
          addXp(score); // 1 XP per mark earned
        }}
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
      />
    );
  } else {
    body = (
      <>
        <Header
          state={state}
          unitStats={unitStats}
          activeUnitId={activeUnitId}
          onSelectUnit={setActiveUnitId}
          onOpenMistakes={() => setMistakesOpen(true)}
          onOpenGlossary={() => setGlossaryOpen(true)}
          onHome={onHome}
          onToggle={toggle}
          onReset={reset}
          showUnits
        />
        <UnitDashboard
          state={state}
          unitStats={unitStats}
          isSubUnlocked={isSubUnlocked}
          activeUnitId={activeUnitId}
          onSelectUnit={setActiveUnitId}
          onStartSub={startSub}
          onStartBoss={startBoss}
          onStartExam={startExam}
        />
      </>
    );
  }

  return (
    <>
      {body}
      {glossaryOpen && <GlossaryModal onClose={() => setGlossaryOpen(false)} />}      {mistakesOpen && (
        <MistakeBankModal mistakes={state.mistakes} onClose={() => setMistakesOpen(false)} onStartDrill={startDrill} />
      )}
    </>
  );
}

import { useMemo, useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import UnitDashboard from './components/UnitDashboard.jsx';
import LessonPlayer from './components/LessonPlayer.jsx';
import MistakeBankModal from './components/MistakeBankModal.jsx';
import ExamPlayer from './components/ExamPlayer.jsx';
import MegaUnit from './components/MegaUnit.jsx';
import { FileText as FileTextIcon } from 'lucide-react';
import NotesBuilder from './notes/NotesBuilder.jsx';
import { findTerms } from './data/glossary.js';
import GlossaryModal from './components/GlossaryModal.jsx';import { units, questionIndex, subQuestionIds } from './data/syllabusData.js';
import ReviewBanner from './components/ReviewBanner.jsx';
import { useProgress } from './lib/store.js';
import { dueIds, SESSION_SIZE } from './lib/srs.js';
import { checkTotal } from './lib/overview.js';

// v2: questions were rewritten as critical-thinking questions, so saved mistake ids from v1 no longer match.
const course = { units, questionIndex, key: 'igcse-business-quest:v2', oldKey: 'igcse-business-quest:v1' };
checkTotal('business', units.reduce((n, u) => n + u.submodules.length, 0));
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

export default function BusinessApp({ onHome, deep }) {
  const progress = useProgress(course);
  const { state, unitStats, isSubUnlocked, addXp, addMistake, clearMistake, record, completeSub, completeBoss, recordExam, toggle, reset } = progress;

  const due = dueIds(state.srs);
  // Start on the first unit that isn't fully done.
  const [activeUnitId, setActiveUnitId] = useState(() => (units.find((u) => !unitStats[u.id].allDone) || units[0]).id);
  const [view, setView] = useState(() => {
    if (deep === 'notes') return { name: 'notes' };
    if (deep === 'mega') return { name: 'mega' };
    if (deep === 'review' && due.length) return { name: 'review', ids: due.slice(0, SESSION_SIZE) };
    return { name: 'dashboard' };
  });
  const [mistakesOpen, setMistakesOpen] = useState(deep === 'mistakes');
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const baseActions = useMemo(
    () => ({ addXp, addMistake, clearMistake, record, completeSub, completeBoss }),
    [addXp, addMistake, clearMistake, record, completeSub, completeBoss],
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
  const startMegaExam = useCallback((exam) => setView({ name: 'exam', unit: null, exam, from: 'mega' }), []);
  const openMega = useCallback(() => setView({ name: 'mega' }), []);

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
        onExit={view.from === 'mega' ? openMega : exit}
        onFinish={(pct, score) => {
          recordExam(view.exam.id, pct);
          addXp(score); // 1 XP per mark earned
        }}
      />
    );
  } else if (view.name === 'mega') {
    body = <MegaUnit onBack={exit} exams={state.exams} onStart={startMegaExam} />;
  } else if (view.name === 'notes') {
    body = <NotesBuilder title="Business Studies" code="0264" units={units} onBack={exit} findGlossary={findTerms} />;
  } else if (view.name === 'review') {
    body = (
      <LessonPlayer
        key={`review-${view.ids.join()}`}
        mode="drill"
        title="Daily review"
        badge="Spaced review"
        doneTitle="Review done!"
        items={view.ids.map(qItem)}
        actions={baseActions}
        onExit={exit}
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
          courseUnits={units}
          state={state}
          unitStats={unitStats}
          activeUnitId={activeUnitId}
          onSelectUnit={setActiveUnitId}
          onOpenMistakes={() => setMistakesOpen(true)}
          onOpenGlossary={() => setGlossaryOpen(true)}
          onOpenNotes={() => setView({ name: 'notes' })}
          onHome={onHome}
          onToggle={toggle}
          onReset={reset}
          showUnits
        />
        <ReviewBanner count={due.length} onStart={() => setView({ name: 'review', ids: due.slice(0, SESSION_SIZE) })} />
        <div className="mx-auto mt-3 max-w-3xl px-4">
          <button type="button" onClick={openMega} className="card flex w-full items-center gap-3 p-3 text-left transition hover:bg-violet-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300" style={{ borderColor: '#7c3aed' }}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: '#7c3aed' }}><FileTextIcon className="h-5 w-5" aria-hidden /></span>
            <span className="min-w-0 flex-1">
              <span className="block font-extrabold leading-tight">Exam Mega Unit</span>
              <span className="block text-sm font-semibold text-slate-500">Paper 1 and Paper 2 mock papers with mark schemes, across every unit</span>
            </span>
            <span className="btn btn-blue !px-3 !py-1.5 text-xs">Open</span>
          </button>
        </div>
        <UnitDashboard
          units={units}
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
        <MistakeBankModal mistakes={state.mistakes} onClose={() => setMistakesOpen(false)} onStartDrill={startDrill} course={course} />
      )}
    </>
  );
}

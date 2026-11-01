import { useState } from 'react';
import { LayoutGrid, X, ChevronLeft, ChevronRight, Check, CheckCircle2, Trash2, FileText } from 'lucide-react';
import { sections, allLessons, SECTION_COLORS } from './data/index.js';
import { useEnglishProgress } from './useEnglishProgress.js';
import EnglishCard from './EnglishCard.jsx';
import { checkTotal } from '../lib/overview.js';
import NotesBuilder from '../notes/NotesBuilder.jsx';

/** English sections as units, so the shared notes builder can print them. */
const notesUnits = sections.map((s, i) => ({
  id: s.id, number: i + 1, title: s.title, emoji: s.emoji,
  submodules: s.lessons.map((l) => ({ id: l.id, title: l.title, syllabus: null, microConcept: null, cards: l.cards, challenges: [] })),
}));

function Reader({ section, lesson, done, onFinish, onExit, onNext }) {
  const [i, setI] = useState(0);
  const total = lesson.cards.length;
  const last = i === total - 1;
  const color = SECTION_COLORS[section.color];
  const finish = () => {
    onFinish(lesson.id);
    onExit();
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-6">
      <div className="flex items-center gap-3 py-4">
        <button type="button" onClick={onExit} aria-label="Close lesson" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100">
          <X className="h-6 w-6" />
        </button>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-label="Lesson progress" aria-valuemin={0} aria-valuemax={total} aria-valuenow={i + 1}>
          <div className="h-full rounded-full transition-all" style={{ width: `${((i + 1) / total) * 100}%`, background: color }} />
        </div>
        <span className="text-sm font-extrabold text-slate-500">{i + 1}/{total}</span>
      </div>
      <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">{section.title} · {lesson.title}</p>
      <main className="flex-1" key={`${lesson.id}-${i}`}>
        <EnglishCard card={lesson.cards[i]} no={i + 1} of={total} />
      </main>
      <div className="sticky bottom-0 -mx-4 mt-6 flex gap-3 border-t-2 border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <button type="button" className="btn btn-ghost" disabled={i === 0} onClick={() => setI(i - 1)}>
          <ChevronLeft className="h-5 w-5" aria-hidden /> Back
        </button>
        {last ? (
          <>
            <button type="button" className="btn btn-green ml-auto" onClick={finish}>
              <Check className="h-5 w-5" aria-hidden /> {done ? 'Done' : 'Mark as read'}
            </button>
            {onNext && (
              <button type="button" className="btn btn-blue" onClick={() => { onFinish(lesson.id); onNext(); }}>
                Next lesson <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            )}
          </>
        ) : (
          <button type="button" className="btn btn-blue ml-auto" onClick={() => setI(i + 1)}>
            Next <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
}

checkTotal('english', allLessons.length);

export default function EnglishApp({ onHome }) {
  const { done, markDone, reset } = useEnglishProgress();
  const [open, setOpen] = useState(null); // { section, lesson }
  const [notesOpen, setNotesOpen] = useState(false);
  const total = allLessons.length;
  const pct = Math.round((done.length / total) * 100);

  if (notesOpen) {
    return <NotesBuilder title="English as a Second Language" code="0510 / 0511" units={notesUnits} onBack={() => setNotesOpen(false)} />;
  }

  if (open) {
    const sIdx = sections.indexOf(open.section);
    const lIdx = open.section.lessons.indexOf(open.lesson);
    const nextInSection = open.section.lessons[lIdx + 1];
    const nextSection = sections[sIdx + 1];
    const next = nextInSection
      ? { section: open.section, lesson: nextInSection }
      : nextSection ? { section: nextSection, lesson: nextSection.lessons[0] } : null;
    return (
      <Reader
        key={open.lesson.id}
        section={open.section}
        lesson={open.lesson}
        done={done.includes(open.lesson.id)}
        onFinish={markDone}
        onExit={() => setOpen(null)}
        onNext={next ? () => setOpen(next) : null}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b-2 border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2.5">
          <button type="button" onClick={onHome} aria-label="Back to all subjects" title="All subjects" className="icon-btn">
            <LayoutGrid className="h-5 w-5" />
          </button>
          <span className="text-lg font-black text-sky-700">English ESL Notes</span>
          <span className="ml-auto text-sm font-extrabold text-slate-500">{done.length}/{total} lessons read · {pct}%</span>
          <button type="button" aria-label="Printable notes and cheat sheets" title="Printable notes" onClick={() => setNotesOpen(true)} className="icon-btn !text-sky-600 hover:!bg-sky-50">
            <FileText className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Reset reading progress"
            title="Reset progress"
            onClick={() => { if (window.confirm('Reset your English reading progress?')) reset(); }}
            className="icon-btn hover:!bg-rose-50 hover:!text-rose-500"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="mx-auto max-w-5xl space-y-8 px-4 py-6 outline-none">
        <section className="rounded-3xl border-2 border-sky-200 bg-sky-50 p-5">
          <h1 className="text-2xl font-black">English as a Second Language (0510 / 0511)</h1>
          <p className="mt-1 text-sm font-semibold text-slate-600">
            Byte-sized notes for every writing task: email, review, report, essay and article. Read a lesson, then try the task on paper. No quizzes here, only notes and model answers.
          </p>
          <p className="mt-2 text-xs font-bold text-slate-600">
            The “A* model answers” section holds sample scripts with their exam questions (Cambridge past-paper prompts and student samples, shared for personal study). The other notes are original. Your own past papers and teacher feedback remain the final guide.
          </p>
        </section>

        {sections.map((s) => {
          const color = SECTION_COLORS[s.color];
          const doneIn = s.lessons.filter((l) => done.includes(l.id)).length;
          return (
            <section key={s.id} aria-labelledby={`h-${s.id}`}>
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl text-2xl text-white" style={{ background: color }} aria-hidden>{s.emoji}</span>
                <div className="flex-1">
                  <h2 id={`h-${s.id}`} className="text-xl font-black leading-tight">{s.title}</h2>
                  <p className="text-sm font-semibold text-slate-500">{s.blurb}</p>
                </div>
                <span className="text-sm font-extrabold text-slate-500">{doneIn}/{s.lessons.length}</span>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {s.lessons.map((l) => {
                  const isDone = done.includes(l.id);
                  return (
                    <li key={l.id}>
                      <button
                        type="button"
                        onClick={() => setOpen({ section: s, lesson: l })}
                        className="card flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"
                      >
                        <span className="text-3xl" aria-hidden>{l.emoji}</span>
                        <span className="flex-1">
                          <span className="block font-black leading-tight">{l.title}</span>
                          <span className="text-xs font-bold text-slate-500">{l.cards.length} bytes</span>
                        </span>
                        {isDone && <CheckCircle2 className="h-6 w-6 text-brand" aria-label="Read" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </main>
    </div>
  );
}

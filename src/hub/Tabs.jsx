import { ArrowRight, Flame, Zap, Target, Play, ShieldAlert, FileText, ChevronRight, Check, Trash2, BookOpen, Star, RotateCcw } from 'lucide-react';
import { Ring, SubjectBadge, ThemePicker } from './parts.jsx';
import { hasBook } from '../textbook/available.js';

const Chip = ({ icon: Icon, tint, value, label }) => (
  <span className="flex items-center gap-1.5 rounded-full border-2 border-slate-200 bg-white px-3 py-1.5 text-sm font-bold" title={label}>
    <Icon className={`h-4 w-4 ${tint}`} aria-hidden />
    <span aria-label={`${value} ${label}`}>{value}</span>
  </span>
);

export function StatChips({ ov }) {
  const goalPct = Math.min(100, Math.round((ov.todayXp / ov.goal) * 100));
  return (
    <div className="flex flex-wrap gap-2">
      <Chip icon={Flame} tint="fill-orange-400 text-orange-500" value={ov.streak} label="day streak" />
      <Chip icon={Zap} tint="fill-amber-400 text-amber-500" value={ov.xp} label="total XP" />
      <Chip icon={Target} tint="text-emerald-600" value={`${goalPct}%`} label="of today's goal" />
    </div>
  );
}

const Row = ({ icon: Icon, title, sub, href, done }) => (
  <li>
    <a href={href} className="flex items-center gap-3 rounded-2xl px-1 py-3 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${done ? 'bg-emerald-500 text-white' : 'bg-brand-soft text-brand-dark'}`}>
        {done ? <Check className="h-5 w-5" aria-hidden /> : <Icon className="h-5 w-5" aria-hidden />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-extrabold leading-tight">{title}</span>
        <span className="block text-sm font-medium text-slate-500">{sub}</span>
      </span>
      <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
    </a>
  </li>
);

export function Learn({ subjects, ov, current, setCurrent }) {
  const cur = subjects.find((s) => s.id === current) || subjects[0];
  const st = ov.subjects[cur.id];
  const last = subjects.find((s) => s.id === ov.lastSubject) || cur;
  const lastSt = ov.subjects[last.id];
  const worst = [...subjects].filter((s) => ov.subjects[s.id].mistakes > 0).sort((a, b) => ov.subjects[b.id].mistakes - ov.subjects[a.id].mistakes)[0];
  const dueSubject = [...subjects].filter((s) => ov.subjects[s.id].due > 0).sort((a, b) => ov.subjects[b.id].due - ov.subjects[a.id].due)[0];
  const goalPct = Math.min(100, Math.round((ov.todayXp / ov.goal) * 100));
  const anyStarted = subjects.some((s) => ov.subjects[s.id].started);

  const items = [
    anyStarted
      ? { icon: Play, title: `Continue ${last.title}`, sub: `${lastSt.done}/${lastSt.total} lessons · ${lastSt.pct}%`, href: last.hash, done: ov.todayXp > 0 }
      : { icon: Play, title: `Start ${cur.title}`, sub: 'Your first lesson takes about five minutes', href: cur.hash, done: false },
    worst
      ? { icon: ShieldAlert, title: 'Fix your mistakes', sub: `${ov.subjects[worst.id].mistakes} to review in ${worst.title}`, href: `${worst.hash}/mistakes`, done: false }
      : { icon: ShieldAlert, title: 'Mistake bank is clear', sub: 'Wrong answers collect here so you can retry them', href: '#/recall', done: anyStarted },
    dueSubject
      ? { icon: RotateCcw, title: 'Daily review', sub: `${ov.subjects[dueSubject.id].due} due in ${dueSubject.title}`, href: `${dueSubject.hash}/review`, done: false }
      : { icon: RotateCcw, title: 'Daily review is clear', sub: 'Answered questions come back when they are due', href: '#/recall', done: anyStarted },
    { icon: Target, title: 'Daily goal', sub: `${ov.todayXp} of ${ov.goal} XP today`, href: (anyStarted ? last : cur).hash, done: goalPct >= 100 },
    { icon: FileText, title: 'Revise with notes', sub: `Print or save a cheat sheet for ${cur.title}`, href: `${cur.hash}/notes`, done: false },
  ];
  const doneCount = items.filter((i) => i.done).length;

  return (
    <>
      <p className="mt-3 text-sm font-semibold text-slate-500">
        {anyStarted ? 'Welcome back. Pick up where you left off.' : 'Pick a subject and start your first lesson.'}
      </p>
      <h2 className="mb-2 mt-5 text-sm font-extrabold uppercase tracking-wider text-slate-500">Your subjects</h2>
      <ul className="grid grid-cols-3 gap-2">
        {subjects.map((s) => {
          const on = s.id === cur.id;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setCurrent(s.id)}
                aria-pressed={on}
                className={`flex h-full w-full flex-col items-center gap-1 rounded-2xl border-2 border-b-4 px-1 py-2.5 text-center transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300 ${
                  on ? 'border-brand bg-brand-soft' : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <SubjectBadge subject={s} size={34} />
                <span className="text-[13px] font-extrabold leading-tight">{s.shortTitle}</span>
                <span className={`text-[11px] font-bold ${on ? 'text-brand-dark' : 'text-slate-500'}`}>{on ? "You're here" : `${ov.subjects[s.id].pct}%`}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <section aria-label={cur.title} className="card mt-4 flex items-center gap-4 p-4">
        <Ring pct={st.pct} color={cur.color} size={64}>
          <SubjectBadge subject={cur} size={36} />
        </Ring>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl font-black leading-tight">{cur.title}</h3>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{cur.code} · {st.done}/{st.total} lessons</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a href={cur.hash} className="btn btn-green !px-4 !py-2 text-sm">{st.started ? 'Continue' : 'Start'} <ArrowRight className="h-4 w-4" aria-hidden /></a>
            <a href={`${cur.hash}/notes`} className="btn btn-ghost !px-3 !py-2 text-sm"><FileText className="h-4 w-4" aria-hidden /> Notes</a>
            {hasBook(cur.id) && <a href={`#/book/${cur.id}`} className="btn btn-ghost !px-3 !py-2 text-sm"><BookOpen className="h-4 w-4" aria-hidden /> Textbook</a>}
          </div>
        </div>
      </section>

      <section aria-label="Today's revision" className="card mt-4 p-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-xl font-black">Today’s revision</h2>
          <span className="text-sm font-bold text-slate-500">{doneCount} of {items.length}</span>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={doneCount} aria-label="Today's revision progress">
          <div className="h-full rounded-full bg-brand transition-all duration-700" style={{ width: `${(doneCount / items.length) * 100}%` }} />
        </div>
        <ul className="mt-2 divide-y divide-slate-100">
          {items.map((it) => <Row key={it.title} {...it} />)}
        </ul>
      </section>

      <section aria-label="Shortcuts" className="mt-4 grid grid-cols-3 gap-2">
        {[
          [ShieldAlert, 'Mistakes', `${subjects.reduce((n, s) => n + ov.subjects[s.id].mistakes, 0)} to fix`, '#/recall'],
          [FileText, 'Notes', 'Cheat sheets', '#/notes'],
          [Star, 'Progress', `${ov.xp} XP`, '#/progress'],
        ].map(([Icon, t, sub, href]) => (
          <a key={t} href={href} className="card flex flex-col items-center gap-0.5 p-3 text-center transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
            <Icon className="h-5 w-5 text-brand-dark" aria-hidden />
            <span className="text-sm font-extrabold">{t}</span>
            <span className="text-xs font-semibold text-slate-500">{sub}</span>
          </a>
        ))}
      </section>
    </>
  );
}

export function Recall({ subjects, ov }) {
  const list = subjects.filter((s) => ov.subjects[s.id].mistakes > 0).sort((a, b) => ov.subjects[b.id].mistakes - ov.subjects[a.id].mistakes);
  const total = list.reduce((n, s) => n + ov.subjects[s.id].mistakes, 0);
  const dueList = subjects.filter((s) => ov.subjects[s.id].due > 0).sort((a, b) => ov.subjects[b.id].due - ov.subjects[a.id].due);
  const dueTotal = dueList.reduce((n, s) => n + ov.subjects[s.id].due, 0);
  const weak = subjects.flatMap((s) => ov.subjects[s.id].weak.map((l) => ({ ...l, subject: s }))).sort((a, b) => a.pct - b.pct).slice(0, 6);
  return (
    <>
      <h2 className="mt-4 font-display text-2xl font-black">Recall</h2>
      <p className="text-sm font-semibold text-slate-500">Retrying questions you got wrong is one of the quickest ways to improve. Your mistake bank collects them.</p>
      <section className="card mt-4 p-4" aria-label="Daily review">
        <h3 className="font-display text-lg font-black"><RotateCcw className="mr-1 inline h-5 w-5 text-brand-dark" aria-hidden />Daily review</h3>
        {dueList.length === 0 ? (
          <p className="mt-1 text-sm font-semibold text-slate-500">Nothing is due. Every question you answer comes back at the right moment: a day later if you missed it, then 3, 7, 14, 30 and 60 days when you get it right.</p>
        ) : (
          <>
            <p className="mt-1 text-sm font-semibold text-slate-500">{dueTotal} question{dueTotal === 1 ? '' : 's'} due. Ten at a time keeps it quick.</p>
            <ul className="mt-2 space-y-2">
              {dueList.map((s) => (
                <li key={s.id}>
                  <a href={`${s.hash}/review`} className="flex items-center gap-3 rounded-2xl border-2 border-slate-200 p-2 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                    <SubjectBadge subject={s} size={36} />
                    <span className="min-w-0 flex-1">
                      <span className="block font-extrabold leading-tight">{s.title}</span>
                      <span className="block text-sm font-semibold text-slate-500">{ov.subjects[s.id].due} due</span>
                    </span>
                    <span className="btn btn-green !px-3 !py-1.5 text-xs">Review</span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
      <section className="card mt-3 p-4" aria-label="Weakest lessons">
        <h3 className="font-display text-lg font-black"><Target className="mr-1 inline h-5 w-5 text-brand-dark" aria-hidden />Weakest lessons</h3>
        {weak.length === 0 ? (
          <p className="mt-1 text-sm font-semibold text-slate-500">Once you have answered a few questions in a lesson, the ones you find hardest are listed here so you know what to revise first.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {weak.map((l) => (
              <li key={`${l.subject.id}-${l.id}`}>
                <a href={l.subject.hash} className="flex items-center gap-3 rounded-2xl p-1 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                  <SubjectBadge subject={l.subject} size={32} />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2"><span className="truncate text-sm font-extrabold">{l.title}</span><span className="shrink-0 text-xs font-bold text-rose-600">{l.pct}% right</span></span>
                    <span className="mt-1 block h-2 overflow-hidden rounded-full bg-slate-200"><span className="block h-full rounded-full bg-rose-500" style={{ width: `${l.pct}%` }} /></span>
                    <span className="block text-xs font-semibold text-slate-500">{l.subject.title} · {l.right} of {l.attempts} first tries</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
      {list.length === 0 ? (
        <div className="card mt-4 p-6 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600"><Check className="h-7 w-7" aria-hidden /></span>
          <h3 className="mt-3 font-display text-xl font-black">Nothing to review</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500">Questions you miss will appear here, ready to retry.</p>
          <a href="#/" className="btn btn-green mt-4">Go to lessons</a>
        </div>
      ) : (
        <>
          <p className="mt-3 text-sm font-extrabold text-slate-600">{total} question{total === 1 ? '' : 's'} to review</p>
          <ul className="mt-2 space-y-2">
            {list.map((s) => (
              <li key={s.id}>
                <a href={`${s.hash}/mistakes`} className="card flex items-center gap-3 p-3 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                  <SubjectBadge subject={s} size={40} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-extrabold leading-tight">{s.title}</span>
                    <span className="block text-sm font-semibold text-slate-500">{ov.subjects[s.id].mistakes} to review</span>
                  </span>
                  <span className="btn btn-green !px-3 !py-1.5 text-xs">Retry</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="card mt-4 p-4">
        <h3 className="font-display text-lg font-black"><BookOpen className="mr-1 inline h-5 w-5 text-brand-dark" aria-hidden />How recall works</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm font-medium text-slate-600">
          <li>Try to answer before you look at the notes.</li>
          <li>Retry mistakes the next day, then a week later.</li>
          <li>A question leaves the bank once you answer it correctly.</li>
        </ul>
      </div>
    </>
  );
}

export function NotesTab({ subjects, ov }) {
  return (
    <>
      <h2 className="mt-4 font-display text-2xl font-black">Printable notes</h2>
      <p className="text-sm font-semibold text-slate-500">Pick a subject, choose the chapters you want, then print or save an A4 cheat sheet with diagrams, formulae, tips and a self-test.</p>
      <ul className="mt-4 space-y-2">
        {subjects.map((s) => (
          <li key={s.id}>
            <a href={`${s.hash}/notes`} className="card flex items-center gap-3 p-3 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
              <SubjectBadge subject={s} size={40} />
              <span className="min-w-0 flex-1">
                <span className="block font-extrabold leading-tight">{s.title}</span>
                <span className="block text-sm font-semibold text-slate-500">{s.code} · {ov.subjects[s.id].total} lessons</span>
              </span>
              <ChevronRight className="h-5 w-5 text-slate-400" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export function Progress({ subjects, ov, onReset }) {
  const totalDone = subjects.reduce((n, s) => n + ov.subjects[s.id].done, 0);
  const totalLessons = subjects.reduce((n, s) => n + ov.subjects[s.id].total, 0);
  const stars = subjects.reduce((n, s) => n + ov.subjects[s.id].stars, 0);
  const goalPct = Math.min(100, Math.round((ov.todayXp / ov.goal) * 100));
  return (
    <>
      <h2 className="mt-4 font-display text-2xl font-black">Progress</h2>
      <section className="mt-3 grid grid-cols-2 gap-2" aria-label="Totals">
        {[
          [Flame, 'fill-orange-400 text-orange-500', ov.streak, 'Day streak'],
          [Zap, 'fill-amber-400 text-amber-500', ov.xp, 'Total XP'],
          [BookOpen, 'text-sky-600', `${totalDone}/${totalLessons}`, 'Lessons done'],
          [Star, 'fill-yellow-400 text-yellow-500', stars, 'Stars earned'],
        ].map(([Icon, tint, v, l]) => (
          <div key={l} className="card flex items-center gap-3 p-3">
            <Icon className={`h-6 w-6 ${tint}`} aria-hidden />
            <div><p className="text-xl font-black leading-none">{v}</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{l}</p></div>
          </div>
        ))}
      </section>
      <section className="card mt-3 p-4" aria-label="Daily goal">
        <div className="flex items-baseline justify-between"><h3 className="font-display text-lg font-black">Daily goal</h3><span className="text-sm font-bold text-slate-500">{ov.todayXp}/{ov.goal} XP</span></div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={goalPct} aria-label="Daily XP goal">
          <div className="h-full rounded-full bg-brand transition-all duration-700" style={{ width: `${goalPct}%` }} />
        </div>
        <p className="mt-1 text-xs font-semibold text-slate-500">{goalPct >= 100 ? 'Goal reached. Great work!' : `${ov.goal - ov.todayXp} XP to go. Answer questions in any subject to earn XP.`}</p>
      </section>
      <section className="card mt-3 p-4" aria-label="Subjects">
        <h3 className="font-display text-lg font-black">By subject</h3>
        <ul className="mt-2 space-y-3">
          {subjects.map((s) => {
            const st = ov.subjects[s.id];
            return (
              <li key={s.id}>
                <a href={s.hash} className="flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                  <SubjectBadge subject={s} size={32} />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2"><span className="truncate text-sm font-extrabold">{s.title}</span><span className="shrink-0 text-xs font-bold text-slate-500">{st.done}/{st.total}</span></span>
                    <span className="mt-1 block h-2 overflow-hidden rounded-full bg-slate-200"><span className="block h-full rounded-full" style={{ width: `${st.pct}%`, background: s.color }} /></span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="card mt-3 p-4" aria-label="Settings">
        <h3 className="font-display text-lg font-black">Settings</h3>
        <p className="mb-2 mt-1 text-sm font-semibold text-slate-500">Theme</p>
        <ThemePicker />
        <button
          type="button"
          onClick={onReset}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-rose-200 px-4 py-2.5 text-sm font-extrabold text-rose-600 hover:bg-rose-50"
        >
          <Trash2 className="h-4 w-4" aria-hidden /> Reset all progress
        </button>
        <p className="mt-2 text-center text-xs font-semibold text-slate-500">Progress is saved on this device only.</p>
      </section>
    </>
  );
}

import { useEffect, useRef } from 'react';
import { Lock, Check, Star, Crown, Swords, Play, FileText } from 'lucide-react';
import { units as businessUnits } from '../data/syllabusData.js';

export const UNIT_COLORS = {
  emerald: '#10b981',
  sky: '#0ea5e9',
  rose: '#f43f5e',
  amber: '#f59e0b',
  violet: '#8b5cf6',
  teal: '#14b8a6',
  indigo: '#6366f1',
};

export function ProgressRing({ value, color, size = 64, stroke = 7, children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
          style={{ transition: 'stroke-dashoffset .6s ease' }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-sm font-black">{children}</div>
    </div>
  );
}

const Stars = ({ n, size = 'h-4 w-4' }) => (
  <span className="inline-flex" aria-label={`${n} of 3 stars`}>
    {[1, 2, 3].map((i) => (
      <Star key={i} className={`${size} ${i <= n ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} aria-hidden />
    ))}
  </span>
);

export default function UnitDashboard({ state, unitStats, isSubUnlocked, activeUnitId, onSelectUnit, onStartSub, onStartBoss, onStartExam, onStartPaper, units = businessUnits, heading = 'IGCSE Business 0264', gradient = 'from-brand to-emerald-500' }) {
  const unit = units.find((u) => u.id === activeUnitId) || units[0];
  const pathRef = useRef(null);
  const lastUnit = useRef(activeUnitId);

  useEffect(() => {
    // only scroll when the user actually switches unit (robust to StrictMode double effects)
    if (lastUnit.current === activeUnitId) return;
    lastUnit.current = activeUnitId;
    pathRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [activeUnitId]);

  const totalSubs = units.reduce((n, u) => n + u.submodules.length, 0);
  const doneSubs = units.reduce((n, u) => n + unitStats[u.id].subsDone, 0);
  const overall = Math.round(
    (units.reduce((n, u) => n + u.submodules.reduce((m, s) => m + (state.subs[s.id]?.stars || 0), 0), 0) / (totalSubs * 3)) * 100,
  );

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-6">
      <section className={`mb-6 rounded-3xl bg-gradient-to-br ${gradient} p-6 text-white`}>
        <h1 className="text-3xl font-black">{heading}</h1>
        <p className="mt-1 font-bold text-white/90">
          {doneSubs}/{totalSubs} lessons done · {overall}% overall mastery · Active recall beats re-reading.
        </p>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/30" role="progressbar" aria-valuenow={overall} aria-valuemin={0} aria-valuemax={100} aria-label="Overall mastery">
          <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${overall}%` }} />
        </div>
      </section>

      <h2 className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-400">Choose a unit</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {units.map((u) => {
          const st = unitStats[u.id];
          const active = u.id === unit.id;
          return (
            <button
              key={u.id}
              type="button"
              onClick={() => onSelectUnit(u.id)}
              aria-pressed={active}
              className={`card flex flex-col items-center gap-2 p-4 text-center transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300 ${
                active ? 'ring-4 ring-offset-2' : ''
              }`}
              style={active ? { borderColor: UNIT_COLORS[u.color], '--tw-ring-color': UNIT_COLORS[u.color] + '55' } : undefined}
            >
              <ProgressRing value={st.mastery} color={UNIT_COLORS[u.color]} size={72}>
                <span className="text-2xl">{u.emoji}</span>
              </ProgressRing>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Unit {u.number}</span>
              <span className="text-sm font-black leading-tight">{u.title}</span>
              <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                {st.mastery}% · {st.subsDone}/{st.total}
                {st.crown > 0 && <Crown className="h-4 w-4 fill-amber-400 text-amber-500" aria-label="Boss defeated" />}
              </span>
            </button>
          );
        })}
      </div>

      <section ref={pathRef} className="mt-10 scroll-mt-24" aria-label={`Unit ${unit.number} skill path`}>
        <div className="mb-6 flex items-center gap-3">
          <span className="text-4xl" aria-hidden>{unit.emoji}</span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: UNIT_COLORS[unit.color] }}>Unit {unit.number}</p>
            <h2 className="text-2xl font-black">{unit.title}</h2>
          </div>
        </div>

        <ol className="relative mx-auto flex max-w-md flex-col gap-6">
          {unit.submodules.map((sub, i) => {
            const rec = state.subs[sub.id];
            const unlocked = isSubUnlocked(unit, i);
            const offset = [0, 40, 0, -40][i % 4];
            const color = UNIT_COLORS[unit.color];
            return (
              <li key={sub.id} className="flex items-center gap-4" style={{ transform: `translateX(${offset}px)` }}>
                <button
                  type="button"
                  disabled={!unlocked}
                  onClick={() => onStartSub(unit, sub)}
                  aria-label={`${sub.title}${rec?.done ? `, completed with ${rec.stars} stars` : unlocked ? ', start' : ', locked'}`}
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-b-8 text-white transition active:translate-y-1 active:border-b-4 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                  style={{
                    background: unlocked ? color : '#cbd5e1',
                    borderColor: unlocked ? color + 'aa' : '#94a3b8',
                    filter: unlocked ? undefined : 'saturate(0.6)',
                  }}
                >
                  {!unlocked ? <Lock className="h-8 w-8" /> : rec?.done ? <Check className="h-10 w-10" strokeWidth={4} /> : <Play className="h-9 w-9 fill-white" />}
                </button>
                <div className="min-w-0">
                  <p className="font-black leading-tight">{sub.title}</p>
                  <p className="text-xs font-bold text-slate-400">
                    Syllabus {sub.syllabus} · {sub.cards.length} bytes ·{' '}
                    {sub.challenges.length + sub.cards.reduce((n, c) => n + c.tests.length, 0) === 0
                      ? 'notes only, no questions'
                      : `${sub.cards.reduce((n, c) => n + c.tests.length, 0) + Math.min(6, sub.challenges.length)} questions`}
                  </p>
                  {rec?.done && <Stars n={rec.stars} />}
                </div>
              </li>
            );
          })}
          {unit.submodules.some((s) => s.challenges.length || s.cards.some((c) => c.tests.length)) && (
          <li
            className="flex items-center gap-4"
            style={{ transform: `translateX(${[0, 40, 0, -40][unit.submodules.length % 4]}px)` }}
          >
            {(() => {
              const open = state.openAll || unitStats[unit.id].allDone;
              return (
                <>
                  <button
                    type="button"
                    disabled={!open}
                    onClick={() => onStartBoss(unit)}
                    aria-label={`Unit ${unit.number} mega quiz${open ? '' : ', locked until every lesson is complete'}`}
                    className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-b-8 text-white transition active:translate-y-1 active:border-b-4 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                    style={{ background: open ? '#e11d48' : '#cbd5e1', borderColor: open ? '#9f1239' : '#94a3b8' }}
                  >
                    {open ? <Swords className="h-9 w-9" /> : <Lock className="h-8 w-8" />}
                  </button>
                  <div>
                    <p className="font-black">Unit {unit.number} Mega Quiz</p>
                    <p className="text-xs font-bold text-slate-400">{unit.submodules.length * 5} questions · 5 from every lesson</p>
                    {unitStats[unit.id].crown > 0 && <Stars n={unitStats[unit.id].crown} />}
                  </div>
                </>
              );
            })()}
          </li>
          )}
          {(unit.papers || []).map((paper, pi) => {
            const best = state.exams?.[paper.id];
            const offset = [0, 40, 0, -40][(unit.submodules.length + 1 + pi) % 4];
            return (
              <li key={paper.id} className="flex items-center gap-4" style={{ transform: `translateX(${offset}px)` }}>
                <button
                  type="button"
                  onClick={() => onStartPaper(unit, paper)}
                  aria-label={`${paper.title}, past paper questions`}
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-b-8 text-white transition active:translate-y-1 active:border-b-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                  style={{ background: '#7c3aed', borderColor: '#5b21b6' }}
                >
                  <FileText className="h-9 w-9" />
                </button>
                <div>
                  <p className="font-black">{paper.kind === 'written' ? 'Written exam questions' : 'Past paper practice'}</p>
                  <p className="text-xs font-bold text-slate-400">{paper.title} · {paper.round ? `${paper.round} random of ${paper.ids.length}` : paper.ids.length} {paper.kind === 'written' ? 'written questions, self-marked' : 'exam questions with diagrams'}</p>
                  {best > 0 && <p className="text-xs font-extrabold text-violet-600">Best: {best}%</p>}
                </div>
              </li>
            );
          })}
          {(unit.exams || []).map((exam, ei) => {
            const open = state.openAll || unitStats[unit.id].allDone;
            const best = state.exams?.[exam.id];
            const offset = [0, 40, 0, -40][(unit.submodules.length + 1 + ei) % 4];
            const marks = exam.questions.reduce((n, q) => n + q.parts.reduce((m, p) => m + p.marks, 0), 0);
            return (
              <li key={exam.id} className="flex items-center gap-4" style={{ transform: `translateX(${offset}px)` }}>
                <button
                  type="button"
                  disabled={!open}
                  onClick={() => onStartExam(unit, exam)}
                  aria-label={`${exam.title}${open ? '' : ', locked until every lesson is complete'}`}
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-b-8 text-white transition active:translate-y-1 active:border-b-4 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                  style={{ background: open ? '#7c3aed' : '#cbd5e1', borderColor: open ? '#5b21b6' : '#94a3b8' }}
                >
                  {open ? <FileText className="h-9 w-9" /> : <Lock className="h-8 w-8" />}
                </button>
                <div>
                  <p className="font-black">{exam.paper === 1 ? 'Paper 1 practice' : 'Paper 2 case study'}</p>
                  <p className="text-xs font-bold text-slate-400">{exam.title} · {marks} marks · written, self-marked</p>
                  {best > 0 && <p className="text-xs font-extrabold text-violet-600">Best: {best}%</p>}
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}

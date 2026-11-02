import { ChevronLeft, Flame, Star, Zap, BookCheck, TriangleAlert } from 'lucide-react';
import { getClassroom, studentDetail, shortName, SUBJECT_BY_ID } from '../lib/classes.js';
import { summarise, supportFlags, weeklyTrend, WEAK, STRONG } from '../lib/insights.js';
import { dayKey } from '../lib/srs.js';
import { useAsync, useRealtime } from '../lib/useAsync.js';
import { Spinner, ErrorNote, Empty, fmtDate } from '../components/ui.jsx';
import { pctText } from './data.js';

const Tile = ({ icon: Icon, label, value }) => (
  <div className="card p-3">
    <p className="flex items-center gap-1.5 text-xs font-bold text-slate-500"><Icon className="h-3.5 w-3.5" aria-hidden /> {label}</p>
    <p className="mt-1 font-display text-xl font-black leading-tight">{value}</p>
  </div>
);

const Bar = ({ pct, tone }) => (
  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200" role="img" aria-label={`${pct}%`}>
    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: tone }} />
  </div>
);

const tone = (p) => (p >= STRONG ? '#16a34a' : p < WEAK ? '#dc2626' : '#d97706');

export default function StudentProfile({ classroomId, studentId }) {
  const room = useAsync(() => getClassroom(classroomId), [classroomId]);
  const subjectId = room.data?.subject_id;
  const detail = useAsync(() => (subjectId ? studentDetail(studentId, subjectId) : Promise.resolve(null)), [studentId, subjectId]);
  useRealtime('progress', `user_id=eq.${studentId}`, detail.reload);

  const back = <a href={`#/teacher/class/${classroomId}`} className="mb-3 inline-flex items-center gap-1 text-sm font-extrabold text-brand-dark"><ChevronLeft className="h-4 w-4" aria-hidden /> Back to class</a>;
  if ((room.loading && !room.data) || (subjectId && detail.loading && !detail.data)) return <>{back}<Spinner /></>;
  if (room.error || detail.error) return <>{back}<ErrorNote onRetry={() => { room.reload(); detail.reload(); }}>{room.error || detail.error}</ErrorNote></>;
  if (!room.data || !detail.data || !detail.data.profile) return <>{back}<Empty title="Student not found">They may have left this classroom, or you may not teach them.</Empty></>;

  const subject = SUBJECT_BY_ID[subjectId];
  const { progress, attempts, profile } = detail.data;
  const today = dayKey();
  const s = summarise(progress?.data || null, subject.total);
  const flags = supportFlags(s, today);
  const trend = weeklyTrend(attempts, today, 4);
  const recentDays = Object.entries(attempts.reduce((m, a) => { const d = String(a.created_at).slice(0, 10); (m[d] ||= { n: 0, r: 0 }).n += 1; m[d].r += a.correct ? 1 : 0; return m; }, {})).slice(0, 7);

  return (
    <div className="space-y-5">
      {back}
      <div>
        <h1 className="font-display text-2xl font-black">{shortName(profile, studentId)}</h1>
        <p className="text-sm font-semibold text-slate-500">{room.data.name} · {subject.title}{progress?.updated_at ? ` · progress saved ${fmtDate(progress.updated_at)}` : ''}</p>
      </div>

      {!s.started && <Empty title="Not enough data yet">This student has not started {subject.title} while signed in. Their progress will appear here as they study.</Empty>}

      {s.started && (
        <>
          {flags.length > 0 && (
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-3 text-amber-900">
              <p className="flex items-center gap-2 font-extrabold"><TriangleAlert className="h-4 w-4" aria-hidden /> Worth a conversation</p>
              <ul className="mt-1 list-disc pl-5 text-sm font-semibold">{flags.map((f) => <li key={f}>{f}</li>)}</ul>
              <p className="mt-1 text-xs font-semibold">Based on recorded activity only. It cannot see work done offline.</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Tile icon={BookCheck} label="Lessons done" value={`${s.done} of ${s.total}`} />
            <Tile icon={Star} label="Stars" value={s.stars} />
            <Tile icon={Zap} label="XP" value={s.xp} />
            <Tile icon={Flame} label="Day streak" value={s.streak} />
          </div>
          <div className="card space-y-1 p-4">
            <div className="flex justify-between text-sm font-extrabold"><span>Subject progress</span><span>{s.pctDone}%</span></div>
            <Bar pct={s.pctDone} tone="var(--brand)" />
            <p className="pt-1 text-sm font-semibold text-slate-500">First-try accuracy: <b className="text-slate-900">{pctText(s.accuracy)}</b>{s.accuracy !== null && ` over ${s.answers} answers`} · Mistake bank: <b className="text-slate-900">{s.mistakes}</b> · Reviews due: <b className="text-slate-900">{s.due}</b> · Last active: <b className="text-slate-900">{s.lastDay ? fmtDate(s.lastDay) : '—'}</b></p>
          </div>

          <section aria-label="Accuracy trend">
            <h2 className="mb-2 font-display text-lg font-black">Accuracy trend (last 4 weeks)</h2>
            <div className="card grid grid-cols-4 gap-2 p-4">
              {trend.map((w) => (
                <div key={w.to} className="text-center">
                  <p className="font-display text-xl font-black">{w.pct === null ? '—' : `${w.pct}%`}</p>
                  <p className="text-xs font-bold text-slate-500">{w.pct === null ? (w.n ? `${w.n} answers (too few)` : 'No answers') : `${w.n} answers`}</p>
                  <p className="text-[11px] font-semibold text-slate-500">to {fmtDate(w.to)}</p>
                </div>
              ))}
            </div>
            <p className="mt-1 text-xs font-semibold text-slate-500">Trends use answers logged since the student signed in. A week needs at least 5 answers to show a percentage.</p>
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <section aria-label="Weaker lessons">
              <h2 className="mb-2 font-display text-lg font-black">Weaker lessons</h2>
              {s.lessons.weak.length ? <ul className="card divide-y divide-slate-100">{s.lessons.weak.map((l) => <li key={l.id} className="p-3"><p className="flex justify-between gap-2 text-sm font-extrabold"><span>{l.title}</span><span>{l.pct}%</span></p><Bar pct={l.pct} tone={tone(l.pct)} /><p className="mt-1 text-xs font-semibold text-slate-500">{l.r} right, {l.w} wrong first try</p></li>)}</ul> : <Empty title="No weaker lessons found">{s.lessons.rows.length ? `Every lesson with at least 3 answers is at ${WEAK}% or better.` : 'Not enough data yet.'}</Empty>}
            </section>
            <section aria-label="Stronger lessons">
              <h2 className="mb-2 font-display text-lg font-black">Stronger lessons</h2>
              {s.lessons.strong.length ? <ul className="card divide-y divide-slate-100">{s.lessons.strong.map((l) => <li key={l.id} className="flex justify-between gap-2 p-3 text-sm font-extrabold"><span>{l.title}</span><span className="text-emerald-700">{l.pct}%</span></li>)}</ul> : <Empty title="Not enough data yet">A lesson shows here at {STRONG}% or better with at least 3 answers.</Empty>}
            </section>
          </div>

          <section aria-label="All lessons attempted">
            <h2 className="mb-2 font-display text-lg font-black">Lesson-by-lesson accuracy</h2>
            {s.lessons.rows.length ? (
              <div className="card overflow-x-auto"><table className="w-full min-w-[26rem] text-left text-sm"><thead><tr className="border-b-2 border-slate-200 text-xs font-extrabold uppercase tracking-wide text-slate-500"><th className="p-3">Lesson</th><th className="p-3">Right</th><th className="p-3">Wrong</th><th className="p-3">First-try</th></tr></thead>
                <tbody>{[...s.lessons.rows].sort((a, b) => a.title.localeCompare(b.title)).map((l) => <tr key={l.id} className="border-b border-slate-100 last:border-0"><td className="p-3 font-extrabold">{l.title}</td><td className="p-3 font-bold">{l.r}</td><td className="p-3 font-bold">{l.w}</td><td className="p-3 font-bold" style={{ color: tone(l.pct) }}>{l.pct}%</td></tr>)}</tbody></table></div>
            ) : <Empty title="Not enough data yet">Lessons appear after at least 3 answers each.</Empty>}
          </section>

          <section aria-label="Recent activity">
            <h2 className="mb-2 font-display text-lg font-black">Recent activity</h2>
            {recentDays.length ? <ul className="card divide-y divide-slate-100">{recentDays.map(([d, v]) => <li key={d} className="flex justify-between gap-2 p-3 text-sm font-bold"><span>{fmtDate(d)}</span><span className="text-slate-500">{v.n} answers · {Math.round((v.r / v.n) * 100)}% right first try</span></li>)}</ul> : <Empty title="No recent answers logged">Answer-by-answer activity is recorded from the day the student signs in.</Empty>}
          </section>
        </>
      )}
    </div>
  );
}

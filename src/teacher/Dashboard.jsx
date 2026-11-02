import { School, Users, Megaphone, UserPlus, HeartHandshake, Activity } from 'lucide-react';
import { listClassrooms, listAllEnrolments, listStudentProgress, recentAnnouncements, shortName, SUBJECT_BY_ID } from '../lib/classes.js';
import { supportFlags, MIN_ATTEMPTS } from '../lib/insights.js';
import { dayKey } from '../lib/srs.js';
import { getStatus } from '../lib/cloud.js';
import { useAsync, useRealtime } from '../lib/useAsync.js';
import { Spinner, ErrorNote, Empty, fmtDate } from '../components/ui.jsx';
import { summaryFor, pctText } from './data.js';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="card flex items-center gap-3 p-4">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-dark"><Icon className="h-5 w-5" aria-hidden /></span>
    <div><p className="font-display text-2xl font-black leading-none">{value}</p><p className="mt-1 text-xs font-bold text-slate-500">{label}</p></div>
  </div>
);

export default function Dashboard() {
  const rooms = useAsync(listClassrooms, []);
  const enr = useAsync(listAllEnrolments, []);
  const prog = useAsync(listStudentProgress, []);
  const ann = useAsync(() => recentAnnouncements(5), []);
  useRealtime('classroom_students', null, () => { enr.reload(); prog.reload(); });
  useRealtime('progress', null, prog.reload);
  useRealtime('announcements', null, ann.reload);

  const loading = (rooms.loading && !rooms.data) || (enr.loading && !enr.data);
  const error = rooms.error || enr.error;
  const active = (rooms.data || []).filter((r) => !r.archived);
  const activeIds = new Set(active.map((r) => r.id));
  const live = (enr.data || []).filter((e) => activeIds.has(e.classroom_id));
  const students = new Set(live.map((e) => e.student_id)).size;
  const roomById = Object.fromEntries((rooms.data || []).map((r) => [r.id, r]));
  const today = dayKey();
  const name = getStatus().profile?.full_name;

  // support indicators and per-classroom overview, from real saved progress only
  const flagged = [];
  const overview = active.map((r) => {
    const members = live.filter((e) => e.classroom_id === r.id);
    const sums = members.map((m) => summaryFor(prog.data, m.student_id, r));
    members.forEach((m, i) => {
      const reasons = supportFlags(sums[i], today);
      if (reasons.length) flagged.push({ student: m, room: r, reasons });
    });
    const withAcc = sums.filter((s) => s.accuracy !== null);
    return {
      room: r,
      students: members.length,
      started: sums.filter((s) => s.started).length,
      avgDone: members.length ? Math.round(sums.reduce((n, s) => n + s.pctDone, 0) / members.length) : null,
      avgAcc: withAcc.length ? Math.round(withAcc.reduce((n, s) => n + s.accuracy, 0) / withAcc.length) : null,
    };
  });

  return (
    <div className="space-y-5">
      <h1 className="font-display text-2xl font-black">{name ? `Welcome, ${name}` : 'Dashboard'}</h1>
      <ErrorNote onRetry={() => { rooms.reload(); enr.reload(); }}>{error}</ErrorNote>
      {loading ? <Spinner /> : (
        <>
          <div className="grid gap-3 sm:grid-cols-3">
            <Stat icon={School} label="Active classrooms" value={active.length} />
            <Stat icon={Users} label="Students" value={students} />
            <Stat icon={HeartHandshake} label="Students to check in with" value={prog.data ? flagged.length : '…'} />
          </div>

          {!active.length && <Empty icon={School} title="Create your first classroom">Go to <a href="#/teacher/classes" className="font-extrabold underline">Classes</a>, create one, and share the join code with your students.</Empty>}

          {overview.length > 0 && (
            <section aria-label="Classroom overview">
              <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-black"><Activity className="h-5 w-5" aria-hidden /> Classroom overview</h2>
              <div className="card overflow-x-auto">
                <table className="w-full min-w-[34rem] text-left text-sm">
                  <thead><tr className="border-b-2 border-slate-200 text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    <th className="p-3">Classroom</th><th className="p-3">Students</th><th className="p-3">Started</th><th className="p-3">Avg lessons done</th><th className="p-3">Avg first-try accuracy</th>
                  </tr></thead>
                  <tbody>
                    {overview.map((o) => (
                      <tr key={o.room.id} className="border-b border-slate-100 last:border-0">
                        <td className="p-3 font-extrabold"><a href={`#/teacher/class/${o.room.id}`} className="underline-offset-2 hover:underline">{o.room.name}</a><span className="block text-xs font-semibold text-slate-500">{SUBJECT_BY_ID[o.room.subject_id]?.title}</span></td>
                        <td className="p-3 font-bold">{o.students}</td>
                        <td className="p-3 font-bold">{prog.data ? `${o.started} of ${o.students}` : '…'}</td>
                        <td className="p-3 font-bold">{o.avgDone === null ? 'No students yet' : `${o.avgDone}%`}</td>
                        <td className="p-3 font-bold">{prog.data ? pctText(o.avgAcc) : '…'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-500">Accuracy appears once a student has at least {MIN_ATTEMPTS} first-try answers. It counts only students who have signed in and studied online.</p>
            </section>
          )}

          {flagged.length > 0 && (
            <section aria-label="Students who may need support">
              <h2 className="mb-1 flex items-center gap-2 font-display text-lg font-black"><HeartHandshake className="h-5 w-5" aria-hidden /> Students who may need support</h2>
              <p className="mb-2 text-sm font-semibold text-slate-500">These are prompts for a conversation based on recorded activity, not judgements about a student.</p>
              <ul className="space-y-2">
                {flagged.map(({ student, room, reasons }) => (
                  <li key={`${room.id}:${student.student_id}`} className="card p-3">
                    <a href={`#/teacher/class/${room.id}/student/${student.student_id}`} className="font-extrabold underline-offset-2 hover:underline">{shortName(student.profiles, student.student_id)}</a>
                    <span className="text-sm font-semibold text-slate-500"> · {room.name}</span>
                    <ul className="mt-1 list-disc pl-5 text-sm font-semibold">{reasons.map((x) => <li key={x}>{x}</li>)}</ul>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <section aria-label="Recent joins">
              <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-black"><UserPlus className="h-5 w-5" aria-hidden /> Recently joined</h2>
              {live.length ? (
                <ul className="card divide-y divide-slate-100">
                  {live.slice(0, 6).map((e) => (
                    <li key={`${e.classroom_id}:${e.student_id}`} className="flex items-center justify-between gap-2 p-3 text-sm">
                      <span className="min-w-0 truncate font-extrabold">{shortName(e.profiles, e.student_id)}<span className="font-semibold text-slate-500"> · {roomById[e.classroom_id]?.name}</span></span>
                      <span className="shrink-0 text-xs font-bold text-slate-500">{fmtDate(e.joined_at)}</span>
                    </li>
                  ))}
                </ul>
              ) : <Empty title="No students yet">Students appear here when they join with your class code.</Empty>}
            </section>
            <section aria-label="Recent announcements">
              <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-black"><Megaphone className="h-5 w-5" aria-hidden /> Recent announcements</h2>
              <ErrorNote>{ann.error}</ErrorNote>
              {ann.data?.length ? (
                <ul className="card divide-y divide-slate-100">
                  {ann.data.map((a) => (
                    <li key={a.id} className="flex items-center justify-between gap-2 p-3 text-sm">
                      <a href={`#/teacher/class/${a.classroom_id}`} className="min-w-0 truncate font-extrabold hover:underline">{a.title}<span className="font-semibold text-slate-500"> · {a.classrooms?.name}</span></a>
                      <span className="shrink-0 text-xs font-bold text-slate-500">{fmtDate(a.created_at)}</span>
                    </li>
                  ))}
                </ul>
              ) : <Empty title="No announcements yet">Post one from a classroom's Announcements tab.</Empty>}
            </section>
          </div>
        </>
      )}
    </div>
  );
}

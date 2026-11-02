import { useState } from 'react';
import { School, Megaphone, ChevronLeft, LogIn, Mail } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { getStatus, subscribe } from '../lib/cloud.js';
import { listClassrooms, joinClassroom, myInvites, acceptInvite, listAnnouncements, leaveClassroom, classroomTeacherNames, SUBJECT_BY_ID } from '../lib/classes.js';
import { useAsync, useRealtime } from '../lib/useAsync.js';
import { Spinner, ErrorNote, Empty, fmtDateTime } from '../components/ui.jsx';
import { SubjectBadge } from '../hub/parts.jsx';

function JoinForm({ onJoined }) {
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      await joinClassroom(code);
      setCode('');
      onJoined();
    } catch (x) {
      setErr(x.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <form onSubmit={submit} className="card space-y-2 p-4">
      <label htmlFor="join-code" className="font-extrabold">Join a class</label>
      <p className="text-sm font-semibold text-slate-500">Enter the code your teacher gave you.</p>
      <div className="flex gap-2">
        <input id="join-code" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} maxLength={7} autoComplete="off" placeholder="e.g. 3F9A2C1" className="min-w-0 flex-1 rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 font-mono text-lg font-bold uppercase tracking-widest outline-none focus:border-brand" />
        <button type="submit" disabled={busy || code.trim().length < 4} className="btn btn-green !px-4"><LogIn className="h-4 w-4" aria-hidden /> Join</button>
      </div>
      <ErrorNote>{err}</ErrorNote>
    </form>
  );
}

function ClassDetail({ room, onBack, onLeft }) {
  const ann = useAsync(() => listAnnouncements(room.id), [room.id]);
  const teachers = useAsync(() => classroomTeacherNames(room.id), [room.id]);
  useRealtime('announcements', `classroom_id=eq.${room.id}`, ann.reload);
  const [err, setErr] = useState('');
  const subject = SUBJECT_BY_ID[room.subject_id];
  const leave = async () => {
    if (!window.confirm(`Leave ${room.name}? You can rejoin with the code.`)) return;
    try {
      await leaveClassroom(room.id);
      onLeft();
    } catch (x) {
      setErr(x.message);
    }
  };
  return (
    <div>
      <button type="button" onClick={onBack} className="mb-3 flex items-center gap-1 text-sm font-extrabold text-brand-dark"><ChevronLeft className="h-4 w-4" aria-hidden /> All classes</button>
      <div className="card flex items-center gap-3 p-4">
        {subject && <SubjectBadge subject={subject} size={48} />}
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-xl font-black leading-tight">{room.name}</h2>
          <p className="text-sm font-semibold text-slate-500">{subject?.title} · {[room.grade && `Grade ${room.grade}`, room.section && `Section ${room.section}`, room.academic_year].filter(Boolean).join(' · ')}</p>
          <p className="text-sm font-semibold text-slate-500">Teacher: {teachers.data ? teachers.data.join(', ') : '…'}</p>
        </div>
      </div>
      {subject && <a href={subject.hash} className="btn btn-green mt-3 w-full">Study {subject.title}</a>}
      <h3 className="mt-5 flex items-center gap-2 font-display text-lg font-black"><Megaphone className="h-5 w-5" aria-hidden /> Announcements</h3>
      <ErrorNote onRetry={ann.reload}>{ann.error}</ErrorNote>
      {ann.loading && !ann.data ? <Spinner /> : ann.data?.length ? (
        <ul className="mt-2 space-y-2">
          {ann.data.map((a) => (
            <li key={a.id} className="card p-3">
              <p className="font-extrabold">{a.title}</p>
              <p className="mt-1 whitespace-pre-wrap text-sm font-semibold">{a.body}</p>
              <p className="mt-2 text-xs font-bold text-slate-500">{a.profiles?.full_name || 'Teacher'} · {fmtDateTime(a.created_at)}</p>
            </li>
          ))}
        </ul>
      ) : <div className="mt-2"><Empty icon={Megaphone} title="No announcements yet">Your teacher's messages will appear here.</Empty></div>}
      <ErrorNote>{err}</ErrorNote>
      <button type="button" onClick={leave} className="mt-6 text-sm font-bold text-rose-700 underline">Leave this class</button>
    </div>
  );
}

/** Student view of classrooms: join, list, open one to read announcements. */
export default function ClassesTab({ classId }) {
  const st = useSyncExternalStore(subscribe, getStatus);
  const rooms = useAsync(listClassrooms, [st.user?.id]);
  const invites = useAsync(myInvites, [st.user?.id]);
  useRealtime('classroom_students', null, rooms.reload);
  const [err, setErr] = useState('');

  if (!st.user) {
    return <div className="mt-4"><Empty icon={School} title="Sign in to join a class">Use the account button at the top of the home screen. Your teacher will give you a class code.</Empty></div>;
  }
  if (st.profile && st.profile.role !== 'student') {
    return <div className="mt-4"><Empty icon={School} title="This is a teacher account">Open the <a href="#/teacher" className="font-extrabold underline">teacher portal</a> to manage your classes.</Empty></div>;
  }
  const refresh = () => { rooms.reload(); invites.reload(); };
  const open = classId && rooms.data?.find((r) => r.id === classId);
  if (open) return <div className="mt-4"><ClassDetail room={open} onBack={() => { window.location.hash = '#/classes'; }} onLeft={() => { window.location.hash = '#/classes'; refresh(); }} /></div>;

  const accept = async (id) => {
    setErr('');
    try {
      await acceptInvite(id);
      refresh();
    } catch (x) {
      setErr(x.message);
    }
  };
  return (
    <div className="mt-4 space-y-4">
      <JoinForm onJoined={refresh} />
      <ErrorNote>{err}</ErrorNote>
      {invites.data?.length > 0 && (
        <section aria-label="Invitations" className="space-y-2">
          <h2 className="flex items-center gap-2 font-display text-lg font-black"><Mail className="h-5 w-5" aria-hidden /> Invitations</h2>
          {invites.data.map((i) => (
            <div key={i.id} className="card flex items-center gap-3 p-3">
              <p className="min-w-0 flex-1 font-extrabold">{i.classrooms?.name || 'A class'}<span className="block text-sm font-semibold text-slate-500">{SUBJECT_BY_ID[i.classrooms?.subject_id]?.title}</span></p>
              <button type="button" onClick={() => accept(i.id)} className="btn btn-green !px-3 !py-1.5 text-xs">Accept</button>
            </div>
          ))}
        </section>
      )}
      <section aria-label="My classes">
        <h2 className="font-display text-lg font-black">My classes</h2>
        <ErrorNote onRetry={rooms.reload}>{rooms.error}</ErrorNote>
        {rooms.loading && !rooms.data ? <Spinner /> : rooms.data?.length ? (
          <ul className="mt-2 space-y-2">
            {rooms.data.filter((r) => !r.archived).map((r) => {
              const s = SUBJECT_BY_ID[r.subject_id];
              return (
                <li key={r.id}>
                  <a href={`#/classes/${r.id}`} className="card flex items-center gap-3 p-3 transition hover:bg-brand-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                    {s && <SubjectBadge subject={s} />}
                    <span className="min-w-0 flex-1 font-extrabold leading-tight">{r.name}<span className="block text-sm font-semibold text-slate-500">{s?.title} · {r.academic_year}</span></span>
                  </a>
                </li>
              );
            })}
          </ul>
        ) : <div className="mt-2"><Empty icon={School} title="You are not in a class yet">Enter a class code above, or accept an invitation from your teacher.</Empty></div>}
      </section>
    </div>
  );
}

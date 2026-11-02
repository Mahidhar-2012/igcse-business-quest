import { useState } from 'react';
import { ChevronLeft, Copy, Check, UserMinus, Megaphone, Trash2, Mail, TriangleAlert } from 'lucide-react';
import {
  getClassroom, listClassrooms, listRoster, listInvites, inviteStudent, cancelInvite, removeStudent, listStudentProgress, listAnnouncements,
  postAnnouncement, deleteAnnouncement, updateClassroom, shareClassroom, classroomTeachers, shortName, SUBJECT_BY_ID,
} from '../lib/classes.js';
import { supportFlags } from '../lib/insights.js';
import { dayKey } from '../lib/srs.js';
import { useAsync, useRealtime } from '../lib/useAsync.js';
import { Spinner, ErrorNote, Empty, TextField, fmtDate, fmtDateTime } from '../components/ui.jsx';
import { SubjectBadge } from '../hub/parts.jsx';
import { summaryFor, pctText } from './data.js';

function JoinCode({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* clipboard blocked: the code is still shown */ }
  };
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-xl bg-slate-100 px-3 py-1.5 font-mono text-lg font-black tracking-widest" aria-label={`Join code ${code.split('').join(' ')}`}>{code}</span>
      <button type="button" onClick={copy} className="icon-btn !h-9 !w-9" aria-label="Copy join code">{copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}</button>
    </div>
  );
}

function Students({ room }) {
  const roster = useAsync(() => listRoster(room.id), [room.id]);
  const prog = useAsync(listStudentProgress, []);
  const invites = useAsync(() => listInvites(room.id), [room.id]);
  useRealtime('classroom_students', `classroom_id=eq.${room.id}`, () => { roster.reload(); prog.reload(); });
  useRealtime('progress', null, prog.reload);
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');
  const today = dayKey();

  const invite = async (e) => {
    e.preventDefault();
    setErr('');
    setNote('');
    try {
      await inviteStudent(room.id, email);
      setNote(`Invitation saved for ${email.trim().toLowerCase()}. They will see it in their Classes tab when they sign in with that email.`);
      setEmail('');
      invites.reload();
    } catch (x) {
      setErr(/duplicate/i.test(x.message) ? 'That email is already invited.' : x.message);
    }
  };
  const remove = async (s) => {
    if (!window.confirm(`Remove ${shortName(s.profiles, s.student_id)} from ${room.name}? Their own progress is not deleted.`)) return;
    try {
      await removeStudent(room.id, s.student_id);
      roster.reload();
    } catch (x) {
      setErr(x.message);
    }
  };

  return (
    <div className="space-y-4">
      <ErrorNote onRetry={roster.reload}>{roster.error}</ErrorNote>
      {roster.loading && !roster.data ? <Spinner /> : roster.data?.length ? (
        <div className="card overflow-x-auto">
          <table className="w-full min-w-[38rem] text-left text-sm">
            <thead><tr className="border-b-2 border-slate-200 text-xs font-extrabold uppercase tracking-wide text-slate-500">
              <th className="p-3">Student</th><th className="p-3">Lessons done</th><th className="p-3">First-try accuracy</th><th className="p-3">Last active</th><th className="p-3"><span className="sr-only">Actions</span></th>
            </tr></thead>
            <tbody>
              {roster.data.map((s) => {
                const sum = summaryFor(prog.data, s.student_id, room);
                const flags = supportFlags(sum, today);
                return (
                  <tr key={s.student_id} className="border-b border-slate-100 last:border-0">
                    <td className="p-3 font-extrabold">
                      <a href={`#/teacher/class/${room.id}/student/${s.student_id}`} className="underline-offset-2 hover:underline">{shortName(s.profiles, s.student_id)}</a>
                      {flags.length > 0 && <span title={flags.join('; ')} className="ml-2 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-extrabold text-amber-800"><TriangleAlert className="h-3 w-3" aria-hidden /> check in</span>}
                      <span className="block text-xs font-semibold text-slate-500">Joined {fmtDate(s.joined_at)}</span>
                    </td>
                    <td className="p-3 font-bold">{prog.data ? (sum.started ? `${sum.done} of ${sum.total}` : 'Not started') : '…'}</td>
                    <td className="p-3 font-bold">{prog.data ? pctText(sum.accuracy) : '…'}</td>
                    <td className="p-3 font-bold">{prog.data ? (sum.lastDay ? fmtDate(sum.lastDay) : '—') : '…'}</td>
                    <td className="p-3 text-right"><button type="button" onClick={() => remove(s)} className="icon-btn !h-9 !w-9 !text-rose-600" aria-label={`Remove ${shortName(s.profiles, s.student_id)}`}><UserMinus className="h-4 w-4" /></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : <Empty title="No students yet">Share the join code, or invite students by email below.</Empty>}

      <form onSubmit={invite} className="card space-y-2 p-4">
        <h3 className="flex items-center gap-2 font-extrabold"><Mail className="h-4 w-4" aria-hidden /> Invite a student by email</h3>
        <div className="flex gap-2">
          <div className="min-w-0 flex-1"><TextField label="Student's email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <button type="submit" className="btn btn-green mt-6 !px-4">Invite</button>
        </div>
        <ErrorNote>{err}</ErrorNote>
        {note && <p role="status" className="text-sm font-bold text-emerald-700">{note}</p>}
        {invites.data?.length > 0 && (
          <ul className="divide-y divide-slate-100 text-sm">
            {invites.data.map((i) => (
              <li key={i.id} className="flex items-center justify-between gap-2 py-2"><span className="min-w-0 truncate font-semibold">{i.email} <span className="text-slate-500">· pending</span></span>
                <button type="button" onClick={async () => { await cancelInvite(i.id); invites.reload(); }} className="text-xs font-bold text-rose-700 underline">Cancel</button></li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

function Announcements({ room }) {
  const list = useAsync(() => listAnnouncements(room.id), [room.id]);
  const others = useAsync(listClassrooms, []);
  useRealtime('announcements', `classroom_id=eq.${room.id}`, list.reload);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [extra, setExtra] = useState(new Set());
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');
  const siblings = (others.data || []).filter((r) => r.id !== room.id && !r.archived);

  const post = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    setNote('');
    try {
      const ids = [room.id, ...extra];
      await postAnnouncement(ids, title, body);
      setTitle('');
      setBody('');
      setExtra(new Set());
      setNote(`Posted to ${ids.length} classroom${ids.length === 1 ? '' : 's'}. Students were notified.`);
      list.reload();
    } catch (x) {
      setErr(x.message);
    } finally {
      setBusy(false);
    }
  };
  const del = async (id) => {
    if (!window.confirm('Delete this announcement?')) return;
    try {
      await deleteAnnouncement(id);
      list.reload();
    } catch (x) {
      setErr(x.message);
    }
  };
  const toggle = (id) => setExtra((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div className="space-y-4">
      <form onSubmit={post} className="card space-y-3 p-4">
        <h3 className="flex items-center gap-2 font-extrabold"><Megaphone className="h-4 w-4" aria-hidden /> New announcement</h3>
        <TextField label="Title" required maxLength={120} value={title} onChange={(e) => setTitle(e.target.value)} />
        <label className="block">
          <span className="text-sm font-bold text-slate-500">Message</span>
          <textarea required maxLength={4000} rows={4} value={body} onChange={(e) => setBody(e.target.value)} className="mt-1 w-full rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 font-semibold outline-none focus:border-brand" />
        </label>
        {siblings.length > 0 && (
          <fieldset>
            <legend className="text-sm font-bold text-slate-500">Also post to</legend>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
              {siblings.map((r) => <label key={r.id} className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" checked={extra.has(r.id)} onChange={() => toggle(r.id)} className="h-4 w-4" /> {r.name}</label>)}
            </div>
          </fieldset>
        )}
        <ErrorNote>{err}</ErrorNote>
        {note && <p role="status" className="text-sm font-bold text-emerald-700">{note}</p>}
        <button type="submit" disabled={busy} className="btn btn-green">{busy ? 'Posting…' : 'Post announcement'}</button>
      </form>
      <ErrorNote onRetry={list.reload}>{list.error}</ErrorNote>
      {list.loading && !list.data ? <Spinner /> : list.data?.length ? (
        <ul className="space-y-2">
          {list.data.map((a) => (
            <li key={a.id} className="card p-3">
              <div className="flex items-start gap-2">
                <p className="min-w-0 flex-1 font-extrabold">{a.title}</p>
                <button type="button" onClick={() => del(a.id)} className="icon-btn !h-8 !w-8 !text-rose-600" aria-label={`Delete announcement ${a.title}`}><Trash2 className="h-4 w-4" /></button>
              </div>
              <p className="mt-1 whitespace-pre-wrap text-sm font-semibold">{a.body}</p>
              <p className="mt-2 text-xs font-bold text-slate-500">{a.profiles?.full_name || 'Teacher'} · {fmtDateTime(a.created_at)}</p>
            </li>
          ))}
        </ul>
      ) : <Empty icon={Megaphone} title="No announcements yet">Post a test date, reminder or study material here.</Empty>}
    </div>
  );
}

function Settings({ room, onChanged }) {
  const teachers = useAsync(() => classroomTeachers(room.id), [room.id]);
  const [f, setF] = useState({ name: room.name, grade: room.grade, section: room.section, academic_year: room.academic_year });
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState({ kind: '', text: '' });
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));
  const say = (kind, text) => setMsg({ kind, text });

  const save = async (e) => {
    e.preventDefault();
    try {
      await updateClassroom(room.id, { name: f.name.trim(), grade: f.grade.trim(), section: f.section.trim(), academic_year: f.academic_year.trim() });
      say('ok', 'Saved.');
      onChanged();
    } catch (x) {
      say('err', x.message);
    }
  };
  const archive = async () => {
    const to = !room.archived;
    if (to && !window.confirm(`Archive ${room.name}? Students lose access to its announcements, and teachers stop seeing student progress here. You can restore it later.`)) return;
    try {
      await updateClassroom(room.id, { archived: to });
      onChanged();
    } catch (x) {
      say('err', x.message);
    }
  };
  const share = async (e) => {
    e.preventDefault();
    try {
      await shareClassroom(room.id, email);
      say('ok', `Shared with ${email.trim()}.`);
      setEmail('');
      teachers.reload();
    } catch (x) {
      say('err', x.message);
    }
  };
  return (
    <div className="space-y-4">
      <form onSubmit={save} className="card space-y-3 p-4">
        <h3 className="font-extrabold">Classroom details</h3>
        <TextField label="Name" required minLength={2} maxLength={80} value={f.name} onChange={set('name')} />
        <div className="grid grid-cols-3 gap-3">
          <TextField label="Class / grade" maxLength={20} value={f.grade} onChange={set('grade')} />
          <TextField label="Section" maxLength={20} value={f.section} onChange={set('section')} />
          <TextField label="Academic year" required maxLength={12} value={f.academic_year} onChange={set('academic_year')} />
        </div>
        <p className="text-sm font-semibold text-slate-500">Subject: {SUBJECT_BY_ID[room.subject_id]?.title} (fixed once created).</p>
        <button type="submit" className="btn btn-green">Save changes</button>
      </form>
      <form onSubmit={share} className="card space-y-2 p-4">
        <h3 className="font-extrabold">Teachers with access</h3>
        <ul className="text-sm font-semibold">{(teachers.data || []).map((t) => <li key={t.teacher_id}>{t.profiles?.full_name || 'Teacher'}</li>)}</ul>
        <div className="flex gap-2">
          <div className="min-w-0 flex-1"><TextField label="Share with a teacher at your school (email)" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <button type="submit" className="btn btn-blue mt-6 !px-4">Share</button>
        </div>
      </form>
      {msg.text && <p role="status" className={`text-sm font-bold ${msg.kind === 'err' ? 'text-rose-700' : 'text-emerald-700'}`}>{msg.text}</p>}
      <button type="button" onClick={archive} className={`btn ${room.archived ? 'btn-green' : 'btn-red'}`}>{room.archived ? 'Restore classroom' : 'Archive classroom'}</button>
    </div>
  );
}

const TABS = [['students', 'Students'], ['announcements', 'Announcements'], ['settings', 'Settings']];

export default function ClassroomView({ classroomId }) {
  const room = useAsync(() => getClassroom(classroomId), [classroomId]);
  const [tab, setTab] = useState('students');
  if (room.loading && !room.data) return <Spinner />;
  if (room.error) return <ErrorNote onRetry={room.reload}>{room.error}</ErrorNote>;
  if (!room.data) return <Empty title="Classroom not found">It may not exist, or it belongs to another teacher.</Empty>;
  const r = room.data;
  const s = SUBJECT_BY_ID[r.subject_id];
  return (
    <div>
      <a href="#/teacher/classes" className="mb-3 inline-flex items-center gap-1 text-sm font-extrabold text-brand-dark"><ChevronLeft className="h-4 w-4" aria-hidden /> All classrooms</a>
      <div className="card mb-4 flex flex-wrap items-center gap-4 p-4">
        {s && <SubjectBadge subject={s} size={52} />}
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-2xl font-black leading-tight">{r.name}{r.archived && <span className="ml-2 rounded-full bg-slate-200 px-2 py-0.5 align-middle text-xs font-extrabold">Archived</span>}</h1>
          <p className="text-sm font-semibold text-slate-500">{s?.title} ({s?.code}) · {[r.grade && `Grade ${r.grade}`, r.section && `Section ${r.section}`, r.academic_year].filter(Boolean).join(' · ')}</p>
        </div>
        <div><p className="mb-1 text-xs font-extrabold uppercase tracking-wide text-slate-500">Student join code</p><JoinCode code={r.join_code} /></div>
      </div>
      <div role="tablist" aria-label="Classroom sections" className="mb-4 flex gap-1 border-b-2 border-slate-200">
        {TABS.map(([id, label]) => (
          <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={`-mb-0.5 border-b-4 px-4 py-2 text-sm font-extrabold ${tab === id ? 'border-brand text-brand-dark' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>{label}</button>
        ))}
      </div>
      {tab === 'students' && <Students room={r} />}
      {tab === 'announcements' && <Announcements room={r} />}
      {tab === 'settings' && <Settings room={r} onChanged={room.reload} />}
    </div>
  );
}

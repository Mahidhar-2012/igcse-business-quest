import { useState } from 'react';
import { Plus, School, Users, Archive } from 'lucide-react';
import { listClassrooms, listAllEnrolments, createClassroom, SUBJECT_BY_ID } from '../lib/classes.js';
import { SUBJECTS_META } from '../subjects.meta.js';
import { useAsync, useRealtime } from '../lib/useAsync.js';
import { Spinner, ErrorNote, Empty, Modal, TextField } from '../components/ui.jsx';
import { SubjectBadge } from '../hub/parts.jsx';
import { academicYear } from './data.js';

function CreateModal({ onClose, onCreated }) {
  const [f, setF] = useState({ name: '', grade: '', section: '', subject: SUBJECTS_META[0].id, year: academicYear() });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      const room = await createClassroom(f);
      onCreated(room);
    } catch (x) {
      setErr(x.message);
      setBusy(false);
    }
  };
  return (
    <Modal title="New classroom" onClose={onClose} wide>
      <form onSubmit={submit} className="space-y-3">
        <TextField label="Classroom name" required minLength={2} maxLength={80} placeholder="e.g. Physics 10A" value={f.name} onChange={set('name')} />
        <div className="grid grid-cols-2 gap-3">
          <TextField label="Class / grade" maxLength={20} placeholder="10" value={f.grade} onChange={set('grade')} />
          <TextField label="Section" maxLength={20} placeholder="A" value={f.section} onChange={set('section')} />
        </div>
        <label className="block">
          <span className="text-sm font-bold text-slate-500">IGCSE subject</span>
          <select value={f.subject} onChange={set('subject')} className="mt-1 w-full rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 font-semibold outline-none focus:border-brand">
            {SUBJECTS_META.map((s) => <option key={s.id} value={s.id}>{s.title} ({s.code})</option>)}
          </select>
        </label>
        <TextField label="Academic year" required maxLength={12} value={f.year} onChange={set('year')} />
        <ErrorNote>{err}</ErrorNote>
        <button type="submit" disabled={busy} className="btn btn-green w-full">{busy ? 'Creating…' : 'Create classroom'}</button>
      </form>
    </Modal>
  );
}

export default function Classrooms() {
  const rooms = useAsync(listClassrooms, []);
  const enr = useAsync(listAllEnrolments, []);
  useRealtime('classroom_students', null, enr.reload);
  const [creating, setCreating] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  const count = (id) => (enr.data || []).filter((e) => e.classroom_id === id).length;
  const list = (rooms.data || []).filter((r) => showArchived || !r.archived);
  const archivedCount = (rooms.data || []).filter((r) => r.archived).length;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="flex-1 font-display text-2xl font-black">Classrooms</h1>
        {archivedCount > 0 && <label className="flex items-center gap-2 text-sm font-bold text-slate-500"><input type="checkbox" checked={showArchived} onChange={(e) => setShowArchived(e.target.checked)} className="h-4 w-4" /> Show archived ({archivedCount})</label>}
        <button type="button" onClick={() => setCreating(true)} className="btn btn-green"><Plus className="h-4 w-4" aria-hidden /> New classroom</button>
      </div>
      <ErrorNote onRetry={rooms.reload}>{rooms.error}</ErrorNote>
      {rooms.loading && !rooms.data ? <Spinner /> : list.length ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {list.map((r) => {
            const s = SUBJECT_BY_ID[r.subject_id];
            return (
              <li key={r.id}>
                <a href={`#/teacher/class/${r.id}`} className={`card flex h-full items-center gap-3 p-4 transition hover:bg-brand-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300 ${r.archived ? 'opacity-70' : ''}`}>
                  {s && <SubjectBadge subject={s} size={48} />}
                  <span className="min-w-0 flex-1">
                    <span className="block font-extrabold leading-tight">{r.name}</span>
                    <span className="block text-sm font-semibold text-slate-500">{s?.title} · {[r.grade && `Grade ${r.grade}`, r.section && `Section ${r.section}`].filter(Boolean).join(' ') || r.academic_year}</span>
                    <span className="mt-1 flex items-center gap-3 text-xs font-bold text-slate-500">
                      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" aria-hidden /> {enr.data ? count(r.id) : '…'} students</span>
                      {r.archived && <span className="flex items-center gap-1"><Archive className="h-3.5 w-3.5" aria-hidden /> Archived</span>}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : <Empty icon={School} title="No classrooms yet">Create your first classroom, then share its join code with your students.</Empty>}
      {creating && <CreateModal onClose={() => setCreating(false)} onCreated={(room) => { setCreating(false); window.location.hash = `#/teacher/class/${room.id}`; }} />}
    </div>
  );
}

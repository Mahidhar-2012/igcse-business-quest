// Classroom data access (Supabase). Every call is checked by the database's row-level security, so these helpers can
// only ever return rows the signed-in user is allowed to see. Errors are thrown as plain Error messages.
import { getClient, getStatus } from './cloud.js';
import { SUBJECTS_META } from '../subjects.meta.js';

const sb = async () => {
  const c = await getClient();
  if (!c) throw new Error('Accounts are not set up on this site yet.');
  return c;
};
const ok = ({ data, error }) => {
  if (error) throw new Error(error.message);
  return data;
};

export const SUBJECT_BY_ID = Object.fromEntries(SUBJECTS_META.map((s) => [s.id, s]));
export const KEY_OF = (subjectId) => SUBJECT_BY_ID[subjectId]?.storageKey;
export const shortName = (p, id = '') => p?.full_name?.trim() || `Student ${String(id).slice(0, 4)}`;

// ---- classrooms -----------------------------------------------------------------------------------------------------
export const listClassrooms = async () => ok(await (await sb()).from('classrooms').select('*').order('created_at', { ascending: false }));

export const getClassroom = async (id) => ok(await (await sb()).from('classrooms').select('*').eq('id', id).maybeSingle());

export const createClassroom = async ({ name, grade, section, subject, year }) =>
  ok(await (await sb()).rpc('create_classroom', { p_name: name, p_grade: grade, p_section: section, p_subject: subject, p_year: year }));

export const updateClassroom = async (id, patch) => ok(await (await sb()).from('classrooms').update(patch).eq('id', id).select().maybeSingle());

export const shareClassroom = async (id, email) => ok(await (await sb()).rpc('share_classroom', { p_classroom: id, p_email: email }));

export const classroomTeachers = async (id) =>
  ok(await (await sb()).from('classroom_teachers').select('teacher_id, profiles(full_name)').eq('classroom_id', id));

// ---- roster and invitations -----------------------------------------------------------------------------------------
export const listRoster = async (classroomId) =>
  ok(await (await sb()).from('classroom_students').select('student_id, joined_at, profiles(full_name)').eq('classroom_id', classroomId).order('joined_at'));

/** Every student in every classroom the signed-in teacher can see: used by the dashboard. */
export const listAllEnrolments = async () =>
  ok(await (await sb()).from('classroom_students').select('classroom_id, student_id, joined_at, profiles(full_name)').order('joined_at', { ascending: false }));

export const removeStudent = async (classroomId, studentId) =>
  ok(await (await sb()).from('classroom_students').delete().eq('classroom_id', classroomId).eq('student_id', studentId));

export const listInvites = async (classroomId) => ok(await (await sb()).from('classroom_invites').select('id, email, created_at').eq('classroom_id', classroomId).order('created_at', { ascending: false }));

export const inviteStudent = async (classroomId, email) =>
  ok(await (await sb()).from('classroom_invites').insert({ classroom_id: classroomId, email: email.trim().toLowerCase(), created_by: getStatus().user.id }));

export const cancelInvite = async (id) => ok(await (await sb()).from('classroom_invites').delete().eq('id', id));

// ---- announcements --------------------------------------------------------------------------------------------------
export const listAnnouncements = async (classroomId) =>
  ok(await (await sb()).from('announcements').select('id, classroom_id, title, body, created_at, profiles(full_name)').eq('classroom_id', classroomId).order('created_at', { ascending: false }).limit(50));

export const recentAnnouncements = async (limit = 6) =>
  ok(await (await sb()).from('announcements').select('id, classroom_id, title, created_at, classrooms(name)').order('created_at', { ascending: false }).limit(limit));

/** One announcement per classroom. The database refuses any classroom the teacher does not teach. */
export const postAnnouncement = async (classroomIds, title, body) => {
  const me = getStatus().user.id;
  return ok(await (await sb()).from('announcements').insert(classroomIds.map((classroom_id) => ({ classroom_id, author_id: me, title: title.trim(), body: body.trim() }))));
};

export const deleteAnnouncement = async (id) => ok(await (await sb()).from('announcements').delete().eq('id', id));

// ---- student side ---------------------------------------------------------------------------------------------------
export const joinClassroom = async (code) => ok(await (await sb()).rpc('join_classroom', { p_code: code }));
export const acceptInvite = async (id) => ok(await (await sb()).rpc('accept_invite', { p_invite: id }));
export const myInvites = async () => ok(await (await sb()).from('classroom_invites').select('id, classroom_id, created_at, classrooms(name, subject_id)'));
export const leaveClassroom = async (classroomId) => removeStudent(classroomId, getStatus().user.id);

export const classroomTeacherNames = async (classroomId) => (await classroomTeachers(classroomId)).map((t) => t.profiles?.full_name || 'Teacher');

// ---- notifications --------------------------------------------------------------------------------------------------
export const listNotifications = async () => ok(await (await sb()).from('notifications').select('*').order('created_at', { ascending: false }).limit(30));
export const markAllRead = async () => ok(await (await sb()).from('notifications').update({ read: true }).eq('read', false));

// ---- teacher: becoming a teacher, student progress ------------------------------------------------------------------
export const redeemTeacherInvite = async (code) => ok(await (await sb()).rpc('redeem_teacher_invite', { p_code: code }));

export const updateMyName = async (name) => {
  const me = getStatus().user.id;
  return ok(await (await sb()).from('profiles').update({ full_name: name.trim().slice(0, 80) }).eq('id', me));
};

/** Saved progress rows for students the teacher can see (the database limits each to the classroom's subject). */
export const listStudentProgress = async () => ok(await (await sb()).from('progress').select('user_id, subject, data, updated_at'));

export const studentDetail = async (studentId, subjectId) => {
  const c = await sb();
  const [progress, attempts, profile] = await Promise.all([
    c.from('progress').select('data, updated_at').eq('user_id', studentId).eq('subject', KEY_OF(subjectId)).maybeSingle(),
    c.from('attempts').select('lesson_id, correct, created_at').eq('user_id', studentId).eq('subject_id', subjectId).order('created_at', { ascending: false }).limit(500),
    c.from('profiles').select('full_name').eq('id', studentId).maybeSingle(),
  ]);
  return { progress: ok(progress), attempts: ok(attempts) || [], profile: ok(profile) };
};

// ---- two-factor authentication (authenticator app) ------------------------------------------------------------------
export const mfaFactors = async () => {
  const { data } = await (await sb()).auth.mfa.listFactors();
  return (data?.totp || []).filter((f) => f.status === 'verified');
};
export const mfaEnroll = async () => ok(await (await sb()).auth.mfa.enroll({ factorType: 'totp' }));
export const mfaVerify = async (factorId, code) => {
  const c = await sb();
  const ch = ok(await c.auth.mfa.challenge({ factorId }));
  return ok(await c.auth.mfa.verify({ factorId, challengeId: ch.id, code: code.trim() }));
};
export const mfaUnenroll = async (factorId) => ok(await (await sb()).auth.mfa.unenroll({ factorId }));
/** True when the account has 2FA set up but this session has not passed the code check yet. */
export const mfaChallengeNeeded = async () => {
  const { data } = await (await sb()).auth.mfa.getAuthenticatorAssuranceLevel();
  return !!data && data.nextLevel === 'aal2' && data.currentLevel !== 'aal2';
};

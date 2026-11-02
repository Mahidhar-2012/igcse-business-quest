import { KEY_OF, SUBJECT_BY_ID } from '../lib/classes.js';
import { summarise } from '../lib/insights.js';

/** Summary of one student's saved progress in a classroom's subject. `rows` come from listStudentProgress. */
export function summaryFor(rows, studentId, room) {
  const key = KEY_OF(room.subject_id);
  const row = (rows || []).find((r) => r.user_id === studentId && r.subject === key);
  return summarise(row?.data || null, SUBJECT_BY_ID[room.subject_id]?.total || 0);
}

export const academicYear = (d = new Date()) => {
  const y = d.getMonth() >= 7 ? d.getFullYear() : d.getFullYear() - 1; // the school year starts around August
  return `${y}-${String(y + 1).slice(2)}`;
};

export const pctText = (n) => (n === null || n === undefined ? 'Not enough data yet' : `${n}%`);

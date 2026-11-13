// Lightweight, same-device "class mode" for Physics.
//
// Students sign in with name + email + team. Their Physics progress is saved per student
// (keyed by email) so a teacher on the SAME device/browser can review everyone and run a
// team points scoreboard. This is NOT secure login or cloud sync: the teacher password is a
// convenience gate and all data lives in this browser only.

const PHYSICS_BASE = 'igcse-physics-quest:v1';
const ACTIVE_KEY = 'iq:activeStudent';   // active student's email (their id)
const STUDENTS_KEY = 'iq:classStudents'; // { [email]: {name,email,team,joinedAt} }
const TEAMS_KEY = 'iq:physicsTeams';     // [{id,name,points}]

export const PHYSICS_BASE_KEY = PHYSICS_BASE;

// Team names are editable by the teacher; ids stay stable so students keep their team if renamed.
const DEFAULT_TEAMS = [
  { id: 'newtons', name: 'Newtons', points: 0 },
  { id: 'einsteins', name: 'Einsteins', points: 0 },
];

const safeParse = (s, fb) => { try { return JSON.parse(s); } catch { return fb; } };

export const normalizeEmail = (e) => String(e || '').trim().toLowerCase();
export const isEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e || '').trim());
export const studentKey = (email) => `${PHYSICS_BASE}::${normalizeEmail(email)}`;

// ---- active student --------------------------------------------------------
export const getActiveStudent = () => {
  try { return localStorage.getItem(ACTIVE_KEY) || null; } catch { return null; }
};
export const setActiveStudent = (email) => {
  try {
    if (email) localStorage.setItem(ACTIVE_KEY, normalizeEmail(email));
    else localStorage.removeItem(ACTIVE_KEY);
  } catch { /* private mode: just won't persist */ }
};

/** Physics storage key to use now — namespaced to the signed-in student, if any. */
export const physicsStorageKey = () => {
  const email = getActiveStudent();
  return email ? studentKey(email) : PHYSICS_BASE;
};

// ---- student profiles ------------------------------------------------------
const readStudents = () => safeParse(localStorage.getItem(STUDENTS_KEY), {}) || {};

export const upsertStudent = ({ name, email, team }) => {
  const id = normalizeEmail(email);
  try {
    const all = readStudents();
    all[id] = {
      name: String(name || '').trim(),
      email: id,
      team,
      joinedAt: all[id]?.joinedAt || Date.now(),
    };
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(all));
  } catch { /* ignore */ }
  return id;
};

export const getStudent = (email) => readStudents()[normalizeEmail(email)] || null;

export const listStudents = () =>
  Object.values(readStudents()).sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')));

// ---- teams + points --------------------------------------------------------
export const getTeams = () => {
  const t = safeParse(localStorage.getItem(TEAMS_KEY), null);
  if (Array.isArray(t) && t.length) return t.map((x) => ({ points: 0, ...x }));
  return DEFAULT_TEAMS.map((x) => ({ ...x }));
};

const saveTeams = (teams) => { try { localStorage.setItem(TEAMS_KEY, JSON.stringify(teams)); } catch { /* ignore */ } };

export const addTeamPoints = (id, delta) => {
  const teams = getTeams().map((t) => (t.id === id ? { ...t, points: Math.max(0, (t.points || 0) + delta) } : t));
  saveTeams(teams);
  return teams;
};

export const renameTeam = (id, name) => {
  const teams = getTeams().map((t) => (t.id === id ? { ...t, name: String(name || '').trim() || t.name } : t));
  saveTeams(teams);
  return teams;
};

export const resetTeamPoints = () => {
  const teams = getTeams().map((t) => ({ ...t, points: 0 }));
  saveTeams(teams);
  return teams;
};

export const teamName = (id) => getTeams().find((t) => t.id === id)?.name || '—';

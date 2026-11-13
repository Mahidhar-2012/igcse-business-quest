// Lightweight, same-device "class mode" sessions.
//
// A signed-in student's Physics progress is saved under their own namespaced localStorage key,
// so a teacher using the SAME device/browser can review everyone from the teacher dashboard.
// This is NOT real security or cloud sync: the passwords (see Portal.jsx) are a convenience gate,
// and progress lives in this browser only. Physics only for now.

const PHYSICS_BASE = 'igcse-physics-quest:v1';
const ACTIVE_KEY = 'iq:activeStudent'; // roll number of the signed-in student, or absent
const ROLES_KEY = 'iq:classRoll'; // remembers roll numbers seen on this device (even before any progress)

export const PHYSICS_BASE_KEY = PHYSICS_BASE;
export const studentKey = (roll) => `${PHYSICS_BASE}::${roll}`;

export const getActiveStudent = () => {
  try { return localStorage.getItem(ACTIVE_KEY) || null; } catch { return null; }
};

export const setActiveStudent = (roll) => {
  try {
    if (roll) {
      localStorage.setItem(ACTIVE_KEY, roll);
      rememberRoll(roll);
    } else {
      localStorage.removeItem(ACTIVE_KEY);
    }
  } catch { /* private mode: just won't persist */ }
};

/** Physics storage key to use right now — namespaced to the signed-in student, if any. */
export const physicsStorageKey = () => {
  const roll = getActiveStudent();
  return roll ? studentKey(roll) : PHYSICS_BASE;
};

const readRoster = () => {
  try { return JSON.parse(localStorage.getItem(ROLES_KEY) || '[]'); } catch { return []; }
};

const rememberRoll = (roll) => {
  try {
    const set = new Set(readRoster());
    set.add(roll);
    localStorage.setItem(ROLES_KEY, JSON.stringify([...set]));
  } catch { /* ignore */ }
};

/** Every roll number known on this device: those with saved progress + any that have signed in. */
export const listStudents = () => {
  const set = new Set(readRoster());
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(`${PHYSICS_BASE}::`)) set.add(k.slice(PHYSICS_BASE.length + 2));
    }
  } catch { /* ignore */ }
  return [...set].sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));
};

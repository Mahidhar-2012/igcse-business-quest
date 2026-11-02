// Reading state for the textbook: last position per chapter, bookmarks and "marked as read".
// Stored on this device only under its own key, so it can never collide with lesson progress or cloud sync.
// Marking a chapter as read records reading, not mastery: it never touches XP, stars or lesson unlocks.
export const BOOK_KEY = 'iq:book:v1';
const VERSION = 1;

export const emptyState = () => ({ v: VERSION, books: {} });

const bookOf = (s, bookId) => s.books[bookId] || { last: null, pos: {}, read: {}, marks: {} };

const isObj = (x) => x && typeof x === 'object' && !Array.isArray(x);

/** Accepts anything found in storage and returns a clean state; unknown or damaged data becomes an empty state. */
export function normalise(raw) {
  if (!isObj(raw) || raw.v !== VERSION || !isObj(raw.books)) return emptyState();
  const books = {};
  for (const [id, b] of Object.entries(raw.books)) {
    if (!isObj(b)) continue;
    books[id] = {
      last: typeof b.last === 'string' ? b.last : null,
      pos: isObj(b.pos) ? Object.fromEntries(Object.entries(b.pos).filter(([, v]) => typeof v === 'string')) : {},
      read: isObj(b.read) ? Object.fromEntries(Object.entries(b.read).filter(([, v]) => typeof v === 'string')) : {},
      marks: isObj(b.marks) ? Object.fromEntries(Object.entries(b.marks).map(([k, v]) => [k, Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []])) : {},
    };
  }
  return { v: VERSION, books };
}

export function load(storage) {
  try { return normalise(JSON.parse(storage.getItem(BOOK_KEY) || 'null')); } catch { return emptyState(); }
}

export function save(storage, state) {
  try { storage.setItem(BOOK_KEY, JSON.stringify(state)); } catch { /* private mode or full: the position just will not persist */ }
}

const put = (s, bookId, patch) => ({ ...s, books: { ...s.books, [bookId]: { ...bookOf(s, bookId), ...patch } } });

export const setPosition = (s, bookId, chapterId, sectionId) => {
  const b = bookOf(s, bookId);
  if (b.pos[chapterId] === sectionId && b.last === chapterId) return s;
  return put(s, bookId, { last: chapterId, pos: { ...b.pos, [chapterId]: sectionId } });
};

export const toggleBookmark = (s, bookId, chapterId, sectionId) => {
  const b = bookOf(s, bookId);
  const cur = b.marks[chapterId] || [];
  const next = cur.includes(sectionId) ? cur.filter((x) => x !== sectionId) : [...cur, sectionId];
  return put(s, bookId, { marks: { ...b.marks, [chapterId]: next } });
};

export const setRead = (s, bookId, chapterId, on, now = new Date().toISOString()) => {
  const b = bookOf(s, bookId);
  const read = { ...b.read };
  if (on) read[chapterId] = now; else delete read[chapterId];
  return put(s, bookId, { read });
};

export const isRead = (s, bookId, chapterId) => Boolean(bookOf(s, bookId).read[chapterId]);
export const isMarked = (s, bookId, chapterId, sectionId) => (bookOf(s, bookId).marks[chapterId] || []).includes(sectionId);
export const positionOf = (s, bookId, chapterId) => bookOf(s, bookId).pos[chapterId] || null;
export const lastChapter = (s, bookId) => bookOf(s, bookId).last;
export const bookmarksOf = (s, bookId) => Object.entries(bookOf(s, bookId).marks).flatMap(([chapterId, ids]) => ids.map((sectionId) => ({ chapterId, sectionId })));

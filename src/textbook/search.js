// Plain keyword search over chapter titles, section titles, learning objectives and key terms.
// Not semantic search: every word typed must appear in the matched text (case-insensitive).
const KIND_RANK = { chapter: 0, term: 1, section: 2, objective: 3 };

const words = (q) => q.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
const hit = (text, ws) => { const t = text.toLowerCase(); return ws.every((w) => t.includes(w)); };

export function searchBook(book, query) {
  const ws = words(query);
  if (!ws.length) return [];
  const out = [];
  for (const c of book.chapters) {
    const base = { chapterId: c.id, chapterTitle: c.title };
    if (hit(c.title, ws)) out.push({ ...base, kind: 'chapter', text: c.title, sectionId: null });
    for (const t of c.terms) if (hit(t, ws)) out.push({ ...base, kind: 'term', text: t, sectionId: 'terms' });
    for (const s of c.sections) if (hit(s.title, ws)) out.push({ ...base, kind: 'section', text: s.title, sectionId: s.id });
    for (const o of c.objectives) if (hit(o.text, ws)) out.push({ ...base, kind: 'objective', text: o.text, sectionId: null });
  }
  return out.sort((a, b) => KIND_RANK[a.kind] - KIND_RANK[b.kind]);
}

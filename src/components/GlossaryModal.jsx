import { useEffect, useMemo, useRef, useState } from 'react';
import { X, BookText, Search } from 'lucide-react';
import { glossary } from '../data/glossary.js';

export default function GlossaryModal({ onClose }) {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const all = [...glossary].sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' }));
    return s ? all.filter((g) => g.names.some((n) => n.toLowerCase().includes(s)) || g.def.toLowerCase().includes(s)) : all;
  }, [q]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="glossary-title"
        className="pop flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b-2 border-slate-100 p-5">
          <BookText className="h-6 w-6 text-amber-500" aria-hidden />
          <h2 id="glossary-title" className="flex-1 text-xl font-black">Key terms <span className="text-slate-400">({glossary.length})</span></h2>
          <button type="button" onClick={onClose} aria-label="Close glossary" className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
            <X className="h-5 w-5" />
          </button>
        </div>
        <label className="flex items-center gap-2 border-b-2 border-slate-100 px-5 py-3">
          <Search className="h-4 w-4 text-slate-400" aria-hidden />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a term or definition…"
            className="w-full bg-transparent font-bold outline-none"
            aria-label="Search glossary"
          />
        </label>
        <dl className="flex-1 space-y-3 overflow-y-auto p-5">
          {list.length === 0 && <p className="text-center font-bold text-slate-400">No matching terms.</p>}
          {list.map((g) => (
            <div key={g.term}>
              <dt className="font-black">{g.term}</dt>
              <dd className="text-sm font-semibold text-slate-600">{g.def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

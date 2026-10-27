import { useEffect, useRef } from 'react';
import { X, ShieldAlert, Swords, PartyPopper } from 'lucide-react';
import { units as businessUnits, questionIndex as businessIndex } from '../data/syllabusData.js';

const TYPE_LABEL = { mcq: 'Multiple choice', order: 'Ordering', scenario: 'Scenario', calc: 'Calculation', tfd: 'True/False' };

export default function MistakeBankModal({ mistakes, onClose, onStartDrill, course }) {
  const units = course ? course.units : businessUnits;
  const questionIndex = course ? course.questionIndex : businessIndex;
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const byUnit = units
    .map((u) => ({ unit: u, ids: mistakes.filter((id) => questionIndex[id]?.unit.id === u.id) }))
    .filter((g) => g.ids.length);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mistake-title"
        className="pop flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b-2 border-slate-100 p-5">
          <ShieldAlert className="h-6 w-6 text-rose-500" aria-hidden />
          <h2 id="mistake-title" className="flex-1 text-xl font-black">Mistake Bank <span className="text-rose-500">({mistakes.length})</span></h2>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {mistakes.length === 0 ? (
            <div className="py-10 text-center">
              <PartyPopper className="mx-auto mb-3 h-12 w-12 text-amber-400" aria-hidden />
              <p className="text-lg font-black">Nothing here. Clean sheet!</p>
              <p className="text-sm font-semibold text-slate-500">Questions you miss are saved here until you answer them correctly.</p>
            </div>
          ) : (
            byUnit.map(({ unit, ids }) => (
              <section key={unit.id} className="mb-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-sm font-extrabold">{unit.emoji} Unit {unit.number}: {unit.short}</h3>
                  <button type="button" onClick={() => onStartDrill(ids)} className="rounded-xl bg-rose-100 px-3 py-1 text-xs font-extrabold text-rose-700 hover:bg-rose-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                    Drill {ids.length}
                  </button>
                </div>
                <ul className="space-y-2">
                  {ids.map((id) => {
                    const { challenge, sub } = questionIndex[id];
                    return (
                      <li key={id} className="rounded-xl border-2 border-slate-100 p-3 text-sm">
                        <p className="mb-0.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">{sub.title} · {TYPE_LABEL[challenge.type] || 'Past paper'}</p>
                        <p className="font-bold">{challenge.q || 'Past-paper question (diagram)'}</p>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))
          )}
        </div>

        {mistakes.length > 0 && (
          <div className="border-t-2 border-slate-100 p-4">
            <button type="button" className="btn btn-red w-full" onClick={() => onStartDrill(mistakes)}>
              <Swords className="h-5 w-5" aria-hidden /> Boss Fight: drill all {mistakes.length}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

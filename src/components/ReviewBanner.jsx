import { RotateCcw } from 'lucide-react';
import { SESSION_SIZE } from '../lib/srs.js';

/** Shown on a subject's dashboard when spaced-repetition questions are due. */
export default function ReviewBanner({ count, onStart }) {
  if (!count) return null;
  const n = Math.min(count, SESSION_SIZE);
  return (
    <div className="mx-auto mt-3 max-w-3xl px-4">
      <button type="button" onClick={onStart} className="card flex w-full items-center gap-3 border-brand p-3 text-left transition hover:bg-brand-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white"><RotateCcw className="h-5 w-5" aria-hidden /></span>
        <span className="min-w-0 flex-1">
          <span className="block font-extrabold leading-tight">Daily review</span>
          <span className="block text-sm font-semibold text-slate-500">{count} question{count === 1 ? '' : 's'} due{count > n ? `, ${n} at a time` : ''}</span>
        </span>
        <span className="btn btn-green !px-3 !py-1.5 text-xs">Start</span>
      </button>
    </div>
  );
}

import { useEffect } from 'react';
import { LoaderCircle, X, TriangleAlert } from 'lucide-react';

export const Spinner = ({ label = 'Loading…' }) => (
  <p role="status" className="flex items-center gap-2 py-6 text-sm font-bold text-slate-500">
    <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> {label}
  </p>
);

export const ErrorNote = ({ children, onRetry }) =>
  children ? (
    <p role="alert" className="flex flex-wrap items-center gap-2 rounded-xl bg-rose-50 px-3 py-2 text-sm font-bold text-rose-700">
      <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden /> <span className="min-w-0 flex-1">{children}</span>
      {onRetry && <button type="button" onClick={onRetry} className="underline">Try again</button>}
    </p>
  ) : null;

export const Empty = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center">
    {Icon && <Icon className="mx-auto mb-2 h-8 w-8 text-slate-400" aria-hidden />}
    <p className="font-extrabold">{title}</p>
    {children && <p className="mt-1 text-sm font-semibold text-slate-500">{children}</p>}
  </div>
);

export function Modal({ title, onClose, children, wide }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-900/50 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={title} className={`pop w-full ${wide ? 'max-w-lg' : 'max-w-sm'} rounded-3xl bg-white p-5 shadow-2xl`} onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center gap-3">
          <h2 className="flex-1 text-xl font-black">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"><X className="h-5 w-5" /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function TextField({ label, hint, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-500">{label}</span>
      <input {...props} className="mt-1 w-full rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 font-semibold outline-none focus:border-brand" />
      {hint && <span className="text-xs font-semibold text-slate-500">{hint}</span>}
    </label>
  );
}

export const fmtDate = (iso) => new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
export const fmtDateTime = (iso) => new Date(iso).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

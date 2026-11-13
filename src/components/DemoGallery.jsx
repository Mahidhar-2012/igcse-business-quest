import { ArrowLeft, FlaskConical } from 'lucide-react';

/** Gallery of a subject's live, teacher-led demonstrations (config.demos). */
export default function DemoGallery({ demos, onOpen, onBack }) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-4">
      <div className="mb-4 flex items-center gap-2">
        <button type="button" onClick={onBack} className="icon-btn" aria-label="Back"><ArrowLeft className="h-5 w-5" /></button>
        <h1 className="flex items-center gap-2 text-xl font-black text-slate-800">
          <FlaskConical className="h-5 w-5 text-indigo-600" aria-hidden /> Live demos
        </h1>
      </div>
      <p className="mb-4 text-sm font-semibold text-slate-500">
        Interactive demonstrations for the class. Project one on the board and change it live while you explain.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {demos.map((d) => (
          <li key={d.id}>
            <button
              type="button"
              onClick={() => onOpen(d.id)}
              className="pop flex h-full w-full flex-col rounded-2xl border-2 border-slate-200 bg-white p-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50/40"
            >
              <span className="text-3xl" aria-hidden>{d.emoji}</span>
              <span className="mt-2 text-lg font-black text-slate-800">{d.title}</span>
              <span className="mt-1 text-sm font-semibold text-slate-500">{d.blurb}</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

import { useEffect, useRef, useState } from 'react';
import { X, Bot, ShieldCheck, Loader2, CheckCircle2, AlertTriangle, Trash2 } from 'lucide-react';
import { AI_MODELS, getAiConfig, saveAiConfig, clearAiConfig, testConnection } from '../lib/ai.js';

export default function AiSettingsModal({ onClose, onSaved }) {
  const initial = getAiConfig();
  const [key, setKey] = useState(initial.key);
  const [model, setModel] = useState(initial.model);
  const [status, setStatus] = useState(null); // { ok, msg } | 'busy'
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const save = () => {
    saveAiConfig({ key, model });
    onSaved?.();
    onClose();
  };

  const test = async () => {
    setStatus('busy');
    try {
      const msg = await testConnection({ key, model });
      setStatus({ ok: true, msg });
    } catch (e) {
      setStatus({ ok: false, msg: e.message });
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-title"
        className="pop max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center gap-3">
          <Bot className="h-6 w-6 text-violet-600" aria-hidden />
          <h2 id="ai-title" className="flex-1 text-xl font-black">AI teacher settings</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mb-4 text-sm font-semibold leading-relaxed text-slate-600">
          The AI teacher marks your written Paper 1 and Paper 2 answers like a Cambridge examiner: marks for each assessment objective, evidence from your own words, what you missed, and a rewrite showing how to gain the missing marks.
        </p>

        <label className="mb-1 block text-xs font-extrabold uppercase tracking-wide text-slate-500" htmlFor="ai-key">Anthropic API key</label>
        <input
          id="ai-key"
          ref={inputRef}
          type="password"
          autoComplete="off"
          spellCheck={false}
          value={key}
          onChange={(e) => { setKey(e.target.value); setStatus(null); }}
          placeholder="sk-ant-…   (or type demo to preview)"
          className="mb-3 w-full rounded-2xl border-2 border-slate-200 px-4 py-3 font-bold outline-none focus:border-violet-400"
        />

        <label className="mb-1 block text-xs font-extrabold uppercase tracking-wide text-slate-500" htmlFor="ai-model">Model</label>
        <select
          id="ai-model"
          value={model}
          onChange={(e) => { setModel(e.target.value); setStatus(null); }}
          className="mb-3 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 font-bold outline-none focus:border-violet-400"
        >
          {AI_MODELS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
        </select>

        <div className="mb-4 rounded-2xl border-2 border-violet-100 bg-violet-50 p-3 text-xs font-semibold leading-relaxed text-violet-900">
          <p className="mb-1 flex items-center gap-1 font-black"><ShieldCheck className="h-4 w-4" aria-hidden /> How your key is used</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Your key is stored <strong>only in this browser</strong> and sent <strong>only to Anthropic</strong> when you ask for marking. It is never part of this website.</li>
            <li>Each marked answer is a paid API call (usually a few cents). Create a key at <strong>console.anthropic.com</strong> and set a monthly spending limit there. A Claude.ai chat subscription does not include API credit.</li>
            <li>Your written answers are sent to Anthropic for marking. Don’t use this on a shared computer.</li>
          </ul>
        </div>

        {status && status !== 'busy' && (
          <p className={`mb-3 flex items-start gap-2 rounded-xl p-3 text-sm font-bold ${status.ok ? 'bg-green-50 text-green-800' : 'bg-rose-50 text-rose-800'}`} role="status">
            {status.ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
            {status.msg}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn btn-green" onClick={save} disabled={!key.trim()}>Save</button>
          <button type="button" className="btn btn-blue" onClick={test} disabled={!key.trim() || status === 'busy'}>
            {status === 'busy' ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null} Test
          </button>
          {initial.key && (
            <button
              type="button"
              className="btn btn-ghost ml-auto"
              onClick={() => { clearAiConfig(); setKey(''); setStatus(null); onSaved?.(); }}
            >
              <Trash2 className="h-4 w-4" aria-hidden /> Remove key
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Zap, Flame, Volume2, VolumeX, ShieldAlert, Settings, Unlock, Trash2, BookText } from 'lucide-react';
import { units } from '../data/syllabusData.js';
import { UNIT_COLORS, ProgressRing } from './UnitDashboard.jsx';

export default function Header({ state, unitStats, activeUnitId, onSelectUnit, onOpenMistakes, onOpenGlossary, onToggle, onReset, showUnits }) {
  const [menu, setMenu] = useState(false);
  const active = units.find((u) => u.id === activeUnitId);

  return (
    <header className="sticky top-0 z-30 border-b-2 border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2.5">
        <span className="hidden text-lg font-black text-brand-dark sm:block">Business Quest</span>
        {active && (
          <span className="whitespace-nowrap rounded-full px-3 py-1 text-xs font-extrabold text-white" style={{ background: UNIT_COLORS[active.color] }}>
            Unit {active.number}<span className="hidden sm:inline">: {active.short}</span>
          </span>
        )}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <span className="flex items-center gap-1 rounded-xl px-2 py-1 font-extrabold text-orange-500" title="Daily study streak">
            <Flame className="h-5 w-5 fill-orange-400" aria-hidden />
            <span aria-label={`${state.streak} day streak`}>{state.streak}</span>
          </span>
          <span className="flex items-center gap-1 rounded-xl px-2 py-1 font-extrabold text-amber-500" title={`Today: ${state.todayXp} XP`}>
            <Zap className="h-5 w-5 fill-amber-400" aria-hidden />
            <span aria-label={`${state.xp} total XP`}>{state.xp}</span>
          </span>
          <button
            type="button"
            onClick={onOpenMistakes}
            aria-label={`Mistake bank, ${state.mistakes.length} questions`}
            className="relative rounded-xl p-2 text-rose-500 hover:bg-rose-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"
          >
            <ShieldAlert className="h-5 w-5" />
            {state.mistakes.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-rose-500 px-1 text-[11px] font-black text-white">
                {state.mistakes.length}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={onOpenGlossary}
            aria-label="Open glossary of key terms"
            className="rounded-xl p-2 text-amber-500 hover:bg-amber-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"
          >
            <BookText className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => onToggle('sound')}
            aria-pressed={state.sound}
            aria-label={state.sound ? 'Mute sounds' : 'Unmute sounds'}
            className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"
          >
            {state.sound ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-expanded={menu}
              aria-label="Settings"
              className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"
            >
              <Settings className="h-5 w-5" />
            </button>
            {menu && (
              <div className="pop absolute right-0 mt-2 w-64 rounded-2xl border-2 border-slate-200 bg-white p-2 shadow-xl">
                <button type="button" onClick={() => onToggle('openAll')} className="flex w-full items-center gap-2 rounded-xl p-3 text-left text-sm font-bold hover:bg-slate-50">
                  <Unlock className="h-4 w-4" aria-hidden />
                  <span className="flex-1">Cram mode: unlock all lessons</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-black ${state.openAll ? 'bg-brand text-white' : 'bg-slate-200 text-slate-500'}`}>{state.openAll ? 'ON' : 'OFF'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Reset ALL progress, XP, streak and mistakes?')) onReset();
                    setMenu(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-xl p-3 text-left text-sm font-bold text-rose-600 hover:bg-rose-50"
                >
                  <Trash2 className="h-4 w-4" aria-hidden /> Reset progress
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showUnits && (
        <nav aria-label="Jump to unit" className="border-t border-slate-100">
          <ul className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-2">
            {units.map((u) => (
              <li key={u.id}>
                <button
                  type="button"
                  onClick={() => onSelectUnit(u.id)}
                  aria-current={u.id === activeUnitId ? 'true' : undefined}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full border-2 px-3 py-1 text-sm font-extrabold transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300 ${
                    u.id === activeUnitId ? 'text-white' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                  style={u.id === activeUnitId ? { background: UNIT_COLORS[u.color], borderColor: UNIT_COLORS[u.color] } : undefined}
                >
                  <span aria-hidden>{u.emoji}</span> U{u.number}
                  <span className={`text-xs ${u.id === activeUnitId ? 'text-white/90' : 'text-slate-400'}`}>{unitStats[u.id].mastery}%</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

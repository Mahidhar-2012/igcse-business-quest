import { useEffect, useState } from 'react';
import { Atom, Briefcase, PenLine, FlaskConical, TrendingUp, Leaf, Sigma, Calculator, Cpu, Globe, House, Brain, FileText, ChartColumn, School, Sun, Moon, MonitorSmartphone } from 'lucide-react';
import { getTheme, setTheme } from '../lib/theme.js';
import { cloudEnabled } from '../lib/cloud.js';

export const ICONS = { physics: Atom, business: Briefcase, english: PenLine, chemistry: FlaskConical, economics: TrendingUp, biology: Leaf, maths: Sigma, addmaths: Calculator, cs: Cpu, gp: Globe };

/** Brand mark: a rounded orange tile with a star. */
export function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <rect width="40" height="40" rx="11" fill="var(--brand)" />
      <rect y="30" width="40" height="10" rx="5" fill="var(--btn-edge)" opacity=".35" />
      <path d="M20 7.5l3.7 8.4 9.1.8-6.9 6 2.1 8.9L20 26.7l-8 4.9 2.1-8.9-6.9-6 9.1-.8z" fill="#fff" />
    </svg>
  );
}

export function Ring({ pct, color, size = 56, stroke = 6, children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--sl-200)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (c * pct) / 100} style={{ transition: 'stroke-dashoffset .6s ease' }} />
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}

export function SubjectBadge({ subject, size = 40 }) {
  const Icon = ICONS[subject.id];
  return (
    <span className="grid shrink-0 place-items-center rounded-xl text-white" style={{ width: size, height: size, background: subject.color }}>
      {Icon && <Icon style={{ width: size * 0.55, height: size * 0.55 }} aria-hidden />}
    </span>
  );
}

const TABS = [
  ['learn', 'Learn', House, '#/'],
  ['recall', 'Recall', Brain, '#/recall'],
  ['notes', 'Notes', FileText, '#/notes'],
  ...(cloudEnabled ? [['classes', 'Classes', School, '#/classes']] : []), // only when accounts are set up
  ['progress', 'Progress', ChartColumn, '#/progress'],
];

export function BottomNav({ tab }) {
  return (
    <nav aria-label="Main" className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-slate-200 bg-white/95 backdrop-blur" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}>
      <ul className="mx-auto grid max-w-xl gap-1 px-2 py-1.5" style={{ gridTemplateColumns: `repeat(${TABS.length}, minmax(0, 1fr))` }}>
        {TABS.map(([id, label, Icon, href]) => {
          const on = tab === id;
          return (
            <li key={id}>
              <a
                href={href}
                aria-current={on ? 'page' : undefined}
                className={`flex flex-col items-center gap-0.5 rounded-2xl border-2 px-1 py-1.5 text-xs font-bold transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300 ${
                  on ? 'border-brand bg-brand-soft text-brand-dark' : 'border-transparent text-slate-500 hover:bg-slate-100'
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const THEMES = [['system', 'Auto', MonitorSmartphone], ['light', 'Light', Sun], ['dark', 'Dark', Moon]];

/** Cycles Auto, Light, Dark. */
export function ThemeButton() {
  const [t, setT] = useState(getTheme);
  useEffect(() => {
    const on = () => setT(getTheme());
    window.addEventListener('iq-theme', on);
    return () => window.removeEventListener('iq-theme', on);
  }, []);
  const i = THEMES.findIndex(([id]) => id === t);
  const [, label, Icon] = THEMES[i < 0 ? 0 : i];
  const next = THEMES[(i + 1) % THEMES.length];
  return (
    <button type="button" onClick={() => setTheme(next[0])} className="icon-btn" aria-label={`Theme: ${label}. Switch to ${next[1]}`} title={`Theme: ${label}`}>
      <Icon className="h-5 w-5" aria-hidden />
    </button>
  );
}

/** Segmented control for choosing a theme. */
export function ThemePicker() {
  const [t, setT] = useState(getTheme);
  return (
    <div role="radiogroup" aria-label="Theme" className="grid grid-cols-3 gap-1 rounded-2xl bg-slate-100 p-1">
      {THEMES.map(([id, label, Icon]) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={t === id}
          onClick={() => { setTheme(id); setT(id); }}
          className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-sm font-bold transition ${t === id ? 'bg-white text-brand-dark shadow' : 'text-slate-500 hover:text-slate-700'}`}
        >
          <Icon className="h-4 w-4" aria-hidden /> {label}
        </button>
      ))}
    </div>
  );
}

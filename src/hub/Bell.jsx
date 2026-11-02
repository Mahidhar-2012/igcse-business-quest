import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Bell } from 'lucide-react';
import { cloudEnabled, getStatus, subscribe } from '../lib/cloud.js';
import { listNotifications, markAllRead } from '../lib/classes.js';
import { useAsync, useRealtime } from '../lib/useAsync.js';
import { fmtDateTime } from '../components/ui.jsx';

function Inner({ user }) {
  const list = useAsync(listNotifications, [user.id]);
  useRealtime('notifications', `user_id=eq.${user.id}`, list.reload);
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  const unread = (list.data || []).filter((n) => !n.read).length;

  useEffect(() => {
    if (!open) return undefined;
    const away = (e) => box.current && !box.current.contains(e.target) && setOpen(false);
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', away);
    window.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', away); window.removeEventListener('keydown', esc); };
  }, [open]);

  const toggle = async () => {
    setOpen((o) => !o);
    if (!open && unread) {
      try { await markAllRead(); list.reload(); } catch { /* shown as unread until the next try */ }
    }
  };

  return (
    <div ref={box} className="relative">
      <button type="button" onClick={toggle} className="icon-btn relative" aria-label={`Notifications${unread ? `, ${unread} new` : ''}`} aria-expanded={open}>
        <Bell className="h-5 w-5" aria-hidden />
        {unread > 0 && <span className="absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-rose-600 px-1 text-[10px] font-black text-white">{unread > 9 ? '9+' : unread}</span>}
      </button>
      {open && (
        <div role="dialog" aria-label="Notifications" className="absolute right-0 z-40 mt-1 w-72 max-w-[85vw] rounded-2xl border-2 border-slate-200 bg-white p-2 shadow-xl">
          {list.error && <p className="p-2 text-sm font-bold text-rose-700">{list.error}</p>}
          {!list.error && !list.data?.length && <p className="p-3 text-center text-sm font-semibold text-slate-500">Nothing new yet.</p>}
          <ul className="max-h-80 overflow-y-auto">
            {(list.data || []).map((n) => (
              <li key={n.id}>
                <a href={n.link || '#/classes'} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-slate-100">
                  <span className="block font-extrabold leading-tight">{n.title}</span>
                  <span className="block text-sm font-semibold text-slate-500">{n.body}</span>
                  <span className="block text-xs font-bold text-slate-500">{fmtDateTime(n.created_at)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/** Notification bell for signed-in users. */
export default function NotificationBell() {
  const st = useSyncExternalStore(subscribe, getStatus);
  if (!cloudEnabled || !st.user) return null;
  return <Inner user={st.user} />;
}

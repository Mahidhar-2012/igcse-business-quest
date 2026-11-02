import { useCallback, useEffect, useRef, useState } from 'react';
import { getClient } from './cloud.js';

/** Runs an async loader and tracks loading and error state. `reload()` runs it again without clearing the data. */
export function useAsync(loader, deps) {
  const [st, setSt] = useState({ data: null, error: '', loading: true });
  const alive = useRef(true);
  const load = useCallback(() => {
    loader().then(
      (data) => alive.current && setSt({ data, error: '', loading: false }),
      (e) => alive.current && setSt((s) => ({ ...s, error: e.message || 'Something went wrong', loading: false })),
    );
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    alive.current = true;
    setSt((s) => ({ ...s, loading: true }));
    load();
    return () => { alive.current = false; };
  }, [load]);
  return { ...st, reload: load };
}

/** Calls onChange whenever a row in `table` changes (Supabase Realtime, so no polling). filter e.g. "classroom_id=eq.<id>". */
export function useRealtime(table, filter, onChange) {
  const cb = useRef(onChange);
  cb.current = onChange;
  useEffect(() => {
    let channel;
    let sb;
    let gone = false;
    getClient().then((c) => {
      if (!c || gone) return;
      sb = c;
      channel = c.channel(`rt:${table}:${filter || 'all'}:${Math.random().toString(36).slice(2, 8)}`)
        .on('postgres_changes', { event: '*', schema: 'public', table, ...(filter ? { filter } : {}) }, (payload) => cb.current(payload))
        .subscribe();
    });
    return () => {
      gone = true;
      if (sb && channel) sb.removeChannel(channel);
    };
  }, [table, filter]);
}

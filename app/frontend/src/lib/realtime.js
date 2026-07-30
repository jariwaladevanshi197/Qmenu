/**
 * Live updates via backend polling.
 *
 * Previously this used Supabase Realtime with the public anon key, which required
 * RLS to expose the `orders`/`waiterrequests` tables to `anon`. With RLS locked
 * down (deny-all to anon) that path is intentionally closed, so we poll our own
 * authenticated backend instead. Same function signatures as before — callers
 * are unchanged.
 */
import api from './api';

const POLL_MS = 8000;

// Generic poller: calls `fetcher` every intervalMs, passes the result to onTick.
// Returns an unsubscribe function.
function poll(fetcher, onTick, intervalMs = POLL_MS) {
  let stopped = false;
  let timer;
  const run = async () => {
    if (stopped) return;
    try {
      const rows = await fetcher();
      if (!stopped) onTick(rows || []);
    } catch {
      /* transient error — try again next tick */
    }
    if (!stopped) timer = setTimeout(run, intervalMs);
  };
  run();
  return () => { stopped = true; clearTimeout(timer); };
}

// Live order feed for a restaurant (auth derived from JWT; restroid kept for API compat).
// Fires onNew(order) for orders that appear after mount, onUpdate() when anything changes.
export const subscribeToOrders = (restroid, onNew, onUpdate) => {
  const seen = new Map(); // id -> signature
  let first = true;
  return poll(
    () => api.get('/orders/active').then((r) => r.data),
    (rows) => {
      let changed = false;
      for (const o of rows) {
        const sig = `${o.status}|${o.paymentstatus}|${o.updatedAt || ''}`;
        const prev = seen.get(o.id);
        if (prev === undefined) {
          seen.set(o.id, sig);
          if (!first) { onNew?.(o); changed = true; }
        } else if (prev !== sig) {
          seen.set(o.id, sig);
          changed = true;
        }
      }
      const ids = new Set(rows.map((o) => o.id));
      for (const id of [...seen.keys()]) {
        if (!ids.has(id)) { seen.delete(id); changed = true; } // order left the active list
      }
      if (!first && changed) onUpdate?.();
      first = false;
    }
  );
};

// Live waiter-call feed. Fires onNew(request) for calls that appear after mount.
export const subscribeToWaiterCalls = (restroid, onNew) => {
  const seen = new Set();
  let first = true;
  return poll(
    () => api.get('/orders/waiter').then((r) => r.data),
    (rows) => {
      for (const w of rows) {
        if (!seen.has(w.id)) { seen.add(w.id); if (!first) onNew?.(w); }
      }
      const ids = new Set(rows.map((w) => w.id));
      for (const id of [...seen]) if (!ids.has(id)) seen.delete(id);
      first = false;
    }
  );
};

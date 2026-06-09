/**
 * Supabase Realtime — replaces Socket.io for live updates.
 *
 * Enable Realtime on these tables in Supabase Dashboard:
 * Database → Replication → enable for: orders, waiterrequests
 */
import { supabase } from './supabase';

let _seq = 0;

export const subscribeToOrders = (restroid, onNew, onUpdate) => {
  const id = ++_seq;
  const channel = supabase
    .channel(`orders:${restroid}:${id}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'orders',
      filter: `restroid=eq.${restroid}`,
    }, (payload) => onNew?.(payload.new))
    .on('postgres_changes', {
      event: 'UPDATE',
      schema: 'public',
      table: 'orders',
      filter: `restroid=eq.${restroid}`,
    }, (payload) => onUpdate?.(payload.new))
    .subscribe();

  return () => supabase.removeChannel(channel);
};

export const subscribeToWaiterCalls = (restroid, onNew) => {
  const id = ++_seq;
  const channel = supabase
    .channel(`waiter:${restroid}:${id}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'waiterrequests',
      filter: `restroid=eq.${restroid}`,
    }, (payload) => onNew?.(payload.new))
    .subscribe();

  return () => supabase.removeChannel(channel);
};

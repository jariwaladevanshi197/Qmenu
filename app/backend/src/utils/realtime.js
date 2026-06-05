// Supabase Realtime broadcast — replaces Socket.io for serverless deployments
// The frontend subscribes to Supabase channels directly.
// We just do DB writes here; Supabase Realtime auto-broadcasts the changes.
// These are no-ops for the API — real-time is handled by Supabase on the client.

export const emitNewOrder    = () => {};
export const emitOrderUpdate = () => {};
export const emitWaiterCall  = () => {};

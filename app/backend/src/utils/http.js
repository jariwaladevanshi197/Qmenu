// Small helpers for consistent error handling across controllers.

// Operational error carrying an HTTP status. Thrown by controllers/services;
// caught by the global error handler which trusts its message and status.
export class AppError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.isOperational = true;
  }
}

// Standard 500 responder for controller catch-blocks: log the real error
// server-side, return a generic message in production so internals/DB details
// don't leak to clients.
export function serverError(res, e) {
  console.error(e);
  const isProd = process.env.NODE_ENV === "production";
  res.status(500).json({ error: isProd ? "Internal server error" : e?.message || "Internal server error" });
}

// Wrap an async route handler so thrown/rejected errors reach the global
// error handler (Express 4 doesn't forward async rejections automatically).
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

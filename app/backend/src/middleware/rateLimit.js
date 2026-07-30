import rateLimit from 'express-rate-limit';

// NOTE: these limiters use in-memory storage. On a long-running server (Railway)
// they work as intended. On serverless (Vercel) each instance has its own memory,
// so limits are per-instance — use a shared store (Redis) if strict global limits
// are required there.

const json = (res, msg) => res.status(429).json({ error: msg });

// General API cap — generous, guards against abuse/scraping.
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 600,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => json(res, 'Too many requests. Please slow down and try again shortly.'),
});

// Strict cap for authentication endpoints — mitigates brute-force.
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // only failed logins count toward the limit
  handler: (_req, res) => json(res, 'Too many login attempts. Please try again in a few minutes.'),
});

// Cap for public write endpoints (order placement, feedback, waiter calls).
export const publicWriteLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 40,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => json(res, 'Too many requests. Please wait a moment and try again.'),
});

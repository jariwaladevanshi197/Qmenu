// Fail fast on missing critical configuration instead of erroring at first use.
const REQUIRED = ['JWT_SECRET', 'DATABASE_URL'];

export function validateEnv() {
  const missing = REQUIRED.filter((k) => !process.env[k] || !String(process.env[k]).trim());
  if (missing.length) {
    // In serverless we can't crash the process cleanly, so throw a clear error.
    const msg = `Missing required environment variables: ${missing.join(', ')}`;
    console.error(`[env] ${msg}`);
    throw new Error(msg);
  }
  if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 16) {
    console.warn('[env] JWT_SECRET is short (<16 chars) — use a long random string in production.');
  }
}

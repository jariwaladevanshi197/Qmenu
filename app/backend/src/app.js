import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import restaurantRoutes from "./routes/restaurant.js";
import menuRoutes from "./routes/menu.js";
import orderRoutes from "./routes/orders.js";
import customerRoutes from "./routes/customer.js";
import uploadRoutes from "./routes/upload.js";
import staffRoutes from "./routes/staff.js";
import websiteRoutes from "./routes/website.js";
import staffOrderRoutes from "./routes/stafforder.js";
import { validateEnv } from "./utils/env.js";
import { apiLimiter, authLimiter } from "./middleware/rateLimit.js";
import { AppError } from "./utils/http.js";

dotenv.config();
validateEnv();

const app = express();
app.set("trust proxy", 1); // correct client IPs behind Vercel/Railway proxy (needed for rate limiting)

const isProd = process.env.NODE_ENV === "production";

// Allowed browser origins. CLIENT_URL may be a comma-separated list.
const allowedOrigins = [
  ...(process.env.CLIENT_URL ? process.env.CLIENT_URL.split(",") : []),
  "http://localhost:5173",
  "http://localhost:5174",
]
  .map((o) => o && o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      // Allow same-origin / server-to-server / curl (no Origin header).
      if (!origin) return cb(null, true);
      if (allowedOrigins.some((o) => origin === o || origin.startsWith(o))) {
        return cb(null, true);
      }
      // In non-prod, allow any localhost port for convenience.
      if (!isProd && /^http:\/\/localhost(:\d+)?$/.test(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Global rate limit; auth endpoints get a stricter limit layered on top.
app.use("/api", apiLimiter);
app.use("/api/auth", authLimiter);
app.use("/api/staff/login", authLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/website", websiteRoutes);
app.use("/api/staff-order", staffOrderRoutes);

app.get("/api/health", (_req, res) => res.json({ status: "ok", env: "vercel" }));

// Global error handler — must be defined AFTER all routes.
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err instanceof multer.MulterError) {
    const messages = {
      LIMIT_FILE_SIZE: "File is too large. Maximum allowed size is 2MB for logos and 5MB for images.",
      LIMIT_UNEXPECTED_FILE: "Unexpected file field.",
    };
    return res.status(400).json({ error: messages[err.code] || `Upload error: ${err.message}` });
  }

  if (err && err.message === "Not allowed by CORS") {
    return res.status(403).json({ error: "Origin not allowed" });
  }

  // Operational errors (thrown as AppError) carry a safe, intentional message.
  if (err instanceof AppError || err?.isOperational) {
    return res.status(err.status || 400).json({ error: err.message });
  }

  // Unexpected errors: log full detail server-side, return a generic message in prod.
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: isProd ? "Internal server error" : err?.message || "Internal server error",
  });
});

export default app;

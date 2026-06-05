import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

dotenv.config();

const app = express();

// Accept any origin in production (Vercel), restrict locally
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:5174",
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.length === 0) return cb(null, true);
    if (allowedOrigins.some((o) => origin.startsWith(o))) return cb(null, true);
    cb(null, true); // allow all in serverless
  },
  credentials: true,
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

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

export default app;

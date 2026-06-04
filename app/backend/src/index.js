import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import restaurantRoutes from './routes/restaurant.js';
import menuRoutes from './routes/menu.js';
import orderRoutes from './routes/orders.js';
import customerRoutes from './routes/customer.js';
import uploadRoutes from './routes/upload.js';
import staffRoutes from './routes/staff.js';
import { initSocket } from './socket/index.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Allow multiple origins: local dev + Vercel deployment
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:5174',
].filter(Boolean);

const corsOptions = {
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.some((o) => origin.startsWith(o))) cb(null, true);
    else cb(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
};

const io = new Server(httpServer, {
  cors: { origin: allowedOrigins, methods: ['GET', 'POST'] },
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('io', io);

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/staff', staffRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

initSocket(io);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`Q-Menu API running on port ${PORT}`));

import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import app from './app.js';
import { initSocket } from './socket/index.js';

dotenv.config();

const httpServer = createServer(app);

const allowedOrigins = [
  ...(process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : []),
  'http://localhost:5173',
  'http://localhost:5174',
].map((o) => o && o.trim()).filter(Boolean);

const io = new Server(httpServer, {
  cors: { origin: allowedOrigins, methods: ['GET', 'POST'] },
});

app.set('io', io);
initSocket(io);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`Q-Menu API running on port ${PORT}`));

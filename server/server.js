require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cookieParser = require('cookie-parser');

const app = express();
const server = http.createServer(app);

// Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:4173',
  process.env.FRONTEND_URL
].filter(Boolean);

// Middleware: Dynamic CORS headers for Express REST API
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Standard middleware
app.use(express.json());
app.use(cookieParser());

// Socket.IO setup with matching CORS config
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Connect to database
const connectDB = require('./config/db');
connectDB();

// Simple in-memory channels data
let channels = [{ id: 'general', name: 'General', messages: [] }];

// REST API routes
app.get('/api/channels', (req, res) => {
  res.json(channels);
});

app.post('/api/channels', (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Channel name required' });
  }
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    return res.status(400).json({ error: 'Channel name cannot be empty or whitespace' });
  }
  // Slugify function to generate channel id
  const slugify = (s) =>
    s
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .replace(/-{2,}/g, '-');
  const id = slugify(trimmed);
  if (!id) {
    return res.status(400).json({ error: 'Channel name is not valid for id generation' });
  }
  if (channels.find(c => c.id === id)) {
    return res.status(409).json({ error: 'Channel already exists' });
  }
  const channel = { id, name: trimmed, messages: [] };
  channels.push(channel);
  res.status(201).json(channel);
});

app.post('/api/channels/:id/messages', (req, res) => {
  const channel = channels.find(c => c.id === req.params.id);
  if (!channel) return res.status(404).send('Channel not found');
  const message = { text: req.body.text, user: req.body.user, timestamp: Date.now() };
  channel.messages.push(message);
  io.to(channel.id).emit('newMessage', { channelId: channel.id, message });
  res.status(201).json(message);
});

// Socket.IO events handling
io.on('connection', (socket) => {
  console.log('⚡ User connected:', socket.id);

  socket.on('joinChannel', (channelId) => {
    socket.join(channelId);
    console.log(`👤 Socket ${socket.id} joined channel: ${channelId}`);
  });

  socket.on('typing', ({ channelId, user }) => {
    console.log(`⌨️ ${user} is typing in ${channelId}`);
    socket.to(channelId).emit('user-typing', { channelId, user });
  });

  socket.on('stop-typing', ({ channelId, user }) => {
    console.log(`⌨️ ${user} stopped typing in ${channelId}`);
    socket.to(channelId).emit('user-stopped-typing', { channelId, user });
  });

  // Backward compatibility for older event names
  socket.on('typing-start', ({ channelId, user }) => {
    socket.to(channelId).emit('user-typing', { channelId, user });
  });

  socket.on('typing-stop', ({ channelId, user }) => {
    socket.to(channelId).emit('user-stopped-typing', { channelId, user });
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Authentication routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`ChatterSpace backend running on port ${PORT}`);
});

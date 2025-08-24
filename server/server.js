// Entry point for ChatterSpace backend
require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);

// ✅ Added CORS configuration for Socket.IO (keeping original structure)
// ✅ Added CORS support for typing indicators
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"]
  }
});

app.use(express.json());

// Database connection
const connectDB = require('./config/db');
connectDB();

// Simple in-memory channel/messages for demo
let channels = [{ id: 'general', name: 'General', messages: [] }];

// REST API: Get channels
app.get('/api/channels', (req, res) => {
  res.json(channels);
});

// REST API: Create a new channel
app.post('/api/channels', (req, res) => {
  const { name } = req.body;

  // Basic type check
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Channel name required' });
  }

  // Trim and ensure non-empty name
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    return res.status(400).json({ error: 'Channel name cannot be empty or whitespace' });
  }

  // Simple slugify to create a safe id from the name
  const slugify = (s) =>
    s
      .toLowerCase()
      .normalize('NFKD')                // decompose accents
      .replace(/[\u0300-\u036f]/g, '') // remove diacritics
      .replace(/[^a-z0-9]+/g, '-')     // non-alphanum -> hyphen
      .replace(/^-+|-+$/g, '')         // trim leading/trailing hyphens
      .replace(/-{2,}/g, '-');         // collapse multiple hyphens

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

// REST API: Post message to channel
app.post('/api/channels/:id/messages', (req, res) => {
  const channel = channels.find(c => c.id === req.params.id);
  if (!channel) return res.status(404).send('Channel not found');
  const message = { text: req.body.text, user: req.body.user, timestamp: Date.now() };
  channel.messages.push(message);
  io.to(channel.id).emit('newMessage', { channelId: channel.id, message });
  res.status(201).json(message);
});

// Socket.io: Enhanced connection handling
io.on('connection', (socket) => {
  console.log('⚡ User connected:', socket.id);

  // ✅ Join channel functionality
  socket.on('joinChannel', (channelId) => {
    socket.join(channelId);
    console.log(`👤 Socket ${socket.id} joined channel: ${channelId}`);
  });

  // ✅ Fixed: Correct event names matching frontend expectations
  socket.on('typing', ({ channelId, user }) => {
    console.log(`⌨️ ${user} is typing in ${channelId}`);
    socket.to(channelId).emit('user-typing', { channelId, user });
  });

  socket.on('stop-typing', ({ channelId, user }) => {
    console.log(`⌨️ ${user} stopped typing in ${channelId}`);
    socket.to(channelId).emit('user-stopped-typing', { channelId, user });
  });

  // ✅ Keep original typing indicator events (for backward compatibility)
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
// Entry point for ChatterSpace backend
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

// Simple in-memory channel/messages for demo
let channels = [{ id: 'general', name: 'General', messages: [] }];

// REST API: Get channels
app.get('/api/channels', (req, res) => {
  res.json(channels);
});

// REST API: Create a new channel
app.post('/api/channels', (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Channel name required' });
  }
  // Generate a simple id
  const id = name.toLowerCase().replace(/\s+/g, '-');
  if (channels.find(c => c.id === id)) {
    return res.status(409).json({ error: 'Channel already exists' });
  }
  const channel = { id, name, messages: [] };
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

// Socket.io: Join channel and receive messages
io.on('connection', (socket) => {
  socket.on('joinChannel', (channelId) => {
    socket.join(channelId);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`ChatterSpace backend running on port ${PORT}`);
});

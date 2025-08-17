import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './theme.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const socket = io();

export default function App() {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [user] = useState('User1');
  const [theme, setTheme] = useState('light');

  // Load channels
  useEffect(() => {
    fetch('/api/channels')
      .then(res => res.json())
      .then(setChannels);
  }, []);

  // Load and apply theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle light/dark theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Handle real-time messages and channel join
  useEffect(() => {
    socket.emit('joinChannel', selectedChannel);
    const channel = channels.find(c => c.id === selectedChannel);
    setMessages(channel ? channel.messages : []);

    const handleMessage = ({ channelId, message }) => {
      if (channelId === selectedChannel) {
        setMessages(msgs => [...msgs, message]);
      }
    };

    socket.on('newMessage', handleMessage);
    return () => socket.off('newMessage', handleMessage);
  }, [selectedChannel, channels]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await fetch(`/api/channels/${selectedChannel}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, user })
    });
    setText('');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: 200, borderRight: '1px solid var(--border-color)', padding: 10 }}>
        <h3>Channels</h3>
        <ul>
          {channels.map(c => (
            <li key={c.id}>
              <button onClick={() => setSelectedChannel(c.id)}>{c.name}</button>
            </li>
          ))}
        </ul>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const name = prompt('Enter new channel name:');
            if (!name) return;
            const res = await fetch('/api/channels', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name })
            });
            if (res.ok) {
              const newChannel = await res.json();
              setChannels(chs => [...chs, newChannel]);
            } else {
              alert('Channel creation failed');
            }
          }}
        >
          <button type="submit" style={{ marginTop: 10 }}>+ Create Channel</button>
        </form>

        {/* Theme Toggle with Sun/Moon Icon */}
        <div style={{ marginTop: 20 }}>
          <button onClick={toggleTheme} style={{ fontSize: '1.5rem' }}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: 20 }}>
        <h2>{selectedChannel}</h2>
        <div style={{
          height: '80%',
          overflowY: 'auto',
          border: '1px solid var(--border-color)',
          marginBottom: 10,
          padding: 10
        }}>
          {messages.map((m, i) => (
            <div key={i}><b>{m.user}</b>: {m.text}</div>
          ))}
        </div>
        <form onSubmit={sendMessage} style={{ display: 'flex' }}>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type a message..."
            style={{ flex: 1, marginRight: 10 }}
          />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

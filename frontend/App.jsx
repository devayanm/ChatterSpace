import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import './styles.css';

// Connect to the backend server
const socket = io('http://localhost:5000', {
  withCredentials: false,
  transports: ['websocket', 'polling']
});

// List of available users for demo
const USERS = ['User1', 'User2', 'User3', 'User4', 'User5'];

export default function App() {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [user, setUser] = useState('User1');
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  
  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Simulate typing indicator
  const handleTyping = () => {
    setIsTyping(true);
    
    // Clear previous timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    // Set new timeout to hide typing indicator after 2 seconds
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  useEffect(() => {
    setLoading(true);
    fetch('/api/channels')
      .then(res => res.json())
      .then(data => {
        setChannels(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching channels:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    socket.emit('joinChannel', selectedChannel);
    const channel = channels.find(c => c.id === selectedChannel);
    setMessages(channel ? channel.messages : []);
    socket.on('newMessage', ({ channelId, message }) => {
      if (channelId === selectedChannel) {
        setMessages(msgs => [...msgs, message]);
        // Scroll to bottom when new message arrives
        setTimeout(scrollToBottom, 100);
      }
    });
    return () => socket.off('newMessage');
  }, [selectedChannel, channels]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent empty messages
    
    try {
      await fetch(`/api/channels/${selectedChannel}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, user })
      });
      setText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="app-container">
      {/* User selection in top right */}
      <div className="user-selection">
        <span className="user-label">You are:</span>
        <select 
          className="user-select"
          value={user} 
          onChange={(e) => setUser(e.target.value)}
        >
          {USERS.map(u => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>

      {/* Sidebar with channels */}
      <aside className="sidebar">
        <h3>Channels</h3>
        <ul className="channels-list">
          {channels.map(c => (
            <li key={c.id} className="channel-item">
              <button 
                className={`channel-button ${selectedChannel === c.id ? 'active' : ''}`}
                onClick={() => setSelectedChannel(c.id)}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const name = prompt('Enter new channel name:');
            if (!name) return;
            try {
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
            } catch (error) {
              console.error('Error creating channel:', error);
              alert('Channel creation failed');
            }
          }}
        >
          <button type="submit" className="create-channel-button">+ Create Channel</button>
        </form>
      </aside>

      {/* Main content area */}
      <main className="main-content">
        <h2 className="channel-header">{selectedChannel}</h2>
        <div className="messages-container">
          {loading ? (
            <div className="shimmer" style={{ height: '50px', borderRadius: '8px', margin: '10px 0' }}></div>
          ) : messages.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', color: 'var(--color-light-grey)' }}>
              No messages yet. Be the first to send a message!
            </div>
          ) : (
            messages.map((m, i) => (
              <div key={i} className="message">
                <div className="message-header">
                  <span className="message-username">{m.user}</span>
                  <span className="message-timestamp">{formatTime(m.timestamp)}</span>
                </div>
                <div className="message-text">{m.text}</div>
              </div>
            ))
          )}
          
          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={sendMessage} className="message-form">
          <input 
            className="message-input"
            value={text} 
            onChange={e => {
              setText(e.target.value);
              handleTyping();
            }} 
            placeholder="Type a message..." 
            autoFocus
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </main>
    </div>
  );
}

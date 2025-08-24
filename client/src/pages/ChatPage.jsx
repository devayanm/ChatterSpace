import React, { useState } from 'react';
import Footer from '../components/Footer';
import { 
  Hash, 
  Send, 
  Smile, 
  Paperclip, 
  Settings, 
  Bell,
  Search,
  MoreVertical,
  Users,
  MessageCircle,
  Plus,
  Menu,
  X
} from 'lucide-react';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const channels = [
    { id: 1, name: 'general', unread: 0, active: true },
    { id: 2, name: 'development', unread: 3, active: false },
    { id: 3, name: 'design', unread: 0, active: false },
    { id: 4, name: 'random', unread: 1, active: false },
  ];

  const messages = [
    {
      id: 1,
      user: 'Alice Johnson',
      avatar: '👩‍💻',
      content: 'Hey everyone! Just pushed the new footer component. What do you think?',
      timestamp: '2:34 PM',
      reactions: [{ emoji: '👍', count: 3 }, { emoji: '🔥', count: 1 }]
    },
    {
      id: 2,
      user: 'Bob Smith',
      avatar: '👨‍🎨',
      content: 'Looks amazing! The responsive design works perfectly across all screen sizes.',
      timestamp: '2:35 PM',
      reactions: [{ emoji: '✅', count: 2 }]
    },
    {
      id: 3,
      user: 'Charlie Davis',
      avatar: '👨‍💼',
      content: 'I love the social media integration and the newsletter signup. Great attention to detail!',
      timestamp: '2:37 PM',
      reactions: []
    }
  ];

  return (
    <div className="h-screen bg-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center space-x-3">
            <Hash className="w-5 h-5 text-slate-400" />
            <span className="text-white font-semibold">general</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:relative z-30 w-64 bg-slate-800 border-r border-slate-700 transition-transform duration-200 ease-in-out
        `}>
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold">ChatterSpace</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-sm font-medium px-2 py-1">
                <span>CHANNELS</span>
                <Plus className="w-4 h-4 cursor-pointer hover:text-white" />
              </div>
              
              {channels.map(channel => (
                <div
                  key={channel.id}
                  className={`
                    flex items-center justify-between px-2 py-1.5 rounded cursor-pointer transition-colors
                    ${channel.active ? 'bg-slate-700 text-white' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}
                  `}
                >
                  <div className="flex items-center space-x-2">
                    <Hash className="w-4 h-4" />
                    <span className="text-sm">{channel.name}</span>
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                      {channel.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-slate-400 text-sm font-medium px-2 py-1">
                <span>ONLINE</span>
                <span className="text-xs">3</span>
              </div>
              <div className="space-y-2 mt-2">
                {['Alice Johnson', 'Bob Smith', 'Charlie Davis'].map((user, index) => (
                  <div key={index} className="flex items-center space-x-2 px-2 py-1 text-slate-400 hover:text-white cursor-pointer">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">
                      {['👩‍💻', '👨‍🎨', '👨‍💼'][index]}
                    </div>
                    <span className="text-sm">{user}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div key={message.id} className="flex space-x-3 group hover:bg-slate-800/50 p-2 rounded">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-lg">
                  {message.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-white">{message.user}</span>
                    <span className="text-xs text-slate-400">{message.timestamp}</span>
                  </div>
                  <p className="text-slate-300">{message.content}</p>
                  {message.reactions.length > 0 && (
                    <div className="flex space-x-1 mt-2">
                      {message.reactions.map((reaction, index) => (
                        <button
                          key={index}
                          className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs flex items-center space-x-1 transition-colors"
                        >
                          <span>{reaction.emoji}</span>
                          <span className="text-slate-300">{reaction.count}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-white transition-all">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex items-center space-x-3 bg-slate-700 rounded-lg px-4 py-3">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message #general"
                className="flex-1 bg-transparent text-white placeholder-slate-400 focus:outline-none"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && message.trim()) {
                    // Handle send message
                    setMessage('');
                  }
                }}
              />
              <button className="text-slate-400 hover:text-white transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 rounded transition-colors ${
                  message.trim() 
                    ? 'bg-purple-500 text-white hover:bg-purple-600' 
                    : 'text-slate-400'
                }`}
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Members */}
        <aside className="hidden xl:block w-64 bg-slate-800 border-l border-slate-700 p-4">
          <div className="mb-4">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Members — 12
            </h3>
            <div className="space-y-2">
              {['Alice Johnson', 'Bob Smith', 'Charlie Davis', 'Diana Prince', 'Eve Wilson'].map((user, index) => (
                <div key={index} className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-slate-700 cursor-pointer">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">
                    {['👩‍💻', '👨‍🎨', '👨‍💼', '👩‍🔬', '👩‍🎤'][index]}
                  </div>
                  <span className="text-sm text-slate-300">{user}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer with chat variant */}
      <Footer variant="chat" />
    </div>
  );
};

export default ChatPage;

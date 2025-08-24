import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a request to the backend's logout endpoint
      const response = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Logged out successfully');
        // On success, redirect the user back to the login page
        navigate('/');
      } else {
        const data = await response.json();
        console.error('Logout failed:', data.message);
      }
    } catch (error) {
      console.error('Network error during logout:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white p-4">
      <header className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md mb-4">
        <h1 className="text-2xl font-bold">ChatterSpace</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
          onClick={handleLogout} // ⬅️ The logout function is now attached to the button
        >
          Logout
        </button>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <div className="flex h-full">
          {/* Channel list sidebar */}
          <aside className="w-1/4 bg-gray-800 rounded-lg p-4 mr-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Channels</h2>
            <ul className="space-y-2">
              <li className="bg-gray-700 p-2 rounded-md cursor-pointer"># general</li>
              <li className="p-2 rounded-md hover:bg-gray-700 cursor-pointer"># random</li>
              <li className="p-2 rounded-md hover:bg-gray-700 cursor-pointer"># ideas</li>
            </ul>
          </aside>
          
          {/* Main chat window */}
          <section className="flex-1 bg-gray-800 rounded-lg p-4 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4">
              {/* Message display area */}
              <div className="bg-gray-700 p-3 rounded-xl max-w-xs">
                <p className="font-semibold text-purple-300">User1</p>
                <p>Hello everyone! This is the main chat window.</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-xl max-w-xs">
                <p className="font-semibold text-blue-300">User2</p>
                <p>Glad to be here!</p>
              </div>
            </div>
            
            {/* Message input area */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type your message here..."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;

import React, { useEffect } from "react";
import io from "socket.io-client";
import AuthPage from "./pages/AuthPage";

// ✅ Connect socket to backend
const socket = io("http://localhost:5000"); // change to your backend URL

const App = () => {
  useEffect(() => {
    // Debugging: connection log
    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket.id);
    });

    // Listen for typing events
    socket.on("user-typing", ({ channelId, user }) => {
      console.log(`${user} is typing in ${channelId}...`);
    });

    socket.on("user-stopped-typing", ({ channelId, user }) => {
      console.log(`${user} stopped typing in ${channelId}`);
    });

    return () => {
      socket.off("connect");
      socket.off("user-typing");
      socket.off("user-stopped-typing");
    };
  }, []);

  return (
    <div>
      {/* Later you can conditionally render ChatPage after login */}
      <AuthPage socket={socket} />
    </div>
  );
};

export default App;

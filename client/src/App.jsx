import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

import AuthPage from "./pages/AuthPage";
import FeaturesPage from "./pages/FeaturesPage";
import GettingStartedPage from "./pages/GettingStartedPage";
import ContributingPage from "./pages/ContributingPage";
import CodeOfConductPage from "./pages/CodeOfConductPage";
import LicensePage from "./pages/LicensePage";
import TechStackPage from "./pages/TechStackPage";
import DocumentationPage from "./pages/DocumentationPage";
import IssuesPage from "./pages/IssuesPage";
import FeatureRequestsPage from "./pages/FeatureRequestsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import ChatPage from "./pages/ChatPage";
import AboutPage from "./pages/AboutPage";

import Signup from "./pages/signup.jsx";
import LoginAuth from "./pages/login.jsx";

// Socket connection (change URL as needed)
const socket = io("http://localhost:5000");

const App = () => {
  const [typingUsers, setTypingUsers] = useState(new Set());
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket.id);
    });

    socket.on("user-typing", ({ channelId, user }) => {
      setTypingUsers((prev) => new Set([...prev, user]));
    });

    socket.on("user-stopped-typing", ({ channelId, user }) => {
      setTypingUsers((prev) => {
        const newSet = new Set(prev);
        newSet.delete(user);
        return newSet;
      });
    });

    socket.on("user-authenticated", ({ user }) => {
      setCurrentUser(user);
    });

    return () => {
      socket.off("connect");
      socket.off("user-typing");
      socket.off("user-stopped-typing");
      socket.off("user-authenticated");
    };
  }, []);

  const emitTyping = (channelId = "general") => {
    if (currentUser && socket.connected) {
      socket.emit("typing-start", { channelId, user: currentUser });
    }
  };

  const emitStopTyping = (channelId = "general") => {
    if (currentUser && socket.connected) {
      socket.emit("typing-stop", { channelId, user: currentUser });
    }
  };

 
  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Development-only Typing Indicator Overlay */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-2 right-2 z-50 bg-black/50 text-white p-2 rounded text-xs">
          Socket: {socket.connected ? "🟢 Connected" : "🔴 Disconnected"}
          {typingUsers.size > 0 && (
            <div>Typing: {Array.from(typingUsers).join(", ")}</div>
          )}
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <AuthPage
              socket={socket}
              typingUtils={{ emitTyping, emitStopTyping, typingUsers, setCurrentUser }}
            />
          }
        />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
        <Route path="/contributing" element={<ContributingPage />} />
        <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
        <Route path="/license" element={<LicensePage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/feature-requests" element={<FeatureRequestsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/chat" element={<ChatPage socket={socket} />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/loginauth" element={<LoginAuth />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
};

export default App;

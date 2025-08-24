import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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

// ✅ Connect socket to backend
const socket = io("http://localhost:5000"); // change to your backend URL

const App = () => {
  // ✅ Added typing indicator state management
  const [typingUsers, setTypingUsers] = useState(new Set());
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Debugging: connection log
    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket.id);
    });

    // Listen for typing events
    socket.on("user-typing", ({ channelId, user }) => {
      console.log(`${user} is typing in ${channelId}...`);
      // ✅ Update typing users state
      setTypingUsers(prev => new Set([...prev, user]));
    });

    socket.on("user-stopped-typing", ({ channelId, user }) => {
      console.log(`${user} stopped typing in ${channelId}`);
      // ✅ Remove user from typing state
      setTypingUsers(prev => {
        const newSet = new Set(prev);
        newSet.delete(user);
        return newSet;
      });
    });

    // ✅ Handle user authentication for typing indicators
    socket.on("user-authenticated", ({ user }) => {
      setCurrentUser(user);
      console.log("User set for typing indicators:", user);
    });

    return () => {
      socket.off("connect");
      socket.off("user-typing");
      socket.off("user-stopped-typing");
      socket.off("user-authenticated");
    };
  }, []);

  // ✅ Helper functions for typing indicators
  const emitTyping = (channelId = 'general') => {
    if (currentUser && socket.connected) {
      socket.emit("typing-start", { channelId, user: currentUser });
    }
  };

  const emitStopTyping = (channelId = 'general') => {
    if (currentUser && socket.connected) {
      socket.emit("typing-stop", { channelId, user: currentUser });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          {/* Main Application - Auth Page with Footer */}
          <Route path="/" element={
            <AuthPage 
              socket={socket} 
              typingUtils={{ emitTyping, emitStopTyping, typingUsers, setCurrentUser }} 
            />
          } />
          
          {/* Internal Pages */}
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
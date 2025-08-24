import React, { useState } from "react";
import Chatbot from "./components/chatbot";
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Testimonials from "./components/testimonilas";
import Login from "./pages/login";
import Signup from "./pages/signup";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPage, setAuthPage] = useState(null); // null, "login", "signup"
  const [user, setUser] = useState(null); // Logged in user info

  // 🟢 Login handler
  const handleLogin = async (identifier, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
        credentials: "include", // Cookies for JWT
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        setUser(data.user);
        setAuthPage(null);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error during login");
    }
  };

  // 🟢 Signup handler
  const handleSignup = async (name, username, email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, email, password }),
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        setUser(data.user);
        setAuthPage(null);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error during signup");
    }
  };

  // 🟢 Logout handler
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setIsAuthenticated(false);
      setUser(null);
      setAuthPage(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar
        onLoginClick={() => setAuthPage("login")}
        onSignupClick={() => setAuthPage("signup")}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1">
        {!isAuthenticated ? (
          <div className="w-full">
            {authPage === "login" && (
              <div className="flex justify-center mt-8">
                <Login onLogin={handleLogin} />
              </div>
            )}

            {authPage === "signup" && (
              <div className="flex justify-center mt-8">
                <Signup onSignup={handleSignup} />
              </div>
            )}

            {!authPage && (
              <>
                <About />
                <Testimonials />
                <Footer />
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full p-6">
            <h1 className="text-3xl font-bold mb-4">Welcome Back 🚀</h1>
            <p className="text-gray-700">Hello, {user?.name}</p>
          </div>
        )}
      </div>

      {/* Chatbot always visible */}
      <Chatbot />
    </div>
  );
};

export default App;

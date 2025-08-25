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
  const [user] = useState(null); // Logged in user info (dummy for now)

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar
        onLoginClick={() => setAuthPage("login")}
        onSignupClick={() => setAuthPage("signup")}
        isAuthenticated={isAuthenticated}
        onLogout={() => setIsAuthenticated(false)}
      />

      {/* Main Content */}
      <div className="flex-1">
        {!isAuthenticated ? (
          <div className="w-full">
            {authPage === "login" && (
              <div className="flex justify-center mt-8">
                <Login />
              </div>
            )}

            {authPage === "signup" && (
              <div className="flex justify-center mt-8">
                <Signup />
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
            <p className="text-gray-700">Hello, {user?.name || "User"}</p>
          </div>
        )}
      </div>

      {/* Chatbot always visible */}
      <Chatbot />
    </div>
  );
};

export default App;

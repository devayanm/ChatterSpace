import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  MessageCircle,
  Users,
  Shield,
  Zap,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const AuthPage = ({ socket, typingUtils }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    displayName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setErrorMessage("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Forgot Password Submit Handler
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/forgotpassword`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setErrorMessage(data.message);
        setIsForgotPassword(false);
      } else {
        setErrorMessage(data.message || "Failed to send reset link.");
      }
    } catch (err) {
      setErrorMessage(
        "Could not connect to the server. Please check your network."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Main Auth Submit Handler (Login/Signup)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLogin) {
      if (!formData.email || !formData.password) {
        setErrorMessage("Email and password are required.");
        setIsLoading(false);
        return;
      }
    } else {
      if (
        !formData.email ||
        !formData.password ||
        !formData.username ||
        !formData.displayName
      ) {
        setErrorMessage("All fields are required to create an account.");
        setIsLoading(false);
        return;
      }
    }

    try {
      const endpoint = isLogin
        ? `${import.meta.env.VITE_API_URL}/api/auth/login`
        : `${import.meta.env.VITE_API_URL}/api/auth/signup`;
      const body = isLogin
        ? { identifier: formData.email, password: formData.password }
        : {
            name: formData.displayName,
            username: formData.username,
            email: formData.email,
            password: formData.password,
          };
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Authentication failed.");
      }

      if (socket && socket.connected) {
        const userName =
          data.user?.name ||
          formData.displayName ||
          formData.username ||
          formData.email;
        socket.emit("user-authenticated", {
          user: userName,
          timestamp: new Date().toISOString(),
        });
        if (typingUtils) typingUtils.setCurrentUser(userName);
      }

      if (isLogin) {
        navigate("/chat");
      } else {
        setIsLogin(true);
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Real-time Messaging",
      description: "Instant messaging with typing indicators and delivery status",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Structured Discussions",
      description: "Threaded conversations and organized topic channels",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Moderation",
      description: "Comprehensive moderation tools and role-based permissions",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Direct code embedding and API integration capabilities",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex-1 flex">
        {/* Left Panel */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12">
          <div className="max-w-md">
            <div className="flex items-center space-x-3 mb-8">
              <h1 className="text-3xl font-bold text-white">ChatterSpace</h1>
              {socket && socket.connected && (
                <div
                  className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                  title="Connected"
                />
              )}
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Next-generation chat & discussions platform
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Experience structured conversations, advanced moderation, and
              seamless integrations in one powerful platform.
            </p>
            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <div className="text-purple-300 group-hover:text-purple-200">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Panel - Auth */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">

            {/* Error message */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl border border-red-500 bg-red-900/40 flex items-center justify-between">
                <div className="flex items-center">
                  <XCircle className="w-5 h-5 text-red-400 mr-3" />
                  <p className="text-red-300 text-sm font-medium">
                    {errorMessage}
                  </p>
                </div>
                <button onClick={() => setErrorMessage("")}>
                  <XCircle className="w-4 h-4 text-red-300 hover:text-red-100" />
                </button>
              </div>
            )}

            {/* Forgot Password Form */}
            {isForgotPassword ? (
              <form onSubmit={handleForgotPassword}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/10 rounded-xl text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-xl"
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex bg-white/10 rounded-xl p-1 mb-8">
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2 ${
                      isLogin ? "bg-white text-black" : "text-white"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2 ${
                      !isLogin ? "bg-white text-black" : "text-white"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="space-y-6">
                  {!isLogin && (
                    <>
                      <input
                        type="text"
                        name="displayName"
                        value={formData.displayName}
                        onChange={handleInputChange}
                        placeholder="Display Name"
                        className="w-full px-4 py-3 bg-white/10 rounded-xl text-white"
                        required
                      />
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Username"
                        className="w-full px-4 py-3 bg-white/10 rounded-xl text-white"
                        required
                      />
                    </>
                  )}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/10 rounded-xl text-white"
                    required
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="w-full px-4 py-3 bg-white/10 rounded-xl text-white pr-12"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>
                {isLogin && (
                  <div className="flex justify-between items-center mt-3">
                    <label className="flex items-center text-sm text-gray-300">
                      <input type="checkbox" className="mr-2" /> Remember me
                    </label>
                    <button
                      type="button"
                      className="text-sm text-purple-300 hover:underline"
                      onClick={() => setIsForgotPassword(true)}
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}
                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl"
                >
                  {isLoading
                    ? isLogin
                      ? "Signing In..."
                      : "Creating..."
                    : isLogin
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer variant="auth" />
    </div>
  );
};

export default AuthPage;

import React, { useState } from 'react';
import { Eye, EyeOff, MessageCircle, Users, Shield, Zap, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ socket, typingUtils }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    displayName: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [demoMessage, setDemoMessage] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDemoMessageChange = (e) => {
    setDemoMessage(e.target.value);
    
    if (typingUtils && socket && socket.connected) {
      typingUtils.emitTyping('general');
      
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
      
      const timeout = setTimeout(() => {
        typingUtils.emitStopTyping('general');
      }, 1000);
      
      setTypingTimeout(timeout);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const endpoint = 'http://localhost:5000/api/auth/forgotpassword';

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: formData.email }),
        });

        const data = await response.json();

        if (response.ok) {
            // ⬅️ This is the key change. We now show the message directly from the server response.
            setError(data.message); 
            console.log('Password reset request successful:', data.message);
            setIsForgotPassword(false);
        } else {
            console.error('Password reset failed:', data.message);
            setError(data.message || 'Failed to send password reset link.');
        }
    } catch (err) {
        console.error('Network error:', err);
        setError('Could not connect to the server. Please check your network connection.');
    } finally {
        setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const endpoint = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/signup';

    try {
        const body = isLogin
            ? { identifier: formData.email, password: formData.password }
            : { name: formData.displayName, username: formData.username, email: formData.email, password: formData.password };

        console.log("Submitting form with data:", body);
        
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Success:', data);
            if (typingUtils) {
                typingUtils.setCurrentUser(data.user.name || data.user.username);
            }
            navigate('/chat');
        } else {
            console.error('Authentication Error:', data.message);
            setError(data.message || 'An unknown error occurred.');
        }
    } catch (error) {
        console.error('Server or Network Error:', error);
        setError('Could not connect to the server. Please check if the backend is running.');
    } finally {
        setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Real-time Messaging",
      description: "Instant messaging with typing indicators and delivery status"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Structured Discussions",
      description: "Threaded conversations and organized topic channels"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Moderation",
      description: "Comprehensive moderation tools and role-based permissions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Direct code embedding and API integration capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12">
          <div className="max-w-md">
            <div className="flex items-center space-x-3 mb-8">
              <h1 className="text-3xl font-bold text-white">ChatterSpace</h1>
              {socket && socket.connected && (
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" title="Connected to server"></div>
              )}
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Next-generation chat & discussions platform
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Experience structured conversations, advanced moderation, and seamless integrations in one powerful platform.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-200">
                    <div className="text-purple-300 group-hover:text-purple-200">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">ChatterSpace</h1>
                {socket && socket.connected && (
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Connected"></div>
                )}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              {error && (
                  <div className="bg-red-500/20 text-red-300 border border-red-400 rounded-lg p-3 mb-4 text-sm text-center">
                      {error}
                  </div>
              )}
              
              {isForgotPassword ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Forgot Password?</h2>
                    <p className="text-gray-400 text-sm">Enter your email to receive a password reset link.</p>
                  </div>
                  <form onSubmit={handleForgotPassword}>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : 'Send Reset Link'}
                      </button>
                    </div>
                  </form>
                  <p className="text-center text-gray-400 text-sm mt-6">
                    <button onClick={() => setIsForgotPassword(false)} className="text-purple-300 hover:text-purple-200 transition-colors duration-200 font-medium">
                      Back to Sign In
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <div className="flex bg-white/10 rounded-xl p-1 mb-8">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isLogin
                          ? 'bg-white text-gray-900 shadow-lg'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                        !isLogin
                          ? 'bg-white text-gray-900 shadow-lg'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      {!isLogin && (
                        <>
                          <div>
                            <label className="block text-white text-sm font-medium mb-2">
                              Display Name
                            </label>
                            <input
                              type="text"
                              name="displayName"
                              value={formData.displayName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                              placeholder="Your display name"
                              required={!isLogin}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white text-sm font-medium mb-2">
                              Username
                            </label>
                            <input
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                              placeholder="Choose a username"
                              required={!isLogin}
                            />
                          </div>
                        </>
                      )}

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 pr-12"
                            placeholder="Your password"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors duration-200"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      {isLogin && (
                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-purple-500 bg-white/10 border-white/20 rounded focus:ring-purple-400"
                            />
                            <span className="ml-2 text-sm text-gray-300">Remember me</span>
                          </label>
                          <button onClick={() => setIsForgotPassword(true)} className="text-sm text-purple-300 hover:text-purple-200 transition-colors duration-200 font-medium">
                            Forgot password?
                          </button>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                            {isLogin ? 'Signing In...' : 'Creating Account...'}
                          </div>
                        ) : (
                          isLogin ? 'Sign In' : 'Create Account'
                        )}
                      </button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-white/20"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-transparent text-gray-400">or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          className="flex items-center justify-center px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
                          onClick={() => console.log('Google login clicked')}
                        >
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </button>
                        <button
                          type="button"
                          className="flex items-center justify-center px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
                          onClick={() => console.log('GitHub login clicked')}
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>

            <p className="text-center text-gray-400 text-sm mt-6">
              {isLogin && !isForgotPassword ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => {
                    if (isForgotPassword) {
                        setIsForgotPassword(false);
                    } else {
                        setIsLogin(!isLogin);
                    }
                }}
                className="text-purple-300 hover:text-purple-200 transition-colors duration-200 font-medium"
              >
                {isForgotPassword ? 'Back to Sign In' : (isLogin ? 'Sign up' : 'Sign in')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

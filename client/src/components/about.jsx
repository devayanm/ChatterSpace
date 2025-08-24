import React, { useState, useEffect } from "react";
import { Bot, Zap, Shield, Sparkles, MessageCircle, Users, Globe, Cpu, Brain, Rocket } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Conversations",
      description: "Experience natural conversations with our advanced AI that understands context, emotions, and remembers your preferences.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Get instant responses with our optimized infrastructure. No waiting, just seamless real-time conversations.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your conversations are encrypted end-to-end. We never store personal data or sell your information.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Smart Chat",
      description: "From casual conversations to complex problem-solving, our AI adapts to your communication style and needs.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-User Support",
      description: "Create multiple chat sessions, organize conversations, and switch between different AI personalities.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Universal Access",
      description: "Available across all devices with seamless synchronization. Start on mobile, continue on desktop.",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const stats = [
    { value: "1M+", label: "Conversations", color: "text-cyan-400" },
    { value: "50K+", label: "Active Users", color: "text-purple-400" },
    { value: "99.9%", label: "Uptime", color: "text-green-400" },
    { value: "24/7", label: "Available", color: "text-yellow-400" }
  ];

  return (
    <section id='about' className="relative min-h-screen bg-black overflow-hidden">
      {/* Enhanced Space Background */}
      <div className="absolute inset-0">
        {/* Dynamic Stars */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Cosmic Nebulae */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-400/15 via-teal-500/8 to-transparent rounded-full animate-float"></div>
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-radial from-purple-600/20 via-pink-500/10 to-transparent rounded-full animate-drift"></div>
        </div>

        {/* Moving Constellations */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-300 rounded-full shadow-glow animate-constellation"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 4}s`,
                boxShadow: '0 0 10px rgba(103, 232, 249, 0.8)'
              }}
            />
          ))}
        </div>

        {/* Space Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        
        {/* Hero Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Animated Logo */}
          <div className="flex items-center justify-center mb-10">
            <div className="relative group">
              <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-500 animate-glow-pulse">
                <Bot className="w-14 h-14 text-white animate-bounce" />
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0">
                <div className="w-full h-full border-2 border-cyan-400/30 rounded-3xl animate-spin-slow"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-orbit shadow-glow"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-orbit-reverse shadow-glow"></div>
              </div>
              
              {/* Shadow Effect */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-black/40 rounded-3xl blur-2xl"></div>
            </div>
          </div>

          <h1 className="text-7xl font-black mb-8 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
            ChatterSpace
          </h1>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-2xl text-gray-200 leading-relaxed font-light">
              Welcome to the future of <span className="text-cyan-400 font-bold">AI-powered conversations</span>
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              ChatterSpace brings you intelligent conversations that feel natural, personal, and engaging. 
              Our advanced AI understands context, learns your preferences, and provides helpful responses 
              across any topic you can imagine.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium text-gray-300">Advanced AI Engine</span>
              </div>
              <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-gray-300">Smart & Adaptive</span>
              </div>
              <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-gray-300">Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`w-full max-w-7xl mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose ChatterSpace?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 transform hover:-translate-y-3 shadow-xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl shadow-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-400`}>
                    {feature.icon}
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-black/30 rounded-xl blur-lg"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Stats Section */}
        <div className={`w-full max-w-5xl mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-white mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Trusted by Thousands
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transform transition-all duration-500 ${
                    currentStat === index ? 'scale-110' : 'scale-100'
                  }`}
                >
                  <div className={`text-4xl font-black mb-2 ${stat.color} ${
                    currentStat === index ? 'animate-pulse' : ''
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  {currentStat === index && (
                    <div className="mt-2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Chatting?</h3>
            <p className="text-gray-400 mb-8">Join thousands of users already exploring the future of AI conversations</p>
            
            <button className="relative group px-12 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl text-white font-bold text-lg transition-all duration-400 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30">
              <span className="relative z-10 flex items-center space-x-3">
                <Rocket className="w-6 h-6" />
                <span>Launch ChatterSpace</span>
                <Sparkles className="w-6 h-6" />
              </span>
              
              {/* Button Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(10px) translateX(-5px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(50px); }
        }
        
        @keyframes constellation {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8), 0 0 80px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
          from { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
          to { transform: rotate(0deg) translateX(40px) rotate(0deg); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
          50% { text-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(34, 211, 238, 0.6); }
        }
        
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-drift { animation: drift 8s ease-in-out infinite; }
        .animate-constellation { animation: constellation 2s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-orbit { animation: orbit 8s linear infinite; }
        .animate-orbit-reverse { animation: orbit-reverse 6s linear infinite; }
        .animate-text-glow { animation: text-glow 4s ease-in-out infinite; }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px currentColor;
        }
      `}</style>
    </section>
  );
};

export default About;
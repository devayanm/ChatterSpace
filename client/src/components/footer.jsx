import React, { useState, useEffect } from "react";
import { Bot, Home, Info, Star, Mail, Github, Twitter, Linkedin, Zap, Shield, Users, Globe } from 'lucide-react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigationLinks = [
    { icon: <Home className="w-4 h-4" />, label: 'Home', href: '#home' },
    { icon: <Info className="w-4 h-4" />, label: 'About', href: '#about' },
    { icon: <Star className="w-4 h-4" />, label: 'Features', href: '#features' },
    { icon: <Star className="w-4 h-4" />, label: 'Testimonials', href: '#testimonials' },
    { icon: <Mail className="w-4 h-4" />, label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <Globe className="w-5 h-5" />, label: 'Website', color: 'hover:text-green-400' }
  ];

  const features = [
    { 
      icon: <Bot className="w-6 h-6" />, 
      title: 'Advanced AI', 
      desc: 'Next-gen conversational intelligence',
      gradient: 'from-blue-400 to-cyan-500'
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: 'Lightning Fast', 
      desc: 'Instant responses worldwide',
      gradient: 'from-yellow-400 to-orange-500'
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: 'Ultra Secure', 
      desc: 'End-to-end encryption',
      gradient: 'from-green-400 to-emerald-500'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: 'Global Community', 
      desc: 'Millions of active users',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const stats = [
    { value: '2M+', label: 'Conversations', color: 'text-cyan-400' },
    { value: '100K+', label: 'Active Users', color: 'text-purple-400' },
    { value: '99.99%', label: 'Uptime', color: 'text-green-400' },
    { value: '4.9★', label: 'User Rating', color: 'text-yellow-400' }
  ];

  return (
    <section id="footer">
      <footer 
        className="relative overflow-hidden bg-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dynamic 3D Background */}
        <div className="absolute inset-0">
          {/* Parallax Layers */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/80 to-purple-900/80"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          
          {/* 3D Space Elements */}
          <div className="absolute inset-0">
            {/* Dynamic Stars with Depth */}
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-twinkle-3d"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `translateZ(${Math.random() * 100}px)`,
                  filter: `blur(${Math.random() * 0.5}px)`,
                  opacity: Math.random() * 0.8 + 0.3
                }}
              />
            ))}
            
            {/* Floating 3D Orbs */}
            <div 
              className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-radial from-blue-500/30 via-cyan-400/20 to-transparent rounded-full blur-2xl animate-float-3d"
              style={{
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.03}px)`,
                filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))'
              }}
            />
            <div 
              className="absolute bottom-32 right-1/4 w-32 h-32 bg-gradient-radial from-purple-500/30 via-pink-400/20 to-transparent rounded-full blur-xl animate-drift-3d"
              style={{
                transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.04}px)`,
                filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.4))'
              }}
            />
            <div 
              className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-radial from-cyan-500/25 via-teal-400/15 to-transparent rounded-full blur-lg animate-pulse-3d"
              style={{
                transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.02}px)`,
                filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))'
              }}
            />
            
            {/* 3D Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px),
                  linear-gradient(45deg, rgba(147,51,234,0.2) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px, 80px 80px, 40px 40px',
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) perspective(1000px) rotateX(${mousePosition.y * 0.02}deg)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
            
            {/* Floating Geometric Shapes */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className={`absolute border-2 border-cyan-400/20 animate-rotate-3d ${
                  i % 3 === 0 ? 'w-6 h-6 rotate-45' : 
                  i % 3 === 1 ? 'w-8 h-8 rounded-full' : 
                  'w-4 h-4 border-purple-400/30'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 4}s`,
                  transform: `translateZ(${Math.random() * 50}px) rotateY(${Math.random() * 360}deg)`,
                  filter: `drop-shadow(0 0 10px ${i % 2 === 0 ? 'rgba(34, 211, 238, 0.3)' : 'rgba(168, 85, 247, 0.3)'})`
                }}
              />
            ))}
          </div>
          
          {/* Depth Layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        </div>

        {/* Main Content with 3D Transform */}
        <div 
          className="relative z-20 py-16"
          style={{
            transform: isHovered ? `perspective(1200px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)` : 'none',
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header Section with 3D Logo */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
              
              {/* 3D Logo */}
              <div className="flex items-center gap-4 mb-8 lg:mb-0 group">
                <div className="relative">
                  {/* Main Logo */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Bot className="w-10 h-10 text-white animate-bounce" />
                    
                    {/* 3D Depth Layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-3xl transform translate-x-1 translate-y-1 -z-10 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-800 rounded-3xl transform translate-x-2 translate-y-2 -z-20 opacity-40" />
                  </div>
                  
                  {/* Glowing Rings */}
                  <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-3xl animate-pulse" />
                  <div className="absolute inset-0 border border-purple-400/30 rounded-3xl animate-spin-slow" />
                  
                  {/* Orbiting Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full shadow-lg animate-orbit" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full shadow-lg animate-orbit-reverse" />
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="text-left">
                  <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-text-glow">
                    ChatterSpace
                  </h2>
                  <p className="text-gray-300 text-base font-medium">Next-Gen AI Conversations</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm">Online & Active</span>
                  </div>
                </div>
              </div>

              {/* Navigation with 3D Effect */}
              <nav className="mb-8 lg:mb-0">
                <ul className="flex flex-wrap gap-8 justify-center lg:justify-end">
                  {navigationLinks.map((link, index) => (
                    <li key={link.label} className="group relative">
                      <a 
                        href={link.href}
                        className="flex items-center gap-2 text-white hover:text-cyan-300 transition-all duration-300 text-lg font-medium transform group-hover:scale-110 group-hover:-translate-y-1"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="transform group-hover:rotate-12 transition-transform duration-300">
                          {link.icon}
                        </span>
                        {link.label}
                      </a>
                      
                      {/* 3D Underline */}
                      <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full" />
                      <div className="absolute -bottom-3 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full opacity-50 blur-sm" />
                      
                      {/* Hover Glow */}
                      <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                    </li>
                  ))}
                </ul>
              </nav>

              {/* 3D Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <div 
                    key={index}
                    className={`group relative w-12 h-12 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 cursor-pointer transform hover:scale-125 hover:rotate-12 border border-gray-700 hover:border-cyan-400/50`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {social.icon}
                    
                    {/* 3D Depth */}
                    <div className="absolute inset-0 bg-black/20 rounded-xl transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                    
                    {/* Hover Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-20" />
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid with 3D Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:rotate-1"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* 3D Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-black/30 rounded-2xl transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                  
                  {/* 3D Icon */}
                  <div className="relative mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-400`}>
                      {feature.icon}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-black/30 rounded-xl blur-md -z-10" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>

                  {/* 3D Border Glow */}
                  <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10" />
                </div>
              ))}
            </div>

            {/* Stats Section with 3D Counters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative text-center p-6 bg-black/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:bg-black/80 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                >
                  {/* 3D Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-black/40 rounded-2xl transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                  
                  <div className={`text-3xl font-black mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-20" />
                </div>
              ))}
            </div>

            {/* Bottom Section with 3D Borders */}
            <div className="relative border-t border-gray-700/50 pt-8">
              {/* 3D Border Effect */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <p className="text-gray-300 text-sm mb-2">
                    © {new Date().getFullYear()} ChatterSpace. All rights reserved.
                  </p>
                  <p className="text-cyan-400 text-sm font-medium flex items-center justify-center lg:justify-start gap-2">
                    <span className="animate-pulse">❤️</span>
                    Made with passion for the future
                  </p>
                </div>
                
                <div className="flex gap-8 text-sm text-gray-400">
                  {['Terms of Service', 'Privacy Policy', 'Support Center'].map((link, index) => (
                    <a 
                      key={link} 
                      href="#" 
                      className="hover:text-cyan-300 transition-colors duration-300 relative group"
                    >
                      {link}
                      <div className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Border Effects */}
        <div className="absolute top-0 left-0 w-full h-1">
          <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-sm opacity-50" />
        </div>
        
        {/* 3D Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyan-400/60 opacity-80" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-purple-400/60 opacity-80" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyan-400/60 opacity-80" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-pink-400/60 opacity-80" />

        <style jsx>{`
          @keyframes twinkle-3d {
            0%, 100% { opacity: 0.3; transform: translateZ(0px) scale(1); }
            50% { opacity: 1; transform: translateZ(20px) scale(1.5); }
          }
          
          @keyframes float-3d {
            0%, 100% { transform: translateY(0px) translateX(0px) rotateY(0deg); }
            25% { transform: translateY(-20px) translateX(10px) rotateY(90deg); }
            75% { transform: translateY(10px) translateX(-10px) rotateY(270deg); }
          }
          
          @keyframes drift-3d {
            0%, 100% { transform: translateX(0px) rotateZ(0deg); }
            50% { transform: translateX(30px) rotateZ(180deg); }
          }
          
          @keyframes pulse-3d {
            0%, 100% { transform: scale(1) rotateX(0deg); }
            50% { transform: scale(1.2) rotateX(180deg); }
          }
          
          @keyframes rotate-3d {
            0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
            33% { transform: rotateX(120deg) rotateY(120deg) rotateZ(0deg); }
            66% { transform: rotateX(240deg) rotateY(240deg) rotateZ(180deg); }
            100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
          }
          
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
          }
          
          @keyframes orbit-reverse {
            from { transform: rotate(360deg) translateX(35px) rotate(-360deg); }
            to { transform: rotate(0deg) translateX(35px) rotate(0deg); }
          }
          
          @keyframes text-glow {
            0%, 100% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
            50% { text-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(34, 211, 238, 0.6); }
          }
          
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-twinkle-3d { animation: twinkle-3d 3s ease-in-out infinite; }
          .animate-float-3d { animation: float-3d 8s ease-in-out infinite; }
          .animate-drift-3d { animation: drift-3d 10s ease-in-out infinite 2s; }
          .animate-pulse-3d { animation: pulse-3d 6s ease-in-out infinite 1s; }
          .animate-rotate-3d { animation: rotate-3d 12s linear infinite; }
          .animate-orbit { animation: orbit 6s linear infinite; }
          .animate-orbit-reverse { animation: orbit-reverse 8s linear infinite; }
          .animate-text-glow { animation: text-glow 4s ease-in-out infinite; }
          .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
          .animate-spin-slow { animation: spin-slow 20s linear infinite; }
          
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}</style>
      </footer>
    </section>
  );
};

export default Footer;
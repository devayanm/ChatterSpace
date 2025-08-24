import React, { useState, useEffect } from "react";
import { Quote, Star, Rocket, Zap, Heart, Sparkles, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const reviews = [
    {
      name: "Rahul Verma",
      feedback:
        "ChatterSpace is absolutely mind-blowing! It feels like I'm communicating with an advanced alien intelligence. The quantum responses are instantaneous and incredibly intuitive.",
      role: "Quantum Software Engineer",
      avatar: "RV",
      rating: 5,
      planet: "Mars Colony",
      gradient: "from-cyan-400 to-blue-500",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      name: "Priya Sharma",
      feedback:
        "The holographic interface is stunning! This AI assistant has revolutionized my daily workflow across multiple dimensions. It's like having a personal cosmic advisor.",
      role: "Interdimensional Student",
      avatar: "PS",
      rating: 5,
      planet: "Jupiter Station",
      gradient: "from-purple-400 to-pink-500",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      name: "Aman Gupta",
      feedback:
        "The neural integration with Gemini AI creates an unprecedented user experience. This isn't just a chatbot - it's a gateway to infinite possibilities in communication.",
      role: "Cosmic Freelancer",
      avatar: "AG",
      rating: 5,
      planet: "Saturn Ring Base",
      gradient: "from-green-400 to-emerald-500",
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "Ananya Singh",
      feedback:
        "ChatterSpace has transformed how I connect with beings across the galaxy. The quantum encryption gives me peace of mind while exploring new dimensions of conversation.",
      role: "Space Explorer",
      avatar: "AS",
      rating: 5,
      planet: "Alpha Centauri",
      gradient: "from-yellow-400 to-orange-500",
      icon: <Heart className="w-5 h-5" />
    },
    {
      name: "Vikash Kumar",
      feedback:
        "The AI's emotional intelligence is remarkable. It understands context across different realities and provides insights that feel truly human - yet somehow more advanced.",
      role: "Reality Architect",
      avatar: "VK",
      rating: 5,
      planet: "Nebula Outpost",
      gradient: "from-indigo-400 to-purple-500",
      icon: <Star className="w-5 h-5" />
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative min-h-screen bg-black overflow-hidden py-20">
      {/* Animated Space Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>

        {/* Nebula effects */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-purple-600/15 via-transparent to-cyan-600/15 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-600/15 via-transparent to-blue-600/15 rounded-full animate-spin-reverse"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-black/30 rounded-2xl blur-xl -z-10"></div>
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-spin-slow"></div>
            </div>
          </div>

          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-glow">
            Galactic Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Voices from across the cosmos share their experiences with 
            <span className="text-cyan-400 font-bold"> ChatterSpace</span>
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className={`relative mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-cyan-500/20 p-12 shadow-2xl hover:border-cyan-400/50 transition-all duration-500">
              {/* 3D card effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              {/* Quote decoration */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Testimonial content */}
              <div className="text-center">
                {/* User Avatar */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className={`w-24 h-24 bg-gradient-to-br ${reviews[currentIndex].gradient} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl`}>
                      {reviews[currentIndex].avatar}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-black/20 rounded-full blur-md -z-10"></div>
                    
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-black flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>

                {/* Feedback */}
                <blockquote className="text-2xl text-gray-200 leading-relaxed mb-8 font-light italic">
                  "{reviews[currentIndex].feedback}"
                </blockquote>

                {/* User info */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {reviews[currentIndex].name}
                  </h3>
                  <div className="flex items-center justify-center space-x-3 text-cyan-300">
                    {reviews[currentIndex].icon}
                    <span className="font-medium">{reviews[currentIndex].role}</span>
                  </div>
                  <p className="text-gray-400 text-sm">📍 {reviews[currentIndex].planet}</p>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-50 blur transition-all duration-500 -z-10"></div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-cyan-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mini testimonials grid */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={index}
                className="group relative p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-cyan-500/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                
                <div className="relative">
                  {/* Mini avatar */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${review.gradient} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-gray-400 text-sm">{review.role}</p>
                    </div>
                  </div>

                  {/* Mini rating */}
                  <div className="flex space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Mini feedback */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{review.feedback.slice(0, 100)}..."
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-300 mb-6">Ready to join the cosmic conversation?</p>
          <button className="relative group px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl text-white font-bold hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
            <span className="relative z-10 flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Share Your Experience</span>
              <Sparkles className="w-5 h-5" />
            </span>
            
            <div className="absolute -bottom-2 -right-2 inset-0 bg-black/30 rounded-2xl blur-md group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 -z-10"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
          50% { text-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(236, 72, 153, 0.6); }
        }
        
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Testimonials;
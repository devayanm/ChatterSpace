import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const onLoginClick = () => {
    navigate("/loginauth");
  };

  const onSignupClick = () => {
    navigate("/signup");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">ChatterSpace</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-purple-300 transition">
              Home
            </a>
            <a href="#" className="text-white hover:text-purple-300 transition">
              About
            </a>
            <a href="#" className="text-white hover:text-purple-300 transition">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="px-5 py-2 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={onSignupClick}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow hover:opacity-90 transition cursor-pointer"
            >
              Signup
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 transition"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 px-4 pb-4 space-y-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
            <a
              href="#"
              className="block text-white hover:text-purple-300 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-white hover:text-purple-300 transition"
            >
              About
            </a>
            <a
              href="#"
              className="block text-white hover:text-purple-300 transition"
            >
              Contact
            </a>
            <button
              onClick={onLoginClick}
              className="w-full text-center px-4 py-2 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={onSignupClick}
              className="w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold shadow hover:opacity-90 transition cursor-pointer"
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

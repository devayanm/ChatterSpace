// src/components/Navbar.jsx
import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

// importing useNavigate and useLocation
import { Link, useLocation, useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();
  const location = useLocation();
  const currentpath = location.pathname;
  // a condition to check whethere the current page is login/signup page
  const hideLogout = currentpath==="/authpage";

  const handleSignup = ()=>{
    navigate('/authpage');
  }

  // a function to handle Logout feature
  const handleLogoutuser =async ()=>{
        try {
      const response = await fetch(`http://localhost:5000/api/auth/logout`, {
        method: "GET", 
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        // a message to verify the logout which is send by backend
        console.log(data.message); 
        navigate("/authpage"); 
      } else {
        console.error("Logout failed:", data.message);
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">ChatterSpace</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/chat" className="text-white hover:text-purple-300 transition">Home</Link>
            <Link to="/about" className="text-white hover:text-purple-300 transition">About</Link>
            <Link to="/contact" className="text-white hover:text-purple-300 transition">Contact</Link>
            <button
              className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition" onClick={handleSignup}
            >
              Sign Up
            </button>

            {!hideLogout && <button className="ml-4 px-4 py-2 bg-gradient-to-r from-red-500 to-red-500 text-white rounded-lg hover:from-red-600 hover:to-red-600 transition" onClick={handleLogoutuser} >Log Out</button>}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-purple-300 transition">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 px-4 pb-4 space-y-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
            <a href="#" className="block text-white hover:text-purple-300 transition">Home</a>
            <a href="#" className="block text-white hover:text-purple-300 transition">About</a>
            <a href="#" className="block text-white hover:text-purple-300 transition">Contact</a>
            <button
        
              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition" onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

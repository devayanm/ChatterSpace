import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollToTopLink from '../components/ScrollToTopLink';
import { MessageCircle, Users, Shield, Zap, Hash, Bell, FileText, Image, Heart, Smartphone } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Channels & Threads",
      description: "Organize conversations with text-based channels and threaded discussions for better structure."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Markdown + Code Snippet Support",
      description: "Rich text formatting with full markdown support and syntax highlighting for code snippets."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Threaded Replies",
      description: "Keep discussions organized with nested replies and conversation threading."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Mentions & Notifications",
      description: "Stay connected with @mentions and real-time notification system."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Messaging",
      description: "Lightning-fast messaging powered by Socket.IO and WebSockets technology."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Moderation & Permissions",
      description: "Advanced moderation tools with role-based permissions and community management."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community-Specific Rooms",
      description: "Create dedicated spaces for different topics and community groups."
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "File & Image Sharing",
      description: "Share files, images, and media content seamlessly within conversations."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Message Reactions & Polls",
      description: "Express reactions with emojis and create interactive polls for community engagement."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile & Desktop Responsiveness",
      description: "Optimized experience across all devices with responsive design principles."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">ChatterSpace Features</h1>
              <p className="text-slate-400">Discover what makes ChatterSpace special</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">High-Level Features</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            ChatterSpace offers a comprehensive set of features designed to facilitate modern community conversations, 
            real-time collaboration, and seamless integration with existing platforms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors duration-200">
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-6">Additional Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">🌓 Light/Dark Mode</h4>
              <p className="text-slate-400">Customizable themes for comfortable viewing in any environment.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">🔗 API Integration</h4>
              <p className="text-slate-400">Integrate ChatterSpace into existing applications via REST APIs.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">📦 Direct Code Modules</h4>
              <p className="text-slate-400">Embed ChatterSpace components directly into your codebase.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">⚡ High Performance</h4>
              <p className="text-slate-400">Optimized for speed and scalability with modern web technologies.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-slate-400 mb-8">Join the ChatterSpace community and start building amazing conversations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollToTopLink 
              to="/getting-started" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started
            </ScrollToTopLink>
            <a 
              href="https://github.com/devayanm/ChatterSpace" 
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default FeaturesPage;

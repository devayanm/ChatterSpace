import React from 'react';
import Footer from '../components/Footer';
import { 
  Book, 
  Zap, 
  Code, 
  Download, 
  Play, 
  Settings, 
  Users, 
  MessageCircle,
  Database,
  Globe,
  Shield,
  FileText,
  ExternalLink
} from 'lucide-react';

const DocumentationPage = () => {
  const documentationSections = [
    {
      title: "Quick Start Guide",
      icon: <Zap className="w-6 h-6" />,
      color: "text-yellow-400",
      description: "Get ChatterSpace running in minutes",
      items: [
        "Prerequisites and system requirements",
        "Installation steps for client and server",
        "Environment configuration",
        "First-time setup and testing"
      ]
    },
    {
      title: "API Documentation", 
      icon: <Code className="w-6 h-6" />,
      color: "text-blue-400",
      description: "Complete API reference and endpoints",
      items: [
        "Authentication endpoints",
        "Real-time messaging APIs",
        "User management",
        "WebSocket events and handlers"
      ]
    },
    {
      title: "Database Schema",
      icon: <Database className="w-6 h-6" />,
      color: "text-green-400", 
      description: "MongoDB collections and data models",
      items: [
        "User model structure",
        "Message collections",
        "Room and channel organization",
        "Indexing and performance optimization"
      ]
    },
    {
      title: "Frontend Architecture",
      icon: <Globe className="w-6 h-6" />,
      color: "text-purple-400",
      description: "React component structure and state management",
      items: [
        "Component hierarchy",
        "State management patterns",
        "Real-time UI updates",
        "Responsive design implementation"
      ]
    },
    {
      title: "Security & Authentication",
      icon: <Shield className="w-6 h-6" />,
      color: "text-red-400",
      description: "Security measures and authentication flow",
      items: [
        "JWT token implementation",
        "Password hashing and validation",
        "CORS configuration",
        "Rate limiting and security headers"
      ]
    },
    {
      title: "Deployment Guide",
      icon: <Settings className="w-6 h-6" />,
      color: "text-orange-400",
      description: "Production deployment and configuration",
      items: [
        "Environment setup for production",
        "Docker containerization",
        "Database connection configuration",
        "SSL and domain setup"
      ]
    }
  ];

  const quickLinks = [
    { title: "Installation Guide", href: "/getting-started", icon: <Download className="w-4 h-4" /> },
    { title: "API Reference", href: "#api-docs", icon: <Code className="w-4 h-4" /> },
    { title: "Component Docs", href: "#components", icon: <FileText className="w-4 h-4" /> },
    { title: "Examples", href: "#examples", icon: <Play className="w-4 h-4" /> }
  ];

  const features = [
    {
      title: "Real-time Messaging",
      description: "Socket.IO powered instant messaging with typing indicators and presence status",
      code: `// Client-side Socket.IO implementation
socket.emit('join-room', roomId);
socket.on('new-message', (message) => {
  setMessages(prev => [...prev, message]);
});`
    },
    {
      title: "User Authentication",
      description: "JWT-based authentication with secure password hashing using bcrypt",
      code: `// Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ msg: 'No token' });
  // Token verification logic
};`
    },
    {
      title: "MongoDB Integration",
      description: "Mongoose ODM for structured data management and validation",
      code: `// User model schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Book className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Documentation</h1>
              <p className="text-slate-400">Complete guide to ChatterSpace development</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Developer Documentation 📚</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Welcome to the comprehensive ChatterSpace documentation. Here you'll find everything you need 
              to understand, develop, and contribute to ChatterSpace - from quick start guides to detailed 
              API references.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Quick Navigation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:transform hover:-translate-y-1 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-400 group-hover:text-blue-300">
                    {link.icon}
                  </div>
                  <span className="font-medium text-white group-hover:text-blue-300">
                    {link.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Documentation Sections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentationSections.map((section, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={section.color}>
                    {section.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <p className="text-slate-400 mb-4 text-sm">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Code Examples</h3>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                  <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
                <div className="bg-slate-900">
                  <pre className="p-6 text-sm text-slate-300 overflow-x-auto">
                    <code>{feature.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Project Structure</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <pre className="text-slate-300 text-sm font-mono leading-relaxed overflow-x-auto">
{`ChatterSpace/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images, fonts, etc.
│   │   └── App.jsx        # Main App component
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
│
├── server/                # Node.js backend application
│   ├── config/           # Database and app configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Express middleware
│   ├── models/           # MongoDB/Mongoose models
│   ├── routes/           # API routes
│   ├── package.json      # Backend dependencies
│   └── server.js         # Main server file
│
├── README.md             # Project overview and setup
├── CONTRIBUTING.md       # Contribution guidelines
├── CODE_OF_CONDUCT.md    # Community guidelines
└── LICENSE               # MIT License`}
            </pre>
          </div>
        </div>

        {/* Environment Variables */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Environment Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-green-400">Server Environment (.env)</h4>
              <pre className="text-slate-300 text-sm font-mono">
{`PORT=5000
MONGODB_URI=mongodb://localhost:27017/chatterspace
JWT_SECRET=your-secret-key
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000`}
              </pre>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Client Environment (.env)</h4>
              <pre className="text-slate-300 text-sm font-mono">
{`VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
VITE_APP_NAME=ChatterSpace
VITE_APP_VERSION=1.0.0`}
              </pre>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="https://github.com/devayanm/ChatterSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">GitHub Repository</h4>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
              <p className="text-slate-400 text-sm">
                Access the complete source code, report issues, and contribute to the project.
              </p>
            </a>

            <a 
              href="/contributing"
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Contributing Guide</h4>
                <Users className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
              <p className="text-slate-400 text-sm">
                Learn how to contribute code, report bugs, and help improve ChatterSpace.
              </p>
            </a>

            <a 
              href="/code-of-conduct"
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Code of Conduct</h4>
                <Shield className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
              <p className="text-slate-400 text-sm">
                Community guidelines and standards for respectful collaboration.
              </p>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 mr-3 text-blue-400" />
            Need Help?
          </h3>
          <p className="text-slate-400 mb-8">
            Can't find what you're looking for? We're here to help you get started with ChatterSpace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/issues" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Report an Issue
            </a>
            <a 
              href="mailto:devayan9689@gmail.com" 
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default DocumentationPage;

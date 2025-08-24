import React from 'react';
import Footer from '../components/Footer';
import { 
  Code, 
  Database, 
  Palette, 
  Shield, 
  Zap, 
  Globe, 
  Layers, 
  Server,
  Smartphone,
  Cloud
} from 'lucide-react';

const TechStackPage = () => {
  const frontendTech = [
    {
      name: "React 19.1.1",
      description: "A JavaScript library for building user interfaces with modern features",
      icon: <Code className="w-8 h-8" />,
      color: "text-blue-400",
      category: "Frontend Framework"
    },
    {
      name: "Vite 6.0.1", 
      description: "Next generation frontend tooling for blazing fast development",
      icon: <Zap className="w-8 h-8" />,
      color: "text-yellow-400",
      category: "Build Tool"
    },
    {
      name: "Tailwind CSS 3.4.17",
      description: "A utility-first CSS framework for rapid UI development",
      icon: <Palette className="w-8 h-8" />,
      color: "text-cyan-400",
      category: "CSS Framework"
    },
    {
      name: "Lucide React",
      description: "Beautiful & consistent icon toolkit with 1000+ icons",
      icon: <Layers className="w-8 h-8" />,
      color: "text-purple-400",
      category: "Icons"
    }
  ];

  const backendTech = [
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      icon: <Server className="w-8 h-8" />,
      color: "text-green-400",
      category: "Runtime"
    },
    {
      name: "Express.js 4.21.1",
      description: "Fast, unopinionated, minimalist web framework for Node.js",
      icon: <Globe className="w-8 h-8" />,
      color: "text-gray-400",
      category: "Web Framework"
    },
    {
      name: "Socket.IO 4.8.1",
      description: "Real-time bidirectional event-based communication",
      icon: <Zap className="w-8 h-8" />,
      color: "text-orange-400",
      category: "Real-time Communication"
    },
    {
      name: "MongoDB 8.10.0",
      description: "NoSQL database for modern applications",
      icon: <Database className="w-8 h-8" />,
      color: "text-green-600",
      category: "Database"
    }
  ];

  const devTools = [
    {
      name: "ESLint 9.17.0",
      description: "Find and fix problems in JavaScript code",
      icon: <Shield className="w-8 h-8" />,
      color: "text-red-400",
      category: "Code Quality"
    },
    {
      name: "PostCSS 8.4.49",
      description: "A tool for transforming CSS with JavaScript",
      icon: <Palette className="w-8 h-8" />,
      color: "text-pink-400",
      category: "CSS Processing"
    },
    {
      name: "Nodemon 3.1.9",
      description: "Automatically restart node application when file changes detected",
      icon: <Server className="w-8 h-8" />,
      color: "text-yellow-500",
      category: "Development"
    }
  ];

  const features = [
    {
      title: "Real-time Communication",
      description: "Instant messaging with Socket.IO for seamless user experience",
      icon: <Zap className="w-6 h-6" />,
      tech: ["Socket.IO", "WebSockets", "Event-driven"]
    },
    {
      title: "Modern UI/UX",
      description: "Responsive design with Tailwind CSS and React components",
      icon: <Smartphone className="w-6 h-6" />,
      tech: ["React", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Scalable Architecture",
      description: "Modular backend with Express.js and MongoDB for scalability",
      icon: <Cloud className="w-6 h-6" />,
      tech: ["Express.js", "MongoDB", "RESTful APIs"]
    },
    {
      title: "Code Quality",
      description: "ESLint configuration ensures clean and maintainable code",
      icon: <Shield className="w-6 h-6" />,
      tech: ["ESLint", "Code Standards", "Best Practices"]
    }
  ];

  const TechCard = ({ tech }) => (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:transform hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className={`${tech.color} flex-shrink-0`}>
          {tech.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{tech.name}</h3>
            <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded-full">
              {tech.category}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{tech.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Technology Stack</h1>
              <p className="text-slate-400">Modern technologies powering ChatterSpace</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Built with Modern Tech 🚀</h2>
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              ChatterSpace is built using cutting-edge technologies that ensure performance, scalability, 
              and maintainability. Our tech stack combines the best of modern web development practices 
              with proven tools and frameworks.
            </p>
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Code className="w-6 h-6 mr-3 text-blue-400" />
            Frontend Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frontendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Server className="w-6 h-6 mr-3 text-green-400" />
            Backend Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-red-400" />
            Development Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devTools.map((tool, index) => (
              <TechCard key={index} tech={tool} />
            ))}
          </div>
        </div>

        {/* Architecture Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Architecture Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                    <p className="text-slate-400 mb-3">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tech.map((techItem, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-purple-900/50 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Version Information */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Current Versions</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400">Frontend</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">React</span>
                    <span className="text-slate-300">19.1.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vite</span>
                    <span className="text-slate-300">6.0.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tailwind CSS</span>
                    <span className="text-slate-300">3.4.17</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Lucide React</span>
                    <span className="text-slate-300">0.540.0</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-green-400">Backend</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Express.js</span>
                    <span className="text-slate-300">4.21.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Socket.IO</span>
                    <span className="text-slate-300">4.8.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">MongoDB</span>
                    <span className="text-slate-300">8.10.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mongoose</span>
                    <span className="text-slate-300">8.8.4</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-yellow-400">Development</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">ESLint</span>
                    <span className="text-slate-300">9.17.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">PostCSS</span>
                    <span className="text-slate-300">8.4.49</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Nodemon</span>
                    <span className="text-slate-300">3.1.9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">CORS</span>
                    <span className="text-slate-300">2.8.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why These Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Why These Technologies?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Performance First</h4>
                <p className="text-slate-400 text-sm">
                  React's virtual DOM and Vite's lightning-fast HMR ensure optimal development and 
                  runtime performance. Socket.IO provides efficient real-time communication.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h4 className="text-lg font-semibold mb-3 text-green-400">Developer Experience</h4>
                <p className="text-slate-400 text-sm">
                  Modern tooling with hot reload, TypeScript support, and comprehensive linting 
                  makes development fast and enjoyable.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Scalability</h4>
                <p className="text-slate-400 text-sm">
                  Express.js and MongoDB provide a solid foundation that can scale from prototype 
                  to production. Modular architecture supports team collaboration.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h4 className="text-lg font-semibold mb-3 text-orange-400">Community Support</h4>
                <p className="text-slate-400 text-sm">
                  All technologies have large, active communities, extensive documentation, and 
                  proven track records in production environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Code className="w-6 h-6 mr-3 text-purple-400" />
            Ready to Contribute?
          </h3>
          <p className="text-slate-400 mb-8">
            Get started with our modern tech stack and help build the future of real-time communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/getting-started" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started
            </a>
            <a 
              href="/contributing" 
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contribute Now
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default TechStackPage;

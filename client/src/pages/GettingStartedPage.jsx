import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { MessageCircle, Download, Code, Database, Zap, CheckCircle } from 'lucide-react';

const GettingStartedPage = () => {
  const prerequisites = [
    "Node.js (v18+ recommended)",
    "npm or yarn",
    "MongoDB (local or hosted)",
    "Git",
    "Basic knowledge of REST APIs, Socket.IO/WebSockets, and React"
  ];

  const steps = [
    {
      step: "1",
      title: "⭐ Star this Repository",
      description: "Show your support by starring the ChatterSpace repository on GitHub.",
      code: null
    },
    {
      step: "2", 
      title: "🍴 Fork the Repository",
      description: "Click the Fork button on GitHub to create your own copy of the project.",
      code: null
    },
    {
      step: "3",
      title: "🧑‍💻 Clone Your Fork",
      description: "Clone the repository to your local machine.",
      code: `git clone https://github.com/YOUR_USERNAME/ChatterSpace.git
cd ChatterSpace`
    },
    {
      step: "4",
      title: "🚀 Set Up Environment",
      description: "Copy the environment file and install dependencies.",
      code: `cp .env.example .env
npm install`
    },
    {
      step: "5",
      title: "🔧 Create a New Branch",
      description: "Create a new branch for your feature or contribution.",
      code: `git checkout -b feat/your-feature-name`
    },
    {
      step: "6",
      title: "💡 Work on Your Feature",
      description: "Follow the folder structure and keep code modular. Make your changes and improvements.",
      code: null
    },
    {
      step: "7",
      title: "✅ Commit Your Changes",
      description: "Commit your changes with descriptive messages.",
      code: `git add .
git commit -m "feat: add initial structure for XYZ"`
    },
    {
      step: "8",
      title: "📤 Push and Open a PR",
      description: "Push your branch and open a Pull Request on GitHub.",
      code: `git push origin feat/your-feature-name`
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
              <h1 className="text-3xl font-bold">Getting Started with ChatterSpace</h1>
              <p className="text-slate-400">Your journey to modern community conversations begins here</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">🏁 Getting Started</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Welcome to ChatterSpace! Follow these steps to set up your development environment and start contributing 
            to our modern, open-source community conversation platform.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
            ✅ Prerequisites
          </h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 mb-4">Before you begin, make sure you have the following installed:</p>
            <ul className="space-y-2">
              {prerequisites.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">🌟 How to Contribute</h3>
          <p className="text-slate-400 mb-8">We welcome contributions from everyone! Please follow these steps:</p>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-slate-400 mb-4">{step.description}</p>
                    {step.code && (
                      <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="w-6 h-6 mr-3 text-blue-400" />
            📁 Expected Folder Structure
          </h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 mb-4">Once implemented, the project will follow this modular structure:</p>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`/ChatterSpace
├── server/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── .env.example
│   ├── .env
│   ├── sockets/
│   └── server.js
├── client/
│   ├── components/
│   ├── pages/
│   │   └── AuthPage.jsx
│   ├── hooks/
│   └── App.jsx
├── utils/
├── .env.example
├── .env
└── README.md`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" />
            🧰 Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Frontend</h4>
              <ul className="space-y-2 text-slate-400">
                <li>• React + Vite</li>
                <li>• TailwindCSS</li>
                <li>• Socket.IO Client</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-green-400">Backend</h4>
              <ul className="space-y-2 text-slate-400">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MongoDB</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Real-time</h4>
              <ul className="space-y-2 text-slate-400">
                <li>• Socket.IO</li>
                <li>• WebSockets</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Deployment</h4>
              <ul className="space-y-2 text-slate-400">
                <li>• Render / Vercel</li>
                <li>• MongoDB Atlas</li>
                <li>• JWT Auth</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">🚀 Ready to Start?</h3>
          <p className="text-slate-400 mb-8">Now that you have everything set up, explore the codebase and start contributing!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/features" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Explore Features
            </a>
            <a 
              href="/contributing" 
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contributing Guide
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default GettingStartedPage;

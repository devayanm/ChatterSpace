import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { MessageCircle, Users, Code, GitBranch, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const ContributingPage = () => {
  const contributionSteps = [
    "⭐ Star the repository",
    "Fork the repo", 
    "Clone your fork locally",
    "Create a feature branch: git checkout -b feat/your-feature",
    "Make changes following the Code Style Guidelines",
    "Commit with descriptive messages",
    "Push your branch and open a Pull Request"
  ];

  const codeStyleGuidelines = [
    "Use ESLint for JavaScript linting",
    "Follow modular coding principles", 
    "Keep functions small and focused",
    "Write clear and descriptive variable names",
    "Add comments for complex logic",
    "Follow the existing code structure"
  ];

  const prGuidelines = [
    "Each PR should address a single issue/feature",
    "Add tests if applicable",
    "Update documentation",
    "Provide clear description of changes",
    "Link to relevant issues",
    "Ensure all checks pass"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Contributing to ChatterSpace</h1>
              <p className="text-slate-400">Join our community and help build the future of conversations</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Welcome Contributors! 🎉</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Thank you for considering contributing to <strong>ChatterSpace</strong>! We welcome all contributions, 
            from bug fixes to new features. This guide will help you get started with contributing to our 
            open-source community conversation platform.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="mb-16">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 mr-3 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">Before You Start</h3>
            </div>
            <p className="text-slate-300">
              Please take a moment to read through this contributing guide. It will help ensure that your 
              contributions are accepted quickly and efficiently.
            </p>
          </div>
        </div>

        {/* Contribution Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <GitBranch className="w-6 h-6 mr-3 text-green-400" />
            📌 Contribution Steps
          </h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <ol className="space-y-4">
              {contributionSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-slate-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Code Style Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="w-6 h-6 mr-3 text-blue-400" />
            Code Style Guidelines
          </h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 mb-4">Please follow these coding standards to maintain consistency:</p>
            <ul className="space-y-3">
              {codeStyleGuidelines.map((guideline, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PR Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-purple-400" />
            Pull Request Guidelines
          </h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 mb-4">When submitting a Pull Request, please ensure:</p>
            <ul className="space-y-3">
              {prGuidelines.map((guideline, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Types of Contributions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">🤝 Types of Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-green-400">🐛 Bug Fixes</h4>
              <p className="text-slate-400 text-sm">
                Help us squash bugs and improve the stability of ChatterSpace.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-blue-400">✨ New Features</h4>
              <p className="text-slate-400 text-sm">
                Implement new functionality and enhance the user experience.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-purple-400">📚 Documentation</h4>
              <p className="text-slate-400 text-sm">
                Improve documentation, add examples, and help others understand the code.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-yellow-400">🧪 Testing</h4>
              <p className="text-slate-400 text-sm">
                Write tests to ensure code quality and prevent regressions.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-red-400">🎨 Design</h4>
              <p className="text-slate-400 text-sm">
                Improve UI/UX, create mockups, and enhance visual design.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-cyan-400">💡 Ideas</h4>
              <p className="text-slate-400 text-sm">
                Share feature ideas and suggestions for improving ChatterSpace.
              </p>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">🌟 Community Guidelines</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 mb-4">
              We are committed to providing a welcoming and inclusive environment for all contributors. 
              Please read our <a href="/code-of-conduct" className="text-blue-400 hover:text-blue-300">Code of Conduct</a> before participating.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-400">✅ Do</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• Be respectful and inclusive</li>
                  <li>• Use welcoming and constructive language</li>
                  <li>• Accept differing viewpoints gracefully</li>
                  <li>• Focus on what's best for the community</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-400">❌ Don't</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• Use sexualized language or imagery</li>
                  <li>• Make personal attacks or insults</li>
                  <li>• Harass or discriminate against others</li>
                  <li>• Publish others' private information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Get Help */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help? 🤔</h3>
          <p className="text-slate-400 mb-8">
            Don't hesitate to ask for help! We're here to support you in your contribution journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/devayanm/ChatterSpace/issues" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report Issues
            </a>
            <a 
              href="https://github.com/devayanm/ChatterSpace/discussions" 
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discussions
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default ContributingPage;

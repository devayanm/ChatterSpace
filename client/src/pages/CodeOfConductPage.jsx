import React from 'react';
import Footer from '../components/Footer';
import { MessageCircle, Shield, Heart, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const CodeOfConductPage = () => {
  const standards = [
    "Being respectful and inclusive in all interactions",
    "Using welcoming and constructive language",
    "Accepting differing viewpoints and experiences gracefully", 
    "Gracefully accepting constructive criticism",
    "Focusing on what is best for the community",
    "Showing empathy towards other community members"
  ];

  const unacceptableBehavior = [
    "Harassment, discrimination, or exclusion of any kind",
    "Trolling, insulting, or derogatory comments", 
    "Personal attacks or political arguments",
    "Publishing others' private information without consent",
    "Sexualized language or imagery in any context",
    "Other conduct which could reasonably be considered inappropriate"
  ];

  const responsibilities = [
    "Clarify standards of acceptable behavior",
    "Take appropriate and fair corrective action",
    "Remove, edit, or reject contributions that violate this Code of Conduct",
    "Temporarily or permanently ban contributors for inappropriate behavior"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Code of Conduct</h1>
              <p className="text-slate-400">Building a welcoming and inclusive community</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Pledge 🤝</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              We are committed to providing a welcoming and respectful environment for everyone. We pledge to make 
              participation in our project a harassment-free experience for all, regardless of background or identity.
            </p>
          </div>
        </div>

        {/* Our Standards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
            Our Standards
          </h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 mb-6">Examples of behavior that contributes to a positive environment:</p>
            <ul className="space-y-3">
              {standards.map((standard, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{standard}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Unacceptable Behavior */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-red-400" />
            Unacceptable Behavior
          </h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 mb-6">Examples of unacceptable behavior include:</p>
            <ul className="space-y-3">
              {unacceptableBehavior.map((behavior, index) => (
                <li key={index} className="flex items-start">
                  <AlertTriangle className="w-5 h-5 mr-3 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{behavior}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scope */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="w-6 h-6 mr-3 text-blue-400" />
            Scope
          </h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-300 leading-relaxed">
              This Code of Conduct applies to all community spaces — both online and offline. This includes 
              GitHub repositories, issue trackers, discussions, social media, and any other forums created 
              by the project team. It also applies when an individual is representing the project or community 
              in public spaces.
            </p>
          </div>
        </div>

        {/* Enforcement */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-purple-400" />
            Enforcement
          </h3>
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Reporting Violations</h4>
              <p className="text-slate-300 mb-4">
                Violations can be reported by contacting the project team at: 
                <a href="mailto:devayan9689@gmail.com" className="text-blue-400 hover:text-blue-300 ml-1">
                  devayan9689@gmail.com
                </a>
              </p>
              <p className="text-slate-400 text-sm">
                All reports will be handled confidentially and reviewed promptly.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Project Maintainer Responsibilities</h4>
              <p className="text-slate-400 mb-4">Project maintainers are responsible to:</p>
              <ul className="space-y-2">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enforcement Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Enforcement Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-yellow-400">1. Correction</h4>
              <p className="text-slate-400 text-sm mb-2"><strong>Community Impact:</strong> Use of inappropriate language or other behavior deemed unprofessional.</p>
              <p className="text-slate-400 text-sm"><strong>Consequence:</strong> A private, written warning with clarification of violation and explanation of appropriate behavior.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-orange-400">2. Warning</h4>
              <p className="text-slate-400 text-sm mb-2"><strong>Community Impact:</strong> A violation through a single incident or series of actions.</p>
              <p className="text-slate-400 text-sm"><strong>Consequence:</strong> A warning with consequences for continued behavior and temporary interaction restrictions.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-red-400">3. Temporary Ban</h4>
              <p className="text-slate-400 text-sm mb-2"><strong>Community Impact:</strong> A serious violation of community standards.</p>
              <p className="text-slate-400 text-sm"><strong>Consequence:</strong> A temporary ban from any sort of interaction or public communication with the community.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-red-600">4. Permanent Ban</h4>
              <p className="text-slate-400 text-sm mb-2"><strong>Community Impact:</strong> Demonstrating a pattern of violation or sustained inappropriate behavior.</p>
              <p className="text-slate-400 text-sm"><strong>Consequence:</strong> A permanent ban from any sort of public interaction within the community.</p>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Attribution</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400">
              This Code of Conduct is adapted from the 
              <a href="https://www.contributor-covenant.org" className="text-blue-400 hover:text-blue-300 mx-1" target="_blank" rel="noopener noreferrer">
                Contributor Covenant
              </a>
              , version 2.1, available at 
              <a href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html" className="text-blue-400 hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
                https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
              </a>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Heart className="w-6 h-6 mr-3 text-red-400" />
            Let's Build Together
          </h3>
          <p className="text-slate-400 mb-8">
            Together, we can create a welcoming and inclusive community where everyone feels safe to contribute and collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contributing" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Start Contributing
            </a>
            <a 
              href="mailto:devayan9689@gmail.com" 
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Report an Issue
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default CodeOfConductPage;

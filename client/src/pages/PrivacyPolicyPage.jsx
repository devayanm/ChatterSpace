import React from 'react';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database, UserCheck, FileText, Globe, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const dataTypes = [
    {
      type: "Account Information",
      description: "Username, email address, and encrypted password",
      icon: <UserCheck className="w-5 h-5" />,
      retention: "Until account deletion"
    },
    {
      type: "Messages & Content",
      description: "Chat messages, files shared, and conversation history",
      icon: <FileText className="w-5 h-5" />,
      retention: "Stored locally, not on servers"
    },
    {
      type: "Usage Data",
      description: "Login times, feature usage, and basic analytics",
      icon: <Eye className="w-5 h-5" />,
      retention: "30 days maximum"
    },
    {
      type: "Technical Data",
      description: "IP address, browser type, and device information",
      icon: <Database className="w-5 h-5" />,
      retention: "7 days maximum"
    }
  ];

  const rights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Delete your account and data",
    "Export your data",
    "Restrict data processing",
    "Data portability"
  ];

  const securityMeasures = [
    {
      title: "Encryption in Transit",
      description: "All data transmitted between your device and our servers uses HTTPS/TLS encryption",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Password Security",
      description: "Passwords are hashed using bcrypt with salt for maximum security",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Minimal Data Collection",
      description: "We only collect data necessary for ChatterSpace to function properly",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "No Third-Party Tracking",
      description: "We don't use analytics trackers or share data with advertising companies",
      icon: <Eye className="w-6 h-6" />
    }
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
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <p className="text-slate-400">How we protect and handle your data</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Your Privacy Matters 🔒</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              ChatterSpace is committed to protecting your privacy and personal data. This policy explains 
              how we collect, use, and safeguard your information when you use our platform.
            </p>
            <p className="text-slate-400 text-sm">
              <strong>Effective Date:</strong> August 24, 2025 | <strong>Last Updated:</strong> August 24, 2025
            </p>
          </div>
        </div>

        {/* Data We Collect */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Information We Collect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataTypes.map((data, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-400">
                    {data.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{data.type}</h4>
                </div>
                <p className="text-slate-400 mb-3 text-sm">{data.description}</p>
                <div className="text-xs text-slate-500">
                  <strong>Retention:</strong> {data.retention}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Use Data */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">How We Use Your Information</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-400">We Use Your Data To:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Provide and maintain ChatterSpace services
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Authenticate user accounts and prevent unauthorized access
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Enable real-time messaging and communication
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Improve platform performance and user experience
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Send important service notifications
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-red-400">We Never:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Sell your personal data to third parties
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Use your data for advertising purposes
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Share messages with external services
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Track your activity across other websites
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Store messages on our servers permanently
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Security Measures */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">How We Protect Your Data</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-green-400">
                    {measure.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{measure.title}</h4>
                </div>
                <p className="text-slate-400 text-sm">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sharing */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Data Sharing & Third Parties</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-start space-x-4">
              <Globe className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Limited Third-Party Sharing</h4>
                <p className="text-slate-300 mb-4">
                  ChatterSpace operates with a privacy-first approach. We only share data in these limited circumstances:
                </p>
                <div className="space-y-3 text-sm text-slate-400">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Service Providers:</strong> Essential infrastructure providers (hosting, database) with strict data protection agreements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Legal Requirements:</strong> Only when required by law enforcement with proper legal authority</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Security:</strong> To prevent fraud, abuse, or protect user safety when necessary</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Your Privacy Rights</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-300 mb-6">You have the following rights regarding your personal data:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <UserCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{right}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-750 rounded-lg">
              <p className="text-slate-400 text-sm">
                <strong>To exercise these rights:</strong> Contact us at 
                <a href="mailto:devayan9689@gmail.com" className="text-blue-400 hover:text-blue-300 ml-1">
                  devayan9689@gmail.com
                </a> with your request. We'll respond within 30 days.
              </p>
            </div>
          </div>
        </div>

        {/* Cookies and Tracking */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Cookies & Local Storage</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">What We Store Locally</h4>
                <div className="space-y-3 text-slate-300 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Authentication tokens (to keep you logged in)
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    User preferences (theme, language settings)
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Chat history (stored locally in your browser)
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Connection state for real-time features
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-orange-400">No Tracking</h4>
                <div className="space-y-3 text-slate-300 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    No Google Analytics or similar tracking tools
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    No advertising cookies or tracking pixels
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    No cross-site tracking or fingerprinting
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    You can clear all data by logging out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Children's Privacy</h3>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
            <p className="text-slate-300 leading-relaxed">
              ChatterSpace is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you believe we have inadvertently collected 
              such information, please contact us immediately and we will take steps to delete it.
            </p>
          </div>
        </div>

        {/* Changes to Policy */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Changes to This Policy</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-300 mb-4">
              We may update this privacy policy from time to time to reflect changes in our practices 
              or for legal and regulatory reasons. When we make changes:
            </p>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                We'll update the "Last Updated" date at the top of this policy
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                For significant changes, we'll notify users via email or in-app notification
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Continued use of ChatterSpace constitutes acceptance of the updated policy
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Mail className="w-6 h-6 mr-3 text-blue-400" />
            Questions About Privacy?
          </h3>
          <p className="text-slate-400 mb-8">
            If you have any questions about this privacy policy or how we handle your data, 
            we're here to help clarify things for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:devayan9689@gmail.com?subject=Privacy%20Policy%20Question" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Privacy Team
            </a>
            <a 
              href="/terms" 
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default PrivacyPolicyPage;

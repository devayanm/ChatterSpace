import React from 'react';
import Footer from '../components/Footer';
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  Shield, 
  Users, 
  Ban,
  CheckCircle,
  XCircle,
  Mail,
  Globe
} from 'lucide-react';

const TermsOfServicePage = () => {
  const serviceTerms = [
    {
      title: "Account Responsibility",
      description: "You are responsible for maintaining account security and all activities under your account",
      icon: <Shield className="w-5 h-5" />,
      details: [
        "Keep your password secure and confidential",
        "Notify us immediately of unauthorized access",
        "You're responsible for all account activity",
        "One account per person"
      ]
    },
    {
      title: "Acceptable Use",
      description: "Use ChatterSpace respectfully and in compliance with applicable laws",
      icon: <CheckCircle className="w-5 h-5" />,
      details: [
        "Respect other users and community guidelines",
        "No harassment, abuse, or discrimination", 
        "No spam, malware, or malicious content",
        "Follow intellectual property laws"
      ]
    },
    {
      title: "Content Ownership",
      description: "You retain ownership of your content, but grant us necessary permissions to operate the service",
      icon: <FileText className="w-5 h-5" />,
      details: [
        "You own the messages and content you create",
        "You grant us license to display and transmit your content",
        "Don't post content you don't have rights to",
        "Respect copyright and trademark laws"
      ]
    },
    {
      title: "Service Availability",
      description: "We strive for high availability but cannot guarantee uninterrupted service",
      icon: <Globe className="w-5 h-5" />,
      details: [
        "Service provided 'as-is' without warranties",
        "We may need to perform maintenance",
        "Features may change or be discontinued",
        "No guarantee of 100% uptime"
      ]
    }
  ];

  const prohibitedActivities = [
    "Harassment, bullying, or threatening behavior",
    "Sharing illegal, harmful, or offensive content",
    "Impersonating others or creating fake accounts",
    "Distributing spam, malware, or viruses",
    "Attempting to hack or compromise the service",
    "Violating others' privacy or intellectual property",
    "Using the service for illegal activities",
    "Circumventing security measures or rate limits"
  ];

  const liabilityLimitations = [
    {
      title: "Service Interruptions",
      description: "We're not liable for service outages, maintenance, or technical issues"
    },
    {
      title: "User Content",
      description: "We're not responsible for user-generated content or interactions between users"
    },
    {
      title: "Third-Party Links",
      description: "External links are provided for convenience; we don't control or endorse third-party sites"
    },
    {
      title: "Data Loss",
      description: "Users should back up important data; we're not liable for data loss or corruption"
    }
  ];

  const terminationReasons = [
    "Violation of these Terms of Service",
    "Violation of our Code of Conduct",
    "Illegal activity or content",
    "Repeated abuse or harassment",
    "Security threats or malicious behavior",
    "Impersonation or fraudulent activity"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Terms of Service</h1>
              <p className="text-slate-400">Legal terms and conditions for using ChatterSpace</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Terms & Conditions ⚖️</h2>
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Welcome to ChatterSpace! These Terms of Service ("Terms") govern your access to and use of 
              ChatterSpace services. By using our platform, you agree to be bound by these terms.
            </p>
            <p className="text-slate-400 text-sm">
              <strong>Effective Date:</strong> August 24, 2025 | <strong>Last Updated:</strong> August 24, 2025
            </p>
          </div>
        </div>

        {/* Agreement to Terms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Agreement to Terms</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-300 mb-4">
              By accessing or using ChatterSpace, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use our service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-400 mb-1">You Agree To:</h4>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• Follow all terms and conditions</li>
                    <li>• Use the service lawfully and respectfully</li>
                    <li>• Respect other users' rights</li>
                    <li>• Maintain account security</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">We Reserve Rights To:</h4>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• Modify or terminate services</li>
                    <li>• Suspend or ban accounts</li>
                    <li>• Update these terms</li>
                    <li>• Enforce community guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Terms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Service Terms & Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceTerms.map((term, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-purple-400">
                    {term.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{term.title}</h4>
                </div>
                <p className="text-slate-400 mb-4 text-sm">{term.description}</p>
                <ul className="space-y-2">
                  {term.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Prohibited Activities</h3>
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
            <div className="flex items-start space-x-4 mb-4">
              <Ban className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">You May Not:</h4>
                <p className="text-slate-300 text-sm mb-4">
                  The following activities are strictly prohibited and may result in immediate account suspension or termination:
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300 text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Intellectual Property Rights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Your Content Rights</h4>
              <div className="space-y-3 text-slate-300 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  You retain ownership of content you create and share
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  You grant us license to display and transmit your content
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  You're responsible for ensuring you have rights to share content
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  You can delete your content at any time
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-green-400">Our Platform Rights</h4>
              <div className="space-y-3 text-slate-300 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  ChatterSpace software and platform are our intellectual property
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Licensed under MIT License for open source use
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Trademarks and branding remain our property
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  You may use according to the open source license
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liability Limitations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Limitation of Liability</h3>
          <div className="space-y-4">
            {liabilityLimitations.map((limitation, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-1">{limitation.title}</h4>
                    <p className="text-slate-400 text-sm">{limitation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
            <p className="text-slate-300 text-sm">
              <strong>Maximum Liability:</strong> In no event shall ChatterSpace's total liability to you exceed 
              the amount you paid for the service in the 12 months preceding the claim. For our free service, 
              liability is limited to $100 USD.
            </p>
          </div>
        </div>

        {/* Account Termination */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Account Termination</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-red-400">We May Terminate For:</h4>
              <ul className="space-y-2">
                {terminationReasons.map((reason, index) => (
                  <li key={index} className="flex items-start text-sm text-slate-300">
                    <Ban className="w-4 h-4 mr-3 mt-1 text-red-400 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">You May Terminate:</h4>
              <div className="space-y-3 text-slate-300 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  Delete your account at any time
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  Stop using the service without notice
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  Export your data before leaving
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  No penalties for voluntary termination
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Governing Law & Disputes</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Applicable Law</h4>
                <div className="space-y-3 text-slate-300 text-sm">
                  <p>These Terms are governed by and construed in accordance with applicable laws.</p>
                  <p>Any disputes will be resolved through good faith negotiation first.</p>
                  <p>For legal matters, we encourage communication before formal action.</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-400">Dispute Resolution</h4>
                <div className="space-y-3 text-slate-300 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Contact us directly for resolution attempts
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Mediation preferred over litigation
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Individual resolution, not class action
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Changes to These Terms</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-300 mb-4">
              We may update these Terms from time to time to reflect changes in our service, 
              legal requirements, or business practices. When we make changes:
            </p>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                We'll update the "Last Updated" date
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Significant changes will be communicated via email or platform notification
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Continued use constitutes acceptance of updated terms
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                You may terminate your account if you disagree with changes
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Mail className="w-6 h-6 mr-3 text-purple-400" />
            Questions About These Terms?
          </h3>
          <p className="text-slate-400 mb-8">
            If you have any questions about these Terms of Service or need clarification on any provisions, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:devayan9689@gmail.com?subject=Terms%20of%20Service%20Question" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Legal Team
            </a>
            <a 
              href="/privacy" 
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default TermsOfServicePage;

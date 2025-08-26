import React from 'react';
import Footer from '../components/Footer';
import { 
  Bug, 
  AlertTriangle, 
  Search, 
  Plus, 
  ExternalLink, 
  MessageCircle, 
  CheckCircle,
  Clock,
  Tag,
  User,
  Github
} from 'lucide-react';

const IssuesPage = () => {
  const issueTypes = [
    {
      type: "Bug Report",
      icon: <Bug className="w-6 h-6" />,
      color: "text-red-400",
      description: "Report software bugs and unexpected behavior",
      examples: ["App crashes", "Features not working", "UI display issues"]
    },
    {
      type: "Feature Request",
      icon: <Plus className="w-6 h-6" />,
      color: "text-green-400", 
      description: "Suggest new features or improvements",
      examples: ["New messaging features", "UI enhancements", "Performance improvements"]
    },
    {
      type: "Security Issue",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "text-orange-400",
      description: "Report security vulnerabilities privately",
      examples: ["Authentication issues", "Data exposure", "XSS vulnerabilities"]
    },
    {
      type: "Documentation",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "text-blue-400",
      description: "Improvements to documentation and guides",
      examples: ["Missing docs", "Unclear instructions", "Typos and errors"]
    }
  ];

  const recentIssues = [
    {
      id: "#42",
      title: "Add dark mode toggle functionality",
      type: "enhancement",
      status: "open",
      author: "user123",
      created: "2 days ago",
      comments: 5,
      labels: ["enhancement", "ui/ux"]
    },
    {
      id: "#41", 
      title: "Socket connection fails on mobile devices",
      type: "bug",
      status: "in-progress",
      author: "developer456",
      created: "3 days ago", 
      comments: 8,
      labels: ["bug", "mobile", "socket.io"]
    },
    {
      id: "#40",
      title: "Improve message search performance",
      type: "performance",
      status: "open",
      author: "contributor789",
      created: "1 week ago",
      comments: 3,
      labels: ["performance", "search"]
    },
    {
      id: "#39",
      title: "Add emoji reaction support",
      type: "enhancement",
      status: "closed",
      author: "user456",
      created: "2 weeks ago",
      comments: 12,
      labels: ["enhancement", "reactions", "completed"]
    }
  ];

  const guidelines = [
    {
      title: "Search First",
      description: "Check if your issue already exists before creating a new one",
      icon: <Search className="w-5 h-5" />
    },
    {
      title: "Be Specific",
      description: "Provide clear, detailed descriptions with steps to reproduce",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      title: "Include Context", 
      description: "Add relevant system info, browser version, and screenshots",
      icon: <Tag className="w-5 h-5" />
    },
    {
      title: "Stay Updated",
      description: "Respond to questions and provide additional information when asked",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-green-400 bg-green-900/20';
      case 'in-progress': return 'text-yellow-400 bg-yellow-900/20';
      case 'closed': return 'text-gray-400 bg-gray-900/20';
      default: return 'text-blue-400 bg-blue-900/20';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'bug': return 'text-red-400';
      case 'enhancement': return 'text-green-400';
      case 'performance': return 'text-purple-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Bug className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Issues & Bug Reports</h1>
              <p className="text-slate-400">Help us improve ChatterSpace by reporting issues</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Report Issues & Bugs 🐛</h2>
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Found a bug or have a suggestion? We appreciate your feedback! This page helps you report issues 
              effectively and track the status of existing problems. Your contributions help make ChatterSpace better for everyone.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/devayanm/ChatterSpace/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 rounded-lg p-6 text-center transition-colors duration-200 group"
            >
              <Bug className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-lg font-semibold mb-2">Report a Bug</h4>
              <p className="text-red-100 text-sm">Found something broken? Let us know!</p>
              <div className="flex items-center justify-center mt-3 text-sm">
                <span>Create Issue</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            <a 
              href="https://github.com/devayanm/ChatterSpace/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 rounded-lg p-6 text-center transition-colors duration-200 group"
            >
              <Search className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-lg font-semibold mb-2">Browse Issues</h4>
              <p className="text-blue-100 text-sm">Search existing issues and discussions</p>
              <div className="flex items-center justify-center mt-3 text-sm">
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            <a 
              href="/feature-requests"
              className="bg-green-600 hover:bg-green-700 rounded-lg p-6 text-center transition-colors duration-200 group"
            >
              <Plus className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-lg font-semibold mb-2">Request Feature</h4>
              <p className="text-green-100 text-sm">Suggest new features and improvements</p>
              <div className="flex items-center justify-center mt-3 text-sm">
                <span>Submit Idea</span>
              </div>
            </a>
          </div>
        </div>

        {/* Issue Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Types of Issues</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {issueTypes.map((issue, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={issue.color}>
                    {issue.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{issue.type}</h4>
                </div>
                <p className="text-slate-400 mb-4">{issue.description}</p>
                <div>
                  <h5 className="text-sm font-medium text-slate-300 mb-2">Examples:</h5>
                  <ul className="space-y-1">
                    {issue.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2 flex-shrink-0"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Issues */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Recent Issues</h3>
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-700 bg-slate-750">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-white">Latest Activity</h4>
                <a 
                  href="https://github.com/devayanm/ChatterSpace/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center"
                >
                  View All <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
            <div className="divide-y divide-slate-700">
              {recentIssues.map((issue, index) => (
                <div key={index} className="p-4 hover:bg-slate-750 transition-colors duration-150">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-mono text-slate-400">{issue.id}</span>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(issue.status)}`}>
                          {issue.status}
                        </span>
                        <span className={`text-xs ${getTypeColor(issue.type)}`}>
                          {issue.type}
                        </span>
                      </div>
                      <h5 className="font-medium text-white mb-2">{issue.title}</h5>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {issue.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {issue.created}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {issue.comments}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {issue.labels.map((label, labelIndex) => (
                          <span 
                            key={labelIndex}
                            className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Reporting Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-blue-400">
                    {guideline.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{guideline.title}</h4>
                </div>
                <p className="text-slate-400">{guideline.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Issues */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Security Issues</h3>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-400">Responsible Disclosure</h4>
                <p className="text-slate-300 mb-4">
                  If you discover a security vulnerability, please DO NOT open a public issue. Instead, 
                  send a detailed report to our security team privately.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="mailto:devayan9689@gmail.com?subject=Security%20Issue%20Report"
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-200 text-center"
                  >
                    Report Security Issue
                  </a>
                  <span className="text-sm text-slate-400 flex items-center">
                    <span>📧 devayan9689@gmail.com</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Issue Template */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Bug Report Template</h3>
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-700 bg-slate-750">
              <h4 className="font-medium text-white">Use this template for better bug reports</h4>
            </div>
            <div className="p-6">
              <pre className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
{`**Bug Description**
A clear and concise description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
A clear description of what you expected to happen.

**Actual Behavior**
What actually happened instead.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment**
- OS: [e.g. Windows 10, macOS 12.0, Ubuntu 20.04]
- Browser: [e.g. Chrome 91, Firefox 89, Safari 14]
- ChatterSpace Version: [e.g. 1.0.0]
- Node.js Version: [e.g. 16.14.0]

**Additional Context**
Add any other context about the problem here.`}
              </pre>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Github className="w-6 h-6 mr-3 text-red-400" />
            Ready to Help?
          </h3>
          <p className="text-slate-400 mb-8">
            Your bug reports and feedback help us build a better ChatterSpace for everyone. 
            Thank you for contributing to our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/devayanm/ChatterSpace/issues/new"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Report an Issue
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

export default IssuesPage;

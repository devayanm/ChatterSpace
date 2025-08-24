import React from 'react';
import Footer from '../components/Footer';
import { 
  Lightbulb, 
  Star, 
  Zap, 
  Users, 
  MessageCircle, 
  Plus,
  Rocket,
  Heart,
  ExternalLink,
  ThumbsUp,
  Clock,
  Tag,
  User,
  Github
} from 'lucide-react';

const FeatureRequestsPage = () => {
  const featureCategories = [
    {
      category: "User Experience",
      icon: <Star className="w-6 h-6" />,
      color: "text-yellow-400",
      description: "Improvements to user interface and experience",
      examples: ["Dark mode", "Accessibility features", "Mobile responsiveness", "Keyboard shortcuts"]
    },
    {
      category: "Communication Features",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "text-blue-400",
      description: "New messaging and communication capabilities",
      examples: ["File sharing", "Voice messages", "Video calls", "Message reactions"]
    },
    {
      category: "Performance & Scalability",
      icon: <Zap className="w-6 h-6" />,
      color: "text-green-400",
      description: "Speed, efficiency, and scalability improvements",
      examples: ["Faster load times", "Message search", "Caching", "Database optimization"]
    },
    {
      category: "Integration & APIs",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-purple-400",
      description: "Third-party integrations and API enhancements",
      examples: ["Slack integration", "GitHub bots", "Webhook support", "Plugin system"]
    }
  ];

  const popularRequests = [
    {
      id: "#FR-15",
      title: "Add emoji reactions to messages",
      description: "Allow users to react to messages with emoji instead of just typing responses",
      category: "Communication",
      votes: 42,
      status: "planned",
      author: "user123",
      created: "1 week ago",
      labels: ["enhancement", "emoji", "reactions"]
    },
    {
      id: "#FR-12",
      title: "Dark mode theme support",
      description: "Implement a dark theme option for better user experience in low-light environments",
      category: "UI/UX",
      votes: 38,
      status: "in-review",
      author: "designer456",
      created: "2 weeks ago",
      labels: ["ui", "theme", "accessibility"]
    },
    {
      id: "#FR-08",
      title: "File upload and sharing",
      description: "Enable users to upload and share files directly in chat conversations",
      category: "Communication",
      votes: 35,
      status: "open",
      author: "contributor789",
      created: "3 weeks ago",
      labels: ["file-sharing", "upload", "communication"]
    },
    {
      id: "#FR-04",
      title: "Voice message support",
      description: "Add the ability to record and send voice messages in conversations",
      category: "Communication",
      votes: 28,
      status: "open",
      author: "user987",
      created: "1 month ago",
      labels: ["voice", "audio", "communication"]
    }
  ];

  const guidelines = [
    {
      title: "Be Clear & Specific",
      description: "Describe your feature idea clearly with specific use cases",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Explain the Problem",
      description: "Help us understand what problem your feature would solve",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      title: "Consider the Impact",
      description: "Think about how many users would benefit from this feature",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Check for Duplicates",
      description: "Search existing requests to avoid duplicate submissions",
      icon: <Plus className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'planned': return 'text-green-400 bg-green-900/20';
      case 'in-review': return 'text-yellow-400 bg-yellow-900/20';
      case 'open': return 'text-blue-400 bg-blue-900/20';
      case 'completed': return 'text-purple-400 bg-purple-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'communication': return 'text-blue-400';
      case 'ui/ux': return 'text-purple-400';
      case 'performance': return 'text-green-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Feature Requests</h1>
              <p className="text-slate-400">Share your ideas to improve ChatterSpace</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Share Your Ideas 💡</h2>
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Have an idea that could make ChatterSpace better? We love hearing from our community! 
              Your feature requests help shape the future of the platform and ensure we're building 
              what users actually need.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/devayanm/ChatterSpace/discussions/new?category=ideas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 rounded-lg p-6 text-center transition-colors duration-200 group"
            >
              <Lightbulb className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-lg font-semibold mb-2">Submit Idea</h4>
              <p className="text-green-100 text-sm">Share your feature idea with the community</p>
              <div className="flex items-center justify-center mt-3 text-sm">
                <span>Create Discussion</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            <a 
              href="https://github.com/devayanm/ChatterSpace/discussions/categories/ideas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 rounded-lg p-6 text-center transition-colors duration-200 group"
            >
              <Star className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-lg font-semibold mb-2">Browse Ideas</h4>
              <p className="text-blue-100 text-sm">Explore and vote on existing feature requests</p>
              <div className="flex items-center justify-center mt-3 text-sm">
                <span>View Discussions</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            <a 
              href="/issues"
              className="bg-purple-600 hover:bg-purple-700 rounded-lg p-6 text-center transition-colors duration-200 group"
            >
              <Users className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-lg font-semibold mb-2">Report Issues</h4>
              <p className="text-purple-100 text-sm">Found a bug? Help us fix it!</p>
              <div className="flex items-center justify-center mt-3 text-sm">
                <span>Report Bug</span>
              </div>
            </a>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Feature Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureCategories.map((category, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={category.color}>
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                </div>
                <p className="text-slate-400 mb-4">{category.description}</p>
                <div>
                  <h5 className="text-sm font-medium text-slate-300 mb-2">Example Ideas:</h5>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, exampleIndex) => (
                      <span 
                        key={exampleIndex}
                        className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Requests */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Popular Feature Requests</h3>
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-700 bg-slate-750">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-white">Most Requested Features</h4>
                <a 
                  href="https://github.com/devayanm/ChatterSpace/discussions/categories/ideas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center"
                >
                  View All <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
            <div className="divide-y divide-slate-700">
              {popularRequests.map((request, index) => (
                <div key={index} className="p-6 hover:bg-slate-750 transition-colors duration-150">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-mono text-slate-400">{request.id}</span>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                        <span className={`text-xs ${getCategoryColor(request.category)}`}>
                          {request.category}
                        </span>
                      </div>
                      <h5 className="font-medium text-white mb-2">{request.title}</h5>
                      <p className="text-slate-400 text-sm mb-3">{request.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {request.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {request.created}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {request.labels.map((label, labelIndex) => (
                          <span 
                            key={labelIndex}
                            className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-6 text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-slate-700 rounded-lg mb-2">
                        <ThumbsUp className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-sm font-medium text-green-400">{request.votes}</span>
                      <div className="text-xs text-slate-500">votes</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Submission Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-green-400">
                    {guideline.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{guideline.title}</h4>
                </div>
                <p className="text-slate-400">{guideline.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Request Template */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Feature Request Template</h3>
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-700 bg-slate-750">
              <h4 className="font-medium text-white">Use this template for better feature requests</h4>
            </div>
            <div className="p-6">
              <pre className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
{`**Feature Description**
A clear and concise description of the feature you'd like to see.

**Problem Statement**
Describe the problem this feature would solve. What need does it address?

**Proposed Solution**
Explain how you envision this feature working.

**Use Cases**
Provide specific examples of how this feature would be used:
1. As a user, I want to...
2. When I'm doing X, I need to...
3. This would help me...

**Benefits**
- Who would benefit from this feature?
- How would it improve the user experience?
- What value would it add to ChatterSpace?

**Additional Context**
- Are there any existing apps/tools that implement this well?
- Include mockups, sketches, or examples if helpful
- Any technical considerations or constraints?

**Priority**
How important is this feature to you?
- [ ] Nice to have
- [ ] Would be helpful
- [ ] Important for my workflow
- [ ] Critical for adoption`}
              </pre>
            </div>
          </div>
        </div>

        {/* Voting and Feedback */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">How We Prioritize Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
              <ThumbsUp className="w-8 h-8 mx-auto mb-3 text-green-400" />
              <h4 className="text-lg font-semibold mb-2 text-white">Community Votes</h4>
              <p className="text-slate-400 text-sm">
                Features with more votes get higher priority in our development roadmap.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <h4 className="text-lg font-semibold mb-2 text-white">User Impact</h4>
              <p className="text-slate-400 text-sm">
                We consider how many users would benefit and the overall impact on the platform.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
              <Zap className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <h4 className="text-lg font-semibold mb-2 text-white">Implementation</h4>
              <p className="text-slate-400 text-sm">
                We balance feature complexity with available development resources and priorities.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Heart className="w-6 h-6 mr-3 text-green-400" />
            Shape the Future
          </h3>
          <p className="text-slate-400 mb-8">
            Your ideas and feedback drive ChatterSpace's development. Join our community and help us 
            build the communication platform you want to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/devayanm/ChatterSpace/discussions/new?category=ideas"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Submit Feature Request
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

export default FeatureRequestsPage;

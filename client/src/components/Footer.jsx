import {
    ExternalLink,
    Github,
    Heart,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Twitter
} from 'lucide-react';
import ScrollToTopLink from './ScrollToTopLink';

const Footer = ({ variant = 'default' }) => {
  const currentYear = new Date().getFullYear();

  // Clean, structured footer variants focused on layout
  const getFooterStyle = () => {
    switch (variant) {
      case 'auth':
        return 'bg-slate-900/95 backdrop-blur-sm text-white border-t border-slate-700';
      case 'chat':
        return 'bg-slate-800 text-slate-300 border-t border-slate-600';
      default:
        return 'bg-slate-900 text-white border-t border-slate-700';
    }
  };

  // Structured content sections for clear organization
  const footerSections = {
    about: {
      title: "About ChatterSpace",
      content: [
        "A modern, open-source, Discord-like experience for community-driven platforms, remote collaboration, and knowledge-sharing spaces.",
        "Scalable, modular, and real-time conversations platform with seamless integration capabilities."
      ]
    },
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Getting Started", href: "/getting-started" },
      { label: "Documentation", href: "/documentation" },
      { label: "Tech Stack", href: "/tech-stack" },
      { label: "How to Contribute", href: "/contributing" }
    ],
    community: [
      { label: "GitHub Repository", href: "https://github.com/devayanm/ChatterSpace" },
      { label: "Contributing Guide", href: "/contributing" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
      { label: "Issues & Bugs", href: "/issues" },
      { label: "Feature Requests", href: "/feature-requests" },
      { label: "MIT License", href: "/license" }
    ],
    contact: {
      email: "devayan9689@gmail.com",
      location: "Open Source Project",
      social: [
        { platform: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/devayanm" },
        { platform: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/devayan-mandal" },
        { platform: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/devayan45" },
        { platform: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/iamdevayan" }
      ]
    }
  };

  return (
    <footer className={`${getFooterStyle()} transition-colors duration-300`}>
      {/* Main Footer Frame - Structured Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Primary Footer Content */}
        <div className="py-12 lg:py-16">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* About Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{footerSections.about.title}</h3>
                </div>
                <div className="space-y-3">
                  {footerSections.about.content.map((text, index) => (
                    <p key={index} className="text-sm leading-relaxed opacity-80">
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase">Follow Us</h4>
                <div className="flex space-x-4">
                  {footerSections.contact.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.platform}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200 group"
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="text-slate-400 group-hover:text-white transition-colors duration-200">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-span-1">
              <h4 className="text-sm font-semibold mb-6 tracking-wide uppercase">Quick Links</h4>
              <nav className="space-y-3">
                {footerSections.quickLinks.map((link, index) => (
                  link.href.startsWith('http') ? (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm opacity-80 hover:opacity-100 hover:text-blue-400 transition-all duration-200 group"
                    >
                      <span className="flex items-center">
                        {link.label}
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </span>
                    </a>
                  ) : (
                    <ScrollToTopLink
                      key={index}
                      to={link.href}
                      className="block text-sm opacity-80 hover:opacity-100 hover:text-blue-400 transition-all duration-200 group"
                    >
                      <span className="flex items-center">
                        {link.label}
                      </span>
                    </ScrollToTopLink>
                  )
                ))}
              </nav>
            </div>

            {/* Community Section */}
            <div className="col-span-1">
              <h4 className="text-sm font-semibold mb-6 tracking-wide uppercase">Community</h4>
              <nav className="space-y-3">
                {footerSections.community.map((link, index) => (
                  link.href.startsWith('http') ? (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-sm opacity-80 hover:opacity-100 hover:text-blue-400 transition-all duration-200 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex items-center">
                        {link.label}
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </span>
                    </a>
                  ) : (
                    <ScrollToTopLink
                      key={index}
                      to={link.href}
                      className="block text-sm opacity-80 hover:opacity-100 hover:text-blue-400 transition-all duration-200 group"
                    >
                      <span className="flex items-center">
                        {link.label}
                      </span>
                    </ScrollToTopLink>
                  )
                ))}
              </nav>
            </div>

            {/* Contact Section */}
            <div className="col-span-1">
              <h4 className="text-sm font-semibold mb-6 tracking-wide uppercase">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href={`mailto:${footerSections.contact.email}`}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-blue-400 transition-colors duration-200"
                    >
                      {footerSections.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Project</p>
                    <p className="text-sm opacity-80">{footerSections.contact.location}</p>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="pt-4">
                  <p className="text-sm font-medium mb-3">Stay Updated</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright and Legal */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm opacity-70">
              <span>© {currentYear} ChatterSpace.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by the open source community</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm opacity-70">
              <ScrollToTopLink to="/privacy" className="hover:opacity-100 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </ScrollToTopLink>
              <ScrollToTopLink to="/terms" className="hover:opacity-100 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </ScrollToTopLink>
              <span className="text-xs">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

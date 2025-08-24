import React from 'react';
import Footer from '../components/Footer';
import { FileText, Scale, Users, Code, Heart, Shield } from 'lucide-react';

const LicensePage = () => {
  const permissions = [
    "Commercial use",
    "Modification", 
    "Distribution",
    "Private use"
  ];

  const conditions = [
    "License and copyright notice",
    "State changes"
  ];

  const limitations = [
    "Liability",
    "Warranty"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">MIT License</h1>
              <p className="text-slate-400">Open source license for ChatterSpace</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* License Overview */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">License Overview 📜</h2>
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              ChatterSpace is released under the MIT License, one of the most permissive and widely-used 
              open source licenses. This means you can use, modify, and distribute this software freely 
              for both commercial and non-commercial purposes.
            </p>
          </div>
        </div>

        {/* What the MIT License Allows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Permissions
            </h3>
            <ul className="space-y-2">
              {permissions.map((permission, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {permission}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Conditions
            </h3>
            <ul className="space-y-2">
              {conditions.map((condition, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Limitations
            </h3>
            <ul className="space-y-2">
              {limitations.map((limitation, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  {limitation}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full License Text */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Full License Text</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <pre className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-mono">
{`MIT License

Copyright (c) 2024 Devayan Mandal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
          </div>
        </div>

        {/* What This Means for You */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">What This Means for You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-green-400">✅ You Can</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <Code className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                  Use ChatterSpace in your commercial projects
                </li>
                <li className="flex items-start">
                  <Code className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                  Modify the source code as needed
                </li>
                <li className="flex items-start">
                  <Code className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                  Distribute your modified versions
                </li>
                <li className="flex items-start">
                  <Code className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                  Use it for private/internal projects
                </li>
                <li className="flex items-start">
                  <Code className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                  Sell software that includes ChatterSpace
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">📝 You Must</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <FileText className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                  Include the original license and copyright notice
                </li>
                <li className="flex items-start">
                  <FileText className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                  Document any changes you make to the code
                </li>
                <li className="flex items-start">
                  <FileText className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                  Keep the license file in your distributions
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-4 mt-6 text-red-400">⚠️ Disclaimer</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <Shield className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" />
                  No warranty is provided
                </li>
                <li className="flex items-start">
                  <Shield className="w-4 h-4 mr-2 mt-1 text-red-400 flex-shrink-0" />
                  Authors are not liable for damages
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why MIT License? */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Why We Chose MIT License</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Maximum Freedom</h4>
                <p className="text-slate-400 text-sm mb-4">
                  The MIT License provides maximum freedom for users and contributors. You can integrate 
                  ChatterSpace into any project without legal concerns.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Business Friendly</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Companies can use ChatterSpace in commercial products without complex license 
                  compliance requirements.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Simple & Clear</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Short, easy to understand license text that doesn't require legal expertise to interpret.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Wide Adoption</h4>
                <p className="text-slate-400 text-sm mb-4">
                  MIT is one of the most trusted and widely-used open source licenses in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Licenses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Third-Party Dependencies</h3>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 mb-4">
              ChatterSpace includes several third-party libraries, each with their own licenses:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-700 rounded p-3">
                <div className="font-semibold text-blue-400">React</div>
                <div className="text-sm text-slate-400">MIT License</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="font-semibold text-blue-400">Express.js</div>
                <div className="text-sm text-slate-400">MIT License</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="font-semibold text-blue-400">Socket.IO</div>
                <div className="text-sm text-slate-400">MIT License</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="font-semibold text-blue-400">MongoDB</div>
                <div className="text-sm text-slate-400">SSPL License</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="font-semibold text-blue-400">Tailwind CSS</div>
                <div className="text-sm text-slate-400">MIT License</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="font-semibold text-blue-400">Lucide React</div>
                <div className="text-sm text-slate-400">ISC License</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              For a complete list of dependencies and their licenses, check the 
              <code className="bg-slate-600 px-2 py-1 rounded text-xs ml-1">package.json</code> files 
              in the client and server directories.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Users className="w-6 h-6 mr-3 text-green-400" />
            Questions About Licensing?
          </h3>
          <p className="text-slate-400 mb-8">
            If you have any questions about the license or need clarification for your use case, 
            feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:devayan9689@gmail.com" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
            <a 
              href="https://github.com/devayanm/ChatterSpace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </main>

      <Footer variant="default" />
    </div>
  );
};

export default LicensePage;

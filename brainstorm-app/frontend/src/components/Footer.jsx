import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900/90 border-t border-gray-700/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/25">
                🐍
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Snake's Brainstorm</h3>
                <p className="text-xs text-gray-400">Your proactive AI workspace</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              A space for wild ideas, crazy thoughts, and brainstorming sessions that you can revisit anytime. 
              Powered by React, Node.js, and SQLite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold mb-4">Built With</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>React + Vite</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>SQLite</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Snake's Brainstorm. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>VPS: 87.106.176.66</span>
            <span>•</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Brainstorm</h3>
                <p className="text-xs text-gray-500">Your idea workspace</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              A simple space to capture your thoughts and revisit them whenever you need.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Built with</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>React + Vite</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>SQLite</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Brainstorm
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

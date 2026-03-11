import React, { useState } from 'react';

function Header({ onNewBrainstorm }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/25">
              🐍
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white tracking-tight">Snake's Brainstorm</h1>
              <p className="text-xs text-gray-400">Where wild ideas live</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium">
              About
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onNewBrainstorm}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95"
            >
              + New Idea
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/50">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium py-2">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium py-2">
                Features
              </a>
              <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium py-2">
                About
              </a>
              <button
                onClick={onNewBrainstorm}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-3 rounded-lg font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 w-full"
              >
                + New Idea
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

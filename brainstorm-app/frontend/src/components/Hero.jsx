import React from 'react';

function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">
              🚀 Welcome to your idea space
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Capture Your{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Wildest Ideas
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            A brainstorming playground where crazy thoughts become brilliant innovations. 
            Dump your ideas here, revisit them later, and watch them evolve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95"
            >
              Start Brainstorming
            </button>
            <a
              href="#features"
              className="w-full sm:w-auto bg-gray-800/80 backdrop-blur text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-700/80 transition-all border border-gray-600 hover:border-gray-500"
            >
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <p className="text-gray-500 text-sm mb-4">Powered by</p>
            <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                React
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Node.js
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                SQLite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

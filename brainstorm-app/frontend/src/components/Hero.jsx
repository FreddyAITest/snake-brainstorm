import React from 'react';

function Hero({ onGetStarted }) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Capture your ideas,<br />
            <span className="text-indigo-600">revisit them later</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            A simple space for your thoughts. Write them down now, find them when you need them.
          </p>

          {/* CTA */}
          <button
            onClick={onGetStarted}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Start brainstorming
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

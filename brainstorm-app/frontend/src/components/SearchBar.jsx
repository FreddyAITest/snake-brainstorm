import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search brainstorms..."
        className="w-full px-4 py-3 pl-12 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
        🔍
      </div>
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;

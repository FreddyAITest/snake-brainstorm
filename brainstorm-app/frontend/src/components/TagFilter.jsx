import React from 'react';

function TagFilter({ tags, value, onChange }) {
  if (!tags || tags.length === 0) {
    return (
      <select
        disabled
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-400 focus:outline-none cursor-not-allowed"
      >
        <option>No tags available</option>
      </select>
    );
  }

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer"
    >
      <option value="">All Tags</option>
      {tags.map((tag, idx) => (
        <option key={idx} value={tag}>
          #{tag}
        </option>
      ))}
    </select>
  );
}

export default TagFilter;

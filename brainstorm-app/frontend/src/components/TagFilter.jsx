import React from 'react';

function TagFilter({ tags, value, onChange }) {
  if (!tags || tags.length === 0) {
    return (
      <select
        disabled
        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-400 text-sm cursor-not-allowed"
      >
        <option>No tags available</option>
      </select>
    );
  }

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
    >
      <option value="">All Tags</option>
      {tags.map((tag, idx) => (
        <option key={idx} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
}

export default TagFilter;

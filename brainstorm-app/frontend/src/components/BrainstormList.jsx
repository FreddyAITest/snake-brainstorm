import React from 'react';
import BrainstormCard from './BrainstormCard';

function BrainstormList({ items, onEdit, onDelete }) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-20 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No matching brainstorms</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Try adjusting your search or filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          style={{ animationDelay: `${index * 0.05}s` }}
          className="animate-fade-in"
        >
          <BrainstormCard
            item={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default BrainstormList;

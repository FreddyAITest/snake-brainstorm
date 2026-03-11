import React from 'react';
import BrainstormCard from './BrainstormCard';

function BrainstormList({ items, onEdit, onDelete }) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-24 px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800/50 mb-6">
          <span className="text-4xl">🔍</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">No matching brainstorms</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Try adjusting your search terms or filters to find what you're looking for.
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

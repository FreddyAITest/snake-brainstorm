import React, { useState } from 'react';

function BrainstormCard({ item, onEdit, onDelete }) {
  const [showToast, setShowToast] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(item.content);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const tags = item.tags ? item.tags.split(',').map(t => t.trim()) : [];

  return (
    <article className="group relative bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
      {/* Card Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 truncate">
            {item.title}
          </h3>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-3">
          <button
            onClick={handleCopyToClipboard}
            className="text-gray-400 hover:text-emerald-400 hover:bg-gray-700/60 transition-all rounded-lg p-2"
            title="Copy to clipboard"
            aria-label="Copy content"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            onClick={() => onEdit(item)}
            className="text-gray-400 hover:text-emerald-400 hover:bg-gray-700/60 transition-all rounded-lg p-2"
            title="Edit"
            aria-label="Edit brainstorm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="text-gray-400 hover:text-red-400 hover:bg-gray-700/60 transition-all rounded-lg p-2"
            title="Delete"
            aria-label="Delete brainstorm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4h6m4 10a2 2 0 002-2V5a2 2 0 114 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-1m4 4h6m6 10a2 2 0 002-2V5a2 2 0 114 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-1m4 4h6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
        {item.content}
      </p>

      {/* Card Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <time dateTime={item.created_at} className="font-medium">
            {new Date(item.created_at).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
          {item.updated_at !== item.created_at && (
            <span className="flex items-center gap-1" title="Edited">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </span>
          )}
        </div>
      </div>

      {/* Copy Toast */}
      {showToast && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-emerald-500/30 animate-fade-in z-50 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </div>
      )}
    </article>
  );
}

export default BrainstormCard;

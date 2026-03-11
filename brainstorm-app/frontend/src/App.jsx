import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import BrainstormList from './components/BrainstormList';
import BrainstormForm from './components/BrainstormForm';
import SearchBar from './components/SearchBar';
import TagFilter from './components/TagFilter';

const API_BASE = 'http://87.106.176.66:8080';

function App() {
  const [brainstorms, setBrainstorms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchBrainstorms();
    fetchTags();
  }, []);

  useEffect(() => {
    filterBrainstorms();
  }, [searchQuery, selectedTag, brainstorms]);

  const fetchBrainstorms = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/brainstorms`);
      const data = await res.json();
      setBrainstorms(data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch brainstorms:', err);
      setLoading(false);
    }
  };

  const fetchTags = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/brainstorm-tags`);
      const data = await res.json();
      setTags(data);
    } catch (err) {
      console.error('Failed to fetch tags:', err);
    }
  };

  const filterBrainstorms = () => {
    let filtered = brainstorms;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(b => 
        b.title.toLowerCase().includes(query) ||
        b.content.toLowerCase().includes(query) ||
        (b.tags && b.tags.toLowerCase().includes(query))
      );
    }
    
    if (selectedTag) {
      filtered = filtered.filter(b => 
        b.tags && b.tags.split(',').map(t => t.trim()).includes(selectedTag)
      );
    }
    
    return filtered;
  };

  const handleCreate = async (data) => {
    try {
      const res = await fetch(`${API_BASE}/api/brainstorms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        fetchBrainstorms();
        setShowModal(false);
      }
    } catch (err) {
      console.error('Failed to create:', err);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const res = await fetch(`${API_BASE}/api/brainstorms/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        fetchBrainstorms();
        setEditingItem(null);
      }
    } catch (err) {
      console.error('Failed to update:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this brainstorm?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/brainstorms/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchBrainstorms();
      }
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header onNewBrainstorm={() => setShowModal(true)} />

      {/* Hero Section - Only show when no search/filter active */}
      {!searchQuery && !selectedTag && brainstorms.length > 0 && (
        <Hero onGetStarted={() => setShowModal(true)} />
      )}

      {/* Features Section */}
      {!searchQuery && !selectedTag && (
        <section id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Brainstorm?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your personal idea vault where thoughts become breakthroughs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Capture Everything</h3>
                <p className="text-gray-600 text-sm">Never lose a brilliant idea. Save it instantly and revisit anytime.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏷️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Tagging</h3>
                <p className="text-gray-600 text-sm">Organize ideas with tags. Find related thoughts instantly.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Powerful Search</h3>
                <p className="text-gray-600 text-sm">Search through all your ideas with full-text search.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search + Filter Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="md:w-64">
              <TagFilter tags={tags} value={selectedTag} onChange={setSelectedTag} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : brainstorms.length === 0 && !searchQuery && !selectedTag ? (
          <div className="text-center py-20 px-4 bg-white rounded-xl border border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 mb-6">
              <span className="text-3xl">🧠</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No brainstorms yet</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start capturing your ideas! Your first breakthrough is waiting.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create your first idea
            </button>
          </div>
        ) : (
          <BrainstormList
            items={filterBrainstorms()}
            onEdit={setEditingItem}
            onDelete={handleDelete}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Create Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 shadow-xl">
            <BrainstormForm
              onSubmit={handleCreate}
              onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 shadow-xl">
            <BrainstormForm
              item={editingItem}
              onSubmit={(data) => handleUpdate(editingItem.id, data)}
              onCancel={() => setEditingItem(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

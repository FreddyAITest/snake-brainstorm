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
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <Header onNewBrainstorm={() => setShowModal(true)} />

      {/* Hero Section - Only show when no search/filter active */}
      {!searchQuery && !selectedTag && brainstorms.length > 0 && (
        <Hero onGetStarted={() => setShowModal(true)} />
      )}

      {/* Features Section */}
      {!searchQuery && !selectedTag && (
        <section id="features" className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Use Brainstorm?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Your personal idea vault where wild thoughts become breakthrough innovations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Capture Everything</h3>
                <p className="text-gray-400 text-sm">Never lose a brilliant idea. Save it instantly and revisit anytime.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏷️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Smart Tagging</h3>
                <p className="text-gray-400 text-sm">Organize ideas with tags. Find related thoughts instantly.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Powerful Search</h3>
                <p className="text-gray-400 text-sm">Search through all your ideas with full-text search capabilities.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search + Filter Bar */}
      <div className="bg-gray-800/50 border-b border-gray-700/50">
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

      {/* Main Content - Brainstorm Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 animate-pulse">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : brainstorms.length === 0 && !searchQuery && !selectedTag ? (
          <div className="text-center py-20 px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800/50 mb-6">
              <span className="text-4xl">🧠</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">No brainstorms yet</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Start dumping your wild ideas! Your first breakthrough is waiting to happen.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              Create First Idea
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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
            <BrainstormForm
              onSubmit={handleCreate}
              onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
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

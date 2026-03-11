import { useState } from "react";
import Hero from "./components/Hero";
import BrainstormCard from "./components/BrainstormCard";
import Footer from "./components/Footer";
import brainstorms from "./data/brainstorms";

const filters = ["All", "Implemented", "Paired", "Idea"];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? brainstorms
      : brainstorms.filter(
          (b) => b.status === activeFilter.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-snake-dark">
      {/* Header nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-snake-dark/80 backdrop-blur-lg border-b border-snake-border/30">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span>🐍</span>
            <span>Snake&apos;s Brainstorm</span>
          </div>
          <a
            href="https://github.com/FreddyAITest/snake-brainstorm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-snake-muted hover:text-snake-green transition-colors duration-200 font-mono"
          >
            github ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <Hero />

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pb-12">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Recent Brainstorms
            </h2>
            <p className="text-sm text-snake-muted mt-1">
              {brainstorms.length} ideas tracked · Click to expand
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === f
                    ? "bg-snake-green/20 text-snake-green border border-snake-green/30"
                    : "bg-snake-card/50 text-snake-muted border border-snake-border/30 hover:border-snake-muted/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Brainstorm grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((brainstorm, index) => (
            <BrainstormCard
              key={brainstorm.id}
              brainstorm={brainstorm}
              index={index}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-snake-muted text-sm">
              No brainstorms match this filter.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

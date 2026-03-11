export default function Footer() {
  return (
    <footer className="border-t border-snake-border/30 mt-20 px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-snake-muted">
        <div className="flex items-center gap-2">
          <span>🐍</span>
          <span>
            Snake&apos;s Brainstorm &copy; {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/FreddyAITest/snake-brainstorm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-snake-green transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-snake-border">·</span>
          <span className="font-mono text-xs text-snake-border">
            v1.0 — React + Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}

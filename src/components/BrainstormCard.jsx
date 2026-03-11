import { useState } from "react";

const statusConfig = {
  implemented: {
    label: "Implemented",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  paired: {
    label: "Paired",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    dot: "bg-blue-400",
  },
  idea: {
    label: "Idea",
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    dot: "bg-amber-400 animate-pulse",
  },
};

export default function BrainstormCard({ brainstorm, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const status = statusConfig[brainstorm.status] || statusConfig.idea;

  return (
    <div
      className="group relative rounded-2xl border border-snake-border bg-snake-card/60 backdrop-blur-md p-6 transition-all duration-300 hover:border-snake-green/40 hover:shadow-[0_0_30px_rgba(0,208,132,0.08)] cursor-pointer animate-slide-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Hover glow accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-snake-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white group-hover:text-snake-green transition-colors duration-200 truncate">
              {brainstorm.title}
            </h3>
            <p className="text-xs text-snake-muted mt-0.5 font-mono">
              {brainstorm.date}
            </p>
          </div>
          <span
            className={`ml-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.color} shrink-0`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {brainstorm.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-snake-dark/80 text-snake-muted text-xs font-mono border border-snake-border/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-snake-text/80 leading-relaxed">
          {brainstorm.description}
        </p>

        {/* Expandable Details */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-snake-border/50 pt-4">
            <ul className="space-y-2">
              {brainstorm.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-snake-muted"
                >
                  <span className="text-snake-green mt-0.5 shrink-0">▸</span>
                  <span className="font-mono text-xs">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expand indicator */}
        <div className="flex justify-center mt-3">
          <span
            className={`text-snake-muted/50 text-xs transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </div>
      </div>
    </div>
  );
}

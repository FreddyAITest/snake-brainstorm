export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-snake-green/5 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "3s" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Snake emoji with glow */}
        <div className="inline-block mb-6 animate-float">
          <span className="text-6xl sm:text-7xl drop-shadow-[0_0_25px_rgba(0,208,132,0.4)]">
            🐍
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 animate-fade-in">
          Snake&apos;s{" "}
          <span className="bg-gradient-to-r from-snake-green to-snake-lime bg-clip-text text-transparent">
            Brainstorm
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl text-snake-muted max-w-xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Wild ideas, crazy thoughts, and things to revisit later.
        </p>

        {/* Subtitle badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snake-card/80 backdrop-blur-sm border border-snake-border/50 text-sm text-snake-muted animate-fade-in"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <span className="w-2 h-2 rounded-full bg-snake-green animate-pulse" />
          <span>
            Powered by{" "}
            <span className="text-snake-green font-medium">
              FreddyAITest
            </span>{" "}
            &amp; AI Agents
          </span>
        </div>
      </div>
    </section>
  );
}

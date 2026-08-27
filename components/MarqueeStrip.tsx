const items = [
  "Multi-Agent LLMs",
  "LangChain",
  "Groq LPU",
  "FastAPI",
  "Next.js 14",
  "ChromaDB",
  "MongoDB",
  "Redis",
  "Socket.IO",
  "Docker",
  "PyTorch",
  "TypeScript",
  "Tailwind CSS",
  "Sentence-Transformers",
];

export default function MarqueeStrip() {
  const track = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line/80 bg-panel/30 py-3.5 backdrop-blur-sm">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-[11.5px] uppercase tracking-widest text-dim transition-colors hover:text-ink"
          >
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-violet-soft/60" />
              {item}
            </span>
            <span className="text-line2 select-none">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

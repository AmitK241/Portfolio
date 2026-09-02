"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Globe, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export default function LocationCard() {
  const [hovering, setHovering] = useState(false);

  // 6 rows x 10 cols grid representing radar matrix
  const dots = Array.from({ length: 6 * 10 }, (_, i) => i);
  const highlightIndex = 26; // Prayagraj relative position

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="panel group relative overflow-hidden p-6 transition-all duration-300 hover:border-line2"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet/10 blur-2xl transition-opacity duration-500 group-hover:bg-violet/20" />

      <div className="mb-4 flex items-center justify-between">
        <p className="eyebrow flex items-center gap-1.5 !text-dim">
          <Compass size={12} className="text-violet-soft" />
          Location &middot; Radar
        </p>
        <span className="font-mono text-[11px] uppercase tracking-wider text-dim">
          {hovering ? "Tracking active" : "Hover to ping"}
        </span>
      </div>

      {/* Interactive Radar Dot Matrix */}
      <div className="relative my-4 rounded-xl border border-line/70 bg-panel2/40 p-4">
        <div className="grid grid-cols-10 gap-2 place-items-center">
          {dots.map((i) => {
            const isHighlight = i === highlightIndex;
            return (
              <div key={i} className="relative flex items-center justify-center h-2.5 w-2.5">
                {isHighlight ? (
                  <>
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-violet-soft/60" />
                    <span className="relative h-2 w-2 rounded-full bg-violet-soft ring-2 ring-violet-dim" />
                  </>
                ) : (
                  <span
                    className={`h-1 w-1 rounded-full transition-all duration-300 ${
                      hovering ? "bg-line2 scale-110" : "bg-line/80"
                    }`}
                    style={{ transitionDelay: hovering ? `${(i % 10) * 15}ms` : "0ms" }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Crosshair telemetry lines */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-violet/20 to-transparent" />
      </div>

      <motion.div
        initial={false}
        animate={{ y: hovering ? 0 : 2 }}
        transition={{ duration: 0.25 }}
        className="mt-4 border-t border-line/80 pt-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-display text-base font-semibold text-ink">
            <MapPin size={15} className="text-violet-soft" />
            <span>Prayagraj, Uttar Pradesh</span>
          </div>
          <span className="rounded border border-line bg-panel px-2 py-0.5 font-mono text-[11px] uppercase text-dim">
            GMT+5:30
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-muted">
          <span className="text-violet-soft">25.4358&deg; N, 81.8463&deg; E</span>
          <span className="flex items-center gap-1 text-dim">
            <Globe size={11} /> MNNIT Campus
          </span>
        </div>
      </motion.div>
    </div>
  );
}

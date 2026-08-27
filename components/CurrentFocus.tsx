"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Hammer } from "lucide-react";
import { currentFocus } from "@/lib/data";
import { SectionHeading } from "./ui";

export default function CurrentFocus() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="05 / Runtime"
          title="Active focus &amp; engineering roadmap"
          description="What I'm reading, testing, and shipping right now — deep dives into LLM architectures and systems engineering."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Learning Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="panel flex flex-col justify-between overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-line bg-panel2/40 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <BookOpen size={15} className="text-violet-soft" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink font-semibold">
                  runtime.learning[]
                </span>
              </div>
              <span className="font-mono text-[10px] text-dim">6 topics</span>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {currentFocus.learning.map((item, idx) => {
                  const parts = item.split(" — ");
                  const title = parts[0];
                  const desc = parts.slice(1).join(" — ");
                  return (
                    <li
                      key={item}
                      className="group flex items-start gap-3 rounded-lg border border-line/40 bg-panel2/20 p-2.5 transition-colors hover:border-line2 hover:bg-panel2/50"
                    >
                      <span className="font-mono text-[11px] text-violet-soft font-semibold select-none">
                        0{idx + 1}
                      </span>
                      <div className="text-[12.5px] leading-relaxed">
                        <span className="font-semibold text-ink">{title}</span>
                        {desc && <span className="text-muted"> — {desc}</span>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-line/60 bg-panel2/20 px-6 py-3 font-mono text-[10.5px] text-dim">
              status: active_study &middot; deep_dive
            </div>
          </motion.div>

          {/* Building Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="panel flex flex-col justify-between overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-line bg-panel2/40 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <Hammer size={15} className="text-amber" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink font-semibold">
                  runtime.building[]
                </span>
              </div>
              <span className="font-mono text-[10px] text-dim">4 active</span>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {currentFocus.building.map((item, idx) => {
                  const parts = item.split(" — ");
                  const title = parts[0];
                  const desc = parts.slice(1).join(" — ");
                  return (
                    <li
                      key={item}
                      className="group flex items-start gap-3 rounded-lg border border-line/40 bg-panel2/20 p-2.5 transition-colors hover:border-line2 hover:bg-panel2/50"
                    >
                      <span className="font-mono text-[11px] text-amber font-semibold select-none">
                        0{idx + 1}
                      </span>
                      <div className="text-[12.5px] leading-relaxed">
                        <span className="font-semibold text-ink">{title}</span>
                        {desc && <span className="text-muted"> — {desc}</span>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-line/60 bg-panel2/20 px-6 py-3 font-mono text-[10.5px] text-dim">
              status: active_development &middot; shipping_soon
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Trophy } from "lucide-react";
import { timeline } from "@/lib/data";
import { SectionHeading } from "./ui";

export default function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-28 border-t border-line py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="03 / Signal"
          title="Experience &amp; hackathons"
          description="Where I've tested systems against real judges, unforgiving deadlines, and high-caliber competition."
        />

        <div className="relative border-l-2 border-line/80 ml-3 pl-8 sm:ml-4 sm:pl-10 space-y-8">
          {timeline.map((entry, i) => {
            const isWinner = entry.title.toLowerCase().includes("award") || entry.title.toLowerCase().includes("best");
            return (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                {/* Node indicator */}
                <span
                  className={`absolute -left-[41px] sm:-left-[49px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-bg ${
                    isWinner ? "bg-amber text-black ring-4 ring-amber/20" : "bg-violet-soft ring-4 ring-violet/20"
                  }`}
                >
                  {isWinner ? <Trophy size={10} /> : <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </span>

                {/* Timeline Card */}
                <div className="panel p-5 sm:p-6 transition-all duration-300 hover:border-line2 hover:bg-panel2/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded border border-line bg-panel2 px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-wider text-violet-soft font-semibold">
                        {entry.org}
                      </span>
                      {isWinner && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[10px] text-amber">
                          <Award size={11} />
                          Award Winner
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-dim">
                      <Calendar size={12} />
                      {entry.date}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted sm:text-[14px]">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

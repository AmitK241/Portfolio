"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Sparkles } from "lucide-react";
import { proficiency, skillGroups } from "@/lib/data";
import { SectionHeading } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 border-t border-line py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="01 / Stack"
          title="Tech stack &amp; proficiency"
          description="Tools I reach for daily across async multi-agent orchestrations, full-stack web platforms, and deep learning pipelines."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Skill Groups Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
                className="panel panel-hover flex flex-col justify-between p-5"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="eyebrow !text-violet-soft">{group.category}</p>
                    <span className="font-mono text-[11px] text-dim">{group.items.length} tools</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-panel2/80 px-2.5 py-1 font-mono text-[12px] text-ink transition-colors hover:border-violet-soft/50 hover:text-violet-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Matrix */}
          <div className="panel p-6 sm:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <Cpu size={16} className="text-violet-soft" />
                <p className="font-display text-base font-bold text-ink">Proficiency Matrix</p>
              </div>
            </div>

            <div className="space-y-5">
              {proficiency.map((row, i) => (
                <motion.div
                  key={row.domain}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13.5px] font-medium text-ink">{row.domain}</span>
                    <div className="flex items-center gap-2 font-mono text-[10.5px]">
                      <span className="font-semibold text-gradient">{row.level}/10</span>
                      <span className="uppercase text-dim">({row.levelLabel})</span>
                    </div>
                  </div>

                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-line/80">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.level * 10}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.85, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-dim via-violet to-violet-soft"
                    />
                  </div>

                  <p className="text-[11.5px] leading-relaxed text-muted">{row.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

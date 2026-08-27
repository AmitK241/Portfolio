"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, GraduationCap, Sparkles, Target } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./ui";
import LocationCard from "./LocationCard";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="00 / Profile"
          title="Engineering persona &amp; background"
          description="A final-year Computer Science engineer at MNNIT Allahabad building at the convergence of high-throughput backend systems and applied generative AI."
        />

        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="panel p-7 sm:p-8"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-soft" />
                <p className="eyebrow !text-violet-soft">The engineering thesis</p>
              </div>
              <p className="text-[15.5px] leading-relaxed text-ink/90 sm:text-[16.5px]">
                {profile.longBio}
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-panel2/50 p-4">
                <Target size={18} className="mt-0.5 shrink-0 text-violet-soft" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-dim">Core Philosophy</p>
                  <p className="mt-0.5 text-sm font-medium text-ink">{profile.philosophy}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <LocationCard />
            </motion.div>
          </div>

          {/* Academic dossier & Target roles */}
          <div className="flex flex-col gap-6">
            {/* Academic Progress & Institutional dossier */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="panel flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line2 bg-panel2 text-violet-soft">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">Academic Status</p>
                      <p className="font-mono text-[10.5px] text-dim">Institutional Dossier</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-green/30 bg-green/10 px-2.5 py-0.5 font-mono text-[10px] uppercase font-medium text-green">
                    Final Year
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{profile.degree}</p>
                    <p className="mt-0.5 text-[13px] text-muted">{profile.university}</p>
                    <p className="mt-1 font-mono text-[11px] text-violet-soft">
                      Cycle &middot; {profile.gradYear}
                    </p>
                  </div>

                  {/* Academic Progress Bar */}
                  <div className="rounded-xl border border-line bg-panel2/40 p-3.5">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-dim">Degree Progress</span>
                      <span className="font-semibold text-violet-soft">Year 4 of 4 (88%)</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                      <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-violet-dim via-violet-soft to-amber" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles Amit is seeking */}
              <div className="mt-6 border-t border-line pt-5">
                <p className="eyebrow mb-3.5 flex items-center gap-1.5 !text-dim">
                  <Sparkles size={11} className="text-violet-soft" />
                  Target Placement Roles
                </p>
                <div className="space-y-2">
                  {profile.openTo.map((role) => (
                    <div
                      key={role}
                      className="group flex items-start gap-2.5 rounded-lg border border-line/60 bg-panel2/30 p-2.5 transition-colors hover:border-line2 hover:bg-panel2/60"
                    >
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-violet-soft" />
                      <span className="font-mono text-[12px] leading-snug text-muted group-hover:text-ink">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

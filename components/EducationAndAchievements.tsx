"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, BadgeCheck, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import { achievements, certifications, education } from "@/lib/data";
import { SectionHeading } from "./ui";

export default function EducationAndAchievements() {
  return (
    <section id="education" className="scroll-mt-28 border-t border-line py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="04 / Origin"
          title="Education, certifications &amp; honors"
          description="Academic foundation at MNNIT Allahabad, verified credentials in deep learning, and recognized hackathon honors."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="panel panel-hover flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-line pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-violet-soft">
                    <GraduationCap size={16} />
                  </div>
                  <p className="eyebrow !text-violet-soft">Education</p>
                </div>
                <span className="rounded-full border border-green/30 bg-green/10 px-2 py-0.5 font-mono text-[9.5px] uppercase text-green">
                  Enrolled
                </span>
              </div>

              {education.map((ed) => (
                <div key={ed.degree} className="space-y-2">
                  <h3 className="font-display text-base font-bold tracking-tight text-ink">{ed.degree}</h3>
                  <p className="text-[13.5px] font-medium text-muted">{ed.institution}</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-violet-soft">
                    {ed.period}
                  </p>
                  <p className="pt-2 text-[13px] leading-relaxed text-dim">{ed.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-line/60 pt-3.5 font-mono text-[11px] text-muted">
              Focus: Distributed Systems, Concurrency, DBMS
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="panel panel-hover flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-line pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-violet-soft">
                    <BadgeCheck size={16} />
                  </div>
                  <p className="eyebrow !text-violet-soft">Certifications</p>
                </div>
                <span className="flex items-center gap-1 font-mono text-[10px] text-dim">
                  <ShieldCheck size={12} className="text-green" /> Verified
                </span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-xl border border-line bg-panel2/40 p-4 transition-all hover:border-violet-soft hover:bg-panel2/80"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-ink group-hover:text-violet-soft transition-colors">
                          {cert.name}
                        </p>
                        <p className="mt-1 font-mono text-[11.5px] text-dim">
                          Issuer: {cert.issuer}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="mt-0.5 shrink-0 text-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-soft"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-3.5 font-mono text-[11px] text-dim">
              Click to view verified Coursera credential
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="panel panel-hover flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-line pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-violet-soft">
                    <Award size={16} />
                  </div>
                  <p className="eyebrow !text-violet-soft">Honors</p>
                </div>
                <span className="rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[9.5px] uppercase text-amber">
                  Highlights
                </span>
              </div>

              <div className="space-y-3.5">
                {achievements.map((a) => (
                  <div key={a.label} className="rounded-lg border border-line/50 bg-panel2/30 p-3">
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start justify-between gap-2"
                      >
                        <span className="text-[13.5px] font-semibold text-ink transition-colors group-hover:text-violet-soft">
                          {a.label}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="mt-0.5 shrink-0 text-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-soft"
                        />
                      </a>
                    ) : (
                      <p className="text-[13.5px] font-semibold text-ink">{a.label}</p>
                    )}
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{a.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-3.5 font-mono text-[11px] text-dim">
              Global hackathons &amp; verified competitive rankings
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

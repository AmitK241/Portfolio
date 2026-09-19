"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { liveMetrics, profile, socials } from "@/lib/data";
import ProfileFlipCard from "./ProfileFlipCard";

const bootLines = [
  { cmd: "$ whoami", out: "amit_kumar — full-stack / ml / genai engineer" },
  { cmd: "$ systemctl status", out: "active (running) · mnnit allahabad (final year cse)" },
  { cmd: "$ cat target_roles.json", out: "[\"sde\", \"ml engineer\", \"genai engineer\"] · placements 2026-27" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      {/* Dynamic ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(109,94,245,0.18),rgba(255,255,255,0))]"
      />

      <div className="section-wrap relative pb-20">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-center gap-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-line2 bg-panel/80 px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted backdrop-blur-sm">
                <span className="status-dot bg-green" />
                <span>Available for 2026&ndash;27 Placements</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-[11px] text-violet-soft">
                <Sparkles size={11} aria-hidden="true" /> MNNIT CSE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl"
            >
              Building systems that hold up{" "}
              <span className="text-gradient-animated inline-block">
                under real load.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted sm:text-base"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-violet px-5 py-3 font-mono text-[11.5px] uppercase tracking-wider text-white shadow-[0_10px_25px_-5px_rgb(var(--c-violet)/0.4)] transition-all hover:bg-violet-soft hover:shadow-[0_14px_30px_-5px_rgb(var(--c-violet)/0.6)]"
              >
                <span>View deployed work</span>
                <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line2 bg-panel/70 px-4 py-3 font-mono text-[11.5px] uppercase tracking-wider text-ink backdrop-blur-sm transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft"
              >
                <Github size={14} aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line2 bg-panel/70 px-4 py-3 font-mono text-[11.5px] uppercase tracking-wider text-ink backdrop-blur-sm transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft"
              >
                <FileText size={14} aria-hidden="true" />
                <span>Resume</span>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line2 bg-panel/70 text-ink backdrop-blur-sm transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={15} />
              </a>

              <a
                href={socials.email}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line2 bg-panel/70 text-ink backdrop-blur-sm transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft"
                aria-label="Send direct email"
              >
                <Mail size={15} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full shrink-0 sm:w-auto lg:mx-0"
          >
            <ProfileFlipCard />
          </motion.div>
        </div>

        {/* Systems telemetry & boot panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="panel mt-16 overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-3 bg-panel2/40">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green/80" />
              <span className="ml-2 font-mono text-[11px] text-muted">terminal — telemetry.log</span>
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-wider text-dim sm:inline">
              session: live &middot; ready
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
            {/* Terminal log lines */}
            <div className="space-y-2 border-b border-line px-5 py-5 font-mono text-[12.5px] leading-relaxed text-muted lg:border-b-0 lg:border-r">
              {bootLines.map((item, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="text-violet-soft">{item.cmd}</p>
                  <p className="pl-4 text-muted/90">{item.out}</p>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-1 font-mono text-ink">
                <span className="text-violet-soft">$</span>
                <span>ready for deployment</span>
                <span className="inline-block h-3.5 w-2 animate-blink bg-violet-soft" />
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 divide-x divide-y divide-line">
              {liveMetrics.map((m) => (
                <div
                  key={m.label}
                  className="group flex flex-col justify-center gap-1 p-5 transition-colors hover:bg-panel2/50"
                >
                  <span className="font-display text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
                    {m.value}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-dim group-hover:text-muted">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

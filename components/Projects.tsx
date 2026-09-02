"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Boxes,
  Database,
  Film,
  Github,
  MessageSquare,
  Radio,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { MouseEvent, ReactNode } from "react";
import { projects } from "@/lib/data";
import { Badge, SectionHeading, StatusPill } from "./ui";

const iconMap: Record<string, typeof Sparkles> = {
  axiom: Sparkles,
  anamnesis: Database,
  documind: MessageSquare,
  careercopilot: Boxes,
  cinovix: Film,
  quickchat: Radio,
};

const accents = ["violet", "amber", "green"] as const;
type Accent = (typeof accents)[number];

const accentClasses: Record<Accent, { bar: string; icon: string; glow: string; text: string }> = {
  violet: {
    bar: "from-violet-dim via-violet-soft to-violet-dim",
    icon: "text-violet-soft bg-violet/10 border-violet/20",
    glow: "hover:shadow-[0_20px_48px_-14px_rgb(var(--c-violet)/0.4)]",
    text: "text-violet-soft",
  },
  amber: {
    bar: "from-amber/40 via-amber to-amber/40",
    icon: "text-amber bg-amber/10 border-amber/20",
    glow: "hover:shadow-[0_20px_48px_-14px_rgb(var(--c-amber)/0.35)]",
    text: "text-amber",
  },
  green: {
    bar: "from-green/40 via-green to-green/40",
    icon: "text-green bg-green/10 border-green/20",
    glow: "hover:shadow-[0_20px_48px_-14px_rgb(var(--c-green)/0.35)]",
    text: "text-green",
  },
};

function TiltCard({
  children,
  delay,
  accent,
  className = "",
}: {
  children: ReactNode;
  delay: number;
  accent: Accent;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [3, -3]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-3, 3]), { stiffness: 220, damping: 22 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={`panel group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-line2 ${accentClasses[accent].glow} ${className}`}
    >
      <span
        className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accentClasses[accent].bar} opacity-80`}
      />
      {children}
    </motion.article>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;
  const FeaturedIcon = iconMap[featured.slug] ?? Sparkles;

  return (
    <section id="projects" className="scroll-mt-28 border-t border-line py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="02 / Deploys"
          title="Featured projects"
          description="Six systems shipped end-to-end — adversarial LLM orchestrations, persistent memory layers, and real-time platforms, all live with code public on GitHub."
        />

        {/* Featured Flagship Project (AXIOM) */}
        <TiltCard delay={0} accent="violet" className="mb-8 p-7 sm:p-9 lg:p-10">
          <div className="relative">
            {/* Top Bar with Award Ribbon & Status */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-amber">
                  <Award size={13} />
                  <span>Best AI Project Award &middot; FutureAI Hackathon</span>
                </span>
                <span className="rounded-full border border-violet/30 bg-violet/10 px-2.5 py-1 font-mono text-[10.5px] text-violet-soft">
                  Flagship Build
                </span>
              </div>
              <StatusPill status={featured.status} />
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
              <div>
                <div className="mb-4 flex items-center gap-3.5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet/30 bg-violet/10 text-violet-soft">
                    <FeaturedIcon size={24} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                      {featured.name}
                    </h3>
                    {featured.tag && (
                      <p className="mt-0.5 font-mono text-[12px] text-violet-soft">{featured.tag}</p>
                    )}
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-muted sm:text-base">
                  {featured.description}
                </p>

                {/* Highlights List */}
                <div className="mt-6 space-y-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-dim">
                    Key Architectural Highlights:
                  </p>
                  <ul className="grid gap-2.5">
                    {featured.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg border border-line/50 bg-panel2/40 p-3 text-[14px] leading-relaxed text-ink/95"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-soft" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stack & Action Panel */}
              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-line bg-panel2/50 p-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-dim mb-3">
                    Core Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {featured.stack.map((s) => (
                      <Badge key={s} variant="violet">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-dim mb-3">
                    Deployments &amp; Case Study
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {featured.links.map((link) => {
                      const isLive = link.label.toLowerCase().includes("live");
                      return (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`group flex items-center justify-between rounded-xl px-4 py-3 font-mono text-[12px] uppercase tracking-wider transition-all ${
                            isLive
                              ? "bg-violet text-white shadow-md hover:bg-violet-soft"
                              : "border border-line2 bg-panel text-ink hover:border-violet-soft hover:text-violet-soft"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {link.label.toLowerCase().includes("github") && <Github size={14} aria-hidden="true" />}
                            {isLive && <ExternalLink size={14} aria-hidden="true" />}
                            <span>{link.label}</span>
                          </span>
                          <ArrowUpRight
                            size={14}
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      );
                    })}

                    <a
                      href="/projects/axiom"
                      className="group flex items-center justify-between rounded-xl border border-line2 bg-panel px-4 py-3 font-mono text-[12px] uppercase tracking-wider text-ink transition-all hover:border-violet-soft hover:text-violet-soft"
                    >
                      <span>Case Study</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* 5-Project Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => {
            const Icon = iconMap[project.slug] ?? Sparkles;
            const accent = accents[i % accents.length];
            const projectNumber = `0${i + 2}`;

            return (
              <TiltCard
                key={project.slug}
                delay={(i % 3) * 0.06}
                accent={accent}
                className="flex flex-col justify-between p-6"
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accentClasses[accent].icon}`}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="font-mono text-[11px] text-dim">{projectNumber}</span>
                    </div>
                    <StatusPill status={project.status} />
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">{project.name}</h3>
                  {project.tag && (
                    <p className={`mt-1 font-mono text-[11.5px] ${accentClasses[accent].text}`}>
                      {project.tag}
                    </p>
                  )}

                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-2 border-t border-line/60 pt-3.5">
                    {project.highlights.slice(0, 2).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-soft" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1 font-mono text-[11.5px] uppercase tracking-wider text-ink transition-colors hover:text-violet-soft"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          size={12}
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

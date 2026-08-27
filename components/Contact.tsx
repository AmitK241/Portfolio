"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile, socials } from "@/lib/data";
import Faq from "./Faq";
import GithubPulse from "./GithubPulse";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="scroll-mt-28 border-t border-line py-24 sm:py-32">
      <div className="section-wrap">
        {/* Main CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="panel relative overflow-hidden px-6 py-16 text-center sm:px-12 lg:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(109,94,245,0.2),rgba(255,255,255,0))]"
          />

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-violet-soft">
            <Sparkles size={12} />
            <span>06 / Connect</span>
          </div>

          <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Open for SDE, ML &amp; Gen AI roles for{" "}
            <span className="text-gradient inline-block">2026&ndash;27 placements.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted sm:text-base">
            If you&apos;re recruiting for campus placements, or want to discuss multi-agent systems,
            distributed concurrency, and LLM reliability — let&apos;s connect.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={socials.email}
              className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 font-mono text-[12px] uppercase tracking-wider text-white shadow-[0_10px_25px_-5px_rgb(var(--c-violet)/0.4)] transition-all hover:bg-violet-soft hover:shadow-[0_14px_30px_-5px_rgb(var(--c-violet)/0.6)]"
            >
              <Mail size={15} />
              <span>Send direct email</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line2 bg-panel px-5 py-3 font-mono text-[12px] uppercase tracking-wider text-ink transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green" />
                  <span className="text-green">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          {/* Quick social links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-line/60 pt-6">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-[12px] text-dim transition-colors hover:text-ink"
            >
              <Github size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-[12px] text-dim transition-colors hover:text-ink"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* GitHub Pulse & FAQ Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <GithubPulse />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Faq />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

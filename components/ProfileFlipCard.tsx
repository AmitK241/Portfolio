"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  RotateCw,
} from "lucide-react";
import { profile, socials } from "@/lib/data";

export default function ProfileFlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group mx-auto [perspective:1400px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-label="Flip profile card to see contact information"
        aria-pressed={flipped}
        className="relative block h-[380px] w-[290px] cursor-pointer text-left [transform-style:preserve-3d] focus:outline-none sm:h-[440px] sm:w-[320px]"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full [transform-style:preserve-3d]"
        >
          {/* Front — Photo with status overlay */}
          <div
            className="panel absolute inset-0 overflow-hidden shadow-2xl [backface-visibility:hidden] [transform:rotateY(0deg)]"
          >
            <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/15" />
            <Image
              src="/photo.jpg"
              alt={profile.name}
              fill
              sizes="(min-width: 640px) 320px, 290px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Top pill badges */}
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                <span className="status-dot bg-green" />
                Available 2026-27
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-md transition-opacity group-hover:opacity-100 sm:opacity-75">
                <RotateCw size={11} className="transition-transform group-hover:rotate-180 duration-500" />
                Flip
              </span>
            </div>

            {/* Bottom info banner */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 pt-20">
              <p className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {profile.name}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/75">
                {profile.role}
              </p>
              <div className="mt-3 flex items-center gap-2 border-t border-white/15 pt-2.5 font-mono text-[10.5px] text-white/70">
                <GraduationCap size={13} className="text-violet-soft" />
                <span>MNNIT Allahabad</span>
              </div>
            </div>
          </div>

          {/* Back — Quick connect dossier */}
          <div
            className="panel absolute inset-0 flex flex-col justify-between p-6 shadow-2xl [backface-visibility:hidden]"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-line pb-3">
                <p className="eyebrow !text-violet-soft">Profile &middot; Connect</p>
                <span className="flex items-center gap-1 font-mono text-[10px] text-dim">
                  <RotateCw size={10} /> flip back
                </span>
              </div>

              <div className="mt-5 space-y-3.5 font-mono text-[12.5px]">
                <a
                  href={socials.email}
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center justify-between rounded-lg border border-line bg-panel2/60 px-3 py-2 text-ink transition-colors hover:border-violet-soft hover:text-violet-soft"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail size={14} className="shrink-0 text-violet-soft" />
                    <span className="truncate text-[12px]">{profile.email}</span>
                  </div>
                  <ArrowUpRight size={13} className="shrink-0 text-dim group-hover:text-violet-soft" />
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center justify-between rounded-lg border border-line bg-panel2/60 px-3 py-2 text-ink transition-colors hover:border-violet-soft hover:text-violet-soft"
                >
                  <div className="flex items-center gap-2.5">
                    <Github size={14} className="shrink-0 text-violet-soft" />
                    <span>github.com/AmitK241</span>
                  </div>
                  <ArrowUpRight size={13} className="shrink-0 text-dim group-hover:text-violet-soft" />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center justify-between rounded-lg border border-line bg-panel2/60 px-3 py-2 text-ink transition-colors hover:border-violet-soft hover:text-violet-soft"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin size={14} className="shrink-0 text-violet-soft" />
                    <span>in/amit-kumar-3a...</span>
                  </div>
                  <ArrowUpRight size={13} className="shrink-0 text-dim group-hover:text-violet-soft" />
                </a>
              </div>

              <div className="mt-4 space-y-2 border-t border-line pt-3 font-mono text-[11.5px] text-muted">
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={13} className="shrink-0 text-violet-soft" />
                  <span>MNNIT Allahabad &middot; CSE</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={13} className="shrink-0 text-violet-soft" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Code2 size={13} className="shrink-0 text-violet-soft" />
                  <span>Graduating {profile.gradYear}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-line pt-3 text-center">
              <span className="font-mono text-[10px] uppercase tracking-wider text-dim">
                Click anywhere on card to flip
              </span>
            </div>
          </div>
        </motion.div>
      </button>
    </div>
  );
}

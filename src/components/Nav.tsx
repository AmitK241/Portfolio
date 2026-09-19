"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navSections, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 mt-0 sm:top-9">
      <nav className="section-wrap flex h-16 items-center justify-between border-b border-line/80 bg-bg/85 backdrop-blur-md transition-colors">
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight text-ink"
        >
          <span className="h-2 w-2 rounded-full bg-violet-soft transition-transform group-hover:scale-125" />
          <span>
            {profile.name.split(" ").map((w, i) => (
              <span key={i} className={i === 1 ? "text-violet-soft" : ""}>
                {w}
                {i === 0 ? " " : ""}
              </span>
            ))}
          </span>
        </a>

        {/* Desktop nav links with animated active pill */}
        <div className="hidden items-center gap-1 rounded-full border border-line/60 bg-panel/40 p-1 backdrop-blur-sm lg:flex">
          {navSections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  isActive ? "text-ink" : "text-dim hover:text-muted"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full border border-line2 bg-panel2/90 shadow-sm"
                  />
                )}
                <span className="relative z-10">{s.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full border border-line2 bg-panel/70 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft sm:inline-block"
          >
            Get in touch
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-line2 bg-panel/60 lg:hidden"
          >
            <span
              className={`h-0.5 w-4 rounded-full bg-ink transition-transform duration-200 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="section-wrap flex flex-col py-4">
              {navSections.map((s) => {
                const isActive = active === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-line/50 py-3.5 font-mono text-xs uppercase tracking-wider transition-colors last:border-none ${
                      isActive ? "font-semibold text-violet-soft" : "text-muted hover:text-ink"
                    }`}
                  >
                    <span>{s.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-violet py-2.5 font-mono text-xs uppercase tracking-wider text-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

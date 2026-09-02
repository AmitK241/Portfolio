"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Check, ChevronDown, Moon, Sun, Terminal } from "lucide-react";

const options = [
  { value: "dark", label: "Dark", desc: "Obsidian system", icon: Moon },
  { value: "light", label: "Light", desc: "Clean architectural", icon: Sun },
  { value: "matrix", label: "Matrix", desc: "CRT terminal green", icon: Terminal },
  { value: "paper", label: "Paper", desc: "Editorial serif print", icon: BookOpen },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!mounted) {
    return <div className="h-9 w-24 rounded-full border border-line2/60 bg-panel/50" aria-hidden />;
  }

  const active = options.find((o) => o.value === theme) ?? options[0];
  const ActiveIcon = active.icon;

  return (
    <div className="relative" ref={ref}>
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Select visual theme, currently set to ${active.label}`}
        className="flex items-center gap-2 rounded-full border border-line2 bg-panel/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink backdrop-blur-sm transition-all hover:border-violet-soft hover:text-violet-soft"
      >
        <ActiveIcon size={13} className="text-violet-soft" />
        <span className="font-medium">{active.label}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? "rotate-180 text-violet-soft" : "text-dim"}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="panel absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden !rounded-xl p-1.5 shadow-xl"
          >
            {options.map((opt) => {
              const Icon = opt.icon;
              const isActive = opt.value === theme;
              return (
                <button
                  key={opt.value}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setTheme(opt.value);
                    setOpen(false);
                  }}
                  className={`group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left font-mono transition-all ${
                    isActive
                      ? "bg-panel2 text-violet-soft"
                      : "text-muted hover:bg-panel2/80 hover:text-ink"
                  }`}
                >
                  <Icon size={14} className={`shrink-0 ${isActive ? "text-violet-soft" : "text-dim group-hover:text-ink"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11.5px] uppercase tracking-wider font-semibold">{opt.label}</p>
                    <p className="text-[11px] text-dim truncate">{opt.desc}</p>
                  </div>
                  {isActive && <Check size={13} className="text-violet-soft shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

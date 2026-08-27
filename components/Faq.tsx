"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What roles are you looking for right now?",
    a: "SDE, ML Engineer, or Gen AI Engineer roles for the 2026–27 campus placement cycle — full-stack engineering + applied generative AI systems is my core focus.",
  },
  {
    q: "What's your actual day-to-day stack?",
    a: "Python (FastAPI, PyTorch, LangChain), TypeScript (Next.js, React, Node), Groq LPU API, ChromaDB / vector stores, and MongoDB / Redis for production pipelines.",
  },
  {
    q: "Are your projects actually deployed, or just demos?",
    a: "Every project tagged LIVE in the Deploys section is running in production right now on Vercel and Render. Where hosted versions are paused, the full source code and commit history is public on GitHub.",
  },
  {
    q: "Do you take freelance or hackathon collaborations?",
    a: "Yes — especially AI/ML hackathons and high-impact scoped systems. Direct email is the fastest way to get in touch.",
  },
  {
    q: "Where can I see the code and architecture?",
    a: "Every project card links directly out to its GitHub repository, and you can explore all my public repositories at github.com/AmitK241.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-line bg-panel2/50 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <HelpCircle size={15} className="text-violet-soft" />
          <span className="font-display text-sm font-semibold text-ink">Frequently Asked Questions</span>
        </div>
        <span className="font-mono text-[10px] uppercase text-dim">5 queries</span>
      </div>

      <div className="divide-y divide-line/80">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="transition-colors hover:bg-panel2/30">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium"
              >
                <span className="text-[13.5px] text-ink sm:text-[14px]">{item.q}</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-dim transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-violet-soft" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-[13px] leading-relaxed text-muted">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

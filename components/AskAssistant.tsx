"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Bot,
  MessageCircleQuestion,
  RotateCcw,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { matchAnswer, suggestedQuestions } from "@/lib/assistant";

type Message = { role: "user" | "bot"; text: string; id: string };

export default function AskAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro-1",
      role: "bot",
      text: "Hi! I'm Amit's portfolio assistant. Ask me anything about his projects, architecture choices, tech stack, or placement availability.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const prevOpenRef = useRef(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) {
      if (prevOpenRef.current) {
        triggerRef.current?.focus();
      }
      prevOpenRef.current = false;
      return;
    }

    prevOpenRef.current = true;
    const timer = setTimeout(() => inputRef.current?.focus(), 150);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function ask(question: string) {
    const q = question.trim();
    if (!q) return;
    const userMsgId = `usr-${Date.now()}`;
    setMessages((m) => [...m, { id: userMsgId, role: "user", text: q }]);
    setInput("");
    setTyping(true);

    window.setTimeout(
      () => {
        const answer = matchAnswer(q);
        const botMsgId = `bot-${Date.now()}`;
        setMessages((m) => [...m, { id: botMsgId, role: "bot", text: answer }]);
        setTyping(false);
      },
      400 + Math.random() * 300
    );
  }

  function resetChat() {
    setMessages([
      {
        id: "intro-1",
        role: "bot",
        text: "Chat reset. Ask me anything about Amit's engineering background, projects, or availability!",
      },
    ]);
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        ref={triggerRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Ask about Amit AI Assistant"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-violet-soft/40 bg-violet text-white shadow-[0_12px_36px_-6px_rgb(var(--c-violet)/0.6)] transition-transform hover:scale-105 active:scale-95"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
            >
              <MessageCircleQuestion size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="status-dot absolute -right-0.5 -top-0.5 bg-green ring-2 ring-bg" />
      </motion.button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="AI Portfolio Assistant"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="panel fixed bottom-24 right-4 sm:right-6 z-50 flex h-[500px] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden !rounded-2xl border-line2/80 bg-panel/95 shadow-2xl backdrop-blur-xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-line bg-panel2/60 px-4 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-violet-soft">
                  <Bot size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-display text-[13px] font-semibold text-ink">
                    <span>Portfolio Assistant</span>
                    <span className="status-dot bg-green" />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-dim">
                    Deterministic QA &middot; Offline
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  title="Reset conversation"
                  aria-label="Reset chat"
                  className="rounded-lg p-1.5 text-dim transition-colors hover:bg-panel hover:text-ink"
                >
                  <RotateCcw size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close assistant"
                  className="rounded-lg p-1.5 text-dim transition-colors hover:bg-panel hover:text-ink"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div ref={scrollRef} className="flex-1 space-y-3.5 overflow-y-auto p-4">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "bot" && (
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet/30 bg-violet/10 text-violet-soft">
                      <Sparkles size={11} />
                    </span>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "rounded-br-sm bg-violet text-white"
                        : "rounded-bl-sm border border-line bg-panel2/80 text-ink/90"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet/30 bg-violet/10 text-violet-soft">
                    <Sparkles size={11} />
                  </span>
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-xs border border-line bg-panel2/80 px-3.5 py-2.5">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-blink rounded-full bg-violet-soft"
                        style={{ animationDelay: `${d * 0.18}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested Chips */}
              {messages.length <= 3 && !typing && (
                <div className="pt-2">
                  <p className="eyebrow mb-2 !text-[11px]">Suggested Queries</p>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => ask(q)}
                        className="rounded-full border border-line2 bg-panel2/40 px-2.5 py-1 text-left font-mono text-[10.5px] text-muted transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex items-center gap-2 border-t border-line bg-panel2/40 p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AXIOM, ML stack, placements..."
                aria-label="Ask a question about Amit's background"
                className="flex-1 rounded-full border border-line2 bg-panel px-4 py-2 text-[12.5px] text-ink placeholder:text-dim focus:border-violet-soft focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet text-white transition-all hover:bg-violet-soft disabled:opacity-40 disabled:hover:bg-violet"
                disabled={!input.trim()}
              >
                <ArrowUp size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

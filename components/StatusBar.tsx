"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function StatusBar() {
  const [latency, setLatency] = useState(38);
  const [time, setTime] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    const latencyTimer = setInterval(() => {
      setLatency(24 + Math.round(Math.random() * 28));
    }, 3000);

    const clockTimer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    }, 1000);

    setTime(
      new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      })
    );

    return () => {
      clearInterval(latencyTimer);
      clearInterval(clockTimer);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 hidden border-b border-line/80 bg-bg/85 backdrop-blur-md sm:block">
      <div className="section-wrap flex h-9 items-center justify-between font-mono text-[11px] text-dim">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 font-medium text-green">
            <span className="status-dot bg-green" />
            SYSTEM: ONLINE
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5">
            <span className="text-muted">LATENCY:</span> {latency}ms
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5">
            <span className="text-muted">UPTIME:</span> 99.98%
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden md:inline text-muted">PRAYAGRAJ, IN (MNNIT)</span>
          <span className="font-medium text-ink" suppressHydrationWarning>
            {time || "--:--:--"} IST
          </span>
        </div>
      </div>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="h-[2px] w-full origin-left bg-gradient-to-r from-violet-dim via-violet-soft to-amber"
      />
    </div>
  );
}

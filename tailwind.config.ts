import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--c-bg) / <alpha-value>)",
        panel: "rgb(var(--c-panel) / <alpha-value>)",
        panel2: "rgb(var(--c-panel2) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        line2: "rgb(var(--c-line2) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        dim: "rgb(var(--c-dim) / <alpha-value>)",
        violet: {
          DEFAULT: "rgb(var(--c-violet) / <alpha-value>)",
          soft: "rgb(var(--c-violet-soft) / <alpha-value>)",
          dim: "rgb(var(--c-violet-dim) / <alpha-value>)",
        },
        amber: "rgb(var(--c-amber) / <alpha-value>)",
        green: "rgb(var(--c-green) / <alpha-value>)",
        red: "rgb(var(--c-red) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display-active)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1E2230 1px, transparent 1px), linear-gradient(to bottom, #1E2230 1px, transparent 1px)",
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.2" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        scanline: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
      },
      animation: {
        blink: "blink 1.6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        scanline: "scanline 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

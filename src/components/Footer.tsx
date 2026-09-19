import { ArrowUp, Terminal } from "lucide-react";
import { profile, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel/30 py-10 backdrop-blur-sm">
      <div className="section-wrap flex flex-col gap-6">
        <div className="flex flex-col items-center justify-between gap-4 font-mono text-[11.5px] sm:flex-row">
          <div className="flex items-center gap-3 text-dim">
            <span className="flex items-center gap-1.5 font-medium text-green">
              <span className="status-dot bg-green" />
              SYSTEM ACTIVE
            </span>
            <span className="text-line2">/</span>
            <span>MNNIT ALLAHABAD</span>
            <span className="text-line2">/</span>
            <span className="text-violet-soft">2026–27</span>
          </div>

          <div className="flex items-center gap-4 text-muted">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink hover:underline underline-offset-4"
            >
              LeetCode
            </a>
            <a
              href={socials.gfg}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink hover:underline underline-offset-4"
            >
              GFG
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line/60 pt-6 font-mono text-[11px] text-dim sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name} &middot; Built with Next.js 14, Tailwind CSS &amp; Framer Motion.
          </p>

          <a
            href="#home"
            className="flex items-center gap-1 text-dim transition-colors hover:text-violet-soft"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

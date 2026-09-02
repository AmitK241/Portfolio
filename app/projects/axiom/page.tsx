import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Flame,
  Github,
  Layers,
  Network,
  Radio,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "AXIOM — Case Study | Amit Kumar",
  description:
    "Four specialized AI agents debate your startup thesis or philosophical claim in real time, exposing hidden assumptions before the market, a VC, or reality finds them.",
};

export default function AxiomCaseStudy() {
  const axiom = projects.find((p) => p.slug === "axiom");
  const githubUrl =
    axiom?.links.find((l) => l.label === "GitHub")?.url ||
    "https://github.com/AmitK241/Axiom";
  const demoUrl =
    axiom?.links.find((l) => l.label.toLowerCase().includes("demo"))?.url ||
    "https://axiom-pied-zeta.vercel.app/";
  const devpostUrl =
    axiom?.links.find((l) => l.label === "Devpost")?.url ||
    "https://devpost.com/software/axiom-the-cognitive-stress-test-engine";

  const techPills = [
    "FastAPI",
    "LangChain",
    "Groq LPU",
    "ChromaDB",
    "MongoDB",
    "React",
    "D3.js",
    "SSE",
  ];

  const startupMatrixAgents = [
    {
      role: "Investor",
      focus: "Unit Economics & TAM",
      description:
        "Probes financial viability, defensibility, capital efficiency, margin structures, and realistic return multiples.",
    },
    {
      role: "Critic",
      focus: "Operational Blind Spots",
      description:
        "Identifies unaddressed failure modes, regulatory headwinds, false assumptions, and fatal execution risks.",
    },
    {
      role: "Customer",
      focus: "Willingness to Pay & Friction",
      description:
        "Questions actual problem severity, switching costs, workflow disruption, and perceived value proposition.",
    },
    {
      role: "Growth Hacker",
      focus: "Distribution & Acquisition Moat",
      description:
        "Stress-tests CAC:LTV mechanics, virality bottlenecks, retention loops, and scalability thresholds.",
    },
  ];

  const philosophicalMatrixAgents = [
    {
      role: "Historian",
      focus: "Historical Precedents",
      description:
        "Leverages ChromaDB vector search to retrieve analogous historical cases, debunking claims of true novelty.",
    },
    {
      role: "Contrarian",
      focus: "Inverted Reasoning",
      description:
        "Constructs the strongest plausible inverse argument to uncover blind reliance on conventional consensus.",
    },
    {
      role: "Scientist",
      focus: "Empirical Rigor & Falsifiability",
      description:
        "Demands testable hypotheses, falsifiability metrics, statistical reality checks, and observable benchmarks.",
    },
    {
      role: "Philosopher",
      focus: "Epistemic Axioms & Logic",
      description:
        "Deconstructs fundamental presuppositions, syllogistic leaps, semantic traps, and core axiomatic validity.",
    },
  ];

  const deepDiveCards = [
    {
      icon: Network,
      title: "Async Multi-Agent Orchestration",
      tag: "Concurrency Architecture",
      accent: "text-violet-soft",
      border: "border-violet/30",
      bg: "bg-violet/10",
      description:
        "Engineered with FastAPI and LangChain, running simultaneous agent debates via asyncio.gather. Because agents reason in parallel rather than serially, they remain un-anchored to each other's biases, ensuring authentic adversarial stress-testing without groupthink convergence.",
    },
    {
      icon: Cpu,
      title: "Model Choice & Reasoning Evolution",
      tag: "Inference Optimization",
      accent: "text-amber",
      border: "border-amber/30",
      bg: "bg-amber/10",
      description:
        "Initially deployed on Groq's llama-3.1-8b-instant for sub-second response times, but later migrated to openai/gpt-oss-120b on Groq LPU. This upgrade delivered superior epistemic depth, nuanced debate synthesis, and significantly higher detection rates for subtle cognitive fallacies.",
    },
    {
      icon: ShieldCheck,
      title: "Production Reliability & Edge Cases",
      tag: "Resilience Engineering",
      accent: "text-green",
      border: "border-green/30",
      bg: "bg-green/10",
      description:
        "To survive heavy concurrent traffic on free-tier infrastructure, implemented a client-side SSE (Server-Sent Events) watchdog with Fibonacci backoff for reconnects, an asyncio.Semaphore-based rate limiter, and scheduled keep-alive cron pings that eliminate backend cold starts.",
    },
    {
      icon: Server,
      title: "Resilient Cloud Infrastructure",
      tag: "Deployment Stability",
      accent: "text-violet-soft",
      border: "border-violet/30",
      bg: "bg-violet/10",
      description:
        "Successfully migrated the production backend from Railway to Render to overcome socket termination limits during prolonged multi-agent debates. Render's persistent runtime provided reliable long-lived streaming connections and zero interrupted analysis runs.",
    },
    {
      icon: Layers,
      title: "Interactive Structural Visualization",
      tag: "D3.js Topology",
      accent: "text-amber",
      border: "border-amber/30",
      bg: "bg-amber/10",
      description:
        "Rather than wall-of-text outputs, AXIOM renders an interactive D3.js force-directed graph. The computed Blind Spot Score and interrelated vulnerability nodes provide an immediate structural topology of where the user's proposition is most fragile.",
    },
  ];

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-24 sm:pt-36 lg:pt-40">
        <div className="section-wrap">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <a
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-muted transition-colors hover:text-violet-soft"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>Back to portfolio</span>
            </a>
          </div>

          {/* 1. HERO SECTION */}
          <header className="panel relative overflow-hidden p-7 sm:p-10 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(109,94,245,0.22),transparent)]"
            />

            <div className="relative z-10">
              {/* Award Badge */}
              <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-amber sm:text-[12px]">
                <Award size={14} className="shrink-0" />
                <span>Best AI Project Award · FutureAI Global Hackathon 2026</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                AXIOM &mdash;{" "}
                <span className="text-gradient inline-block">
                  Cognitive Blind Spot Engine
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-muted sm:text-lg">
                Four specialized AI agents debate your startup thesis or
                philosophical claim in real time, exposing hidden assumptions
                before the market, a VC, or reality finds them.
              </p>

              {/* Tech Pills */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-dim">
                  Stack:
                </span>
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg border border-line2 bg-panel2/60 px-3 py-1 font-mono text-[11.5px] text-ink backdrop-blur-sm transition-colors hover:border-violet-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 font-mono text-[12px] uppercase tracking-wider text-white shadow-[0_10px_25px_-5px_rgb(var(--c-violet)/0.4)] transition-all hover:bg-violet-soft hover:shadow-[0_14px_30px_-5px_rgb(var(--c-violet)/0.6)]"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line2 bg-panel px-5 py-3 font-mono text-[12px] uppercase tracking-wider text-ink backdrop-blur-sm transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={devpostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line2 bg-panel px-5 py-3 font-mono text-[12px] uppercase tracking-wider text-ink backdrop-blur-sm transition-all hover:border-amber hover:bg-panel2 hover:text-amber"
                >
                  <ExternalLink size={15} />
                  <span>Devpost Submission</span>
                </a>
              </div>
            </div>
          </header>

          {/* 2. THE PROBLEM */}
          <section className="mt-16 sm:mt-24">
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />
                <p className="eyebrow">01 / The Problem</p>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                The Cost of Consensus &amp; Unchallenged Echo Chambers
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
              <div className="panel p-7 sm:p-9">
                <p className="text-[15.5px] leading-relaxed text-ink/90 sm:text-[17px]">
                  Founders and thinkers usually get one-sided, non-adversarial
                  feedback on their ideas from friends or mentors. Real
                  stress-tests &mdash; from VCs, the market, or peer review
                  &mdash; come later, when it&apos;s expensive to be wrong. AXIOM
                  front-loads that adversarial pressure.
                </p>
                <div className="mt-6 border-t border-line pt-6">
                  <p className="font-mono text-[12px] text-muted">
                    When validation is polite, failure is deferred until
                    deployment. By replacing superficial encouragement with
                    unsparing AI devil&apos;s advocates, creators can shore up
                    fatal flaws while code and capital are still cheap to change.
                  </p>
                </div>
              </div>

              <div className="panel flex flex-col justify-between p-7 bg-panel2/40 sm:p-9">
                <div>
                  <div className="flex items-center gap-2 text-dim font-mono text-[11px] uppercase tracking-wider">
                    <ShieldAlert size={15} className="text-amber" />
                    <span>The Contrast</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-xl border border-line/60 bg-panel/60 p-4">
                      <p className="font-mono text-[11px] uppercase text-dim">
                        Standard Feedback Loop
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        Polite nods, confirmation bias, delayed market
                        confrontation, and uncalculated downside.
                      </p>
                    </div>
                    <div className="rounded-xl border border-violet/30 bg-violet/10 p-4">
                      <p className="font-mono text-[11px] uppercase text-violet-soft">
                        AXIOM Stress-Testing
                      </p>
                      <p className="mt-1 text-sm text-ink">
                        Asynchronous multi-agent debate, grounded historical
                        counter-examples, and quantitative Blind Spot Scoring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. THE APPROACH */}
          <section className="mt-16 sm:mt-24">
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />
                <p className="eyebrow">02 / The Approach</p>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Dual-Matrix Engine &amp; Asynchronous Debate
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                AXIOM deploys two distinct operational matrices depending on the
                nature of the proposition, each utilizing four specialized
                agents with strictly locked personas.
              </p>
            </div>

            {/* Matrix 1: Startup & VC */}
            <div className="panel overflow-hidden p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
                <div>
                  <span className="eyebrow text-violet-soft font-semibold">
                    Matrix 01
                  </span>
                  <h3 className="font-display mt-1 text-xl font-bold text-ink">
                    Startup &amp; Venture Capital Matrix
                  </h3>
                </div>
                <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-[11px] uppercase text-violet-soft">
                  Commercial Stress-Test
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {startupMatrixAgents.map((agent) => (
                  <div
                    key={agent.role}
                    className="rounded-xl border border-line bg-panel2/40 p-4 transition-colors hover:border-violet-soft"
                  >
                    <p className="font-display text-base font-semibold text-ink">
                      {agent.role}
                    </p>
                    <p className="font-mono mt-0.5 text-[11px] uppercase text-violet-soft">
                      {agent.focus}
                    </p>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">
                      {agent.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Matrix 2: Philosophical & Epistemic */}
            <div className="panel mt-6 overflow-hidden p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
                <div>
                  <span className="eyebrow text-amber font-semibold">
                    Matrix 02
                  </span>
                  <h3 className="font-display mt-1 text-xl font-bold text-ink">
                    Philosophical &amp; Epistemic Matrix
                  </h3>
                </div>
                <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-[11px] uppercase text-amber">
                  Theoretical Stress-Test
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {philosophicalMatrixAgents.map((agent) => (
                  <div
                    key={agent.role}
                    className="rounded-xl border border-line bg-panel2/40 p-4 transition-colors hover:border-amber"
                  >
                    <p className="font-display text-base font-semibold text-ink">
                      {agent.role}
                    </p>
                    <p className="font-mono mt-0.5 text-[11px] uppercase text-amber">
                      {agent.focus}
                    </p>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">
                      {agent.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ChromaDB & Blind Spot Score Mechanisms */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="panel p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-violet-soft">
                    <Database size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink">
                      ChromaDB Precedent Grounding
                    </h4>
                    <p className="font-mono text-[11px] text-dim">
                      Vector-Retrieved Contrarian Arguments
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
                  Rather than generic counter-arguments, ChromaDB equips the
                  Historian agent with semantic vector search over curated
                  historical records and documented startup failures. Arguments
                  are anchored in specific empirical precedents rather than
                  hallucinated generalizations.
                </p>
              </div>

              <div className="panel p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green/30 bg-green/10 text-green">
                    <Brain size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink">
                      Weighted Blind Spot Score
                    </h4>
                    <p className="font-mono text-[11px] text-dim">
                      Quantified Cognitive Vulnerability
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
                  Agents debate asynchronously and adversarially without
                  anchoring to prior outputs. A synthesis pipeline scores the
                  thesis across multiple vulnerability dimensions, aggregating
                  arguments into a composite Blind Spot Score that highlights
                  the highest-risk blind spots.
                </p>
              </div>
            </div>
          </section>

          {/* 4. TECHNICAL DEEP-DIVE */}
          <section className="mt-16 sm:mt-24">
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />
                <p className="eyebrow">03 / Architecture</p>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Technical Deep-Dive &amp; Systems Engineering
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                Architectural choices and production hardening required to
                deliver reliable, concurrent, and low-latency multi-agent
                debates.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {deepDiveCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="panel panel-hover flex flex-col justify-between p-6 sm:p-8"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-line pb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg border ${card.border} ${card.bg} ${card.accent}`}
                          >
                            <IconComponent size={18} />
                          </div>
                          <div>
                            <h3 className="font-display text-[15.5px] font-semibold text-ink">
                              {card.title}
                            </h3>
                            <p className="font-mono text-[10.5px] uppercase tracking-wider text-dim">
                              {card.tag}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="mt-5 text-[13.5px] leading-relaxed text-muted">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 5. RECOGNITION */}
          <section className="mt-16 sm:mt-24">
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />
                <p className="eyebrow">04 / Recognition</p>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Global Hackathon Honors &amp; Industry Validation
              </h2>
            </div>

            <div className="panel relative overflow-hidden p-7 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[radial-gradient(circle_at_100%_0%,rgba(245,166,35,0.15),transparent)]"
              />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-amber">
                    <Award size={13} />
                    <span>FutureAI Global Hackathon 2026 Winner</span>
                  </div>

                  <h3 className="font-display mt-4 text-2xl font-bold text-ink sm:text-3xl">
                    Best AI Project Award
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
                    Awarded 1st place in the AI track among{" "}
                    <span className="font-semibold text-ink">
                      462 global participants
                    </span>
                    . The project was evaluated and chosen by an industry
                    judging panel comprising senior engineering leaders from{" "}
                    <span className="font-semibold text-ink">
                      Google, Amazon, Netflix, IBM, and Deloitte
                    </span>
                    .
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href={devpostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-5 py-2.5 font-mono text-[11.5px] uppercase tracking-wider text-amber transition-all hover:bg-amber hover:text-black"
                    >
                      <CheckCircle2 size={14} />
                      <span>Verified on Devpost</span>
                    </a>
                    <span className="font-mono text-[11px] text-dim">
                      Official submission &middot; Open-source proof
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 self-center">
                  <div className="rounded-xl border border-line bg-panel2/50 p-4 text-center">
                    <p className="font-display text-3xl font-bold text-amber">
                      462
                    </p>
                    <p className="font-mono mt-1 text-[11px] uppercase text-dim">
                      Participants
                    </p>
                  </div>
                  <div className="rounded-xl border border-line bg-panel2/50 p-4 text-center">
                    <p className="font-display text-3xl font-bold text-violet-soft">
                      #1
                    </p>
                    <p className="font-mono mt-1 text-[11px] uppercase text-dim">
                      Best AI Project
                    </p>
                  </div>
                  <div className="rounded-xl border border-line bg-panel2/50 p-4 text-center">
                    <p className="font-display text-3xl font-bold text-green">
                      5
                    </p>
                    <p className="font-mono mt-1 text-[11px] uppercase text-dim">
                      Tech Giant Juries
                    </p>
                  </div>
                  <div className="rounded-xl border border-line bg-panel2/50 p-4 text-center">
                    <p className="font-display text-3xl font-bold text-ink">
                      8
                    </p>
                    <p className="font-mono mt-1 text-[11px] uppercase text-dim">
                      Locked AI Personas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. BOTTOM NAVIGATION */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-line pt-10 sm:flex-row">
            <a
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-line2 bg-panel px-6 py-3 font-mono text-[12px] uppercase tracking-wider text-ink transition-all hover:border-violet-soft hover:bg-panel2 hover:text-violet-soft"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>Back to portfolio</span>
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 font-mono text-[11.5px] uppercase tracking-wider text-white transition-all hover:bg-violet-soft"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line2 bg-panel px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-wider text-ink transition-all hover:border-violet-soft hover:text-violet-soft"
              >
                <Github size={13} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

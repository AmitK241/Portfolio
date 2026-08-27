import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        <span className="text-gradient inline-block">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">{description}</p>
      )}
    </div>
  );
}

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "violet" | "amber" | "green";
}) {
  const variantStyles = {
    default: "border-line bg-panel2/60 text-muted hover:border-line2 hover:text-ink",
    violet: "border-violet/30 bg-violet/10 text-violet-soft",
    amber: "border-amber/30 bg-amber/10 text-amber",
    green: "border-green/30 bg-green/10 text-green",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}

export function StatusPill({
  status,
}: {
  status: "live" | "demo" | "submitted";
}) {
  const map = {
    live: {
      color: "bg-green",
      text: "text-green",
      border: "border-green/30 bg-green/10",
      label: "LIVE",
    },
    demo: {
      color: "bg-amber",
      text: "text-amber",
      border: "border-amber/30 bg-amber/10",
      label: "DEMO MODE",
    },
    submitted: {
      color: "bg-violet",
      text: "text-violet-soft",
      border: "border-violet/30 bg-violet/10",
      label: "SUBMITTED",
    },
  } as const;
  const s = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${s.border}`}
    >
      <span className={`status-dot ${s.color}`} />
      <span className={`font-semibold ${s.text}`}>{s.label}</span>
    </span>
  );
}

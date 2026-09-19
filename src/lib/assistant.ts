import {
  achievements,
  certifications,
  currentFocus,
  education,
  profile,
  projects,
  skillGroups,
  socials,
} from "@/lib/data";

type Entry = { keywords: string[]; answer: string };

const entries: Entry[] = [
  {
    keywords: ["who", "amit", "about", "yourself", "intro"],
    answer: `${profile.bio} He's a ${profile.degree.toLowerCase()} at ${profile.university}, based in ${profile.location}.`,
  },
  {
    keywords: ["project", "built", "work", "portfolio", "made"],
    answer: `Amit has shipped ${projects.length} production projects — ${projects
      .map((p) => p.name)
      .join(", ")}. The flagship is ${projects[0].name}: ${projects[0].description}`,
  },
  {
    keywords: ["stack", "tech", "technology", "tools", "language", "skill"],
    answer: `Core stack spans ${skillGroups.map((g) => g.category.toLowerCase()).join(", ")} — including ${skillGroups
      .flatMap((g) => g.items)
      .slice(0, 8)
      .join(", ")}, and more.`,
  },
  {
    keywords: ["placement", "internship", "hire", "open", "job", "role", "opportunit"],
    answer: `Yes — Amit is open to: ${profile.openTo.join("; ")}.`,
  },
  {
    keywords: ["github", "repo", "code", "source"],
    answer: `Amit's GitHub is ${socials.github} — every project card links straight to its repo too.`,
  },
  {
    keywords: ["contact", "email", "reach", "linkedin", "connect"],
    answer: `Best ways to reach Amit: email at ${profile.email}, or LinkedIn at ${socials.linkedin}.`,
  },
  {
    keywords: ["achievement", "award", "hackathon", "win"],
    answer: achievements.map((a) => `${a.label} — ${a.detail}`).join(" "),
  },
  {
    keywords: ["education", "college", "university", "degree", "mnnit"],
    answer: education.map((e) => `${e.degree} at ${e.institution} (${e.period}).`).join(" "),
  },
  {
    keywords: ["certification", "certificate", "coursera"],
    answer: certifications.map((c) => `${c.name} — ${c.issuer}.`).join(" "),
  },
  {
    keywords: ["learning", "currently", "focus", "now", "building"],
    answer: `Right now Amit is building: ${currentFocus.building.slice(0, 2).join("; ")}. And learning: ${currentFocus.learning
      .slice(0, 2)
      .join("; ")}.`,
  },
  {
    keywords: ["leetcode", "dsa", "competitive", "rating"],
    answer: `Amit has solved 550+ DSA problems with a peak LeetCode rating of 1734.`,
  },
  {
    keywords: ["axiom"],
    answer: projects.find((p) => p.slug === "axiom")?.description ?? "",
  },
  {
    keywords: ["anamnesis"],
    answer: projects.find((p) => p.slug === "anamnesis")?.description ?? "",
  },
];

export const suggestedQuestions = [
  "Who is Amit?",
  "What projects has he built?",
  "What's his tech stack?",
  "Is he open to placements?",
  "What's his GitHub?",
];

export function matchAnswer(query: string): string {
  const q = query.toLowerCase();
  let best: { entry: Entry; score: number } | null = null;

  for (const entry of entries) {
    const score = entry.keywords.reduce((acc, kw) => (q.includes(kw) ? acc + 1 : acc), 0);
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }

  if (best) return best.entry.answer;

  return `I've got structured info on Amit's projects, stack, education, and availability — try asking about one of those, or reach him directly at ${profile.email}.`;
}

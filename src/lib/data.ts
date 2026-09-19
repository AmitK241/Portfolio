// All content here is sourced directly from Amit's own bio/profile data.
// Edit this file to update any text across the site.

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amitkumar.dev";

export const profile = {
  name: "Amit Kumar",
  role: "Software Engineer · ML Engineer · Gen AI Engineer",
  tagline:
    "CS student & full-stack developer specializing in GenAI, agentic AI, and machine learning.",
  bio: "I build end-to-end intelligent systems — from async multi-agent AI pipelines that debate and stress-test ideas, to production MERN platforms serving real users. I care about clean architecture, measurable reliability, and shipping things that actually stay up under load.",
  longBio:
    "I'm a final-year Computer Science engineer building at the intersection of full-stack engineering and applied generative AI. My recent work spans async multi-agent LLM pipelines that stay concurrency-safe and self-healing under real load, persistent-memory RAG systems for data pipelines, and production MERN platforms with real-time features. I don't just prototype — I debug the things that break in production: rate limits, race conditions, cold-start delays, and the gap between \"works on my machine\" and \"works for five people at once.\"",
  location: "Prayagraj, Uttar Pradesh, India",
  university: "Motilal Nehru National Institute of Technology, Allahabad",
  degree: "B.Tech, Computer Science & Engineering — Final Year",
  gradYear: "2026–27",
  email: "amitkumar738714@gmail.com",
  resumeUrl: "/Amit_Kumar_Resume.pdf",
  openTo: [
    "Software Engineer (SDE) — Campus Placements 2026-27",
    "ML Engineer — Applied ML & model deployment",
    "Gen AI Engineer — LLM systems, RAG, agentic applications",
    "Full-Stack Engineer — MERN + AI-native product engineering",
  ],
  philosophy: "Ship production-quality systems — not just prototypes that work once.",
};

export const socials = {
  github: "https://github.com/AmitK241",
  linkedin: "https://www.linkedin.com/in/amit-kumar-3a602a289",
  leetcode: "https://leetcode.com/u/amit5646/",
  gfg: "https://www.geeksforgeeks.org/user/amitkumbmm0/",
  email: "mailto:amitkumar738714@gmail.com",
};

export const liveMetrics = [
  { label: "Deployed services", value: "5" },
  { label: "DSA problems solved", value: "550+" },
  { label: "Peak LeetCode rating", value: "1734" },
  { label: "Hackathons shipped", value: "4" },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["C++", "C", "Python", "JavaScript", "TypeScript"] },
  { category: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3"] },
  { category: "Backend & Databases", items: ["Node.js", "Express", "FastAPI", "MongoDB", "Redis"] },
  { category: "AI / ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost"] },
  { category: "Cloud & DevOps", items: ["Git", "GitHub", "Docker", "Vercel", "Render"] },
  {
    category: "AI Infra",
    items: [
      "LangChain",
      "Groq LPU",
      "openai/gpt-oss-120b",
      "ChromaDB",
      "Sentence-Transformers",
      "Vector Embeddings",
      "Prompt Engineering",
    ],
  },
];

export type ProficiencyRow = {
  domain: string;
  level: number; // 0-10
  levelLabel: string;
  details: string;
};

export const proficiency: ProficiencyRow[] = [
  {
    domain: "Multi-Agent Systems",
    level: 9,
    levelLabel: "Advanced",
    details: "Async agent orchestration, asyncio.gather, concurrency-safe LLM pipelines",
  },
  {
    domain: "LLM Engineering",
    level: 9,
    levelLabel: "Advanced",
    details: "LangChain LCEL, Runnables, Chains, Agents, Memory, RAG",
  },
  {
    domain: "Generative AI APIs",
    level: 9,
    levelLabel: "Advanced",
    details: "Groq API (openai/gpt-oss-120b), streaming inference, semaphore-gated rate limiting",
  },
  {
    domain: "RAG Systems",
    level: 8,
    levelLabel: "Proficient",
    details: "Vector stores, embeddings, semantic retrieval, persistent memory pipelines",
  },
  {
    domain: "Transformer Architecture",
    level: 7,
    levelLabel: "Proficient",
    details: "Attention mechanism, positional encoding, nanoGPT internals",
  },
  {
    domain: "Classical ML",
    level: 7,
    levelLabel: "Proficient",
    details: "XGBoost, gradient boosting, scikit-learn, feature engineering",
  },
  {
    domain: "Deep Learning",
    level: 6,
    levelLabel: "Intermediate",
    details: "PyTorch, CNNs, RNNs, training pipelines",
  },
];

export type Project = {
  slug: string;
  name: string;
  tag?: string;
  status: "live" | "demo" | "submitted";
  description: string;
  stack: string[];
  highlights: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "axiom",
    name: "AXIOM",
    tag: "Cognitive Stress-Test Engine · Best AI Project Award",
    status: "live",
    description:
      "An AI-native multi-agent framework that debates your startup thesis or philosophical claim to systematically expose its hidden assumptions and structural blind spots.",
    stack: ["FastAPI", "LangChain", "Groq LPU", "ChromaDB", "D3.js", "Render"],
    highlights: [
      "Won Best AI Project Award at FutureAI Global Hackathon 2026 among 462 participants, judged by engineers from Google, Amazon, Netflix, IBM & Deloitte",
      "Built async processing pipelines with FastAPI + LangChain, running parallel multi-agent debates via asyncio.gather for genuinely adversarial, non-anchored reasoning",
      "Engineered production-grade reliability: SSE watchdog with Fibonacci backoff, asyncio.Semaphore rate limiting, and keep-alive cron pings to survive concurrent users on free-tier infra",
      "Rendered risk metrics as an interactive D3.js force-directed graph for real-time structural visualization",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/AmitK241/Axiom" },
      { label: "Live demo", url: "https://axiom-pied-zeta.vercel.app/" },
      { label: "Devpost", url: "https://devpost.com/software/axiom-the-cognitive-stress-test-engine" },
    ],
  },
  {
    slug: "anamnesis",
    name: "Anamnesis",
    tag: "Persistent Memory Layer for AI Data Pipelines",
    status: "live",
    description:
      "A five-agent RAG system that gives data pipelines a memory — recalling past incidents by semantic similarity and generating LLM-powered fixes instead of solving the same failure twice.",
    stack: ["DataHub", "Groq API", "Sentence-Transformers", "D3.js", "Render"],
    highlights: [
      "Designed a five-agent persistent memory pipeline on top of DataHub, with a custom incidentMemory PDL aspect for structured incident storage",
      "Built semantic-similarity incident recall using sentence-transformers, paired with Groq-powered LLM fix generation",
      "Frontend features a D3.js \"Memory Constellation\" graph visualizing incident relationships, in a high-contrast custom UI",
      "Debugged real production-grade issues: DataHub last-write-wins corruption, a silently injected mock-data fallback, and a Windows IPv6 localhost resolution bug",
      "Submitted to the DataHub Agent Hackathon 2026",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/AmitK241/Anamnesis" },
      { label: "Live demo", url: "https://anamnesis-agent.onrender.com/" },
    ],
  },
  {
    slug: "documind",
    name: "DocuMind",
    tag: "RAG-Powered PDF Chatbot",
    status: "live",
    description:
      "A retrieval-augmented chatbot that lets you have a real conversation with any PDF — grounded, cited, and fast.",
    stack: ["Streamlit", "ChromaDB", "Groq LPU", "openai/gpt-oss-120b"],
    highlights: [
      "Built a full RAG pipeline — chunking, embedding, and vector retrieval over ChromaDB — for grounded, hallucination-resistant Q&A over uploaded documents",
      "Powered by Groq LPU inference running openai/gpt-oss-120b for near-instant, cited responses",
      "Shipped a clean Streamlit interface for fast document upload and chat",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/AmitK241" },
      { label: "Live demo", url: "https://iwixvgu3xkvcakgxtwcyyp.streamlit.app/" },
    ],
  },
  {
    slug: "careercopilot",
    name: "CareerCopilot AI",
    tag: "AI-Powered Placement Preparation Platform",
    status: "live",
    description:
      "A solo-developed MERN platform that adapts to individual users, delivering personalized AI roadmaps, real-time mock interviews, and ATS resume analysis for campus recruitment.",
    stack: ["MERN", "Groq API", "JWT", "Render"],
    highlights: [
      "Built an intelligent placement-prep assistant powered by the Groq API (openai/gpt-oss-120b), delivering role-adaptive mock interviews and ATS resume scoring",
      "Generates dynamic, personalized learning roadmaps based on individual user progress and target role",
      "Streaming LLM responses with sub-2s latency via Groq inference, backed by a modular REST API and JWT-secured auth, deployed on Render",
      "Pure black + neon-accent glassmorphism UI, built for a recruiter-facing, production-ready feel",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/AmitK241/CareerCopilot-AI" },
      { label: "Live demo", url: "https://client-lac-iota-74.vercel.app/" },
    ],
  },
  {
    slug: "cinovix",
    name: "Cinovix",
    tag: "AI-Powered Streaming Platform",
    status: "live",
    description:
      "A full-stack streaming platform with AI-driven recommendations and natural-language semantic search.",
    stack: ["MERN", "Groq API", "TMDB API", "Tailwind CSS v4"],
    highlights: [
      "Architected a full MERN platform with JWT auth, multi-profile support, and TMDB API integration",
      "Built an AI recommendation engine using Groq's openai/gpt-oss-120b to analyze user history and generate personalized suggestions",
      "Engineered a semantic search pipeline that parses conversational queries into structured filters via prompt engineering",
      "Designed a custom Tailwind CSS v4 interface with simulated subscription flows and signature verification",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/AmitK241/Cinovix" },
      { label: "Live demo", url: "https://cinovix.vercel.app/" },
    ],
  },
  {
    slug: "quickchat",
    name: "QuickChat",
    tag: "Real-Time Messaging Platform",
    status: "live",
    description:
      "A production-ready MERN + Socket.IO chat application with live presence, rooms, and media sharing.",
    stack: ["Node.js", "Socket.IO", "Redis", "Cloudinary"],
    highlights: [
      "Built a real-time messaging backend with Node.js, Express, and Socket.IO",
      "Added a Redis pub/sub presence layer for scalable online-user tracking across server instances",
      "Designed MongoDB/Mongoose schemas for DMs and group rooms, secured with JWT and bcrypt",
      "Shipped Cloudinary media uploads, deployed on Vercel and Render",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/AmitK241/Chat-App" },
      { label: "Live demo", url: "https://chat-app-client-wheat-three.vercel.app/login" },
    ],
  },
];

export type TimelineEntry = {
  date: string;
  title: string;
  org: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    date: "2026",
    title: "Best AI Project Award — AXIOM",
    org: "FutureAI Global Hackathon 2026",
    description:
      "Won among 462 global participants, judged by engineers from Google, Amazon, Netflix, IBM & Deloitte.",
  },
  {
    date: "2026",
    title: "DataHub Agent Hackathon",
    org: "DataHub",
    description: "Submitted Anamnesis — a five-agent persistent memory layer for AI data pipelines.",
  },
  {
    date: "2026",
    title: "DevNetwork AI+ML Hackathon",
    org: "DevNetwork",
    description: "Built and presented CareerCopilot-AI's real-time resume-intelligence module.",
  },
  {
    date: "2026",
    title: "Moonshot Hackathon",
    org: "Moonshot",
    description: "Submitted AXIOM — FastAPI + LangChain + Groq LPU pipeline with live D3.js visualization.",
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Motilal Nehru National Institute of Technology, Allahabad",
    period: "Final Year · 2026–27",
    detail:
      "Coursework spanning Object-Oriented Programming (OOPs), Operating Systems (OS), Computer Networks (CN), Database Management Systems (DBMS), and Data Structures & Algorithms (DSA).",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  url?: string; // official verify link, if one exists
  image?: string; // local /public path, if no verify link exists
};

export const certifications: Certification[] = [
  {
    name: "Deep Learning & GenAI Exploration",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/YHKOGIRMLV7R",
  },
  {
    name: "Software Engineer Intern — Role Certification",
    issuer: "HackerRank",
    date: "Jul 2026",
    url: "https://www.hackerrank.com/certificates/iframe/23a2987b9fb6",
  },
  {
    name: "JavaScript (Basic) — Skill Certification",
    issuer: "HackerRank",
    date: "Jul 2026",
    url: "https://www.hackerrank.com/certificates/iframe/b254f7d2c031",
  },
  {
    name: "Software Engineer — Role Certification",
    issuer: "HackerRank",
    date: "Aug 2026",
    url: "https://www.hackerrank.com/certificates/iframe/ecd1827576cb",
  },
  {
    name: "ML Empowerment Build Challenge 2.0 — Participation (Axiom)",
    issuer: "ML Empowerment Foundation",
    date: "Aug 2026",
    image: "/certificates/ml-empowerment-axiom.jpg",
  },
  {
    name: "Best AI Project Award — Certificate of Excellence",
    issuer: "FutureAI Global Hackathon 2026",
    date: "2026",
    image: "/certificates/futureai-best-ai-project-award.jpg",
  },
];

export type Achievement = {
  label: string;
  detail: string;
  url?: string;
};

export const achievements: Achievement[] = [
  {
    label: "Best AI Project Award",
    detail:
      "FutureAI Global Hackathon 2026 — for AXIOM, among 462 global participants, judged by engineers from Google, Amazon, Netflix, IBM & Deloitte.",
    url: "https://drive.google.com/file/d/19wXN8K1nxotHAIFhZqWpI-sEXpzKxXNI/view",
  },
  {
    label: "550+ DSA Problems Solved",
    detail: "Peak LeetCode rating: 1734.",
  },
  {
    label: "Production Deployments",
    detail: "AXIOM, Anamnesis, CareerCopilot-AI, Cinovix & QuickChat — all live on Vercel/Render + MongoDB Atlas.",
  },
  {
    label: "Coursera Verified",
    detail: "Deep Learning & GenAI Exploration.",
  },
];

export const currentFocus = {
  learning: [
    "LLM Internals — transformer architecture, attention mechanisms, nanoGPT",
    "LangChain Advanced — LCEL, Runnables, output parsers, async chains",
    "RAG & Memory Systems — vector databases, embedding strategies, persistent-memory retrieval",
    "Backend Engineering — HTTP internals through production-grade system design",
    "DBMS Internals — file structures, indexing, B/B+ trees",
    "DSA — NeetCode 150 in C++: hashmaps, DP, trees, graphs, heaps",
  ],
  building: [
    "AXIOM — expanding to accept full document uploads + custom agent personas",
    "Anamnesis — persistent memory layer for AI data pipelines",
    "CareerCopilot AI — RAG-powered resume analysis and multi-agent pipelines",
    "Agentic workflows — tool-calling agents, ReAct pattern, multi-step reasoning",
  ],
};

export const navSections = [
  { id: "home", label: "Boot" },
  { id: "about", label: "Profile" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Deploys" },
  { id: "timeline", label: "Signal" },
  { id: "education", label: "Origin" },
  { id: "contact", label: "Connect" },
];

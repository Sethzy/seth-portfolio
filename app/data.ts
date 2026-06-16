import {
  CalendarDays,
  Code2,
  Database,
  Globe2,
  Layers3,
  MousePointer2,
  Palette,
  Server,
  Sparkles,
  TerminalSquare,
  Zap
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" }
];

export const socialLinks = ["GitHub"];

export type TechStackItem = {
  name: string;
  imageSrc?: string;
  slug?: string;
  source?: "skill" | "simple";
  initials?: string;
  color?: string;
};

export const techStack: TechStackItem[] = [
  { name: "TypeScript", slug: "ts", source: "skill" },
  { name: "React", slug: "react", source: "skill" },
  { name: "Next.js", slug: "nextjs", source: "skill" },
  { name: "TanStack", imageSrc: "/logos/tanstack.png" },
  { name: "Tailwind CSS", slug: "tailwind", source: "skill" },
  { name: "Supabase", slug: "supabase", source: "skill" },
  { name: "PostgreSQL", slug: "postgres", source: "skill" },
  { name: "Vercel", slug: "vercel", source: "skill" },
  { name: "GitHub", slug: "github", source: "skill" },
  { name: "Codex", imageSrc: "/logos/codex.webp" },
  { name: "Claude", slug: "claude", source: "simple", color: "d97757" },
  { name: "Cursor", slug: "cursor", source: "simple", color: "111111" },
  { name: "Langfuse", imageSrc: "/logos/langfuse.jpeg" },
  { name: "OpenClaw", imageSrc: "/logos/openclaw.png" },
  { name: "Clay", imageSrc: "/logos/clay.png" },
  { name: "ElevenLabs", slug: "elevenlabs", source: "simple", color: "111111" }
];

export const projects = [
  {
    title: "Sunder Document Processing",
    mediaSrc: "/projects/sunder-cover.png",
    mediaAlt: "Sunder landing section showing an AI document agent for claim processing",
    summary:
      "Legal document-operations software for claims workflows: upload messy document bundles, classify and split files, extract structured fields with citations, review low-confidence outputs, and generate claim artifacts.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Sethzy/sunder-document-processing"
      }
    ],
    tags: ["TypeScript", "React", "Supabase", "PostgreSQL", "Gemini", "Extend AI", "shadcn", "Vercel"]
  },
  {
    title: "NeoBot AI CRM",
    mediaSrc: "/projects/neobot-cover.png",
    mediaAlt: "NeoBot landing section showing sales assistant use cases for lead generation",
    summary:
      "AI CRM and relationship-work agent harness: managed agent sessions, CRM tools, files, memory, approvals, Telegram workflows, automations, browser tasks, and evaluator traces.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Sethzy/neobot-ai-crm"
      }
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Claude", "Codex", "Telegram", "Vercel"]
  },
  {
    title: "Agentic GTM Systems",
    mediaSrc: "/projects/agentic-gtm-cover.png",
    mediaAlt: "Agentic GTM Systems cover showing custom engineering principles in three cards",
    summary:
      "AI-enabled GTM pipeline systems for startups: scrape TAMs, enrich accounts, score fit, verify contacts, draft briefs, and hand qualified leads into outbound workflows.",
    links: [],
    tags: ["Clay", "Make", "n8n", "Apify", "Smartlead", "Firecrawl", "Parallel", "OpenAI", "CRM APIs"]
  },
  {
    title: "Company Second Brain",
    mediaSrc: "/projects/company-second-brain-cover.png",
    mediaAlt: "Company Second Brain knowledge workspace cover with source apps, wiki memory, review, and connected tools",
    summary:
      "Karpathy-inspired LLM wiki for company memory: immutable source files, an agent-maintained markdown knowledge base, index/log workflows, Notion action state, and reviewed agent updates.",
    links: [],
    tags: ["VPS", "Notion CLI", "gDrive CLI", "WhatsApp CLI", "QMD", "Obsidian", "Git", "Skills", "OpenClaw"]
  }
];

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  place: string;
  summary: string;
  tags: string[];
  bullets?: string[];
  confidential?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Founder, AI Builder",
    company: "Sunder / AI Workflow Studio",
    date: "2026–Present",
    place: "Singapore",
    summary:
      "Building reviewed AI systems across legal docs, CRM, GTM, company memory, and order intake.",
    tags: []
  },
  {
    role: "Forward Deployed Strategist, Healthcare AI Workflows",
    company: "Sample Healthcare",
    date: "2025",
    place: "San Francisco",
    summary:
      "Mapped enterprise intake and prior-auth workflows, including review flows that reduced manual staffing needs from ~14 to ~3.",
    tags: []
  },
  {
    role: "Founder, GTM Engineering",
    company: "Salescraft",
    date: "2024",
    place: "Singapore, San Francisco, Australia",
    summary:
      "Built AI GTM systems for 8 startups, generating $1M+ pipeline and $200K revenue.",
    tags: []
  },
  {
    role: "GTM Lead",
    company: "Airwallex",
    date: "2023–2024",
    place: "Singapore",
    summary:
      "Second outbound hire for Singapore expansion; hit 200%+ quota and closed 22 logos.",
    tags: []
  },
  {
    role: "Head of Business Development",
    company: "Boxo",
    date: "2021–2023",
    place: "Singapore, APAC",
    summary:
      "Built seed-to-Series A enterprise traction from $0 to $450K ARR and closed 9 super-app partnerships.",
    tags: []
  },
  {
    role: "BA Law, First Class Honours",
    company: "University of Cambridge",
    date: "2017–2020",
    place: "Wolfson College",
    summary:
      "Graduated top 10%; machine-learning sentencing dissertation awarded First Class.",
    tags: []
  }
];

export const services = [
  ["Web Development", "Pixel-conscious websites that actually convert.", Globe2],
  ["Custom Web Development", "No templates. No compromises. Built from scratch.", Code2],
  ["Full-Stack Development", "Frontend to backend. Database to deployment.", Layers3],
  ["Next.js Development", "The React framework for production-grade apps.", Zap],
  ["React Development", "Component-driven UIs that users love.", MousePointer2],
  ["Node.js Development", "Scalable backends built for the real world.", Server],
  ["API Development", "Clean, documented, production-ready APIs.", TerminalSquare],
  ["Backend Development", "The engine behind every great application.", Server],
  ["Frontend Development", "Interfaces that feel as good as they look.", Palette],
  ["Startup MVP Development", "Ship your idea in weeks, not months.", Sparkles],
  ["SaaS Development", "Build your software-as-a-service from the ground up.", Layers3],
  ["Web App Development", "Web applications that feel like native apps.", Globe2],
  ["Dashboard Development", "Turn your data into decisions.", Database],
  ["Automation Development", "Automate the boring stuff. Focus on what matters.", Zap],
  ["AI Integration", "Add intelligence to your application.", Sparkles],
  ["Performance Optimization", "Make your slow site embarrassingly fast.", Zap],
  ["Website Redesign", "Breathe new life into your online presence.", Palette],
  ["Landing Page Development", "One page. One goal. Maximum conversions.", MousePointer2],
  ["E-Commerce Development", "Online stores that sell, not just display.", Globe2],
  ["Database Design", "The foundation your data deserves.", Database],
  ["Cloud Deployment", "Ship to production with confidence.", CalendarDays],
  ["DevOps Setup", "Automate your development workflow.", TerminalSquare],
  ["Maintenance & Support", "Keep your app running, updated, and secure.", Server]
] as const;

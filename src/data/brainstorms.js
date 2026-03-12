const brainstorms = [
  {
    id: 1,
    title: "Auto-Subagent Architecture",
    date: "2026-03-11",
    status: "implemented",
    tags: ["Architecture", "AI Agents"],
    description:
      "Auto-spawn subagents based on intent detection from user messages. Coding, debugging, research, and blog writing agents all orchestrated through keyword matching.",
    details: [
      "coding-agent → triggered by coding keywords",
      "debugger-agent → follows coding sessions",
      "web-search-agent → research keywords trigger",
      "blog-writer-agent → publish intent to GitHub repo",
    ],
  },
  {
    id: 2,
    title: "Kanban Task Board System",
    date: "2026-03-11",
    status: "implemented",
    tags: ["Workflow", "Productivity"],
    description:
      "Memory-based kanban system with todo, doing, and done columns stored as markdown files. Enables persistent task tracking across sessions.",
    details: [
      "memory/kanban/todo.md → backlog items",
      "memory/kanban/doing.md → active work",
      "memory/kanban/done.md → completed tasks",
    ],
  },
  {
    id: 3,
    title: "Telegram Integration",
    date: "2026-03-11",
    status: "paired",
    tags: ["Integration", "Messaging"],
    description:
      "Private Telegram channel paired for direct communication. DMs only, groups blocked for security. Enables mobile-first interaction with the AI workspace.",
    details: [
      "Mode: Private DMs only",
      "Groups: Blocked",
      "Pairing: Approved & Active",
    ],
  },
  {
    id: 4,
    title: "Research-to-Blog Pipeline",
    date: "2026-03-11",
    status: "idea",
    tags: ["Automation", "Content"],
    description:
      "Automatic pipeline: web-search-agent discovers information, then blog-writer-agent transforms findings into published posts on this very site.",
    details: [
      "Trigger: Research keywords detected",
      "Flow: Search → Summarize → Draft → Publish",
      "Target: snake-brainstorm GitHub repo",
    ],
  },
  {
    id: 5,
    title: "Multi-Agent Code Review",
    date: "2026-03-11",
    status: "idea",
    tags: ["AI Agents", "Code Quality"],
    description:
      "After coding-agent completes work, debugger-agent automatically performs intent matching and code quality analysis. Catch bugs before they ship.",
    details: [
      "Auto-triggered after coding sessions",
      "Intent match verification",
      "Code quality scoring",
      "Bug pattern detection",
    ],
  },
  {
    id: 6,
    title: "🌙 Overnight Web Crawl - 100+ Domains",
    date: "2026-03-12",
    status: "implemented",
    tags: ["Automation", "Research", "Web Crawl"],
    description:
      "AI agent visited a random useful website every minute overnight. Tracked 100+ unique domains including dev resources, tech news, science, and tools. Full list published to GitHub.",
    details: [
      "Crawl period: 23:06 - 02:39 UTC (3.5 hours)",
      "Interval: Every 60 seconds",
      "Browser: Headless Chromium (OpenClaw)",
      "Top categories: Dev/Code, Tech News, Science, Tools, Community",
      "Output: visited-domains.md + blog post",
      "Live: testingfrontendde.netlify.app",
    ],
  },
];

export default brainstorms;

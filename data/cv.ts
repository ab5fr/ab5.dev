export const profile = {
  name: "Abdullah Zuhair Saleh Balila",
  title: "Backend & AI Engineer",
  location: "Jeddah, Saudi Arabia",
  email: "a2005balila@gmail.com",
  phone: "+966 571 002 462",
  website: "https://ab5-dev.vercel.app",
  github: "https://github.com/ab5fr",
  availability: "Open to Remote / Hybrid",
  summary:
    "Backend and AI engineer with a strong track record of building automation tools, bots, and developer utilities in Rust, Go, and Python. Specializes in RAG architectures, LLM-powered workflows, and end-to-end system automation—from CLI tooling and API integrations to intelligent agents using Anthropic and Gemini APIs. Skilled at designing low-latency, event-driven systems and containerized deployment pipelines, backed by a strong academic foundation in Artificial Intelligence.",
};

export const skillGroups = [
  {
    category: "Languages",
    skills: ["Rust", "Go", "Python", "TypeScript", "JavaScript", "Dart", "Flutter"],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Axum",
      "Tokio",
      "Node.js",
      "Next.js",
      "RESTful APIs",
      "Webhooks",
      "WebSockets",
      "WebRTC",
    ],
  },
  {
    category: "AI & Data",
    skills: [
      "RAG",
      "Qdrant",
      "Anthropic API",
      "Gemini API",
      "AI Agents",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SurrealDB", "SQLite"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "GitHub Actions", "Nginx", "Vercel"],
  },
  {
    category: "Tooling",
    skills: ["Linux", "Git", "Cursor", "GitHub Copilot"],
  },
  {
    category: "Automation",
    skills: [
      "CLI Tooling",
      "Bot Development",
      "API Integration",
      "Task Automation",
      "Playwright",
    ],
  },
];

export const projects = [
  {
    title: "Saudi Market Feasibility AI",
    role: "AI / RAG Engineer",
    highlights: [
      "Built a RAG pipeline using Qdrant to parse and query Saudi legal documentation for real-time market feasibility analysis.",
      "Implemented a multi-tier LLM architecture—Gemini for standard queries, Anthropic for premium analytics—to optimize API cost allocation.",
      "Designed an automated intake pipeline that ingests business profiles, runs multi-stage LLM processing, and generates feasibility reports with no manual intervention.",
    ],
    tech: ["RAG", "Qdrant", "Gemini", "Anthropic", "Python"],
    links: {
      code: "https://github.com/ab5fr/market-analysis-ai",
    },
  },
  {
    title: "University of Jeddah AI Club Platform",
    role: "Lead Full-Stack Developer",
    highlights: [
      "Engineered a high-performance backend using Rust (Axum/Tokio) and PostgreSQL to centralize club operations and manage student requests.",
      "Deployed a containerized CI/CD pipeline via Docker, GitHub Actions, and Nginx for stable production delivery.",
      "Built a responsive Next.js + TailwindCSS frontend enabling seamless member access to club resources and announcements.",
    ],
    tech: ["Rust", "Axum", "PostgreSQL", "Docker", "Next.js"],
    links: {
      codes: [
        {
          label: "Backend",
          url: "https://github.com/ab5fr/uj-ai-club-backend",
        },
        {
          label: "Frontend",
          url: "https://github.com/ab5fr/uj-ai-club-frontend",
        },
      ],
      demo: "https://www.uj-aiclub.com/",
    },
  },
  {
    title: "Developer Portfolio",
    role: "Full-Stack Developer",
    highlights: [
      "Responsive personal site built with Next.js, TypeScript, and TailwindCSS, deployed on Vercel.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    links: {
      code: "https://github.com/ab5fr/ab5.dev",
      demo: "https://ab5-dev.vercel.app",
    },
  },
  {
    title: "E2EE P2P Chat (pro-chat)",
    role: "Full-Stack Developer",
    highlights: [
      "Built end-to-end encrypted peer-to-peer chat with Flutter clients and a Go signaling server—the server holds no database and stores no messages.",
      "Implemented Signal Protocol (libsignal) on-device encryption and WebRTC data channels for direct encrypted message delivery between peers.",
      "Designed in-memory presence and signaling relay with SQLite local storage, group mesh P2P, and out-of-band safety-number identity verification.",
    ],
    tech: ["Flutter", "Dart", "Go", "WebRTC", "Signal Protocol", "SQLite"],
    links: {
      code: "https://github.com/ab5fr/pro-chat",
    },
  },
  {
    title: "hCaptcha Solver",
    role: "Systems Engineer",
    private: true,
    highlights: [
      "High-throughput captcha-solving pipeline combining Go services, Redis coordination, and TensorFlow inference.",
      "WebAssembly and JavaScript layers for browser-side orchestration and low-latency challenge handling.",
    ],
    tech: ["Go", "Redis", "TensorFlow", "WASM", "JavaScript"],
  },
  {
    title: "FunCaptcha Solver",
    role: "Systems Engineer",
    private: true,
    highlights: [
      "Rust-powered solver core with Redis-backed job queues and TensorFlow models for puzzle decomposition.",
      "Engineered for rapid challenge analysis and automated response generation at scale.",
    ],
    tech: ["Rust", "Redis", "TensorFlow"],
  },
  {
    title: "Discord Username & Vanity Sniper",
    role: "Automation Engineer",
    private: true,
    highlights: [
      "Low-latency sniping tool built in Rust and Go to claim Discord usernames and vanity URLs the moment they become available.",
      "Uses custom TLS fingerprinting to mimic legitimate clients and maximize success rate under contention.",
    ],
    tech: ["Rust", "Go", "TLS Fingerprinting"],
  },
];

export const education = [
  {
    degree: "B.Sc. Artificial Intelligence",
    institution: "University of Jeddah",
    location: "Jeddah, Saudi Arabia",
    period: "Year 3 of 5 · Expected 2028",
    detail: "GPA: 4.25 / 5.00",
  },
  {
    degree: "Artificial Intelligence Specialization",
    institution: "KAUST Academy",
    location: "Thuwal, Saudi Arabia",
    period: "Completed: Stage 2",
    detail: "Advanced AI coursework and research collaboration",
  },
];

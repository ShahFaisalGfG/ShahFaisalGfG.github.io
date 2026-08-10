export const profile = {
  name: "Shah Faisal",
  role: "Software Engineer",
  tagline:
    "I build backend systems in Python: FastAPI services and SQL data models, plus LLMs and agentic AI workflows on top of them with LangChain.",
  location: "Lahore, Pakistan",
  email: "shahfaisalgfg@gmail.com",
  github: "https://github.com/ShahFaisalGfG",
  linkedin: "https://linkedin.com/in/shah-faisal-gfg",
  whatsapp: "https://wa.me/+923217032390",
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Meissasoft",
    title: "Backend Python Developer",
    period: "Jan 2026 - Present",
    points: [
      "Build and maintain backend services in Python with FastAPI",
      "Work with PostgreSQL and other SQL databases for application data",
      "Build LangChain-based AI features into product workflows",
      "Run background work with Celery and Redis, deployed with Docker",
    ],
  },
  {
    company: "Techlogix",
    title: "Application Support Engineer",
    period: "Dec 2024 - Sep 2025",
    points: [
      "Debugged PL/SQL packages and backend workflows across Oracle FLEXCUBE banking modules (CASA, CIF, TD)",
      "Performed EOD operations, upgrade validations, and issue triaging for core banking systems",
      "Worked on enterprise applications, API workflows, and .NET/SQL system troubleshooting",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
  image?: string;
  private?: boolean;
};

export const projects: Project[] = [
  {
    name: "TruAris",
    description:
      "TruAris is a fully autonomous, multilingual outbound sales and lead engagement platform. It handles the complete lead lifecycle: cold import, qualification, follow-up, escalation to human reps, and CRM pipeline management. I started this project from scratch and built its core backend, and I'm still actively developing it while guiding the frontend implementation. I own the backend end to end: the business logic, organization-scoped tenancy with Postgres row-level security enforced through a non-superuser app role, Celery workers running prospecting, channel identification, and batch scoring, the LangChain-based LLM layer switching between OpenAI and Anthropic, and the AWS deployment and GitHub Actions CI/CD pipeline behind it.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "Celery",
      "Redis",
      "Docker",
      "AWS",
      "GitHub Actions",
      "JWT",
    ],
    link: { label: "truaris.com", href: "https://www.truaris.com" },
    image: "/images/truaris.png",
    private: true,
  },
  {
    name: "Diffini",
    description:
      "Backend for an enterprise change-management platform. Tracks stakeholders, initiatives, and department-level readiness and impact, models cultural resistance and sentiment across an organization, and scores training adoption. AI-assisted endpoints generate scenario recommendations, and the reporting layer exports findings to PDF, Excel, and PowerPoint.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
    ],
    image: "/images/diffini.png",
    private: true,
  },
  {
    name: "Osala",
    image: "/images/osala.png",
    description:
      "Backend for a beauty and business management platform used through a mobile app. Handles bookings, catalog, and scheduling, plus a full Finix payment integration: card tokenization, subscriptions, webhook-driven reconciliation, and dispute handling. Backed by Postgres through Supabase with Alembic-managed migrations. I designed and built the Classes module (regular classes and workshops) and the audit logging module, and fixed timezone handling issues across the project.",
    stack: ["FastAPI", "SQLModel", "PostgreSQL", "Finix", "Docker"],
    link: { label: "osala.us", href: "https://osala.us" },
    private: true,
  },
  {
    name: "gfgLock",
    description:
      "Free, open-source file encryption app for Windows. Encrypts and decrypts files with AES-256 (GCM and CFB) and ChaCha20-Poly1305, run through a native C++ engine built on OpenSSL. Fully offline: no account, no cloud, no telemetry.",
    stack: ["Python", "PySide6", "QML", "C++", "OpenSSL"],
    link: {
      label: "github.com/ShahFaisalGfG/gfgLock",
      href: "https://github.com/ShahFaisalGfG/gfgLock",
    },
    image: "/images/gfglock.png",
  },
  {
    name: "CC-Gen-Ultimate",
    description:
      "Free, open-source, fully offline subtitle generator. Transcribes any video or audio file with Whisper, optionally translates the result, and can transliterate it into a different script, all running locally with no cloud upload.",
    stack: ["Python", "PySide6", "QML", "faster-whisper", "PyTorch"],
    link: {
      label: "github.com/ShahFaisalGfG/CC-Gen-UItimate",
      href: "https://github.com/ShahFaisalGfG/CC-Gen-UItimate",
    },
    image: "/images/ccgen.png",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Celery", "Redis", "REST APIs", "JWT auth"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "SQLAlchemy", "SQLModel", "Alembic"],
  },
  {
    category: "AI tooling",
    items: ["LangChain", "LLMs", "Agentic AI", "OpenAI API", "Anthropic API"],
  },
  {
    category: "Infra",
    items: ["Docker", "GitHub Actions", "AWS (ECS, RDS)"],
  },
];

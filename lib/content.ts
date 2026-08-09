export const profile = {
  name: "Shah Faisal",
  role: "Backend Developer",
  tagline:
    "I build backend systems in Python. FastAPI services, SQL data models, and the workers behind them.",
  location: "Lahore, Pakistan",
  email: "shahfaisalgfg@gmail.com",
  github: "https://github.com/ShahFaisalGfG",
  linkedin: "https://linkedin.com/in/shah-faisal-gfg",
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
    title: "Backend Developer",
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
      "Multi-tenant SaaS platform for revenue intelligence. Organization is the tenant boundary: a user can belong to more than one org, and a JWT represents them acting inside one active org at a time. Postgres row-level security is enforced through a non-superuser app role, and Celery workers handle prospecting, channel identification, and batch scoring jobs in the background. The LLM layer is provider-agnostic, built to switch between OpenAI and Anthropic behind one interface.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Docker",
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
    description:
      "Backend for a beauty and business management platform used through a mobile app. Handles the data layer and business logic behind bookings, catalog, and scheduling, backed by Postgres through Supabase with Alembic-managed migrations.",
    stack: ["FastAPI", "SQLModel", "PostgreSQL", "Docker"],
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
    items: ["LangChain", "OpenAI API", "Anthropic API"],
  },
  {
    category: "Infra",
    items: ["Docker", "GitHub Actions", "AWS (ECS, RDS)"],
  },
];

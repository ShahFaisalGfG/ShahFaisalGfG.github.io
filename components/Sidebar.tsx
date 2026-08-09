import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { profile } from "@/lib/content";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Sidebar() {
  return (
    <header className="border-border lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[380px] lg:flex-col lg:justify-between lg:border-r lg:px-12 lg:py-16 px-6 py-10 border-b lg:border-b-0">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-accent">{profile.role}</p>
        <p className="text-muted mt-4 max-w-xs text-sm leading-relaxed">
          {profile.tagline}
        </p>
        <nav className="mt-10 hidden lg:block">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted hover:text-foreground group flex items-center gap-3 text-sm font-medium transition-colors"
                >
                  <span className="bg-border group-hover:bg-accent h-px w-8 transition-colors" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-muted mt-10 flex gap-5 lg:mt-0">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-accent transition-colors"
        >
          <GitHubIcon size={20} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent transition-colors"
        >
          <LinkedInIcon size={20} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="hover:text-accent transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </header>
  );
}

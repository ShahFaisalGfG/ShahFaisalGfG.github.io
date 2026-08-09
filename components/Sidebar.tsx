"use client";

import { useEffect, useState } from "react";
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
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`group flex items-center gap-3 text-sm font-medium transition-colors ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive ? "bg-accent w-12" : "bg-border w-8 group-hover:bg-accent"
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="text-muted mt-10 flex gap-5 lg:mt-0">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-accent transition-colors hover:-translate-y-0.5 inline-block"
        >
          <GitHubIcon size={20} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent transition-colors hover:-translate-y-0.5 inline-block"
        >
          <LinkedInIcon size={20} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="hover:text-accent transition-colors hover:-translate-y-0.5 inline-block"
        >
          <Mail size={20} />
        </a>
      </div>
    </header>
  );
}

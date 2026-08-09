import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="border-border bg-surface flex flex-col overflow-hidden rounded-lg border"
          >
            {project.image && (
              <div className="border-border relative aspect-video border-b">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-foreground font-medium">{project.name}</h3>
                {project.private && (
                  <span className="text-muted border-border rounded-full border px-2 py-0.5 text-[11px]">
                    private repo
                  </span>
                )}
              </div>
              <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="text-accent bg-accent/10 rounded px-2 py-1 font-mono text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-accent mt-5 inline-flex items-center gap-1 text-sm font-medium transition-colors"
                >
                  {project.link.label}
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

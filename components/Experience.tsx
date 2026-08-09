import Section from "./Section";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="grid gap-1 sm:grid-cols-[160px_1fr]">
            <p className="text-muted font-mono text-xs sm:pt-1">{job.period}</p>
            <div>
              <h3 className="text-foreground font-medium">
                {job.title} <span className="text-muted">- {job.company}</span>
              </h3>
              <ul className="text-muted mt-3 space-y-2 text-sm leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-accent mt-2 h-1 w-1 shrink-0 rounded-full bg-current" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import Section from "./Section";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-muted max-w-md text-sm leading-relaxed">
        Open to backend Python roles. The fastest way to reach me is email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="text-accent mt-4 inline-block font-mono text-sm hover:underline"
      >
        {profile.email}
      </a>
      <footer className="text-muted border-border mt-16 border-t pt-8 text-xs">
        {profile.name}
      </footer>
    </Section>
  );
}

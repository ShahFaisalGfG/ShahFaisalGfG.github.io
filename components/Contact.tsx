import Section from "./Section";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-muted max-w-md text-sm leading-relaxed">
        Open to backend Python roles. The fastest way to reach me is email.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <a
          href={`mailto:${profile.email}`}
          className="text-accent inline-block w-fit font-mono text-sm hover:underline"
        >
          {profile.email}
        </a>
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="text-accent inline-block w-fit font-mono text-sm hover:underline"
        >
          @shahfaisalgfg on WhatsApp
        </a>
      </div>
      <footer className="text-muted border-border mt-16 border-t pt-8 text-xs">
        {profile.name}
      </footer>
    </Section>
  );
}

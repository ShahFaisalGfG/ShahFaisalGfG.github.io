import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 py-16 first:pt-0">
      <h2 className="text-foreground mb-8 text-sm font-semibold tracking-widest uppercase">
        <span className="text-accent font-mono">{"// "}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

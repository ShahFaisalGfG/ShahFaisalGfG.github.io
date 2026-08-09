"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

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
    <motion.section
      id={id}
      className="scroll-mt-16 py-16 first:pt-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-foreground mb-8 text-sm font-semibold tracking-widest uppercase">
        <span className="text-accent font-mono">{"// "}</span>
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

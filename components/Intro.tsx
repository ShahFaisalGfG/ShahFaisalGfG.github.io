"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function Intro({ children }: { children: ReactNode }) {
  return (
    <motion.p
      className="text-muted text-sm leading-relaxed"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

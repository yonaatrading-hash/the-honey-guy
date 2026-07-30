"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
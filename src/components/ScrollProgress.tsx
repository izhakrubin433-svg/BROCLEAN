"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 100,
        background: "linear-gradient(to right, #f59e0b, #fbbf24, #d1d5db, #f59e0b)",
        boxShadow: "0 0 10px rgba(245,158,11,0.7)",
      }}
    />
  );
}

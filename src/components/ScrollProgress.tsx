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
        background: "linear-gradient(to right, #6b7280, #9ca3af, #d1d5db, #9ca3af)",
        boxShadow: "0 0 8px rgba(156,163,175,0.6)",
      }}
    />
  );
}

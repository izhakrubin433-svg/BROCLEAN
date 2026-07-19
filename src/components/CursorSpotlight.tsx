"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[99]"
      animate={{ x: pos.x - 200, y: pos.y - 200, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 28, mass: 0.5 }}
      style={{
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, rgba(209,213,219,0.04) 50%, transparent 70%)",
      }}
    />
  );
}

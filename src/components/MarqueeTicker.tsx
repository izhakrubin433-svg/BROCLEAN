"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, Clock, ThumbsUp, BadgeCheck, Star, Zap } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "מבוטחים במלואו" },
  { icon: Award,       text: "5+ שנות ניסיון" },
  { icon: Star,        text: "דירוג 5/5" },
  { icon: Leaf,        text: "ידידותי לסביבה" },
  { icon: Clock,       text: "תמיד בזמן" },
  { icon: ThumbsUp,    text: "100% שביעות רצון" },
  { icon: BadgeCheck,  text: "צוות מוסמך" },
  { icon: Zap,         text: "שירות מהיר" },
  { icon: ShieldCheck, text: "ביטוח מלא" },
  { icon: Award,       text: "Professional Team" },
  { icon: Star,        text: "Top Rated" },
  { icon: Clock,       text: "24/7 Available" },
];

// duplicate for seamless loop
const doubled = [...items, ...items];

export default function MarqueeTicker() {
  return (
    <div className="py-4 bg-black border-y border-white/5 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #000, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #000, transparent)" }} />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap w-max"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-gray-500 hover:text-gold-400 transition-colors">
            <item.icon size={14} className="text-gold-500/60 flex-shrink-0" />
            <span className="text-sm font-medium tracking-wide">{item.text}</span>
            <span className="text-gold-500/30 text-lg">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

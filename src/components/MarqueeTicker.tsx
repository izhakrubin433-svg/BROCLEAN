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
  { icon: Clock,       text: "24/6 Available" },
];

const doubled = [...items, ...items];

export default function MarqueeTicker() {
  return (
    <div className="py-4 bg-silver-50 border-y border-silver-200 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #f8f9fa, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #f8f9fa, transparent)" }} />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap w-max"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-gray-500 hover:text-gray-800 transition-colors">
            <item.icon size={14} className="text-silver-500 flex-shrink-0" />
            <span className="text-sm font-medium tracking-wide">{item.text}</span>
            <span className="text-silver-400 text-lg">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

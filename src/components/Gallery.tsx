"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    // לפני: חדר מלוכלך עם אשפה / אחרי: משרד נקי ומסודר
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    label:  "ניקיון משרד",
  },
  {
    // לפני: מטבח מלוכלך / אחרי: מטבח נקי ומבריק
    before: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    label:  "ניקיון מטבח",
  },
  {
    // לפני: רצפה מלוכלכת / אחרי: רצפה נקייה ומבריקה
    before: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    label:  "ניקיון רצפות",
  },
];

function BeforeAfterSlider({ before, after, label, index }: {
  before: string; after: string; label: string; index: number;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(98, Math.max(2, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/30 transition-all shadow-xl"
    >
      <div
        ref={containerRef}
        className="relative select-none cursor-col-resize"
        style={{ aspectRatio: "16/9" }}
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
        onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX); }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        {/* AFTER — full width background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={`אחרי - ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* BEFORE — clipped to left side using clipPath */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={`לפני - ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-gold-400">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5L3 10L7 15" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 5L17 10L13 15" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 right-3 bg-black/70 text-gray-300 border border-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
          לפני
        </span>
        <span className="absolute top-3 left-3 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full pointer-events-none">
          אחרי
        </span>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none tracking-wider">
          ← גרור →
        </div>
      </div>

      <div className="p-4 text-center border-t border-white/5">
        <span className="font-semibold text-gray-300 text-sm">{label}</span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gold-500/10 text-gold-400 border border-gold-500/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            גלריית עבודות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            לפני ואחרי
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            גררו את הסליידר לראות את ההבדל המדהים שאנחנו עושים
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <BeforeAfterSlider key={item.label} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

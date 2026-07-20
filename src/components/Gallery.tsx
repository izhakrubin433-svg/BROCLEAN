"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    // לפני: שולחן משרד מבולגן עם ניירות / אחרי: משרד נקי ומסודר
    before: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    label:  "ניקיון משרד",
  },
  {
    // לפני: מטבח מלוכלך / אחרי: מטבח נקי
    before: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    label:  "ניקיון מטבח",
  },
  {
    // לפני: חלל עבודה מבולגן / אחרי: חלל נקי ומסודר
    before: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    label:  "ניקיון חלל עבודה",
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
    const pct = Math.min(97, Math.max(3, ((clientX - rect.left) / rect.width) * 100));
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
        {/* AFTER — תמונה נקייה, רקע מלא */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={`אחרי - ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* BEFORE — תמונה מלוכלכת, חתוכה לצד שמאל */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={`לפני - ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />

        {/* קו מפריד */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)] z-10"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-gold-400 z-10">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5L3 10L7 15" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 5L17 10L13 15" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* תוויות */}
        <span className="absolute top-3 right-3 bg-black/80 text-gray-300 border border-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none z-10">
          לפני
        </span>
        <span className="absolute top-3 left-3 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full pointer-events-none z-10">
          אחרי
        </span>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none tracking-wider z-10">
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

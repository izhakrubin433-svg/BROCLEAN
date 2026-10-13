"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    // משרד — לפני: שולחנות עמוסים ומבולגנים / אחרי: משרד נקי ומסודר
    before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    label:  "ניקיון משרד",
    beforeFilter: "brightness(0.72) saturate(0.6) contrast(1.15) sepia(0.25)",
    afterFilter:  "brightness(1.04) saturate(1.1)",
  },
  {
    // לובי בניין — לפני: רצפה מלוכלכת / אחרי: לובי מבריק
    before: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    label:  "ניקיון לובי בניין",
    beforeFilter: "brightness(0.65) saturate(0.5) contrast(1.2) sepia(0.3)",
    afterFilter:  "brightness(1.05) saturate(1.15)",
  },
  {
    // מטבח משרדי — לפני: משטחים מלוכלכים / אחרי: מטבח נקי
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    label:  "ניקיון מטבח משרדי",
    beforeFilter: "brightness(0.68) saturate(0.55) contrast(1.18) sepia(0.2)",
    afterFilter:  "brightness(1.03) saturate(1.1)",
  },
  {
    // חלל עבודה — לפני: עמוס ומאובק / אחרי: נקי ומזמין
    before: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    label:  "חלל עבודה משותף",
    beforeFilter: "brightness(0.7) saturate(0.5) contrast(1.2) sepia(0.22)",
    afterFilter:  "brightness(1.04) saturate(1.12)",
  },
  {
    // קליניקה — לפני: חדר ישן / אחרי: חדר רפואי נקי
    before: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    label:  "ניקיון קליניקה",
    beforeFilter: "brightness(0.66) saturate(0.45) contrast(1.22) sepia(0.28)",
    afterFilter:  "brightness(1.06) saturate(1.08)",
  },
  {
    // חדר ישיבות — לפני: שולחן עמוס / אחרי: חדר ישיבות מוכן
    before: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    label:  "חדר ישיבות",
    beforeFilter: "brightness(0.69) saturate(0.52) contrast(1.17) sepia(0.24)",
    afterFilter:  "brightness(1.04) saturate(1.1)",
  },
];

function BeforeAfterSlider({ before, after, label, index, beforeFilter, afterFilter }: {
  before: string; after: string; label: string; index: number;
  beforeFilter: string; afterFilter: string;
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
      className="bg-white rounded-2xl overflow-hidden border border-silver-200 hover:border-silver-400 transition-all shadow-md hover:shadow-xl"
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
        {/* AFTER */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={`אחרי - ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: afterFilter }}
          draggable={false}
        />

        {/* BEFORE */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={`לפני - ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, filter: beforeFilter }}
          draggable={false}
        />

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 z-10"
          style={{ left: `${pos}%`, transform: "translateX(-50%)", background: "linear-gradient(180deg,#9ca3af,#d1d5db,#9ca3af)", boxShadow: "0 0 10px rgba(156,163,175,0.6)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-silver-300 z-10">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5L3 10L7 15" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 5L17 10L13 15" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 right-3 bg-white/90 text-gray-700 border border-silver-200 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none z-10">
          לפני
        </span>
        <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full pointer-events-none z-10">
          אחרי
        </span>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-gray-500/70 text-xs pointer-events-none tracking-wider z-10">
          ← גרור →
        </div>
      </div>

      <div className="p-4 text-center border-t border-silver-100">
        <span className="font-semibold text-gray-700 text-sm">{label}</span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-silver-50 text-gray-600 border border-silver-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            גלריית עבודות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
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

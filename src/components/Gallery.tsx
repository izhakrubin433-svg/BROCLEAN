"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    // משרד מבולגן עם ניירות וכלים / משרד נקי ומסודר
    before: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=800",
    after:  "https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=800",
    label:  "ניקיון משרד",
  },
  {
    // מטבח מלוכלך / מטבח נקי ומבריק
    before: "https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800",
    after:  "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800",
    label:  "ניקיון מטבח",
  },
  {
    // חלל עבודה לפני / חלל עבודה אחרי
    before: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    after:  "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800",
    label:  "חלל עבודה",
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
        {/* AFTER — תמונה נקייה, רקע מלא */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={`אחרי - ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* BEFORE — תמונה מלוכלכת, חתוכה לצד ימין */}
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
          className="absolute top-0 bottom-0 w-0.5 z-10"
          style={{
            left: `${pos}%`,
            transform: "translateX(-50%)",
            background: "linear-gradient(180deg,#9ca3af,#d1d5db,#9ca3af)",
            boxShadow: "0 0 10px rgba(156,163,175,0.6)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-silver-300 z-10">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5L3 10L7 15" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 5L17 10L13 15" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* תוויות */}
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

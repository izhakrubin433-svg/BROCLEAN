"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    before: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    label:  "ניקיון רצפות משרד",
  },
  {
    before: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    label:  "ניקיון לובי ומדרגות",
  },
  {
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    label:  "ניקיון מטבח משרדי",
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
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
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
      {/* Slider */}
      <div
        ref={containerRef}
        className="relative aspect-video cursor-col-resize select-none"
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
        onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX); }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        {/* After image (full) */}
        <div className="absolute inset-0">
          <Image src={after} alt={`אחרי - ${label}`} fill className="object-cover" />
        </div>

        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <Image src={before} alt={`לפני - ${label}`} fill className="object-cover" style={{ width: `${10000 / pos}%`, maxWidth: "none" }} />
        </div>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg shadow-white/30" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-gold-500/50">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 4L2 9L6 14" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4L16 9L12 14" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 right-3 bg-gray-950/80 text-silver-400 border border-silver-600/40 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm pointer-events-none">
          לפני
        </span>
        <span className="absolute top-3 left-3 bg-gold-500 text-black text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none">
          אחרי
        </span>

        {/* Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/40 text-xs pointer-events-none">
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

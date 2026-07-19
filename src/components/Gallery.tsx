"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    // לפני: רצפת משרד מלוכלכת / אחרי: רצפה נקייה ומבריקה
    before: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    after:  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    label:  "ניקיון רצפות משרד",
  },
  {
    // לפני: חדר מדרגות מוזנח / אחרי: לובי נקי ומוקפד
    before: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
    after:  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    label:  "ניקיון לובי ומדרגות",
  },
  {
    // לפני: מטבח משרדי מלוכלך / אחרי: מטבח נקי
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    after:  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    label:  "ניקיון מטבח משרדי",
  },
];

// תמונות גלריה תחתונה — עבודות ניקיון אמיתיות
const extraPhotos = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&q=80",
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
];

function GalleryCard({ before, after, label, index }: { before: string; after: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:border-gold-500/30 transition-all"
    >
      <div className="grid grid-cols-2">
        <div className="relative aspect-square">
          <Image src={before} alt={`לפני - ${label}`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gray-950/30" />
          <span className="absolute top-3 right-3 bg-gray-950/80 text-silver-400 border border-silver-600/40 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
            לפני
          </span>
        </div>
        <div className="relative aspect-square">
          <Image src={after} alt={`אחרי - ${label}`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gold-500/5" />
          <span className="absolute top-3 left-3 bg-gold-500 text-black text-xs font-bold px-2.5 py-1 rounded-full">
            אחרי
          </span>
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
            התוצאות מדברות בעד עצמן — ראו את ההבדל שאנחנו עושים
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.label} {...item} index={i} />
          ))}
        </div>

        {/* תמונות נוספות */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
        >
          {extraPhotos.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-gold-500/20 hover:shadow-xl transition-shadow border border-white/5">
              <Image src={src} alt="עבודת ניקיון מקצועית" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

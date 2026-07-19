"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    after:  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    label:  "ניקיון משרד",
  },
  {
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    after:  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    label:  "ניקיון חדר מדרגות",
  },
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    after:  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    label:  "ניקיון לובי ובניין",
  },
];

function GalleryCard({ before, after, label, index }: { before: string; after: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-gold-500/30 transition-all"
    >
      <div className="grid grid-cols-2">
        <div className="relative aspect-square">
          <Image src={before} alt={`לפני - ${label}`} fill className="object-cover" />
          <div className="absolute inset-0 bg-red-900/30" />
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            לפני
          </span>
        </div>
        <div className="relative aspect-square">
          <Image src={after} alt={`אחרי - ${label}`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gold-500/10" />
          <span className="absolute top-3 left-3 bg-gold-500 text-black text-xs font-bold px-2.5 py-1 rounded-full">
            אחרי
          </span>
        </div>
      </div>
      <div className="p-4 text-center">
        <span className="font-semibold text-white/80">{label}</span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gold-500/20 text-gold-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            גלריית עבודות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            לפני ואחרי
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            התוצאות מדברות בעד עצמן — ראו את ההבדל שאנחנו עושים
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.label} {...item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
        >
          {[
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
          ].map((src, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-gold-500/20 hover:shadow-xl transition-shadow border border-white/5">
              <Image src={src} alt="עבודת ניקיון" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

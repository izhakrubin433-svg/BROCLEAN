"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Briefcase, ArrowLeft } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Briefcase,
    title: "ניקיון משרדים",
    description: "ניקיון מקצועי למשרדים בכל הגדלים. שמירה על סביבת עבודה מסודרת, בריאה ומכובדת.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tag: "פופולרי",
    tagColor: "bg-slate-900",
    accent: "brand",
  },
  {
    icon: Building2,
    title: "ניקיון בניינים",
    description: "ניקיון לובי, חדר מדרגות, חניות ושטחים משותפים בבניינים גבוהים. מראה נקי ומוקפד לכל הדיירים.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    tag: null,
    accent: "indigo",
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  brand:  { bg: "bg-black/40",   text: "text-gold-500",  border: "hover:border-gold-500",  iconBg: "bg-black" },
  indigo: { bg: "bg-black/40",   text: "text-gold-400",  border: "hover:border-gold-400",  iconBg: "bg-zinc-900" },
};

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gold-500/20 text-gold-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            השירותים שלנו
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            כל מה שאתם צריכים
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            שירותי ניקיון מקצועיים המותאמים למשרדים ובניינים רבי קומות בלבד.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const a = accentMap[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-zinc-900 rounded-2xl border-2 border-zinc-800 ${a.border} transition-all duration-300 card-hover overflow-hidden group`}
              >
                {/* Image preview on hover */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${a.bg} opacity-60 group-hover:opacity-30 transition-opacity duration-300`} />
                  {/* Icon overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center`}>
                    <div className={`w-16 h-16 ${a.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={28} className={a.text} />
                    </div>
                  </div>
                  {/* Tag */}
                  {service.tag && (
                    <span className={`absolute top-3 right-3 ${service.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {service.tag}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm mb-5">{service.description}</p>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 ${a.text} font-semibold text-sm group/link`}
                  >
                    לפרטים ויצירת קשר
                    <ArrowLeft size={15} className="group-hover/link:-translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      className={`absolute bottom-0 right-0 left-0 h-1 ${service.tagColor ?? "bg-slate-900"} origin-right`}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

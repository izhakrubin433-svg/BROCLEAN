"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Home, Briefcase, Hammer, Store, Refrigerator, ArrowLeft,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Briefcase,
    title: "ניקיון משרדים",
    description: "ניקיון יסודי ומקצועי למשרדים בכל הגדלים. שמירה על סביבת עבודה נקייה, מסודרת ובריאה לעובדים.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tag: "פופולרי",
    tagColor: "bg-brand-600",
    accent: "brand",
  },
  {
    icon: Building2,
    title: "ניקיון בניינים",
    description: "ניקיון חדרי מדרגות, לובי, חניות ושטחים משותפים. שמירה על מראה מכובד ונקי לכל הדיירים.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    tag: null,
    accent: "indigo",
  },
  {
    icon: Home,
    title: "ניקיון דירות",
    description: "ניקיון מעמיק לדירות פרטיות — חדרים, מטבח, שירותים ואמבטיה. ניקיון חד-פעמי או קבוע.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    tag: "מבוקש",
    tagColor: "bg-emerald-600",
    accent: "emerald",
  },
  {
    icon: Hammer,
    title: "ניקיון אחרי שיפוץ",
    description: "פינוי אבק, שאריות בנייה וניקיון מעמיק לאחר שיפוץ. הדירה תהיה מוכנה למגורים תוך שעות.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: null,
    accent: "orange",
  },
  {
    icon: Store,
    title: "ניקיון עסקים",
    description: "ניקיון מקצועי לחנויות, מסעדות, מרפאות ועסקים מכל סוג. שמירה על תדמית עסקית מכובדת.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    tag: null,
    accent: "purple",
  },
  {
    icon: Refrigerator,
    title: "ניקוי מקררים ומוצרי חשמל",
    description: "ניקוי מעמיק של מקררים, תנורים, מכונות כביסה ומוצרי חשמל ביתיים. הסרת לכלוך ועובש.",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    tag: null,
    accent: "cyan",
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  brand:   { bg: "bg-brand-50",   text: "text-brand-600",   border: "hover:border-brand-300",   iconBg: "bg-brand-100" },
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-600",  border: "hover:border-indigo-300",  iconBg: "bg-indigo-100" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "hover:border-emerald-300", iconBg: "bg-emerald-100" },
  orange:  { bg: "bg-orange-50",  text: "text-orange-600",  border: "hover:border-orange-300",  iconBg: "bg-orange-100" },
  purple:  { bg: "bg-purple-50",  text: "text-purple-600",  border: "hover:border-purple-300",  iconBg: "bg-purple-100" },
  cyan:    { bg: "bg-cyan-50",    text: "text-cyan-600",    border: "hover:border-cyan-300",    iconBg: "bg-cyan-100" },
};

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            השירותים שלנו
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            כל מה שאתם צריכים
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            מגוון שירותי ניקיון מקצועיים המותאמים לכל צורך — לעסקים, בתים ועוד
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
                className={`relative bg-white rounded-2xl border-2 border-slate-100 ${a.border} transition-all duration-300 card-hover overflow-hidden group`}
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-5">{service.description}</p>
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
                      className={`absolute bottom-0 right-0 left-0 h-1 ${service.tagColor ?? "bg-brand-600"} origin-right`}
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

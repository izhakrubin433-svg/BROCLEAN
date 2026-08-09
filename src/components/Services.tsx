"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Briefcase, Stethoscope, Armchair, ArrowLeft } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Briefcase,
    title: "ניקיון משרדים",
    description: "ניקיון מקצועי למשרדים בכל הגדלים. שמירה על סביבת עבודה מסודרת, בריאה ומכובדת.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tag: "פופולרי",
  },
  {
    icon: Building2,
    title: "ניקיון בניינים",
    description: "ניקיון לובי, חדר מדרגות, חניות ושטחים משותפים בבניינים גבוהים. מראה נקי ומוקפד לכל הדיירים.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    tag: null,
  },
  {
    icon: Stethoscope,
    title: "ניקיון קליניקות",
    description: "ניקיון ועיקור מקצועי לקליניקות, מרפאות ומרכזי בריאות. עמידה בתקני היגיינה מחמירים לסביבה רפואית.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    tag: "חדש",
  },
  {
    icon: Armchair,
    title: "חללי עבודה משותפים",
    description: "ניקיון שוטף לקו-וורקינג ספייסים, אזורי ישיבה, מטבחים ושירותים. סביבה נעימה ומזמינה לכל המשתמשים.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    tag: "חדש",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white broclean-watermark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-silver-50 text-gray-600 border border-silver-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            השירותים שלנו
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            כל מה שאתם צריכים
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            שירותי ניקיון מקצועיים למשרדים, בניינים, קליניקות וחללי עבודה.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-white rounded-2xl border border-silver-200 hover:border-silver-400 transition-all duration-300 card-hover overflow-hidden group shadow-md hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/5 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 border border-silver-300 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={26} className="text-gray-700" />
                  </div>
                </div>
                {service.tag && (
                  <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${service.tag === "חדש" ? "bg-silver-200 text-gray-700" : "bg-gray-900 text-white"}`}>
                    {service.tag}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">{service.description}</p>
                <a href="#contact"
                  className="inline-flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-semibold text-sm group/link transition-colors">
                  לפרטים ויצירת קשר
                  <ArrowLeft size={14} className="group-hover/link:-translate-x-1 transition-transform" />
                </a>
              </div>

              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    className="absolute bottom-0 right-0 left-0 h-0.5 origin-right"
                    style={{background:"linear-gradient(90deg,#9ca3af,#d1d5db,#9ca3af)"}}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

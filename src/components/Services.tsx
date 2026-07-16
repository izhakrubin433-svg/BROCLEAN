"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Briefcase,
  Hammer,
  Store,
  Refrigerator,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "ניקיון משרדים",
    description:
      "ניקיון יסודי ומקצועי למשרדים בכל הגדלים. שמירה על סביבת עבודה נקייה, מסודרת ובריאה לעובדים.",
    color: "bg-blue-50 text-brand-600",
    border: "border-blue-100 hover:border-brand-300",
  },
  {
    icon: Building2,
    title: "ניקיון בניינים",
    description:
      "ניקיון חדרי מדרגות, לובי, חניות ושטחים משותפים. שמירה על מראה מכובד ונקי לכל הדיירים.",
    color: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100 hover:border-indigo-300",
  },
  {
    icon: Home,
    title: "ניקיון דירות",
    description:
      "ניקיון מעמיק לדירות פרטיות — חדרים, מטבח, שירותים ואמבטיה. ניקיון חד-פעמי או קבוע.",
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100 hover:border-emerald-300",
  },
  {
    icon: Hammer,
    title: "ניקיון אחרי שיפוץ",
    description:
      "פינוי אבק, שאריות בנייה וניקיון מעמיק לאחר שיפוץ. הדירה תהיה מוכנה למגורים תוך שעות.",
    color: "bg-orange-50 text-orange-600",
    border: "border-orange-100 hover:border-orange-300",
  },
  {
    icon: Store,
    title: "ניקיון עסקים",
    description:
      "ניקיון מקצועי לחנויות, מסעדות, מרפאות ועסקים מכל סוג. שמירה על תדמית עסקית מכובדת.",
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-100 hover:border-purple-300",
  },
  {
    icon: Refrigerator,
    title: "ניקוי מקררים ומוצרי חשמל",
    description:
      "ניקוי מעמיק של מקררים, תנורים, מכונות כביסה ומוצרי חשמל ביתיים. הסרת לכלוך ועובש.",
    color: "bg-cyan-50 text-cyan-600",
    border: "border-cyan-100 hover:border-cyan-300",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`bg-white rounded-2xl p-7 border-2 ${service.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-5`}>
                <service.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-5">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm hover:gap-3 transition-all"
              >
                לפרטים ויצירת קשר
                <ArrowLeft size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

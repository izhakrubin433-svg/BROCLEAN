"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  Heart,
  BadgeDollarSign,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Users,
    title: "צוות מקצועי",
    description: "עובדים מיומנים, מאומנים ואמינים עם ניסיון רב בתחום הניקיון.",
  },
  {
    icon: ShieldCheck,
    title: "שירות אמין",
    description: "מגיעים בזמן, עושים את העבודה ביסודיות ועומדים בכל הבטחה.",
  },
  {
    icon: Clock,
    title: "זמינות גבוהה",
    description: "זמינים 6 ימים בשבוע, כולל שעות ערב. מתאימים לוח זמנים לצרכיכם.",
  },
  {
    icon: Sparkles,
    title: "עבודה יסודית",
    description: "לא מסתפקים בפחות מהמושלם. כל פינה מקבלת את הטיפול הראוי.",
  },
  {
    icon: Heart,
    title: "יחס אישי",
    description: "כל לקוח מקבל תשומת לב מלאה. אנחנו מקשיבים ומתאימים את השירות.",
  },
  {
    icon: BadgeDollarSign,
    title: "מחירים הוגנים",
    description: "תמחור שקוף ללא הפתעות. איכות פרימיום במחיר שמתאים לתקציב.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80"
                alt="צוות ניקיון מקצועי"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-white" size={22} />
                </div>
                <div>
                  <div className="font-black text-2xl text-slate-900">100%</div>
                  <div className="text-slate-500 text-sm">שביעות רצון מובטחת</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                למה לבחור בנו
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                הסיבות שלקוחות
                <br />
                <span className="text-brand-600">חוזרים אלינו</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                אנחנו לא רק חברת ניקיון — אנחנו שותפים לשמירה על הסביבה שלכם.
                כל פרט חשוב לנו.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-11 h-11 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <f.icon size={20} className="text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

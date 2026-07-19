"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "יוצרים קשר",
    description: "מתקשרים, שולחים WhatsApp או ממלאים טופס. נחזור אליכם תוך שעה עם הצעת מחיר.",
    color: "bg-slate-900",
    light: "bg-slate-100 text-slate-900",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "מתאמים ומתכננים",
    description: "קובעים מועד נוח, מתאימים את השירות לצרכים שלכם ומגיעים בזמן.",
    color: "bg-slate-900",
    light: "bg-slate-100 text-slate-900",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "עובדים ומסיימים",
    description: "הצוות שלנו מבצע ניקיון יסודי ומקצועי. אתם מקבלים תוצאה מושלמת ומבריקה.",
    color: "bg-slate-900",
    light: "bg-slate-100 text-slate-900",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-slate-100 text-slate-900 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            איך זה עובד
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            3 צעדים פשוטים
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            מהרגע שיצרתם קשר ועד לתוצאה הסופית — הכל פשוט, מהיר ומקצועי
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 right-[16.5%] left-[16.5%] h-0.5 bg-slate-100" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className={`relative w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg z-10`}>
                <step.icon size={28} className="text-white" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-slate-100 rounded-full text-xs font-black text-slate-700 flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>

              <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${step.light}`}>
                שלב {step.num}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-slate-500/25 hover:-translate-y-1"
          >
            <Sparkles size={20} />
            התחילו עכשיו — חינם
          </a>
        </motion.div>
      </div>
    </section>
  );
}

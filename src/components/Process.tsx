"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "יוצרים קשר",
    description: "מתקשרים, שולחים WhatsApp או ממלאים טופס. נחזור אליכם תוך שעה עם הצעת מחיר.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "מתאמים ומתכננים",
    description: "קובעים מועד נוח, מתאימים את השירות לצרכים שלכם ומגיעים בזמן.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "עובדים ומסיימים",
    description: "הצוות שלנו מבצע ניקיון יסודי ומקצועי. אתם מקבלים תוצאה מושלמת ומבריקה.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-silver-50 broclean-watermark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white text-gray-600 border border-silver-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            איך זה עובד
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            3 צעדים פשוטים
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            מהרגע שיצרתם קשר ועד לתוצאה הסופית — הכל פשוט, מהיר ומקצועי
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 right-[16.5%] left-[16.5%] h-px"
            style={{background:"linear-gradient(90deg,transparent,rgba(156,163,175,0.5),rgba(209,213,219,0.8),rgba(156,163,175,0.5),transparent)"}} />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative w-16 h-16 bg-white border border-silver-300 rounded-2xl flex items-center justify-center mb-6 shadow-md z-10">
                <step.icon size={28} className="text-gray-700" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full text-xs font-black text-white flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>

              <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 bg-white text-gray-500 border border-silver-200">
                שלב {step.num}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-gray-300/40 hover:-translate-y-1">
            <Sparkles size={20} />
            התחילו עכשיו — חינם
          </a>
        </motion.div>
      </div>
    </section>
  );
}

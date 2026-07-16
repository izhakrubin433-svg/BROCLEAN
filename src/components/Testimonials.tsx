"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    name: "דנה כהן",
    role: "מנהלת משרד, תל אביב",
    text: "Broclean עושים עבודה מדהימה! המשרד שלנו נראה כמו חדש אחרי כל ניקיון. הצוות מקצועי, אמין ותמיד מגיע בזמן. ממליצה בחום!",
    stars: 5,
    initials: "ד.כ",
    color: "from-brand-500 to-brand-700",
  },
  {
    name: "יוסי לוי",
    role: "בעל דירה, ירושלים",
    text: "הזמנתי ניקיון אחרי שיפוץ ולא האמנתי שאפשר לנקות כל כך טוב. הדירה הייתה מלאה אבק ושאריות בנייה, ואחרי שעות ספורות — נקייה לגמרי!",
    stars: 5,
    initials: "י.ל",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "מיכל אברהם",
    role: "בעלת מסעדה, חיפה",
    text: "שירות מעולה, מחיר הוגן ותוצאות מצוינות. הצוות של Broclean מגיע כל שבוע ותמיד עושים עבודה יסודית. לקוחה קבועה כבר שנתיים.",
    stars: 5,
    initials: "מ.א",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "אבי שמש",
    role: "מנהל בניין, רמת גן",
    text: "ניקיון הבניין שלנו השתפר פלאים מאז שעברנו ל-Broclean. הדיירים מרוצים, חדר המדרגות תמיד נקי ומסודר. שירות מקצועי ברמה גבוהה.",
    stars: 5,
    initials: "א.ש",
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "רחל גולן",
    role: "אמא לשלושה, פתח תקווה",
    text: "הזמנתי ניקיון עמוק לדירה ופשוט לא האמנתי לעיניים. כל פינה, כל מדף — הכל נקי ומבריק. שירות אדיב ומקצועי. בהחלט אחזור!",
    stars: 5,
    initials: "ר.ג",
    color: "from-pink-500 to-pink-700",
  },
  {
    name: "עמית ברק",
    role: "מנהל חברה, הרצליה",
    text: "Broclean מנקים את המשרדים שלנו כבר שלוש שנים. תמיד אמינים, תמיד מקצועיים. לא מחפשים אחרים — הם הכי טובים שעבדנו איתם.",
    stars: 5,
    initials: "ע.ב",
    color: "from-indigo-500 to-indigo-700",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            המלצות לקוחות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            מה אומרים עלינו
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-yellow-400" />
            ))}
            <span className="text-white font-bold mr-2">5.0</span>
            <span className="text-slate-400 text-sm">מעל 500 ביקורות</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((t, i) => (
                <motion.div
                  key={`${t.name}-${current}-${i}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors ${i === 1 ? "md:scale-105 md:border-white/20 md:bg-white/8" : ""}`}
                >
                  <Quote size={28} className="text-white/20 absolute top-6 left-6" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all rounded-full ${
                    i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

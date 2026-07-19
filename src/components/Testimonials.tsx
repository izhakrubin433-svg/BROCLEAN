"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  { name: "דנה כהן",    role: "מנהלת משרד, תל אביב",          text: "Broclean עושים עבודה מדהימה! המשרד שלנו נראה כמו חדש אחרי כל ניקיון. הצוות מקצועי, אמין ותמיד מגיע בזמן.", stars: 5, initials: "ד.כ" },
  { name: "יוסי לוי",   role: "מנהל בניין משרדים, ירושלים",   text: "מאז שהתחלנו לעבוד עם Broclean, חדר המדרגות והלובי שלנו תמיד נקיים ומסודרים. כל הדיירים מרוצים מאיכות השירות.", stars: 5, initials: "י.ל" },
  { name: "מיכל אברהם", role: "מנהלת מנהל עסקים, חיפה",       text: "כל שטח העבודה שלנו מטופל ברמה גבוהה. השירות מקצועי, צוות אחראי ותוצאות נקיות לאורך זמן.", stars: 5, initials: "מ.א" },
  { name: "אבי שמש",    role: "מנהל בניין, רמת גן",            text: "ניקיון הבניין שלנו השתפר פלאים מאז שעברנו ל-Broclean. חדר המדרגות תמיד נקי ומסודר. שירות מקצועי ברמה גבוהה.", stars: 5, initials: "א.ש" },
  { name: "רחל גולן",   role: "מנהלת משרד, פתח תקווה",         text: "הצוות הגיע בזמן ועבד ביסודיות. האזור המשותף של המשרד נראה מדהים והעבודה בוצעה בצורה אחראית ומקצועית.", stars: 5, initials: "ר.ג" },
  { name: "עמית ברק",   role: "מנהל חברה, הרצליה",             text: "Broclean מנקים את המשרדים שלנו כבר שלוש שנים. תמיד אמינים, תמיד מקצועיים. לא מחפשים אחרים — הם הכי טובים שעבדנו איתם.", stars: 5, initials: "ע.ב" },
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
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gray-100 text-gray-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-gray-200">
            המלצות לקוחות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            מה אומרים עלינו
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-gray-400 text-gray-400" />
            ))}
            <span className="text-gray-900 font-bold mr-2">5.0</span>
            <span className="text-gray-400 text-sm">מעל 500 ביקורות</span>
          </div>
        </motion.div>

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
                  className={`relative bg-white border-2 rounded-2xl p-7 shadow-sm transition-all ${i === 1 ? "md:scale-105 border-gray-900 shadow-lg" : "border-gray-100 hover:border-gray-300"}`}
                >
                  <Quote size={28} className="text-gray-200 absolute top-6 left-6" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={14} className="fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all rounded-full ${
                    i === current ? "w-6 h-2 bg-gray-900" : "w-2 h-2 bg-gray-300 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

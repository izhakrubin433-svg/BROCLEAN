"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "דנה כהן",
    role: "מנהלת משרד, תל אביב",
    text: "Broclean עושים עבודה מדהימה! המשרד שלנו נראה כמו חדש אחרי כל ניקיון. הצוות מקצועי, אמין ותמיד מגיע בזמן. ממליצה בחום!",
    stars: 5,
    initials: "ד.כ",
    color: "bg-brand-600",
  },
  {
    name: "יוסי לוי",
    role: "בעל דירה, ירושלים",
    text: "הזמנתי ניקיון אחרי שיפוץ ולא האמנתי שאפשר לנקות כל כך טוב. הדירה הייתה מלאה אבק ושאריות בנייה, ואחרי שעות ספורות — נקייה לגמרי!",
    stars: 5,
    initials: "י.ל",
    color: "bg-accent-500",
  },
  {
    name: "מיכל אברהם",
    role: "בעלת מסעדה, חיפה",
    text: "שירות מעולה, מחיר הוגן ותוצאות מצוינות. הצוות של Broclean מגיע כל שבוע ותמיד עושים עבודה יסודית. לקוחה קבועה כבר שנתיים.",
    stars: 5,
    initials: "מ.א",
    color: "bg-purple-600",
  },
  {
    name: "אבי שמש",
    role: "מנהל בניין, רמת גן",
    text: "ניקיון הבניין שלנו השתפר פלאים מאז שעברנו ל-Broclean. הדיירים מרוצים, חדר המדרגות תמיד נקי ומסודר. שירות מקצועי ברמה גבוהה.",
    stars: 5,
    initials: "א.ש",
    color: "bg-orange-500",
  },
  {
    name: "רחל גולן",
    role: "אמא לשלושה, פתח תקווה",
    text: "הזמנתי ניקיון עמוק לדירה ופשוט לא האמנתי לעיניים. כל פינה, כל מדף — הכל נקי ומבריק. שירות אדיב ומקצועי. בהחלט אחזור!",
    stars: 5,
    initials: "ר.ג",
    color: "bg-pink-500",
  },
  {
    name: "עמית ברק",
    role: "מנהל חברה, הרצליה",
    text: "Broclean מנקים את המשרדים שלנו כבר שלוש שנים. תמיד אמינים, תמיד מקצועיים. לא מחפשים אחרים — הם הכי טובים שעבדנו איתם.",
    stars: 5,
    initials: "ע.ב",
    color: "bg-indigo-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            המלצות לקוחות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            מה אומרים עלינו
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            מאות לקוחות מרוצים שבחרו ב-Broclean ולא חזרו אחורה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-shadow relative"
            >
              <Quote size={32} className="text-brand-200 absolute top-6 left-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

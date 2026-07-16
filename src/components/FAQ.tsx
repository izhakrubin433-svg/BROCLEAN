"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "כמה עולה שירות ניקיון?",
    a: "המחיר תלוי בסוג השירות, גודל השטח ותדירות הניקיון. אנחנו מציעים הצעת מחיר חינמית ומותאמת אישית לכל לקוח. צרו קשר ונשמח לתת לכם מחיר מדויק.",
  },
  {
    q: "באיזה אזורים אתם עובדים?",
    a: "אנחנו פועלים בכל אזור המרכז, כולל תל אביב, ירושלים, חיפה, רמת גן, פתח תקווה, הרצליה ועוד. צרו קשר לבדיקת זמינות באזורכם.",
  },
  {
    q: "האם אתם מספקים שירות קבוע?",
    a: "כן! אנחנו מציעים חוזי ניקיון קבוע — שבועי, דו-שבועי או חודשי. לקוחות קבועים נהנים ממחירים מיוחדים ועדיפות בתיאום.",
  },
  {
    q: "איך מזמינים ניקיון?",
    a: "ניתן להזמין בטלפון, בוואטסאפ או דרך טופס יצירת הקשר באתר. נחזור אליכם תוך שעה לתיאום מועד ומחיר.",
  },
  {
    q: "האם הצוות מבוטח?",
    a: "כן, כל הצוות שלנו מבוטח במלואו. אנחנו עובדים עם חומרי ניקיון איכותיים ובטוחים לבני אדם ולחיות מחמד.",
  },
  {
    q: "כמה זמן לוקח ניקיון?",
    a: "משך הניקיון תלוי בגודל השטח ורמת הלכלוך. דירה ממוצעת לוקחת 2-4 שעות, משרד — 1-3 שעות. ניקיון אחרי שיפוץ עשוי לקחת יותר.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border border-slate-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-right hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-900 text-lg">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mr-4"
        >
          <ChevronDown size={22} className="text-brand-600" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            שאלות נפוצות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            יש לכם שאלות?
          </h2>
          <p className="text-slate-500 text-lg">
            ריכזנו את השאלות הנפוצות ביותר. לא מצאתם תשובה? צרו קשר!
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

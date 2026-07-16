"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "ניקיון משרדים",
  "ניקיון בניינים",
  "ניקיון דירות",
  "ניקיון אחרי שיפוץ",
  "ניקיון עסקים",
  "ניקוי מקררים ומוצרי חשמל",
  "אחר",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            צור קשר
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            השאירו פרטים ונחזור אליכם תוך שעה עם הצעת מחיר מותאמת אישית
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-900 rounded-3xl p-10 text-white h-full">
              <h3 className="text-2xl font-black mb-2">דברו איתנו</h3>
              <p className="text-blue-200 mb-10">
                זמינים לכל שאלה, בקשה או הצעת מחיר
              </p>

              <div className="flex flex-col gap-6">
                <a
                  href="tel:+972502328041"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">טלפון</div>
                    <div className="font-bold text-lg">050-232-8041</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/972502328041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">WhatsApp</div>
                    <div className="font-bold text-lg">שלחו הודעה עכשיו</div>
                  </div>
                </a>

                <a
                  href="mailto:info@broclean-clean.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">אימייל</div>
                    <div className="font-bold">info@broclean-clean.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">אזורי שירות</div>
                    <div className="font-bold">מרכז הארץ ופריפריה</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-blue-200 text-sm mb-4">שעות פעילות</p>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-200">ראשון - חמישי</span>
                    <span className="font-semibold">08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">שישי</span>
                    <span className="font-semibold">08:00 - 14:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-accent-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  תודה! קיבלנו את פנייתכם
                </h3>
                <p className="text-slate-500">
                  נחזור אליכם תוך שעה עם הצעת מחיר מותאמת אישית
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="ישראל ישראלי"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    טלפון *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="050-232-8041"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 transition-colors"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    סוג שירות
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brand-500 transition-colors bg-white"
                  >
                    <option value="">בחרו שירות...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    הודעה
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="ספרו לנו על הצורך שלכם..."
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5"
                >
                  <Send size={20} />
                  שלחו הודעה
                </button>

                <p className="text-center text-slate-400 text-sm">
                  או התקשרו ישירות:{" "}
                  <a href="tel:+972502328041" className="text-brand-600 font-semibold">
                    050-232-8041
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

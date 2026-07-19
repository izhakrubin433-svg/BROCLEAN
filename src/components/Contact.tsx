"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const serviceOptions = ["ניקיון משרדים", "ניקיון בניינים", "ניקיון קליניקות", "חללי עבודה משותפים", "אחר"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("אירעה שגיאה, נסו שוב או התקשרו ישירות.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gold-500/10 text-gold-400 border border-gold-500/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            צור קשר
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">מוכנים להתחיל?</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            השאירו פרטים ונחזור אליכם תוך שעה עם הצעת מחיר מותאמת אישית
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-gray-950 rounded-3xl p-10 h-full border border-white/5">
              <h3 className="text-2xl font-black text-white mb-2">דברו איתנו</h3>
              <p className="text-gray-500 mb-10">זמינים לכל שאלה, בקשת הצעת מחיר או תיאום מועד.</p>

              <div className="flex flex-col gap-6">
                {[
                  { href: "tel:+972502328041", icon: Phone, label: "טלפון", value: "050-232-8041" },
                  { href: "https://wa.me/972502328041", icon: MessageCircle, label: "WhatsApp", value: "שלחו הודעה עכשיו" },
                  { href: "mailto:broclean14@gmail.com", icon: Mail, label: "אימייל", value: "broclean14@gmail.com" },
                ].map(({ href, icon: Icon, label, value }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-white/10 group-hover:border-gold-500/40 transition-colors">
                      <Icon size={20} className="text-gold-400" />
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">{label}</div>
                      <div className="font-bold text-white">{value}</div>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-white/10">
                    <MapPin size={20} className="text-silver-500" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">אזורי שירות</div>
                    <div className="font-bold text-white">מרכז הארץ</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-gold-400 text-sm mb-4">שעות פעילות</p>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ראשון - חמישי</span>
                    <span className="font-semibold text-white">08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">שישי</span>
                    <span className="font-semibold text-white">08:00 - 14:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-gold-500" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">תודה! קיבלנו את פנייתכם</h3>
                <p className="text-gray-500">נחזור אליכם תוך שעה עם הצעת מחיר מותאמת אישית</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { label: "שם מלא *", type: "text", key: "name", placeholder: "ישראל ישראלי", required: true },
                  { label: "טלפון *",  type: "tel",  key: "phone", placeholder: "050-232-8041", required: true, dir: "ltr" },
                ].map(({ label, type, key, placeholder, required, dir }) => (
                  <div key={key}>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">{label}</label>
                    <input type={type} required={required} dir={dir}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full border border-white/10 bg-gray-900 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/60 transition-colors" />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">סוג שירות</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-white/10 bg-gray-900 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold-500/60 transition-colors">
                    <option value="">בחרו שירות...</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">הודעה</label>
                  <textarea rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="ספרו לנו על הצורך שלכם..."
                    className="w-full border border-white/10 bg-gray-900 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/60 transition-colors resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-black py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-500/20 hover:-translate-y-0.5">
                  <Send size={20} />
                  {loading ? "שולח..." : "שלחו הודעה"}
                </button>

                {error && <p className="text-center text-red-400 text-sm">{error}</p>}

                <p className="text-center text-gray-600 text-sm">
                  או התקשרו ישירות:{" "}
                  <a href="tel:+972502328041" className="text-gold-400 font-semibold hover:text-gold-300">050-232-8041</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

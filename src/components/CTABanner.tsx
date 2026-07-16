"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-l from-brand-700 to-brand-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            מוכנים לניקיון מקצועי?
          </h2>
          <p className="text-blue-200 text-xl mb-10">
            צרו קשר עכשיו וקבלו הצעת מחיר חינמית תוך שעה
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+972502328041"
              className="flex items-center gap-2 bg-white text-brand-700 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:-translate-y-0.5"
            >
              <Phone size={20} />
              050-232-8041
            </a>
            <a
              href="https://wa.me/972502328041"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              שלחו הודעה
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

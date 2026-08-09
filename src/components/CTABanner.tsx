"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Silver glow accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" style={{background:"rgba(209,213,219,0.06)"}} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" style={{background:"rgba(156,163,175,0.05)"}} />
      </div>
      {/* Silver top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(209,213,219,0.4) 30%,rgba(249,250,251,0.7) 50%,rgba(209,213,219,0.4) 70%,transparent)"}} />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            מוכנים לניקיון מקצועי?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            צרו קשר עכשיו וקבלו הצעת מחיר חינמית תוך שעה
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+972502328041"
              className="flex items-center gap-2 bg-white hover:bg-silver-50 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-black/30 hover:-translate-y-0.5">
              <Phone size={20} />
              050-232-8041
            </a>
            <a href="https://wa.me/972502328041" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-silver-500/40 bg-transparent text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-white/10 hover:border-silver-300">
              <MessageCircle size={20} />
              שלחו הודעה
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
          alt="ניקיון מקצועי"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-brand-900/95 via-brand-800/85 to-brand-700/70" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            מעל 500 לקוחות מרוצים
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            ניקיון מקצועי
            <br />
            <span className="text-accent-400">לעסקים ובתים</span>
            <br />
            ברמה אחרת
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl"
          >
            שירותי ניקיון יסודיים, אמינים ומקצועיים בהתאמה אישית.
            <br />
            אנחנו לא רק מנקים — אנחנו יוצרים סביבה נקייה ומרעננת.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:+972502328041"
              className="flex items-center gap-2 bg-white text-brand-700 hover:bg-blue-50 px-7 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
            >
              <Phone size={20} />
              התקשר עכשיו
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-accent-500/30 hover:-translate-y-0.5"
            >
              קבלת הצעת מחיר
            </a>
            <a
              href="https://wa.me/972502328041?text=שלום, אני מעוניין בשירותי ניקיון"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-7 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/20"
          >
            {[
              { num: "500+", label: "לקוחות מרוצים" },
              { num: "5+", label: "שנות ניסיון" },
              { num: "100%", label: "שביעות רצון" },
              { num: "24/7", label: "זמינות" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-white">{stat.num}</div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

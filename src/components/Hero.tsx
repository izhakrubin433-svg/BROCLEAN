"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, Star, CheckCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { target: 500, suffix: "+",  label: "לקוחות מרוצים" },
  { target: 5,   suffix: "+",  label: "שנות ניסיון" },
  { target: 100, suffix: "%",  label: "שביעות רצון" },
  { target: 24,  suffix: "/7", label: "זמינות" },
];

const trustBadges = [
  "ביטוח מלא",
  "חומרים ידידותיים לסביבה",
  "צוות מאומן ומוסמך",
  "ללא התחייבות",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85"
          alt="רקע בניין עסקי"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>מדורגים 5/5 על ידי לקוחותינו</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] mb-6"
            >
              ניקיון מקצועי
              <br />
              <span className="text-gold-500">למשרדים ובניינים</span>
              <br />
              ברמה אחרת
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg"
            >
              שירותי ניקיון יסודיים למשרדים ובניינים בלבד. מקצועיות, אמינות ודיסקרטיות בכל עבודה.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {trustBadges.map((b) => (
                <span key={b} className="flex items-center gap-1.5 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  <CheckCircle size={12} className="text-gold-500" />
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="tel:+972502328041"
                className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black px-7 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-gold-500/30 hover:-translate-y-1"
              >
                <Phone size={20} className="group-hover:animate-bounce" />
                050-232-8041
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-7 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:-translate-y-1"
              >
                קבלת הצעת מחיר
                <ArrowLeft size={18} />
              </a>
              <a
                href="https://wa.me/972502328041?text=שלום, אני מעוניין בשירותי ניקיון"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gold-500 bg-transparent text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-gold-500/10"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-4 gap-4 pt-8 border-t border-white/20"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white">
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-white/60 text-xs mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Image stack ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85"
                alt="ניקיון מקצועי"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/60 backdrop-blur rounded-2xl p-3 border border-white/10">
                <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-black" />
                </div>
                <div>
                  <div className="font-black text-white text-sm">עבודה הושלמה!</div>
                  <div className="text-white/50 text-xs">לפני 5 דקות</div>
                </div>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-zinc-900 rounded-2xl shadow-2xl p-4 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">דנה כהן</div>
                  <div className="text-white/40 text-xs">&quot;שירות מדהים!&quot;</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 -translate-y-1/2 bg-gold-500 text-black rounded-2xl shadow-2xl p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-black">500+</div>
                <div className="text-black/70 text-xs">לקוחות</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

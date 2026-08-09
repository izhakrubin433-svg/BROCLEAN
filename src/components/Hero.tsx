"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, Star, CheckCircle, ArrowLeft } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
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
  { target: 24,  suffix: "/6", label: "זמינות" },
];

const trustBadges = [
  "ביטוח מלא",
  "חומרים ידידותיים לסביבה",
  "צוות מאומן ומוסמך",
  "ללא התחייבות",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* ── Logo watermark background ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        {/* Radial glow */}
        <div className="absolute w-[750px] h-[750px] rounded-full" style={{background:"radial-gradient(circle, rgba(180,185,195,0.10) 0%, rgba(210,215,220,0.05) 45%, transparent 70%)"}} />

        {/* Slow rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute w-[820px] h-[820px]"
          style={{ opacity: 0.12 }}
        >
          <svg viewBox="0 0 820 820" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="ringG" x1="0" y1="0" x2="820" y2="820" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9ca3af" />
                <stop offset="0.5" stopColor="#d1d5db" />
                <stop offset="1" stopColor="#9ca3af" />
              </linearGradient>
            </defs>
            <circle cx="410" cy="410" r="400" stroke="url(#ringG)" strokeWidth="1" strokeDasharray="6 12" />
          </svg>
        </motion.div>

        {/* Real logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute w-[350px] h-[1100px]"
          style={{ mixBlendMode: "multiply", transform: "rotate(-30deg)" }}
        >
          <Image
            src="/logo.jpg"
            alt="Broclean logo watermark"
            fill
            className="object-contain"
            style={{ opacity: 0.07, filter: "grayscale(100%) brightness(0.5) contrast(1.2)" }}
            priority
          />
        </motion.div>
      </div>

      {/* Particles */}
      <ParticlesBackground />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" style={{ zIndex: 2 }} />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-silver-100/40 rounded-full blur-3xl" style={{ zIndex: 2 }} />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-silver-200/30 rounded-full blur-3xl" style={{ zIndex: 2 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-silver-50 border border-silver-300 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} style={{ fill: "#6b7280", color: "#6b7280" }} />
                ))}
              </div>
              <span>מדורגים 5/5 על ידי לקוחותינו</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-gray-900 leading-[1.1] mb-6"
            >
              ניקיון מקצועי
              <br />
              <span style={{ background: "linear-gradient(135deg,#374151,#6b7280,#9ca3af)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                למשרדים ובניינים
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#9ca3af,#c4c9d0,#d1d5db)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                ברמה אחרת
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
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
                <span key={b} className="flex items-center gap-1.5 bg-white border border-silver-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                  <CheckCircle size={12} className="text-silver-500" />
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
              <a href="tel:+972502328041"
                className="group flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-7 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-gray-400/30 hover:-translate-y-1">
                <Phone size={20} className="group-hover:animate-bounce" />
                050-232-8041
              </a>
              <a href="#contact"
                className="flex items-center gap-2 bg-white hover:bg-silver-50 text-gray-900 border border-silver-300 px-7 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 shadow-md">
                קבלת הצעת מחיר
                <ArrowLeft size={18} />
              </a>
              <a href="https://wa.me/972502328041?text=שלום, אני מעוניין בשירותי ניקיון"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-silver-300 bg-transparent text-gray-600 px-6 py-4 rounded-2xl font-bold text-lg transition-all hover:border-silver-500 hover:text-gray-900">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-4 gap-4 pt-8 border-t border-silver-200"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-gray-900">
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</div>
                  <div className="mt-1.5 mx-auto w-6 h-0.5 rounded-full" style={{background:"linear-gradient(90deg,#9ca3af,#d1d5db,#9ca3af)"}} />
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/60 aspect-[4/5] border border-silver-200">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85"
                alt="ניקיון מקצועי"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl p-3 border border-silver-200 shadow-lg">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-black text-gray-900 text-sm">עבודה הושלמה!</div>
                  <div className="text-gray-500 text-xs">לפני 5 דקות</div>
                </div>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-silver-200"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} style={{ fill: "#6b7280", color: "#6b7280" }} />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">דנה כהן</div>
                  <div className="text-gray-500 text-xs">&quot;שירות מדהים!&quot;</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 -translate-y-1/2 bg-white border border-silver-200 text-gray-900 rounded-2xl shadow-2xl p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-gray-900">500+</div>
                <div className="text-gray-500 text-xs">לקוחות</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

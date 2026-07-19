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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* ── Logo watermark background ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        {/* Outer slow rotate */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute w-[900px] h-[900px] opacity-[0.03]"
        >
          {/* Ring */}
          <svg viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="450" cy="450" r="440" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="8 6" />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="900" y2="900" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f59e0b" />
                <stop offset="0.5" stopColor="#d1d5db" />
                <stop offset="1" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Logo SVG — B + skyline, metallic silver */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute w-[680px] h-[680px]"
        >
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="silverGrad" x1="80" y1="60" x2="320" y2="340" gradientUnits="userSpaceOnUse">
                <stop offset="0%"  stopColor="#f3f4f6" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#9ca3af" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#d1d5db" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6b7280" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="goldAccent" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#f59e0b" stopOpacity="0.6" />
                <stop offset="1" stopColor="#fbbf24" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* ── Letter B outline ── */}
            <path
              d="M 95 60 L 95 340
                 M 95 60 L 200 60 Q 270 60 270 130 Q 270 195 200 200
                 M 95 200 L 210 200 Q 290 200 290 270 Q 290 340 210 340 L 95 340"
              stroke="url(#silverGrad)"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* ── Skyline inside B ── */}
            {/* buildings */}
            <rect x="148" y="148" width="14" height="42" rx="2" fill="url(#silverGrad)" opacity="0.9" />
            <rect x="167" y="132" width="14" height="58" rx="2" fill="url(#silverGrad)" opacity="0.85" />
            <rect x="186" y="118" width="16" height="72" rx="2" fill="url(#silverGrad)" opacity="0.95" />
            <rect x="207" y="138" width="14" height="52" rx="2" fill="url(#silverGrad)" opacity="0.8" />
            <rect x="226" y="155" width="12" height="35" rx="2" fill="url(#silverGrad)" opacity="0.75" />
            {/* antenna on tallest */}
            <line x1="194" y1="118" x2="194" y2="100" stroke="url(#goldAccent)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="194" cy="97" r="3" fill="#f59e0b" opacity="0.7" />

            {/* ── Gold accent line at bottom ── */}
            <line x1="80" y1="355" x2="320" y2="355" stroke="url(#goldAccent)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Subtle radial glow behind logo */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold-500/8 via-silver-500/4 to-transparent blur-3xl" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-950/60 to-gray-950/90" />
      {/* Side glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-silver-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-gold-500/30 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
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
              <span style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24,#fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                למשרדים ובניינים
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#9ca3af,#d1d5db,#f3f4f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                ברמה אחרת
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg"
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
                <span key={b} className="flex items-center gap-1.5 bg-white/5 border border-silver-700/40 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">
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
              <a href="tel:+972502328041"
                className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black px-7 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-gold-500/30 hover:-translate-y-1">
                <Phone size={20} className="group-hover:animate-bounce" />
                050-232-8041
              </a>
              <a href="#contact"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1">
                קבלת הצעת מחיר
                <ArrowLeft size={18} />
              </a>
              <a href="https://wa.me/972502328041?text=שלום, אני מעוניין בשירותי ניקיון"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-silver-600/40 bg-transparent text-gray-300 px-6 py-4 rounded-2xl font-bold text-lg transition-all hover:border-silver-400 hover:text-white">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-gold-400">
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</div>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60 aspect-[4/5] border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85"
                alt="ניקיון מקצועי"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-gray-950/90 backdrop-blur rounded-2xl p-3 border border-gold-500/30 shadow-lg">
                <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-black" />
                </div>
                <div>
                  <div className="font-black text-white text-sm">עבודה הושלמה!</div>
                  <div className="text-gray-400 text-xs">לפני 5 דקות</div>
                </div>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-gray-900 rounded-2xl shadow-2xl p-4 border border-gold-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">דנה כהן</div>
                  <div className="text-gray-400 text-xs">&quot;שירות מדהים!&quot;</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 -translate-y-1/2 bg-gray-950 border border-gold-500/40 text-white rounded-2xl shadow-2xl p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-gold-400">500+</div>
                <div className="text-gray-500 text-xs">לקוחות</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

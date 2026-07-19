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

        {/* Glow behind logo */}
        <div className="absolute w-[700px] h-[700px] rounded-full" style={{background:"radial-gradient(circle, rgba(245,158,11,0.06) 0%, rgba(156,163,175,0.04) 40%, transparent 70%)"}} />

        {/* Main logo SVG — accurate to the real logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute w-[640px] h-[640px]"
        >
          <svg viewBox="0 0 500 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              {/* Main metallic silver gradient — top-left bright, bottom-right dark */}
              <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.18" />
                <stop offset="20%"  stopColor="#d1d5db" stopOpacity="0.14" />
                <stop offset="50%"  stopColor="#9ca3af" stopOpacity="0.10" />
                <stop offset="80%"  stopColor="#6b7280" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#374151" stopOpacity="0.06" />
              </linearGradient>
              {/* Bright highlight stripe */}
              <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#f9fafb" stopOpacity="0.22" />
                <stop offset="40%"  stopColor="#e5e7eb" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.06" />
              </linearGradient>
              {/* Gold accent */}
              <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0" />
                <stop offset="30%"  stopColor="#f59e0b" stopOpacity="0.18" />
                <stop offset="50%"  stopColor="#fbbf24" stopOpacity="0.22" />
                <stop offset="70%"  stopColor="#f59e0b" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
              {/* Skyline buildings gradient */}
              <linearGradient id="bldg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#e5e7eb" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* ═══ LETTER B — thick, bold, like the real logo ═══ */}
            {/* Vertical stroke */}
            <rect x="100" y="55" width="38" height="280" rx="6" fill="url(#shine)" />

            {/* Top bump of B */}
            <path
              d="M 138 55 L 230 55 Q 310 55 310 130 Q 310 200 230 205 L 138 205 Z"
              fill="url(#metal)"
            />
            {/* Top bump inner cutout */}
            <path
              d="M 155 80 L 222 80 Q 278 80 278 130 Q 278 178 222 180 L 155 180 Z"
              fill="#030712"
              fillOpacity="0.85"
            />

            {/* Bottom bump of B — slightly wider */}
            <path
              d="M 138 205 L 238 205 Q 330 205 330 278 Q 330 335 238 335 L 138 335 Z"
              fill="url(#metal)"
            />
            {/* Bottom bump inner cutout */}
            <path
              d="M 155 228 L 232 228 Q 298 228 298 278 Q 298 312 232 312 L 155 312 Z"
              fill="#030712"
              fillOpacity="0.85"
            />

            {/* ═══ SKYLINE inside the B — centered in top bump ═══ */}
            {/* Building 1 — far left, short */}
            <rect x="168" y="148" width="11" height="32" rx="1" fill="url(#bldg)" />
            {/* Building 2 */}
            <rect x="183" y="136" width="11" height="44" rx="1" fill="url(#bldg)" />
            {/* Building 3 — tallest, center */}
            <rect x="198" y="118" width="13" height="62" rx="1" fill="url(#bldg)" />
            {/* Antenna on tallest */}
            <line x1="204" y1="118" x2="204" y2="104" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.25" strokeLinecap="round" />
            <circle cx="204" cy="102" r="2.5" fill="#f59e0b" fillOpacity="0.25" />
            {/* Building 4 */}
            <rect x="215" y="130" width="11" height="50" rx="1" fill="url(#bldg)" />
            {/* Building 5 — far right, short */}
            <rect x="230" y="144" width="10" height="36" rx="1" fill="url(#bldg)" />
            {/* Ground line */}
            <line x1="162" y1="180" x2="246" y2="180" stroke="#9ca3af" strokeWidth="1" strokeOpacity="0.12" />

            {/* ═══ BROCLEAN text ═══ */}
            <text
              x="250" y="400"
              textAnchor="middle"
              fontFamily="Arial Black, Arial, sans-serif"
              fontWeight="900"
              fontSize="68"
              letterSpacing="8"
              fill="url(#shine)"
            >
              BROCLEAN
            </text>

            {/* ═══ שירותי ניקיון subtitle ═══ */}
            {/* Left dash */}
            <line x1="90" y1="430" x2="168" y2="430" stroke="url(#gold)" strokeWidth="1.5" />
            <text
              x="250" y="436"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontWeight="400"
              fontSize="22"
              letterSpacing="3"
              fill="#9ca3af"
              fillOpacity="0.12"
            >
              שירותי ניקיון
            </text>
            {/* Right dash */}
            <line x1="332" y1="430" x2="410" y2="430" stroke="url(#gold)" strokeWidth="1.5" />

          </svg>
        </motion.div>

        {/* Slow rotating outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute w-[780px] h-[780px]"
          style={{ opacity: 0.04 }}
        >
          <svg viewBox="0 0 780 780" fill="none" className="w-full h-full">
            <circle cx="390" cy="390" r="380" stroke="url(#ringG)" strokeWidth="1" strokeDasharray="6 10" />
            <defs>
              <linearGradient id="ringG" x1="0" y1="0" x2="780" y2="780" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f59e0b" />
                <stop offset="0.5" stopColor="#d1d5db" />
                <stop offset="1" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/88 via-gray-950/65 to-gray-950/92" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-silver-500/4 rounded-full blur-3xl" />

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

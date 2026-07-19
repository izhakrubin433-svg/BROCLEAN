"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500,  suffix: "+", label: "לקוחות מרוצים",    sub: "Happy Clients" },
  { value: 5,    suffix: "+", label: "שנות ניסיון",       sub: "Years Experience" },
  { value: 100,  suffix: "%", label: "שביעות רצון",       sub: "Satisfaction Rate" },
  { value: 1200, suffix: "+", label: "פרויקטים הושלמו",   sub: "Projects Completed" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const inc = value / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) { setCount(value); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 1800 / steps);
    return () => clearInterval(t);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] rounded-full blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-black mb-2"
                style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24,#fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              {/* Hebrew label */}
              <div className="font-bold text-white text-base mb-1">{s.label}</div>
              {/* English sub */}
              <div className="text-gray-600 text-xs tracking-widest uppercase">{s.sub}</div>
              {/* Gold underline on hover */}
              <div className="mt-3 mx-auto w-8 h-0.5 bg-gold-500/30 group-hover:w-16 group-hover:bg-gold-500/70 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

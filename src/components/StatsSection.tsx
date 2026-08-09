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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Silver line top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(156,163,175,0.6) 30%,rgba(209,213,219,0.9) 50%,rgba(156,163,175,0.6) 70%,transparent)"}} />
      {/* Silver line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(156,163,175,0.6) 30%,rgba(209,213,219,0.9) 50%,rgba(156,163,175,0.6) 70%,transparent)"}} />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] rounded-full blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(209,213,219,0.15) 0%, transparent 70%)" }} />
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
              <div className="text-4xl md:text-5xl font-black mb-2"
                style={{ background: "linear-gradient(135deg,#374151,#6b7280,#9ca3af)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-bold text-gray-900 text-base mb-1">{s.label}</div>
              <div className="text-gray-400 text-xs tracking-widest uppercase">{s.sub}</div>
              <div className="mt-3 mx-auto w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-16"
                style={{background:"linear-gradient(90deg,#9ca3af,#d1d5db,#9ca3af)"}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Sparkles, Heart, BadgeDollarSign } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Users,           title: "צוות מקצועי",    description: "עובדים מיומנים, מאומנים ואמינים עם ניסיון רב בתחום הניקיון." },
  { icon: ShieldCheck,     title: "שירות אמין",     description: "מגיעים בזמן, עושים את העבודה ביסודיות ועומדים בכל הבטחה." },
  { icon: Clock,           title: "זמינות גבוהה",   description: "זמינים 6 ימים בשבוע, כולל שעות ערב. מתאימים לוח זמנים לצרכיכם." },
  { icon: Sparkles,        title: "עבודה יסודית",   description: "לא מסתפקים בפחות מהמושלם. כל פינה מקבלת את הטיפול הראוי." },
  { icon: Heart,           title: "יחס אישי",       description: "כל לקוח מקבל תשומת לב מלאה. אנחנו מקשיבים ומתאימים את השירות." },
  { icon: BadgeDollarSign, title: "מחירים הוגנים",  description: "תמחור שקוף ללא הפתעות. איכות פרימיום במחיר שמתאים לתקציב." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-zinc-900 rounded-3xl -rotate-3 scale-95" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80"
                alt="צוות ניקיון מקצועי"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating card — satisfaction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              animate={{ y: [0, -6, 0] }}
              className="absolute -bottom-6 -left-6 bg-zinc-900 rounded-2xl shadow-2xl p-5 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/30">
                  <ShieldCheck className="text-black" size={22} />
                </div>
                <div>
                  <div className="font-black text-2xl text-white">100%</div>
                  <div className="text-white/50 text-sm">שביעות רצון מובטחת</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card — experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              animate={{ y: [0, 6, 0] }}
              className="absolute -top-6 -right-6 bg-zinc-900 border border-gold-500/30 rounded-2xl shadow-2xl p-4 text-white"
            >
              <div className="text-center">
                <div className="font-black text-3xl">5+</div>
                <div className="text-gold-400 text-xs">שנות ניסיון</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-gold-500/20 text-gold-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                למה לבחור בנו
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                הסיבות שלקוחות
                <br />
                <span className="text-gold-500">חוזרים אלינו</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                אנחנו לא רק חברת ניקיון — אנחנו שותפים לשמירה על הסביבה שלכם.
                כל פרט חשוב לנו.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-4 p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all group"
                >
                  <div className="w-11 h-11 bg-zinc-900 group-hover:bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <f.icon size={20} className="text-gold-400 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{f.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

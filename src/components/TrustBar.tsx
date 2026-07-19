"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, Clock, ThumbsUp, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "מבוטחים במלואו" },
  { icon: Award,       label: "5 שנות ניסיון" },
  { icon: Leaf,        label: "חומרים ידידותיים לסביבה" },
  { icon: Clock,       label: "תמיד בזמן" },
  { icon: ThumbsUp,    label: "100% שביעות רצון" },
  { icon: BadgeCheck,  label: "צוות מוסמך ומאומן" },
];

export default function TrustBar() {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-2.5 text-gray-700"
            >
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon size={16} className="text-gray-600" />
              </div>
              <span className="font-semibold text-sm whitespace-nowrap">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

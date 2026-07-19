"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingButtons() {
  const [open,    setOpen]    = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {open && (
          <>
            {/* Call */}
            <motion.a
              href="tel:+972502328041"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white pl-4 pr-3 py-3 rounded-full shadow-xl shadow-slate-500/30 font-semibold text-sm whitespace-nowrap"
            >
              <Phone size={18} />
              050-232-8041
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/972502328041?text=שלום, אני מעוניין בשירותי ניקיון"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white pl-4 pr-3 py-3 rounded-full shadow-xl shadow-slate-500/30 font-semibold text-sm whitespace-nowrap"
            >
              <MessageCircle size={18} />
              שלחו הודעה
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 bg-slate-900 hover:bg-black text-white rounded-full flex items-center justify-center shadow-2xl shadow-slate-500/50 transition-colors"
        aria-label="פתח אפשרויות יצירת קשר"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={26} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full bg-gold-200"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        )}
      </motion.button>
    </div>
  );
}

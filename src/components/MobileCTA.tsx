"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          {/* Silver top line */}
          <div className="h-px" style={{background:"linear-gradient(90deg,transparent,rgba(156,163,175,0.6),rgba(209,213,219,0.9),rgba(156,163,175,0.6),transparent)"}} />

          <div className="bg-white/95 backdrop-blur-md px-4 py-3 flex gap-3 shadow-2xl shadow-gray-300/40">
            <a
              href="tel:+972502328041"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3.5 rounded-2xl font-bold text-base transition-all active:scale-95"
            >
              <Phone size={18} />
              התקשר עכשיו
            </a>
            <a
              href="https://wa.me/972502328041?text=שלום, אני מעוניין בשירותי ניקיון"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white border border-silver-300 text-gray-900 py-3.5 rounded-2xl font-bold text-base transition-all active:scale-95"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Safe area for iPhone home indicator */}
          <div className="bg-white/95 h-safe-bottom" style={{paddingBottom:"env(safe-area-inset-bottom)"}} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

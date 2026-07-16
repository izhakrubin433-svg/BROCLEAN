"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/972500000000?text=שלום, אני מעוניין בשירותי ניקיון"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors"
        aria-label="שלחו הודעה בוואטסאפ"
      >
        <MessageCircle size={26} />
      </motion.a>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 w-14 h-14 bg-green-400 rounded-full -z-10"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      />
    </div>
  );
}

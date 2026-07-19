"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "שירותים",      href: "#services" },
  { label: "למה אנחנו",    href: "#why-us" },
  { label: "איך זה עובד",  href: "#process" },
  { label: "גלריה",        href: "#gallery" },
  { label: "המלצות",       href: "#testimonials" },
  { label: "שאלות נפוצות", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(`#${id}`); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar — שחור עם זהב */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-950 text-gray-400 text-xs py-2 px-4 hidden md:flex items-center justify-between border-b border-white/5">
        <span className="text-gray-500">שעות פעילות: א׳–ה׳ 08:00–20:00 | ו׳ 08:00–14:00</span>
        <div className="flex items-center gap-4">
          <a href="tel:+972502328041" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors font-medium">
            <Phone size={12} />
            050-232-8041
          </a>
          <a href="https://wa.me/972502328041" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
            <MessageCircle size={12} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`fixed right-0 left-0 z-40 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-white/98 backdrop-blur-md shadow-lg shadow-black/10 border-b border-gray-100 py-3"
          : "top-0 bg-white/95 py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-14 h-10 bg-gray-950 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gold-500 rounded-l-2xl" />
              <span className="text-white font-black text-lg">B</span>
            </div>
            <div className="leading-tight">
              <span className="font-black text-xl text-gray-900">Broclean</span>
              <p className="text-xs font-medium text-gold-500" dir="ltr">Cleaning Services</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                  active === link.href
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}>
                {link.label}
                {active === link.href && (
                  <motion.div layoutId="activeNav"
                    className="absolute bottom-0 right-3 left-3 h-0.5 rounded-full bg-gold-500" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://wa.me/972502328041" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all text-gray-500 hover:bg-gray-100 hover:text-gray-900">
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a href="tel:+972502328041"
              className="flex items-center gap-2 bg-gray-950 hover:bg-black text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:-translate-y-0.5 border border-gold-500/30">
              <Phone size={15} />
              התקשר עכשיו
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors text-gray-700 hover:bg-gray-100">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-2xl">
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    className={`font-medium py-3 px-4 rounded-xl transition-colors ${
                      active === link.href
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    }`}>
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-2 mt-2">
                  <a href="https://wa.me/972502328041"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-950 text-white py-3 rounded-xl font-semibold text-sm border border-gold-500/30">
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <a href="tel:+972502328041"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold text-sm">
                    <Phone size={16} />
                    050-232-8041
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

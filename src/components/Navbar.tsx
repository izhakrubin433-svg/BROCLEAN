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
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-black text-white/60 text-xs py-2 px-4 hidden md:flex items-center justify-between border-b border-white/10">
        <span>שעות פעילות: א׳–ה׳ 08:00–20:00 | ו׳ 08:00–14:00</span>
        <div className="flex items-center gap-4">
          <a href="tel:+972502328041" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors font-medium">
            <Phone size={12} />
            050-232-8041
          </a>
          <a
            href="https://wa.me/972502328041"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <MessageCircle size={12} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`fixed right-0 left-0 z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 py-3"
            : "top-0 bg-black/95 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-14 h-10 bg-black border border-gold-500 rounded-2xl flex items-center justify-center transition-all shadow-lg shadow-gold-500/20">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gold-500 rounded-l-2xl" />
              <span className="text-gold-500 font-black text-lg">B</span>
            </div>
            <div className="leading-tight">
              <span className="font-black text-xl text-white">Broclean</span>
              <p className="text-xs font-medium text-gold-400">Cleaning Services</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                  active === link.href
                    ? "text-gold-400 bg-white/10"
                    : "text-white/70 hover:text-gold-400 hover:bg-white/10"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 right-3 left-3 h-0.5 rounded-full bg-gold-500"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://wa.me/972502328041"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all text-white/70 hover:bg-white/10 hover:text-gold-400"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="tel:+972502328041"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-gold-500/30 hover:-translate-y-0.5"
            >
              <Phone size={15} />
              התקשר עכשיו
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors text-white hover:bg-white/10"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black border-t border-white/10 shadow-2xl"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-medium py-3 px-4 rounded-xl transition-colors ${
                      active === link.href
                        ? "bg-white/10 text-gold-400"
                        : "text-white/70 hover:bg-white/10 hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-2 mt-2">
                  <a
                    href="https://wa.me/972502328041"
                    className="flex-1 flex items-center justify-center gap-2 bg-gold-500 text-black py-3 rounded-xl font-semibold text-sm"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+972502328041"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-semibold text-sm"
                  >
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

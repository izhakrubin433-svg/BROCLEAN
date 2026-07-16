"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "שירותים", href: "#services" },
  { label: "למה אנחנו", href: "#why-us" },
  { label: "גלריה", href: "#gallery" },
  { label: "המלצות", href: "#testimonials" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-lg">B</span>
          </div>
          <div className="leading-tight">
            <span className={`font-black text-xl ${scrolled ? "text-brand-800" : "text-white"}`}>
              Broclean
            </span>
            <p className={`text-xs font-medium ${scrolled ? "text-slate-500" : "text-blue-100"}`}>
              Cleaning Services
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                scrolled ? "text-slate-700" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+972502328041"
          className="hidden lg:flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50"
        >
          <Phone size={16} />
          התקשר עכשיו
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}
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
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-700 font-medium py-3 px-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+972502328041"
                className="mt-2 flex items-center justify-center gap-2 bg-brand-600 text-white py-3 rounded-xl font-semibold"
              >
                <Phone size={16} />
                התקשר עכשיו
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

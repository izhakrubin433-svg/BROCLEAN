import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">B</span>
              </div>
              <div>
                <div className="font-black text-xl">Broclean</div>
                <div className="text-slate-400 text-xs">Cleaning Services</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              שירותי ניקיון מקצועיים לעסקים ובתים. עבודה יסודית, אמינה ומקצועית
              בהתאמה אישית לכל לקוח.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+972500000000"
                className="w-10 h-10 bg-white/10 hover:bg-brand-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:info@broclean-clean.com"
                className="w-10 h-10 bg-white/10 hover:bg-brand-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5">שירותים</h4>
            <ul className="flex flex-col gap-2.5 text-slate-400">
              {[
                "ניקיון משרדים",
                "ניקיון בניינים",
                "ניקיון דירות",
                "ניקיון אחרי שיפוץ",
                "ניקיון עסקים",
                "ניקוי מוצרי חשמל",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">יצירת קשר</h4>
            <div className="flex flex-col gap-4 text-slate-400 text-sm">
              <a href="tel:+972500000000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} />
                050-000-0000
              </a>
              <a
                href="https://wa.me/972500000000"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="mailto:info@broclean-clean.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={15} />
                info@broclean-clean.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={15} />
                מרכז הארץ ופריפריה
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© {year} Broclean Cleaning Services. כל הזכויות שמורות.</p>
          <p>
            <a href="https://broclean-clean.com" className="hover:text-white transition-colors">
              broclean-clean.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

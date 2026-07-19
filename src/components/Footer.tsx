import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-black border border-gold-500 rounded-xl flex items-center justify-center">
                <span className="text-gold-500 font-black text-lg">B</span>
              </div>
              <div>
                <div className="font-black text-xl">Broclean</div>
                <div className="text-gold-400 text-xs">Cleaning Services</div>
              </div>
            </div>
            <p className="text-white/40 leading-relaxed mb-6 max-w-sm">
              שירותי ניקיון מקצועיים למשרדים ובניינים. עבודה יסודית, אמינה ומוקפדת
              להתאמה מקסימלית לרכבי משרדים ולשכונות המשותפות.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+972502328041"
                className="w-10 h-10 bg-zinc-900 hover:bg-gold-500 hover:text-black rounded-xl flex items-center justify-center transition-colors"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://wa.me/972502328041"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-gold-500 hover:text-black rounded-xl flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:info@broclean-clean.com"
                className="w-10 h-10 bg-zinc-900 hover:bg-gold-500 hover:text-black rounded-xl flex items-center justify-center transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-gold-400">שירותים</h4>
            <ul className="flex flex-col gap-2.5 text-white/40">
              {["ניקיון משרדים", "ניקיון בניינים"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-gold-400 transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-gold-400">יצירת קשר</h4>
            <div className="flex flex-col gap-4 text-white/40 text-sm">
              <a href="tel:+972502328041" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone size={15} />
                050-232-8041
              </a>
              <a href="https://wa.me/972502328041" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a href="mailto:info@broclean-clean.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
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

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <p>© {year} Broclean Cleaning Services. כל הזכויות שמורות.</p>
          <p>
            <a href="https://broclean-clean.com" className="hover:text-gold-400 transition-colors">
              broclean-clean.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

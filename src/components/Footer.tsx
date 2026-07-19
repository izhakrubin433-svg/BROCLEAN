import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gray-900 border border-gold-500/40 rounded-xl flex items-center justify-center">
                <span className="text-gold-400 font-black text-lg">B</span>
              </div>
              <div>
                <div className="font-black text-xl">Broclean</div>
                <div className="text-gold-500 text-xs">Cleaning Services</div>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              שירותי ניקיון מקצועיים למשרדים ובניינים. עבודה יסודית, אמינה ומוקפדת
              להתאמה מקסימלית לרכבי משרדים ולשכונות המשותפות.
            </p>
            <div className="flex gap-3">
              {[
                { href: "tel:+972502328041", icon: Phone },
                { href: "https://wa.me/972502328041", icon: MessageCircle, external: true },
                { href: "mailto:info@broclean-clean.com", icon: Mail },
              ].map(({ href, icon: Icon, external }) => (
                <a key={href} href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-white/5 hover:bg-gold-500 hover:text-black rounded-xl flex items-center justify-center transition-colors border border-white/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-gold-400">שירותים</h4>
            <ul className="flex flex-col gap-2.5 text-gray-500">
              {["ניקיון משרדים", "ניקיון בניינים"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-gold-400 transition-colors text-sm">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-gold-400">יצירת קשר</h4>
            <div className="flex flex-col gap-4 text-gray-500 text-sm">
              <a href="tel:+972502328041" className="flex items-center gap-2 hover:text-silver-300 transition-colors">
                <Phone size={15} className="text-silver-500" /> 050-232-8041
              </a>
              <a href="https://wa.me/972502328041" className="flex items-center gap-2 hover:text-silver-300 transition-colors">
                <MessageCircle size={15} className="text-silver-500" /> WhatsApp
              </a>
              <a href="mailto:info@broclean-clean.com" className="flex items-center gap-2 hover:text-silver-300 transition-colors">
                <Mail size={15} className="text-silver-500" /> info@broclean-clean.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-silver-500" /> מרכז הארץ
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
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

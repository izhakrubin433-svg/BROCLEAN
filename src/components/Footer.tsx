import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 border border-silver-500/30 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">B</span>
              </div>
              <div>
                <div className="font-black text-xl">Broclean</div>
                <div className="text-silver-400 text-xs" style={{background:"linear-gradient(90deg,#9ca3af,#d1d5db)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Cleaning Services</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              שירותי ניקיון מקצועיים למשרדים, בניינים וקליניקות. עבודה יסודית, אמינה ומוקפדת — כי הסביבה שלכם חשובה לנו.
            </p>
            <div className="flex gap-3">
              {[
                { href: "tel:+972502328041", icon: Phone },
                { href: "https://wa.me/972502328041", icon: MessageCircle, external: true },
                { href: "mailto:broclean14@gmail.com", icon: Mail },
              ].map(({ href, icon: Icon, external }) => (
                <a key={href} href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={href.includes("tel") ? "התקשר אלינו" : href.includes("wa.me") ? "WhatsApp" : "שלח אימייל"}
                  className="w-10 h-10 bg-white/5 hover:bg-white hover:text-gray-900 rounded-xl flex items-center justify-center transition-colors border border-white/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-silver-300">שירותים</h4>
            <ul className="flex flex-col gap-2.5 text-gray-400">
              {["ניקיון משרדים", "ניקיון בניינים", "ניקיון קליניקות", "חללי עבודה משותפים"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors text-sm">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-silver-300">יצירת קשר</h4>
            <div className="flex flex-col gap-4 text-gray-400 text-sm">
              <a href="tel:+972502328041" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} className="text-silver-500" /> 050-232-8041
              </a>
              <a href="https://wa.me/972502328041" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle size={15} className="text-silver-500" /> WhatsApp
              </a>
              <a href="mailto:broclean14@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} className="text-silver-500" /> broclean14@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-silver-500" /> מרכז הארץ
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
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

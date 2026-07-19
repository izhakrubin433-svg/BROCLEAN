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
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-gray-900 font-black text-lg">B</span>
              </div>
              <div>
                <div className="font-black text-xl">Broclean</div>
                <div className="text-gray-500 text-xs">Cleaning Services</div>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              שירותי ניקיון מקצועיים למשרדים ובניינים. עבודה יסודית, אמינה ומוקפדת
              להתאמה מקסימלית לרכבי משרדים ולשכונות המשותפות.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+972502328041"
                className="w-10 h-10 bg-white/10 hover:bg-white hover:text-gray-900 rounded-xl flex items-center justify-center transition-colors"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://wa.me/972502328041"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white hover:text-gray-900 rounded-xl flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:info@broclean-clean.com"
                className="w-10 h-10 bg-white/10 hover:bg-white hover:text-gray-900 rounded-xl flex items-center justify-center transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-gray-300">שירותים</h4>
            <ul className="flex flex-col gap-2.5 text-gray-500">
              {["ניקיון משרדים", "ניקיון בניינים"].map((s) => (
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
            <h4 className="font-bold text-lg mb-5 text-gray-300">יצירת קשר</h4>
            <div className="flex flex-col gap-4 text-gray-500 text-sm">
              <a href="tel:+972502328041" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} />
                050-232-8041
              </a>
              <a href="https://wa.me/972502328041" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a href="mailto:info@broclean-clean.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} />
                info@broclean-clean.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={15} />
                מרכז הארץ
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
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

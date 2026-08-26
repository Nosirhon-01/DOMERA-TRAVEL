import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const yandexMapsUrl = "https://yandex.uz/maps/10335/tashkent/?ll=69.222912%2C41.290669&mode=routes&rtext=41.290664%2C69.222907~41.290681%2C69.222916&rtt=mt&ruri=~&z=21";

  return (
    <footer className="bg-[#082A5B] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="site-container">
        
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Custom Brand Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 border border-white/20 overflow-hidden flex items-center justify-center shrink-0 shadow-md">
                <img 
                  src="/domera_logo.png" 
                  alt="DOMERA TRAVEL Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white leading-tight">
                  DOMERA <span className="text-[#D4AF37] font-semibold">TRAVEL</span>
                </span>
                <span className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                  Corporate Travel Agency
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-1 text-xs text-slate-400 font-medium">
              {t.footer.country}
            </div>
          </div>

          {/* Column 1: XIZMATLAR */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-[#D4AF37]">
              XIZMATLAR
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300/80">
              <li><a href="#services" className="hover:text-white transition-colors">Tur paketlari</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Aviabilet</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mehmonxona</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Transfer</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ekskursiyalar</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Ichki turizm</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Tashqi turizm</a></li>
            </ul>
          </div>

          {/* Column 2: BRON QILISH */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-[#D4AF37]">
              BRON QILISH
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300/80">
              <li><a href="#booking" className="hover:text-white transition-colors">Ichki turlar</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Tashqi turlar</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Bron qilish</a></li>
            </ul>
          </div>

          {/* Column 3: ALOQA */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-[#D4AF37]">
              ALOQA
            </h4>
            <div className="space-y-3 text-xs md:text-sm text-slate-300/90">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#1565FF] shrink-0 mt-0.5" />
                <span className="text-left text-xs leading-snug">Katta Chilonzor-1 MFY, 1 mavzesi,<br/>16-uy, 20-xonadon</span>
              </div>

              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px] uppercase font-bold">Ish vaqti:</span>
                  <span className="font-semibold text-white">Har kuni: 11:00 — 18:00</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={yandexMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#1565FF] text-white text-xs font-bold transition-all border border-white/20"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Yandex Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} DOMERA TRAVEL. {t.footer.rights}</p>
          
          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer">{t.footer.privacy}</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">{t.footer.terms}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

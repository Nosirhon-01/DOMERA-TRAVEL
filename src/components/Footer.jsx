import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#082A5B] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="site-container">
        
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#D4AF37] flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" className="opacity-40" />
                  <path d="M3.6 9h16.8M3.6 15h16.8" className="opacity-40" />
                  <path d="M12 3C16.9706 3 21 7.02944 21 12" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white">
                DOMERA <span className="text-[#D4AF37] font-semibold">TRAVEL</span>
              </span>
            </div>

            <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2 text-xs text-slate-400">
              {t.footer.country}
            </div>
          </div>

          {/* Column 1: Kompaniya */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#D4AF37]">
              {t.footer.col1}
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300/80">
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#uzbekistan" className="hover:text-white transition-colors">{t.nav.uzbekistan}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Column 2: Yo‘nalishlar */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#D4AF37]">
              {t.footer.col2}
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300/80">
              <li><a href="#destinations" className="hover:text-white transition-colors">Phuket</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Dubai</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Turkiya</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Maldives</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">O‘zbekiston</a></li>
            </ul>
          </div>

          {/* Column 3: Xizmatlar */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#D4AF37]">
              {t.footer.col3}
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300/80">
              {t.services.items.slice(0, 4).map((srv, i) => (
                <li key={i}><a href="#services" className="hover:text-white transition-colors">{srv.title}</a></li>
              ))}
            </ul>
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

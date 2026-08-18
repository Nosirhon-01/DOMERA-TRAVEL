import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'UZ', label: 'O‘zbekcha', flag: '🇺🇿' },
    { code: 'RU', label: 'Русский', flag: '🇷🇺' },
    { code: 'EN', label: 'English', flag: '🇬🇧' }
  ];

  const handleSelectLang = (code) => {
    setLang(code);
    setIsLangDropdownOpen(false);
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.destinations, href: '#destinations' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.uzbekistan, href: '#uzbekistan' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[76px] flex items-center ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_rgba(8,42,91,0.06)]' 
          : 'bg-gradient-to-b from-[#082A5B]/80 via-[#082A5B]/40 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="site-container w-full flex justify-between items-center">
        {/* Brand Logo Identity */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#082A5B] text-[#D4AF37] shadow-md group-hover:bg-[#1565FF]' 
              : 'bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] group-hover:bg-white/20'
          }`}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" className="opacity-40" />
              <path d="M3.6 9h16.8M3.6 15h16.8" className="opacity-40" />
              <path d="M12 3C16.9706 3 21 7.02944 21 12" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 leading-none ${
              isScrolled ? 'text-[#082A5B]' : 'text-white'
            }`}>
              DOMERA <span className="text-[#D4AF37] font-semibold">TRAVEL</span>
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 mt-0.5 ${
              isScrolled ? 'text-slate-400' : 'text-white/60'
            }`}>
              {t.nav.subtitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 relative group ${
                isScrolled 
                  ? 'text-slate-700 hover:text-[#1565FF] hover:bg-slate-100/80' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          
          {/* Interactive 3-Language Selector Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                isScrolled 
                  ? 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#1565FF] hover:text-[#1565FF]' 
                  : 'border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{lang}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleSelectLang(l.code)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                        lang === l.code 
                          ? 'bg-[#082A5B] text-white' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {lang === l.code && <span className="text-[#D4AF37] font-bold">•</span>}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#082A5B] to-[#1565FF] hover:from-[#1565FF] hover:to-[#082A5B] shadow-md shadow-blue-900/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
          >
            <span>{t.nav.btnContact}</span>
            <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`lg:hidden p-2.5 rounded-xl transition-colors ${
            isScrolled 
              ? 'bg-slate-100 text-[#082A5B]' 
              : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-[76px] left-0 w-full bg-[#082A5B]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden lg:hidden"
          >
            <div className="site-container py-6 space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-white text-base font-semibold px-4 py-3 rounded-xl hover:bg-white/10 transition-colors border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                </a>
              ))}
              
              {/* Mobile Language Switcher Row */}
              <div className="pt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between bg-white/10 p-2 rounded-xl border border-white/10">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleSelectLang(l.code)}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1 ${
                        lang === l.code 
                          ? 'bg-[#1565FF] text-white shadow-md' 
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.code}</span>
                    </button>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-6 py-3 bg-gradient-to-r from-[#1565FF] to-[#082A5B] text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-950/40 border border-white/10"
                >
                  {t.nav.btnContact}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden bg-[#082A5B]">
      {/* Background Cinematic Travel Imagery with Dark Blue Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
          alt="International Travel DOMERA" 
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082A5B] via-[#082A5B]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B] via-transparent to-black/30 z-10" />
      </div>

      {/* Decorative Aviation Route Vector Line */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path 
            d="M -100 600 C 300 400, 600 700, 1100 200 C 1300 100, 1500 300, 1600 100" 
            stroke="#D4AF37" 
            strokeWidth="2" 
            strokeDasharray="8 8" 
          />
          <circle cx="1100" cy="200" r="6" fill="#D4AF37" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="site-container relative z-20 w-full pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs md:text-sm font-semibold tracking-wider uppercase mb-8"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Main Cinematic Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-8"
          >
            {t.hero.titleStart}
            <span className="gold-gradient-text block sm:inline">{t.hero.titleBrand}</span>
            {t.hero.titleEnd}
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl mb-12 font-normal"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a 
              href="#destinations"
              className="px-8 py-4 bg-gradient-to-r from-[#1565FF] to-[#082A5B] hover:from-[#082A5B] hover:to-[#1565FF] text-white rounded-full font-bold text-base shadow-xl shadow-blue-900/40 border border-white/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group"
            >
              <span>{t.hero.btnDestinations}</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37] transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-base backdrop-blur-md border border-white/25 transition-all duration-300 flex items-center justify-center space-x-2 text-center"
            >
              <span>{t.hero.btnAbout}</span>
            </a>
          </motion.div>

          {/* Subtle Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl text-white/80 text-xs md:text-sm font-medium"
          >
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t.hero.trust1}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe2 className="w-4 h-4 text-[#4FC3F7] shrink-0" />
              <span>{t.hero.trust2}</span>
            </div>
            <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
              <Compass className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t.hero.trust3}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

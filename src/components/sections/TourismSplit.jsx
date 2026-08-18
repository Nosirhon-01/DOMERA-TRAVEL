import React from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff, PlaneLanding, MapPin, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const TourismSplit = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* 1. Inbound / Outbound Split Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="site-container">
          
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-[#1565FF] font-bold text-xs tracking-widest uppercase mb-3"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.tourism.badge}</span>
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1630]"
            >
              {t.tourism.title}
            </motion.h2>
          </div>

          {/* Equal Visual Weight Split Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Outbound Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden min-h-[480px] flex flex-col justify-end p-8 md:p-12 shadow-lg border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
                alt="Outbound Tourism" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B]/95 via-[#082A5B]/65 to-black/20" />

              <div className="relative z-10 text-white space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                  <PlaneTakeoff className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.tourism.outboundTag}</span>
                </div>

                <h3 className="text-3xl font-extrabold text-white">{t.tourism.outboundTitle}</h3>

                <p className="text-sm md:text-base text-slate-200/90 leading-relaxed font-normal">
                  {t.tourism.outboundDesc}
                </p>

                <div className="pt-4">
                  <a 
                    href="#destinations" 
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#D4AF37] hover:text-white transition-colors"
                  >
                    <span>{t.tourism.outboundBtn}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Inbound Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative rounded-3xl overflow-hidden min-h-[480px] flex flex-col justify-end p-8 md:p-12 shadow-lg border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1920&auto=format&fit=crop" 
                alt="Inbound Tourism Uzbekistan" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B]/95 via-[#082A5B]/65 to-black/20" />

              <div className="relative z-10 text-white space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4AF37] text-[#082A5B] text-xs font-extrabold uppercase tracking-wider">
                  <PlaneLanding className="w-4 h-4 text-[#082A5B]" />
                  <span>{t.tourism.inboundTag}</span>
                </div>

                <h3 className="text-3xl font-extrabold text-white">{t.tourism.inboundTitle}</h3>

                <p className="text-sm md:text-base text-slate-200/90 leading-relaxed font-normal">
                  {t.tourism.inboundDesc}
                </p>

                <div className="pt-4">
                  <a 
                    href="#uzbekistan" 
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#D4AF37] hover:text-white transition-colors"
                  >
                    <span>{t.tourism.inboundBtn}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Dedicated Uzbekistan Showcase Section */}
      <section id="uzbekistan" className="section-padding bg-[#082A5B] relative overflow-hidden text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1920&auto=format&fit=crop" 
            alt="Uzbekistan Heritage" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1565FF]/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.tourism.uzBadge}</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                {t.tourism.uzTitle}
              </h2>

              <p className="text-xl text-[#4FC3F7] font-semibold">
                {t.tourism.uzSubtitle}
              </p>

              <p className="text-slate-300 leading-relaxed max-w-2xl text-base font-normal">
                {t.tourism.uzDesc}
              </p>

              {/* City Tags */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.tourism.cities.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl glass-dark border border-white/15">
                    <div className="text-base font-bold text-white mb-1 flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{item.city}</span>
                    </div>
                    <div className="text-xs text-slate-300/80">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
                <img 
                  src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1920&auto=format&fit=crop" 
                  alt="Registan Samarkand" 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B] via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-dark border border-white/20 text-xs text-slate-200">
                  <span className="font-bold text-[#D4AF37] block mb-1">{t.tourism.uzCardTitle}</span>
                  {t.tourism.uzCardDesc}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TourismSplit;

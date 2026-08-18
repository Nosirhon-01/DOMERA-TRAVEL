import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WhyDomera = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[#082A5B] text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1565FF]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.why.badge}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t.why.title}
            </h2>

            <blockquote className="text-lg md:text-xl font-semibold text-[#4FC3F7] border-l-4 border-[#D4AF37] pl-4 italic">
              {t.why.quote}
            </blockquote>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              {t.why.desc}
            </p>

            <div className="pt-4 flex items-center space-x-3 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <span>DOMERA TRAVEL • Official Quality</span>
            </div>
          </motion.div>

          {/* Right Column Feature Rows */}
          <div className="lg:col-span-7 space-y-6">
            {t.why.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl glass-dark border border-white/15 hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl font-black text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity">
                    {point.num}
                  </span>
                  <div className="w-8 h-[1px] bg-[#D4AF37]/40 group-hover:w-16 transition-all duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4FC3F7] transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyDomera;

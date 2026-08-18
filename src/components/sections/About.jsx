import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Large Editorial Imagery */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
                alt="DOMERA TRAVEL Experience" 
                className="w-full h-[450px] sm:h-[550px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B]/60 via-transparent to-transparent" />
              
              {/* Floating Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark border border-white/20 text-white backdrop-blur-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37] text-[#082A5B] flex items-center justify-center font-bold shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.about.badgeQuality}</div>
                    <div className="text-xs text-slate-200/80">{t.about.badgeDesc}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Column - Editorial Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="inline-flex items-center space-x-2 text-[#1565FF] font-bold text-xs tracking-widest uppercase mb-3">
                <span className="w-6 h-[2px] bg-[#1565FF]"></span>
                <span>{t.about.badge}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1630] leading-tight">
                {t.about.title}
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.about.p1}
            </p>
            
            <p className="text-base text-slate-500 leading-relaxed">
              {t.about.p2}
            </p>
            
            {/* 4 Feature Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.highlights.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-[#F6F9FD] border border-slate-100 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1630]">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

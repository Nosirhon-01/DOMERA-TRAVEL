import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Contact = () => {
  const { t } = useLanguage();

  const channelIcons = [
    <InstagramIcon className="w-5 h-5 text-[#1565FF]" />,
    <Send className="w-5 h-5 text-[#1565FF]" />,
    <Mail className="w-5 h-5 text-[#1565FF]" />,
    <Phone className="w-5 h-5 text-[#D4AF37]" />
  ];

  return (
    <>
      {/* 1. Visually Powerful CTA Section */}
      <section className="relative py-24 bg-[#082A5B] overflow-hidden text-white">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
            alt="DOMERA World Travel" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#082A5B] via-[#082A5B]/90 to-[#082A5B]/80 z-10" />

        <div className="site-container relative z-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            {t.cta.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#4FC3F7] font-semibold mb-8"
          >
            {t.cta.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#destinations" 
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#1565FF] to-[#082A5B] hover:from-[#082A5B] hover:to-[#1565FF] text-white rounded-full font-bold text-base shadow-xl shadow-blue-950/40 border border-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{t.cta.btn}</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Compact Contact Placeholders Section */}
      <section id="contact" className="section-padding bg-[#F6F9FD]">
        <div className="site-container">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center space-x-2 text-[#1565FF] font-bold text-xs tracking-widest uppercase mb-3">
              <span>{t.contact.badge}</span>
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1630] mb-3">
              {t.contact.title}
            </h2>

            <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          {/* 4 Compact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.contact.channels.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 text-center border border-slate-200/70 shadow-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                  {channelIcons[index]}
                </div>
                <h3 className="font-bold text-[#0B1630] text-base mb-1">{item.title}</h3>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded-full">
                  {t.contact.soon}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;

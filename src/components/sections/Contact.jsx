import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, ArrowRight, Clock, MapPin, ExternalLink, Map } from 'lucide-react';
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
  const yandexMapsUrl = "https://yandex.uz/maps/10335/tashkent/?ll=69.222912%2C41.290669&mode=routes&rtext=41.290664%2C69.222907~41.290681%2C69.222916&rtt=mt&ruri=~&z=21";

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
              href="#booking" 
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#1565FF] to-[#082A5B] hover:from-[#082A5B] hover:to-[#1565FF] text-white rounded-full font-bold text-base shadow-xl shadow-blue-950/40 border border-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Bron qilish</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact & Location Information Section */}
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

          {/* Working Hours & Location Featured Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {/* Working Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex items-start space-x-5 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 text-[#D4AF37] flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#1565FF] uppercase tracking-wider block mb-1">
                  Ish vaqti
                </span>
                <h3 className="text-xl font-extrabold text-[#0B1630] mb-1">
                  Har kuni
                </h3>
                <p className="text-base font-bold text-[#D4AF37]">
                  11:00 — 18:00
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Dam olish kunlarisiz doimiy mijozlarga ko‘mak
                </p>
              </div>
            </motion.div>

            {/* Manzil & Yandex Maps Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex items-start justify-between space-x-4 hover:shadow-md transition-all"
            >
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-[#1565FF] flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#1565FF] uppercase tracking-wider block mb-1">
                    Manzil
                  </span>
                  <h3 className="text-sm font-extrabold text-[#0B1630] mb-1">
                    Katta Chilonzor-1 MFY, 1 mavzesi
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    16-uy, 20-xonadon
                  </p>
                  
                  <a
                    href={yandexMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-[#082A5B] to-[#1565FF] hover:from-[#1565FF] hover:to-[#082A5B] text-white font-bold text-xs rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <Map className="w-4 h-4 text-[#D4AF37]" />
                    <span>Yandex Maps’da ochish</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Map Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group"
          >
            <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop" 
                alt="Tashkent Map Route" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#082A5B]/90 via-[#082A5B]/60 to-transparent flex flex-col justify-center p-8 text-white">
                <span className="px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#082A5B] text-xs font-extrabold uppercase tracking-wider w-fit mb-3">
                  YANDEX MAPS MARSHRUTI
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                  DOMERA TRAVEL Offisi
                </h3>
                <p className="text-sm text-slate-200 max-w-md mb-6">
                  Toshkent shahri markaziy marshruti va qulay transport aloqasi
                </p>

                <a
                  href={yandexMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#1565FF] hover:bg-white hover:text-[#082A5B] text-white font-bold text-xs rounded-xl shadow-lg transition-all w-fit flex items-center space-x-2 border border-white/20"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Yandex Maps’da Marshrutni Ochish</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 4 Official Contact Communication Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.contact.channels.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 text-center border border-slate-200/70 shadow-sm opacity-90 hover:opacity-100 hover:shadow-md hover:border-[#1565FF]/30 transition-all group block"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                  {channelIcons[index]}
                </div>
                <h3 className="font-bold text-[#0B1630] text-base mb-1">{item.title}</h3>
                <span className="inline-block text-[#1565FF] text-sm font-semibold truncate w-full group-hover:text-[#082A5B] transition-colors">
                  {item.value}
                </span>
              </motion.a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;

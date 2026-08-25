import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Globe, MapPin, Send, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { ichkiTurlar, tashqiTurlar } from '../../data/bookingData';
import BookingModal from '../BookingModal';
import { useLanguage } from '../../context/LanguageContext';

const Booking = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('tashqi'); // 'ichki' | 'tashqi'
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = (destName, categoryLabel) => {
    setSelectedDestination(destName);
    setSelectedCategory(categoryLabel);
    setIsModalOpen(true);
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-[#082A5B] via-[#0B1E3F] to-[#082A5B] text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1565FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D4AF37] text-xs font-extrabold uppercase tracking-widest mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ONLINE BRON QILISH</span>
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Sayohatni <span className="text-[#D4AF37]">Bron Qilish</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto"
          >
            DOMERA TRAVEL bilan O‘zbekiston va xalqaro turizm manzillarini tanlang hamda joyingizni bir zumda band qiling.
          </motion.p>
        </div>

        {/* 2 Large Premium Main Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          
          {/* Option 1: ICHKI TURIZM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => setActiveTab('ichki')}
            className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 border backdrop-blur-xl relative overflow-hidden group ${
              activeTab === 'ichki'
                ? 'bg-gradient-to-br from-white/20 to-white/10 border-[#D4AF37] shadow-2xl ring-2 ring-[#D4AF37]/50'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <MapPin className="w-7 h-7" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                activeTab === 'ichki' ? 'bg-[#D4AF37] text-[#082A5B]' : 'bg-white/10 text-white/70'
              }`}>
                O‘zbekiston
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
              ICHKI TURIZM
            </h3>
            <p className="text-sm text-slate-300 font-medium">
              O‘zbekiston bo‘ylab sayohatlar
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#D4AF37]">
              <span>16 ta viloyat va shahar</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Option 2: TASHQI TURIZM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => setActiveTab('tashqi')}
            className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 border backdrop-blur-xl relative overflow-hidden group ${
              activeTab === 'tashqi'
                ? 'bg-gradient-to-br from-white/20 to-white/10 border-[#1565FF] shadow-2xl ring-2 ring-[#1565FF]/50'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#1565FF]/20 border border-[#1565FF]/40 flex items-center justify-center text-[#4FC3F7]">
                <Globe className="w-7 h-7" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                activeTab === 'tashqi' ? 'bg-[#1565FF] text-white' : 'bg-white/10 text-white/70'
              }`}>
                Xalqaro
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-[#4FC3F7] transition-colors">
              TASHQI TURIZM
            </h3>
            <p className="text-sm text-slate-300 font-medium">
              Xorijiy davlatlarga sayohatlar
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#4FC3F7]">
              <span>10 ta mashhur mamlakat</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

        </div>

        {/* Selected Category Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {activeTab === 'ichki' ? 'Ichki turlar' : 'Tashqi turlar'}
            </h3>
            <p className="text-sm text-slate-300/80">
              {activeTab === 'ichki' ? 'O‘zbekiston bo‘ylab sayohatlar' : 'Xorijiy mamlakatlar va kurortlar'}
            </p>
          </div>

          {/* Direct Custom Booking Button */}
          <button
            onClick={() => handleOpenBooking('', activeTab === 'ichki' ? 'Ichki turizm' : 'Tashqi turizm')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1565FF] to-[#082A5B] hover:from-[#082A5B] hover:to-[#1565FF] text-white font-bold text-xs uppercase tracking-wider shadow-lg border border-white/20 flex items-center space-x-2 transition-all"
          >
            <Send className="w-4 h-4 text-[#D4AF37]" />
            <span>Erkin Bron Qilish</span>
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(activeTab === 'ichki' ? ichkiTurlar : tashqiTurlar).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-white/30 transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#D4AF37] text-[10px] font-extrabold uppercase tracking-wider">
                    {item.tag}
                  </span>

                  {/* Name Overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h4 className="text-xl font-extrabold text-white group-hover:text-[#4FC3F7] transition-colors">
                      {item.name}
                    </h4>
                    {item.country && (
                      <span className="text-xs text-slate-300 font-medium">{item.country}</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs text-slate-300/90 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Action Footer Buttons */}
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <a
                  href="#destinations"
                  className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-center text-xs font-semibold transition-colors border border-white/10 flex items-center justify-center"
                >
                  Batafsil
                </a>

                <button
                  onClick={() => handleOpenBooking(item.name, activeTab === 'ichki' ? 'Ichki turizm' : 'Tashqi turizm')}
                  className="px-3 py-2 rounded-xl bg-gradient-to-r from-[#1565FF] to-[#082A5B] hover:from-[#082A5B] hover:to-[#1565FF] text-white text-center text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1"
                >
                  <Send className="w-3 h-3 text-[#D4AF37]" />
                  <span>Bron qilish</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Embedded Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <BookingModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialDestination={selectedDestination}
            initialCategory={selectedCategory}
          />
        )}
      </AnimatePresence>

    </section>
  );
};

export default Booking;

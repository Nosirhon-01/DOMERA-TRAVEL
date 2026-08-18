import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Building2, Car, Map, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import HotelModal from '../HotelModal';

const Services = () => {
  const { t } = useLanguage();
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [selectedInitialCity, setSelectedInitialCity] = useState('phuket');

  const serviceIcons = [
    <Compass className="w-6 h-6 text-[#1565FF]" />,
    <Building2 className="w-6 h-6 text-[#1565FF]" />,
    <Car className="w-6 h-6 text-[#1565FF]" />,
    <Map className="w-6 h-6 text-[#D4AF37]" />,
    <HelpCircle className="w-6 h-6 text-[#1565FF]" />,
    <ShieldCheck className="w-6 h-6 text-[#1565FF]" />
  ];

  const handleServiceClick = (index) => {
    // Index 1 corresponds to "Mehmonxona" / "Hotel Accommodations"
    if (index === 1 || index === 3) {
      setSelectedInitialCity('phuket');
      setIsHotelModalOpen(true);
    } else {
      // Smooth scroll to contact for other service inquiries
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-[#F6F9FD]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[#1565FF] font-bold text-xs tracking-widest uppercase mb-3"
          >
            <span>{t.services.badge}</span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1630] mb-4"
          >
            {t.services.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg max-w-xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* 3x2 Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => handleServiceClick(index)}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-[230px] sm:h-[250px] cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F6F9FD] border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-[#082A5B] group-hover:text-white transition-colors duration-300">
                  {serviceIcons[index]}
                </div>
                
                <h3 className="text-xl font-bold text-[#0B1630] mb-2 group-hover:text-[#1565FF] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {service.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#082A5B] group-hover:text-[#1565FF] transition-colors">
                <span>{index === 1 ? 'Shaharlar & Mehmonxonalarni ko‘rish →' : t.services.more}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Hotel Explorer Modal */}
      <AnimatePresence>
        {isHotelModalOpen && (
          <HotelModal
            isOpen={isHotelModalOpen}
            onClose={() => setIsHotelModalOpen(false)}
            initialCityId={selectedInitialCity}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;


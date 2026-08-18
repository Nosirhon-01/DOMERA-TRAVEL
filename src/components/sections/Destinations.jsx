import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Compass } from 'lucide-react';
import DestinationModal from '../DestinationModal';
import { useLanguage } from '../../context/LanguageContext';

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const { t } = useLanguage();

  return (
    <section id="destinations" className="section-padding bg-[#F6F9FD]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center space-x-2 text-[#1565FF] font-bold text-xs tracking-widest uppercase mb-3">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.destinations.badge}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1630] leading-tight">
              {t.destinations.title}
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 text-base md:text-lg max-w-md"
          >
            {t.destinations.subtitle}
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.destinations.items.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                dest.featured ? 'lg:col-span-2 h-[420px]' : 'h-[420px]'
              }`}
              onClick={() => setSelectedDestination(dest)}
            >
              {/* Background Image */}
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B]/90 via-[#082A5B]/35 to-transparent group-hover:from-[#082A5B]/95 transition-colors duration-500" />

              {/* Country Badge Header */}
              <div className="absolute top-5 left-5 z-10 flex items-center space-x-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{dest.country}</span>
                </span>
                {dest.featured && (
                  <span className="px-3.5 py-1.5 rounded-full bg-[#D4AF37] text-[#082A5B] text-xs font-extrabold uppercase tracking-wider">
                    {t.destinations.featuredTag}
                  </span>
                )}
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 text-white flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2 text-white group-hover:text-[#4FC3F7] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-sm text-slate-200/90 line-clamp-2 max-w-lg leading-relaxed font-normal">
                      {dest.shortDesc}
                    </p>
                  </div>

                  {/* Circular Interaction Arrow */}
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center shrink-0 group-hover:bg-[#1565FF] group-hover:border-[#1565FF] transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/15 flex items-center space-x-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{t.destinations.moreInfo}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expandable Destination Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <DestinationModal 
            destination={selectedDestination} 
            onClose={() => setSelectedDestination(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Destinations;

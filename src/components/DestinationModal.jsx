import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DestinationModal = ({ destination, onClose }) => {
  const { t } = useLanguage();
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#082A5B]/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 my-auto"
      >
        {/* Top Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B] via-[#082A5B]/40 to-transparent" />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 text-white hover:bg-black/60 backdrop-blur-md flex items-center justify-center transition-colors border border-white/20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Country Badge */}
          <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{destination.country}</span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-3xl font-extrabold text-white mb-1">
              {destination.name}
            </h3>
            <p className="text-sm text-slate-200/90 font-medium">
              {destination.shortDesc}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-[#1565FF] uppercase tracking-widest mb-2 flex items-center space-x-1">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.destinations.badge}</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {destination.fullDesc}
            </p>
          </div>

          {/* Trust Points */}
          <div className="p-4 rounded-2xl bg-[#F6F9FD] border border-slate-100 space-y-3">
            <div className="text-xs font-bold text-[#0B1630] uppercase tracking-wider">
              {t.destinations.modalServicesTitle}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.services.items[0].title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.services.items[1].title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.services.items[2].title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#1565FF]" />
                <span>{t.services.items[4].title}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs text-slate-400">
            <span>{t.destinations.modalFooter}</span>
            
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#082A5B] hover:bg-[#1565FF] text-white font-bold rounded-xl transition-colors shadow-md"
            >
              {t.destinations.modalClose}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DestinationModal;

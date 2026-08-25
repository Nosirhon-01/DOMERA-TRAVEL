import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, CheckCircle2, ShieldCheck, Compass, Star, ChevronLeft, ChevronRight, Hotel, Waves, Plane, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HotelModal from './HotelModal';
import BookingModal from './BookingModal';

// Standard 4-photo gallery mapping for each destination ID (Cover, 5-Star Hotel, Sea/Nature, Sightseeing/Travel)
const destinationGalleries = {
  phuket: [
    { url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop', label: 'Manzara & Plyaj' },
    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop', label: '5★ Hashamatli Otel' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop', label: 'Moviy Dengiz' },
    { url: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop', label: 'Ekzotik Sayohat' }
  ],
  dubai: [
    { url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop', label: 'Futuristik Boku' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop', label: '5★ Resort Pool' },
    { url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop', label: 'Palm Beach & Dengiz' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', label: 'Sahro Safarilari' }
  ],
  turkey: [
    { url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop', label: 'Istanbul & Galata' },
    { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop', label: '5★ Antalya All-Inclusive' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop', label: 'O‘rta Yer Dengizi' },
    { url: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?q=80&w=2070&auto=format&fit=crop', label: 'Kapadokiya Safarlari' }
  ],
  maldives: [
    { url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop', label: 'Suv Ustidagi Villa' },
    { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop', label: '5★ Luxury Resort' },
    { url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2074&auto=format&fit=crop', label: 'Kristall Laguna' },
    { url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop', label: 'Okean Quboshi' }
  ],
  uzbekistan: [
    { url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1920&auto=format&fit=crop', label: 'Samarqand Registon' },
    { url: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=2071&auto=format&fit=crop', label: '5★ Sharqona Otel' },
    { url: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070&auto=format&fit=crop', label: 'Buxoro Qadimiy Obidalar' },
    { url: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop', label: 'Ipak Yo‘li Safarlari' }
  ],
  vietnam: [
    { url: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop', label: 'Ha Long Bay' },
    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop', label: '5★ Phu Quoc Resort' },
    { url: 'https://images.unsplash.com/photo-1509030450996-939a26569107?q=80&w=2070&auto=format&fit=crop', label: 'Golden Bridge Da Nang' },
    { url: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2070&auto=format&fit=crop', label: 'Hoi An Qadim Shahri' }
  ],
  egypt: [
    { url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=2070&auto=format&fit=crop', label: 'Giza Piramidalari' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop', label: '5★ Sharm El Sheikh Resort' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop', label: 'Qizil Dengiz Plyaji' },
    { url: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=2070&auto=format&fit=crop', label: 'Nil Daryosi Kruizi' }
  ],
  azerbaijan: [
    { url: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?q=80&w=1920&auto=format&fit=crop', label: 'Flame Towers Baku' },
    { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop', label: '5★ Kaspiy Resort Otel' },
    { url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop', label: 'Boku Dengiz Bo‘yi' },
    { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop', label: 'ShohdaG Tog‘ Safarlari' }
  ],
  qatar: [
    { url: 'https://images.unsplash.com/photo-1570701564993-e00652af8aa7?q=80&w=1920&auto=format&fit=crop', label: 'Doha Katara Skyline' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop', label: '5★ Pearl Qatar Luxury' },
    { url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop', label: 'Fors Ko‘rfazi Dengizi' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', label: 'Sahro Safarilari' }
  ]
};

const DestinationModal = ({ destination, onClose }) => {
  const { t } = useLanguage();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);

  if (!destination) return null;

  // Retrieve gallery photos or fallback to 4 copies of main image
  const gallery = destinationGalleries[destination.id] || [
    { url: destination.image, label: 'Manzara' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop', label: '5★ Otel' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop', label: 'Dengiz' },
    { url: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop', label: 'Sayohat' }
  ];

  const currentImage = gallery[activeImgIndex] || gallery[0];

  const handleNext = () => {
    setActiveImgIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setActiveImgIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

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
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 my-auto"
      >
        {/* Main Photo Viewer Slider */}
        <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeImgIndex}
              src={currentImage.url} 
              alt={currentImage.label} 
              initial={{ opacity: 0.4, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B] via-[#082A5B]/30 to-black/20" />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md flex items-center justify-center transition-colors border border-white/20 z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Country & 5-Star Hotel Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-20">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{destination.country}</span>
            </span>

            <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#D4AF37] text-[#082A5B] text-xs font-extrabold shadow-md">
              <div className="flex text-[#082A5B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="ml-1 text-[11px] uppercase tracking-wider">5★ Otel & Kurort</span>
            </span>
          </div>

          {/* Gallery Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Photo Caption & Info Header */}
          <div className="absolute bottom-4 left-6 right-6 text-white z-20 flex justify-between items-end">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                {destination.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 font-medium">
                {currentImage.label} ({activeImgIndex + 1}/{gallery.length})
              </p>
            </div>
          </div>
        </div>

        {/* 4-Photo Interactive Thumbnail Bar */}
        <div className="p-4 bg-[#082A5B] border-t border-white/10 grid grid-cols-4 gap-2 sm:gap-3">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImgIndex(idx)}
              className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all group ${
                activeImgIndex === idx 
                  ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-[1.02]' 
                  : 'border-white/20 opacity-60 hover:opacity-100'
              }`}
            >
              <img 
                src={img.url} 
                alt={img.label} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-1 left-1 right-1 text-[10px] font-bold text-white truncate text-center">
                {img.label}
              </span>
            </button>
          ))}
        </div>

        {/* Modal Body Info */}
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

          {/* Highlights Grid: 5-Star Hotel, Sea/Resorts, Excursions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button 
              onClick={() => setIsHotelModalOpen(true)}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex items-center space-x-3 text-left hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#082A5B] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Hotel className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#0B1630] group-hover:text-[#1565FF] transition-colors flex items-center gap-1">
                  <span>5★ Otellar & Kurort</span>
                  <span className="text-[10px] text-[#D4AF37]">→</span>
                </h5>
                <p className="text-[11px] text-slate-500">Batafsil ko‘rish</p>
              </div>
            </button>

            <div className="p-3.5 rounded-2xl bg-[#F6F9FD] border border-slate-100 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#4FC3F7] flex items-center justify-center shrink-0">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#0B1630]">Dengiz & Plyaj</h5>
                <p className="text-[11px] text-slate-500">Sokin va musaffo tabiat</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F6F9FD] border border-slate-100 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-[#D4AF37] flex items-center justify-center shrink-0">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#0B1630]">Transfer & Sayohat</h5>
                <p className="text-[11px] text-slate-500">Qulay tashkillashtirish</p>
              </div>
            </div>
          </div>

          {/* Included Services */}
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
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsHotelModalOpen(true)}
                className="px-4 py-2.5 bg-blue-50 text-[#1565FF] hover:bg-blue-100 font-bold rounded-xl transition-colors border border-blue-200 flex items-center space-x-1.5"
              >
                <Hotel className="w-4 h-4" />
                <span>Otellarni ko‘rish</span>
              </button>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-[#1565FF] to-[#082A5B] hover:from-[#082A5B] hover:to-[#1565FF] text-white font-bold rounded-xl transition-all shadow-md flex items-center space-x-1.5"
              >
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Bron qilish</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
              >
                {t.destinations.modalClose}
              </button>
            </div>
          </div>
        </div>

        {/* Hotel Explorer Modal embedded */}
        <AnimatePresence>
          {isHotelModalOpen && (
            <HotelModal
              isOpen={isHotelModalOpen}
              onClose={() => setIsHotelModalOpen(false)}
              initialCityId={destination.id === 'turkey' ? 'antalya' : (destination.id === 'azerbaijan' ? 'azerbaijan' : destination.id)}
            />
          )}
        </AnimatePresence>

        {/* Booking Modal embedded */}
        <AnimatePresence>
          {isBookingOpen && (
            <BookingModal
              isOpen={isBookingOpen}
              onClose={() => setIsBookingOpen(false)}
              initialDestination={destination.name}
              initialCategory="Tashqi turizm"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DestinationModal;

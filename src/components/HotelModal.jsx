import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Star, Building2, ExternalLink, CheckCircle2, Sparkles, Navigation, ChevronRight } from 'lucide-react';
import { citiesHotelData } from '../data/hotelsData';
import { useLanguage } from '../context/LanguageContext';

const HotelModal = ({ isOpen, onClose, initialCityId = 'phuket' }) => {
  const { currentLang } = useLanguage();
  const [activeCityId, setActiveCityId] = useState(initialCityId);
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Sync active city if prop changes when opening modal
  useEffect(() => {
    if (initialCityId && citiesHotelData.some(c => c.id === initialCityId)) {
      setActiveCityId(initialCityId);
    }
  }, [initialCityId, isOpen]);

  if (!isOpen) return null;

  const currentCityObj = citiesHotelData.find(c => c.id === activeCityId) || citiesHotelData[0];
  const langKey = currentLang || 'UZ';

  const getTranslatedCityName = (city) => {
    return city.cityName[langKey] || city.cityName['UZ'] || city.id;
  };

  const getTranslatedCountryName = (city) => {
    return city.country[langKey] || city.country['UZ'] || '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#082A5B]/85 backdrop-blur-lg"
      />

      {/* Main Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl bg-[#F8FAFC] rounded-3xl shadow-2xl overflow-hidden z-10 border border-white/20 my-auto max-h-[90vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#082A5B] via-[#0D3875] to-[#1565FF] text-white p-5 sm:p-7 relative shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#D4AF37]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#4FC3F7] tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>DOMERA TRAVEL • 5★ Hotel Explorer</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Hashamatli Mehmonxonalar & Resortlar
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* City Selection Scrollable Tabs */}
          <div className="mt-6 flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-2 scrollbar-none border-t border-white/15 pt-4">
            {citiesHotelData.map((city) => {
              const isActive = city.id === activeCityId;
              return (
                <button
                  key={city.id}
                  onClick={() => {
                    setActiveCityId(city.id);
                    setSelectedHotel(null);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center space-x-2 border shrink-0 ${
                    isActive
                      ? 'bg-white text-[#082A5B] border-white shadow-lg scale-[1.03]'
                      : 'bg-white/10 text-white/80 border-white/15 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="text-base">{city.flag}</span>
                  <span>{getTranslatedCityName(city)}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-[#082A5B]/10 text-[#082A5B]' : 'bg-white/20 text-white'}`}>
                    {city.hotels.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar flex-1 bg-[#F6F9FD]">
          {/* Active City Summary Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm gap-3">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{currentCityObj.flag}</span>
              <div>
                <h4 className="text-xl font-extrabold text-[#0B1630] flex items-center gap-2">
                  <span>{getTranslatedCityName(currentCityObj)}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#1565FF] border border-blue-100">
                    {getTranslatedCountryName(currentCityObj)}
                  </span>
                </h4>
                <p className="text-xs text-slate-500">
                  Tanlangan shahar bo‘yicha top 5-yulduzli mehmonxona va tropik resortlar
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1 text-xs font-bold text-[#D4AF37] bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              <Star className="w-4 h-4 fill-current text-[#D4AF37]" />
              <span>Tanlangan 5★ Garantiya</span>
            </div>
          </div>

          {/* Hotel Cards List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCityId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {currentCityObj.hotels.map((hotel, index) => (
                <div
                  key={hotel.id || index}
                  className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group grid grid-cols-1 lg:grid-cols-12 gap-0"
                >
                  {/* Hotel Photo Section */}
                  <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[340px] overflow-hidden bg-slate-900">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B]/80 via-transparent to-black/20" />

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-1 bg-[#D4AF37] text-[#082A5B] px-3 py-1 rounded-full text-xs font-extrabold shadow-md">
                      <div className="flex">
                        {[...Array(hotel.stars || 5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="ml-1">5★ LUXURY</span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-1.5 text-xs text-white/90 font-medium mb-1 drop-shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="truncate">{hotel.location}</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-md line-clamp-1">
                        {hotel.name}
                      </h4>
                    </div>
                  </div>

                  {/* Hotel Details Section */}
                  <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Custom Badge */}
                      {hotel.badge && (
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1565FF] border border-blue-100 text-[11px] font-bold uppercase tracking-wider mb-2">
                          {hotel.badge}
                        </span>
                      )}

                      {/* Main Title */}
                      <h4 className="text-xl font-extrabold text-[#0B1630] mb-2 group-hover:text-[#1565FF] transition-colors">
                        {hotel.name}
                      </h4>

                      {/* Main Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {hotel.description}
                      </p>

                      {/* Location Details (if present, e.g. Swissôtel Dubai) */}
                      {hotel.locationDetails && (
                        <div className="mb-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                          <span className="text-[11px] font-bold text-[#0B1630] uppercase tracking-wider block mb-1">
                            🏙 Joylashuv & Masofalar:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 font-medium">
                            {hotel.locationDetails.map((locItem, idx) => (
                              <span key={idx}>{locItem}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Advantages / Highlights */}
                      {hotel.highlights && hotel.highlights.length > 0 && (
                        <div className="mb-4">
                          <span className="text-[11px] font-bold text-[#0B1630] uppercase tracking-wider block mb-2">
                            🌿 Asosiy Afzalliklari:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 font-medium">
                            {hotel.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start space-x-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Rooms Info */}
                      {hotel.rooms && (
                        <div className="p-3 rounded-2xl bg-blue-50/50 border border-blue-100/60 text-xs">
                          <span className="font-bold text-[#082A5B]">🏡 Xonalar va villalar: </span>
                          <span className="text-slate-600">{hotel.rooms}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Bar & Links */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      {hotel.websiteUrl ? (
                        <a
                          href={hotel.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#082A5B] text-xs font-bold transition-colors"
                        >
                          <span>Rasmiy saytini ko‘rish</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#1565FF]" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">
                          DOMERA TRAVEL • Maxsus Partner Hotel
                        </span>
                      )}

                      <a
                        href="#contact"
                        onClick={onClose}
                        className="px-5 py-2.5 bg-[#082A5B] hover:bg-[#1565FF] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center space-x-1.5"
                      >
                        <span>Buyurtma / Ma’lumot olish</span>
                        <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-white border-t border-slate-200/80 text-xs text-slate-500 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <Navigation className="w-4 h-4 text-[#1565FF]" />
            <span>Barcha mehmonxonalar DOMERA TRAVEL tomonidan kafolatlangan va tekshirilgan.</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
          >
            Yopish
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HotelModal;

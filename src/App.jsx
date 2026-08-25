import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Value from './components/sections/Value';
import About from './components/sections/About';
import Destinations from './components/sections/Destinations';
import TourismSplit from './components/sections/TourismSplit';
import Services from './components/sections/Services';
import Booking from './components/sections/Booking';
import WhyDomera from './components/sections/WhyDomera';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
        <Header onOpenBooking={() => setIsBookingModalOpen(true)} />
        
        <main className="flex-grow">
          <Hero />
          <Value />
          <About />
          <Destinations />
          <TourismSplit />
          <Services />
          <Booking />
          <WhyDomera />
          <Gallery />
          <Contact />
        </main>
        
        <Footer />

        {/* Global Booking Modal Triggered from Header or anywhere */}
        <AnimatePresence>
          {isBookingModalOpen && (
            <BookingModal
              isOpen={isBookingModalOpen}
              onClose={() => setIsBookingModalOpen(false)}
              initialDestination=""
              initialCategory="Tashqi turizm"
            />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

export default App;

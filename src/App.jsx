import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Value from './components/sections/Value';
import About from './components/sections/About';
import Destinations from './components/sections/Destinations';
import TourismSplit from './components/sections/TourismSplit';
import Services from './components/sections/Services';
import WhyDomera from './components/sections/WhyDomera';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Value />
          <About />
          <Destinations />
          <TourismSplit />
          <Services />
          <WhyDomera />
          <Gallery />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

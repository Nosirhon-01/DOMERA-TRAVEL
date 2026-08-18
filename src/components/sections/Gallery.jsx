import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { 
      src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop', 
      alt: 'Aviation & World Travel',
      title: t.gallery.items[0].title,
      span: 'md:col-span-2 md:row-span-2 h-[420px]'
    },
    { 
      src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop', 
      alt: 'Dubai Skyline',
      title: t.gallery.items[1].title,
      span: 'md:col-span-1 md:row-span-1 h-[200px]'
    },
    { 
      src: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1920&auto=format&fit=crop', 
      alt: 'Registan Uzbekistan',
      title: t.gallery.items[2].title,
      span: 'md:col-span-1 md:row-span-2 h-[420px]'
    },
    { 
      src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop', 
      alt: 'Maldives Paradise',
      title: t.gallery.items[3].title,
      span: 'md:col-span-1 md:row-span-1 h-[200px]'
    },
    { 
      src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop', 
      alt: 'Istanbul Turkey',
      title: t.gallery.items[4].title,
      span: 'md:col-span-2 md:row-span-1 h-[200px]'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[#1565FF] font-bold text-xs tracking-widest uppercase mb-3"
          >
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.gallery.badge}</span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1630] mb-4"
          >
            {t.gallery.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg"
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>

        {/* Asymmetrical Bento Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group shadow-sm hover:shadow-xl transition-all duration-500 ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#082A5B]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                  DOMERA TRAVEL Gallery
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-[#4FC3F7] transition-colors">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, HeartHandshake, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Value = () => {
  const { t } = useLanguage();

  const icons = [
    <ShieldCheck className="w-6 h-6 text-[#1565FF]" />,
    <Globe2 className="w-6 h-6 text-[#1565FF]" />,
    <HeartHandshake className="w-6 h-6 text-[#1565FF]" />,
    <MapPin className="w-6 h-6 text-[#D4AF37]" />
  ];

  return (
    <section className="relative z-30 -mt-10 lg:-mt-14 pb-12">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {t.value.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-[0_10px_35px_rgba(8,42,91,0.06)] border border-slate-100/90 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(21,101,255,0.1)] transition-all duration-300 group flex items-start space-x-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {icons[index]}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1630] mb-1 group-hover:text-[#1565FF] transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;

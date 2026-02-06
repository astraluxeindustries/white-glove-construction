import React, { useState } from 'react';
import { GALLERY_SECTIONS } from '../constants';
import { X, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const openLightbox = (imgSrc: string, title: string) => {
    setSelectedImage(imgSrc);
    setSelectedTitle(title);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-primary-950 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000')] bg-cover bg-center"></div>
        <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Portfolio</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-primary-200 font-light max-w-2xl mx-auto px-4">
              Explore our collection of custom homes, renovations, and outdoor living spaces.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        {/* Render Sections */}
        {GALLERY_SECTIONS.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-24 last:mb-12">
            
            {/* Section Title */}
            <div className="flex flex-col items-center mb-12">
               <h2 className="text-4xl font-serif text-gray-900 mb-2 text-center">{section.title}</h2>
               <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4 text-center">{section.category}</p>
               <p className="text-gray-400 italic font-serif text-center max-w-md">{section.description}</p>
            </div>

            {/* 4xN Grid Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {section.images.map((imgSrc, imgIdx) => (
                <motion.div 
                  key={imgIdx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: imgIdx * 0.05 }}
                  className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md bg-gray-100 aspect-[4/3] md:aspect-square"
                  onClick={() => openLightbox(imgSrc, section.title)}
                >
                  <img 
                    src={imgSrc} 
                    alt={`${section.title} ${imgIdx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                    loading="lazy"
                  />
                  
                  {/* Rollover Overlay */}
                  <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/20 p-3 rounded-full text-white backdrop-blur-sm border border-white/30 hover:bg-white hover:text-primary-900 transition-colors">
                        <ZoomIn size={28} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider between sections (except last) */}
            {sectionIdx < GALLERY_SECTIONS.length - 1 && (
              <div className="mt-24 border-t border-gray-100 max-w-4xl mx-auto"></div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
            <X size={32} />
          </button>
          
          <div className="relative max-w-7xl w-full flex flex-col items-center">
             <img 
               src={selectedImage} 
               alt="Full size" 
               className="max-h-[85vh] max-w-full rounded-sm shadow-2xl object-contain" 
               onClick={(e) => e.stopPropagation()} 
             />
             {selectedTitle && (
               <p className="mt-4 text-white/90 font-serif text-xl tracking-wide">{selectedTitle}</p>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HOME_SERVICE_LIST, FEATURE_CARDS, IMAGES } from '../constants';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* 1. Hero Section - Luxury Kitchen Image */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${IMAGES.kitchen}")` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg"
          >
            The Finishing Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl font-light tracking-wide mb-8 max-w-3xl mx-auto text-gray-100"
          >
            Elevating homes in Southern Utah with precision craftsmanship and luxury design.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => navigate('/contact')}
            className="bg-primary-700 hover:bg-primary-800 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest shadow-2xl transition-all hover:scale-105"
          >
            START YOUR PROJECT
          </motion.button>
        </div>
      </section>

      {/* 2. Split Layout: List & Images (Matching Screenshot 1) */}
      <section className="py-20 bg-white relative z-10 -mt-10 rounded-t-3xl shadow-2xl mx-auto max-w-[95%]">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Service List */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3"
            >
              <h2 className="text-primary-900 font-serif text-3xl mb-8 border-b-2 border-primary-100 pb-4 inline-block">
                Our Expertise
              </h2>
              <ul className="space-y-4">
                {HOME_SERVICE_LIST.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 hover:text-primary-700 transition-colors group cursor-pointer">
                    <div className="w-2 h-2 bg-primary-300 rounded-full mr-4 group-hover:bg-primary-700 transition-colors"></div>
                    <span className="text-lg font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-primary-600 text-white w-full py-4 rounded-lg font-bold shadow-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  Request a Quote <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </motion.div>

            {/* Right: Visual Showcase (Pool & Glove/Detail) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                <img src={IMAGES.pool} alt="Luxury Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                   <p className="text-white font-serif text-xl">Outdoor Living</p>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group md:mt-12">
                <img src={IMAGES.glove} alt="White Glove Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                   <p className="text-white font-serif text-xl">The Finishing Touch</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. The "Blue Box" Feature Cards Section (Matching Screenshot) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURE_CARDS.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(card.path)}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition-colors z-10" />
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-serif font-bold mb-2 group-hover:text-primary-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-light tracking-wide mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    {card.subtitle}
                  </p>
                  <div className="w-12 h-1 bg-primary-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Intro/Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-4xl font-serif text-gray-900 mb-6">"Just Right"</h2>
           <p className="text-gray-600 text-lg leading-relaxed italic">
             "I remember my father wearing white canvas work gloves when painting to keep the sticky oil based paints off his hands. 
             I thought the name White Glove would be a fitting way to remember the legacy my father left of always being clean and neat."
           </p>
           <p className="mt-4 text-primary-800 font-bold">- Kevin Hansen, Founder</p>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-primary-950 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-800/30 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-600/20 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to Build Your Dream?</h2>
          <p className="text-primary-200 text-xl max-w-2xl mb-12 font-light">
            Whether it's a new build, a remodel, or outdoor living, we provide the finishing touch you deserve.
          </p>
          <button 
             onClick={() => navigate('/contact')}
             className="bg-white text-primary-950 px-12 py-5 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            GET A FREE QUOTE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
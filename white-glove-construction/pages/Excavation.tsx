import React from 'react';
import { Truck } from 'lucide-react';
import { EXCAVATION_DATA, CONTACT_INFO } from '../constants';
import Logo from '../components/Logo';

const Excavation: React.FC = () => {
  const servicesList = EXCAVATION_DATA.services;
  const half = Math.ceil(servicesList.length / 2);
  const leftServices = servicesList.slice(0, half);
  const rightServices = servicesList.slice(half);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-zinc-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://picsum.photos/1920/600?random=50')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="text-5xl font-serif font-bold text-yellow-500 tracking-wide uppercase drop-shadow-md mb-6">
             Excavating
           </h1>
           <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-xl inline-block mx-auto">
             <span className="text-lg font-serif italic text-white mr-4 self-center">by</span>
             <Logo dark={true} />
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Services List */}
          <div className="lg:w-2/3">
             <div className="bg-zinc-100 p-8 rounded-2xl shadow-inner">
               <h2 className="text-2xl font-serif font-bold text-zinc-800 mb-6 flex items-center">
                 <Truck className="mr-3 text-yellow-600" /> Services Provided
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {EXCAVATION_DATA.services.map((service, idx) => (
                   <div key={idx} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                     <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                     <span className="text-zinc-700 font-medium">{service}</span>
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Digital Flyer Component replacing the 3 images */}
             <div className="mt-12 rounded-xl overflow-hidden shadow-2xl bg-white transform transition-all hover:scale-[1.01] duration-300 max-w-3xl mx-auto">
                {/* Flyer Header */}
                <div className="bg-[#65a30d] py-4 text-center">
                  <h3 className="text-white font-bold text-3xl font-sans tracking-wide">Excavation by White Glove</h3>
                </div>
                
                <div className="relative">
                   <img 
                     src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop" 
                     alt="Excavator Operation" 
                     className="w-full h-[600px] object-cover"
                   />
                   {/* Gradient Overlay for text readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30"></div>

                   {/* Flyer Content Overlay */}
                   <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
                      {/* Services Lists on Image */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2">
                          <ul className="space-y-3">
                            {leftServices.map((item, i) => (
                              <li key={i} className="text-white font-bold text-lg md:text-xl flex items-center drop-shadow-md">
                                 <div className="w-2 h-2 bg-white rounded-full mr-3 shrink-0"></div> {item}
                              </li>
                            ))}
                          </ul>
                           <ul className="space-y-3">
                            {rightServices.map((item, i) => (
                              <li key={i} className="text-white font-bold text-lg md:text-xl flex items-center drop-shadow-md">
                                 <div className="w-2 h-2 bg-white rounded-full mr-3 shrink-0"></div> {item}
                              </li>
                            ))}
                          </ul>
                      </div>

                      {/* Pricing Box on Image */}
                      <div className="bg-[#65a30d]/95 backdrop-blur-sm text-white p-6 rounded-lg self-start md:min-w-[320px] border border-white/20 shadow-xl mt-6">
                          <h4 className="text-xl font-bold mb-1 uppercase tracking-wide">Hire Machine & Operator</h4>
                           <div className="text-xs uppercase tracking-wider opacity-90 font-bold text-yellow-100">Starting at</div>
                           <div className="text-5xl font-bold font-serif my-2">$85<span className="text-2xl font-sans font-medium text-white/90">/hour</span></div>
                           <div className="text-sm font-bold bg-white/20 inline-block px-3 py-1 rounded-full">4 hour minimum</div>
                      </div>
                   </div>
                </div>

                {/* Flyer Footer */}
                <div className="bg-[#702f8a] py-5 text-center">
                    <a href={`tel:${CONTACT_INFO.phone1}`} className="text-white text-4xl md:text-5xl font-bold tracking-widest hover:text-white/90 transition-colors font-sans">
                      (435) 656-1499
                    </a>
                </div>
              </div>

          </div>

          {/* Pricing Card - Right Column */}
          <div className="lg:w-1/3">
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 text-white p-8 rounded-2xl shadow-xl sticky top-24">
              <h3 className="text-xl font-bold uppercase tracking-wider border-b border-yellow-500 pb-4 mb-4">
                Hire Machine & Operator
              </h3>
              <div className="text-center py-8">
                <div className="text-sm uppercase text-yellow-200 mb-1">Starting At</div>
                <div className="text-6xl font-bold font-serif">{EXCAVATION_DATA.pricing.rate}</div>
                <div className="text-sm mt-4 bg-yellow-800/50 py-2 rounded-full inline-block px-6">
                  {EXCAVATION_DATA.pricing.details}
                </div>
              </div>
              <div className="mt-6">
                 <button className="w-full bg-white text-yellow-800 font-bold py-4 rounded-lg shadow hover:bg-gray-100 transition">
                   BOOK NOW: {CONTACT_INFO.phone1}
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Excavation;
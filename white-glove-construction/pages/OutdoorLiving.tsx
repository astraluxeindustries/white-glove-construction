import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OUTDOOR_LIVING_DATA } from '../constants';
import Logo from '../components/Logo';

// Expanded Gallery Data with 26 high-quality stock photos
const LANDSCAPE_GALLERY = [
  // Original Set
  { title: "Water Features", image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop" },
  { title: "Custom Rock Walls", image: "https://images.unsplash.com/photo-1599835749419-411a09d0672e?q=80&w=1200&auto=format&fit=crop" },
  { title: "Ponds & Streams", image: "https://images.unsplash.com/photo-1571782255866-281f62157a5c?q=80&w=1200&auto=format&fit=crop" },
  { title: "Sod & Greenery", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200&auto=format&fit=crop" },
  { title: "Decorative Xeriscape", image: "https://images.unsplash.com/photo-1558442074-3c192ebfae68?q=80&w=1200&auto=format&fit=crop" },
  
  // Set 2 - Hardscaping & Patios
  { title: "Modern Pavers", image: "https://images.unsplash.com/photo-1621293954908-351529e916e9?q=80&w=1200&auto=format&fit=crop" },
  { title: "Desert Oasis", image: "https://images.unsplash.com/photo-1545648507-2a6217c9b09a?q=80&w=1200&auto=format&fit=crop" },
  { title: "Garden Path", image: "https://images.unsplash.com/photo-1592722212953-277d3229b0a6?q=80&w=1200&auto=format&fit=crop" },
  { title: "Fire Pit", image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200&auto=format&fit=crop" },
  { title: "Outdoor Kitchen", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" },
  
  // Set 3 - Structures & Water
  { title: "Retaining Walls", image: "https://images.unsplash.com/photo-1597576508381-127c5144b62e?q=80&w=1200&auto=format&fit=crop" },
  { title: "Lush Gardens", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop" },
  { title: "Pool Scapes", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop" },
  { title: "Luxury Patio", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" },
  { title: "Stone Work", image: "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?q=80&w=1200&auto=format&fit=crop" },
  
  // Set 4 - Details & Plants
  { title: "Natural Rock", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop" },
  { title: "Flowering Shrubs", image: "https://images.unsplash.com/photo-1524316314845-a48f7027d7f7?q=80&w=1200&auto=format&fit=crop" },
  { title: "Zen Corners", image: "https://images.unsplash.com/photo-1534349762230-e0cd67da9f75?q=80&w=1200&auto=format&fit=crop" },
  { title: "Walkways", image: "https://images.unsplash.com/photo-1542845836-e8d776495449?q=80&w=1200&auto=format&fit=crop" },
  { title: "Pergolas", image: "https://images.unsplash.com/photo-1598539962387-577d6110f0f4?q=80&w=1200&auto=format&fit=crop" },
  
  // Set 5 - Finishing Touches
  { title: "Fountains", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" },
  { title: "Green Spaces", image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=1200&auto=format&fit=crop" },
  { title: "Garden Steps", image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200&auto=format&fit=crop" },
  { title: "Manicured Lawn", image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1200&auto=format&fit=crop" },
  { title: "Boulder Placement", image: "https://images.unsplash.com/photo-1466027599720-6d9b54637731?q=80&w=1200&auto=format&fit=crop" },
  { title: "Detailed Edging", image: "https://images.unsplash.com/photo-1628745277864-7b90b1c97e59?q=80&w=1200&auto=format&fit=crop" }
];

const OutdoorLiving: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by 50% of container width to show next item smoothly
      const scrollAmount = container.clientWidth / 2; 
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Green Header */}
      <div className="bg-[#14532d] text-white py-16 text-center border-b-8 border-[#15803d]">
        <h1 className="text-5xl font-serif font-bold uppercase tracking-widest text-white mb-6">
          Landscaping
        </h1>
        <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-xl inline-block mx-auto">
             <span className="text-lg font-serif italic text-green-200 mr-4 self-center">by</span>
             <Logo dark={true} />
        </div>
        <p className="mt-6 text-xl font-light italic text-green-100">"{OUTDOOR_LIVING_DATA.subtitle}" 🌿</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Scrolling Gallery */}
        <div className="relative group">
           {/* Navigation Buttons */}
           <button 
             onClick={() => scroll('left')}
             className="absolute left-6 top-1/2 z-20 -translate-y-1/2 bg-white/20 hover:bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg text-white hover:text-[#064e3b] transition-all duration-300 border border-white/30 hidden md:flex items-center justify-center"
             aria-label="Scroll Left"
           >
             <ChevronLeft size={32} />
           </button>
           <button 
             onClick={() => scroll('right')}
             className="absolute right-6 top-1/2 z-20 -translate-y-1/2 bg-white/20 hover:bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg text-white hover:text-[#064e3b] transition-all duration-300 border border-white/30 hidden md:flex items-center justify-center"
             aria-label="Scroll Right"
           >
             <ChevronRight size={32} />
           </button>

           {/* Container */}
           <div 
             ref={scrollContainerRef}
             className="flex overflow-x-auto snap-x snap-mandatory rounded-[2rem] shadow-2xl h-[600px] w-full scrollbar-hide"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
           >
             {LANDSCAPE_GALLERY.map((item, index) => (
               <div key={index} className="relative h-full min-w-[100%] md:min-w-[50%] snap-center group/image overflow-hidden border-r border-white/5 bg-gray-100">
                  <img 
                    src={item.image} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" 
                    alt={item.title} 
                  />
                  {/* Clean image, no text overlay */}
               </div>
             ))}
           </div>
        </div>
        
        <div className="text-center mt-20">
           <p className="text-3xl text-[#064e3b] font-serif font-bold mb-8">Ready to transform your yard?</p>
           <button className="bg-[#15803d] text-white text-lg font-bold px-10 py-4 rounded-full hover:bg-[#166534] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
             Get a Free Estimate: 435-656-1499
           </button>
        </div>
      </div>
    </div>
  );
};

export default OutdoorLiving;
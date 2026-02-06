import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    "New Construction",
    "Additions",
    "Home Improvements",
    "Kitchen Specialists",
    "Bath Specialists",
    "Commercial",
    "Residential"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">New Construction & Remodeling</h1>
        <p className="mt-4 text-primary-200">Building your future, renovating your past.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Specializing In:</h2>
            <ul className="space-y-4">
              {categories.map((cat, idx) => (
                <li key={idx} className="flex items-center text-lg text-gray-700 border-b border-gray-200 pb-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-4"></span>
                  {cat}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-primary-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-primary-700 transition"
              >
                Request a Quote
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/400/500?random=30" className="rounded-lg shadow-lg transform translate-y-8" alt="Kitchen" />
             <img src="https://picsum.photos/400/500?random=31" className="rounded-lg shadow-lg transform -translate-y-8" alt="Living Room" />
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="group relative overflow-hidden rounded-xl shadow-xl h-96">
             <img src="https://picsum.photos/600/800?random=32" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Commercial" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
               <h3 className="text-white font-serif text-2xl font-bold">Commercial</h3>
               <p className="text-gray-300 text-sm mt-2">Business spaces built for success.</p>
             </div>
           </div>
           <div className="group relative overflow-hidden rounded-xl shadow-xl h-96">
             <img src="https://picsum.photos/600/800?random=33" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Residential" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
               <h3 className="text-white font-serif text-2xl font-bold">Residential</h3>
               <p className="text-gray-300 text-sm mt-2">Homes crafted with care.</p>
             </div>
           </div>
           <div className="group relative overflow-hidden rounded-xl shadow-xl h-96">
             <img src="https://picsum.photos/600/800?random=34" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Finishing Touch" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
               <h3 className="text-white font-serif text-2xl font-bold">The Finishing Touch</h3>
               <p className="text-gray-300 text-sm mt-2">Detail oriented completion.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
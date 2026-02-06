import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-primary-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">We are ready to come and help you build anything!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Details & Image */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                 <div className="flex items-center group">
                   <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                     <Phone size={24} />
                   </div>
                   <div className="ml-4">
                     <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Call Us</p>
                     <p className="text-lg font-bold text-gray-800">{CONTACT_INFO.phone1}</p>
                   </div>
                 </div>

                 <div className="flex items-center group">
                   <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                     <Mail size={24} />
                   </div>
                   <div className="ml-4">
                     <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Email Us</p>
                     <p className="text-lg font-bold text-gray-800">{CONTACT_INFO.email}</p>
                   </div>
                 </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg h-64 md:h-80">
              <img 
                src="https://picsum.photos/800/600?random=90" 
                alt="White Glove Truck" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-serif text-lg">Serving Southern Utah with Pride</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
             <div className="bg-primary-600 text-white text-center py-3 rounded-lg mb-8 shadow-md">
               <h3 className="font-bold uppercase tracking-wide">Customer Inquiry Form</h3>
             </div>
             
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                   <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                   <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition" />
                 </div>
               </div>
               
               <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                   <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition" />
               </div>

               <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                   <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition" />
               </div>

               <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                   <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"></textarea>
               </div>

               <button type="submit" className="w-full bg-primary-800 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-primary-900 transform hover:-translate-y-1 transition-all duration-300">
                 SEND INQUIRY
               </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
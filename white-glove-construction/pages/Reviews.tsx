import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-16 text-center">
        <h1 className="text-4xl font-serif font-bold">Customer Reviews</h1>
        <p className="text-primary-200 mt-2">See what our clients are saying about the White Glove experience.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Reviews Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary-500">
              <h2 className="text-2xl font-serif text-gray-800 mb-6 flex items-center">
                <MessageSquare className="mr-3 text-primary-500" /> Leave a Review
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Your Name (required)</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">City</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Your Review</label>
                  <textarea rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"></textarea>
                </div>
                <button className="bg-primary-900 text-white px-8 py-3 rounded-md hover:bg-primary-800 transition shadow">
                  SEND REVIEW
                </button>
              </form>
            </div>
          </div>

          {/* Testimonials Display */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">Recent Testimonials</h2>
            {TESTIMONIALS.map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex text-yellow-400 mb-2">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                  <span className="font-bold text-primary-900">{review.name}</span>
                  <span className="text-sm text-gray-400">{review.city}</span>
                </div>
              </div>
            ))}
            
            <div className="mt-8 bg-primary-50 p-6 rounded-xl flex items-center gap-4">
               <img src="https://picsum.photos/150/150?random=99" className="w-24 h-24 rounded-lg object-cover shadow" alt="Gallery preview" />
               <div>
                 <h4 className="font-serif font-bold text-lg text-primary-900">View Our Work</h4>
                 <p className="text-sm text-gray-600 mb-2">See the results for yourself.</p>
                 <a href="#/gallery" className="text-primary-600 font-bold text-sm hover:underline">Go to Gallery &rarr;</a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Reviews;
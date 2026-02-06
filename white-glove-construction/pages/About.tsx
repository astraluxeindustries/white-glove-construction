import React from 'react';
import { ABOUT_TEXT, TEAM_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-primary-50 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-4">About Us</h1>
        <p className="text-gray-600">The story behind White Glove Construction</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Top Section: Intro & History */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          
          <div className="lg:w-1/2 space-y-8">
             {/* Mission */}
            <div className="prose prose-lg text-gray-600">
               <p className="font-semibold text-primary-900 text-xl leading-relaxed">
                 {ABOUT_TEXT.intro}
               </p>
               <p className="leading-relaxed">
                 {ABOUT_TEXT.mission}
               </p>
            </div>

            {/* History */}
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary-600 shadow-sm">
              <h3 className="text-2xl font-serif text-primary-900 mb-4">{ABOUT_TEXT.historyTitle}</h3>
              <p className="text-gray-700 italic leading-relaxed">
                {ABOUT_TEXT.history}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 sticky top-24">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-900 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Construction Team" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs">
                 <p className="text-primary-900 font-serif text-lg font-bold">"Just Right"</p>
                 <p className="text-sm text-gray-600">The standard of excellence established by Max Andrew Hansen.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - Side by Side */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20">
            {TEAM_DATA.map((member, index) => (
                <div key={index} className="flex flex-col gap-6 items-start">
                    {/* Header */}
                    <h3 className="text-3xl font-serif text-gray-700 uppercase tracking-widest mb-2 w-full border-b pb-2">
                        About {member.name.split(' ')[0]}
                    </h3>

                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        {/* Image */}
                        <div className="w-full md:w-5/12 flex-shrink-0">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-auto object-cover rounded shadow-lg aspect-[3/4]"
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="w-full md:w-7/12">
                            <h4 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h4>
                            <div className="border-t-2 border-dashed border-gray-300 w-full my-4"></div>
                            <p className="text-lg font-serif text-primary-800 font-bold mb-4">{member.title}</p>
                            
                            <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-justify">
                                {member.bio.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default About;
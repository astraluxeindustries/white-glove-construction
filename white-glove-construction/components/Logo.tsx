import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", dark = false }) => {
  // Screenshot colors: "White Glove" is silver/grey. "Wg" background is purple.
  const textColor = dark ? "text-gray-200" : "text-gray-400"; 
  const taglineColor = dark ? "text-primary-300" : "text-primary-800";
  const diamondBorder = dark ? "border-gray-200" : "border-white";

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* White */}
        <span className={`font-script text-4xl md:text-5xl ${textColor} drop-shadow-sm`}>White</span>
        
        {/* Diamond Emblem */}
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transform -translate-y-1">
          <div className={`absolute inset-0 bg-primary-900 rotate-45 border-2 ${diamondBorder} shadow-md`}></div>
          <div className="absolute inset-0.5 border border-primary-500 rotate-45"></div>
          <span className="relative z-10 font-script text-white text-lg md:text-xl pt-1 pr-0.5">Wg</span>
        </div>
        
        {/* Glove */}
        <span className={`font-script text-4xl md:text-5xl ${textColor} drop-shadow-sm`}>Glove</span>
      </div>
      
      {/* Tagline */}
      <div className={`font-serif italic text-sm md:text-base tracking-widest mt-1 ${taglineColor}`}>
        "The Finishing Touch"
      </div>
    </div>
  );
};

export default Logo;
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2e1065] text-white pt-20 pb-10 border-t border-primary-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex justify-start">
              <Logo dark={true} className="items-start transform origin-left scale-90" />
            </div>
            <p className="text-primary-200/80 text-sm leading-relaxed mt-4">
              A Licensed General Contractor serving Southern Utah with excellence in design and craftsmanship.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary-500 transition-all duration-300 text-white"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary-500 transition-all duration-300 text-white"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block"></div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b border-primary-800 pb-2 inline-block">Quick Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center">
                    <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b border-primary-800 pb-2 inline-block">Contact Us</h3>
            <div className="space-y-5 text-primary-200">
              <div className="flex items-start group cursor-pointer">
                <MapPin className="mr-3 text-primary-500 mt-1 flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                <span className="text-sm group-hover:text-white transition-colors">Southern Utah<br/>St. George, UT</span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <Phone className="mr-3 text-primary-500 flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                <a href={`tel:${CONTACT_INFO.phone1}`} className="text-sm group-hover:text-white transition-colors">{CONTACT_INFO.phone1}</a>
              </div>
              <div className="flex items-center group cursor-pointer">
                <Mail className="mr-3 text-primary-500 flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm group-hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-400/60">
          <p>{CONTACT_INFO.copyright}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="hover:text-primary-200 cursor-pointer">Privacy Policy</span>
             <span className="hover:text-primary-200 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
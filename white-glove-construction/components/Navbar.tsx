import React, { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="w-full fixed top-0 z-50 transition-all duration-300">
      {/* Top Bar - Contact Info */}
      <div className="bg-primary-900 text-white py-2 text-xs md:text-sm font-light tracking-wide">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            <a href={`tel:${CONTACT_INFO.phone1}`} className="flex items-center hover:text-primary-200 transition-colors">
              <Phone size={14} className="mr-2" /> {CONTACT_INFO.phone1}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-primary-200 transition-colors">
              <Mail size={14} className="mr-2" /> {CONTACT_INFO.email}
            </a>
          </div>
          <div className="md:hidden flex items-center">
             <a href={`tel:${CONTACT_INFO.phone1}`} className="flex items-center">
               <Phone size={14} className="mr-1" /> Call Us
             </a>
          </div>
          <div className="italic font-serif">"{CONTACT_INFO.tagline}"</div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="cursor-pointer flex flex-col items-center group transform hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/')}
          >
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 border-b-2 hover:text-primary-700 ${
                    isActive ? 'text-primary-800 border-primary-600' : 'text-gray-600 border-transparent hover:border-primary-300'
                  }`
                }
              >
                {link.label.toUpperCase()}
              </RouterLink>
            ))}
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-primary-800 hover:shadow-primary-300/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className="text-base font-medium text-gray-700 hover:text-primary-700 py-2 border-b border-gray-100"
              >
                {link.label}
              </RouterLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
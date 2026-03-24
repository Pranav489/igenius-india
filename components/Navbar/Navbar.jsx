// components/Navbar/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaChevronDown, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube,
  FaStar 
} from 'react-icons/fa';
import { navItems, companyInfo } from '@/lib/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on mobile when menu closes
  useEffect(() => {
    if (!isOpen) {
      setActiveDropdown(null);
    }
  }, [isOpen]);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 font-headline ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm py-2 shadow-lg'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="relative h-12 md:h-14 lg:h-16 w-auto">
              <Image
                src="/images/igenius-logo.png"
                alt={companyInfo.fullName}
                width={200}
                height={64}
                className="object-contain w-auto h-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((link, index) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="px-3 xl:px-4 py-2 text-dark-green hover:text-primary-red font-medium transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.name}
                      <FaChevronDown 
                        className={`w-3 h-3 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border-2 border-gold-tan overflow-hidden transition-all duration-300 ${
                        activeDropdown === index 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="absolute top-0 left-4 w-4 h-4 bg-yellow rotate-45 -translate-y-2"></div>
                      
                      <div className="p-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-dark-green hover:text-primary-red hover:bg-yellow/20 rounded-xl transition-all duration-300 font-medium"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                        <div className="doodle-pattern-dots w-full h-full opacity-20"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 xl:px-4 py-2 text-dark-green hover:text-primary-red font-medium transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-primary-red transition-all duration-300"></span>
                    <span className="absolute bottom-0 left-1/2 w-0 group-hover:w-1/2 h-0.5 bg-primary-red transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="sticker-btn sticker-btn-secondary !px-6 !py-2 text-sm flex items-center gap-2"
            >
              <FaStar className="text-yellow" />
              <span>Enroll Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col justify-center items-center group"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-dark-green transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-dark-green my-1.5 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-dark-green transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white lg:hidden transition-all duration-500 flex flex-col ${
              isOpen
                ? 'opacity-100 visible translate-x-0'
                : 'opacity-0 invisible translate-x-full'
            }`}
            style={{ zIndex: 5 }}
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-1">
                {navItems.map((link, index) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <div className="mb-2">
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="w-full flex justify-between items-center py-3 px-4 text-dark-green hover:text-primary-red font-medium text-lg border-b border-gold-tan/30 transition-all duration-300"
                        >
                          {link.name}
                          <FaChevronDown 
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === index ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        {/* Mobile Dropdown */}
                        <div 
                          className={`pl-6 space-y-2 overflow-hidden transition-all duration-300 ${
                            activeDropdown === index ? 'max-h-96 mt-2' : 'max-h-0'
                          }`}
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                              className="block py-2 px-4 text-dark-green/80 hover:text-primary-red hover:bg-yellow/20 rounded-xl transition-all duration-300"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 text-dark-green hover:text-primary-red font-medium text-lg border-b border-gold-tan/30 last:border-0 transition-all duration-300 hover:translate-x-2"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="sticker-btn sticker-btn-secondary w-full text-center block flex items-center justify-center gap-2"
                >
                  <FaStar className="text-yellow" />
                  <span>Enroll Now</span>
                </Link>

                {/* Contact Info */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-dark-green/70 font-accent">
                    Have questions?
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-primary-red font-headline font-semibold hover:underline"
                  >
                    {companyInfo.phone}
                  </a>
                  <p className="text-xs text-dark-green/60 mt-1">
                    {companyInfo.address.city}, {companyInfo.address.state}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-6">
                  <a 
                    href={companyInfo.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="icon-wrapper !w-10 !h-10 group hover:border-primary-red transition-colors"
                  >
                    <FaFacebookF className="text-sky-blue group-hover:text-primary-red text-lg" />
                  </a>
                  <a 
                    href={companyInfo.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="icon-wrapper !w-10 !h-10 group hover:border-primary-red transition-colors"
                  >
                    <FaInstagram className="text-sky-blue group-hover:text-primary-red text-lg" />
                  </a>
                  <a 
                    href={companyInfo.social.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="icon-wrapper !w-10 !h-10 group hover:border-primary-red transition-colors"
                  >
                    <FaYoutube className="text-sky-blue group-hover:text-primary-red text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Doodle Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 pointer-events-none">
        <div className="doodle-pattern-dots h-full opacity-30"></div>
      </div>
    </nav>
  );
};

export default Navbar;
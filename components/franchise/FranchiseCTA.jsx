'use client';

import Link from 'next/link';
import { FaStar, FaRocket, FaCalendarAlt, FaPhone, FaWhatsapp, FaHeart } from 'react-icons/fa';

const FranchiseCTA = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #ea1e25 0%, #ea1e25 50%, #1a90be 100%)' }}
      ></div>
      
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10">
          <FaStar className="text-white text-6xl md:text-7xl rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10">
          <FaRocket className="text-white text-7xl md:text-8xl -rotate-12" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-yellow/20 px-4 py-2 rounded-full border border-yellow/30 mb-6">
            <FaHeart className="text-yellow text-sm" />
            <span className="font-accent text-white text-sm">Limited Opportunities Available</span>
          </div>

          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your
            <br />
            <span className="text-yellow">Franchise Journey?</span>
          </h2>

          <p className="font-body text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Join India's fastest-growing abacus network. Low investment, high returns, complete support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="sticker-btn !px-8 !py-4 text-base md:text-lg inline-flex items-center justify-center gap-2 group bg-yellow text-dark-green hover:bg-yellow/90 !border-dark-green"
            >
              <FaCalendarAlt className="text-dark-green group-hover:scale-110 transition-transform" />
              <span className="font-headline font-bold">Apply for Franchise</span>
            </Link>
            
            <a
              href="tel:+917770045402"
              className="sticker-btn !px-8 !py-4 text-base md:text-lg inline-flex items-center justify-center gap-2 group bg-white/20 text-white hover:bg-white/30 !border-white/50"
            >
              <FaPhone className="text-white" />
              <span className="font-headline">Call for Details</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <FaStar className="text-yellow text-xs" />
              <span>550+ Franchises</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <FaStar className="text-yellow text-xs" />
              <span>Low Investment</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <FaStar className="text-yellow text-xs" />
              <span>Complete Support</span>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://wa.me/917770045402"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-yellow transition-colors text-sm"
            >
              <FaWhatsapp size={16} />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseCTA;
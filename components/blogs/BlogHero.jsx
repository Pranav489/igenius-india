'use client';

import { motion } from 'framer-motion';
import { FaStar, FaRocket, FaNewspaper, FaSearch } from 'react-icons/fa';

const BlogHero = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-[#395245] to-[#395245]/95">
      {/* Background Doodle Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5 sm:opacity-10">
        <div className="absolute top-10 left-10 hidden sm:block">
          <FaStar className="text-yellow text-5xl sm:text-7xl rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10 hidden md:block">
          <FaRocket className="text-yellow text-6xl sm:text-8xl -rotate-12" />
        </div>
        <div className="absolute top-40 right-40 hidden lg:block">
          <FaNewspaper className="text-yellow text-6xl" />
        </div>
        
        <div className="absolute top-20 left-20 w-40 sm:w-60 h-40 sm:h-60 opacity-50 sm:opacity-100">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-60 sm:w-80 h-60 sm:h-80 opacity-50 sm:opacity-100">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-yellow/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow/30">
              <FaStar className="text-yellow text-xs sm:text-sm" />
              <span className="font-headline text-xs sm:text-sm text-white font-medium whitespace-nowrap">
                Insights & Updates
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            I-Genius <span className="text-yellow">Blog</span>
          </h1>

          {/* Description */}
          <p className="font-body text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Expert insights on abacus training, brain development, Vedic mathematics, 
            and success stories from our learning community.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mt-6">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-green/40" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green bg-white"
              id="blog-search"
              onChange={(e) => {
                const searchTerm = e.target.value.toLowerCase();
                const cards = document.querySelectorAll('.blog-card');
                cards.forEach(card => {
                  const title = card.querySelector('.blog-title')?.textContent?.toLowerCase() || '';
                  const excerpt = card.querySelector('.blog-excerpt')?.textContent?.toLowerCase() || '';
                  if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                    card.style.display = 'block';
                  } else {
                    card.style.display = 'none';
                  }
                });
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default BlogHero;
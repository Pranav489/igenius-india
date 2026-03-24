'use client';

import { companyInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaRocket, FaGraduationCap, FaAward } from 'react-icons/fa';

const AboutHero = () => {
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
          <FaGraduationCap className="text-yellow text-6xl" />
        </div>
        
        {/* Doodle patterns */}
        <div className="absolute top-20 left-20 w-40 sm:w-60 h-40 sm:h-60 opacity-50 sm:opacity-100">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-60 sm:w-80 h-60 sm:h-80 opacity-50 sm:opacity-100">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
        
        {/* Hand-drawn circles */}
        <div className="absolute top-1/3 left-1/4 w-24 sm:w-32 h-24 sm:h-32">
          <div className="handdrawn-circle w-full h-full border-yellow/30"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-32 sm:w-40 h-32 sm:h-40">
          <div className="handdrawn-circle w-full h-full border-sky-blue/30"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-yellow/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow/30">
              <FaStar className="text-yellow text-xs sm:text-sm" />
              <span className="font-headline text-xs sm:text-sm text-white font-medium whitespace-nowrap">
                Our Journey Since 2007
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-yellow">I-Genius</span>
          </h1>

          {/* Tagline */}
          <p className="font-accent text-yellow text-lg md:text-xl mb-4">
            Empowering Young Minds Through Abacus Education
          </p>

          {/* Description */}
          <p className="font-body text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            {companyInfo.fullName} has been pioneering abacus education since {companyInfo.founded}, 
            empowering over 1.5 lakh students with brain development programs across India and abroad.
          </p>

          {/* Quick Stats Row */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <FaStar className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-white text-xs sm:text-sm">15+ Years of Excellence</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <FaGraduationCap className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-white text-xs sm:text-sm">EBVTR Authorized</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <FaAward className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-white text-xs sm:text-sm">ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
    </section>
  );
};

export default AboutHero;
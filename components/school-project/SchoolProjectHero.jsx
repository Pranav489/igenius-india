'use client';

import { companyInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaRocket, FaSchool, FaCalendarAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';

const SchoolProjectHero = () => {
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
          <FaSchool className="text-yellow text-6xl" />
        </div>
        
        <div className="absolute top-20 left-20 w-40 sm:w-60 h-40 sm:h-60 opacity-50 sm:opacity-100">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-60 sm:w-80 h-60 sm:h-80 opacity-50 sm:opacity-100">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
        
        <div className="absolute top-1/3 left-1/4 w-24 sm:w-32 h-24 sm:h-32">
          <div className="handdrawn-circle w-full h-full border-yellow/30"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-32 sm:w-40 h-32 sm:h-40">
          <div className="handdrawn-circle w-full h-full border-sky-blue/30"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-yellow/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow/30">
                <FaStar className="text-yellow text-xs sm:text-sm" />
                <span className="font-headline text-xs sm:text-sm text-white font-medium whitespace-nowrap">
                  Abacus Program in Schools
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              School <span className="text-yellow">Project</span>
            </h1>

            {/* Tagline */}
            <p className="font-accent text-yellow text-lg md:text-xl mb-4">
              Bringing Abacus Education to Your School
            </p>

            {/* Description */}
            <p className="font-body text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              I-Genius Abacus Academy brings brain development programs directly to schools. 
              Our expert trainers conduct classes during school hours, making quality abacus 
              education accessible to every student.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                <FaSchool className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-white text-xs sm:text-sm">165+ Partner Schools</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                <FaStar className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-white text-xs sm:text-sm">1.5L+ Students Trained</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="sticker-btn !px-6 !py-3 text-sm sm:text-base inline-flex items-center justify-center gap-2 group bg-yellow text-dark-green hover:bg-yellow/90 !border-dark-green"
              >
                <FaCalendarAlt className="text-dark-green group-hover:scale-110 transition-transform" />
                <span className="font-headline font-bold">Enquire for Your School</span>
              </Link>
              
              <a
                href={`https://wa.me/${companyInfo?.phone?.replace(/\D/g, '') || '919876543210'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-btn !px-6 !py-3 text-sm sm:text-base inline-flex items-center justify-center gap-2 group bg-white/20 text-white hover:bg-white/30 !border-white/50"
              >
                <FaWhatsapp className="text-white" />
                <span className="font-headline">WhatsApp Us</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="polaroid-card !p-4 md:!p-6 transform rotate-2 hover:rotate-0 transition-all duration-500 bg-white/95">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="/images/school-project-hero.jpg"
                  alt="School Project"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <div className="bg-yellow/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <span className="font-headline text-dark-green text-xs font-bold">Since 2015</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="bg-primary-red/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <span className="font-headline text-white text-xs font-bold">165+ Schools</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl p-3 shadow-xl border-2 border-yellow max-w-[200px]">
              <p className="font-accent text-dark-green text-xs">"Transforming school education with abacus excellence"</p>
            </div>
          </motion.div>
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

export default SchoolProjectHero;
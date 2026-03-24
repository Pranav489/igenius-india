// components/CTASection.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaStar, 
  FaRocket, 
  FaGraduationCap, 
  FaUsers, 
  FaTrophy,
  FaHeart,
  FaSmile,
  FaCalendarAlt,
  FaPhone,
  FaWhatsapp,
  FaChevronRight,
  FaAward,
  FaCertificate
} from 'react-icons/fa';
import { companyInfo } from '@/lib/data';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* FIXED: Use CSS custom properties for gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ea1e25] via-[#ea1e25]/95 to-[#1a90be]"></div>
      
      {/* Background Doodle Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Floating icons */}
        <div className="absolute top-10 left-10">
          <FaStar className="text-white text-7xl rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10">
          <FaRocket className="text-white text-8xl -rotate-12" />
        </div>
        <div className="absolute top-20 right-40">
          <FaGraduationCap className="text-white text-6xl" />
        </div>
        <div className="absolute bottom-20 left-40">
          <FaTrophy className="text-white text-7xl" />
        </div>
        
        {/* Doodle patterns */}
        <div className="absolute top-40 left-20 w-60 h-60">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-40 right-20 w-80 h-80">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
        
        {/* Hand-drawn circles */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32">
          <div className="handdrawn-circle w-full h-full border-white/30"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40">
          <div className="handdrawn-circle w-full h-full border-white/30"></div>
        </div>
      </div>

      {/* Consistent container spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content - Directly on gradient */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow/30 px-4 py-2 rounded-full border border-yellow/50 mb-6">
              <FaStar className="text-yellow text-sm" />
              <span className="font-accent text-white text-sm">Limited Time Offer</span>
            </div>

            {/* Heading */}
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Unlock Your
              <br />
              <span className="text-yellow">Child's Genius?</span>
            </h2>

            {/* Description */}
            <p className="font-body text-white/90 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6">
              Join 1.5 lakh+ happy students and give your child the gift of mental math mastery. Book a free demo class today!
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUsers className="text-yellow text-sm" />
                </div>
                <div>
                  <div className="font-headline font-bold text-white text-sm">1.5L+</div>
                  <div className="text-white/60 text-xs">Happy Students</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaTrophy className="text-yellow text-sm" />
                </div>
                <div>
                  <div className="font-headline font-bold text-white text-sm">550+</div>
                  <div className="text-white/60 text-xs">Franchises</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaSmile className="text-yellow text-sm" />
                </div>
                <div>
                  <div className="font-headline font-bold text-white text-sm">98%</div>
                  <div className="text-white/60 text-xs">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="sticker-btn !px-8 !py-4 text-base md:text-lg inline-flex items-center justify-center gap-2 group bg-yellow text-dark-green hover:bg-yellow/90 !border-dark-green"
              >
                <FaCalendarAlt className="text-dark-green group-hover:scale-110 transition-transform" />
                <span className="font-headline font-bold">Book Free Demo</span>
                <FaChevronRight className="text-dark-green group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/courses"
                className="sticker-btn !px-8 !py-4 text-base md:text-lg inline-flex items-center justify-center gap-2 group bg-white/20 text-white hover:bg-white/30 !border-white/50"
              >
                <FaGraduationCap className="text-white" />
                <span className="font-headline">Explore Courses</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-white/80 hover:text-yellow transition-colors"
              >
                <FaPhone className="text-yellow text-xs" />
                <span className="font-body">{companyInfo.phone}</span>
              </a>
              <a
                href={`https://wa.me/${companyInfo.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-yellow transition-colors"
              >
                <FaWhatsapp className="text-yellow text-xs" />
                <span className="font-body">Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Card */}
            <div className="relative">
              <div className="polaroid-card !p-4 md:!p-6 transform rotate-2 hover:rotate-0 transition-all duration-500 bg-white/95">
                {/* Image Container */}
                <div className="relative w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/cta-kid.jpg" // Add your image path
                    alt="Happy child learning abacus"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                      <FaStar className="text-dark-green text-xs" />
                      <span className="font-headline text-dark-green text-xs font-bold">Age 4-14</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-primary-red/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                      <FaRocket className="text-white text-xs" />
                      <span className="font-headline text-white text-xs font-bold">Join Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl p-3 shadow-xl border-2 border-yellow transform -rotate-3 hover:rotate-0 transition-all duration-300 max-w-[180px]"
            >
              <div className="flex items-center gap-2">
                <FaAward className="text-primary-red text-xl" />
                <div>
                  <div className="font-headline text-xs text-dark-green/50">ISO Certified</div>
                  <div className="font-headline font-bold text-dark-green text-sm">{companyInfo.iso}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-xl p-3 shadow-xl border-2 border-sky-blue transform rotate-3 hover:rotate-0 transition-all duration-300 max-w-[160px]"
            >
              <div className="flex items-center gap-2">
                <FaCertificate className="text-sky-blue text-xl" />
                <div>
                  <div className="font-headline text-xs text-dark-green/50">Govt. Authorised</div>
                  <div className="font-headline font-bold text-dark-green text-sm">EBVTR Regd.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8"
        >
          <div className="stat-badge bg-white/20 border-white/30">
            <FaStar className="text-yellow text-sm" />
            <span className="font-headline text-xs font-medium text-white">
              Free demo
            </span>
          </div>
          <div className="stat-badge bg-white/20 border-white/30">
            <FaTrophy className="text-yellow text-sm" />
            <span className="font-headline text-xs font-medium text-white">
              No commitment
            </span>
          </div>
          <div className="stat-badge bg-white/20 border-white/30">
            <FaHeart className="text-yellow text-sm" />
            <span className="font-headline text-xs font-medium text-white">
              Certified trainers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
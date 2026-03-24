// components/ClassModeSection.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaStar, 
  FaLaptop, 
  FaBuilding,
  FaClock,
  FaUsers,
  FaChild,
  FaChalkboardTeacher,
  FaRocket,
  FaChevronRight,
  FaWifi,
  FaMapMarkerAlt,
  FaGlobe,
  FaHeart,
  FaTrophy,
  FaCalendarAlt,
  FaUserGraduate
} from 'react-icons/fa';
import { classModes, companyInfo } from '@/lib/data';

const ClassModeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMode, setActiveMode] = useState('online');
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

  // Get icon based on mode
  const getModeIcon = (mode, className = "w-8 h-8 md:w-10 md:h-10") => {
    switch(mode) {
      case 'online':
        return <FaLaptop className={`${className} text-sky-blue`} />;
      case 'offline':
        return <FaBuilding className={`${className} text-primary-red`} />;
      default:
        return <FaStar className={`${className} text-yellow`} />;
    }
  };

  // Get color scheme based on mode
  const getModeColors = (mode) => {
    switch(mode) {
      case 'online':
        return {
          primary: 'text-sky-blue',
          bg: 'bg-sky-blue/10',
          border: 'border-sky-blue/20',
          hover: 'hover:border-sky-blue',
          gradient: 'from-sky-blue/5 to-transparent',
          lightBg: 'bg-sky-blue/5',
          buttonBg: 'bg-sky-blue',
          badge: 'bg-sky-blue/20 text-sky-blue'
        };
      case 'offline':
        return {
          primary: 'text-primary-red',
          bg: 'bg-primary-red/10',
          border: 'border-primary-red/20',
          hover: 'hover:border-primary-red',
          gradient: 'from-primary-red/5 to-transparent',
          lightBg: 'bg-primary-red/5',
          buttonBg: 'bg-primary-red',
          badge: 'bg-primary-red/20 text-primary-red'
        };
      default:
        return {
          primary: 'text-yellow',
          bg: 'bg-yellow/10',
          border: 'border-yellow/20',
          hover: 'hover:border-yellow',
          gradient: 'from-yellow/5 to-transparent',
          lightBg: 'bg-yellow/5',
          buttonBg: 'bg-yellow',
          badge: 'bg-yellow/20 text-yellow'
        };
    }
  };

  // Get current mode data
  const currentMode = classModes?.find(m => m.id === activeMode) || classModes?.[0];

  return (
    <section ref={sectionRef} className="relative pt-12 md:pt-16 lg:pt-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Doodle Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Floating icons */}
        <div className="absolute top-20 left-10">
          <FaLaptop className="text-sky-blue text-7xl rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10">
          <FaBuilding className="text-primary-red text-8xl -rotate-6" />
        </div>
        
        {/* Doodle patterns */}
        <div className="absolute top-60 left-20 w-40 h-40">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-40 right-20 w-60 h-60">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
        
        {/* Hand-drawn circles */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 opacity-20">
          <div className="handdrawn-circle w-full h-full border-sky-blue"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 opacity-20">
          <div className="handdrawn-circle w-full h-full border-primary-red"></div>
        </div>
      </div>

      {/* Consistent container spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block relative">
            {/* Decorative stars */}
            <div className="absolute -left-8 -top-4 md:-left-12 md:-top-6">
              <FaStar className="text-yellow text-xl md:text-2xl lg:text-3xl rotate-12" />
            </div>
            <div className="absolute -right-8 -bottom-4 md:-right-12 md:-bottom-6">
              <FaStar className="text-yellow text-xl md:text-2xl lg:text-3xl -rotate-12" />
            </div>
            
            {/* Section Title */}
            <h2 className="section-title font-headline text-3xl md:text-4xl lg:text-5xl text-dark-green">
              Choose Your <span className="text-primary-red">Learning Mode</span>
            </h2>
          </div>
          
          {/* Hand-drawn underline */}
          <div className="handdrawn-underline mx-auto mt-2 md:mt-4 max-w-[250px] md:max-w-[350px]"></div>
          
          {/* Subtitle */}
          <p className="font-body text-dark-green/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-4 md:mt-6">
            Flexible learning options designed to fit your child's needs — at home or at our centers!
          </p>
        </div>

        {/* Mode Selection Tabs - Responsive - Only Online & Offline */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {classModes?.filter(mode => mode.id !== 'school').map((mode) => {
            const colors = getModeColors(mode.id);
            const isActive = activeMode === mode.id;
            
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`
                  group relative px-6 md:px-10 py-3 md:py-4 rounded-2xl
                  font-headline text-sm md:text-base lg:text-lg font-semibold
                  transition-all duration-300 transform
                  flex items-center gap-2 md:gap-3
                  border-2 ${isActive ? 'scale-105' : 'hover:scale-105'}
                  ${isActive 
                    ? `${colors.bg} ${colors.border} ${colors.primary} shadow-lg` 
                    : 'bg-white border-gold-tan/30 text-dark-green hover:border-primary-red/30'
                  }
                `}
              >
                {getModeIcon(mode.id, "w-5 h-5 md:w-6 md:h-6")}
                <span>{mode.name}</span>
                
                {/* Active indicator star */}
                {isActive && (
                  <div className="absolute -top-2 -right-2">
                    <FaStar className="text-yellow text-sm animate-pulse" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Grid */}
        {currentMode && currentMode.id !== 'school' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Mode Details */}
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Mode Header */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 md:w-20 md:h-20 ${getModeColors(activeMode).bg} rounded-2xl flex items-center justify-center transform -rotate-3`}>
                  {getModeIcon(activeMode, "w-8 h-8 md:w-10 md:h-10")}
                </div>
                <div>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-dark-green">
                    {currentMode.name}
                  </h3>
                  <p className={`font-accent text-sm md:text-base ${getModeColors(activeMode).primary}`}>
                    {currentMode.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-dark-green/70 text-base md:text-lg leading-relaxed">
                {currentMode.description}
              </p>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {currentMode.features?.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <div className={`mt-1 w-6 h-6 ${getModeColors(activeMode).bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <FaStar className={`${getModeColors(activeMode).primary} text-xs`} />
                    </div>
                    <span className="font-body text-sm md:text-base text-dark-green/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Benefits List */}
              <div className="pt-6">
                <h4 className="font-headline text-lg md:text-xl font-bold text-dark-green mb-4 flex items-center gap-2">
                  <FaHeart className="text-primary-red" />
                  Why Parents Love This Mode
                </h4>
                <ul className="space-y-3">
                  {currentMode.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 ${getModeColors(activeMode).bg} rounded-full flex items-center justify-center mt-0.5`}>
                        <div className={`w-2 h-2 rounded-full ${getModeColors(activeMode).primary.replace('text', 'bg')}`}></div>
                      </div>
                      <span className="font-body text-sm md:text-base text-dark-green/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  href={currentMode.ctaLink || "/contact"}
                  className={`
                    inline-flex items-center gap-3 
                    sticker-btn ${getModeColors(activeMode).buttonBg} text-white
                    !px-6 !py-3 text-sm md:text-base
                    group
                  `}
                >
                  <span>{currentMode.ctaText || "Enquire Now"}</span>
                  <FaChevronRight className="text-white text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              key={`visual-${activeMode}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Main Visual Card */}
              <div className="relative">
                <div className={`
                  polaroid-card !p-4 md:!p-6 
                  transform rotate-2 hover:rotate-0 
                  transition-all duration-500
                  border-2 ${getModeColors(activeMode).border}
                `}>
                  {/* Image Container */}
                  <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-xl overflow-hidden">
                    <Image
                      src={currentMode.image || `/images/modes/${activeMode}.jpg`}
                      alt={currentMode.name}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`}></div>
                    
                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`${getModeColors(activeMode).badge} px-3 py-1.5 rounded-full text-xs font-headline font-bold backdrop-blur-sm`}>
                        {currentMode.stats || "Enroll Now"}
                      </div>
                    </div>
                    
                    {/* Location/Center Info */}
                    {activeMode === 'offline' && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 inline-block">
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-primary-red text-sm" />
                            <p className="font-accent text-dark-green text-sm">
                              50+ Centers Across India
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeMode === 'online' && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 inline-block">
                          <div className="flex items-center gap-2">
                            <FaWifi className="text-sky-blue text-sm" />
                            <p className="font-accent text-dark-green text-sm">
                              Live Interactive Classes
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -top-3 -right-3 w-12 h-12 ${getModeColors(activeMode).bg} rounded-full flex items-center justify-center transform rotate-12 shadow-lg`}>
                    <FaStar className={`${getModeColors(activeMode).primary} text-lg`} />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-yellow rounded-full flex items-center justify-center shadow-lg">
                    <FaUsers className="text-dark-green text-sm" />
                  </div>
                </div>
              </div>

              {/* Floating Icon Elements */}
              <div className="absolute top-1/2 -right-8 w-16 h-16 opacity-30">
                <div className="handdrawn-circle w-full h-full border-sky-blue"></div>
              </div>
              <div className="absolute bottom-1/4 -left-8 w-20 h-20 opacity-30">
                <div className="handdrawn-circle w-full h-full border-primary-red"></div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 md:mt-16">
          <div className="stat-badge bg-sky-blue/5 border-sky-blue/20">
            <FaLaptop className="text-sky-blue text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              Online Classes Available
            </span>
          </div>
          <div className="stat-badge bg-primary-red/5 border-primary-red/20">
            <FaBuilding className="text-primary-red text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              50+ Centers
            </span>
          </div>
          <div className="stat-badge bg-yellow/5 border-yellow/20">
            <FaGlobe className="text-yellow text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              5 Countries
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="handdrawn-separator mt-8 md:mt-12"></div>
    </section>
  );
};

export default ClassModeSection;
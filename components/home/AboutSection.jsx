// components/AboutSection.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaStar, 
  FaHeart, 
  FaLightbulb, 
  FaGraduationCap,
  FaTrophy,
  FaCertificate,
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronRight,
  FaUsers,
  FaGlobeAsia,
  FaSchool,
  FaAward
} from 'react-icons/fa';
import { companyInfo, about, stats } from '@/lib/data';

const AboutSection = () => {
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

  // Get icon component
  const getIcon = (iconName, className = "w-5 h-5 md:w-6 md:h-6") => {
    switch(iconName) {
      case 'heart':
        return <FaHeart className={`${className} text-primary-red`} />;
      case 'bulb':
        return <FaLightbulb className={`${className} text-yellow`} />;
      case 'grad':
        return <FaGraduationCap className={`${className} text-sky-blue`} />;
      case 'trophy':
        return <FaTrophy className={`${className} text-orange`} />;
      case 'certificate':
        return <FaCertificate className={`${className} text-green`} />;
      default:
        return <FaStar className={`${className} text-yellow`} />;
    }
  };

  return (
    <section ref={sectionRef} className="relative pt-12 md:pt-16 lg:pt-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Doodle Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Floating numbers */}
        {/* <div className="absolute top-20 left-10 text-6xl font-headline text-primary-red/20">1,50,000+</div>
        <div className="absolute bottom-20 right-4 text-6xl font-headline text-sky-blue/20">550+</div>
         */}
        {/* Doodle patterns */}
        <div className="absolute top-40 right-20 w-40 h-40">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 w-60 h-60">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
      </div>

      {/* FIXED: Added max-w-7xl and proper padding to match StatsSection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block relative">
            {/* Decorative elements */}
            <div className="absolute -left-10 -top-6">
              <FaStar className="text-yellow text-2xl md:text-3xl rotate-12" />
            </div>
            <div className="absolute -right-10 -bottom-6">
              <FaStar className="text-yellow text-2xl md:text-3xl -rotate-12" />
            </div>
            
            {/* Section Title */}
            <h2 className="section-title font-headline text-3xl md:text-4xl lg:text-5xl text-dark-green">
              About <span className="text-primary-red">I-Genius</span>
            </h2>
          </div>
          
          {/* Hand-drawn underline */}
          <div className="handdrawn-underline mx-auto mt-2 md:mt-4 max-w-[250px] md:max-w-[350px]"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className={`
            space-y-6 md:space-y-8
            transition-all duration-1000 transform
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
            {/* Established Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow/20 px-4 py-2 rounded-full border border-yellow/30">
              <FaStar className="text-yellow text-sm" />
              <span className="font-headline text-sm md:text-base text-dark-green font-medium">
                Established in {companyInfo.founded}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-headline text-2xl md:text-3xl lg:text-4xl text-dark-green leading-tight">
              {about.title || "India's Most Trusted"}
              <br />
              <span className="text-primary-red">{about.highlight || "Abacus Academy"}</span>
            </h3>

            {/* Description */}
            <div className="space-y-4 font-body text-dark-green/80 text-sm md:text-base lg:text-lg">
              {about.description ? (
                about.description.map((para, index) => (
                  <p key={index} className="leading-relaxed">
                    {para}
                  </p>
                ))
              ) : (
                <>
                  <p className="leading-relaxed">
                    {companyInfo.fullName} has been pioneering abacus education since {companyInfo.founded}, 
                    empowering over 1.5 lakh students with brain development programs across India and abroad.
                  </p>
                  <p className="leading-relaxed">
                    With a strong commitment to excellence and a passion for education, we've built a network 
                    of 550+ franchises and 165+ school project associations, making us one of the most trusted 
                    names in child brain development.
                  </p>
                </>
              )}
            </div>

            {/* Key Features / Milestones */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
              {about.features?.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mt-1 w-6 h-6 md:w-8 md:h-8 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow/40 transition-colors">
                    {getIcon(feature.icon, "w-3 h-3 md:w-4 md:h-4")}
                  </div>
                  <div>
                    <div className="font-headline font-bold text-dark-green ">
                      {feature.value}
                    </div>
                    <div className="font-body text-xs md:text-sm text-dark-green/60">
                      {feature.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
              <Link
                href="/about-us"
                className="sticker-btn sticker-btn-primary !px-5 md:!px-6 !py-2 md:!py-3 text-sm md:text-base inline-flex items-center gap-2 group"
              >
                <span>Know More About Us</span>
                <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="sticker-btn !px-5 md:!px-6 !py-2 md:!py-3 text-sm md:text-base inline-flex items-center gap-2 group !bg-white/95 backdrop-blur-sm !border-dark-green"
              >
                <FaHeart className="text-primary-red text-sm" />
                <span className="text-dark-green">Join Our Family</span>
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="stat-badge bg-primary-red/5 border-primary-red/20">
                <FaCertificate className="text-primary-red text-sm" />
                <span className="font-headline text-xs font-medium text-dark-green">
                  {companyInfo.iso}
                </span>
              </div>
              <div className="stat-badge bg-sky-blue/5 border-sky-blue/20">
                <FaAward className="text-sky-blue text-sm" />
                <span className="font-headline text-xs font-medium text-dark-green">
                  Govt. Authorised
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className={`
            relative
            transition-all duration-1000 delay-300 transform
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
            {/* Main Polaroid Image */}
            <div className="relative floating-animation">
              <div className="polaroid-card !p-4 md:!p-6 transform rotate-2 hover:rotate-0 transition-all duration-500">
                {/* Image Container */}
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={about.image || "/images/about-main.jpg"}
                    alt="I-Genius Abacus Academy"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 inline-block">
                      <p className="font-accent text-dark-green text-sm">
                        {about.imageCaption || "Making math magical since 2007"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Polaroid Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                  <FaStar className="text-dark-green text-lg" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-sky-blue rounded-full flex items-center justify-center shadow-lg">
                  <FaUsers className="text-white text-sm" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-8 w-16 h-16 opacity-20">
              <div className="handdrawn-circle w-full h-full border-sky-blue"></div>
            </div>
            <div className="absolute bottom-1/4 -left-8 w-20 h-20 opacity-20">
              <div className="handdrawn-circle w-full h-full border-primary-red"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Strip */}
        <div className="mt-16 md:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {about.bottomStats?.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-white rounded-2xl border-2 border-gold-tan/30 hover:border-yellow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="font-headline font-bold text-xl md:text-2xl text-primary-red">
                {stat.value}
              </div>
              <div className="font-body text-xs md:text-sm text-dark-green/70">
                {stat.label}
              </div>
            </div>
          )) || (
            // Default stats if not provided
            <>
              <div className="text-center p-4 bg-white rounded-2xl border-2 border-gold-tan/30">
                <div className="font-headline font-bold text-xl md:text-2xl text-primary-red">15+</div>
                <div className="font-body text-xs md:text-sm text-dark-green/70">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl border-2 border-gold-tan/30">
                <div className="font-headline font-bold text-xl md:text-2xl text-primary-red">50+</div>
                <div className="font-body text-xs md:text-sm text-dark-green/70">Qualified Trainers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl border-2 border-gold-tan/30">
                <div className="font-headline font-bold text-xl md:text-2xl text-primary-red">5</div>
                <div className="font-body text-xs md:text-sm text-dark-green/70">Countries</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl border-2 border-gold-tan/30">
                <div className="font-headline font-bold text-xl md:text-2xl text-primary-red">165+</div>
                <div className="font-body text-xs md:text-sm text-dark-green/70">Partner Schools</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="handdrawn-separator mt-8 md:mt-12"></div>
    </section>
  );
};

export default AboutSection;
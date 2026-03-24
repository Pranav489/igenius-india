// components/StatsSection.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaStar, 
  FaTrophy, 
  FaSchool, 
  FaUsers, 
  FaChalkboardTeacher,
  FaGlobeAsia,
  FaAward,
  FaCertificate
} from 'react-icons/fa';
import { stats, companyInfo } from '@/lib/data';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Animation on scroll
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

  // Map icons to stats
  const getIcon = (iconName, className = "w-6 h-6 md:w-8 md:h-8") => {
    switch(iconName) {
      case 'students':
        return <FaUsers className={`${className} text-primary-red`} />;
      case 'franchises':
        return <FaGlobeAsia className={`${className} text-sky-blue`} />;
      case 'schools':
        return <FaSchool className={`${className} text-green`} />;
      case 'trainers':
        return <FaChalkboardTeacher className={`${className} text-pink`} />;
      case 'countries':
        return <FaTrophy className={`${className} text-yellow`} />;
      case 'projects':
        return <FaCertificate className={`${className} text-orange`} />;
      default:
        return <FaStar className={`${className} text-yellow`} />;
    }
  };

  // Format number with commas (e.g., 150000 → 1,50,000)
  const formatNumber = (num) => {
    if (typeof num !== 'number') return num;
    return num.toLocaleString('en-IN');
  };

  return (
    <section ref={sectionRef} className="relative pt-12 md:pt-16 lg:pt-20 bg-white overflow-hidden">
      {/* Background Doodle Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Top left pattern - numbers doodle */}
        <div className="absolute top-10 left-10 w-40 h-40">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        {/* Bottom right pattern - abacus beads */}
        <div className="absolute bottom-10 right-10 w-60 h-60">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
        {/* Scattered stars throughout */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20">
          <div className="doodle-pattern-dots w-full h-full"></div>
        </div>
      </div>

      {/* FIXED: Changed from container to max-w-7xl with proper padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Hand-drawn Style */}
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
              Our <span className="text-primary-red">Achievements</span>
            </h2>
          </div>
          
          {/* Hand-drawn underline */}
          <div className="handdrawn-underline mx-auto mt-2 md:mt-4 max-w-[200px] md:max-w-[300px]"></div>
          
          {/* Subtitle */}
          <p className="font-body text-dark-green/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-4 md:mt-6">
            {stats.tagline || "Making math magical since 2007 — trusted by parents & students across India"}
          </p>
        </div>

        {/* Stats Grid - Responsive columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {stats.items.map((stat, index) => (
            <div
              key={stat.id || index}
              className={`
                group relative bg-white rounded-3xl p-4 md:p-6 
                border-2 border-gold-tan/30 hover:border-yellow 
                transition-all duration-500 transform hover:-translate-y-2
                shadow-lg hover:shadow-xl
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Decorative corner doodles */}
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6">
                <div className="handdrawn-circle w-full h-full border-sky-blue/50"></div>
              </div>

              {/* Icon with circle background */}
              <div className="flex justify-center mb-3 md:mb-4">
                <div className={`
                  relative w-14 h-14 md:w-20 md:h-20 
                  bg-gradient-to-br rounded-2xl transform rotate-3 
                  group-hover:rotate-0 transition-all duration-300
                  flex items-center justify-center
                  ${stat.bgColor || 'bg-yellow/20'}
                `}>
                  {/* Inner decorative circle */}
                  <div className="absolute inset-1 border-2 border-dashed border-white/50 rounded-xl"></div>
                  
                  {/* Icon */}
                  {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
                </div>
              </div>

              {/* Number with count animation */}
              <div className="text-center">
                <div className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-dark-green mb-1">
                  {isVisible ? (
                    <CountUpAnimation 
                      end={stat.value} 
                      suffix={stat.suffix || '+'} 
                      format={stat.format}
                    />
                  ) : (
                    <span>0{stat.suffix || '+'}</span>
                  )}
                </div>
                <div className="font-body text-xs md:text-sm text-dark-green/70 font-medium">
                  {stat.label}
                </div>
                
                {/* Optional sublabel */}
                {stat.sublabel && (
                  <div className="font-accent text-[10px] md:text-xs text-pink mt-1">
                    {stat.sublabel}
                  </div>
                )}
              </div>

              {/* Hover effect - floating star */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaStar className="text-yellow text-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats / Trust Badges Row */}
        <div className="mt-12 md:mt-16 lg:mt-20 flex flex-wrap justify-center gap-3 md:gap-4">
          {/* ISO Badge */}
          <div className="stat-badge bg-yellow/10 border-yellow/30">
            <FaCertificate className="text-yellow text-sm md:text-base" />
            <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
              {companyInfo.iso}
            </span>
          </div>

          {/* World Record Badge */}
          <div className="stat-badge bg-pink/10 border-pink/30">
            <FaAward className="text-pink text-sm md:text-base" />
            <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
              World Record Holder
            </span>
          </div>

          {/* Govt Authorised Badge */}
          <div className="stat-badge bg-sky-blue/10 border-sky-blue/30">
            <FaStar className="text-sky-blue text-sm md:text-base" />
            <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
              Govt. Authorised
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 font-headline text-dark-green hover:text-primary-red transition-colors duration-300 group"
          >
            <span className="text-sm md:text-base">Learn more about our journey</span>
            <span className="w-6 h-6 rounded-full bg-yellow/20 flex items-center justify-center group-hover:bg-primary-red group-hover:text-white transition-all">
              <FaStar className="text-[10px]" />
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Doodle Separator */}
      <div className="handdrawn-separator mt-8 md:mt-12"></div>
    </section>
  );
};

// CountUp Animation Component
const CountUpAnimation = ({ end, suffix = '+', duration = 2000, format }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  // Format number with commas if needed
  const formattedCount = format === 'comma' 
    ? count.toLocaleString('en-IN') 
    : count;
  
  return <span>{formattedCount}{suffix}</span>;
};

export default StatsSection;
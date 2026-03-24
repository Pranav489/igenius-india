// components/CoursesSection.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaStar, 
  FaCalculator, 
  FaCube, 
  FaBrain, 
  FaClock,
  FaUsers,
  FaGraduationCap,
  FaRocket,
  FaChevronRight,
  FaAward,
  FaCertificate
} from 'react-icons/fa';
import { courses, companyInfo } from '@/lib/data';

const CoursesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
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

  // Get icon based on course type
  const getCourseIcon = (courseName, className = "w-8 h-8 md:w-10 md:h-10") => {
    const name = courseName.toLowerCase();
    if (name.includes('abacus')) {
      return <FaCalculator className={`${className} text-primary-red`} />;
    } else if (name.includes('vedic')) {
      return <FaBrain className={`${className} text-sky-blue`} />;
    } else if (name.includes('rubik') || name.includes('cube')) {
      return <FaCube className={`${className} text-orange`} />;
    } else {
      return <FaStar className={`${className} text-yellow`} />;
    }
  };

  // Get color scheme based on course
  const getCourseColors = (courseName) => {
    const name = courseName.toLowerCase();
    if (name.includes('abacus')) {
      return {
        primary: 'text-primary-red',
        bg: 'bg-primary-red/10',
        border: 'border-primary-red/20',
        hover: 'hover:border-primary-red',
        gradient: 'from-primary-red/5 to-transparent',
        buttonBg: 'bg-primary-red',
        buttonText: 'text-white'
      };
    } else if (name.includes('vedic')) {
      return {
        primary: 'text-sky-blue',
        bg: 'bg-sky-blue/10',
        border: 'border-sky-blue/20',
        hover: 'hover:border-sky-blue',
        gradient: 'from-sky-blue/5 to-transparent',
        buttonBg: 'bg-sky-blue',
        buttonText: 'text-white'
      };
    } else if (name.includes('rubik') || name.includes('cube')) {
      return {
        primary: 'text-orange',
        bg: 'bg-orange/10',
        border: 'border-orange/20',
        hover: 'hover:border-orange',
        gradient: 'from-orange/5 to-transparent',
        buttonBg: 'bg-orange',
        buttonText: 'text-white'
      };
    } else {
      return {
        primary: 'text-green',
        bg: 'bg-green/10',
        border: 'border-green/20',
        hover: 'hover:border-green',
        gradient: 'from-green/5 to-transparent',
        buttonBg: 'bg-green',
        buttonText: 'text-white'
      };
    }
  };

  // Filter courses based on active tab
  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section ref={sectionRef} className="relative pt-12 md:pt-16 lg:pt-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Doodle Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Floating numbers and symbols */}
        <div className="absolute top-20 left-10 text-7xl font-headline text-primary-red/10">123</div>
        <div className="absolute md:bottom-20 md:right-10 bottom-10 right-2  text-8xl font-headline text-sky-blue/10">+-×÷</div>
        
        {/* Doodle patterns */}
        <div className="absolute top-40 right-20 w-60 h-60">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 w-80 h-80">
          <div className="doodle-pattern-circles w-full h-full"></div>
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
              Our <span className="text-primary-red">Courses</span>
            </h2>
          </div>
          
          {/* Hand-drawn underline */}
          <div className="handdrawn-underline mx-auto mt-2 md:mt-4 max-w-[200px] md:max-w-[300px]"></div>
          
          {/* Subtitle */}
          <p className="font-body text-dark-green/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-4 md:mt-6">
            Unlock your child's potential with our scientifically designed brain development programs for ages 4-15 years
          </p>
        </div>

        {/* Category Tabs - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-headline text-sm md:text-base transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-primary-red text-white shadow-lg transform scale-105'
                : 'bg-white text-dark-green border-2 border-gold-tan/30 hover:border-primary-red'
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setActiveTab('abacus')}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-headline text-sm md:text-base transition-all duration-300 ${
              activeTab === 'abacus'
                ? 'bg-primary-red text-white shadow-lg transform scale-105'
                : 'bg-white text-dark-green border-2 border-gold-tan/30 hover:border-primary-red'
            }`}
          >
            Abacus
          </button>
          <button
            onClick={() => setActiveTab('vedic')}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-headline text-sm md:text-base transition-all duration-300 ${
              activeTab === 'vedic'
                ? 'bg-sky-blue text-white shadow-lg transform scale-105'
                : 'bg-white text-dark-green border-2 border-gold-tan/30 hover:border-sky-blue'
            }`}
          >
            Vedic Maths
          </button>
          <button
            onClick={() => setActiveTab('rubik')}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-headline text-sm md:text-base transition-all duration-300 ${
              activeTab === 'rubik'
                ? 'bg-orange text-white shadow-lg transform scale-105'
                : 'bg-white text-dark-green border-2 border-gold-tan/30 hover:border-orange'
            }`}
          >
            Rubik's Cube
          </button>
        </div>

        {/* Courses Grid - Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCourses.map((course, index) => {
            const colors = getCourseColors(course.name);
            
            return (
              <div
                key={course.id || index}
                className={`
                  group relative bg-white rounded-3xl overflow-hidden
                  border-2 border-gold-tan/30 ${colors.hover}
                  transition-all duration-500 transform hover:-translate-y-2
                  shadow-lg hover:shadow-xl
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50`}></div>

                {/* Decorative corner doodles */}
                <div className="absolute -top-2 -left-2 w-8 h-8">
                  <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8">
                  <div className="handdrawn-circle w-full h-full border-sky-blue/50"></div>
                </div>

                {/* Course Image */}
                {course.image && (
                  <div className="relative h-48 md:h-56 w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Age Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="age-tag bg-white/90 backdrop-blur-sm text-dark-green text-xs md:text-sm px-3 py-1 rounded-full">
                        Ages {course.ageRange || '4-15'}
                      </span>
                    </div>

                    {/* Level Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="course-level-badge bg-yellow text-dark-green text-xs font-bold px-3 py-1 rounded-full">
                        {course.level || 'All Levels'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Course Content */}
                <div className="p-6 md:p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 ${colors.bg} rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-all duration-300`}>
                      {getCourseIcon(course.name, "w-6 h-6 md:w-7 md:h-7")}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-headline font-bold text-xl md:text-2xl text-dark-green ${colors.primary}`}>
                        {course.name}
                      </h3>
                      <p className="font-body text-xs md:text-sm text-dark-green/60 mt-1">
                        {course.tagline || 'Brain development program'}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-dark-green/70 text-sm md:text-base mb-4 line-clamp-2">
                    {course.shortDescription || course.description}
                  </p>

                  {/* Course Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {course.features?.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow"></div>
                        <span className="font-body text-xs text-dark-green/60">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Course Details Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-6 pt-4 border-t border-gold-tan/20">
                    {course.duration && (
                      <div className="flex items-center gap-1">
                        <FaClock className="text-yellow text-xs" />
                        <span className="font-body text-xs text-dark-green/70">{course.duration}</span>
                      </div>
                    )}
                    {course.classesPerWeek && (
                      <div className="flex items-center gap-1">
                        <FaUsers className="text-sky-blue text-xs" />
                        <span className="font-body text-xs text-dark-green/70">{course.classesPerWeek} classes/week</span>
                      </div>
                    )}
                    {course.levels && (
                      <div className="flex items-center gap-1">
                        <FaGraduationCap className="text-green text-xs" />
                        <span className="font-body text-xs text-dark-green/70">{course.levels} levels</span>
                      </div>
                    )}
                  </div>

                  {/* FIXED: CTA Button - Preserved sticker button theme with visible text */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className={`
                      w-full sticker-btn 
                      ${colors.buttonBg} ${colors.buttonText}
                      !px-4 !py-3 text-sm md:text-base
                      inline-flex items-center justify-center gap-2
                      group/btn relative z-20
                      border-dark-green !important
                    `}
                  >
                    <span className="font-headline font-semibold">Learn More</span>
                    <FaChevronRight className="text-white text-xs group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover effect - floating stars */}
                <div className="absolute -top-0 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaStar className="text-yellow text-lg" />
                </div>
                <div className="absolute bottom-1 left-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <FaStar className="text-yellow text-sm" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/courses"
            className="inline-flex items-center gap-3 sticker-btn sticker-btn-primary !px-8 !py-4 text-base md:text-lg group"
          >
            <span>View All Courses</span>
            <FaRocket className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 md:mt-16">
          <div className="stat-badge bg-primary-red/5 border-primary-red/20">
            <FaCertificate className="text-primary-red text-sm md:text-base" />
            <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
              {companyInfo.iso}
            </span>
          </div>
          <div className="stat-badge bg-sky-blue/5 border-sky-blue/20">
            <FaAward className="text-sky-blue text-sm md:text-base" />
            <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
              Govt. Authorised
            </span>
          </div>
          <div className="stat-badge bg-yellow/5 border-yellow/20">
            <FaStar className="text-yellow text-sm md:text-base" />
            <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
              1.5L+ Students Trained
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="handdrawn-separator mt-8 md:mt-12"></div>
    </section>
  );
};

export default CoursesSection;
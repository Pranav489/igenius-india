// components/HeroSlider.jsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaStar,
  FaPlay,
  FaGraduationCap,
  FaUsers
} from 'react-icons/fa';

// Hero slides data
const heroSlides = [
  {
    id: 1,
    title: 'Unlock Your Child\'s',
    highlightedText: 'Super Brain Power!',
    description: 'Join India\'s Most Trusted Abacus Academy with 1.5 Lakh+ happy students and 550+ franchises across India.',
    ctaPrimary: { text: 'Explore Courses', link: '/courses' },
    ctaSecondary: { text: 'Book Free Trial', link: '/enroll' },
    image: 'https://igeniusindia.in/admin/assets/images/banner/565727.jpg',
    bgColor: 'from-primary-red/10 to-sky-blue/10',
    badge: 'ISO 9001:2015 Certified',
    mobileBg: 'https://igeniusindia.in/admin/assets/images/banner/565727.jpg',
  },
  {
    id: 2,
    title: 'Master Mental Math',
    highlightedText: 'With Vedic Techniques!',
    description: 'Ancient Indian mathematics for lightning-fast calculations. Perfect for competitive exam preparation.',
    ctaPrimary: { text: 'Learn Vedic Math', link: '/courses/vedic-math' },
    ctaSecondary: { text: 'Book Free Demo', link: '/contact' },
    image: 'https://igeniusindia.in/admin/assets/images/course/banner/896386.png',
    bgColor: 'from-orange-500/10 to-yellow-500/10',
    badge: 'Govt. Authorised',
    mobileBg: 'https://igeniusindia.in/admin/assets/images/course/banner/896386.png',
  },
  {
    id: 3,
    title: 'Solve Puzzles,',
    highlightedText: 'Build Brilliance!',
    description: 'Rubik\'s Cube course for logical thinking, patience, and problem-solving skills. Fun learning guaranteed!',
    ctaPrimary: { text: 'Join Cube Class', link: '/courses/rubik-cube' },
    ctaSecondary: { text: 'About Us', link: '/about-us' },
    image: 'https://igeniusindia.in/admin/assets/images/course/banner/933400.png',
    bgColor: 'from-green-500/10 to-pink-500/10',
    badge: 'World Record Holder',
    mobileBg: 'https://igeniusindia.in/admin/assets/images/course/banner/933400.png',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto slide change
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  // Get current slide data
  const slide = heroSlides[currentSlide];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Slides Container - Mobile height 50vh */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Mobile Background Image with Overlay - ONLY on mobile */}
            <div className="absolute inset-0 md:hidden">
              <Image
                src={slide.mobileBg || slide.image}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
                quality={85}
              />
              {/* Lighter overlay for better visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
            </div>

            {/* Desktop Background Gradient - ONLY on desktop */}
            <div className={`hidden md:block absolute inset-0 bg-gradient-to-br ${slide.bgColor}`}></div>

            {/* Background Pattern - visible on all devices */}
            <div className="absolute inset-0 doodle-stars-bg opacity-30 mix-blend-overlay"></div>

            {/* Content Container */}
            <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-8 lg:gap-12">
              
              {/* Left Content */}
              <div className="w-full md:flex-1 text-center md:text-left z-10 pt-12 md:pt-0 px-3 md:px-0">
                {/* Badge - Mobile vs Desktop */}
                <div className={`
                  inline-flex items-center gap-1 md:gap-2 
                  px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-6 
                  border shadow-lg
                  ${isMobile 
                    ? 'bg-white/95 backdrop-blur-sm border-white/50 text-primary-red' 
                    : 'md:bg-yellow/20 md:backdrop-blur-sm md:border-yellow/30 md:text-dark-green'
                  }
                `}>
                  <FaStar className={`${isMobile ? 'text-yellow' : 'md:text-yellow'} text-xs md:text-sm`} />
                  <span className="font-headline text-xs md:text-sm font-bold">
                    {slide.badge}
                  </span>
                </div>

                {/* Title - Fixed with inline styles */}
                <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4">
                  {/* Regular title part */}
                  <span 
                    className="block sm:inline sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
                    style={{
                      color: isMobile ? '#FFFFFF' : '#395245', // White on mobile, Dark Green on desktop
                      textShadow: isMobile ? '2px 2px 4px rgba(0,0,0,0.3)' : 'none'
                    }}
                  >
                    {slide.title}{' '}
                  </span>
                  {/* Highlighted text part */}
                  <span 
                    className="block sm:inline text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
                    style={{
                      color: isMobile ? '#FFD700' : '#EA1E25', // Yellow on mobile, Primary Red on desktop
                      textShadow: isMobile ? '2px 2px 4px rgba(0,0,0,0.3)' : 'none'
                    }}
                  >
                    {slide.highlightedText}
                  </span>
                </h1>

                {/* Description - Fixed with inline styles */}
                <p 
                  className="text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto md:mx-0 mb-4 md:mb-8"
                  style={{
                    color: isMobile ? 'rgba(255,255,255,0.9)' : 'rgba(27,77,62,0.8)', // White/90 on mobile, Dark Green/80 on desktop
                    textShadow: isMobile ? '1px 1px 3px rgba(0,0,0,0.3)' : 'none'
                  }}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-2 md:gap-4 justify-center md:justify-start mb-3 md:mb-8">
                  <Link
                    href={slide.ctaPrimary.link}
                    className="sticker-btn sticker-btn-primary !px-3 md:!px-6 !py-1.5 md:!py-2 text-xs md:text-sm lg:text-base inline-flex items-center justify-center gap-1 md:gap-2 group !border-dark-green shadow-xl"
                  >
                    <span>{slide.ctaPrimary.text}</span>
                    <FaChevronRight className="text-[10px] md:text-sm group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={slide.ctaSecondary.link}
                    className="sticker-btn !px-3 md:!px-6 !py-1.5 md:!py-2 text-xs md:text-sm lg:text-base inline-flex items-center justify-center gap-1 md:gap-2 group !bg-white/95 backdrop-blur-sm !border-dark-green shadow-xl"
                  >
                    <FaPlay className="text-[8px] md:text-sm text-primary-red" />
                    <span className="text-dark-green font-bold">{slide.ctaSecondary.text}</span>
                  </Link>
                </div>

                {/* Stats Row - Hidden on mobile */}
                <div className="hidden md:grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
                  <div className="text-center bg-white/80 backdrop-blur-sm p-2 rounded-xl">
                    <div className="font-headline text-xl lg:text-2xl font-bold text-primary-red">550+</div>
                    <div className="text-xs text-dark-green/70">Franchises</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm p-2 rounded-xl">
                    <div className="font-headline text-xl lg:text-2xl font-bold text-primary-red">165+</div>
                    <div className="text-xs text-dark-green/70">Schools</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm p-2 rounded-xl">
                    <div className="font-headline text-xl lg:text-2xl font-bold text-primary-red">1.5L+</div>
                    <div className="text-xs text-dark-green/70">Students</div>
                  </div>
                </div>
              </div>

              {/* Right Image - Hidden on mobile */}
              <div className="hidden md:block md:flex-1 relative h-48 sm:h-64 lg:h-[400px] w-full md:w-auto">
                <div className="relative w-full h-full floating-animation">
                  <div className="absolute inset-0 polaroid-card !p-3 lg:!p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-white">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-10 h-10 lg:w-16 lg:h-16 bg-yellow rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                      <FaGraduationCap className="text-dark-green text-sm lg:text-2xl" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-8 h-8 lg:w-12 lg:h-12 bg-sky-blue rounded-full flex items-center justify-center shadow-lg">
                      <FaUsers className="text-white text-xs lg:text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute bottom-5 left-5 w-10 h-10 md:w-20 md:h-20 opacity-30 md:opacity-20">
              <div className="handdrawn-circle w-full h-full border-white md:border-primary-red"></div>
            </div>
            <div className="absolute top-10 right-5 md:top-20 md:right-10 w-16 h-16 md:w-32 md:h-32 opacity-30 md:opacity-20">
              <div className="handdrawn-circle w-full h-full border-white md:border-sky-blue"></div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-primary-red hover:text-white transition-all duration-300 group border-2 border-dark-green/20"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-dark-green group-hover:text-white text-sm md:text-base" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-primary-red hover:text-white transition-all duration-300 group border-2 border-dark-green/20"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-dark-green group-hover:text-white text-sm md:text-base" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-6 md:w-12 bg-yellow md:bg-primary-red shadow-lg' 
                  : 'w-2 md:w-3 bg-white/80 md:bg-gold-tan hover:bg-yellow'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-dark-green text-white text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                Slide {index + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Pause/Play Button */}
        {/* <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 w-6 h-6 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-red hover:text-white transition-colors duration-300 text-xs md:text-base border-2 border-dark-green/20 shadow-lg"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button> */}
      </div>

    </section>
  );
};

export default HeroSection;
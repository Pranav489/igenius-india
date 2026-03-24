// components/TestimonialsSection.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaChevronLeft, 
  FaChevronRight,
  FaHeart,
  FaSmile,
  FaTrophy,
  FaGraduationCap,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { testimonials } from '@/lib/data';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} size={14} className="text-yellow" />
      ))}
    </div>
  );
}

function Avatar({ testimonial, size = "md" }) {
  const dim = size === "lg" ? "w-14 h-14" : "w-12 h-12";
  
  if (testimonial.image) {
    return (
      <div className={`${dim} rounded-full overflow-hidden border-2 border-yellow flex-shrink-0 shadow-md`}>
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={56}
          height={56}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }
  
  return (
    <div className={`${dim} rounded-full flex items-center justify-center text-white font-headline font-bold flex-shrink-0 bg-gradient-to-br from-primary-red to-primary-red/80 border-2 border-yellow shadow-md`}>
      {testimonial.name.charAt(0)}
    </div>
  );
}

function TestimonialCard({ testimonial, isMobile = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={`
        group relative bg-white rounded-3xl p-6 md:p-8
        border-2 border-gold-tan/30 hover:border-primary-red
        transition-all duration-500 transform hover:-translate-y-2
        shadow-lg hover:shadow-xl
        overflow-hidden
        h-full flex flex-col
        ${isMobile ? 'mx-2' : ''}
      `}
    >
      {/* Decorative corner doodles */}
      <div className="absolute -top-3 -left-3 w-10 h-10">
        <div className="handdrawn-circle w-full h-full border-yellow/30"></div>
      </div>
      <div className="absolute -bottom-3 -right-3 w-10 h-10">
        <div className="handdrawn-circle w-full h-full border-sky-blue/30"></div>
      </div>

      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Quote icon background */}
      <div className="absolute top-4 right-4 text-sky-blue/10 group-hover:text-sky-blue/20 transition-colors">
        <FaQuoteLeft size={40} />
      </div>

      {/* Content - flex column with fixed layout */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Rating - fixed at top */}
        <div className="mb-4">
          <StarRating count={testimonial.rating} />
        </div>

        {/* Testimonial text - flex-grow to push footer down */}
        <div className="relative flex-grow">
          <FaQuoteLeft className="absolute -left-2 -top-2 text-primary-red/20 text-xs" />
          <p className="font-body text-dark-green/80 text-sm md:text-base leading-relaxed italic pl-4 line-clamp-4">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>

        {/* Author info - fixed at bottom */}
        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gold-tan/20">
          <Avatar testimonial={testimonial} size="lg" />
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-headline font-bold text-dark-green text-base">
                {testimonial.name}
              </h4>
              <span className="px-2 py-0.5 bg-yellow/20 rounded-full text-[10px] font-accent text-dark-green/60">
                {testimonial.role}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-dark-green/60 mb-1">
              <FaGraduationCap className="text-sky-blue" />
              <span>{testimonial.child}</span>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-dark-green/50">
              <FaMapMarkerAlt className="text-primary-red" />
              <span>{testimonial.city}</span>
            </div>
          </div>
        </div>

        {/* Hover effect star */}
        <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <FaStar className="text-yellow text-lg" />
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const prev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section ref={sectionRef} className="relative pt-12 md:pt-16 lg:pt-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Doodle Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Floating quote icons */}
        <div className="absolute top-20 left-10">
          <FaQuoteLeft className="text-primary-red text-7xl rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10">
          <FaQuoteRight className="text-sky-blue text-8xl -rotate-6" />
        </div>
        
        {/* Doodle patterns */}
        <div className="absolute top-40 right-20 w-60 h-60">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 w-80 h-80">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
        
        {/* Hand-drawn circles */}
        <div className="absolute top-1/3 left-5 w-32 h-32 opacity-20">
          <div className="handdrawn-circle w-full h-full border-primary-red"></div>
        </div>
        <div className="absolute bottom-1/3 right-5 w-40 h-40 opacity-20">
          <div className="handdrawn-circle w-full h-full border-sky-blue"></div>
        </div>
      </div>

      {/* Consistent container spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
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
              What <span className="text-primary-red">Parents Say</span>
            </h2>
          </div>
          
          {/* Hand-drawn underline */}
          <div className="handdrawn-underline mx-auto mt-2 md:mt-4 max-w-[250px] md:max-w-[350px]"></div>
          
          {/* Subtitle */}
          <p className="font-body text-dark-green/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-4 md:mt-6">
            Real stories from parents who've witnessed their child's transformation with I-Genius
          </p>
        </motion.div>

        {/* Desktop Grid - All cards with equal height */}
        <div className="hidden lg:block">
          {/* First Row - 3 cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(3).map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <TestimonialCard 
              key={activeIndex} 
              testimonial={testimonials[activeIndex]} 
              isMobile={true}
            />
          </AnimatePresence>

          {/* Mobile Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="group w-10 h-10 rounded-full border-2 border-gold-tan flex items-center justify-center text-dark-green hover:bg-primary-red hover:text-white hover:border-primary-red transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={14} className="group-hover:scale-110 transition-transform" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-8 bg-primary-red' 
                      : 'w-2 bg-gold-tan hover:bg-yellow'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-green text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="group w-10 h-10 rounded-full border-2 border-gold-tan flex items-center justify-center text-dark-green hover:bg-primary-red hover:text-white hover:border-primary-red transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={14} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Mobile dots indicator */}
          <div className="flex justify-center gap-1 mt-4">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-4 bg-primary-red' : 'w-1 bg-gold-tan'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats/Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="stat-badge bg-yellow/10 border-yellow/30">
              <FaStar className="text-yellow text-sm" />
              <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
                4.9/5 Rating from 5000+ Parents
              </span>
            </div>
            <div className="stat-badge bg-primary-red/5 border-primary-red/20">
              <FaHeart className="text-primary-red text-sm" />
              <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
                1.5L+ Happy Students
              </span>
            </div>
            <div className="stat-badge bg-sky-blue/5 border-sky-blue/20">
              <FaSmile className="text-sky-blue text-sm" />
              <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
                98% Parent Satisfaction
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 bg-yellow/20 px-5 py-2.5 rounded-full border border-yellow/30">
            <FaStar size={14} className="text-yellow" />
            <span className="text-dark-green font-medium text-sm font-body">
              Trusted by 1,50,000+ students and their families across India
            </span>
          </div>
        </motion.div>

        {/* View All Button */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-8"
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 font-headline text-dark-green hover:text-primary-red transition-colors duration-300 group"
          >
            <span className="text-sm md:text-base">Read More Success Stories</span>
            <span className="w-6 h-6 rounded-full bg-yellow/20 flex items-center justify-center group-hover:bg-primary-red group-hover:text-white transition-all">
              <FaChevronRight className="text-[10px]" />
            </span>
          </Link>
        </motion.div> */}
      </div>

      {/* Bottom Separator */}
      <div className="handdrawn-separator mt-8 md:mt-12"></div>
    </section>
  );
}
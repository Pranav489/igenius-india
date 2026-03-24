// components/franchise/FranchiseTestimonials.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FranchiseTestimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!testimonials || testimonials.length === 0) return null;

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Get visible testimonials for desktop (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      let index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <div className="absolute -left-8 -top-4">
              <FaStar className="text-yellow text-xl rotate-12" />
            </div>
            <div className="absolute -right-8 -bottom-4">
              <FaStar className="text-yellow text-xl -rotate-12" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-dark-green">
              What Our <span className="text-primary-red">Franchise Partners Say</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Real stories from successful franchise owners
          </p>
        </div>

        {/* Desktop Carousel - 3 cards */}
        <div className="hidden lg:block relative">
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-gold-tan/30 hover:bg-primary-red hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-dark-green group-hover:text-white" />
            </button>

            <div className="flex justify-center gap-6 w-full">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.name}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9, x: testimonial.position * 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`relative bg-white rounded-2xl p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 w-96 ${
                    testimonial.position === 0 ? 'scale-105 shadow-xl z-10' : 'scale-95 opacity-70'
                  }`}
                >
                  <div className="absolute -top-2 -left-2 w-6 h-6">
                    <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6">
                    <div className="handdrawn-circle w-full h-full border-sky-blue/50"></div>
                  </div>
                  
                  <FaQuoteLeft className="text-primary-red/20 text-3xl mb-4" />
                  
                  <p className="font-body text-dark-green/70 text-sm italic mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow flex-shrink-0">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-red to-primary-red/80 flex items-center justify-center">
                          <span className="text-white text-xl font-headline">{testimonial.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-dark-green">{testimonial.name}</h4>
                      <p className="font-body text-xs text-dark-green/50">{testimonial.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow text-xs" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-gold-tan/30 hover:bg-primary-red hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-dark-green group-hover:text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-primary-red' : 'w-2 bg-gold-tan hover:bg-yellow'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Slider - Single Card */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-2xl p-6 border-2 border-gold-tan/30 mx-4"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6">
                <div className="handdrawn-circle w-full h-full border-sky-blue/50"></div>
              </div>
              
              <FaQuoteLeft className="text-primary-red/20 text-3xl mb-4" />
              
              <p className="font-body text-dark-green/70 text-sm italic mb-6">
                "{testimonials[currentIndex]?.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow flex-shrink-0">
                  {testimonials[currentIndex]?.image ? (
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-red to-primary-red/80 flex items-center justify-center">
                      <span className="text-white text-xl font-headline">{testimonials[currentIndex]?.name?.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-headline font-bold text-dark-green">{testimonials[currentIndex]?.name}</h4>
                  <p className="font-body text-xs text-dark-green/50">{testimonials[currentIndex]?.city}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow text-xs" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls for Mobile */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border-2 border-gold-tan flex items-center justify-center text-dark-green hover:bg-primary-red hover:text-white hover:border-primary-red transition-all"
            >
              <FaChevronLeft size={14} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-primary-red' : 'w-2 bg-gold-tan'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border-2 border-gold-tan flex items-center justify-center text-dark-green hover:bg-primary-red hover:text-white hover:border-primary-red transition-all"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-yellow/20 px-5 py-2.5 rounded-full border border-yellow/30">
            <FaStar className="text-yellow text-sm" />
            <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
              Join 550+ successful franchise partners across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseTestimonials;
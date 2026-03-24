"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaStar, 
  FaGraduationCap, 
  FaBook, 
  FaLaptop, 
  FaTrophy, 
  FaShieldAlt,
  FaHeart,
  FaRocket,
  FaSmile,
  FaChevronRight,
  FaBolt,
  FaCalculator,
  FaCube,
  FaBrain,
  FaAward,
  FaCertificate
} from 'react-icons/fa';
import { whyFeatures } from "@/lib/data";

// Map Lucide icons to Fa icons for theme consistency
const iconMap = {
  GraduationCap: FaGraduationCap,
  BookOpen: FaBook,
  Monitor: FaLaptop,
  Trophy: FaTrophy,
  ShieldCheck: FaShieldAlt,
  Star: FaStar
};

const featureColors = [
  "text-primary-red", 
  "text-sky-blue", 
  "text-green", 
  "text-orange", 
  "text-pink", 
  "text-yellow"
];

const featureBgs = [
  "bg-primary-red/10", 
  "bg-sky-blue/10", 
  "bg-green/10", 
  "bg-orange/10", 
  "bg-pink/10", 
  "bg-yellow/20"
];

export default function WhyIGenius() {
  return (
    <section className="relative pt-12 md:pt-16 lg:pt-20 bg-white overflow-hidden">
      {/* Background Doodle Elements - Using React Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Floating icons */}
        <div className="absolute top-20 left-10">
          <FaStar className="text-primary-red text-7xl" />
        </div>
        <div className="absolute bottom-20 right-10">
          <FaBolt className="text-sky-blue text-8xl" />
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
        
        {/* Section Header - Themed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              Why <span className="text-primary-red">I-Genius</span>
            </h2>
          </div>
          
          {/* Hand-drawn underline */}
          <div className="handdrawn-underline mx-auto mt-2 md:mt-4 max-w-[200px] md:max-w-[300px]"></div>
          
          {/* Subtitle */}
          <p className="font-body text-dark-green/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-4 md:mt-6">
            We combine proven pedagogy, certified trainers, and a child-friendly curriculum to deliver results that go beyond academics.
          </p>
        </motion.div>

        {/* Features Grid - Themed Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || FaStar;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-3xl p-6 md:p-7 
                         border-2 border-gold-tan/30 hover:border-primary-red 
                         transition-all duration-500 transform hover:-translate-y-2
                         shadow-lg hover:shadow-xl overflow-hidden"
              >
                {/* Decorative corner doodles */}
                <div className="absolute -top-2 -left-2 w-8 h-8">
                  <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8">
                  <div className="handdrawn-circle w-full h-full border-sky-blue/50"></div>
                </div>

                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${featureColors[i].replace('text-', '')}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Icon with hand-drawn wrapper */}
                <div className="relative mb-5">
                  <div className={`
                    icon-wrapper w-14 h-14 md:w-16 md:h-16 
                    ${featureBgs[i]} 
                    transform rotate-3 group-hover:rotate-0 
                    transition-all duration-300
                    border-2 border-gold-tan/30 group-hover:border-${featureColors[i].replace('text-', '')}
                  `}>
                    <Icon size={24} className={`${featureColors[i]} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  
                  {/* Floating star on hover */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaStar className="text-yellow text-sm" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-headline text-lg md:text-xl font-bold text-dark-green mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-dark-green/70 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative elements - stats or mini badges */}
                {feature.stats && (
                  <div className="mt-4 pt-4 border-t border-gold-tan/20">
                    <div className="flex items-center gap-2">
                      <FaSmile className="text-yellow text-sm" />
                      <span className="font-accent text-xs text-dark-green/60">
                        {feature.stats}
                      </span>
                    </div>
                  </div>
                )}

                {/* Bottom accent line - hand-drawn style */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 
                  bg-gradient-to-r from-transparent via-${featureColors[i].replace('text-', '')} to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 md:mt-16 lg:mt-20"
        >
          <div className="relative bg-dark-green rounded-3xl p-8 md:p-10 overflow-hidden">
            {/* Background doodles - Using React Icons */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40">
                <FaStar className="text-yellow w-full h-full" />
              </div>
              <div className="absolute bottom-0 left-0 w-60 h-60">
                <FaAward className="text-yellow w-full h-full" />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-5 left-5 w-16 h-16 opacity-20">
              <div className="handdrawn-circle w-full h-full border-yellow"></div>
            </div>
            <div className="absolute bottom-5 right-5 w-20 h-20 opacity-20">
              <div className="handdrawn-circle w-full h-full border-yellow"></div>
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-between">
              <div className="text-center md:text-left">
                {/* Star badge */}
                <div className="inline-flex items-center gap-2 bg-yellow/20 px-4 py-2 rounded-full border border-yellow/30 mb-4">
                  <FaStar className="text-yellow text-sm" />
                  <span className="font-accent text-white text-sm">Limited Seats Available!</span>
                </div>
                
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Unlock Your Child&apos;s Genius?
                </h3>
                <p className="text-white/80 text-sm md:text-base max-w-xl">
                  Join 1.5 lakh+ happy students and give your child the gift of mental math mastery. 
                  Book a free demo class and see the difference in just one session!
                </p>

                {/* Mini stats */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-yellow text-sm" />
                    <span className="text-white/70 text-xs">550+ Franchises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-yellow text-sm" />
                    <span className="text-white/70 text-xs">50+ Expert Trainers</span>
                  </div>
                </div>
              </div>

              {/* CTA Button Group */}
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="sticker-btn sticker-btn-secondary !px-6 !py-3 text-sm md:text-base inline-flex items-center gap-2 group"
                >
                  <span>Book Free Demo</span>
                  <FaRocket className="text-white group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/courses"
                  className="sticker-btn !px-6 !py-3 text-sm md:text-base inline-flex items-center gap-2 group !bg-white/10 !border-white/30 hover:!bg-white/20"
                >
                  <span className="text-white">Explore Courses</span>
                  <FaChevronRight className="text-white text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Decorative stars */}
            <div className="absolute -top-2 -right-2 w-12 h-12">
              <FaStar className="text-yellow text-2xl opacity-30" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16">
              <FaStar className="text-yellow text-3xl opacity-30" />
            </div>
          </div>
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-10"
        >
          <div className="stat-badge bg-primary-red/5 border-primary-red/20">
            <FaStar className="text-primary-red text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              ISO 9001:2015 Certified
            </span>
          </div>
          <div className="stat-badge bg-sky-blue/5 border-sky-blue/20">
            <FaTrophy className="text-sky-blue text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              Govt. Authorised
            </span>
          </div>
          <div className="stat-badge bg-yellow/5 border-yellow/20">
            <FaHeart className="text-yellow text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              1.5L+ Happy Students
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Separator */}
      <div className="handdrawn-separator mt-8 md:mt-12"></div>
    </section>
  );
}
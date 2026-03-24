// components/about/OurAchievements.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaTrophy, FaAward } from 'react-icons/fa';
import { awardImages } from '@/lib/data';

const OurAchievements = () => {
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
              Our <span className="text-primary-red">Achievements</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Recognitions that reflect our commitment to excellence in education
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {awardImages.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl p-4 md:p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
              </div>
              <div className="relative w-full h-32 md:h-40 lg:h-48">
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <div className="stat-badge bg-primary-red/5 border-primary-red/20">
            <FaTrophy className="text-primary-red text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              Wonder Book of International London Record Holder
            </span>
          </div>
          <div className="stat-badge bg-yellow/5 border-yellow/20">
            <FaAward className="text-yellow text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              ISO 9001:2015 Certified
            </span>
          </div>
          <div className="stat-badge bg-sky-blue/5 border-sky-blue/20">
            <FaStar className="text-sky-blue text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              EBVTR Govt. Authorised
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
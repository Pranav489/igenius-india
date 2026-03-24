// components/school-project/PartnerSchools.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaSchool, FaMapMarkerAlt } from 'react-icons/fa';

const PartnerSchools = ({ schools }) => {
  if (!schools || schools.length === 0) return null;

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
              Our <span className="text-primary-red">Partner Schools</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Trusted by prestigious educational institutions across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white rounded-xl p-5 md:p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                {/* Larger Logo Container */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden p-3">
                  {school.logo ? (
                    <Image
                      src={school.logo}
                      alt={school.name}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary-red/10 rounded-xl flex items-center justify-center">
                      <FaSchool className="text-primary-red text-4xl md:text-5xl" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-headline font-bold text-dark-green text-sm md:text-base">{school.name}</h3>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <FaMapMarkerAlt className="text-yellow text-xs" />
                    <p className="font-body text-dark-green/50 text-xs">{school.city}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-yellow/20 px-5 py-2.5 rounded-full border border-yellow/30">
            <FaSchool className="text-yellow text-sm" />
            <span className="font-headline text-xs md:text-sm font-medium text-dark-green">
              {schools.length}+ Schools and Growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSchools;
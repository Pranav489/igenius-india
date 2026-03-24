'use client';

import Link from 'next/link';
import { FaStar, FaRocket, FaCalendarAlt, FaPhone } from 'react-icons/fa';
import { companyInfo } from '@/lib/data';

const CourseCTA = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #ea1e25 0%, #ea1e25 50%, #1a90be 100%)' }}
      ></div>
      
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10">
          <FaStar className="text-white text-7xl rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10">
          <FaRocket className="text-white text-8xl -rotate-12" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Start Your Child's Abacus Journey?
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              Join 1.5 lakh+ happy students and give your child the gift of mental math mastery
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="sticker-btn !px-6 !py-3 text-sm md:text-base bg-yellow text-dark-green hover:bg-yellow/90 !border-dark-green"
            >
              <FaCalendarAlt className="inline mr-2" />
              Book Free Demo
            </Link>
            <Link
              href={`tel:${companyInfo.phone}`}
              className="sticker-btn !px-6 !py-3 text-sm md:text-base bg-white/20 text-white hover:bg-white/30 !border-white/50"
            >
              <FaPhone className="inline mr-2" />
              Call {companyInfo.phone}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCTA;
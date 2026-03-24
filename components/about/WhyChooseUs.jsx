// components/about/WhyChooseUs.jsx
'use client';

import { motion } from 'framer-motion';
import { FaStar, FaCertificate, FaChalkboardTeacher, FaBook, FaLaptop, FaTrophy, FaHeart, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { 
      icon: FaCertificate, 
      title: "ISO Certified", 
      desc: "ISO 9001:2015 Certified Company", 
      color: "text-primary-red", 
      bg: "bg-primary-red/10" 
    },
    { 
      icon: FaGlobe, 
      title: "World Record Holder", 
      desc: "Recorded in Wonder Book of International London", 
      color: "text-yellow", 
      bg: "bg-yellow/10" 
    },
    { 
      icon: FaShieldAlt, 
      title: "Govt. Authorised", 
      desc: "Authorised by Educational Board of Vocational Training & Research (EBVTR), Govt. of India", 
      color: "text-sky-blue", 
      bg: "bg-sky-blue/10" 
    },
    { 
      icon: FaChalkboardTeacher, 
      title: "Expert Trainers", 
      desc: "50+ Highly qualified and trained teachers", 
      color: "text-sky-blue", 
      bg: "bg-sky-blue/10" 
    },
    { 
      icon: FaBook, 
      title: "Quality Study Material", 
      desc: "Well-researched, child-friendly books", 
      color: "text-green", 
      bg: "bg-green/10" 
    },
    { 
      icon: FaLaptop, 
      title: "Flexible Learning", 
      desc: "Online & Offline classes available", 
      color: "text-orange", 
      bg: "bg-orange/10" 
    },
    { 
      icon: FaTrophy, 
      title: "National Competitions", 
      desc: "District to International level", 
      color: "text-pink", 
      bg: "bg-pink/10" 
    },
    { 
      icon: FaHeart, 
      title: "Trusted by Parents", 
      desc: "1.5L+ happy students", 
      color: "text-yellow", 
      bg: "bg-yellow/10" 
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
              Why Choose <span className="text-primary-red">I-Genius</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            What makes us the most trusted abacus academy in India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
              </div>
              <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 transform rotate-3 group-hover:rotate-0 transition-all`}>
                <feature.icon className={`${feature.color} text-xl`} />
              </div>
              <h3 className={`font-headline font-bold text-lg ${feature.color} mb-2`}>{feature.title}</h3>
              <p className="font-body text-dark-green/70 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <div className="stat-badge bg-yellow/10 border-yellow/30">
            <FaGlobe className="text-sky-blue text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              Wonder Book of International London Record Holder
            </span>
          </div>
          <div className="stat-badge bg-sky-blue/10 border-sky-blue/30">
            <FaShieldAlt className="text-sky-blue text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              EBVTR Govt. of India Authorised
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
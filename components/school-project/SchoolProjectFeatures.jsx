'use client';

import { motion } from 'framer-motion';
import { FaStar, FaChalkboardTeacher, FaBook, FaTrophy, FaClock, FaSchool, FaUsers, FaCertificate } from 'react-icons/fa';

const SchoolProjectFeatures = () => {
  const features = [
    { icon: FaChalkboardTeacher, title: "Expert Trainers", desc: "Our qualified trainers conduct classes during school hours", color: "text-primary-red", bg: "bg-primary-red/10" },
    { icon: FaClock, title: "Flexible Schedule", desc: "Classes integrated into school timetable - no extra hours", color: "text-sky-blue", bg: "bg-sky-blue/10" },
    { icon: FaBook, title: "Quality Material", desc: "Age-appropriate books and abacus tools provided", color: "text-green", bg: "bg-green/10" },
    { icon: FaTrophy, title: "National Competitions", desc: "Participate in district to international level competitions", color: "text-orange", bg: "bg-orange/10" },
    { icon: FaSchool, title: "No Hassle Management", desc: "We handle everything - trainers, materials, curriculum", color: "text-pink", bg: "bg-pink/10" },
    { icon: FaCertificate, title: "Govt. Authorised", desc: "EBVTR Govt. of India authorized program", color: "text-yellow", bg: "bg-yellow/10" }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <div className="absolute md:-left-8 md:-top-4 -left-3 -top-4">
              <FaStar className="text-yellow text-xl rotate-12" />
            </div>
            <div className="absolute md:-right-8 md:-bottom-4 -right-3 -bottom-4">
              <FaStar className="text-yellow text-xl -rotate-12" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-dark-green">
              Why Choose <span className="text-primary-red">School Project</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Benefits that make I-Genius the perfect partner for your school
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </div>
    </section>
  );
};

export default SchoolProjectFeatures;
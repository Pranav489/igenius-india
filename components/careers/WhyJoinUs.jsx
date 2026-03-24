'use client';

import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaGraduationCap, FaChalkboardTeacher, FaUsers, FaTrophy } from 'react-icons/fa';

const WhyJoinUs = () => {
  const benefits = [
    { icon: FaHeart, title: "Positive Work Culture", desc: "Supportive and collaborative environment", color: "text-primary-red", bg: "bg-primary-red/10" },
    { icon: FaGraduationCap, title: "Professional Growth", desc: "Continuous learning and development", color: "text-sky-blue", bg: "bg-sky-blue/10" },
    { icon: FaChalkboardTeacher, title: "Impactful Work", desc: "Shape young minds and futures", color: "text-green", bg: "bg-green/10" },
    { icon: FaUsers, title: "Great Team", desc: "Work with passionate educators", color: "text-orange", bg: "bg-orange/10" },
    { icon: FaTrophy, title: "Recognition", desc: "Celebrating achievements together", color: "text-pink", bg: "bg-pink/10" },
    { icon: FaStar, title: "Stable Career", desc: "Join a trusted institution", color: "text-yellow", bg: "bg-yellow/10" }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
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
              Why Join <span className="text-primary-red">I-Genius</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Be part of a mission-driven organization that values its people
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
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
              <div className={`w-12 h-12 ${benefit.bg} rounded-xl flex items-center justify-center mb-4 transform rotate-3 group-hover:rotate-0 transition-all`}>
                <benefit.icon className={`${benefit.color} text-xl`} />
              </div>
              <h3 className={`font-headline font-bold text-lg ${benefit.color} mb-2`}>{benefit.title}</h3>
              <p className="font-body text-dark-green/70 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
'use client';

import { motion } from 'framer-motion';
import { FaStar, FaRupeeSign, FaChalkboardTeacher, FaBook, FaTrophy, FaHandshake, FaChartLine, FaGlobe } from 'react-icons/fa';

const FranchiseBenefits = () => {
  const benefits = [
    { icon: FaRupeeSign, title: "Low Investment", desc: "Minimal investment with high returns", color: "text-primary-red", bg: "bg-primary-red/10" },
    { icon: FaChartLine, title: "High Returns", desc: "Earn ₹25,000 - ₹50,000+ per month", color: "text-sky-blue", bg: "bg-sky-blue/10" },
    { icon: FaGlobe, title: "Proven Model", desc: "550+ successful franchises", color: "text-green", bg: "bg-green/10" },
    { icon: FaChalkboardTeacher, title: "Training Support", desc: "Complete training & certification", color: "text-orange", bg: "bg-orange/10" },
    { icon: FaBook, title: "Study Material", desc: "Well-researched curriculum & books", color: "text-pink", bg: "bg-pink/10" },
    { icon: FaTrophy, title: "Brand Recognition", desc: "Trusted by 1.5L+ students", color: "text-yellow", bg: "bg-yellow/10" },
    { icon: FaHandshake, title: "Complete Support", desc: "Marketing & operational support", color: "text-primary-red", bg: "bg-primary-red/10" },
    { icon: FaStar, title: "Govt. Authorised", desc: "EBVTR Govt. of India approved", color: "text-sky-blue", bg: "bg-sky-blue/10" }
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
              Why Become a <span className="text-primary-red">Franchise Partner</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Join India's fastest-growing abacus network
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
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

export default FranchiseBenefits;
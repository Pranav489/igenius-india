'use client';

import { motion } from 'framer-motion';
import { FaStar, FaHandshake, FaChalkboardTeacher, FaBook, FaTrophy, FaCheckCircle } from 'react-icons/fa';

const SchoolProjectProcess = () => {
  const steps = [
    { number: 1, icon: FaHandshake, title: "Partnership", desc: "Sign agreement with I-Genius Academy", color: "text-primary-red", bg: "bg-primary-red/10" },
    { number: 2, icon: FaChalkboardTeacher, title: "Trainer Allocation", desc: "Dedicated trainers assigned to your school", color: "text-sky-blue", bg: "bg-sky-blue/10" },
    { number: 3, icon: FaBook, title: "Curriculum Integration", desc: "Classes scheduled during school hours", color: "text-green", bg: "bg-green/10" },
    { number: 4, icon: FaTrophy, title: "Competitions", desc: "Participation in national events", color: "text-orange", bg: "bg-orange/10" },
    { number: 5, icon: FaCheckCircle, title: "Success", desc: "Students excel in academics and beyond", color: "text-pink", bg: "bg-pink/10" }
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
              How It <span className="text-primary-red">Works</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Simple 5-step process to bring abacus education to your school
          </p>
        </div>

        <div className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gold-tan/30 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-5 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="absolute -top-2 -left-2 w-6 h-6">
                  <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
                </div>
                <div className={`w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center mx-auto mb-3 transform rotate-3 group-hover:rotate-0 transition-all`}>
                  <step.icon className={`${step.color} text-xl`} />
                </div>
                <div className={`font-headline font-bold text-lg ${step.color} mb-1`}>
                  {step.number}. {step.title}
                </div>
                <p className="font-body text-xs text-dark-green/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolProjectProcess;
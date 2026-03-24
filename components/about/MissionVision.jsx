'use client';

import { motion } from 'framer-motion';
import { FaStar, FaEye, FaBullseye, FaHeart } from 'react-icons/fa';

const MissionVision = () => {
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
              Our <span className="text-primary-red">Purpose</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Guided by our vision and mission, we strive to make quality education accessible to every child
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white rounded-2xl p-6 md:p-8 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8">
              <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sky-blue/10 rounded-2xl flex items-center justify-center mb-4 transform rotate-3 group-hover:rotate-0 transition-all">
                <FaEye className="text-sky-blue text-2xl" />
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-dark-green mb-3">
                Our <span className="text-sky-blue">Vision</span>
              </h3>
              <p className="font-body text-dark-green/70 text-sm md:text-base leading-relaxed">
                To empower grassroots students with the valuable skills and knowledge of abacus calculation, enabling them to excel academically and thrive in today's competitive world.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-white rounded-2xl p-6 md:p-8 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute -bottom-3 -right-3 w-8 h-8">
              <div className="handdrawn-circle w-full h-full border-sky-blue/50"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mb-4 transform rotate-3 group-hover:rotate-0 transition-all">
                <FaBullseye className="text-primary-red text-2xl" />
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-dark-green mb-3">
                Our <span className="text-primary-red">Mission</span>
              </h3>
              <p className="font-body text-dark-green/70 text-sm md:text-base leading-relaxed">
                To provide high-quality, accessible, and effective abacus training to grassroots students, fostering a love for learning, promoting cognitive development, and building confidence through innovative programs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-12 md:mt-16">
          <h3 className="font-headline text-xl md:text-2xl font-bold text-dark-green text-center mb-6">
            Our <span className="text-primary-red">Core Values</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FaHeart, title: "Passion", desc: "For education" },
              { icon: FaStar, title: "Excellence", desc: "In everything" },
              { icon: FaEye, title: "Innovation", desc: "In teaching" },
              { icon: FaBullseye, title: "Integrity", desc: "In actions" }
            ].map((value, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl border-2 border-gold-tan/30">
                <value.icon className="text-primary-red text-2xl mx-auto mb-2" />
                <h4 className="font-headline font-bold text-dark-green text-sm">{value.title}</h4>
                <p className="font-body text-xs text-dark-green/60">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
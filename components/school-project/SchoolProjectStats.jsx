'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaSchool, FaUsers, FaChalkboardTeacher, FaGlobeAsia } from 'react-icons/fa';

const SchoolProjectStats = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const CountUp = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!isVisible) return;
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);
    return <span>{count.toLocaleString('en-IN')}{suffix}</span>;
  };

  const statItems = [
    { icon: FaSchool, value: stats?.schools || 165, suffix: '+', label: 'Partner Schools', color: 'text-primary-red', bg: 'bg-primary-red/10' },
    { icon: FaUsers, value: stats?.students || 150000, suffix: '+', label: 'Students Trained', color: 'text-sky-blue', bg: 'bg-sky-blue/10' },
    { icon: FaChalkboardTeacher, value: stats?.trainers || 50, suffix: '+', label: 'Expert Trainers', color: 'text-green', bg: 'bg-green/10' },
    { icon: FaGlobeAsia, value: stats?.years || 10, suffix: '+', label: 'Years of Excellence', color: 'text-orange', bg: 'bg-orange/10' }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
              Our <span className="text-primary-red">Impact</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Making a difference in schools across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statItems.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-4 md:p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3 transform rotate-3 group-hover:rotate-0 transition-all`}>
                <stat.icon className={`${stat.color} text-xl md:text-2xl`} />
              </div>
              <div className={`font-headline text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                {isVisible ? <CountUp end={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <div className="font-body text-xs md:text-sm text-dark-green/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolProjectStats;
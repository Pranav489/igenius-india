// components/about/TeamSection.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaUsers } from 'react-icons/fa';

const TeamSection = ({ team }) => {
  if (!team || team.length === 0) return null;

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
              Our <span className="text-primary-red">Expert Team</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Meet our passionate educators who make learning magical
          </p>
        </div>

        {/* Centered Flexbox with wrapping - responsive card widths */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-7xl">
            {team.map((member, index) => (
              <motion.div
                key={member.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white rounded-xl p-4 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 text-center w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-1rem)] lg:w-[calc(20%-1.25rem)]"
              >
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 border-2 border-yellow">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green to-green/80 flex items-center justify-center">
                      <FaUsers className="text-white text-2xl" />
                    </div>
                  )}
                </div>
                <h4 className="font-headline font-bold text-dark-green text-sm">{member.name}</h4>
                <p className="font-accent text-primary-red text-xs">{member.role}</p>
                {member.specialty && (
                  <p className="font-body text-dark-green/50 text-[10px] mt-1">{member.specialty}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-yellow/20 px-4 py-2 rounded-full border border-yellow/30">
            <FaUsers className="text-yellow text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              {team.length}+ Qualified and Trained Teaching Staff
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
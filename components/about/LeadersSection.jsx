// components/about/LeadersSection.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaLinkedin, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';

const LeadersSection = ({ leaders }) => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Executive Leaders (Nita, Yogesh, Dattatray)
  const executiveLeaders = leaders?.filter(l => 
    l.name === "Nita Pawar" || l.name === "Yogesh Pawar" || l.name === "Dattatray S"
  ) || [];
  
  // Division Leaders (all others)
  const divisionLeaders = leaders?.filter(l => 
    l.name !== "Nita Pawar" && l.name !== "Yogesh Pawar" && l.name !== "Dattatray S"
  ) || [];

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
              Meet Our <span className="text-primary-red">Leadership</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Visionary leaders dedicated to transforming education
          </p>
        </div>

        {/* Executive Leadership - 3 cards centered */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {executiveLeaders.map((leader, index) => (
              <motion.div
                key={leader.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8">
                  <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-yellow">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-red to-primary-red/80 flex items-center justify-center">
                        <span className="text-white text-4xl font-headline">{leader.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-headline font-bold text-xl text-dark-green">{leader.name}</h3>
                  <p className="font-accent text-sm text-primary-red mb-2">{leader.role}</p>
                  <p className="font-body text-dark-green/60 text-sm line-clamp-2 text-center">{leader.bio}</p>
                  
                  <div className="flex gap-3 mt-4">
                    {leader.linkedin && (
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-blue hover:text-primary-red transition-colors">
                        <FaLinkedin size={18} />
                      </a>
                    )}
                    {leader.email && (
                      <a href={`mailto:${leader.email}`} className="text-sky-blue hover:text-primary-red transition-colors">
                        <FaEnvelope size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Division Leaders - Centered grid */}
        {divisionLeaders.length > 0 && (
          <div>
            <h3 className="font-headline text-xl md:text-2xl font-bold text-dark-green text-center mb-6">
              Our <span className="text-primary-red">Division Leaders</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-center">
              {divisionLeaders.map((leader, index) => (
                <motion.div
                  key={leader.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative bg-white rounded-xl p-4 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center"
                  onClick={() => setSelectedLeader(leader)}
                >
                  <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 border-2 border-yellow">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-sky-blue to-sky-blue/80 flex items-center justify-center">
                        <span className="text-white text-xl font-headline">{leader.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <h4 className="font-headline font-bold text-dark-green text-sm">{leader.name}</h4>
                  <p className="font-accent text-primary-red text-xs">{leader.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Leader Modal */}
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedLeader(null)}>
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 text-dark-green/50 hover:text-primary-red"
              >
                ✕
              </button>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-yellow">
                  {selectedLeader.image ? (
                    <Image src={selectedLeader.image} alt={selectedLeader.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-red to-primary-red/80 flex items-center justify-center">
                      <span className="text-white text-3xl font-headline">{selectedLeader.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-headline font-bold text-xl text-dark-green">{selectedLeader.name}</h3>
                <p className="font-accent text-primary-red text-sm mb-3">{selectedLeader.role}</p>
                <p className="font-body text-dark-green/70 text-sm">{selectedLeader.bio}</p>
                <div className="mt-4 pt-4 border-t border-gold-tan/20 w-full">
                  <FaQuoteLeft className="text-yellow/50 text-sm mb-2" />
                  <p className="font-accent text-dark-green/60 text-xs italic">{selectedLeader.quote || "Dedicated to nurturing young minds"}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadersSection;
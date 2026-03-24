'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaGraduationCap, FaBriefcase, FaClock, FaChevronDown, FaChevronUp, FaUserTie } from 'react-icons/fa';

const OpenPositions = ({ positions }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
              Open <span className="text-primary-red">Positions</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Join our team and make a difference in children's lives
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {positions.map((position) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border-2 border-gold-tan/30 hover:border-primary-red transition-all overflow-hidden"
            >
              {/* Position Header - Clickable */}
              <button
                onClick={() => toggleExpand(position.id)}
                className="w-full text-left p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex-1">
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-dark-green group-hover:text-primary-red transition-colors">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-2 text-xs text-dark-green/60">
                      <FaGraduationCap className="text-yellow text-xs" />
                      <span>{position.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-dark-green/60">
                      <FaBriefcase className="text-yellow text-xs" />
                      <span>Experience: {position.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green/10 text-green text-xs font-headline rounded-full">
                    {position.type || "Full Time"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-yellow/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    {expandedId === position.id ? (
                      <FaChevronUp className="text-primary-red text-sm" />
                    ) : (
                      <FaChevronDown className="text-primary-red text-sm" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === position.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 md:p-6 pt-0 border-t border-gold-tan/20">
                      <div className="space-y-4">
                        {/* About Role */}
                        <div>
                          <h4 className="font-headline font-bold text-dark-green text-sm flex items-center gap-2 mb-2">
                            <FaUserTie className="text-primary-red text-sm" />
                            About the Role
                          </h4>
                          <p className="font-body text-dark-green/70 text-sm leading-relaxed">
                            {position.aboutRole}
                          </p>
                        </div>

                        {/* Responsibilities */}
                        {position.responsibilities && (
                          <div>
                            <h4 className="font-headline font-bold text-dark-green text-sm mb-2">
                              Key Responsibilities
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                              {position.responsibilities.map((resp, idx) => (
                                <li key={idx} className="font-body text-dark-green/70 text-sm">
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Requirements */}
                        {position.requirements && (
                          <div>
                            <h4 className="font-headline font-bold text-dark-green text-sm mb-2">
                              Requirements
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                              {position.requirements.map((req, idx) => (
                                <li key={idx} className="font-body text-dark-green/70 text-sm">
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Apply Button */}
                        <div className="pt-2">
                          <button
                            onClick={() => {
                              const formSection = document.getElementById('application-form');
                              if (formSection) {
                                formSection.scrollIntoView({ behavior: 'smooth' });
                                // Pre-select position in form
                                const positionSelect = document.getElementById('position');
                                if (positionSelect) {
                                  positionSelect.value = position.title;
                                }
                              }
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-primary-red text-white rounded-full text-sm font-headline hover:bg-primary-red/90 transition-colors"
                          >
                            <FaStar className="text-yellow text-xs" />
                            Apply for this position
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
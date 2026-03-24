// components/courses/CourseFAQ.jsx - Left-aligned version
'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const CourseFAQ = ({ faqs, colors }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-dark-green mb-4">
          Frequently Asked <span className={colors.primary}>Questions</span>
        </h2>
        <p className="font-body text-dark-green/70 max-w-2xl mx-auto px-4 md:px-0">
          Everything you need to know about this course
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-0 space-y-4">
        {faqs?.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl border-2 border-gold-tan/30 hover:border-primary-red/50 transition-all duration-300 overflow-hidden"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between gap-3 p-4 md:p-6 text-left cursor-pointer group"
            >
              <h3 className={`font-headline font-bold text-dark-green text-sm sm:text-base md:text-lg flex-1 ${colors.primary}`}>
                {faq.question}
              </h3>
              <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full ${colors.bg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                <FaChevronDown className={`${colors.primary} text-xs md:text-sm transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* Answer - with slide animation */}
            <div
              className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0">
                <div className="border-t border-gold-tan/20 pt-4 md:pt-5">
                  <p className="font-body text-dark-green/70 text-sm md:text-base leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFAQ;
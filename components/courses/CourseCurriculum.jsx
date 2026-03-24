// components/courses/CourseCurriculum.jsx
'use client';

import { FaStar, FaChevronRight } from 'react-icons/fa';

const CourseCurriculum = ({ course, colors }) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-dark-green mb-4">
          Course <span className={colors.primary}>Curriculum</span>
        </h2>
        <p className="font-body text-dark-green/70 max-w-2xl mx-auto">
          8 levels across 3 stages designed for systematic brain development
        </p>
      </div>

      {/* Level Progression Visual */}
      <div className="relative mb-12">
        {/* Desktop connector line - visible only on desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-tan/50 via-gold-tan to-gold-tan/50 -translate-y-1/2"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {course.courseStructure?.map((stage, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className={`${colors.bg} rounded-2xl p-6 border-2 ${colors.border} relative z-10 bg-white shadow-md hover:shadow-lg transition-all`}>
                {/* Level number badge */}
                <div className={`w-10 h-10 ${colors.buttonBg} text-white rounded-full flex items-center justify-center font-headline font-bold mb-3 shadow-md`}>
                  {index + 1}
                </div>
                
                <h3 className={`font-headline font-bold text-lg ${colors.primary} mb-2`}>{stage.stage}</h3>
                <p className="font-body text-xs text-dark-green/60 mb-3">{stage.ageGroup}</p>
                
                {/* ALL Level Names - Show all levels */}
                <div className="space-y-1.5 mb-3">
                  {stage.levelNames?.map((levelName, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaStar className="text-yellow text-[10px]" />
                      <span className="font-body text-xs text-dark-green/70">{levelName}</span>
                    </div>
                  ))}
                </div>
                
                <div className="font-headline font-bold text-dark-green text-sm mb-1">
                  {stage.levels} Levels
                </div>
                <div className="font-body text-xs text-dark-green/60">
                  {stage.duration}
                </div>
              </div>
              
              {/* Connector Arrow for Desktop - positioned to the right of each card except last */}
              {index < course.courseStructure.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gold-tan/30">
                    <FaChevronRight className={`${colors.primary} text-sm`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Syllabus */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gold-tan/30 mt-8">
        <h3 className="font-headline text-2xl font-bold text-dark-green mb-6">
          What <span className={colors.primary}>You'll Learn</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {course.syllabus?.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className={`mt-1 w-4 h-4 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <div className={`w-1.5 h-1.5 rounded-full ${colors.buttonBg}`}></div>
              </div>
              <span className="font-body text-sm text-dark-green/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
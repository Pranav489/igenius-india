'use client';

import { FaCheckCircle } from 'react-icons/fa';

const CourseOverview = ({ course }) => {
  const colors = {
    text: 'text-primary-red',
    bg: 'bg-primary-red/10',
    buttonBg: 'bg-primary-red'
  };

  return (
    <div className="space-y-8">
      {/* About Course */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gold-tan/30">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-dark-green mb-4">
          About <span className="text-primary-red">the Course</span>
        </h2>
        <p className="font-body text-dark-green/70 leading-relaxed mb-4">
          {course.longDescription || course.description}
        </p>
        <p className="font-body text-dark-green/70 leading-relaxed">
          The abacus is a centuries-old tool made up of movable beads. Students learn to add, subtract, multiply, and divide on the physical tool, and gradually start visualizing the tool in their mind to perform mental calculations. This process of visualization activates the right brain while the logical calculations engage the left brain, resulting in whole brain development.
        </p>
      </div>

      {/* Key Features */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gold-tan/30">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-dark-green mb-6">
          Key <span className="text-primary-red">Features</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {course.features?.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`mt-1 w-5 h-5 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <FaCheckCircle className={`${colors.text} text-xs`} />
              </div>
              <span className="font-body text-sm text-dark-green/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Structure - 3 Parts */}
      {course.courseStructure && (
        <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gold-tan/30">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-dark-green mb-6">
            Course <span className="text-primary-red">Structure</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {course.courseStructure.map((stage, index) => (
              <div key={index} className="bg-primary-red/5 rounded-xl p-5 text-center border-2 border-primary-red/20">
                <div className="font-headline font-bold text-lg text-primary-red mb-2">
                  {stage.stage}
                </div>
                <div className="font-body text-xs text-dark-green/60 mb-3">
                  {stage.ageGroup}
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {stage.levelNames?.map((_, idx) => (
                    <span key={idx} className="w-2 h-2 rounded-full bg-yellow"></span>
                  ))}
                </div>
                <div className="font-headline font-bold text-dark-green text-sm mb-1">
                  {stage.levels} Levels
                </div>
                <div className="font-body text-xs text-dark-green/60">
                  {stage.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseOverview;
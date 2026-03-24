// components/courses/CourseBenefits.jsx
'use client';

import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaTrophy, 
  FaBolt, 
  FaHeart,
  FaStar,
  FaGraduationCap,
  FaPuzzlePiece,
  FaClock,
  FaEye
} from 'react-icons/fa';

const CourseBenefits = ({ benefits, stats, colors }) => {
  const getBenefitIcon = (icon, className = "text-xl") => {
    switch(icon) {
      case 'brain': return <FaBrain className={`${className} ${colors.primary}`} />;
      case 'trophy': return <FaTrophy className={`${className} ${colors.primary}`} />;
      case 'speed': return <FaBolt className={`${className} ${colors.primary}`} />;
      case 'heart': return <FaHeart className={`${className} ${colors.primary}`} />;
      case 'memory': return <FaBrain className={`${className} ${colors.primary}`} />;
      case 'confidence': return <FaStar className={`${className} ${colors.primary}`} />;
      case 'puzzle': return <FaPuzzlePiece className={`${className} ${colors.primary}`} />;
      case 'logic': return <FaBrain className={`${className} ${colors.primary}`} />;
      case 'patience': return <FaClock className={`${className} ${colors.primary}`} />;
      case 'detox': return <FaEye className={`${className} ${colors.primary}`} />;
      default: return <FaGraduationCap className={`${className} ${colors.primary}`} />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-dark-green mb-4">
          Key <span className={colors.primary}>Benefits</span>
        </h2>
        <p className="font-body text-dark-green/70 max-w-2xl mx-auto">
          How this course transforms your child's cognitive abilities
        </p>
      </div>

      {/* Benefits Grid - Equal height cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits?.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 h-full"
          >
            <div className="flex items-start gap-4 h-full">
              <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform flex-shrink-0`}>
                {getBenefitIcon(benefit.icon, "text-xl")}
              </div>
              <div className="flex-1">
                <h3 className={`font-headline font-bold text-lg ${colors.primary} mb-2`}>{benefit.title}</h3>
                <p className="font-body text-sm text-dark-green/70 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Success Stats - Equal width and consistent height */}
      {stats && (
        <div className="mt-12">
          <h3 className="font-headline text-xl font-bold text-dark-green text-center mb-6">
            Our <span className={colors.primary}>Success Metrics</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(stats).map(([key, value], index) => {
              // Format the label for display
              const formatLabel = (label) => {
                switch(label) {
                  case 'students': return 'Happy Students';
                  case 'improvement': return 'Improvement Rate';
                  case 'satisfaction': return 'Satisfaction Rate';
                  case 'competitions': return 'Competitions';
                  default: return label;
                }
              };
              
              return (
                <div key={index} className="text-center p-4 bg-yellow/5 rounded-xl border-2 border-yellow/20 hover:border-yellow transition-all h-full flex flex-col justify-center">
                  <div className={`font-headline text-xl md:text-2xl font-bold ${colors.primary} mb-1`}>{value}</div>
                  <div className="font-body text-xs text-dark-green/60 capitalize">{formatLabel(key)}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseBenefits;
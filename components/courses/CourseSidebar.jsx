'use client';

import Link from 'next/link';
import { 
  FaUsers,
  FaClock,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaDownload,
  FaLayerGroup,
  FaHourglassHalf
} from 'react-icons/fa';

const CourseSidebar = ({ course, colors }) => {
  return (
    <div className="space-y-6">
      {/* Quick Info Card */}
      <div className="bg-white rounded-2xl p-6 border-2 border-gold-tan/30 sticky top-32">
        <h3 className="font-headline text-xl font-bold text-dark-green mb-4">
          Quick <span className={colors.primary}>Info</span>
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center`}>
              <FaUsers className={`${colors.primary} text-sm`} />
            </div>
            <div>
              <div className="font-headline text-xs text-dark-green/50">Age Group</div>
              <div className="font-headline font-bold text-dark-green">{course.ageRange}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center`}>
              <FaHourglassHalf className={`${colors.primary} text-sm`} />
            </div>
            <div>
              <div className="font-headline text-xs text-dark-green/50">Duration</div>
              <div className="font-headline font-bold text-dark-green">{course.duration}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center`}>
              <FaLayerGroup className={`${colors.primary} text-sm`} />
            </div>
            <div>
              <div className="font-headline text-xs text-dark-green/50">Levels</div>
              <div className="font-headline font-bold text-dark-green">{course.level}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center`}>
              <FaCalendarAlt className={`${colors.primary} text-sm`} />
            </div>
            <div>
              <div className="font-headline text-xs text-dark-green/50">Classes/Week</div>
              <div className="font-headline font-bold text-dark-green">{course.classesPerWeek || "2-5"}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center`}>
              <FaMapMarkerAlt className={`${colors.primary} text-sm`} />
            </div>
            <div>
              <div className="font-headline text-xs text-dark-green/50">Mode</div>
              <div className="font-headline font-bold text-dark-green">{course.mode?.join(" • ")}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gold-tan/20">
          <Link
            href="/contact"
            className={`w-full sticker-btn ${colors.buttonBg} text-white !px-4 !py-3 text-sm inline-flex items-center justify-center gap-2 group`}
          >
            <FaWhatsapp className="text-white" />
            <span>Enquire Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
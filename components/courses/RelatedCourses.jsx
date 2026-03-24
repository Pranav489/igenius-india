'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const RelatedCourses = ({ courses, currentCourse, colors }) => {
  // Color schemes for related courses
  const getRelatedColors = (course) => {
    if (course.slug?.includes('vedic')) {
      return {
        primary: 'text-sky-blue',
        bg: 'bg-sky-blue/10',
        border: 'border-sky-blue/20',
        buttonBg: 'bg-sky-blue'
      };
    }
    if (course.slug?.includes('rubik')) {
      return {
        primary: 'text-orange',
        bg: 'bg-orange/10',
        border: 'border-orange/20',
        buttonBg: 'bg-orange'
      };
    }
    return {
      primary: 'text-primary-red',
      bg: 'bg-primary-red/10',
      border: 'border-primary-red/20',
      buttonBg: 'bg-primary-red'
    };
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-dark-green mb-2">
          Explore Other <span className={colors.primary}>Courses</span>
        </h2>
        <p className="font-body text-dark-green/70 text-sm">
          Explore other programs that complement your child's learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const relatedColors = getRelatedColors(course);
          
          return (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image || `/images/courses/${course.slug}-hero.jpg`}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <div className={`bg-yellow/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1`}>
                    <FaStar className="text-dark-green text-[8px]" />
                    <span className="font-headline text-dark-green text-[10px] font-bold">{course.ageRange}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`font-headline font-bold text-lg ${relatedColors.primary} mb-1`}>
                  {course.name}
                </h3>
                <p className="font-body text-dark-green/60 text-xs mb-3 line-clamp-2">
                  {course.shortDescription}
                </p>
                
                {/* Quick Info */}
                <div className="flex items-center justify-between pt-3 border-t border-gold-tan/20">
                  <div className="flex items-center gap-2">
                    <span className="text-dark-green/40 text-[10px]">{course.duration}</span>
                    <span className="text-dark-green/40">•</span>
                    <span className="text-dark-green/40 text-[10px]">{course.level}</span>
                  </div>
                  <div className={`${relatedColors.bg} rounded-full p-1.5 group-hover:translate-x-1 transition-transform`}>
                    <FaArrowRight className={`${relatedColors.primary} text-xs`} />
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-red rounded-2xl pointer-events-none transition-all"></div>
            </Link>
          );
        })}
      </div>

      {/* View All Courses Link */}
      <div className="text-center mt-6">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 font-headline text-dark-green hover:text-primary-red transition-colors duration-300 group"
        >
          <span className="text-sm">View All Courses</span>
          <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedCourses;
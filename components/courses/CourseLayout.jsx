// components/courses/CourseLayout.jsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CourseHero from './CourseHero';
import CourseTabs from './CourseTabs';
import CourseOverview from './CourseOverview';
import CourseCurriculum from './CourseCurriculum';
import CourseBenefits from './CourseBenefits';
import CourseFAQ from './CourseFAQ';
import CourseCTA from './CourseCTA';
import CourseSidebar from './CourseSidebar';
import CourseGallery from './CourseGallery';
import RelatedCourses from './RelatedCourses';

// Color schemes for different course types
const courseColorSchemes = {
  abacus: {
    primary: 'text-primary-red',
    bg: 'bg-primary-red/10',
    border: 'border-primary-red/20',
    buttonBg: 'bg-primary-red',
    lightBg: 'bg-primary-red/5',
    gradient: 'from-primary-red to-primary-red/80'
  },
  vedic: {
    primary: 'text-sky-blue',
    bg: 'bg-sky-blue/10',
    border: 'border-sky-blue/20',
    buttonBg: 'bg-sky-blue',
    lightBg: 'bg-sky-blue/5',
    gradient: 'from-sky-blue to-sky-blue/80'
  },
  rubik: {
    primary: 'text-orange',
    bg: 'bg-orange/10',
    border: 'border-orange/20',
    buttonBg: 'bg-orange',
    lightBg: 'bg-orange/5',
    gradient: 'from-orange to-orange/80'
  }
};

const CourseLayout = ({ course, allCourses }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const pathname = usePathname();
  
  // Determine course type from slug or id
  const getCourseType = () => {
    if (course.slug?.includes('vedic') || course.id === 2) return 'vedic';
    if (course.slug?.includes('rubik') || course.id === 3) return 'rubik';
    return 'abacus'; // default
  };

  const courseType = getCourseType();
  const colors = courseColorSchemes[courseType];

  // Get related courses
  const getRelatedCourses = () => {
    if (!course.related) return [];
    return allCourses.filter(c => course.related.includes(c.id));
  };

  const relatedCourses = getRelatedCourses();

  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const sectionId = `${hash}-section`;
      
      // Find matching tab
      const matchingTab = ['overview', 'curriculum', 'benefits', 'faq', 'gallery'].find(
        tab => hash.includes(tab)
      );
      
      if (matchingTab) {
        setActiveTab(matchingTab);
        
        // Smooth scroll to section
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  }, [pathname]);

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return <CourseOverview course={course} colors={colors} />;
      case 'curriculum':
        return <CourseCurriculum course={course} colors={colors} />;
      case 'benefits':
        return <CourseBenefits benefits={course.benefits} stats={course.successStats} colors={colors} />;
      case 'gallery':
        return <CourseGallery gallery={course.gallery} colors={colors} />;
      case 'faq':
        return <CourseFAQ faqs={course.faqs} colors={colors} />;
      default:
        return <CourseOverview course={course} colors={colors} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <CourseHero course={course} colors={colors} courseType={courseType} />
      <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} colors={colors} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - with section IDs */}
          <div className="lg:col-span-3">
            <section id="overview-section" className="scroll-mt-28 md:scroll-mt-32">
              {activeTab === 'overview' && renderTabContent()}
            </section>
            
            <section id="curriculum-section" className="scroll-mt-28 md:scroll-mt-32">
              {activeTab === 'curriculum' && renderTabContent()}
            </section>
            
            <section id="benefits-section" className="scroll-mt-28 md:scroll-mt-32">
              {activeTab === 'benefits' && renderTabContent()}
            </section>
            
            <section id="gallery-section" className="scroll-mt-28 md:scroll-mt-32">
              {activeTab === 'gallery' && renderTabContent()}
            </section>
            
            <section id="faq-section" className="scroll-mt-28 md:scroll-mt-32">
              {activeTab === 'faq' && renderTabContent()}
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar course={course} colors={colors} />
          </div>
        </div>

        {/* Related Courses Section - Always visible at bottom */}
        {relatedCourses.length > 0 && (
          <div className="mt-12 md:mt-16">
            <RelatedCourses courses={relatedCourses} currentCourse={course} colors={colors} />
          </div>
        )}
      </div>

      <CourseCTA />
    </div>
  );
};

export default CourseLayout;
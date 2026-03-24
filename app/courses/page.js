// app/courses/page.jsx
import Link from "next/link";
import Image from "next/image";
import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import { courses } from "@/lib/data";
import CTASection from "@/components/home/CTASection";
import { 
  FaStar, 
  FaRocket, 
  FaGraduationCap,
  FaChevronRight,
  FaUsers,
  FaClock,
  FaCalendarAlt,
  FaAward,
  FaBrain,
  FaTrophy,
  FaHeart,
  FaBolt,
  FaCube,
  FaCalculator
} from "react-icons/fa";

export const metadata = buildMetadata("courses");

const coursePanelColors = [
  "from-primary-red to-primary-red/80", 
  "from-sky-blue to-sky-blue/80", 
  "from-orange to-orange/80",
  "from-green to-green/80"
];

const courseBadgeColors = [
  { text: "text-primary-red", bg: "bg-primary-red/10", border: "border-primary-red/20", icon: "text-primary-red", buttonBg: "bg-primary-red" },
  { text: "text-sky-blue", bg: "bg-sky-blue/10", border: "border-sky-blue/20", icon: "text-sky-blue", buttonBg: "bg-sky-blue" },
  { text: "text-orange", bg: "bg-orange/10", border: "border-orange/20", icon: "text-orange", buttonBg: "bg-orange" },
  { text: "text-green", bg: "bg-green/10", border: "border-green/20", icon: "text-green", buttonBg: "bg-green" }
];

// Helper function to get icon component based on icon name
const getBenefitIcon = (iconName, className = "w-3 h-3 md:w-3.5 md:h-3.5") => {
  switch(iconName) {
    case 'brain':
      return <FaBrain className={className} />;
    case 'trophy':
      return <FaTrophy className={className} />;
    case 'speed':
      return <FaBolt className={className} />;
    case 'heart':
      return <FaHeart className={className} />;
    case 'cube':
      return <FaCube className={className} />;
    case 'calculator':
      return <FaCalculator className={className} />;
    case 'memory':
      return <FaBrain className={className} />;
    case 'confidence':
      return <FaStar className={className} />;
    default:
      return <FaStar className={className} />;
  }
};

export default function CoursesPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero Section - RECONSTRUCTED */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-[#395245] to-[#395245]/95">
        {/* Background Doodle Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-5 sm:opacity-10">
          <div className="absolute top-10 left-10 hidden sm:block">
            <FaStar className="text-yellow text-5xl sm:text-7xl rotate-12" />
          </div>
          <div className="absolute bottom-10 right-10 hidden md:block">
            <FaRocket className="text-yellow text-6xl sm:text-8xl -rotate-12" />
          </div>
          <div className="absolute top-40 right-40 hidden lg:block">
            <FaGraduationCap className="text-yellow text-6xl" />
          </div>
          
          {/* Doodle patterns */}
          <div className="absolute top-20 left-20 w-40 sm:w-60 h-40 sm:h-60 opacity-50 sm:opacity-100">
            <div className="doodle-pattern-stars w-full h-full"></div>
          </div>
          <div className="absolute bottom-20 right-20 w-60 sm:w-80 h-60 sm:h-80 opacity-50 sm:opacity-100">
            <div className="doodle-pattern-circles w-full h-full"></div>
          </div>
          
          {/* Hand-drawn circles */}
          <div className="absolute top-1/3 left-1/4 w-24 sm:w-32 h-24 sm:h-32">
            <div className="handdrawn-circle w-full h-full border-yellow/30"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-32 sm:w-40 h-32 sm:h-40">
            <div className="handdrawn-circle w-full h-full border-sky-blue/30"></div>
          </div>
        </div>

        {/* Consistent container spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            
            {/* Badge - CENTERED above heading */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-yellow/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow/30 mb-4 sm:mb-6 mx-auto">
              <FaStar className="text-yellow text-xs sm:text-sm" />
              <span className="font-headline text-xs sm:text-sm text-white font-medium whitespace-nowrap">
                Brain Development Programs
              </span>
            </div>

            {/* Title with hand-drawn underline - CENTERED */}
            <div className="relative mb-4 sm:mb-6 w-full">
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                Our <span className="text-yellow">Courses</span>
              </h1>
              <div className="handdrawn-underline mx-auto mt-2 max-w-[150px] sm:max-w-[200px]"></div>
            </div>

            {/* Description - CENTERED */}
            <p className="font-body text-white/80 text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-0 text-center max-w-2xl mx-auto">
              Scientifically designed programs that develop mental arithmetic, logical thinking, 
              and academic confidence in children aged 4–15 years.
            </p>

            {/* Stats Row - CENTERED */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 w-full">
              <div className="flex items-center justify-center gap-2 bg-white/5 rounded-full px-3 py-1.5 sm:bg-transparent sm:px-0">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaUsers className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="text-white/80 text-xs sm:text-sm whitespace-nowrap">1.5L+ Students</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/5 rounded-full px-3 py-1.5 sm:bg-transparent sm:px-0">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="text-white/80 text-xs sm:text-sm whitespace-nowrap">50+ Trainers</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/5 rounded-full px-3 py-1.5 sm:bg-transparent sm:px-0">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaAward className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="text-white/80 text-xs sm:text-sm whitespace-nowrap">ISO Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        {/* Consistent container spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block relative">
              <div className="absolute -left-6 -top-3 sm:-left-8 sm:-top-4 md:-left-12 md:-top-6">
                <FaStar className="text-yellow text-lg sm:text-xl md:text-2xl rotate-12" />
              </div>
              <div className="absolute -right-6 -bottom-3 sm:-right-8 sm:-bottom-4 md:-right-12 md:-bottom-6">
                <FaStar className="text-yellow text-lg sm:text-xl md:text-2xl -rotate-12" />
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-dark-green">
                Choose the <span className="text-primary-red">Perfect Program</span>
              </h2>
            </div>
            <p className="font-body text-dark-green/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
              Each course is designed to match your child's age, skill level, and learning goals
            </p>
          </div>

          {/* Courses Grid - Alternating Layout */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
            {courses.map((course, index) => {
              const colors = courseBadgeColors[index % courseBadgeColors.length];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={course.id}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-500 hover:shadow-xl"
                >
                  {/* Decorative corner doodles */}
                  <div className="absolute -top-3 -left-3 w-8 sm:w-12 h-8 sm:h-12 z-10 hidden xs:block">
                    <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-8 sm:w-12 h-8 sm:h-12 z-10 hidden xs:block">
                    <div className="handdrawn-circle w-full h-full border-sky-blue/50"></div>
                  </div>

                  {/* Grid Layout - Stack on mobile, side by side on desktop */}
                  <div className="flex flex-col lg:grid lg:grid-cols-2">
                    
                    {/* Image Column */}
                    <div className={`relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-full min-h-[200px] sm:min-h-[250px] lg:min-h-[350px] overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${coursePanelColors[index % coursePanelColors.length]} opacity-80 sm:opacity-90 mix-blend-overlay z-10`}></div>
                      
                      {/* Background Image */}
                      {course.bannerImage ? (
                        <Image
                          src={course.bannerImage}
                          alt={course.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index < 2}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-dark-green to-dark-green/80"></div>
                      )}
                      
                      {/* Dark Overlay for Text Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>
                      
                      {/* Content on Image - Mobile Only */}
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-30 lg:hidden">
                        <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                          {course.name}
                        </h3>
                        <p className="text-white/80 text-xs sm:text-sm line-clamp-2">{course.tagline}</p>
                      </div>

                      {/* Floating Badges */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 flex flex-wrap gap-1.5 sm:gap-2">
                        <span className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-headline font-semibold bg-white/90 backdrop-blur-sm ${colors.text}`}>
                          {course.ageRange || course.ageGroup || "Ages 4-14"}
                        </span>
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-headline font-semibold bg-yellow/90 backdrop-blur-sm text-dark-green">
                          {course.level || "All Levels"}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`p-5 sm:p-6 md:p-8 lg:p-10 ${isEven ? '' : 'lg:order-1'}`}>
                      {/* Title - Desktop Only */}
                      <h3 className={`font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-dark-green mb-3 hidden lg:block ${colors.text}`}>
                        {course.name}
                      </h3>

                      {/* Tags - Responsive wrap */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        <span className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-headline font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                          <span className="flex items-center gap-1">
                            <FaUsers className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden xs:inline">Ages </span>{course.ageRange || course.ageGroup || "4-14"}
                          </span>
                        </span>
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-headline font-semibold bg-yellow/10 text-dark-green border border-yellow/20">
                          <span className="flex items-center gap-1">
                            <FaClock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden xs:inline">{course.duration}</span>
                            <span className="xs:hidden">{course.duration?.replace('months', 'm')}</span>
                          </span>
                        </span>
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-headline font-semibold bg-yellow/10 text-dark-green border border-yellow/20">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden xs:inline">{course.classesPerWeek || "2"} classes/week</span>
                            <span className="xs:hidden">{course.classesPerWeek || "2"}/wk</span>
                          </span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-body text-dark-green/70 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                        {course.fullDescription || course.description}
                      </p>

                      {/* Course Structure for Abacus (if available) - Responsive grid */}
                      {course.courseStructure && (
                        <div className="mb-4 sm:mb-6">
                          <h4 className="font-headline font-semibold text-dark-green text-xs sm:text-sm mb-2 sm:mb-3">
                            Course Structure:
                          </h4>
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                            {course.courseStructure.map((stage, idx) => (
                              <div key={idx} className={`${colors.bg} rounded-lg sm:rounded-xl p-2 sm:p-3 text-center`}>
                                <div className={`font-headline font-bold text-[8px] xs:text-[10px] sm:text-xs ${colors.text}`}>
                                  {stage.stage}
                                </div>
                                <div className="font-body text-[8px] xs:text-[8px] sm:text-[10px] text-dark-green/60 mt-0.5 sm:mt-1">
                                  {stage.levels} {stage.levels === 1 ? 'Level' : 'Levels'}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Benefits List - Responsive grid */}
                      <div className="mb-5 sm:mb-6">
                        <h4 className="font-headline font-semibold text-dark-green text-xs sm:text-sm mb-2 sm:mb-3">
                          Key Benefits:
                        </h4>
                        <ul className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                          {(course.benefits || []).slice(0, 4).map((benefit, idx) => {
                            // Check if benefit is an object (with title) or string
                            if (typeof benefit === 'object' && benefit !== null) {
                              return (
                                <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] xs:text-xs text-dark-green/80">
                                  <span className={`mt-0.5 flex-shrink-0 ${colors.text}`}>
                                    {getBenefitIcon(benefit.icon, "w-2.5 h-2.5 sm:w-3 sm:h-3")}
                                  </span>
                                  <span className="font-body leading-tight">{benefit.title}</span>
                                </li>
                              );
                            } else {
                              return (
                                <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] xs:text-xs text-dark-green/80">
                                  <span className={`mt-0.5 flex-shrink-0 font-bold ${colors.text}`}>✓</span>
                                  <span className="font-body leading-tight">{benefit}</span>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>

                      {/* CTA Button - Full width on mobile */}
                      <Link 
                        href={`/courses/${course.slug}`}
                        className={`
                          inline-flex items-center justify-center sm:justify-start gap-2 
                          w-full sm:w-auto
                          sticker-btn ${colors.buttonBg} text-white
                          !px-4 sm:!px-6 !py-2.5 sm:!py-3 text-xs sm:text-sm md:text-base
                          group/btn
                          border-2 ${colors.border} hover:${colors.border}
                        `}
                      >
                        <span className="font-headline font-semibold">Explore {course.name}</span>
                        <FaChevronRight className={`text-xs text-white group-hover/btn:translate-x-1 transition-transform`} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Badges - Responsive wrap */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-10 sm:mt-12 md:mt-16">
            <div className="stat-badge bg-primary-red/5 border-primary-red/20 px-2 sm:px-3 py-1 sm:py-1.5">
              <FaStar className="text-primary-red text-xs sm:text-sm" />
              <span className="font-headline text-[10px] sm:text-xs font-medium text-dark-green">
                ISO 9001:2015 Certified
              </span>
            </div>
            <div className="stat-badge bg-sky-blue/5 border-sky-blue/20 px-2 sm:px-3 py-1 sm:py-1.5">
              <FaAward className="text-sky-blue w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-headline text-[10px] sm:text-xs font-medium text-dark-green">
                Govt. Authorised
              </span>
            </div>
            <div className="stat-badge bg-yellow/5 border-yellow/20 px-2 sm:px-3 py-1 sm:py-1.5">
              <FaUsers className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-headline text-[10px] sm:text-xs font-medium text-dark-green">
                1.5L+ Students
              </span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
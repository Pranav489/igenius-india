// components/courses/CourseHero.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaStar,
    FaRocket,
    FaUsers,
    FaClock,
    FaGraduationCap,
    FaCalendarAlt,
    FaAward,
    FaCalculator,
    FaBrain,
    FaCube
} from 'react-icons/fa';

const CourseHero = ({ course, colors, courseType }) => {
    // Get course-specific icon
    const getCourseIcon = () => {
        switch (courseType) {
            case 'vedic':
                return <FaBrain className="text-yellow text-6xl" />;
            case 'rubik':
                return <FaCube className="text-yellow text-6xl" />;
            default:
                return <FaCalculator className="text-yellow text-6xl" />;
        }
    };

    // Get course-specific badge text
    const getBadgeText = () => {
        switch (courseType) {
            case 'vedic':
                return 'Ancient Math Techniques';
            case 'rubik':
                return 'Puzzle Solving Mastery';
            default:
                return 'Brain Development Program';
        }
    };

    return (
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
                    {getCourseIcon()}
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Breadcrumb */}
                        <div className="flex justify-center lg:justify-start mb-3">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                                <Link href="/" className="text-white/60 hover:text-yellow text-xs">Home</Link>
                                <span className="text-white/40">/</span>
                                <Link href="/courses" className="text-white/60 hover:text-yellow text-xs">Courses</Link>
                                <span className="text-white/40">/</span>
                                <span className="text-yellow text-xs">{course.name.split(' ')[0]}</span>
                            </div>
                        </div>

                        {/* Badge */}
                        <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-yellow/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow/30">
                                <FaStar className="text-yellow text-xs sm:text-sm" />
                                <span className="font-headline text-xs sm:text-sm text-white font-medium whitespace-nowrap">
                                    {getBadgeText()}
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {course.name}
                        </h1>

                        {/* Tagline */}
                        <p className="font-accent text-yellow text-lg md:text-xl mb-4">
                            {course.tagline}
                        </p>

                        {/* Description */}
                        <p className="font-body text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                            {course.description}
                        </p>

                        {/* Quick Stats Row */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                                <FaUsers className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="text-white text-xs sm:text-sm">{course.successStats?.students || "1.5L+ Students"}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                                <FaClock className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="text-white text-xs sm:text-sm">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                                <FaGraduationCap className="text-yellow w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="text-white text-xs sm:text-sm">{course.level}</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="sticker-btn !px-6 !py-3 text-sm sm:text-base inline-flex items-center justify-center gap-2 group bg-yellow text-dark-green hover:bg-yellow/90 !border-dark-green"
                            >
                                <FaCalendarAlt className="text-dark-green group-hover:scale-110 transition-transform" />
                                <span className="font-headline font-bold">Book Free Demo</span>
                            </Link>

                            <Link
                                href="#curriculum-section" // Changed from #curriculum to #curriculum-section
                                className="sticker-btn !px-6 !py-3 text-sm sm:text-base inline-flex items-center justify-center gap-2 group bg-white/20 text-white hover:bg-white/30 !border-white/50"
                                scroll={false} // Prevent Next.js default scroll handling
                            >
                                <FaGraduationCap className="text-white" />
                                <span className="font-headline">View Curriculum</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            <div className="polaroid-card !p-4 md:!p-6 transform rotate-2 hover:rotate-0 transition-all duration-500 bg-white/95">
                                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                                    <Image
                                        src={course.bannerImage || course.image || `/images/courses/${course.slug}-hero.jpg`}
                                        alt={course.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                                    {/* Floating Badges */}
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-yellow/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                                            <FaStar className="text-dark-green text-xs" />
                                            <span className="font-headline text-dark-green text-xs font-bold">{course.ageRange}</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-4 right-4">
                                        <div className="bg-primary-red/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                                            <FaRocket className="text-white text-xs" />
                                            <span className="font-headline text-white text-xs font-bold">{course.totalLevels || "Multiple Levels"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl p-3 shadow-xl border-2 border-yellow transform -rotate-3 hover:rotate-0 transition-all duration-300 max-w-[180px]"
                        >
                            <div className="flex items-center gap-2">
                                <FaAward className="text-primary-red text-xl" />
                                <div>
                                    <div className="font-headline text-xs text-dark-green/50">Certified</div>
                                    <div className="font-headline font-bold text-dark-green text-sm">ISO 9001:2015</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Fixed Bottom Wave Separator - No visible edge */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                    style={{
                        display: 'block',
                        marginBottom: '-1px', // Removes any potential gap
                    }}
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default CourseHero;
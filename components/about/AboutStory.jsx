// components/about/AboutStory.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaPlay, FaPause } from 'react-icons/fa';

const AboutStory = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-block relative">
                            <div className="absolute md:-left-8 md:-top-4 -left-1 -top-5">
                                <FaStar className="text-yellow text-xl rotate-12" />
                            </div>
                            <div className="absolute -right-8 -bottom-4">
                                <FaStar className="text-yellow text-xl -rotate-12" />
                            </div>
                            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-dark-green">
                                Our <span className="text-primary-red">Story</span>
                            </h2>
                        </div>

                        <div className="space-y-4 font-body text-dark-green/70 text-sm md:text-base leading-relaxed">
                            <p>
                                I-Genius Abacus Academy India Pvt Ltd was founded in 2007 in Nashik, Maharashtra, with a powerful belief — that every child is born with extraordinary potential, and the right education can unlock it.              </p>

                            <p>
                                Starting with a small centre and a handful of students, I-Genius grew steadily through the commitment of its founders and the transformative results seen in students. Word spread quickly: children enrolled in I-Genius were not just learning to calculate faster — they were becoming more focused, more confident, and more curious.              </p>

                            <p>
                                Today, I-Genius stands as India's one of the most respected abacus and brain development franchises, with 550+ authorized centres, 1.5 lakh+ trained students, 165+ school associations, and a presence in 5 countries.              </p>

                            <p>
                                Our programs — Abacus, Vedic Math, and Rubik Cube — are designed by experts and delivered by trained, certified educators who are passionate about unlocking each child's genius.              </p>

                        </div>

                        {/* Stats Highlights */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                            <div className="bg-yellow/5 rounded-xl p-3 text-center border border-yellow/20">
                                <div className="font-headline text-xl font-bold text-primary-red">2007</div>
                                <div className="font-body text-[10px] text-dark-green/60">Year of Establishment</div>
                            </div>
                            <div className="bg-yellow/5 rounded-xl p-3 text-center border border-yellow/20">
                                <div className="font-headline text-xl font-bold text-primary-red">550+</div>
                                <div className="font-body text-[10px] text-dark-green/60">Franchisees</div>
                            </div>
                            <div className="bg-yellow/5 rounded-xl p-3 text-center border border-yellow/20">
                                <div className="font-headline text-xl font-bold text-primary-red">165+</div>
                                <div className="font-body text-[10px] text-dark-green/60">School Projects</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-primary-red/5 px-4 py-2 rounded-full border border-primary-red/20 w-fit">
                            <FaHeart className="text-primary-red text-sm" />
                            <span className="font-accent text-dark-green text-sm">Making math magical since 2007</span>
                        </div>
                    </motion.div>

                    {/* Right Column - Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative group">
                            {/* Video Container */}
                            <div className="polaroid-card !p-4 transform rotate-2 hover:rotate-0 transition-all duration-500">
                                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-dark-green">
                                    {/* Video Element */}
                                    <video
                                        className="w-full h-full object-cover"
                                        poster="/images/about-video-poster.jpg"
                                        controls={isPlaying}
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                    >
                                        <source src="/videos/about-igenius.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Play Button Overlay - Only visible when video is not playing */}
                                    {!isPlaying && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <button
                                                onClick={() => {
                                                    const video = document.querySelector('#about-video');
                                                    if (video) {
                                                        video.play();
                                                        setIsPlaying(true);
                                                    }
                                                }}
                                                className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                                            >
                                                <FaPlay className="text-dark-green text-2xl ml-1" />
                                            </button>
                                        </div>
                                    )}

                                    {/* Video Caption */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 inline-block">
                                            <p className="font-accent text-dark-green text-xs">Watch: I-Genius Abacus Academy - Transforming Young Minds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Quote */}
                        <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl p-3 shadow-xl border-2 border-yellow max-w-[220px]">
                            <p className="font-accent text-dark-green text-xs">"Empowering grassroots students with the valuable skills of abacus calculation"</p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-12 h-12">
                            <div className="handdrawn-circle w-full h-full border-sky-blue/30"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
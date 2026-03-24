'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const CourseGallery = ({ gallery, colors }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!gallery || gallery.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="font-body text-dark-green/70">Gallery coming soon!</p>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(gallery[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % gallery.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(gallery[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(gallery[prevIndex]);
  };

  // Handle keyboard navigation
  useState(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-dark-green mb-4">
          Course <span className={colors.primary}>Gallery</span>
        </h2>
        <p className="font-body text-dark-green/70 max-w-2xl mx-auto px-4 md:px-0">
          See our students in action and experience the learning environment
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {gallery.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square"
          >
            <Image
              src={image}
              alt={`Course gallery ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className={`inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full ${colors.primary}`}>
                  <FaStar className="text-yellow text-xs" />
                  <span className="font-headline text-xs font-bold">View</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <FaTimes className="text-white text-xl" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full">
            <span className="text-white text-sm">
              {currentIndex + 1} / {gallery.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseGallery;
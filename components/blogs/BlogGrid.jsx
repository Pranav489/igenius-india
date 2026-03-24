'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar, FaCalendarAlt, FaClock, FaUser, FaTag } from 'react-icons/fa';

const BlogGrid = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const categories = ['all', ...new Set(posts.map(post => post.category))];

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-gold-tan/20">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-headline text-sm capitalize transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary-red text-white shadow-md'
                : 'bg-gray-100 text-dark-green/70 hover:bg-yellow/20'
            }`}
          >
            {category === 'all' ? 'All Posts' : category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="blog-card group relative bg-white rounded-2xl overflow-hidden border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
          >
            {/* Decorative Corner */}
            <div className="absolute -top-2 -left-2 w-6 h-6 z-10">
              <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
            </div>

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || `/images/blog/${post.slug}.jpg`}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-headline font-bold bg-yellow text-dark-green`}>
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-dark-green/60 mb-3">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-yellow text-[10px]" />
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="text-yellow text-[10px]" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUser className="text-yellow text-[10px]" />
                  <span>{post.author}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="blog-title font-headline text-xl md:text-2xl font-bold text-dark-green mb-3 line-clamp-2 group-hover:text-primary-red transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="blog-excerpt font-body text-dark-green/70 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="text-xs text-dark-green/50 bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
                    <FaTag className="text-[8px] text-yellow" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary-red hover:text-primary-red/80 font-headline text-sm group/link"
              >
                <span>Read More</span>
                <FaStar className="text-xs group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Hover Star */}
            <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <FaStar className="text-yellow text-lg" />
            </div>
          </motion.article>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="font-body text-dark-green/70">No blog posts found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
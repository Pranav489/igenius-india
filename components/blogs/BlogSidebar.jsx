'use client';

import Link from 'next/link';
import { FaStar, FaTag, FaFolder, FaNewspaper } from 'react-icons/fa';
import { blogPosts } from '@/lib/data';

const BlogSidebar = ({ categories, tags }) => {
  // Get recent posts (latest 3)
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Categories Widget */}
      <div className="bg-white rounded-2xl p-5 border-2 border-gold-tan/30">
        <h3 className="font-headline text-lg font-bold text-dark-green mb-4 flex items-center gap-2">
          <FaFolder className="text-primary-red text-sm" />
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <a
                href={`#category-${category}`}
                className="flex items-center justify-between text-dark-green/70 hover:text-primary-red transition-colors text-sm py-1"
              >
                <span>{category}</span>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  {blogPosts.filter(p => p.category === category).length}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white rounded-2xl p-5 border-2 border-gold-tan/30">
        <h3 className="font-headline text-lg font-bold text-dark-green mb-4 flex items-center gap-2">
          <FaNewspaper className="text-primary-red text-sm" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h4 className="font-headline font-semibold text-dark-green text-sm group-hover:text-primary-red transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="font-body text-xs text-dark-green/50 mt-1">
                {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
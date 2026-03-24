import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaCalendarAlt, FaClock, FaUser, FaTag, FaArrowLeft, FaShare, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { blogPosts } from '@/lib/data';
import { siteSEO } from '@/utils/seoConfig';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: `${post.title} | I-Genius Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteSEO.baseUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.image || `/images/blog/${post.slug}.jpg` }]
    }
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.date,
            "image": post.image || `/images/blog/${post.slug}.jpg`,
            "publisher": {
              "@type": "Organization",
              "name": siteSEO.siteName,
              "logo": {
                "@type": "ImageObject",
                "url": `${siteSEO.baseUrl}/images/logo.png`
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-24 overflow-hidden bg-gradient-to-br from-[#395245] to-[#395245]/95">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-yellow mb-6 transition-colors">
          <FaArrowLeft className="text-sm" />
          <span className="text-sm">Back to Blog</span>
        </Link>

        <div className="max-w-3xl mx-auto text-center">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow/20 px-4 py-2 rounded-full border border-yellow/30 mb-4">
            <FaStar className="text-yellow text-sm" />
            <span className="font-headline text-sm text-white">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-yellow text-xs" />
              <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow text-xs" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-yellow text-xs" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

        {/* Bottom Wave */}
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

      {/* Blog Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 border-2 border-gold-tan/30">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none font-body text-dark-green/70">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gold-tan/20">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-gray-100 rounded-full text-xs text-dark-green/70 flex items-center gap-1">
                <FaTag className="text-[10px] text-yellow" />
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mt-6 pt-4">
            <span className="font-headline text-sm text-dark-green">Share:</span>
            <a href="#" className="text-sky-blue hover:text-primary-red transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-sky-blue hover:text-primary-red transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="text-sky-blue hover:text-primary-red transition-colors">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-dark-green">
                You Might Also <span className="text-primary-red">Like</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl p-5 border-2 border-gold-tan/30 hover:border-primary-red transition-all hover:-translate-y-1"
                >
                  <h3 className="font-headline font-bold text-dark-green group-hover:text-primary-red transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="font-body text-xs text-dark-green/50 mt-2">
                    {new Date(related.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
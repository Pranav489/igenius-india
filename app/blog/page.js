import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";

import { blogPosts } from "@/lib/data";
import BlogHero from "@/components/blogs/BlogHero";
import BlogGrid from "@/components/blogs/BlogGrid";
import BlogSidebar from "@/components/blogs/BlogSidebar";

export const metadata = buildMetadata("blog");

export default function BlogPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const tags = [...new Set(blogPosts.flatMap(post => post.tags))];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <BlogHero />
      
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <BlogGrid posts={blogPosts} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar categories={categories} tags={tags} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
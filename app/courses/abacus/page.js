// app/courses/abacus/page.jsx
import { buildMetadata, getBreadcrumbSchema, getCourseSchema, getFAQSchema } from "@/utils/seoConfig";
import CourseLayout from "@/components/courses/CourseLayout";
import { courses } from "@/lib/data";

export const metadata = buildMetadata("abacus");

export default function AbacusPage() {
  const course = courses.find((c) => c.id === 1);

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Abacus", url: "/courses/abacus" },
  ]);

  const courseSchema = getCourseSchema({
    name: course.name,
    description: course.description,
    url: `/courses/${course.slug}`,
    ageGroup: course.ageRange,
  });

  const faqSchema = getFAQSchema(course.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CourseLayout course={course} allCourses={courses} />
    </>
  );
}
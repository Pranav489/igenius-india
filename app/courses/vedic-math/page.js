import { buildMetadata, getBreadcrumbSchema, getCourseSchema, getFAQSchema } from "@/utils/seoConfig";
import CourseLayout from "@/components/courses/CourseLayout";
import { courses, faqVedicMath } from "@/lib/data";

export const metadata = buildMetadata("vedicMath");

export default function VedicMathsPage() {
  const course = courses.find((c) => c.id === 2); // Vedic Maths course

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Vedic Maths", url: "/courses/vedic-math" },
  ]);

  const courseSchema = getCourseSchema({
    name: course.name,
    description: course.description,
    url: `/courses/${course.slug}`,
    ageGroup: course.ageRange,
  });

  const faqSchema = getFAQSchema(faqVedicMath);

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
      <CourseLayout course={course} faqs={faqVedicMath} allCourses={courses}  />
    </>
  );
}
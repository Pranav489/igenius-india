import { buildMetadata, getBreadcrumbSchema, getCourseSchema, getFAQSchema } from "@/utils/seoConfig";
import CourseLayout from "@/components/courses/CourseLayout";
import { courses, faqRubik } from "@/lib/data";

export const metadata = buildMetadata("rubikCube");

export default function RubiksCubePage() {
  const course = courses.find((c) => c.id === 3); // Rubik's Cube course

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Rubik's Cube", url: "/courses/rubiks-cube" },
  ]);

  const courseSchema = getCourseSchema({
    name: course.name,
    description: course.description,
    url: `/courses/${course.slug}`,
    ageGroup: course.ageRange,
  });

  const faqSchema = getFAQSchema(faqRubik);

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
      <CourseLayout course={course} faqs={faqRubik} allCourses={courses}  />
    </>
  );
}
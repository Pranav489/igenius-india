import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import SchoolProjectHero from "@/components/school-project/SchoolProjectHero";
import SchoolProjectFeatures from "@/components/school-project/SchoolProjectFeatures";
import SchoolProjectStats from "@/components/school-project/SchoolProjectStats";
import SchoolProjectProcess from "@/components/school-project/SchoolProjectProcess";
import PartnerSchools from "@/components/school-project/PartnerSchools";
import SchoolProjectCTA from "@/components/school-project/SchoolProjectCTA";
import { companyInfo, partnerSchools, schoolProjectStats } from "@/lib/data";

export const metadata = buildMetadata("school-project");

export default function SchoolProjectPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "School Project", url: "/school-project" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SchoolProjectHero />
      <SchoolProjectFeatures />
      <SchoolProjectStats stats={schoolProjectStats} />
      <SchoolProjectProcess />
      <PartnerSchools schools={partnerSchools} />
      <SchoolProjectCTA />
    </>
  );
}
import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseBenefits from "@/components/franchise/FranchiseBenefits";
import FranchiseStats from "@/components/franchise/FranchiseStats";
import CenterSearch from "@/components/franchise/CenterSearch";
import FranchiseMap from "@/components/franchise/FranchiseMap";
import FranchiseProcess from "@/components/franchise/FranchiseProcess";
import FranchiseTestimonials from "@/components/franchise/FranchiseTestimonials";
import FranchiseCTA from "@/components/franchise/FranchiseCTA";
import { franchiseStats, franchiseTestimonials, centersData } from "@/lib/data";

export const metadata = buildMetadata("franchise");

export default function FranchisePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Franchise", url: "/franchise" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <FranchiseHero />
      <FranchiseBenefits />
      <FranchiseStats stats={franchiseStats} />
      <CenterSearch centersData={centersData} />
      <FranchiseMap centersData={centersData} />
      <FranchiseProcess />
      <FranchiseTestimonials testimonials={franchiseTestimonials} />
      <FranchiseCTA />
    </>
  );
}
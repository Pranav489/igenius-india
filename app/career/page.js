import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import CareersHero from "@/components/careers/CareersHero";
import OpenPositions from "@/components/careers/OpenPositions";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { openPositions } from "@/lib/data";

export const metadata = buildMetadata("career");

export default function CareersPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <CareersHero />
      <WhyJoinUs />
      <OpenPositions positions={openPositions} />
      <ApplicationForm positions={openPositions} />
    </>
  );
}
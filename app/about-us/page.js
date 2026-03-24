import { buildMetadata, getBreadcrumbSchema, getOrganizationSchema } from "@/utils/seoConfig";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import LeadersSection from "@/components/about/LeadersSection";
import TeamSection from "@/components/about/TeamSection";
import { companyInfo, about, stats, leaders, team } from "@/lib/data";
import AboutCTA from "@/components/about/AboutCTA";
import OurAchievements from "@/components/about/OurAchievements";

export const metadata = buildMetadata("about");

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <AboutHero />
      <AboutStory />
      <MissionVision />
      <WhyChooseUs />
      <LeadersSection leaders={leaders} />
      <TeamSection team={team} />
      <OurAchievements /> 
      <AboutCTA />
    </>
  );
}
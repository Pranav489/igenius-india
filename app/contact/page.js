import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import { companyInfo } from "@/lib/data";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <ContactForm />
          <ContactMap />
        </div>
      </div>
      <ContactInfo />
      
    </>
  );
}
import { notFound } from 'next/navigation';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { centersData } from '@/lib/data';
import { siteSEO } from '@/utils/seoConfig';
import AreaFilter from '@/components/franchise/AreaFilter';
import CentersList from '@/components/franchise/CentersList';
import PopularDistricts from '@/components/franchise/PopularDistricts';

// Generate metadata dynamically for each district
export async function generateMetadata({ params }) {
  const { district: districtSlug } = await params;
  
  const districtName = Object.values(
    centersData.reduce((acc, center) => {
      acc[center.district] = center.district;
      return acc;
    }, {})
  ).find(d => d.toLowerCase().replace(/\s+/g, '-') === districtSlug);
  
  if (!districtName) {
    return {
      title: "Center Not Found",
      description: "The requested center could not be found."
    };
  }

  const centersInDistrict = centersData.filter(c => c.district === districtName);
  const centerCount = centersInDistrict.length;

  return {
    title: `I-Genius Abacus Centers in ${districtName} | ${siteSEO.siteName}`,
    description: `Find ${centerCount} I-Genius Abacus centers in ${districtName}. Get address, contact number, and location details. Book a free demo class at your nearest center.`,
    keywords: `abacus classes in ${districtName}, abacus centers in ${districtName}, I-Genius ${districtName}, mental math classes ${districtName}`,
    openGraph: {
      title: `I-Genius Abacus Centers in ${districtName}`,
      description: `Find ${centerCount} I-Genius Abacus centers in ${districtName}. Get contact details and location information.`,
      url: `${siteSEO.baseUrl}/franchise/${districtSlug}`,
      type: "website"
    },
    alternates: {
      canonical: `${siteSEO.baseUrl}/franchise/${districtSlug}`
    }
  };
}

export async function generateStaticParams() {
  const districts = [...new Set(centersData.map(center => center.district))];
  return districts.map(district => ({ district: district.toLowerCase().replace(/\s+/g, '-') }));
}

export default async function DistrictPage({ params }) {
  const { district: districtSlug } = await params;
  
  const districtName = Object.values(
    centersData.reduce((acc, center) => {
      acc[center.district] = center.district;
      return acc;
    }, {})
  ).find(d => d.toLowerCase().replace(/\s+/g, '-') === districtSlug);
  
  if (!districtName) {
    notFound();
  }

  const districtCenters = centersData.filter(center => center.district === districtName);
  const areas = [...new Set(districtCenters.map(center => center.area))];
  const popularDistricts = ['Nashik', 'Pune', 'Mumbai', 'Nagpur', 'Aurangabad'];

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteSEO.baseUrl}/` },
              { "@type": "ListItem", "position": 2, "name": "Franchise", "item": `${siteSEO.baseUrl}/franchise` },
              { "@type": "ListItem", "position": 3, "name": districtName, "item": `${siteSEO.baseUrl}/franchise/${districtSlug}` }
            ]
          })
        }}
      />

      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `I-Genius Centers in ${districtName}`,
            "description": `Find all I-Genius Abacus centers in ${districtName}. Contact details, addresses, and locations.`,
            "numberOfItems": districtCenters.length,
            "itemListElement": districtCenters.map((center, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": center.centerName,
              "url": `${siteSEO.baseUrl}/franchise/${districtSlug}/${center.area.toLowerCase().replace(/\s+/g, '-')}/${center.id}`
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-24 overflow-hidden bg-gradient-to-br from-[#395245] to-[#395245]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Centers in <span className="text-yellow">{districtName}</span>
            </h1>
            <p className="font-body text-white/80 text-base max-w-2xl mx-auto">
              Find the nearest I-Genius Abacus center in your area
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FaMapMarkerAlt className="text-yellow text-sm" />
              <span className="text-white text-sm">{districtCenters.length} Centers Available</span>
            </div>
          </div>
        </div>
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

      {/* Centers List Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Area Filter - Client Component */}
          <div className="mb-8">
            <AreaFilter areas={areas} />
          </div>

          {/* Centers Grid - Client Component */}
          <CentersList centers={districtCenters} districtSlug={districtSlug} />

          {/* Popular Districts - Client Component */}
          <div className="mt-12 text-center">
            <p className="font-body text-dark-green/60 text-sm mb-3">Popular Districts:</p>
            <PopularDistricts districts={popularDistricts} />
          </div>
        </div>
      </section>
    </>
  );
}
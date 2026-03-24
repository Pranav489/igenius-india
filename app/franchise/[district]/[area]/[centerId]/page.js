import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaStar, FaMapMarkerAlt, FaPhone, FaLocationArrow, FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { centersData } from '@/lib/data';
import { siteSEO, getLocalBusinessSchema } from '@/utils/seoConfig';

// Generate metadata dynamically for each center
export async function generateMetadata({ params }) {
  const { district, area, centerId } = await params;
  
  const center = centersData.find(c => 
    c.id === parseInt(centerId) && 
    c.district.toLowerCase().replace(/\s+/g, '-') === district &&
    c.area.toLowerCase().replace(/\s+/g, '-') === area
  );

  if (!center) {
    return {
      title: "Center Not Found",
      description: "The requested center could not be found."
    };
  }

  return {
    title: `${center.centerName} | Abacus Classes in ${center.area}, ${center.district} | ${siteSEO.siteName}`,
    description: `Visit ${center.centerName} at ${center.address}, ${center.area}, ${center.district}. Contact ${center.contactNumber} for abacus classes. Book a free demo today!`,
    keywords: `abacus classes in ${center.area}, abacus classes in ${center.district}, ${center.centerName}, I-Genius ${center.area}`,
    openGraph: {
      title: `${center.centerName} - Abacus Classes in ${center.area}, ${center.district}`,
      description: `Get complete details of ${center.centerName}. Address: ${center.address}, ${center.area}, ${center.district}. Contact: ${center.contactNumber}`,
      url: `${siteSEO.baseUrl}/franchise/${district}/${area}/${centerId}`,
      type: "website",
      images: center.image ? [{ url: center.image }] : []
    },
    alternates: {
      canonical: `${siteSEO.baseUrl}/franchise/${district}/${area}/${centerId}`
    }
  };
}

export async function generateStaticParams() {
  return centersData.map(center => ({
    district: center.district.toLowerCase().replace(/\s+/g, '-'),
    area: center.area.toLowerCase().replace(/\s+/g, '-'),
    centerId: center.id.toString()
  }));
}

export default async function CenterDetailPage({ params }) {
  const { district, area, centerId } = await params;
  
  const center = centersData.find(c => 
    c.id === parseInt(centerId) && 
    c.district.toLowerCase().replace(/\s+/g, '-') === district &&
    c.area.toLowerCase().replace(/\s+/g, '-') === area
  );

  if (!center) {
    notFound();
  }

  const localBusinessSchema = getLocalBusinessSchema(center);

  // Google Maps embed URL - Using coordinates for precise location
  const googleMapsEmbedUrl = center.lat && center.lng
    ? `https://maps.google.com/maps?q=${center.lat},${center.lng}&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(center.address + ', ' + center.area + ', ' + center.district)}&output=embed`;
  
  const googleMapsDirectionsUrl = center.lat && center.lng
    ? `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`
    : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(center.address + ', ' + center.area + ', ' + center.district)}`;

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
              { "@type": "ListItem", "position": 3, "name": center.district, "item": `${siteSEO.baseUrl}/franchise/${district}` },
              { "@type": "ListItem", "position": 4, "name": center.centerName, "item": `${siteSEO.baseUrl}/franchise/${district}/${area}/${centerId}` }
            ]
          })
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero Section */}
<section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-24 overflow-hidden bg-gradient-to-br from-[#395245] to-[#395245]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href={`/franchise/${district}`} className="inline-flex items-center gap-2 text-white/60 hover:text-yellow mb-6 transition-colors">
            <FaArrowLeft className="text-sm" />
            <span className="text-sm">Back to {center.district} Centers</span>
          </Link>
          
          <div className="text-center">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {center.centerName}
            </h1>
            <p className="font-accent text-yellow text-lg mb-4">{center.area}, {center.district}</p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FaStar className="text-yellow text-sm" />
              <span className="text-white text-sm">Authorised Franchisee</span>
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

      {/* Center Details */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-gold-tan/30 overflow-hidden shadow-lg">
            {/* Google Maps Embed - Using coordinates for precise location */}
            <div className="relative h-[300px] md:h-[400px] w-full">
              <iframe
                src={googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Details */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-primary-red text-lg" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-dark-green text-sm">Address</h3>
                      <p className="font-body text-dark-green/70 text-sm mt-1">{center.address}</p>
                      <p className="font-body text-dark-green/70 text-sm mt-1">{center.area}, {center.district}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaStar className="text-primary-red text-lg" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-dark-green text-sm">Landmark</h3>
                      <p className="font-body text-dark-green/70 text-sm mt-1">{center.landmark || "Near Main Road"}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-primary-red text-lg" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-dark-green text-sm">Contact Number</h3>
                      <a href={`tel:${center.contactNumber}`} className="font-body text-dark-green/70 text-sm mt-1 hover:text-primary-red transition-colors block">
                        {center.contactNumber}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaUserCircle className="text-primary-red text-lg" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-dark-green text-sm">Authorised Franchisee</h3>
                      <p className="font-body text-dark-green/70 text-sm mt-1">
                        {center.authorizedFranchisee || "I-Genius Academy"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Directions Button */}
              <div className="pt-4 border-t border-gold-tan/20">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-red hover:text-primary-red/80 transition-colors group"
                >
                  <FaLocationArrow className="text-sm group-hover:translate-x-1 transition-transform" />
                  <span className="font-body text-sm">
                     Get Directions
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
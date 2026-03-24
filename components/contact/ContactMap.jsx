// components/contact/ContactMap.jsx
'use client';

import { FaStar, FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';

const ContactMap = () => {
  const officeLat = 20.0059;
  const officeLng = 73.7897;

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${officeLat},${officeLng}&output=embed`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${officeLat},${officeLng}`;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#dbc18c]/30 p-6 md:p-8 shadow-lg">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-yellow/20 px-3 py-1.5 rounded-full mb-4">
          <FaStar className="text-yellow text-xs" />
          <span className="font-headline text-xs text-dark-green">Find Us Here</span>
        </div>
        <h3 className="font-headline text-2xl font-bold text-dark-green">Our Location</h3>
        <p className="font-body text-dark-green/60 text-sm mt-1">Visit our head office in Nashik</p>
      </div>

      {/* Map Container */}
      <div className="relative rounded-xl overflow-hidden border-2 border-[#dbc18c]/30 mb-4">
        <div className="relative w-full h-[300px] md:h-[350px]">
          <iframe
            src={googleMapsEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md border border-[#dbc18c]/30">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-red rounded-full"></div>
            <span className="font-body text-xs text-dark-green">I-Genius Head Office</span>
          </div>
        </div>
      </div>

      {/* Address Details */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#ea1e2510" }}>
            <FaMapMarkerAlt className="text-primary-red text-sm" />
          </div>
          <div>
            <h4 className="font-headline font-bold text-dark-green text-sm">Head Office</h4>
            <p className="font-body text-dark-green/70 text-xs leading-relaxed mt-1">
              Office No. 7/8/9, 2nd Floor Silver Plaza,<br />
              Opp. BSNL Office, Canada Corner Sharanpur Road,<br />
              Nashik - 422001, Maharashtra, India
            </p>
          </div>
        </div>

        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-red hover:text-primary-red/80 transition-colors group mt-2"
        >
          <FaLocationArrow className="text-sm group-hover:translate-x-1 transition-transform" />
          <span className="font-body text-sm">Get Directions on Google Maps</span>
        </a>
      </div>

      {/* Nearby Landmarks */}
      <div className="mt-6 pt-4 border-t border-[#dbc18c]/20">
        <h4 className="font-headline font-bold text-dark-green text-sm mb-2">Nearby Landmarks</h4>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow"></div>
            <span className="font-body text-xs text-dark-green/60">Opposite BSNL Office</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow"></div>
            <span className="font-body text-xs text-dark-green/60">Near Canada Corner Signal</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow"></div>
            <span className="font-body text-xs text-dark-green/60">5 mins from Nashik Railway Station</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMap;
// components/franchise/CenterCard.jsx
'use client';

import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaUserCircle } from 'react-icons/fa';

const CenterCard = ({ center, districtSlug }) => {
  return (
    <Link
      href={`/franchise/${districtSlug}/${center.area.toLowerCase().replace(/\s+/g, '-')}/${center.id}`}
      className="center-card group relative bg-white rounded-2xl p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 block"
      data-area={center.area}
    >
      <div className="absolute -top-2 -left-2 w-6 h-6">
        <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <FaMapMarkerAlt className="text-primary-red text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="font-headline font-bold text-dark-green text-lg">{center.centerName}</h3>
          <p className="font-accent text-primary-red text-sm mt-1">{center.area}</p>
          <p className="font-body text-dark-green/60 text-xs mt-2">{center.address}</p>
          
          {/* Authorised Franchisee */}
          {center.authorizedFranchisee && (
            <div className="flex items-center gap-2 mt-2">
              <FaUserCircle className="text-yellow text-xs" />
              <span className="font-body text-xs text-dark-green/60">
                {center.authorizedFranchisee}
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-2 mt-2">
            <FaPhone className="text-yellow text-xs" />
            <span className="font-body text-xs text-dark-green/70">{center.contactNumber}</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-primary-red text-xs">
            <span>View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CenterCard;
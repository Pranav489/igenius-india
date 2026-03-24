'use client';

import CenterCard from './CenterCard';

const CentersList = ({ centers, districtSlug }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {centers.map((center) => (
        <CenterCard 
          key={center.id} 
          center={center} 
          districtSlug={districtSlug} 
        />
      ))}
    </div>
  );
};

export default CentersList;
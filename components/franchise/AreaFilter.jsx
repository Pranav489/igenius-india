'use client';

import { FaSearch } from 'react-icons/fa';

const AreaFilter = ({ areas }) => {
  return (
    <div className="relative max-w-md mx-auto">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-green/40" />
      <select
        id="area-filter"
        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green bg-white"
        onChange={(e) => {
          const area = e.target.value;
          const cards = document.querySelectorAll('.center-card');
          cards.forEach(card => {
            if (area === '' || card.dataset.area === area) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        }}
      >
        <option value="">All Areas</option>
        {areas.map(area => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>
    </div>
  );
};

export default AreaFilter;
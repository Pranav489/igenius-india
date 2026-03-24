'use client';

import { useRouter } from 'next/navigation';

const PopularDistricts = ({ districts }) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {districts.map((district) => (
        <button
          key={district}
          onClick={() => router.push(`/franchise/${district.toLowerCase()}`)}
          className="px-3 py-1.5 bg-yellow/10 rounded-full text-xs font-headline text-dark-green hover:bg-yellow/20 transition-colors"
        >
          {district}
        </button>
      ))}
    </div>
  );
};

export default PopularDistricts;
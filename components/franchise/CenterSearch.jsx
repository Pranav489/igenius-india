'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaStar, FaSearch, FaMapMarkerAlt, FaCity } from 'react-icons/fa';

const CenterSearch = ({ centersData }) => {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  // Extract unique states from centers data
  useEffect(() => {
    if (centersData && centersData.length > 0) {
      const uniqueStates = [...new Set(centersData.map(center => center.state))];
      setStates(uniqueStates);
    }
  }, [centersData]);

  // Update districts when state changes
  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedDistrict('');
    const filteredDistricts = [...new Set(
      centersData.filter(center => center.state === state).map(center => center.district)
    )];
    setDistricts(filteredDistricts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDistrict) {
      router.push(`/franchise/${selectedDistrict.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <div className="absolute -left-8 -top-4">
              <FaStar className="text-yellow text-xl rotate-12" />
            </div>
            <div className="absolute -right-8 -bottom-4">
              <FaStar className="text-yellow text-xl -rotate-12" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-dark-green">
              Find a <span className="text-primary-red">Center Near You</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Search for I-Genius Abacus centers in your area
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gold-tan/30 shadow-lg">
            <div className="space-y-5">
              {/* State Dropdown */}
              <div>
                <label className="block font-headline text-dark-green text-sm mb-2 flex items-center gap-2">
                  <FaCity className="text-primary-red text-sm" />
                  Select State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green bg-white"
                  required
                >
                  <option value="">-- Select State --</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* District Dropdown */}
              <div>
                <label className="block font-headline text-dark-green text-sm mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary-red text-sm" />
                  Select District
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green bg-white"
                  disabled={!selectedState}
                  required
                >
                  <option value="">-- Select District --</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedDistrict}
                className={`w-full sticker-btn !px-6 !py-3 text-base inline-flex items-center justify-center gap-2 group ${selectedDistrict ? 'bg-primary-red text-white hover:bg-primary-red/90' : 'bg-gold-tan/50 text-dark-green/50 cursor-not-allowed'}`}
              >
                <FaSearch className="text-white group-hover:scale-110 transition-transform" />
                <span className="font-headline font-bold">Find Centers</span>
              </button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="mt-6 text-center">
            <p className="font-body text-dark-green/60 text-sm mb-3">Popular Districts:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Nashik', 'Pune', 'Mumbai', 'Nagpur', 'Aurangabad'].map((district) => (
                <button
                  key={district}
                  onClick={() => router.push(`/franchise/${district.toLowerCase()}`)}
                  className="px-3 py-1.5 bg-yellow/10 rounded-full text-xs font-headline text-dark-green hover:bg-yellow/20 transition-colors"
                >
                  {district}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterSearch;
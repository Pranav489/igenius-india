'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const FranchiseMap = ({ centersData }) => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Get center locations for display
  const centerLocations = centersData?.filter(c => c.lat && c.lng) || [];

  useEffect(() => {
    // Load Leaflet CSS and JS dynamically
    const loadLeaflet = async () => {
      if (typeof window === 'undefined') return;
      
      // Check if already loaded
      if (window.L) {
        initMap();
        return;
      }

      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        initMap();
      };
      document.body.appendChild(script);
    };

    const initMap = () => {
      const L = window.L;
      if (!L || !mapRef.current) return;

      // Center map on India
      const map = L.map(mapRef.current).setView([20.5937, 78.9629], 5);
      
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add markers for each center
      centerLocations.forEach((center) => {
        const marker = L.marker([center.lat, center.lng]).addTo(map);
        
        // Create popup content
        const popupContent = `
          <div class="p-2" style="min-width: 200px;">
            <h4 class="font-bold text-dark-green text-sm" style="font-family: inherit;">${center.centerName}</h4>
            <p class="text-xs text-dark-green/70 mt-1" style="font-family: inherit;">${center.area}, ${center.district}</p>
            <p class="text-xs text-primary-red mt-1" style="font-family: inherit;">${center.contactNumber}</p>
            <a href="/franchise/${center.district.toLowerCase().replace(/\s+/g, '-')}/${center.area.toLowerCase().replace(/\s+/g, '-')}/${center.id}" 
               class="inline-block mt-2 text-xs text-primary-red hover:underline" style="font-family: inherit;">View Details →</a>
          </div>
        `;
        
        marker.bindPopup(popupContent);
      });

      setMapLoaded(true);
    };

    loadLeaflet();

    return () => {
      // Cleanup
      if (mapRef.current && window.L && window.L.DomUtil) {
        const map = mapRef.current._leaflet_map;
        if (map) {
          map.remove();
        }
      }
    };
  }, [centerLocations]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
              Our <span className="text-primary-red">Network Map</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            {centerLocations.length}+ Centers across India
          </p>
        </div>

        {/* Leaflet Map Container */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-gold-tan/30 shadow-xl">
          <div 
            ref={mapRef} 
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100"
          />
          
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <FaMapMarkerAlt className="text-primary-red text-4xl animate-pulse mx-auto mb-3" />
                <p className="font-body text-dark-green/70">Loading map...</p>
              </div>
            </div>
          )}
          
          {/* Map Legend */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gold-tan/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-red rounded-full"></div>
              <span className="font-body text-xs text-dark-green">I-Genius Centers</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <FaStar className="text-yellow text-xs" />
              <span className="font-body text-xs text-dark-green">{centerLocations.length}+ Locations</span>
            </div>
          </div>
        </div>

        {/* Center Count */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-yellow/20 px-4 py-2 rounded-full border border-yellow/30">
            <FaMapMarkerAlt className="text-yellow text-sm" />
            <span className="font-headline text-xs font-medium text-dark-green">
              {centerLocations.length} Centers Displayed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseMap;
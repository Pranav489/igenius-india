"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button — Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <a
          href={companyInfo.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setShowTooltip("whatsapp")}
          onMouseLeave={() => setShowTooltip(null)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
          style={{
            background: "#25D366",
            animation: "whatsapp-pulse 2s ease-in-out infinite",
          }}
        >
          <MessageCircle size={26} strokeWidth={1.8} />
          {showTooltip === "whatsapp" && (
            <div className="absolute right-16 bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
              Chat on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-800 rotate-45" />
            </div>
          )}
        </a>
      </div>

      {/* Call Button — Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          aria-label="Call I-Genius"
          onMouseEnter={() => setShowTooltip("call")}
          onMouseLeave={() => setShowTooltip(null)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
          style={{
            background: "var(--color-primary-red)",
            animation: "pulse-glow 2s ease-in-out infinite",
          }}
        >
          <Phone size={22} strokeWidth={1.8} />
          {showTooltip === "call" && (
            <div className="absolute left-16 bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
              Call Now: {companyInfo.phone}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45" />
            </div>
          )}
        </a>
      </div>

      <style jsx global>{`
        @keyframes whatsapp-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(234, 30, 37, 0.4); }
          50% { box-shadow: 0 0 0 14px rgba(234, 30, 37, 0); }
        }
      `}</style>
    </>
  );
}

import Link from "next/link";
import { Home } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";

export const metadata = {
  title: "Page Not Found | I-Genius Abacus Academy",
  description: "Sorry, the page you're looking for doesn't exist. Return to I-Genius Abacus Academy homepage.",
};

export default function NotFound() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Abacus Course", href: "/courses/abacus" },
    { label: "Vedic Math", href: "/courses/vedic-math" },
    { label: "Franchise", href: "/franchise" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-dark-green relative overflow-hidden">
      <div className="absolute inset-0 doodle-stars-bg opacity-10 pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <div className="handdrawn-circle w-full h-full border-yellow"></div>
      </div>
      <div className="absolute bottom-10 left-10 w-28 h-28 opacity-10">
        <div className="handdrawn-circle w-full h-full border-sky-blue"></div>
      </div>

      <div className="text-center max-w-lg relative z-10">
        {/* 404 Number */}
        <div className="font-headline text-9xl font-bold text-white/10 leading-none mb-6 select-none">
          404
        </div>

        {/* Emoji */}
        <div className="text-6xl mb-6">🧠</div>

        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-white mb-4">
          Page Not <span className="text-yellow">Found</span>
        </h1>
        <p className="text-white/70 text-base mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for seems to have gone on a brain-training adventure. Let&apos;s get you back on track.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/" className="sticker-btn sticker-btn-secondary inline-flex items-center justify-center gap-2">
            <Home size={16} />
            Back to Homepage
          </Link>
          <Link href="/contact" className="sticker-btn inline-flex items-center justify-center gap-2">
            Contact Us
            <FaChevronRight size={12} />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white/50 text-sm mb-4">Or try one of these pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-headline font-medium text-white hover:bg-white/10 border border-white/20 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

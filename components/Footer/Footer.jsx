// components/Footer/Footer.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaCertificate,
  FaAward
} from 'react-icons/fa';
import { navItems, courses, companyInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // FIXED: Use slug to create proper href
  const footerCourses = courses.map(course => ({
    name: course.name,
    href: `/courses/${course.slug}`, // Use slug to create proper URL
  }));

  // Quick links from navItems (excluding dropdowns)
  const quickLinks = navItems
    .filter(item => !['Courses', 'Media'].includes(item.name))
    .map(item => ({
      name: item.name,
      href: item.href,
    }));

  return (
    <footer className="relative bg-dark-green text-white overflow-hidden">
      {/* Decorative Doodle Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64">
          <div className="doodle-pattern-stars w-full h-full"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96">
          <div className="doodle-pattern-circles w-full h-full"></div>
        </div>
      </div>

      {/* Main Footer - FIXED: Changed container to max-w-7xl with consistent spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        
        {/* Footer Top - Logo & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-gold-tan/30">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="relative h-20 w-auto mb-4">
              <Image
                src="/images/igenius-logo.png" // You may need a white version of your logo
                alt={companyInfo.fullName}
                width={200}
                height={80}
                className="object-contain w-auto h-full"
              />
            </div>
            <p className="text-gold-tan/90 font-accent text-lg mb-4">
              {companyInfo.tagline}
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {companyInfo.fullName} has been pioneering abacus education since {companyInfo.founded}, 
              empowering over 1.5 lakh students with brain development programs across India and abroad.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl">
                <FaCertificate className="text-yellow" />
                <span className="text-xs font-medium">{companyInfo.iso}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl">
                <FaAward className="text-yellow" />
                <span className="text-xs font-medium">Govt. Authorised</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">
              <FaStar className="text-yellow text-sm" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-3">
            <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">
              <FaStar className="text-yellow text-sm" />
              Our Courses
            </h3>
            <ul className="space-y-2">
              {footerCourses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href} // Now this will be like "/courses/abacus"
                    className="text-white/70 hover:text-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {course.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="text-yellow hover:text-white transition-colors duration-300 font-medium mt-2 inline-block"
                >
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">
              <FaStar className="text-yellow text-sm" />
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-start gap-3 text-white/70 hover:text-yellow transition-colors duration-300 group"
              >
                <FaPhone className="text-yellow mt-1 flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </a>
              
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-3 text-white/70 hover:text-yellow transition-colors duration-300 group"
              >
                <FaEnvelope className="text-yellow mt-1 flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </a>
              
              <div className="flex items-start gap-3 text-white/70">
                <FaMapMarkerAlt className="text-yellow mt-1 flex-shrink-0" />
                <address className="not-italic text-sm leading-relaxed">
                  {companyInfo.address.line1}<br />
                  {companyInfo.address.line2}<br />
                  {companyInfo.address.city} - {companyInfo.address.pincode}<br />
                  {companyInfo.address.state}, {companyInfo.address.country}
                </address>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper !w-10 !h-10 bg-white/10 hover:bg-yellow group transition-all duration-300"
              >
                <FaFacebookF className="text-white group-hover:text-dark-green" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper !w-10 !h-10 bg-white/10 hover:bg-yellow group transition-all duration-300"
              >
                <FaInstagram className="text-white group-hover:text-dark-green" />
              </a>
              <a
                href={companyInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper !w-10 !h-10 bg-white/10 hover:bg-yellow group transition-all duration-300"
              >
                <FaYoutube className="text-white group-hover:text-dark-green" />
              </a>
              <a
                href={companyInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper !w-10 !h-10 bg-white/10 hover:bg-yellow group transition-all duration-300"
              >
                <FaWhatsapp className="text-white group-hover:text-dark-green" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} {companyInfo.fullName}. All rights reserved.
            <span className="mx-2">|</span>
            <span className="font-accent">{companyInfo.tagline}</span>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-white/60 hover:text-yellow transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-yellow transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/refund-policy"
              className="text-white/60 hover:text-yellow transition-colors duration-300"
            >
              Refund Policy
            </Link>
            <Link
              href="/sitemap"
              className="text-white/60 hover:text-yellow transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>

        {/* World Record Badge */}
        <div className="mt-6 text-center">
          <span className="inline-flex items-center gap-2 text-xs text-gold-tan/70 font-accent bg-white/5 px-4 py-2 rounded-full">
            <FaAward className="text-yellow" />
            {companyInfo.worldRecord}
            <FaAward className="text-yellow" />
          </span>
        </div>
      </div>

      {/* Decorative Footer Doodle */}
      <div className="footer-doodle"></div>
    </footer>
  );
};

export default Footer;
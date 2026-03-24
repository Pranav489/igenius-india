// components/contact/ContactInfo.jsx
'use client';

import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { companyInfo } from '@/lib/data';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: [
        companyInfo.address.line1,
        companyInfo.address.line2,
        `${companyInfo.address.city} - ${companyInfo.address.pincode}`,
        `${companyInfo.address.state}, ${companyInfo.address.country}`
      ],
      color: "text-primary-red",
      bgColor: "#ea1e25"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: [
        companyInfo.phone,
        "Mon - Sat: 9:00 AM - 6:00 PM"
      ],
      color: "text-sky-blue",
      bgColor: "#1a90be",
      link: `tel:${companyInfo.phone}`
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: [
        companyInfo.email,
        "We respond within 24 hours"
      ],
      color: "text-green",
      bgColor: "#71bc4a",
      link: `mailto:${companyInfo.email}`
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: Closed"
      ],
      color: "text-orange",
      bgColor: "#f18526"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
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
              Get in <span className="text-primary-red">Touch</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            We'd love to hear from you. Reach out through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border-2 border-gold-tan/30 hover:border-primary-red transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <div className="handdrawn-circle w-full h-full border-yellow/50"></div>
              </div>
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transform rotate-3 group-hover:rotate-0 transition-all"
                style={{ backgroundColor: `${detail.bgColor}10` }}
              >
                <detail.icon className={`${detail.color} text-2xl`} />
              </div>
              <h3 className={`font-headline font-bold text-lg ${detail.color} mb-3`}>{detail.title}</h3>
              <div className="space-y-1">
                {detail.details.map((line, idx) => (
                  detail.link ? (
                    <a
                      key={idx}
                      href={detail.link}
                      className="font-body text-dark-green/70 text-sm block hover:text-primary-red transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={idx} className="font-body text-dark-green/70 text-sm">{line}</p>
                  )
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mt-10">
          <h3 className="font-headline text-lg font-bold text-dark-green mb-4">Connect With Us</h3>
          <div className="flex justify-center gap-4">
            <a
              href={companyInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
              style={{ backgroundColor: "#ea1e2510" }}
            >
              <FaFacebookF className="text-primary-red group-hover:text-white text-sm" />
            </a>
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
              style={{ backgroundColor: "#ea1e2510" }}
            >
              <FaInstagram className="text-primary-red group-hover:text-white text-sm" />
            </a>
            <a
              href={companyInfo.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
              style={{ backgroundColor: "#ea1e2510" }}
            >
              <FaYoutube className="text-primary-red group-hover:text-white text-sm" />
            </a>
            <a
              href={companyInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
              style={{ backgroundColor: "#ea1e2510" }}
            >
              <FaWhatsapp className="text-primary-red group-hover:text-white text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
// components/contact/ContactForm.jsx
'use client';

import { useState } from 'react';
import { FaStar, FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#dbc18c]/30 p-6 md:p-8 shadow-lg">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-yellow/20 px-3 py-1.5 rounded-full mb-4">
          <FaStar className="text-yellow text-xs" />
          <span className="font-headline text-xs text-dark-green">Send us a message</span>
        </div>
        <h3 className="font-headline text-2xl font-bold text-dark-green">Enquiry Form</h3>
        <p className="font-body text-dark-green/60 text-sm mt-1">Fill out the form and we'll get back to you shortly</p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheckCircle className="text-green text-3xl" />
          </div>
          <h3 className="font-headline text-xl font-bold text-dark-green mb-2">Message Sent!</h3>
          <p className="font-body text-dark-green/70">Thank you for reaching out. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-headline text-dark-green text-sm mb-2 flex items-center gap-2">
              <FaUser className="text-primary-red text-sm" />
              Full Name <span className="text-primary-red">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-[#dbc18c]/30 focus:border-primary-red focus:outline-none font-body text-dark-green"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-headline text-dark-green text-sm mb-2 flex items-center gap-2">
                <FaEnvelope className="text-primary-red text-sm" />
                Email Address <span className="text-primary-red">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#dbc18c]/30 focus:border-primary-red focus:outline-none font-body text-dark-green"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block font-headline text-dark-green text-sm mb-2 flex items-center gap-2">
                <FaPhone className="text-primary-red text-sm" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#dbc18c]/30 focus:border-primary-red focus:outline-none font-body text-dark-green"
                placeholder="+91 12345 67890"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block font-headline text-dark-green text-sm mb-2">Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#dbc18c]/30 focus:border-primary-red focus:outline-none font-body text-dark-green bg-white"
            >
              <option value="">Select a subject</option>
              <option value="Course Enquiry">Course Enquiry</option>
              <option value="Franchise Enquiry">Franchise Enquiry</option>
              <option value="School Partnership">School Partnership</option>
              <option value="Demo Class Booking">Demo Class Booking</option>
              <option value="General Query">General Query</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block font-headline text-dark-green text-sm mb-2 flex items-center gap-2">
              <FaComment className="text-primary-red text-sm" />
              Message <span className="text-primary-red">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#dbc18c]/30 focus:border-primary-red focus:outline-none font-body text-dark-green resize-none"
              placeholder="Tell us how we can help you..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sticker-btn !py-3 bg-primary-red text-white inline-flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="text-white group-hover:translate-x-1 transition-transform" />
                <span className="font-headline font-bold">Send Message</span>
              </>
            )}
          </button>

          <p className="text-center text-xs text-dark-green/50 mt-4">
            By submitting this form, you agree to our privacy policy.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
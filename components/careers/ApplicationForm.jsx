'use client';

import { useState } from 'react';
import { FaStar, FaUser, FaEnvelope, FaPhone, FaFileAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ApplicationForm = ({ positions }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    qualification: '',
    message: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        qualification: '',
        message: '',
        resume: null
      });
    }, 3000);
  };

  return (
    <section id="application-form" className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <div className="absolute -left-8 -top-4">
              <FaStar className="text-yellow text-xl rotate-12" />
            </div>
            <div className="absolute -right-8 -bottom-4">
              <FaStar className="text-yellow text-xl -rotate-12" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-dark-green">
              Apply <span className="text-primary-red">Now</span>
            </h2>
          </div>
          <p className="font-body text-dark-green/70 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Fill out the form below to apply for your desired position
          </p>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gold-tan/30 p-6 md:p-8 shadow-lg">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-green text-3xl" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-dark-green mb-2">Application Submitted!</h3>
              <p className="font-body text-dark-green/70">Thank you for applying. We'll review your application and get back to you soon.</p>
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email and Phone - 2 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block font-headline text-dark-green text-sm mb-2 flex items-center gap-2">
                    <FaPhone className="text-primary-red text-sm" />
                    Phone Number <span className="text-primary-red">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              {/* Position and Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-headline text-dark-green text-sm mb-2 flex items-center gap-2">
                    <FaFileAlt className="text-primary-red text-sm" />
                    Applying For <span className="text-primary-red">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green bg-white"
                  >
                    <option value="">Select Position</option>
                    {positions.map(pos => (
                      <option key={pos.id} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-headline text-dark-green text-sm mb-2">Years of Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green"
                    placeholder="e.g., 2-3 years"
                  />
                </div>
              </div>

              {/* Qualification */}
              <div>
                <label className="block font-headline text-dark-green text-sm mb-2">Highest Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green"
                  placeholder="e.g., B.Com, M.Sc, etc."
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block font-headline text-dark-green text-sm mb-2">Resume / CV</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-headline file:bg-primary-red/10 file:text-primary-red hover:file:bg-primary-red/20"
                />
                <p className="text-xs text-dark-green/50 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              {/* Message/Additional Info */}
              <div>
                <label className="block font-headline text-dark-green text-sm mb-2">Why do you want to join I-Genius?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gold-tan/30 focus:border-primary-red focus:outline-none font-body text-dark-green resize-none"
                  placeholder="Tell us why you're passionate about this role..."
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
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-white group-hover:translate-x-1 transition-transform" />
                    <span className="font-headline font-bold">Submit Application</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-dark-green/50 mt-4">
                By submitting this application, you agree to our privacy policy. We'll keep your information confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
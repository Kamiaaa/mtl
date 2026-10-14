'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaHeadset, 
  FaPaperPlane, 
  FaAward,
  FaCheckCircle
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="Contact Us Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl tracking-tight font-aclonica text-gray-50 sm:text-3xl md:text-5xl mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

const Contact = () => {
  // Form submission state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'IP Transit',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submit logic or API call here
    setSubmitted(true);
  };

  // Key Contact Info Cards
  const contactCards = [
    {
      icon: FaMapMarkerAlt,
      title: 'Head Office',
      details: [
        'Police Plaza Concord, Tower-02',
        '(7th Floor) Plot # 02, Road # 144,',
        'Gulshan-1, Dhaka 1212, Bangladesh.',
      ],
      subtext: 'Corporate Headquarters',
    },
    {
      icon: FaPhoneAlt,
      title: 'Corporate Hotline',
      details: ['+8801730068810', '+8801730068811'],
      subtext: 'Saturday - Thursday, 10:00 AM - 5:00 PM',
    },
    {
      icon: FaHeadset,
      title: '24/7 NOC Technical Support',
      details: ['+8801730068810', '+8801730068811'],
      subtext: 'Round-the-clock Emergency Helpdesk',
    },
    {
      icon: FaEnvelope,
      title: 'Email Communications',
      details: ['contact@mango.com.bd', 'support@mango.com.bd'],
      subtext: 'Sales & General Inquiries',
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white text-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Global Hero Section */}
      <HeroSection
        title="Contact Us"
        description="Get in touch with our expert sales team or reach our 24/7 NOC operations helpdesk for dedicated support."
      />

      {/* Main Content Container */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Contact Info Cards Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 text-[#FECA26]">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <div className="space-y-1 mb-4">
                  {card.details.map((line, idx) => (
                    <p key={idx} className="text-slate-700 text-sm font-medium leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider pt-4 border-t border-slate-200">
                {card.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Form and Map Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Inquiry Form */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Send Us a Message
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Interested in IP Transit, IPLC, or DDoS Protection services? Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-amber-50 border border-[#FECA26] text-slate-800 p-6 rounded-xl text-center space-y-2 shadow-sm">
                <FaCheckCircle className="h-10 w-10 text-amber-500 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your inquiry has been received successfully. A representative from Mango Teleservices Ltd. will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FECA26] text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FECA26] text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 17XXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FECA26] text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="ISP / Enterprise Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FECA26] text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FECA26] text-sm bg-white"
                  >
                    <option value="IP Transit">International IP Transit</option>
                    <option value="IPLC">IPLC / Dedicated Circuit</option>
                    <option value="Data Connectivity">Data Connectivity Solutions</option>
                    <option value="DDoS Protection">DDoS Protection & Security</option>
                    <option value="Network Management">Network Monitoring & Management</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your bandwidth requirements or technical inquiries..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FECA26] text-sm bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FECA26] hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <FaPaperPlane className="h-4 w-4" /> Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Location Map & Office Info */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FaMapMarkerAlt className="text-amber-500" /> Visit Our Head Office
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Located at Police Plaza Concord in Gulshan-1, our corporate headquarters houses executive management, enterprise sales, and primary NOC support.
              </p>
            </div>

            {/* Embedded Interactive Google Map pointing specifically to Police Plaza Concord, Gulshan 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-96 w-full bg-slate-100">
              <iframe
                title="Mango Teleservices Head Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.538568285513!2d90.4128522!3d23.7780951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7711f18529f%3A0xb35a588b3941199!2sPolice%20Plaza%20Concord%20Shopping%20Mall!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaCogs, 
  FaCalculator, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaAward, 
  FaUsers, 
  FaLinkedin, 
  FaChartLine 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="Management Team Hero Background"
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

const ManagementTeam = () => {
  // Key Operational Stats Data
  const stats = [
    { icon: FaNetworkWired, value: '24/7/365', label: 'Network Operations Oversight' },
    { icon: FaChartLine, value: '100%', label: 'Financial Transparency & Compliance' },
    { icon: FaUsers, value: '50+', label: 'Specialized Engineers & Experts' },
    { icon: FaShieldAlt, value: '99.99%', label: 'SLA Operational Execution' },
  ];

  // Management Team Members Data
  const executives = [
    {
      name: 'Mohammad Selim',
      designation: 'General Manager - Accounts & Finance',
      image: '/img/gm.jpg', // Place photo in /public/img/team/
      bio: 'Oversees financial planning, corporate accounting, regulatory auditing, and billing operations, ensuring long-term financial stability and operational compliance.',
      icon: FaCalculator,
      linkedin: '#',
    },
    {
      name: 'Sharafat Ullah Zahid',
      designation: 'Chief Operating Officer (COO)',
      image: '/img/coo.jpg', // Place photo in /public/img/team/
      bio: 'Directs overall company operations, strategic business expansion, inter-operator relations, and service delivery across all International Internet Gateway (IIG) business verticals.',
      icon: FaCogs,
      linkedin: '#',
    },
    {
      name: 'Md Rahmatullah Jibon',
      designation: 'AGM - Technical Operations',
      image: '/img/agm.jpeg', // Place photo in /public/img/team/
      bio: 'Leads network architecture, transmission infrastructure, NOC management, BGP routing optimization, and submarine cable link maintenance to ensure zero-downtime performance.',
      icon: FaNetworkWired,
      linkedin: '#',
    },
  ];

  // Management Excellence Pillars
  const managementPillars = [
    {
      icon: FaCogs,
      title: 'Operational Excellence',
      description: 'Streamlining cross-functional workflows to ensure peak efficiency in carrier-grade bandwidth distribution.',
    },
    {
      icon: FaCalculator,
      title: 'Fiscal Integrity',
      description: 'Maintaining robust financial controls, audit-ready accounting, and transparent billing for all B2B clients.',
    },
    {
      icon: FaNetworkWired,
      title: 'Technical Precision',
      description: 'Pioneering cutting-edge routing technologies, DDoS defense systems, and low-latency transmission paths.',
    },
    {
      icon: FaShieldAlt,
      title: 'Uncompromised Quality',
      description: 'Enforcing strict service level agreements and proactive risk mitigation across domestic and global networks.',
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
        title="Leadership Team"
        description="Driven by dedicated industry professionals leading operations, financial management, and technical excellence at Mango Teleservices."
      />

      {/* Main Content Container */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Key Statistics Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200 shadow-sm"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#FECA26]/10 flex items-center justify-center text-[#FECA26]">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Management Team Member Cards Grid (3 Cards Layout) */}
        <motion.div variants={itemVariants} className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Key Executive Leaders</h2>
            <p className="text-slate-500">
              Meet the key personnel managing operations, technical infrastructure, and financial administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {executives.map((member, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div>
                  {/* Image Container with Dynamic Padding and Contain */}
                  <div className="relative h-80 sm:h-96 w-full bg-slate-200/60 p-4 flex items-center justify-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain drop-shadow-md"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-[#FECA26] border border-[#FECA26]/30 z-10">
                      <member.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-[#FECA26] font-medium text-sm">{member.designation}</p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-end">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#FECA26] hover:text-white transition-colors"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Operational Pillars Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Our Management Pillars</h2>
            <p className="text-slate-500">
              Core operational values that ensure quality service delivery and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                    <pillar.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ManagementTeam;
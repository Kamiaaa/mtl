'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaBriefcase, 
  FaUserGraduate, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaAward, 
  FaUsers, 
  FaRocket, 
  FaRegClock, 
  FaMapMarkerAlt, 
  FaArrowRight 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="Career Opportunities Hero Background"
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

const Career = () => {
  // Key Career Statistics Data
  const stats = [
    { icon: FaUsers, value: '150+', label: 'Passionate Professionals' },
    { icon: FaAward, value: 'Top IIG', label: 'Industry Standard' },
    { icon: FaRocket, value: 'Fast-Track', label: 'Career Growth Path' },
    { icon: FaUserGraduate, value: '24/7', label: 'Continuous Skill Development' },
  ];

  // Open Positions Data
  const openPositions = [
    {
      title: 'Senior Network Engineer (BGP & Transmission)',
      department: 'Technical Operations',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      experience: '3–5 Years',
      description: 'Responsible for BGP routing policies, submarine cable capacity expansion, and Core IP network optimization.',
    },
    {
      title: 'NOC Surveillance Specialist',
      department: 'Network Operations Center',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time (Rotational Shift)',
      experience: '1–2 Years',
      description: 'Proactively monitor core link availability, diagnose circuit degradation, and manage 24/7 incident handling.',
    },
    {
      title: 'Executive - Accounts & Finance',
      department: 'Finance & Accounts',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      experience: '2–4 Years',
      description: 'Manage inter-operator billing, auditing, regulatory compliance, and financial reporting for B2B client accounts.',
    },
    {
      title: 'Cybersecurity & Anti-DDoS Analyst',
      department: 'Network Security',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      experience: '2–4 Years',
      description: 'Analyze volumetric DDoS threat signatures, manage inline scrubbing centers, and tune dynamic BGP Flowspec rules.',
    },
  ];

  // Company Culture / Why Join Us Benefits
  const careerBenefits = [
    {
      icon: FaNetworkWired,
      title: 'Cutting-Edge Tech Stack',
      description: 'Work directly with high-capacity carrier-grade routing hardware, multi-terabit backbones, and advanced anti-DDoS systems.',
    },
    {
      icon: FaRocket,
      title: 'Accelerated Growth',
      description: 'Clear career progression metrics, performance-driven bonuses, and leadership opportunities across technical and managerial paths.',
    },
    {
      icon: FaUserGraduate,
      title: 'Professional Certifications',
      description: 'Sponsorship and training programs for industry certifications in CCIE, JNCIE, IPv6, and Advanced Cybersecurity.',
    },
    {
      icon: FaShieldAlt,
      title: 'Competitive Rewards',
      description: 'Attractive compensation package, health insurance coverage, provident fund, and annual performance incentives.',
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
        title="Join Our Team"
        description="Build your career at Bangladesh’s premier International Internet Gateway (IIG) operator and shape the nation's digital backbone."
      />

      {/* Main Content Container */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Culture & Work Environment Overview */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#FECA26] font-semibold tracking-wider uppercase text-sm">
              Life at Mango Teleservices
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Empowering Talent, Driving Innovation
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Mango Teleservices Ltd., we believe that our people are our strongest backbone. We foster an inclusive, 
              collaborative, and high-performance environment where network engineers, finance experts, and tech innovators thrive.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Whether you are an experienced telecommunication veteran or a motivated graduate looking to kickstart your career, 
              Mango Teleservices offers hands-on experience with enterprise-grade technology and national infrastructure.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/career.jpg" // Place your team workspace photo in /public/img/
              alt="Mango Teleservices Office Culture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Dynamic & Growth-Oriented Workplace
              </span>
            </div>
          </div>
        </motion.div>

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

        {/* Current Open Positions Section */}
        <motion.div variants={itemVariants} className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Current Job Openings</h2>
            <p className="text-slate-500">
              Explore available opportunities and take the next step in your professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((job, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FECA26] bg-[#FECA26]px-2.5 py-1 rounded-md border border-[#FECA26]">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <FaRegClock className="h-3.5 w-3.5" /> {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{job.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[#FECA26]" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBriefcase className="text-[#FECA26]" /> {job.experience}
                    </span>
                  </div>
                  <a
                    href="mailto:careers@mangoteleservices.com"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FECA26] hover:text-[#FECA26] transition-colors"
                  >
                    Apply Now <FaArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits / Why Join Us Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Work With Us?</h2>
            <p className="text-slate-500">
              We offer a supportive environment engineered for innovation, learning, and long-term career satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Spontaneous Application CTA Banner */}
        <motion.div
          variants={itemVariants}
          className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FECA26]/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Don’t See a Suitable Role?</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              We are always seeking exceptional talent in telecommunications engineering, NOC operations, and network security. Send us your CV and we will reach out when a matching role opens!
            </p>
            <div className="pt-2">
              <a
                href="mailto:careers@mangoteleservices.com?subject=Spontaneous Application - Mango Teleservices"
                className="inline-flex items-center gap-2 bg-[#FECA26] hover:bg-[#FECA26] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Send Your Resume <FaArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Career;
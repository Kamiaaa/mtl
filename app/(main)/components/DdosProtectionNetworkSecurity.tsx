'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaShieldAlt, 
  FaLock, 
  FaServer, 
  FaGlobe, 
  FaAward, 
  FaBug, 
  FaEye, 
  FaNetworkWired 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="Network Security Hero Background"
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

const DdosProtectionNetworkSecurity = () => {
  // Key Stats Data for DDoS & Security Solutions
  const stats = [
    { icon: FaShieldAlt, value: 'Multi-Gbps', label: 'DDoS Scrubbing Capacity' },
    { icon: FaLock, value: '< 1 Sec', label: 'Automated Attack Detection' },
    { icon: FaEye, value: '24/7/365', label: 'Active SOC Threat Monitoring' },
    { icon: FaServer, value: '99.99%', label: 'Clean Traffic Availability' },
  ];

  // Core Security Features & Highlights
  const securityFeatures = [
    {
      icon: FaShieldAlt,
      title: 'Volumetric & Application Scrubbing',
      description: 'Advanced real-time packet inspection to neutralize Layer 3, Layer 4 (SYN/UDP floods), and Layer 7 (HTTP/HTTPS) DDoS attacks.',
    },
    {
      icon: FaNetworkWired,
      title: 'Inline & BGP Flowspec Mitigation',
      description: 'Instant dynamic routing redirect to scrubbing centers via BGP Flowspec and automated Remotely Triggered Blackholing (RTBH).',
    },
    {
      icon: FaBug,
      title: 'Zero-Day Vulnerability Shield',
      description: 'Continuous heuristic and AI-driven behavioral analysis to identify and mitigate novel attack patterns before service degradation occurs.',
    },
    {
      icon: FaEye,
      title: 'Real-Time Telemetry & Reports',
      description: 'Comprehensive portal visibility giving enterprise clients deep insight into traffic flow, threat origins, and mitigation event analytics.',
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
        title="DDoS Protection & Network Security"
        description="Next-generation automated threat mitigation and enterprise-grade network security safeguarding Bangladesh’s digital infrastructure."
      />

      {/* Main Content Container */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Service Overview Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#FECA26] font-semibold tracking-wider uppercase text-sm">
              Carrier-Grade Cyber Defense
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices Security Solutions
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              As a leading International Internet Gateway (IIG) operator, Mango Teleservices Ltd. provides carrier-grade 
              DDoS mitigation and cybersecurity services engineered to shield ISPs, financial institutions, government portals, 
              and enterprise networks from complex cyber threats.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Our inline scrubbing architecture analyzes incoming internet traffic at line speed, instantly filtering out 
              malicious packets while allowing legitimate payload to pass uninterrupted—ensuring continuous business availability 
              even during massive multi-gigabit volumetric attacks.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/network-security.png" // Place your cybersecurity / network operation image in /public/img/
              alt="Cybersecurity and DDoS Scrubbing Center"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Carrier-Grade Anti-DDoS Scrubbing
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

        {/* Technical Capabilities & Security Pillars */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECA26]/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FECA26]" />
              Always-On & On-Demand Protection
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Choose flexible deployment models: Always-On mode for ultra-sensitive financial systems requiring zero-second mitigation delay, or On-Demand protection with BGP route diversion when an attack exceeds baseline thresholds.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Comprehensive SOC Security Assistance
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Backed by our 24/7 Security Operations Center (SOC), network engineers actively monitor threat signatures, tune protection rules, and formulate mitigation strategies tailored to your exact IP space and application traffic.
            </p>
          </div>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Our DDoS Security?</h2>
            <p className="text-slate-500">
              Zero latency impact on clean traffic, instant response time, and comprehensive attack mitigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DdosProtectionNetworkSecurity;
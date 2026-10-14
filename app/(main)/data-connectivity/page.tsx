'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaProjectDiagram, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaLock, 
  FaAward, 
  FaExchangeAlt, 
  FaBuilding, 
  FaClock 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="Data Connectivity Hero Background"
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

const DataConnectivity = () => {
  // Key Stats Data for Data Connectivity Solutions
  const stats = [
    { icon: FaExchangeAlt, value: 'Point-to-Point', label: 'Dedicated Private Circuits' },
    { icon: FaShieldAlt, value: '99.99%', label: 'Service Uptime Commitment' },
    { icon: FaBuilding, value: 'Global & Local', label: 'Cross-Border Reach' },
    { icon: FaClock, value: '< 1ms', label: 'Ultra-Low Jitter & Latency' },
  ];

  // Core Data Connectivity Services & Features
  const connectivityFeatures = [
    {
      icon: FaProjectDiagram,
      iconAlt: FaNetworkWired,
      title: 'IPLC & IEPL Services',
      description: 'International Private Leased Circuits providing secure, dedicated end-to-end bandwidth between local and overseas corporate offices.',
    },
    {
      icon: FaLock,
      title: 'MPLS & Ethernet VPN',
      description: 'Flexible Layer 2 (E-LINE/E-LAN) and Layer 3 MPLS VPN solutions tailored to connect multiple branch offices with high data privacy.',
    },
    {
      icon: FaShieldAlt,
      title: 'High-Level Data Security',
      description: 'Protocol-agnostic, completely isolated physical and logical pathways protecting sensitive financial and corporate communications.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Guaranteed Bandwidth (1:1)',
      description: 'Committed Information Rate (CIR) ensuring 1:1 uncompressed throughput for mission-critical applications and cloud interconnectivity.',
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
        title="Data Connectivity Solutions"
        description="Secure, low-latency, and dedicated enterprise data links connecting businesses across domestic and international borders."
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
              Reliable Enterprise Backbone
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices Data Services
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mango Teleservices Ltd. offers world-class Data Connectivity services engineered for enterprises, 
              banks, financial institutions, tech conglomerates, and telecom operators requiring seamless, high-security 
              data exchange.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Leveraging our robust International Internet Gateway (IIG) infrastructure and strategic international carrier 
              partnerships, we provide dedicated point-to-point and point-to-multipoint links with deterministic latency, 
              zero packet loss, and comprehensive network monitoring.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/data-connectivity.jpg" // Place your data center or fiber network image in /public/img/
              alt="Data Connectivity Infrastructure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Carrier-Grade Enterprise SLA
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

        {/* Key Solution Capabilities */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECA26]/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FECA26]" />
              Cross-Border & Domestic Leased Lines
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Establish direct private links connecting your HQ in Bangladesh to global offices or cloud hubs worldwide. Our IPLC/IEPL solutions guarantee isolated bandwidth with ultra-low latency for uninterrupted mission-critical data transfers.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Scalable MPLS & Cloud Interconnect
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Simplify multi-site branch communication through our high-performance Layer 2/3 MPLS VPN networks. Direct, private cloud cross-connects to Microsoft Azure, AWS, and Google Cloud platform are fully supported.
            </p>
          </div>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Mango Data Connectivity?</h2>
            <p className="text-slate-500">
              Built on redundant fiber backbones with 24/7 proactive monitoring and guaranteed service level performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectivityFeatures.map((feature, index) => (
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

export default DataConnectivity;
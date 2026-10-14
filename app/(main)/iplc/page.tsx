'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGlobe, 
  FaShieldAlt, 
  FaLock, 
  FaNetworkWired, 
  FaAward, 
  FaServer, 
  FaExchangeAlt, 
  FaSyncAlt 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="IPLC Hero Background"
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

const Iplc = () => {
  // Key Stats Data for IPLC Solutions
  const stats = [
    { icon: FaExchangeAlt, value: '1:1 Dedicated', label: 'Uncompressed Bandwidth' },
    { icon: FaShieldAlt, value: '99.99%', label: 'SLA-Backed Uptime' },
    { icon: FaGlobe, value: 'Global', label: 'Cross-Border Coverage' },
    { icon: FaSyncAlt, value: '0%', label: 'Packet Loss Guarantee' },
  ];

  // Core Features / Highlights of IPLC
  const iplcFeatures = [
    {
      icon: FaLock,
      title: 'Protocol Agnostic & Private',
      description: 'Transparent Layer 1 point-to-point leased line offering maximum data privacy and support for custom protocol payloads.',
    },
    {
      icon: FaNetworkWired,
      title: 'Multiple Submarine Cable Routes',
      description: 'Routed via SEA-ME-WE submarine cables and terrestrial links for automated restoration and redundancy.',
    },
    {
      icon: FaServer,
      title: 'Scalable Bandwidth Capacities',
      description: 'Flexible interface bandwidth options ranging from TDM (E1, DS3, STM-1 to STM-64) up to High-Speed Ethernet (10G/100G).',
    },
    {
      icon: FaShieldAlt,
      title: 'Low Latency & High Security',
      description: 'Dedicated non-shared transmission path designed specifically for latency-sensitive financial and enterprise applications.',
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
        title="International Private Leased Circuit (IPLC)"
        description="Dedicated, ultra-secure, and point-to-point cross-border connectivity designed for multinational corporations and financial institutions."
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
              Point-to-Point Enterprise Leased Lines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices IPLC Solutions
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mango Teleservices Ltd. delivers end-to-end International Private Leased Circuit (IPLC) services, 
              offering dedicated, private, and uncompressed communication pipelines between your facilities in 
              Bangladesh and international offices worldwide.
            </p>
            <p className="text-slate-500 leading-relaxed">
              As a licensed International Internet Gateway (IIG) with established tie-ups across global submarine cable 
              consortiums and Tier-1 carrier partners, our IPLC solutions offer guaranteed speed, fixed low latency, and 
              military-grade data security—unaffected by public internet traffic fluctuations.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/iplc.jpg" // Place your submarine cable / optical fiber image in /public/img/
              alt="IPLC Fiber Optic Cable Systems"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Guaranteed 1:1 CIR Bandwidth
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

        {/* Technical Capabilities & Advantages */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECA26]/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FECA26]" />
              End-to-End One-Stop Shopping (OSS)
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We streamline cross-border circuit procurement by offering full One-Stop Shopping (OSS) services—handling local loop provisioning, international backhaul, ocean segments, overseas tail circuits, and single-window billing.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Mission-Critical Security & Reliability
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Designed for banks, airlines, stock exchanges, and multinational corporations requiring complete isolation from the public internet, our IPLC links provide point-to-point encryption-ready hardware interfaces and continuous NOC monitoring.
            </p>
          </div>
        </motion.div>

        {/* Why Choose Our IPLC Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Mango IPLC?</h2>
            <p className="text-slate-500">
              Uncompromising performance, strict SLAs, and transparent dedicated link infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iplcFeatures.map((feature, index) => (
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

export default Iplc;
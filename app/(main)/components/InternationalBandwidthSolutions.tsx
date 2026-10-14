'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGlobe, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaServer, 
  FaAward, 
  FaExchangeAlt, 
  FaChartLine, 
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
          alt="International Bandwidth Solutions Background"
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

const InternationalBandwidthSolutions = () => {
  // Key Stats Data for International Bandwidth
  const stats = [
    { icon: FaGlobe, value: 'Multi-Tbps', label: 'International Pipeline Capacity' },
    { icon: FaShieldAlt, value: '99.99%', label: 'Backbone Service Availability' },
    { icon: FaExchangeAlt, value: 'Dual-Path', label: 'Submarine & Terrestrial Redundancy' },
    { icon: FaChartLine, value: '< 30ms', label: 'Optimized Regional Latency' },
  ];

  // Core Service Features & Highlights
  const bandwidthFeatures = [
    {
      icon: FaNetworkWired,
      title: 'Diverse Submarine Cable Access',
      description: 'Direct capacity allocation via SEA-ME-WE 4 and SEA-ME-WE 5 submarine cable systems providing high-throughput connectivity to global internet hubs.',
    },
    {
      icon: FaExchangeAlt,
      title: 'ITC Terrestrial Backhaul',
      description: 'Land-based International Terrestrial Cable (ITC) routes offering geographic diversity and instant path restoration in case of undersea cable cuts.',
    },
    {
      icon: FaServer,
      title: 'High-Capacity Port Options',
      description: 'Flexible interface bandwidth configurations ranging from 10GE to 100GE and 400GE optical transport circuits tailored for telcos and ISPs.',
    },
    {
      icon: FaShieldAlt,
      title: 'Carrier-Grade SLA Guarantees',
      description: 'Committed Information Rate (CIR 1:1) backed by strict Service Level Agreements, round-the-clock NOC monitoring, and proactive fault restoration.',
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
        title="International Bandwidth Solutions"
        description="Scalable, resilient, and multi-terabit international internet pipeline capacity powering Bangladesh's telecommunications ecosystem."
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
            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">
              Carrier-Grade Global Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices Bandwidth Trunk
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              As Bangladesh’s pioneering International Internet Gateway (IIG) operator, Mango Teleservices Ltd. delivers 
              high-speed, ultra-reliable international bandwidth solutions engineered to support the exponential data growth 
              of local ISPs, mobile network operators, and large enterprise infrastructures.
            </p>
            <p className="text-slate-500 leading-relaxed">
              By combining international submarine cable landings with redundant terrestrial links, our bandwidth trunking 
              guarantees minimal packet drop, deterministic low-latency routing, and seamless integration with global Tier-1 
              upstream carriers and Content Delivery Networks (CDNs).
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/bandwidth.png" // Place your network / fiber image in /public/img/
              alt="International Bandwidth Infrastructure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Multi-Terabit Optical Backbone
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
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-slate-900 flex items-center justify-center text-[#FECA26]">
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECA26]/10 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FECA26]" />
              Geographical Route Diversity
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We eliminate risks associated with single-route disruptions by routing international bandwidth through diverse undersea cable landing stations in Cox's Bazar and Kuakata, paired with multiple cross-border ITC overland routes to India and global IXPs.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              On-Demand Bandwidth Scaling
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Designed for high flexibility, our infrastructure allows client ISPs and telcos to upgrade bandwidth capacities rapidly during peak traffic periods or big digital events—backed by 24/7 technical assistance from our Network Operations Center.
            </p>
          </div>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Mango International Bandwidth?</h2>
            <p className="text-slate-500">
              Unmatched throughput, low latency, and robust infrastructure built for national scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bandwidthFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 text-[#FECA26]">
                    <feature.icon className="h-6 w-6" />
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

export default InternationalBandwidthSolutions;
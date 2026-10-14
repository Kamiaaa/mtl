'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGlobe, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaMicrochip, 
  FaAward, 
  FaServer, 
  FaProjectDiagram, 
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
          alt="International IP Transit Background"
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

const InternationalIPTransit = () => {
  // Key Stats Data for International IP Transit
  const stats = [
    { icon: FaGlobe, value: 'Multi-Tbps', label: 'Global Backbone Capacity' },
    { icon: FaShieldAlt, value: '99.99%', label: 'Guaranteed SLA Uptime' },
    { icon: FaProjectDiagram, value: 'Multiple', label: 'Submarine & ITC Cable Paths' },
    { icon: FaClock, value: '< 30ms', label: 'Ultra-Low Regional Latency' },
  ];

  // Core Service Features & Highlights
  const transitFeatures = [
    {
      icon: FaNetworkWired,
      title: 'Diverse Routing & Redundancy',
      description: 'Multiple international upstream connections via SEA-ME-WE submarine cable systems and ITC terrestrial routes ensure zero single point of failure.',
    },
    {
      icon: FaShieldAlt,
      title: 'DDoS Mitigation & Security',
      description: 'Carrier-grade threat protection, automated BGP Blackholing, and real-time traffic scrubbing to defend your network against volumetric DDoS attacks.',
    },
    {
      icon: FaServer,
      title: 'Direct Global Peering',
      description: 'Extensive direct peering with major Tier-1 global carriers, content delivery networks (CDNs), and cloud providers like Google, Akamai, and AWS.',
    },
    {
      icon: FaMicrochip,
      title: 'Scalable Bandwidth Options',
      description: 'Flexible port speeds ranging from 1GE, 10GE up to 100GE interface options with full burstable capacity tailored for ISPs and enterprises.',
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
        title="International IP Transit"
        description="High-capacity, low-latency, and multi-homed global internet connectivity tailored for ISPs, Telcos, and Enterprise networks."
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
              Carrier-Grade Global Backbone
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices IP Transit
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              As a leading International Internet Gateway (IIG) licensee in Bangladesh, Mango Teleservices Ltd. 
              delivers premier International IP Transit services designed to keep your network connected seamlessly 
              to the global internet.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Leveraging multi-homed connectivity through SEA-ME-WE cable systems and land-based International Terrestrial 
              Cable (ITC) routes, our IP Transit service delivers optimal BGP routing, lowest possible network latency, and 
              unrivaled resilience for ISPs, local data centers, mobile operators, and multinational businesses.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/hero-05.png" // Place your network or datacenter image in /public/img/
              alt="International IP Transit Infrastructure"
              fill
              loading="eager"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Tier-1 Global Upstream Partnerships
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

        {/* Technical Capabilities / Highlights */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECA26]/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FECA26]" />
              Full BGP Routing & IPv6 Native
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our IP Transit platform supports full BGP routing tables with dual-stack IPv4/IPv6 capability. Clients enjoy advanced BGP community controls, enabling custom routing policies, active-active load balancing, and automated failover path selection.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              SLA-Backed Performance & NOC Support
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Backbone availability is guaranteed with strict Service Level Agreements (SLAs). Our 24/7/365 Network Operations Center (NOC) actively monitors latency, packet delivery, and link health to resolve anomalies proactively.
            </p>
          </div>
        </motion.div>

        {/* Why Choose Our IP Transit Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Our IP Transit?</h2>
            <p className="text-slate-500">
              Delivering high-speed internet transit solutions engineered for total reliability and maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transitFeatures.map((feature, index) => (
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

export default InternationalIPTransit;
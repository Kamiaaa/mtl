'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaDesktop, 
  FaShieldAlt, 
  FaChartLine, 
  FaBell, 
  FaAward, 
  FaTools, 
  FaHeadset, 
  FaCogs 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="Network Monitoring Hero Background"
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

const NetworkMonitoringManagement = () => {
  // Key Stats Data for Network Monitoring & Management
  const stats = [
    { icon: FaDesktop, value: '24/7/365', label: 'Continuous NOC Surveillance' },
    { icon: FaBell, value: '< 60s', label: 'Automated Incident Response' },
    { icon: FaChartLine, value: '99.99%', label: 'Infrastructure Availability' },
    { icon: FaHeadset, value: '100%', label: 'Proactive Technical Support' },
  ];

  // Core Features & Services
  const managementFeatures = [
    {
      icon: FaDesktop,
      title: '24/7 NOC Monitoring',
      description: 'Round-the-clock proactive oversight by experienced network engineers ensuring continuous link health, low latency, and zero downtime.',
    },
    {
      icon: FaChartLine,
      title: 'Performance & Bandwidth Analytics',
      description: 'Real-time telemetry and portal dashboards providing deep visibility into bandwidth utilization, peak loads, and circuit health.',
    },
    {
      icon: FaBell,
      title: 'Automated Incident Management',
      description: 'Instant threshold alerting and automated ticket generation for rapid fault isolation, troubleshooting, and route restoration.',
    },
    {
      icon: FaCogs,
      title: 'Managed Network Services',
      description: 'Comprehensive router and switch configuration, firmware management, BGP optimization, and end-to-end circuit maintenance.',
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
        title="Network Monitoring & Management"
        description="Comprehensive 24/7 NOC surveillance, proactive incident response, and end-to-end managed network solutions for maximum uptime."
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
              Carrier-Grade NOC Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices Network Operations
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mango Teleservices Ltd. operates a state-of-the-art Network Operations Center (NOC) running 24/7/365 to monitor, 
              manage, and maintain mission-critical connectivity across our entire International Internet Gateway (IIG) network.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Our specialized network management solutions empower ISPs, telecommunication companies, and enterprise clients 
              with full visibility into circuit performance, rapid anomaly resolution, and proactive SLA compliance guarantees 
              backed by dedicated support engineers.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/noc.jpg" // Place your NOC / operations room image in /public/img/
              alt="Mango Teleservices Network Operations Center"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> 24/7 Dedicated NOC Support
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

        {/* Technical Capabilities & Service Highlights */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECA26]/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FECA26]" />
              Proactive Health Monitoring & SLA Compliance
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our automated monitoring systems continuously track network jitter, packet delivery, round-trip time (RTT), and link capacity. Any deviation from established SLA parameters triggers instantaneous mitigation protocols before end-user degradation occurs.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Turnkey Managed Infrastructure Services
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Outsource your core routing, firewall administration, and BGP peering maintenance to our certified network specialists. We handle complex network provisioning, security patching, and hardware troubleshooting around the clock.
            </p>
          </div>
        </motion.div>

        {/* Why Choose Our Network Management Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Our Network Management?</h2>
            <p className="text-slate-500">
              Unrivaled operational excellence, rapid ticket resolution, and absolute network reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementFeatures.map((feature, index) => (
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

export default NetworkMonitoringManagement;
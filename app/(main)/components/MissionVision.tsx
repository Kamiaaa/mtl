'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaNetworkWired, 
  FaShieldAlt, 
  FaServer, 
  FaGlobe, 
  FaAward, 
  FaUsers, 
  FaGlobeAsia, 
  FaHeadset 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero image in /public/img/
          alt="Mango Teleservices Hero Background"
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

const MissionVision = () => {
  // Key Stats Data for an IIG Provider
  const stats = [
    { icon: FaServer, value: '100+ Gbps', label: 'Robust International Bandwidth' },
    { icon: FaShieldAlt, value: '99.99%', label: 'Network Uptime & Reliability' },
    { icon: FaUsers, value: '24/7', label: 'Dedicated NOC & Technical Support' },
    { icon: FaGlobeAsia, value: 'Nationwide', label: 'ISP & Enterprise Connectivity' },
  ];

  // Core Company Values / Pillars
  const coreValues = [
    {
      icon: FaNetworkWired,
      title: 'High-Speed Connectivity',
      description: 'Delivering seamless, low-latency international transit and peering solutions backed by redundant submarine cable paths.',
    },
    {
      icon: FaShieldAlt,
      title: 'Enterprise Security & Stability',
      description: 'Ensuring carrier-grade reliability with advanced DDoS mitigation and robust routing architectures.',
    },
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'Connecting local ISPs, ICXs, and enterprise clients to global internet exchanges with optimal route efficiency.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Expert Support',
      description: 'Round-the-clock monitoring and technical assistance from seasoned network engineers through our advanced NOC.',
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
        title="Mission & Vision"
        description="Empowering Bangladesh’s digital ecosystem with high-speed, secure, and reliable international internet gateway services."
      />

      {/* Main Content Container */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Company Overview Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#FECA26] font-semibold tracking-wider uppercase text-xl leading-tight">
              Connecting Bangladesh to the World
            </span>
            {/* <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices Ltd.
            </h2> */}
            <p className="text-slate-600 text-lg leading-relaxed text-justify">
              Mango Teleservices Limited is a Public Limited company incorporated in the year 2007. Mango is Bangladesh’s first private sector International Internet Gateway (IIG) licensed by the government. Mango has the rights of use of all submarine cables (SMW4, SMW5, etc) ensures the security and quality of data connection to its clients. Mango has direct interconnection with most of the CDN including AKAMAI, AMAZON, DECIX, EQUINIX, FACEBOOK, GOOGLE, ZENLAYER and many other content networks throughout the globe.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We understand the importance of technological growth in Bangladesh and preserving the ecosystem. Mango has invested towards the development of lithium batteries, Electric Vehicles and a solar power energy project! Mango has a goal to nurture the country’s young aspirations, they have invested in the countries education sector as well.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/target.jpg" // Place your network operations/server image in /public/img/
              alt="Mango Teleservices Network Operations Center"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Carrier-Grade Infrastructure
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

        {/* Mission & Vision Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECA26]/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FECA26]" />
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To empower Bangladesh’s digital landscape by providing world-class, high-capacity, and secure International Internet Gateway services that ensure seamless global connectivity, unmatched reliability, and superior value for our partners.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted, innovative, and pioneering IIG backbone provider in the region, driving digital transformation, economic growth, and universal high-speed internet accessibility across Bangladesh.
            </p>
          </div>
        </motion.div>

        {/* Core Values / Why Choose Us Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Mango Teleservices?</h2>
            <p className="text-slate-500">
              We bridge the digital divide with robust architecture, exceptional latency performance, and unmatched technical dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MissionVision;
'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaBatteryFull, 
  FaLeaf, 
  FaShieldAlt, 
  FaMicrochip, 
  FaAward, 
  FaUsers, 
  FaGlobeAsia, 
  FaIndustry 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero.jpg" // Place your hero image in /public/img/
          alt="BLBL Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
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

const AboutUs = () => {
  // Key Stats Data
  const stats = [
    { icon: FaIndustry, value: '10,000+', label: 'Annual Battery Pack Capacity' },
    { icon: FaShieldAlt, value: '99.9%', label: 'Safety & Reliability Rate' },
    { icon: FaUsers, value: '150+', label: 'Skilled Engineers & Staff' },
    { icon: FaGlobeAsia, value: '100%', label: 'Commitment to Clean Energy' },
  ];

  // Core Company Values
  const coreValues = [
    {
      icon: FaBatteryFull,
      title: 'Advanced Energy Storage',
      description: 'Engineering high-density lithium-ion battery packs tailored for e-mobility, industrial, and solar backup applications.',
    },
    {
      icon: FaShieldAlt,
      title: 'Safety & Reliability',
      description: 'Rigorous multi-stage quality testing, integrated Smart BMS (Battery Management System), and thermal protection.',
    },
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description: 'Pioneering clean tech solutions in Bangladesh to accelerate the transition from fossil fuels to green energy.',
    },
    {
      icon: FaMicrochip,
      title: 'Innovation & Tech',
      description: 'Investing in local R&D to deliver sustainable, smart, and long-lasting energy storage technologies.',
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
        title="About BLBL"
        description="Powering Bangladesh’s sustainable future with high-performance lithium battery technology and local engineering excellence."
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
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">
              Empowering Green Mobility & Industry
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Bangladesh Lithium Battery Limited
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded with a vision to revolutionize the energy landscape, Bangladesh Lithium Battery Limited (BLBL) 
              is at the forefront of local lithium-ion battery assembly, R&D, and custom battery management solutions.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We specialize in manufacturing battery packs designed for electric three-wheelers, 2-wheelers, solar energy 
              storage systems (ESS), telecom towers, and industrial power back-ups. Our engineering team combines high-grade 
              cells with custom Smart BMS solutions to ensure high safety, durability, and maximal cycle life under local climate conditions.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/about.jpg" // Place your factory/product image in /public/img/
              alt="BLBL Manufacturing Facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-emerald-300 font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-emerald-500/30 backdrop-blur-md">
                <FaAward className="text-emerald-400" /> Premium Quality Standards
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
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To drive Bangladesh’s shift toward sustainable, eco-friendly energy by providing safe, reliable, and high-performance lithium battery solutions tailored to local industry needs and climate conditions.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To be the premier technological benchmark and trusted industry leader in clean energy storage and electric mobility battery technology across Bangladesh and the region.
            </p>
          </div>
        </motion.div>

        {/* Core Values / Why Choose Us Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose BLBL?</h2>
            <p className="text-slate-500">
              We combine strict quality assurance, high-efficiency lithium cells, and integrated smart technology.
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

export default AboutUs;
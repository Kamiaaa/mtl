'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaLeaf, 
  FaRecycle, 
  FaSolarPanel, 
  FaHandHoldingHeart, 
  FaShieldAlt, 
  FaChartLine, 
  FaBalanceScale,
  FaLightbulb
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero.jpg" // Place your hero image in /public/img/
          alt="BLBL Sustainability Hero Background"
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

const SustainabilityESG = () => {
  // Key ESG Impact Metrics
  const esgStats = [
    { icon: FaLeaf, value: 'Zero', label: 'Direct Operational Emissions Target' },
    { icon: FaRecycle, value: '95%', label: 'Battery Component Recyclability Goal' },
    { icon: FaSolarPanel, value: '100%', label: 'Clean Energy Transition Focus' },
    { icon: FaHandHoldingHeart, value: 'Local', label: 'Community & Workforce Development' },
  ];

  // Core ESG Pillars
  const esgPillars = [
    {
      title: 'Environmental Stewardship',
      subtitle: 'Cleaner Power for a Greener Tomorrow',
      icon: FaLeaf,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      points: [
        'Accelerating Bangladesh’s EV transition to reduce fossil fuel emissions.',
        'Eco-conscious production standards minimizing operational waste.',
        'Developing second-life battery applications for renewable grid storage.',
        'Responsible raw material sourcing and safe disposal practices.'
      ]
    },
    {
      title: 'Social Responsibility',
      subtitle: 'Empowering People & Local Communities',
      icon: FaHandHoldingHeart,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      points: [
        'Strict workplace safety and thermal risk management standards.',
        'Up-skilling local engineers and technical talent in green tech.',
        'Equal opportunity, fair wages, and robust labor practices.',
        'Community outreach initiatives supporting clean energy access.'
      ]
    },
    {
      title: 'Corporate Governance',
      subtitle: 'Integrity, Transparency & Compliance',
      icon: FaBalanceScale,
      color: 'bg-slate-100 text-slate-800 border-slate-300',
      points: [
        'Uncompromising adherence to environmental regulations and local laws.',
        'Transparent reporting on quality control and safety metrics.',
        'Ethical leadership and active risk management frameworks.',
        'Zero-tolerance policy toward corruption and unethical practices.'
      ]
    }
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
        title="Sustainability & ESG"
        description="Pioneering responsible lithium energy solutions committed to environmental protection, social advancement, and governance excellence."
      />

      {/* Main Content Container */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Intro Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">
              Our Commitment to the Future
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Driving Sustainability in Bangladesh’s Energy Sector
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Bangladesh Lithium Battery Limited (BLBL), sustainability is not an afterthought—it is the core reason our company exists. By replacing traditional lead-acid and fossil-fuel power models with high-efficiency lithium technology, we actively contribute to a lower-carbon economy.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Our Environmental, Social, and Governance (ESG) strategy guides how we source, design, assemble, and manage the life cycle of our battery systems. We are focused on safety, eco-design, and building a cleaner power ecosystem for Bangladesh.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/esg-initiative.jpg" // Place your ESG related image in /public/img/
              alt="BLBL Green Energy Initiatives"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-emerald-300 font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-emerald-500/30 backdrop-blur-md">
                <FaLightbulb className="text-emerald-400" /> Clean Energy Transition Partner
              </span>
            </div>
          </div>
        </motion.div>

        {/* ESG Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {esgStats.map((stat, index) => (
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

        {/* The 3 ESG Pillars Section */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Our ESG Framework</h2>
            <p className="text-slate-500">
              Integrating environmental care, human wellbeing, and transparent governance into everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${pillar.color}`}>
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-emerald-600 mb-6">{pillar.subtitle}</p>
                  
                  <ul className="space-y-3">
                    {pillar.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600 gap-2">
                        <span className="text-emerald-500 mt-1 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Circular Life Cycle / Recycling Callout */}
        <motion.div 
          variants={itemVariants}
          className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                <FaRecycle /> Circular Economy Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Responsible Lifecycle & Battery Recycling Roadmap
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                BLBL is actively designing lifecycle protocols to ensure our battery products don’t end up in landfills. We prioritize smart BMS monitoring to extend cell lifespan, repurpose degraded batteries into secondary solar storage, and establish local recycling partnerships.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 space-y-3 text-center w-full max-w-xs">
                <FaChartLine className="h-10 w-10 text-emerald-400 mx-auto" />
                <h4 className="font-semibold text-white">Continuous Improvement</h4>
                <p className="text-xs text-slate-400">
                  Measuring operational impact and optimizing energy consumption across production steps.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SustainabilityESG;
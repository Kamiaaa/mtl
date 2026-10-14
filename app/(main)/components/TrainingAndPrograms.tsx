'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGraduationCap, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaChalkboardTeacher, 
  FaAward, 
  FaUsers, 
  FaLaptopCode, 
  FaCertificate 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="Training & Programs Hero Background"
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

const TrainingAndPrograms = () => {
  // Key Stats Data for Training & Skill Development
  const stats = [
    { icon: FaGraduationCap, value: '1,000+', label: 'Engineers & Professionals Trained' },
    { icon: FaChalkboardTeacher, value: '50+', label: 'Specialized Workshops Conducted' },
    { icon: FaUsers, value: '100%', label: 'Hands-On Practical Labs' },
    { icon: FaCertificate, value: 'Industry', label: 'Recognized Skill Certification' },
  ];

  // Featured Training Modules / Workshops
  const trainingModules = [
    {
      icon: FaNetworkWired,
      title: 'Advanced BGP & Routing Engineering',
      description: 'Hands-on training covering full BGP routing tables, multi-homing strategies, traffic engineering, route reflection, and community string management.',
    },
    {
      icon: FaLaptopCode,
      title: 'IPv6 Migration & Dual-Stack Deployment',
      description: 'Comprehensive curriculum designed for ISPs and enterprise network engineers to transition seamlessly from IPv4 to native IPv6 networks.',
    },
    {
      icon: FaShieldAlt,
      title: 'Network Security & DDoS Mitigation',
      description: 'In-depth workshops focusing on real-time threat analysis, volumetric scrubbing center operations, flowspec rules, and infrastructure defense.',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'NOC & System Administration Essentials',
      description: 'Practical training for network operation center personnel on proactive link monitoring, incident response, and SLA compliance tracking.',
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
        title="Training & Development Programs"
        description="Empowering telecom engineers, ISP professionals, and tech graduates with cutting-edge network engineering and cybersecurity skills."
      />

      {/* Main Content Container */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Section Overview */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#FECA26] font-semibold tracking-wider uppercase text-sm">
              Nurturing Telecom Talent & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices Learning Hub
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              As a premier International Internet Gateway (IIG) operator in Bangladesh, Mango Teleservices Ltd. 
              is committed to advancing the technological skills of local IT and telecommunication professionals.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Through structured workshops, certified hands-on training labs, and industry-academic partnerships, 
              we equip network engineers, system administrators, and university students with real-world technical expertise 
              to strengthen Bangladesh’s digital infrastructure ecosystem.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/nbr_training.jpg" // Place your training lab / classroom image in /public/img/
              alt="Mango Teleservices Technical Training Lab"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Carrier-Grade Technical Excellence
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

        {/* Key Educational Initiatives */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECA26]/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FECA26]" />
              Industry & ISP Capacity Building
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We regularly organize specialized technical bootcamps for local ISP engineers, enterprise IT managers, and datacenter administrators—helping partners keep pace with evolving BGP routing standards, DDoS defense mechanisms, and cloud interconnect architectures.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              University & Graduate Internship Programs
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Collaborating with leading engineering universities in Bangladesh, our graduate apprenticeship and internship programs offer students direct access to enterprise-grade routing equipment, live NOC operations, and mentorship from industry veterans.
            </p>
          </div>
        </motion.div>

        {/* Featured Training Modules Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Featured Training Programs</h2>
            <p className="text-slate-500">
              Practical, lab-intensive courses tailored to real-world network operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingModules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                    <module.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{module.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{module.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TrainingAndPrograms;
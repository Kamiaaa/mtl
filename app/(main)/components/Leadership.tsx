'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaUserTie, 
  FaLightbulb, 
  FaGraduationCap, 
  FaShieldAlt, 
  FaUsers, 
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
          alt="BLBL Leadership Hero Background"
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

const Leadership = () => {
  // Executive Leadership Team Data
  const teamMembers = [
    {
      name: 'Executive Leadership',
      role: 'Chirman & Founder',
      image: '/img/amk.jpg', // Replace with real team image paths
      bio: 'Steering BLBL’s strategic vision to transform Bangladesh into a self-reliant hub for high-efficiency lithium battery technology and green transportation.',
      linkedin: '#',
      email: 'leadership@blbl.com.bd',
    },
    {
      name: 'Executive Leadership',
      role: 'Managing Director & Founder',
      image: '/img/mmk.jpg', // Replace with real team image paths
      bio: 'Steering BLBL’s strategic vision to transform Bangladesh into a self-reliant hub for high-efficiency lithium battery technology and green transportation.',
      linkedin: '#',
      email: 'leadership@blbl.com.bd',
    },
    {
      name: 'Operations & Manufacturing Lead',
      role: 'Head of Plant Operations',
      image: '/img/team/operations.jpg',
      bio: 'Managing automated production lines, quality assurance testing, and supply chain integrity to deliver reliable battery packs nationwide.',
      linkedin: '#',
      email: 'operations@blbl.com.bd',
    },
  ];

  // Leadership Guiding Pillars
  const leadershipPillars = [
    {
      icon: FaLightbulb,
      title: 'Visionary Strategy',
      description: 'Pioneering localized battery assembly to support Bangladesh’s transition to electric mobility and renewable energy storage.',
    },
    {
      icon: FaGraduationCap,
      title: 'Technical Excellence',
      description: 'Combining local engineering talent with advanced energy storage protocols to deliver superior cycle life and safety.',
    },
    {
      icon: FaShieldAlt,
      title: 'Integrity & Quality',
      description: 'Enforcing zero-tolerance safety policies across manufacturing, cell sorting, and high-voltage module integration.',
    },
    {
      icon: FaUsers,
      title: 'People-First Culture',
      description: 'Empowering engineers, technicians, and operational teams through continuous skill development and fair labor standards.',
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
        title="Our Leadership"
        description="Meet the visionaries, engineers, and industry pioneers guiding Bangladesh Lithium Battery Limited toward a sustainable energy future."
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
              Guided by Expertise & Passion
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Driven by Experience, Dedicated to Innovation
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our leadership team brings together decades of technical expertise across power electronics, mechanical engineering, industrial production, and clean-tech management.
            </p>
            <p className="text-slate-500 leading-relaxed">
              By combining local operational insight with global energy storage benchmarks, BLBL’s management ensures every battery pack engineered in our facility delivers safety, longevity, and exceptional value to our customers.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/leadership.jpg" // Place your team/facility image in /public/img/
              alt="BLBL Executive Team Overview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-emerald-300 font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-emerald-500/30 backdrop-blur-md">
                <FaIndustry className="text-emerald-400" /> Executive & Engineering Governance
              </span>
            </div>
          </div>
        </motion.div>

        {/* Leadership Team Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Key Management & Technical Heads</h2>
            <p className="text-slate-500">
              The experts leading research, production, and business development at BLBL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="relative h-96 w-full bg-slate-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{member.role}</p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/60 flex items-center justify-between text-slate-400">
                  <span className="text-xs font-medium text-slate-400">BLBL Leadership</span>
                  <div className="flex gap-3">
                    <a href={member.linkedin} className="hover:text-emerald-600 transition-colors">
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="hover:text-emerald-600 transition-colors">
                      <FaEnvelope className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Values / Pillars Grid */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Our Management Philosophy</h2>
            <p className="text-slate-500">
              How our leadership shapes strategy, product quality, and corporate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 text-emerald-400">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join the Team / Advisory Banner */}
        <motion.div 
          variants={itemVariants}
          className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                <FaUserTie /> Career & Collaboration
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Building the Future of Green Tech Together
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                We are always looking for passionate electrochemical engineers, hardware developers, and operations talent to join our team in Dhaka. Partner with us as we build Bangladesh’s premier energy storage company.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a
                href="mailto:careers@blbl.com.bd"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-xl transition-colors shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Leadership;
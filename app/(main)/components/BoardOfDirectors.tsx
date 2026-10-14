'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaShieldAlt, 
  FaAward, 
  FaUsers, 
  FaGlobeAsia, 
  FaBriefcase, 
  FaBuilding, 
  FaLinkedin 
} from 'react-icons/fa';

// Reusable Hero Section matching shared layout design
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/page-back.png" // Place your hero background image in /public/img/
          alt="Board of Directors Hero Background"
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

const BoardOfDirectors = () => {
  // Key Leadership Stats Data
  const stats = [
    { icon: FaBuilding, value: '20+', label: 'Years of Telecom Leadership' },
    { icon: FaUsers, value: '100%', label: 'Commitment to Governance' },
    { icon: FaGlobeAsia, value: 'Nationwide', label: 'Digital Impact' },
    { icon: FaAward, value: 'Top Tier', label: 'Industry Excellence' },
  ];

  // Directors Data (Chairman and Managing Director)
  const directors = [
    {
      name: 'Chairman Name',
      designation: 'Chairman',
      image: '/img/amk.jpg', // Place photo in /public/img/directors/
      bio: 'Visionary business leader guiding strategic direction, corporate governance, and expanding Mango Teleservices’ telecommunications infrastructure across Bangladesh.',
      linkedin: '#',
    },
    {
      name: 'Managing Director Name',
      designation: 'Managing Director & CEO',
      image: '/img/mmk.jpg', // Place photo in /public/img/directors/
      bio: 'Telecom industry pioneer with extensive experience driving IIG operations, international partnerships, network growth, and technological innovation.',
      linkedin: '#',
    },
  ];

  // Core Leadership Values
  const governanceValues = [
    {
      icon: FaShieldAlt,
      title: 'Corporate Integrity',
      description: 'Upholding highest ethical standards, legal compliance, and corporate accountability in all operations.',
    },
    {
      icon: FaGlobeAsia,
      title: 'Visionary Strategy',
      description: 'Driving long-term investments in submarine cables, national fiber connectivity, and digital infrastructure.',
    },
    {
      icon: FaBriefcase,
      title: 'Industry Leadership',
      description: 'Leveraging decades of telecommunications expertise to strengthen Bangladesh’s position in global connectivity.',
    },
    {
      icon: FaUsers,
      title: 'Stakeholder Trust',
      description: 'Delivering consistent value to ISP partners, enterprise clients, regulatory bodies, and shareholders.',
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
        title="Board of Directors"
        description="Guided by experienced telecommunication pioneers committed to operational excellence, corporate integrity, and national digital growth."
      />

      {/* Main Content Container */}
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Leadership Introduction Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#FECA26] font-semibold tracking-wider uppercase text-sm">
              Strategic Guidance & Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Mango Teleservices Executive Leadership
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The executive leadership at Mango Teleservices Ltd. brings together visionary entrepreneurship, skilled 
              telecommunication strategy, and corporate foresight to steer Bangladesh’s premier International Internet Gateway (IIG).
            </p>
            <p className="text-slate-500 leading-relaxed">
              Under their guidance, Mango Teleservices continues to expand its digital infrastructure, foster global 
              upstream alliances, and maintain highest standards of governance, transparency, and technical reliability.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 h-80 sm:h-96">
            <Image
              src="/img/leadership.jpg" // Place corporate boardroom/office image in /public/img/
              alt="Mango Teleservices Boardroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#FECA26] font-semibold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-[#FECA26]/30 backdrop-blur-md">
                <FaAward className="text-[#FECA26]" /> Executive Leadership Excellence
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

        {/* Board of Directors Cards Grid - Centered 2-Card Layout */}
        <motion.div variants={itemVariants} className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Board Members</h2>
            <p className="text-slate-500">
              Meet the executive leadership shaping the future of international internet gateway services in Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((member, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div>
                  {/* Image Container with Dynamic Padding and Contain */}
                  <div className="relative h-80 sm:h-96 w-full bg-slate-200/60 p-4 flex items-center justify-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-[#FECA26] font-medium text-sm">{member.designation}</p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-end">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#FECA26] hover:text-white transition-colors"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Corporate Governance Values */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Governance & Leadership Values</h2>
            <p className="text-slate-500">
              Principles that define our leadership approach and corporate commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceValues.map((value, index) => (
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

export default BoardOfDirectors;
import React from 'react';
import { motion } from 'framer-motion'; 
import './WhyXenkoraSec.css';
import { Cpu, Users, BarChart3, Zap, Layers, ShieldCheck } from 'lucide-react';
import { Slide, Bounce } from 'react-awesome-reveal';
import { useTheme } from '../../Context/ThemeContext'; // Theme import kiya

const featuresData = [
  {
    icon: <Cpu size={22} className="text-amber-500 dark:text-amber-400" />,
    title: 'Autonomous AI Agents',
    description: 'We deploy custom LLM workflows that automate lead routing, data enrichment, and real-time customer engagement 24/7.'
  },
  {
    icon: <Users size={22} className="text-amber-500 dark:text-amber-400" />,
    title: 'Principal Engineers Only',
    description: 'Zero junior handover. Your architecture is built, audited, and scaled exclusively by senior architects with 7+ years track records.'
  },
  {
    icon: <BarChart3 size={22} className="text-amber-500 dark:text-amber-400" />,
    title: 'Deterministic ROI Models',
    description: 'Full-funnel attribution linked directly to your CRM revenue. No vanity metrics or inflated impression reports.'
  },
  {
    icon: <Zap size={22} className="text-amber-500 dark:text-amber-400" />,
    title: 'Sub-Second Latency Build',
    description: 'Edge-rendered Next.js and distributed database clusters engineered for extreme speed, global reach, and Core Web Vitals perfection.'
  },
  {
    icon: <Layers size={22} className="text-amber-500 dark:text-amber-400" />,
    title: 'Unified Tech Stack',
    description: 'Cloud native, microservices, mobile apps, and AI wrappers deployed under one cohesive senior squad without vendor bloat.'
  },
  {
    icon: <ShieldCheck size={22} className="text-amber-500 dark:text-amber-400" />,
    title: 'Enterprise Security & SLA',
    description: 'SOC2-aligned coding standards, encrypted data pipelines, and guaranteed uptime SLAs for mission-critical platforms.'
  }
];

const WhyXenkoraSec = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <section className={`xenkora-features-section py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
    }`}>
      <Bounce>
      <div className="xenkora-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Motion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`xenkora-section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-300 ${
              theme === 'light' ? '!text-black' : '!text-white'
            }`}
          >
            Core Pillars That Power <br />
            <span className="highlight-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Xenkora Technologies
            </span>
          </motion.h2>
        </div>

        {/* 6-Card Grid (3x2 layout) with Staggered Motion */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`feature-card p-8 rounded-3xl border shadow-xl transition-colors duration-300 flex flex-col items-start group ${
                theme === 'light' 
                  ? 'bg-white/90 border-slate-200 shadow-slate-200/50 hover:border-amber-500/40' 
                  : 'bg-slate-900/60 backdrop-blur-xl border-white/10 shadow-black/40 hover:border-amber-500/40'
              }`}
            >
              <div className={`card-icon-wrapper p-3 rounded-2xl border mb-6 transition-colors ${
                theme === 'light' 
                  ? 'bg-slate-100 border-slate-200 group-hover:border-amber-500/30' 
                  : 'bg-slate-950/80 border-white/10 group-hover:border-amber-500/30'
              }`}>
                {item.icon}
              </div>
              <h3 className={`card-title text-lg sm:text-xl font-bold mb-3 tracking-wide transition-colors ${
                theme === 'light' ? 'text-slate-900 group-hover:text-amber-600' : 'text-white group-hover:text-amber-400'
              }`}>
                {item.title}
              </h3>
              <p className={`card-description text-sm sm:text-base leading-relaxed transition-colors ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-400'
              }`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        </div>
        </Bounce>
    </section>
  );
};

export default WhyXenkoraSec;
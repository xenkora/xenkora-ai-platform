import React from 'react';
import { motion } from 'framer-motion'; 
import './AboutSec.css';
import { Zap, Target, Lock } from 'lucide-react';
import { Slide } from 'react-awesome-reveal';
import { useTheme } from '../../Context/ThemeContext.jsx'; // Theme import kiya

const metricsData = [
  {
    id: 'm1',
    value: '150+',
    label: 'Production Systems Shipped',
    subtext: 'MERN, Shopify & CRM architectures',
  },
  {
    id: 'm2',
    value: '3.5x',
    label: 'Avg. Revenue Velocity',
    subtext: 'Across automated lead funnels',
  },
  {
    id: 'm3',
    value: '99.9%',
    label: 'Workflow & API Uptime',
    subtext: 'Zero-drop webhook & bot execution',
  },
];

const pillarsData = [
  {
    id: 'p1',
    icon: <Zap size={20} className="pillar-icon amber-glow-icon" />,
    title: 'RAPID DEPLOYMENT, PREDICTABLE SCOPE',
    description:
      'Core web systems and automation pipelines ship in 2 to 4 weeks. Full architectural mapping upfront means zero budget bleed or scope creep.',
  },
  {
    id: 'p2',
    icon: <Target size={20} className="pillar-icon cyan-glow-icon" />,
    title: 'REVENUE-DRIVEN, NOT JUST UI',
    description:
      'Every React component, database schema, and CRM workflow is anchored to hard KPIs: conversion velocity, LTV expansion, and churn reduction.',
  },
  {
    id: 'p3',
    icon: <Lock size={20} className="pillar-icon green-glow-icon" />,
    title: 'CLEAN OWNERSHIP, ZERO LOCK-IN',
    description:
      'Clean MERN source code, documented REST APIs, and full asset handoff. You retain complete intellectual property ownership from day one.',
  },
];

const AboutSec = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <section className={`about-authority-section py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
    }`}>
      <Slide>
      <div className="authority-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <div className="authority-header text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="authority-tag inline-block px-4 py-1.5 rounded-full text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10">
              SYSTEMS THAT COMPOUND
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 transition-colors duration-300 ${
              theme === 'light' ? '!text-black' : '!text-white'
            }`}
          >
            Engineered Authority. Measurable Velocity.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-400'
            }`}
          >
            We replace bloated agency retainers with high-precision engineering—combining 
            custom MERN applications with autonomous growth stacks.
          </motion.p>
        </div>

        {/* Top 3 Metrics Mapped with Staggered Entrance */}
        <div className="metrics-row grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metricsData.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`metric-glass-card p-8 rounded-3xl border shadow-xl text-center relative overflow-hidden group transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white/90 border-slate-200 shadow-slate-200/50 hover:border-amber-500/50'
                  : 'bg-slate-900/60 border-white/10 shadow-black/40 backdrop-blur-xl hover:border-amber-500/40'
              }`}
            >
              <div className="metric-value text-4xl sm:text-5xl font-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className={`metric-label text-base sm:text-lg font-bold mb-1 transition-colors ${
                theme === 'light' ? 'text-slate-900' : 'text-white'
              }`}>
                {item.label}
              </div>
              <div className={`metric-subtext text-xs sm:text-sm transition-colors ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {item.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 3 Feature / Pillar Cards Mapped with Staggered Entrance */}
        <div className="pillars-row grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarsData.map((pillar, index) => (
            <motion.div 
              key={pillar.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`pillar-glass-card p-8 rounded-3xl border shadow-xl relative overflow-hidden group transition-all duration-300 flex flex-col items-start ${
                theme === 'light'
                  ? 'bg-white/90 border-slate-200 shadow-slate-200/50 hover:border-amber-500/50'
                  : 'bg-slate-900/60 border-white/10 shadow-black/40 backdrop-blur-xl hover:border-amber-500/40'
              }`}
            >
              <div className={`pillar-icon-box p-3 rounded-2xl border mb-6 transition-colors ${
                theme === 'light'
                  ? 'bg-slate-100 border-slate-200 group-hover:border-amber-500/40'
                  : 'bg-slate-950/80 border-white/10 group-hover:border-amber-500/30'
              }`}>
                {pillar.icon}
              </div>
              <h3 className={`pillar-title text-lg sm:text-xl font-bold mb-3 tracking-wide transition-colors ${
                theme === 'light' ? 'text-slate-900' : 'text-white'
              }`}>
                {pillar.title}
              </h3>
              <p className={`pillar-desc text-sm sm:text-base leading-relaxed transition-colors ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        </div>
        </Slide>
    </section>
  );
};

export default AboutSec;
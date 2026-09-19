import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion import kiya
import './WhyXenkoraThir.css';
import { TrendingUp, Terminal, Workflow, Database } from 'lucide-react';
import {Zoom} from 'react-awesome-reveal'
const trendsData = [
  {
    icon: <Terminal size={22} className="text-amber-400" />,
    title: 'LLM & Agentic Workflows Are Default',
    description: 'Manual operations scale linearly while intelligence scales infinitely. We replace repetitive enterprise logic with autonomous multi-agent pipelines.'
  },
  {
    icon: <Workflow size={22} className="text-amber-400" />,
    title: 'Edge Architecture Rules Latency',
    description: 'Users bounce past 2 seconds. We engineer globally distributed edge runtimes that render interfaces instantaneously regardless of geography.'
  },
  {
    icon: <TrendingUp size={22} className="text-amber-400" />,
    title: 'Deterministic Growth Over Vanity Ads',
    description: 'Blended acquisition costs are rising. Winners build proprietary conversion funnels and closed-loop attribution tied straight to bank ledgers.'
  },
  {
    icon: <Database size={22} className="text-amber-400" />,
    title: 'First-Party Infrastructure Is Shield',
    description: 'Cookie deprecation broke legacy tracking. We deploy server-side event tracking and unified customer data lakes you actually own.'
  }
];

const WhyXenkoraThir = () => {
  return (
    <Zoom duration={1500}>
    <section className="xenkora-trends-section py-24 relative overflow-hidden text-white">
      <div className="xenkora-trends-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Pill with Motion */}
        <div className="text-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="trends-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10"
          >
            <TrendingUp size={14} className="text-amber-400 animate-pulse" />
            <span>2026 ENGINEERING REALITY</span>
          </motion.div>
        </div>

        {/* Main Heading with Motion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="trends-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          >
            The Tech Landscape <span className="highlight-gradient bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">Shifted.</span> <br />
            We Built For It.
          </motion.h2>
        </div>

        {/* 2x2 Bento/Card Grid with Staggered Motion */}
        <div className="trends-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trendsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="trend-card p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 hover:border-amber-500/40 transition-colors duration-300 flex flex-col items-start group"
            >
              <div className="trend-icon-box p-3 rounded-2xl bg-slate-950/80 border border-white/10 mb-6 group-hover:border-amber-500/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="trend-card-title text-lg sm:text-xl font-bold text-white mb-3 tracking-wide group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="trend-card-desc text-slate-400 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
      </section>
      </Zoom>
  );
};

export default WhyXenkoraThir;
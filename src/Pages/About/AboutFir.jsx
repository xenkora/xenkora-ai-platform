import React from 'react';
import { motion } from 'framer-motion'; 
import './AboutFir.css';
import { Sparkles, ArrowRight, Cpu, Globe2 } from 'lucide-react';
import { Zoom } from 'react-awesome-reveal';
import { useTheme } from '../../Context/ThemeContext.jsx'; // Theme import kiya

const AboutFir = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <section className={`about-hybrid-section py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
    }`}>
      {/* Ambient background glow layers */}
      <div className="ambient-glow glow-amber" />
      <div className="ambient-glow glow-cyan" />
      
      <Zoom duration={2000}>
      <div className="container-hybrid max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Badge with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="badge-wrapper mb-6 flex justify-center"
        >
          <span className="hybrid-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg shadow-amber-500/10">
            <span className="badge-dot-amber w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <Sparkles size={14} className="badge-icon-cyan" />
            <span>ENGINEERED FOR DOMINANCE</span>
          </span>
        </motion.div>

        {/* Main Display Headline with Motion - Forced Black for Light Mode */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`hybrid-title text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight transition-colors duration-300 ${
            theme === 'light' ? '!text-black' : '!text-white'
          }`}
        >
          We Don't Just Write Code, <br />
          <span className="gradient-text-hybrid bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            We Engineer Autonomous Growth.
          </span>
        </motion.h2>

        {/* Subtext Description with Motion */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`hybrid-description text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-colors duration-300 ${
            theme === 'light' ? 'text-slate-700' : 'text-slate-400'
          }`}
        >
          Xenkora is a full-stack AI automation and high-velocity digital engineering agency. 
          We combine enterprise MERN/Shopify architecture, autonomous WhatsApp workflows, and 
          algorithmic lead-gen systems—turning complex operations into compounding revenue engines.
        </motion.p>

        {/* Secondary Trust / Remote-First Meta Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="meta-strip flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm mb-10"
        >
          <div className={`meta-item flex items-center gap-2 backdrop-blur-xl border px-4 py-2 rounded-xl transition-all duration-300 ${
            theme === 'light' 
              ? 'bg-white/90 border-slate-200 text-slate-800 shadow-md shadow-slate-200/50' 
              : 'bg-slate-900/60 border-white/10 text-slate-300'
          }`}>
            <Globe2 size={16} className="meta-icon text-amber-500 dark:text-amber-400" />
            <span>Remote-First Global Delivery (US, UK, ME, APAC)</span>
          </div>
          <span className="meta-divider text-amber-500 hidden sm:inline">•</span>
          <div className={`meta-item flex items-center gap-2 backdrop-blur-xl border px-4 py-2 rounded-xl transition-all duration-300 ${
            theme === 'light' 
              ? 'bg-white/90 border-slate-200 text-slate-800 shadow-md shadow-slate-200/50' 
              : 'bg-slate-900/60 border-white/10 text-slate-300'
          }`}>
            <Cpu size={16} className="meta-icon text-amber-500 dark:text-amber-400" />
            <span>Full-Stack AI + MERN + CRM Ecosystems</span>
          </div>
        </motion.div>

        {/* Action Buttons with Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hybrid-cta-group flex justify-center"
        >
          <motion.a 
            href="https://wa.me/923222272737?text=Hi%20Xenkora%20Technologies,%20I%20want%20to%20discuss%20a%20new%20project."
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary-gradient-hybrid inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-xl shadow-amber-600/30 transition-all duration-300 no-underline cursor-pointer"
          >
            <span>Scale Your Brand</span>
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

      </div>
      </Zoom>
    </section>
  );
};

export default AboutFir;
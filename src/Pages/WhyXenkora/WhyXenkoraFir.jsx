import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion import kiya
import './WhyXenkoraFir.css';
import { ArrowRight, Sparkles } from 'lucide-react';

const WhyXenkoraFir = () => {
  return (
    <section className="why-choose-section py-24 relative overflow-hidden text-white">
      <div className="why-choose-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
   
        {/* Top Badge with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10"
        >
          <Sparkles size={14} className="badge-icon text-amber-400 animate-pulse" />
          <span>ENGINEERED FOR EXCELLENCE</span>
        </motion.div>

        {/* Main Heading with Motion */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="why-title text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Why Industry Leaders Choose <br />
          Xenkora Technologies <span className="highlight-gradient bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">In 2026.</span>
        </motion.h1>

        {/* Subtitle description with Motion */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="why-description text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          We architect enterprise-grade digital infrastructure, high-conversion platforms, <br className="hidden sm:inline" />
          and intelligent automation systems. Partner with senior-only engineering squads <br className="hidden sm:inline" />
          committed to measurable business growth and technological dominance.
        </motion.p>

        {/* Buttons Group with Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="button-group flex justify-center"
        >
          <motion.a 
            href="https://wa.me/923222272737?text=Hi%20Xenkora%20Technologies,%20I%20want%20to%20discuss%20a%20new%20project." 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-xl shadow-amber-600/30 transition-all duration-300 no-underline cursor-pointer"
          >
            <span>Schedule Architecture Review</span> 
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyXenkoraFir;
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Framer Motion import kiya
import './HeroSecFir.css';
import {  Zoom } from 'react-awesome-reveal';

const HeroSecFir = () => {
  return (
    <section id="hero-section" className="relative overflow-hidden hero-section">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <Zoom duration={2500}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Floating Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Engineering Digital Growth 🚀</span>
        </motion.div>

        {/* Main Hero Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6"
        >
          We Engineer Solutions That <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            Accelerate Digital Growth
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          From cutting-edge software architecture to high-impact digital ecosystems, Xenkora Technologies crafts solutions that transform complex challenges into seamless market success.
        </motion.p>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 shadow-xl shadow-amber-600/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        </div>
        </Zoom>
    </section>
  );
};

export default HeroSecFir;
import React from 'react';
import { motion } from 'framer-motion'; 
import './HeroSecSec.css';
import { Zoom, Slide } from 'react-awesome-reveal';
import { useTheme } from '../../Context/ThemeContext.jsx'; // Theme import kiya

const HeroSecSec = () => {
  const [theme] = useTheme(); // Theme state get kiya

  const topTickerItems = [
    "Marketing",
    "SEO",
    "Performance Ads",
    "Branding",
    "Web Development",
    "Content Strategy",
    "Influencer Marketing",
    "UI/UX Design",
    "Cloud Solutions",
    "AI Automation",
    "App Development",
    "Cyber Security"
  ];

  const bottomTickerItems = [
    "Digital Transformation",
    "Custom Software",
    "E-Commerce Growth",
    "GoHighLevel Automation",
    "Meta & Google Ads",
    "Chatbot Engineering",
    "Full-Stack MERN",
    "API Integrations",
    "Conversion Rate Optimization",
    "SaaS Architecture",
    "Enterprise Solutions",
    "Growth Strategy"
  ];

  return (
    <section className={`relative overflow-hidden hero-stats-section py-10 transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50' : ''
    }`}>
      
      <Zoom duration={1500}>
      {/* 1. Top Auto-Scrolling Marquee Strip */}
      <div className={`w-full overflow-hidden border-y py-4 mb-12 transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-200/60 border-slate-300' : 'bg-slate-900/40 border-white/5'
      }`}>
        <div className="flex w-max animate-marquee space-x-8">
          {[...topTickerItems, ...topTickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0 px-4">
              <span className={`font-medium text-base sm:text-lg tracking-wide transition-colors ${
                theme === 'light' ? 'text-slate-800' : 'text-slate-300'
              }`}>{item}</span>
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            </div>
          ))}
        </div>
      </div>

        <Slide duration={1000}>
      {/* Stats Counter Box with Framer Motion Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-white/80 border-slate-200 shadow-slate-200/50' 
            : 'bg-slate-900/60 border-white/10 shadow-black/50'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-2"
            >
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-1 ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}>99.8%</h2>
              <p className={`text-xs sm:text-sm ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>Project Success Rate</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent mb-1">4.8x</h2>
              <p className={`text-xs sm:text-sm ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>Average Client Scalability</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-2"
            >
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-1 ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}>250+</h2>
              <p className={`text-xs sm:text-sm ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>Global Deployments</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-2"
            >
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-1 ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}>24/7</h2>
              <p className={`text-xs sm:text-sm ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>Dedicated Tech Support</p>
            </motion.div>

          </div>
        </div>
        </motion.div>
        </Slide>

      {/* 2. Bottom Auto-Scrolling Marquee Strip */}
      <div className={`w-full overflow-hidden border-y py-4 mt-12 transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-200/60 border-slate-300' : 'bg-slate-900/40 border-white/5'
      }`}>
        <div className="flex w-max animate-marquee-reverse space-x-8">
          {[...bottomTickerItems, ...bottomTickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0 px-4">
              <span className={`font-medium text-base sm:text-lg tracking-wide transition-colors ${
                theme === 'light' ? 'text-slate-800' : 'text-slate-300'
              }`}>{item}</span>
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            </div>
          ))}
        </div>
        </div>
        </Zoom>

    </section>
  );
};

export default HeroSecSec;
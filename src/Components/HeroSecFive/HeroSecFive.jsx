import React from 'react';
import { motion } from 'framer-motion'; 
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSecFive.css';
import { Zoom } from 'react-awesome-reveal';
import { useTheme } from '../../Context/ThemeContext.jsx'; // Theme import kiya

const HeroSecFive = () => {
  const [theme] = useTheme(); // Theme state get kiya

  const industriesList = [
    { title: "FINTECH & SaaS", stats: "12+ Platform Launches", icon: "💡", path: "/industries/fintech-saas" },
    { title: "E-COMMERCE & RETAIL", stats: "15+ Scale Projects", icon: "🛍️", path: "/industries/e-commerce-retail" },
    { title: "HEALTHCARE & CLINICS", stats: "10+ Case Studies", icon: "🩺", path: "/industries/healthcare-clinics" },
    { title: "REAL ESTATE", stats: "8+ Success Stories", icon: "🏢", path: "/industries/real-estate" },
    { title: "EDTECH & EDUCATION", stats: "11+ Implementations", icon: "🎓", path: "/industries/edtech-education" },
    { title: "PROFESSIONAL CONSULTANTS", stats: "6+ Success Stories", icon: "💼", path: "/industries/professional-consultants" },
    { title: "LEGAL & LAW FIRMS", stats: "7+ Success Stories", icon: "⚖️", path: "/industries/legal-law-firms" },
    { title: "HR & RECRUITMENT", stats: "9+ Case Studies", icon: "👥", path: "/industries/hr-recruitment" },
    { title: "TRAVEL & TOURISM", stats: "5+ Case Studies", icon: "✈️", path: "/industries/travel-tourism" },
    { title: "FITNESS & GYMS", stats: "10+ Scale Projects", icon: "⚡", path: "/industries/fitness-gyms" }
  ];

  return (
    <section className={`relative overflow-hidden industries-section py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Zoom duration={1500}>
        {/* Section Heading with Motion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-amber-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>MARKET EXPERTISE</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 transition-colors duration-300 ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
          >
            Engineered For Every <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Market Vertical.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-base sm:text-lg transition-colors duration-300 ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-400'
            }`}
          >
            From modern SaaS platforms to global enterprises, e-commerce giants to elite clinics—we drive transformative growth across top industries.
          </motion.p>
        </div>

        {/* 10 Grid Cards Layout with Staggered Animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {industriesList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }} 
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Link
                to={item.path}
                className={`backdrop-blur-xl rounded-2xl p-5 text-center flex flex-col items-center justify-between min-h-[190px] shadow-lg transition-all duration-300 group no-underline h-full border ${
                  theme === 'light'
                    ? 'bg-white/80 border-slate-200 hover:border-amber-500/50 hover:bg-white hover:shadow-xl hover:shadow-amber-500/10'
                    : 'bg-slate-900/60 border-white/10 hover:border-amber-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-amber-500/15'
                }`}
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-700/15 border border-amber-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-300">
                  <span>{item.icon}</span>
                </div>

                {/* Title & Stats */}
                <div>
                  <h3 className={`text-xs sm:text-sm font-bold mb-1.5 tracking-wider uppercase transition-colors ${
                    theme === 'light' ? 'text-slate-900 group-hover:text-amber-600' : 'text-slate-100 group-hover:text-amber-300'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs flex items-center justify-center gap-1 transition-colors ${
                    theme === 'light' ? 'text-slate-600 group-hover:text-slate-900' : 'text-slate-400 group-hover:text-slate-300'
                  }`}>
                    <span>{item.stats}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-500 dark:text-amber-400" />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
          </div>
          </Zoom>

      </div>
    </section>
  );
};

export default HeroSecFive;
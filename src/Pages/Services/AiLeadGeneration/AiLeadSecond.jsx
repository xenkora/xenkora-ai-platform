import React from 'react';
import { motion } from 'framer-motion';
import { Target, MessageSquareCode, Sparkles, Database, BarChart3, Zap } from 'lucide-react';
import './AiLeadSecond.css';
import { Zoom } from "react-awesome-reveal";
import { useTheme } from '../../../Context/ThemeContext'; // Theme import kiya

const servicesData = [
  {
    icon: <Target className="service-icon w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "AI-Powered Prospecting",
    description: "Instantly extracts and verifies high-intent decision-makers tailored to your ideal customer profile."
  },
  {
    icon: <MessageSquareCode className="service-icon w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Omnichannel Outreach",
    description: "Automates multi-touch campaigns smoothly across Email, LinkedIn, WhatsApp, and SMS."
  },
  {
    icon: <Sparkles className="service-icon w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Dynamic AI Copywriting",
    description: "Generates hyper-personalized messages targeting individual pain points at scale."
  },
  {
    icon: <Database className="service-icon w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Advanced CRM Architecture",
    description: "Seamlessly integrates pipelines directly into GoHighLevel, HubSpot, or custom CRMs."
  },
  {
    icon: <BarChart3 className="service-icon w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Real-time Analytics & Reporting",
    description: "Tracks active pipelines, booked meetings, conversion rates, and closed revenue live."
  },
  {
    icon: <Zap className="service-icon w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Continuous Optimization",
    description: "Runs weekly script tests and prompt tuning to maximize your conversion ROI automatically."
  }
];

const AiLeadSecond = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <Zoom>
      <section className={`service-section py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
      }`}>
        {/* Background Glow */}
        <div className="service-glow"></div>

        <div className="service-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="service-header text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`service-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-300 ${
                theme === 'light' ? '!text-black' : '!text-white'
              }`}
            >
              What Powers Our <span className="gradient-ai bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Autonomous</span> <br />
              <span className="gradient-lead bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent">Lead Generation Ecosystem</span>
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`service-card p-8 rounded-3xl border transition-all duration-300 group flex flex-col items-start ${
                  theme === 'light' 
                    ? 'bg-white/90 border-slate-200 shadow-sm hover:border-amber-500/40' 
                    : 'bg-slate-900/60 border-white/10 backdrop-blur-xl shadow-xl hover:border-amber-500/40'
                }`}
              >
                <div className={`service-icon-box p-3 rounded-2xl border mb-6 transition-transform group-hover:scale-110 ${
                  theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-950/80 border-white/10'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`service-card-title text-lg sm:text-xl font-bold mb-3 transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-900 group-hover:text-amber-600' : 'text-white group-hover:text-amber-300'
                }`}>
                  {service.title}
                </h3>
                <p className={`service-card-desc text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-400'
                }`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Zoom>
  );
};

export default AiLeadSecond;
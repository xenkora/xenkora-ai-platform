import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Zap, Calendar, Database, ShieldCheck } from 'lucide-react';
import './WhatsappChatbotSec.css';
import { Zoom } from 'react-awesome-reveal';
import { useTheme } from '../../../Context/ThemeContext'; // Theme import kiya

const featureList = [
  {
    icon: <MessageSquare className="w-6 h-6 text-amber-400" />,
    title: "Instant 24/7 Auto-Reply",
    description: "Respond to customer inquiries within seconds on WhatsApp, eliminating wait times and maximizing conversion opportunities."
  },
  {
    icon: <Bot className="w-6 h-6 text-amber-400" />,
    title: "LLM Contextual Conversations",
    description: "Leverage advanced AI language models trained on your business data to deliver human-like, accurate replies."
  },
  {
    icon: <Calendar className="w-6 h-6 text-amber-400" />,
    title: "Automated Appointment Scheduling",
    description: "Allow leads to pick available slots and book appointments directly inside WhatsApp with Google/Calendly sync."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    title: "Broadcasting & Re-engagement",
    description: "Send automated WhatsApp campaign broadcasts, promotional updates, and cart recovery sequences smoothly."
  },
  {
    icon: <Database className="w-6 h-6 text-amber-400" />,
    title: "CRM & ERP Integration",
    description: "Automatically log all contact details, chat transcripts, and lead statuses directly into HubSpot, CRM, or custom backends."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    title: "Official Meta API Compliance",
    description: "Built strictly on Meta Cloud API standards ensuring 99.9% uptime, verified sender badges, and zero risk of ban."
  }
];

const WhatsappChatbotSec = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <Zoom duration={1500}>
      <section className={`wa-features-section transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : ''
      }`}>
        <div className="wa-features-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 transition-colors duration-300 ${
                theme === 'light' ? '!text-black' : 'text-white'
              }`}
            >
              Capabilities of Our <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">WhatsApp AI Ecosystem</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-base sm:text-lg transition-colors duration-300 ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Empower your sales and support teams with intelligent automation engineered for peak conversions on WhatsApp.
            </motion.p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureList.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`wa-feature-card group transition-colors duration-300 ${
                  theme === 'light' ? 'bg-white/90 border border-slate-200 shadow-sm' : ''
                }`}
              >
                <div className={`wa-feature-icon-box transition-colors duration-300 ${
                  theme === 'light' ? 'text-amber-600' : ''
                }`}>
                  {item.icon}
                </div>
                <h3 className={`wa-feature-title transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-900' : ''
                }`}>
                  {item.title}
                </h3>
                <p className={`wa-feature-desc transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-600' : ''
                }`}>
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

export default WhatsappChatbotSec;
import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Share2, TrendingUp, Sparkles, UserCheck, BarChart3 } from 'lucide-react';
import './AiMarketingSec.css';
import { Slide } from "react-awesome-reveal";
import { useTheme } from '../../../Context/ThemeContext'; // Theme import kiya

const marketingServices = [
  {
    number: "01",
    icon: <GitBranch className="service-icon" />,
    title: "Customer Journey Mapping",
    description: "Awareness, engagement, conversion, retention."
  },
  {
    number: "02",
    icon: <Share2 className="service-icon" />,
    title: "Multi-Channel Automation",
    description: "Email, SMS, WhatsApp, social & push."
  },
  {
    number: "03",
    icon: <TrendingUp className="service-icon" />,
    title: "AI Lead Scoring",
    description: "Behavior and purchase intent based."
  },
  {
    number: "04",
    icon: <Sparkles className="service-icon" />,
    title: "AI Content & Creative",
    description: "AI-assisted, brand-focused content creation."
  },
  {
    number: "05",
    icon: <UserCheck className="service-icon" />,
    title: "AI Personalization",
    description: "Personalized experiences across every touchpoint."
  },
  {
    number: "06",
    icon: <BarChart3 className="service-icon" />,
    title: "Analytics & ROI Dashboards",
    description: "Track performance, conversions and revenue."
  }
];

const AiMarketingSec = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <Slide>
      <section className={`amf-section transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : ''
      }`}>
        {/* Background Glow */}
        <div className="amf-glow"></div>

        <div className="amf-container">
          
          {/* Section Heading matching reference image */}
          <div className="amf-header">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`amf-title transition-colors duration-300 ${
                theme === 'light' ? '!text-black' : ''
              }`}
            >
              Everything Included In Our <span className="amf-gradient-ai">AI</span> <br />
              <span className="amf-gradient-market">Marketing Automation</span> <br />
              <span className={`amf-white-text transition-colors duration-300 ${
                theme === 'light' ? '!text-slate-900' : ''
              }`}>Service</span>
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <div className="amf-grid">
            {marketingServices.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`amf-card transition-colors duration-300 ${
                  theme === 'light' ? 'bg-white/90 border border-slate-200 shadow-sm' : ''
                }`}
              >
                <div className="amf-card-top">
                  <div className={`amf-icon-box transition-colors duration-300 ${
                    theme === 'light' ? 'text-amber-600' : ''
                  }`}>
                    {service.icon}
                  </div>
                  <span className={`amf-number transition-colors duration-300 ${
                    theme === 'light' ? 'text-slate-400' : ''
                  }`}>{service.number}</span>
                </div>
                <h3 className={`amf-card-title transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-900' : ''
                }`}>{service.title}</h3>
                <p className={`amf-card-desc transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-600' : ''
                }`}>{service.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Slide>
  );
};

export default AiMarketingSec;
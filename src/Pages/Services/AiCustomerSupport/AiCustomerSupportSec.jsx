import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Globe2, Brain, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import './AiCustomerSupportSec.css';
import { Bounce } from 'react-awesome-reveal';
import { useTheme } from '../../../Context/ThemeContext.jsx'; // Theme import kiya

const supportFeatures = [
  {
    icon: <Headset className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Instant 24/7 Resolution",
    description: "Provide non-stop automated customer support across web chat, email, and social apps without increasing team headcount."
  },
  {
    icon: <Brain className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Self-Learning AI Brain",
    description: "Trained continuously on knowledge bases, help docs, and resolved tickets to deliver highly accurate, contextual replies."
  },
  {
    icon: <Globe2 className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "50+ Languages Support",
    description: "Break language barriers by providing real-time fluent support in over 50 global languages out-of-the-box."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Automated Ticket Triage",
    description: "Categorize, tag, and prioritize incoming requests automatically before routing to specialized human departments."
  },
  {
    icon: <Layers className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Helpdesk & CRM Sync",
    description: "Integrate seamlessly with Zendesk, Freshdesk, Intercom, Salesforce, and HubSpot for unified conversation histories."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    title: "Enterprise Grade Security",
    description: "SOC2 compliant encryption and data privacy controls ensuring customer personal data is safely protected at all times."
  }
];

const AiCustomerSupportSec = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <Bounce duration={2500}>
      <section className={`ai-features-section py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
      }`}>
        <div className="ai-features-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 transition-colors duration-300 ${
                theme === 'light' ? '!text-black' : '!text-white'
              }`}
            >
              Features of Our <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">AI Customer Support Platform</span>
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
              Empower your brand with automated support agents built to resolve tickets faster and boost customer retention.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportFeatures.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`ai-feature-card p-8 rounded-3xl border transition-all duration-300 group ${
                  theme === 'light' 
                    ? 'bg-white/90 border-slate-200 shadow-sm hover:border-amber-500/40' 
                    : 'bg-slate-900/60 border-white/10 backdrop-blur-xl shadow-xl hover:border-amber-500/40'
                }`}
              >
                <div className={`ai-feature-icon-box p-3 rounded-2xl border w-fit mb-6 transition-transform group-hover:scale-110 ${
                  theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-950/80 border-white/10'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`ai-feature-title text-lg sm:text-xl font-bold mb-3 transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-900 group-hover:text-amber-600' : 'text-white group-hover:text-amber-300'
                }`}>
                  {item.title}
                </h3>
                <p className={`ai-feature-desc text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-400'
                }`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Bounce>
  );
};

export default AiCustomerSupportSec;
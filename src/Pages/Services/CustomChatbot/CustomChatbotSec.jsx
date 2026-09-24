import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Workflow, ShieldCheck, Sparkles } from 'lucide-react';
import './CustomChatbotSec.css';
import { Bounce } from 'react-awesome-reveal';
import { useTheme } from '../../../Context/ThemeContext'; // Theme import kiya

const customFeatures = [
  {
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    title: "Custom LLM Fine-Tuning",
    description: "Fine-tune models (Llama 3, GPT-4o, Claude 3.5) on your company's domain knowledge and specific communication style."
  },
  {
    icon: <Database className="w-6 h-6 text-amber-400" />,
    title: "RAG & Vector Database Architecture",
    description: "Implement high-speed vector search (Pinecone, Qdrant) to retrieve accurate answers from millions of internal documents."
  },
  {
    icon: <Workflow className="w-6 h-6 text-amber-400" />,
    title: "Autonomous Action Execution",
    description: "Equip your AI bot with tool calling abilities to execute database queries, trigger webhooks, and process transactions."
  },
  {
    icon: <Code2 className="w-6 h-6 text-amber-400" />,
    title: "Custom UI/UX Widget Design",
    description: "Craft pixel-perfect, branded chat interface components with dark mode, animations, and voice inputs."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    title: "Multi-Agent System Orchestration",
    description: "Deploy specialized sub-agents working together (e.g. Sales Bot + Technical Support Bot + Billing Agent)."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    title: "Private Cloud & On-Premises Hosting",
    description: "Deploy securely on AWS, GCP, Azure, or private enterprise servers with zero data sharing to public models."
  }
];

const CustomChatbotSec = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <Bounce duration={2500}>
      <section className={`custom-chatbot-section transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : ''
      }`}>
        <div className="custom-chatbot-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
              Engineered For Precision: <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">Custom AI Capabilities</span>
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
              Standard chatbots have limitations. Our custom engineered solutions give you total control, security, and performance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customFeatures.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`custom-chatbot-card group transition-colors duration-300 ${
                  theme === 'light' ? 'bg-white/90 border border-slate-200 shadow-sm' : ''
                }`}
              >
                <div className={`custom-chatbot-icon-box transition-colors duration-300 ${
                  theme === 'light' ? 'text-amber-600' : ''
                }`}>
                  {item.icon}
                </div>
                <h3 className={`custom-chatbot-title transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-900' : ''
                }`}>
                  {item.title}
                </h3>
                <p className={`custom-chatbot-desc transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-600' : ''
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

export default CustomChatbotSec;
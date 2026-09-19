import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './CustomChatbotFir.css';
import {Zoom, Slide} from 'react-awesome-reveal'
const CustomChatbotFir = () => {
  return (
    <section className="chatbot-section">
      <div className="chatbot-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <Slide>
          {/* Left: Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group chatbot-image-wrapper"
          >
            <div className="chatbot-image-glow" />
            <div className="chatbot-image-box">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
                alt="Custom AI Chatbot Development" 
                className="chatbot-image"
              />
            </div>
            </motion.div>
            </Slide>

          <Zoom duration={1500}>
          {/* Right: Content */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white"
            >
              Build Tailored AI Solutions With <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">Custom Chatbot Development</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              We design and engineer bespoke enterprise AI chatbots built specifically for your brand workflows, internal databases, and business logic. From custom LLM fine-tuning to seamless multi-platform deployments, we turn complex operations into conversational efficiency.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3.5 pt-2"
            >
              {[
                "Custom Fine-Tuned Open-Source & OpenAI/Claude Models",
                "RAG Architecture for Proprietary Enterprise Data",
                "Omnichannel Deployment (Web, iOS, Android, Telegram, Discord)",
                "Full Ownership of Codebase & Data Privacy Controls"
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + (idx * 0.08) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-slate-200 text-sm sm:text-base font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            </div>
            </Zoom>

        </div>
      </div>
    </section>
  );
};

export default CustomChatbotFir;
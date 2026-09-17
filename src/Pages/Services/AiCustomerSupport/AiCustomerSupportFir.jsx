import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './AiCustomerSupportFir.css';

const AiCustomerSupportFir = () => {
  return (
    <section className="ai-support-section">
      {/* Glow background */}
      <div className="ai-support-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image / Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group ai-image-wrapper"
          >
            <div className="ai-image-glow" />
            <div className="ai-image-box">
              <img 
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80" 
                alt="AI Customer Support Agent" 
                className="ai-image"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white"
            >
              Elevate CX With <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">Autonomous AI Customer Support</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              Eliminate tickets backlog and delight customers with instant, 24/7 intelligent resolution across web, email, and social channels. Our custom-trained AI support agents handle up to 80% of routine inquiries autonomously with high customer satisfaction scores.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3.5 pt-2"
            >
              {[
                "24/7 Multilingual Ticket Resolution Under 10 Seconds",
                "Deep Knowledge-Base & Documentation Training",
                "Automated Order Tracking, Returns & Ticket Triage",
                "Seamless Human Agent Escalation & Handover"
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

        </div>
      </div>
    </section>
  );
};

export default AiCustomerSupportFir;
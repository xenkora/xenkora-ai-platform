import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './WhatsappChatbotFir.css'; 
import {Zoom,Bounce} from 'react-awesome-reveal'
const WhatsappChatbotFir = () => {
  return (
    <Bounce duration={2500}>
    <section className="wa-chatbot-section">
      
      {/* Background Glow Effect */}
      <div className="wa-chatbot-glow"></div>

      {/* Main Container */}
      <div className="wa-chatbot-container">
        
        {/* Left Side: Chat UI / Tech Card with Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="wa-chatbot-img-wrapper"
        >
          <div className="wa-chatbot-card">
            <img 
              src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80" 
              alt="WhatsApp Chatbot Automation Interface" 
              className="wa-chatbot-img"
            />
          </div>
        </motion.div>

        {/* Right Side: Professional Content & Features */}
        <div className="wa-chatbot-content">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="wa-chatbot-title"
          >
            Supercharge Engagement With <span className="wa-chatbot-gradient-text">Intelligent WhatsApp Chatbot Automation</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="wa-chatbot-desc"
          >
            Transform conversational traffic into qualified pipeline 24/7. Deploy context-aware LLM-powered WhatsApp agents that handle inbound leads, answer product queries, qualify prospects, and book meetings directly inside chat threads without human friction.
          </motion.p>

          {/* Feature List */}
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="wa-chatbot-list"
          >
            {[
              "24/7 Instant AI Response & Lead Qualification",
              "Automated Meeting Booking & Calendar Sync",
              "Contextual Product & Order Inquiry Handling",
              "Native CRM & GoHighLevel Pipeline Handover"
            ].map((text, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + (idx * 0.08) }}
                className="wa-chatbot-item"
              >
                <CheckCircle2 className="wa-chatbot-icon" />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>

        </div>

      </div>
      </section>
      </Bounce>
  );
};

export default WhatsappChatbotFir;
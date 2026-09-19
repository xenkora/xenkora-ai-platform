import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './AiLeadGeneration.css'; 
import {Slide} from 'react-awesome-reveal'
const AiLeadGeneration = () => {
  return (
    <Slide>
    <section className="ai-lead-section">
      
      {/* Background Glow Effect */}
      <div className="ai-lead-glow"></div>

      {/* Main Container */}
      <div className="ai-lead-container">
        
        {/* Left Side: Dashboard Card with Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="ai-lead-img-wrapper"
        >
          <div className="ai-lead-card">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="AI Analytics Dashboard" 
              className="ai-lead-img"
            />
          </div>
        </motion.div>

        {/* Right Side: Professional Content & Features */}
        <div className="ai-lead-content">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="ai-lead-title"
          >
            Supercharge Growth With <span className="ai-lead-gradient-text">Intelligent AI Lead Generation</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="ai-lead-desc"
          >
            Revolutionize your sales pipeline using advanced machine learning models to identify high-value prospects, automate personalized multi-channel outreach, and convert meetings effortlessly. We combine state-of-the-art AI tech with expert strategy to drive predictable revenue.
          </motion.p>

          {/* Feature List */}
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ai-lead-list"
          >
            {[
              "AI-Enriched High-Intent B2B Prospect Lists",
              "Hyper-Personalized Email & LinkedIn Outreach",
              "Automated Omnichannel Follow-ups & Sequences",
              "Seamless CRM Sync & Real-time Analytics"
            ].map((text, idx) => (
              <motion.li 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + (idx * 0.08) }}
                className="ai-lead-item"
              >
                <CheckCircle2 className="ai-lead-icon" />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>

        </div>

      </div>
      </section>
      </Slide>
  );
};

export default AiLeadGeneration;
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './AiMarketingFirst.css'; 
import {Zoom} from 'react-awesome-reveal'
const AiMarketingFirst = () => {
  return (
    <Zoom duration={1500}>
    <section className="ai-marketing-section">
      
      {/* Background Glow Effect */}
      <div className="ai-marketing-glow"></div>

      {/* Main Container */}
      <div className="ai-marketing-container">
        
        {/* Left Side: Dashboard Card with Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="ai-marketing-img-wrapper"
        >
          <div className="ai-marketing-card">
            <img 
              src="https://media.istockphoto.com/id/815815658/photo/cyborg-and-new-manketing-strategy-formula.jpg?s=1024x1024&w=is&k=20&c=olTx1oabTCWLoKroPWXoE-rgr7vZf_QLPjrgH33jd_o=" 
              alt="AI Robot Marketing Automation" 
              className="ai-marketing-img"
            />
          </div>
        </motion.div>

        {/* Right Side: Professional Content & Features */}
        <div className="ai-marketing-content">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="ai-marketing-title"
          >
            Supercharge Growth With <span className="ai-marketing-gradient-text">Intelligent AI Marketing Automation</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="ai-marketing-desc"
          >
            Scale your brand presence and customer engagement using advanced machine learning workflows to trigger personalized campaigns, automate customer journeys, and drive continuous conversions. We combine state-of-the-art AI technology with strategic execution to maximize your marketing ROI.
          </motion.p>

          {/* Feature List */}
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ai-marketing-list"
          >
            {[
              "AI-Driven Behavior-Based Campaign Triggers",
              "Omnichannel Customer Journey Automation",
              "Dynamic Ad & Content Optimization Loops",
              "Real-Time Performance Tracking & Analytics"
            ].map((text, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + (idx * 0.08) }}
                className="ai-marketing-item"
              >
                <CheckCircle2 className="ai-marketing-icon" />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>

        </div>

      </div>
      </section>
      </Zoom>
  );
};

export default AiMarketingFirst;
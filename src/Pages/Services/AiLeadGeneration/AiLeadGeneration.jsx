import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './AiLeadGeneration.css'; 
import { Slide } from 'react-awesome-reveal';
import { useTheme } from '../../../Context/ThemeContext'; // Theme import kiya

const AiLeadGeneration = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <Slide>
      <section className={`ai-lead-section py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
      }`}>
        
        {/* Background Glow Effect */}
        <div className="ai-lead-glow"></div>

        {/* Main Container */}
        <div className="ai-lead-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Dashboard Card with Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="ai-lead-img-wrapper relative group"
            >
              <div className={`ai-lead-card rounded-3xl overflow-hidden border transition-colors duration-300 ${
                theme === 'light' 
                  ? 'bg-white/90 border-slate-200 shadow-xl' 
                  : 'bg-slate-900/60 border-white/10 backdrop-blur-xl shadow-2xl'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="AI Analytics Dashboard" 
                  className="ai-lead-img w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side: Professional Content & Features */}
            <div className="ai-lead-content space-y-6">
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`ai-lead-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-300 ${
                  theme === 'light' ? '!text-black' : '!text-white'
                }`}
              >
                Supercharge Growth With <span className="ai-lead-gradient-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">Intelligent AI Lead Generation</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`ai-lead-desc text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-400'
                }`}
              >
                Revolutionize your sales pipeline using advanced machine learning models to identify high-value prospects, automate personalized multi-channel outreach, and convert meetings effortlessly. We combine state-of-the-art AI tech with expert strategy to drive predictable revenue.
              </motion.p>

              {/* Feature List */}
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="ai-lead-list space-y-3.5 pt-2"
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
                    className="ai-lead-item flex items-center gap-3"
                  >
                    <CheckCircle2 className={`ai-lead-icon w-5 h-5 shrink-0 transition-colors duration-300 ${
                      theme === 'light' ? 'text-amber-600' : 'text-amber-400'
                    }`} />
                    <span className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                      theme === 'light' ? 'text-slate-800' : 'text-slate-200'
                    }`}>
                      {text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

            </div>

          </div>

        </div>
      </section>
    </Slide>
  );
};

export default AiLeadGeneration;
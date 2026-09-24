import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FaqsAiLead.css';
import { Bounce } from 'react-awesome-reveal';
import { useTheme } from '../../../Context/ThemeContext'; // Theme import kiya

const faqData = [
  {
    question: "How much does AI lead generation cost?",
    answer: "Pricing is customized based on your volume, target market, and infrastructure requirements. We offer flexible packages tailored to scale your pipeline profitably."
  },
  {
    question: "Is this cold outreach?",
    answer: "Yes, but with a modern twist. We leverage deep learning and hyper-personalized data to target high-intent prospects, making it feel warm, relevant, and engaging rather than spammy."
  },
  {
    question: "Which channels do you use?",
    answer: "We run multi-channel campaigns seamlessly across Email, LinkedIn, WhatsApp, and SMS to maximize your response and conversion rates."
  },
  {
    question: "Do you guarantee meetings?",
    answer: "We build high-converting predictable pipelines and optimize campaigns continuously. While results depend on your offer and niche, our systems are engineered to consistently secure booked meetings."
  },
  {
    question: "Do I own the leads?",
    answer: "100%. Every single verified lead, contact detail, and conversation belongs entirely to you and is synced directly into your CRM."
  },
  {
    question: "Is this GDPR compliant?",
    answer: "Yes, our outreach strategies, data scraping protocols, and mailing sequences strictly adhere to international data privacy regulations including GDPR and CAN-SPAM."
  }
];

const FaqsAiLead = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [theme] = useTheme(); // Theme state get kiya

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Bounce>
      <section className={`faq-section transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : ''
      }`}>
        {/* Background Glow */}
        <div className="faq-glow"></div>

        <div className="faq-container">
          
          {/* Section Header */}
          <div className="faq-header">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`faq-title transition-colors duration-300 ${
                theme === 'light' ? '!text-black' : ''
              }`}
            >
              Frequently Asked <span className="gradient-faq">Questions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`faq-subtitle transition-colors duration-300 ${
                theme === 'light' ? 'text-slate-600' : ''
              }`}
            >
              Got questions about our AI lead generation ecosystem? Find clear answers below.
            </motion.p>
          </div>

          {/* FAQ List */}
          <div className="faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`faq-item transition-colors duration-300 ${
                    theme === 'light' ? 'bg-white/90 border border-slate-200 shadow-sm' : ''
                  } ${isActive ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question-box">
                    <h3 className={`faq-question transition-colors duration-300 ${
                      theme === 'light' ? 'text-slate-900' : ''
                    }`}>{faq.question}</h3>
                    <ChevronDown className={`faq-chevron transition-colors duration-300 ${
                      theme === 'light' ? 'text-amber-600' : ''
                    } ${isActive ? 'rotate' : ''}`} />
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="faq-answer-box">
                          <p className={`faq-answer transition-colors duration-300 ${
                            theme === 'light' ? 'text-slate-700' : ''
                          }`}>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </Bounce>
  );
};

export default FaqsAiLead;
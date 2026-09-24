import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './AiMarketingFaqs.css';
import { Bounce } from 'react-awesome-reveal';
import { useTheme } from '../../../Context/ThemeContext'; // Theme import kiya

const marketingFaqData = [
  {
    question: "What is AI marketing automation and how does it work?",
    answer: "AI marketing automation uses machine learning models and predictive analytics to analyze customer behavior, trigger personalized campaigns across multiple channels, and optimize marketing efforts dynamically at scale."
  },
  {
    question: "Can this integrate with my existing CRM and tools?",
    answer: "Yes. Our automation workflows integrate seamlessly with major CRMs and marketing platforms like GoHighLevel, HubSpot, Klaviyo, Salesforce, and custom tech stacks."
  },
  {
    question: "How does AI personalize customer journeys?",
    answer: "AI tracks real-time user intent, browsing history, and engagement patterns to automatically deliver tailored content, product recommendations, and targeted messages at the exact right moment."
  },
  {
    question: "Do I need technical skills to manage the system?",
    answer: "Not at all. We build and configure the entire ecosystem for you, complete with intuitive dashboards so you can easily monitor performance without touching code."
  },
  {
    question: "How do you measure marketing automation ROI?",
    answer: "We track comprehensive real-time metrics including conversion rates, customer acquisition costs (CAC), lifetime value (LTV), campaign engagement, and generated revenue via custom analytics dashboards."
  },
  {
    question: "Is customer and campaign data secure?",
    answer: "Yes, completely. We follow strict data security protocols, encryption standards, and compliance guidelines (such as GDPR and CCPA) to ensure your business and customer data remains fully protected."
  }
];

const AiMarketingFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [theme] = useTheme(); // Theme state get kiya

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Bounce>
      <section className={`am-faq-section transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : ''
      }`}>
        {/* Background Glow */}
        <div className="am-faq-glow"></div>

        <div className="am-faq-container">
          
          {/* Section Header */}
          <div className="am-faq-header">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`am-faq-title transition-colors duration-300 ${
                theme === 'light' ? '!text-black' : ''
              }`}
            >
              Frequently Asked <span className="am-faq-gradient">Questions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`am-faq-subtitle transition-colors duration-300 ${
                theme === 'light' ? 'text-slate-600' : ''
              }`}
            >
              Everything you need to know about our AI marketing automation solutions.
            </motion.p>
          </div>

          {/* FAQ List */}
          <div className="am-faq-list">
            {marketingFaqData.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`am-faq-item transition-colors duration-300 ${
                    theme === 'light' ? 'bg-white/90 border border-slate-200 shadow-sm' : ''
                  } ${isActive ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="am-faq-question-box">
                    <h3 className={`am-faq-question transition-colors duration-300 ${
                      theme === 'light' ? 'text-slate-900' : ''
                    }`}>{faq.question}</h3>
                    <ChevronDown className={`am-faq-chevron transition-colors duration-300 ${
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
                        <div className="am-faq-answer-box">
                          <p className={`am-faq-answer transition-colors duration-300 ${
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

export default AiMarketingFaqs;
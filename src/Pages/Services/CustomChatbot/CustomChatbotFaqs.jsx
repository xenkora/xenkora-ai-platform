import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './CustomChatbotFaqs.css';
import {Slide} from 'react-awesome-reveal'
const faqsData = [
  {
    question: "What is the difference between a template bot and a custom chatbot?",
    answer: "Template bots rely on hardcoded rule-based paths with rigid responses. A custom chatbot uses fine-tuned Large Language Models (LLMs) and custom vector databases, enabling natural, context-aware conversations that can trigger real actions."
  },
  {
    question: "Do we own the source code and IP of the custom chatbot?",
    answer: "Yes, 100%. Upon project completion, full ownership of the custom codebase, architecture blueprints, and trained model weights is transferred directly to your organization."
  },
  {
    question: "How long does custom chatbot development take?",
    answer: "Depending on your required integrations and fine-tuning complexity, project timelines range from 2 weeks for custom MVP bots to 4–6 weeks for complex multi-agent enterprise deployments."
  },
  {
    question: "Can the chatbot interact with our internal SQL or PostgreSQL database?",
    answer: "Yes, we build secure API connectors allowing the AI bot to execute authorized database queries, generate reports, or update user records safely."
  },
  {
    question: "Is our business data used to train public models?",
    answer: "Never. We enforce strict data privacy protocols with zero data retention on AI API calls and offer self-hosted open-source model options (e.g. Llama 3) for 100% data sovereignty."
  }
];

const CustomChatbotFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Slide>
    <section className="custom-faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-white"
          >
            Frequently Asked <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            Got questions about Custom Chatbot Development? We have answers.
          </motion.p>
        </div>

        <div className="custom-faq-list">
          {faqsData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`custom-faq-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="custom-faq-btn"
                >
                  <span className="custom-faq-question">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <ChevronDown className="custom-faq-icon" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="custom-faq-answer">
                        {faq.answer}
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
      </Slide>
  );
};

export default CustomChatbotFaqs;
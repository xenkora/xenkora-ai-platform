import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './LocalBusinessGrowthFaqs.css';

const faqsData = [
  {
    question: "How does the missed-call text-back automation work?",
    answer: "Whenever someone calls your business number and you are unable to answer, our system instantly sends an SMS asking how you can help, starting an interactive automated text chat before they call a competitor."
  },
  {
    question: "How quickly can we expect more 5-star Google reviews?",
    answer: "Most local clients see a 200%–500% surge in genuine customer 5-star reviews within the first 30 days of activating automated post-service SMS review requests."
  },
  {
    question: "Does this work for home services, medical clinics, and legal practices?",
    answer: "Yes, our local growth systems are tailored specifically for dentists, doctors, law firms, HVAC contractors, plumbers, real estate agencies, and service providers."
  },
  {
    question: "Can this system reduce client no-shows for booked appointments?",
    answer: "Significantly. By utilizing automated 2-way SMS confirmation sequences with 'Reply 1 to Confirm', no-show rates typically drop by up to 75%."
  },
  {
    question: "Do we need to switch our phone numbers or software?",
    answer: "No, we seamlessly connect our automation platform alongside your existing business lines and CRM infrastructure without operational downtime."
  }
];

const LocalBusinessGrowthFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="local-faq-section">
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
            Got questions about Local Business Growth Automation? We have answers.
          </motion.p>
        </div>

        <div className="local-faq-list">
          {faqsData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`local-faq-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="local-faq-btn"
                >
                  <span className="local-faq-question">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <ChevronDown className="local-faq-icon" />
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
                      <div className="local-faq-answer">
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
  );
};

export default LocalBusinessGrowthFaqs;
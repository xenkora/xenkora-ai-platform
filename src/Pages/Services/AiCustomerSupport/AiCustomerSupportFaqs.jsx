import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './AiCustomerSupportFaqs.css';

const faqsData = [
  {
    question: "What percentage of support tickets can AI resolve automatically?",
    answer: "On average, our AI customer support agents resolve between 65% to 85% of tier-1 support queries completely autonomously without human intervention."
  },
  {
    question: "How long does it take to train the AI on our support documents?",
    answer: "Setup typically takes 3 to 7 days. We ingest your existing help documentation, Notion pages, past ticket transcripts, and website URLs."
  },
  {
    question: "Will the AI make up inaccurate information (hallucinate)?",
    answer: "No. We implement strict RAG (Retrieval-Augmented Generation) guardrails ensuring the AI only responds using verified data from your knowledge base."
  },
  {
    question: "Can it integrate with our existing helpdesk software?",
    answer: "Yes, we support native integrations with Zendesk, Freshdesk, Intercom, Gorgias, Help Scout, and custom backend systems."
  },
  {
    question: "How does human agent takeover work?",
    answer: "If a query requires human intervention, the AI tags the ticket, creates a summary of the conversation, and assigns it directly to your support team in real time."
  }
];

const AiCustomerSupportFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="ai-faqs-section">
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
            Got questions about AI Customer Support? Here are clear answers.
          </motion.p>
        </div>

        <div className="ai-faq-list">
          {faqsData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`ai-faq-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="ai-faq-btn"
                >
                  <span className="font-semibold text-base sm:text-lg text-slate-100">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <ChevronDown className="ai-faq-icon" />
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
                      <div className="ai-faq-answer text-slate-300 text-sm sm:text-base leading-relaxed">
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

export default AiCustomerSupportFaqs;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './AiCustomerSupportFaqs.css';
import { Slide } from 'react-awesome-reveal';
import { useTheme } from '../../../Context/ThemeContext.jsx'; // Theme import kiya

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
  const [theme] = useTheme(); // Theme state get kiya

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Slide>
      <section className={`ai-faqs-section py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-14">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-3xl sm:text-4xl font-bold tracking-tight mb-3 transition-colors duration-300 ${
                theme === 'light' ? '!text-black' : '!text-white'
              }`}
            >
              Frequently Asked <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Questions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-sm sm:text-base transition-colors duration-300 ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Got questions about AI Customer Support? Here are clear answers.
            </motion.p>
          </div>

          <div className="ai-faq-list space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`ai-faq-card rounded-2xl border transition-colors duration-300 overflow-hidden ${
                    theme === 'light' 
                      ? 'bg-white/90 border-slate-200 shadow-sm' 
                      : 'bg-slate-900/60 border-white/10 backdrop-blur-xl shadow-lg'
                  } ${isOpen ? 'open' : ''}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="ai-faq-btn w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
                      theme === 'light' ? 'text-slate-900' : 'text-slate-100'
                    }`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 flex items-center justify-center"
                    >
                      <ChevronDown className={`ai-faq-icon transition-colors duration-300 ${
                        theme === 'light' ? 'text-amber-600' : 'text-amber-400'
                      }`} />
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
                        <div className={`ai-faq-answer px-6 pb-6 pt-0 text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                          theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                        }`}>
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

export default AiCustomerSupportFaqs;
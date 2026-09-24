import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // 1. Framer Motion import kiya
// import './HeroSecEig.css';

const HeroSecEig = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Pehla wala default open

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqList = [
    {
      question: "What do your chatbot services include?",
      answer: "Our end-to-end chatbot development includes custom LLM fine-tuning, advanced NLP architecture, multi-platform deployment (WhatsApp, Web, Telegram), UI/UX chat widget design, and rigorous security integration."
    },
    {
      question: "How long does chatbot development take?",
      answer: "Depending on complexity, standard custom AI chatbot solutions take between 1 to 3 weeks from initial scoping and architecture design to final deployment and testing."
    },
    {
      question: "Can you build a totally unique chatbot?",
      answer: "Yes, absolutely. Every chatbot is engineered from scratch tailored precisely to your brand voice, operational workflows, and specific data training requirements—never cookie-cutter templates."
    },
    {
      question: "Will the chatbot integrate with our CRM?",
      answer: "Seamlessly. We integrate custom AI bots with popular CRMs and tools like HubSpot, Salesforce, GoHighLevel (GHL), and custom REST APIs for automated lead syncing."
    },
    {
      question: "Do you serve international clients?",
      answer: "Yes. While based locally, we manage full-scale AI and software development projects for global enterprises across North America, Europe, the UK, and the Middle East."
    }
  ];

  return (
    <section className="faq-section py-20 text-white relative overflow-hidden">
      <div className="container px-3 max-w-7xl mx-auto relative z-10" style={{ maxWidth: '1200px' }}>
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="d-inline-flex align-items-center hero-badge px-3 py-1 rounded-pill mb-3 bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <span className="badge-dot me-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="small font-semibold tracking-wider uppercase">ANSWERS TO YOUR QUESTIONS</span>
          </div>
          <h2 className="display-4 fw-bold mb-3 text-3xl sm:text-4xl lg:text-5xl">
            AI Chatbot Development <span className="gradient-text-faq bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">FAQ's</span>
          </h2>
          <p className="faq-subtitle mx-auto text-slate-400 max-w-2xl text-base sm:text-lg">
            Have questions about our development process, platform integrations, or timelines? Find the answers to our most common inquiries right here.
          </p>
        </motion.div>

        {/* Split Grid Layout: Left wider (col-lg-5), Right (col-lg-7) */}
        <div className="row g-4 align-items-start flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: 3 Action Cards (Slide in from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-12 lg:w-5/12 w-full"
          >
            <div className="d-flex flex-column gap-4">
              
              {/* Card 1 */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="faq-side-card p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 d-flex justify-content-between align-items-center shadow-lg transition-all"
              >
                <div>
                  <h4 className="fw-bold text-white mb-2 fs-4 text-xl">Connect with Our <br />Community</h4>
                  <a href="#connect" className="text-decoration-none side-card-link fw-semibold small text-amber-400 hover:text-amber-300 flex items-center gap-1 mt-2">Get Connected →</a>
                </div>
                <div className="side-card-icon-wrapper w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 d-flex align-items-center justify-content-center text-2xl">
                  <span>👥</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="faq-side-card p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 d-flex justify-content-between align-items-center shadow-lg transition-all"
              >
                <div>
                  <h4 className="fw-bold text-white mb-2 fs-4 text-xl">Live Chat and Support</h4>
                  <a href="#support" className="text-decoration-none side-card-link fw-semibold small text-amber-400 hover:text-amber-300 flex items-center gap-1 mt-2">Get Started →</a>
                </div>
                <div className="side-card-icon-wrapper w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 d-flex align-items-center justify-content-center text-2xl">
                  <span>💬</span>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="faq-side-card p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 d-flex justify-content-between align-items-center shadow-lg transition-all"
              >
                <div>
                  <h4 className="fw-bold text-white mb-2 fs-4 text-xl">Knowledge and Inspiration</h4>
                  <a href="#docs" className="text-decoration-none side-card-link fw-semibold small text-amber-400 hover:text-amber-300 flex items-center gap-1 mt-2">Read Docs →</a>
                </div>
                <div className="side-card-icon-wrapper w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 d-flex align-items-center justify-content-center text-2xl">
                  <span>📄</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: 5 Compact Accordion Items (Slide in from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-12 lg:w-7/12 w-full"
          >
            <div className="faq-accordion-container flex flex-col gap-3">
              {faqList.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`faq-item rounded-2xl bg-slate-900/60 backdrop-blur-xl border ${isOpen ? 'border-amber-500/50 bg-slate-900/90 shadow-lg shadow-amber-500/10' : 'border-white/10'} overflow-hidden transition-colors duration-300`}
                  >
                    {/* Question Header Button */}
                    <button 
                      className="faq-question-btn w-100 p-4 px-5 text-start d-flex justify-content-between align-items-center bg-transparent border-0 text-white cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      <span className="fw-semibold fs-6 text-slate-100 text-base">{faq.question}</span>
                      <span className={`faq-arrow-icon ms-3 text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>

                    {/* Answer Content Dropdown with Smooth Animation */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="faq-answer px-5 pb-5 text-slate-400 small"
                        >
                          <p className="mb-0 lh-base text-sm sm:text-base">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSecEig;
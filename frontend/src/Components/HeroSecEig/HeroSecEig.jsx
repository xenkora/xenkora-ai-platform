import React, { useState } from 'react';

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
    <section className="faq-section py-5 text-white">
      <div className="container px-3" style={{ maxWidth: '1200px' }}>
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center hero-badge px-3 py-1 rounded-pill mb-3">
            <span className="badge-dot me-2"></span>
            <span className="small text-light">ANSWERS TO YOUR QUESTIONS</span>
          </div>
          <h2 className="display-4 fw-bold mb-3">
            AI Chatbot Development <span className="gradient-text-faq">FAQ's</span>
          </h2>
          <p className="faq-subtitle mx-auto text-secondary">
            Have questions about our development process, platform integrations, or timelines? Find the answers to our most common inquiries right here.
          </p>
        </div>

        {/* Split Grid Layout: Left wider (col-lg-5), Right (col-lg-7) */}
        <div className="row g-4 align-items-start">
          
          {/* Left Column: 3 Action Cards (Increased Width) */}
          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column gap-4">
              
              {/* Card 1 */}
              <div className="faq-side-card p-4 d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-bold text-white mb-2 fs-4">Connect with Our <br />Community</h4>
                  <a href="#connect" className="text-decoration-none side-card-link fw-semibold small">Get Connected →</a>
                </div>
                <div className="side-card-icon-wrapper d-flex align-items-center justify-content-center">
                  <span className="fs-2">👥</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="faq-side-card p-4 d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-bold text-white mb-2 fs-4">Live Chat and Support</h4>
                  <a href="#support" className="text-decoration-none side-card-link fw-semibold small">Get Started →</a>
                </div>
                <div className="side-card-icon-wrapper d-flex align-items-center justify-content-center">
                  <span className="fs-2">💬</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="faq-side-card p-4 d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-bold text-white mb-2 fs-4">Knowledge and Inspiration</h4>
                  <a href="#docs" className="text-decoration-none side-card-link fw-semibold small">Read Docs →</a>
                </div>
                <div className="side-card-icon-wrapper d-flex align-items-center justify-content-center">
                  <span className="fs-2">📄</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 5 Compact Accordion Items */}
          <div className="col-12 col-lg-7">
            <div className="faq-accordion-container">
              {faqList.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div 
                    className={`faq-item mb-3 ${isOpen ? 'active-faq-item' : ''}`} 
                    key={index}
                  >
                    {/* Question Header Button */}
                    <button 
                      className="faq-question-btn w-100 p-3 px-4 text-start d-flex justify-content-between align-items-center bg-transparent border-0 text-white"
                      onClick={() => handleToggle(index)}
                    >
                      <span className="fw-semibold fs-6">{faq.question}</span>
                      <span className={`faq-arrow-icon ms-3 ${isOpen ? 'rotate-icon' : ''}`}>
                        ▼
                      </span>
                    </button>

                    {/* Answer Content Dropdown */}
                    {isOpen && (
                      <div className="faq-answer px-4 pb-4 text-secondary small">
                        <p className="mb-0 lh-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSecEig;
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FaqsAiLead.css';

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

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Background Glow */}
      <div className="faq-glow"></div>

      <div className="faq-container">
        
        {/* Section Header */}
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked <span className="gradient-faq">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Got questions about our AI lead generation ecosystem? Find clear answers below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question-box">
                <h3 className="faq-question">{faq.question}</h3>
                <ChevronDown className={`faq-chevron ${activeIndex === index ? 'rotate' : ''}`} />
              </div>
              
              {activeIndex === index && (
                <div className="faq-answer-box">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqsAiLead;
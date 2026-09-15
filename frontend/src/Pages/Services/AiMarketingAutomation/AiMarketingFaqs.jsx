import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './AiMarketingFaqs.css';

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

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="am-faq-section">
      {/* Background Glow */}
      <div className="am-faq-glow"></div>

      <div className="am-faq-container">
        
        {/* Section Header */}
        <div className="am-faq-header">
          <h2 className="am-faq-title">
            Frequently Asked <span className="am-faq-gradient">Questions</span>
          </h2>
          <p className="am-faq-subtitle">
            Everything you need to know about our AI marketing automation solutions.
          </p>
        </div>

        {/* FAQ List */}
        <div className="am-faq-list">
          {marketingFaqData.map((faq, index) => (
            <div 
              key={index} 
              className={`am-faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="am-faq-question-box">
                <h3 className="am-faq-question">{faq.question}</h3>
                <ChevronDown className={`am-faq-chevron ${activeIndex === index ? 'rotate' : ''}`} />
              </div>
              
              {activeIndex === index && (
                <div className="am-faq-answer-box">
                  <p className="am-faq-answer">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiMarketingFaqs;
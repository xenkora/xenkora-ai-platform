import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './WhatsappChatbotFaqs.css'

const faqsData = [
  {
    question: "Do I need an official WhatsApp Business API account?",
    answer: "Yes, we handle the complete application and setup for the Meta Official WhatsApp Cloud API so your business gets a verified green badge and zero risk of account restriction."
  },
  {
    question: "Can the AI bot answer complex customer questions?",
    answer: "Absolutely. We train the AI directly on your company's documents, catalog details, FAQs, and brand guidelines so it answers complex questions with complete accuracy."
  },
  {
    question: "What happens if the AI bot cannot answer a question?",
    answer: "The chatbot smoothly hands off the active chat to a human agent on your team in real time, notifying your team via email, Slack, or WhatsApp dashboard."
  },
  {
    question: "Can it integrate with our CRM or booking tool?",
    answer: "Yes! We connect your WhatsApp bot with CRM systems, HubSpot, Salesforce, Calendly, Shopify, and custom REST APIs seamlessly."
  },
  {
    question: "Can we send automated promotional messages?",
    answer: "Yes, utilizing approved Meta WhatsApp broadcast templates, you can send re-engagement offers, abandoned cart reminders, and event updates to your audience."
  }
];

const WhatsappChatbotFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="wa-faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-white">
            Frequently Asked <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have questions about WhatsApp Chatbot Automation? We have answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="wa-faq-list">
          {faqsData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className={`wa-faq-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="wa-faq-btn"
                >
                  <span className="wa-faq-question">{faq.question}</span>
                  <ChevronDown className={`wa-faq-icon ${isOpen ? 'rotate' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="wa-faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatsappChatbotFaqs;
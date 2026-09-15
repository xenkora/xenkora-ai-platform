import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhatsappChatbotFir.css'; 

const WhatsappChatbotFir = () => {
  return (
    <section className="wa-chatbot-section">
      
      {/* Background Glow Effect */}
      <div className="wa-chatbot-glow"></div>

      {/* Main Container */}
      <div className="wa-chatbot-container">
        
        {/* Left Side: Chat UI / Tech Card with Image */}
        <div className="wa-chatbot-img-wrapper">
          <div className="wa-chatbot-card">
            <img 
              src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80" 
              alt="WhatsApp Chatbot Automation Interface" 
              className="wa-chatbot-img"
            />
          </div>
        </div>

        {/* Right Side: Professional Content & Features */}
        <div className="wa-chatbot-content">
          
          <h2 className="wa-chatbot-title">
            Supercharge Engagement With <span className="wa-chatbot-gradient-text">Intelligent WhatsApp Chatbot Automation</span>
          </h2>

          <p className="wa-chatbot-desc">
            Transform conversational traffic into qualified pipeline 24/7. Deploy context-aware LLM-powered WhatsApp agents that handle inbound leads, answer product queries, qualify prospects, and book meetings directly inside chat threads without human friction.
          </p>

          {/* Feature List */}
          <ul className="wa-chatbot-list">
            <li className="wa-chatbot-item">
              <CheckCircle2 className="wa-chatbot-icon" />
              <span>24/7 Instant AI Response & Lead Qualification</span>
            </li>
            <li className="wa-chatbot-item">
              <CheckCircle2 className="wa-chatbot-icon" />
              <span>Automated Meeting Booking & Calendar Sync</span>
            </li>
            <li className="wa-chatbot-item">
              <CheckCircle2 className="wa-chatbot-icon" />
              <span>Contextual Product & Order Inquiry Handling</span>
            </li>
            <li className="wa-chatbot-item">
              <CheckCircle2 className="wa-chatbot-icon" />
              <span>Native CRM & GoHighLevel Pipeline Handover</span>
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default WhatsappChatbotFir;
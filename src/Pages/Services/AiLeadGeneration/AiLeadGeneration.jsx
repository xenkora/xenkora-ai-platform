import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './AiLeadGeneration.css'; 

const AiLeadGeneration = () => {
  return (
    <section className="ai-lead-section">
      
      {/* Background Glow Effect */}
      <div className="ai-lead-glow"></div>

      {/* Main Container */}
      <div className="ai-lead-container">
        
        {/* Left Side: Dashboard Card with Image */}
        <div className="ai-lead-img-wrapper">
          <div className="ai-lead-card">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="AI Analytics Dashboard" 
              className="ai-lead-img"
            />
          </div>
        </div>

        {/* Right Side: Professional Content & Features */}
        <div className="ai-lead-content">
          
          <h2 className="ai-lead-title">
            Supercharge Growth With <span className="ai-lead-gradient-text">Intelligent AI Lead Generation</span>
          </h2>

          <p className="ai-lead-desc">
            Revolutionize your sales pipeline using advanced machine learning models to identify high-value prospects, automate personalized multi-channel outreach, and convert meetings effortlessly. We combine state-of-the-art AI tech with expert strategy to drive predictable revenue.
          </p>

          {/* Feature List */}
          <ul className="ai-lead-list">
            <li className="ai-lead-item">
              <CheckCircle2 className="ai-lead-icon" />
              <span>AI-Enriched High-Intent B2B Prospect Lists</span>
            </li>
            <li className="ai-lead-item">
              <CheckCircle2 className="ai-lead-icon" />
              <span>Hyper-Personalized Email & LinkedIn Outreach</span>
            </li>
            <li className="ai-lead-item">
              <CheckCircle2 className="ai-lead-icon" />
              <span>Automated Omnichannel Follow-ups & Sequences</span>
            </li>
            <li className="ai-lead-item">
              <CheckCircle2 className="ai-lead-icon" />
              <span>Seamless CRM Sync & Real-time Analytics</span>
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default AiLeadGeneration;
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './AiMarketingFirst.css'; 

const AiMarketingFirst = () => {
  return (
    <section className="ai-marketing-section">
      
      {/* Background Glow Effect */}
      <div className="ai-marketing-glow"></div>

      {/* Main Container */}
      <div className="ai-marketing-container">
        
        {/* Left Side: Dashboard Card with Image */}
        <div className="ai-marketing-img-wrapper">
          <div className="ai-marketing-card">
         <img 
              src="https://media.istockphoto.com/id/815815658/photo/cyborg-and-new-manketing-strategy-formula.jpg?s=1024x1024&w=is&k=20&c=olTx1oabTCWLoKroPWXoE-rgr7vZf_QLPjrgH33jd_o=" 
              alt="AI Robot Marketing Automation" 
              className="ai-marketing-img"
            />
          </div>
        </div>

        {/* Right Side: Professional Content & Features */}
        <div className="ai-marketing-content">
          
          <h2 className="ai-marketing-title">
            Supercharge Growth With <span className="ai-marketing-gradient-text">Intelligent AI Marketing Automation</span>
          </h2>

          <p className="ai-marketing-desc">
            Scale your brand presence and customer engagement using advanced machine learning workflows to trigger personalized campaigns, automate customer journeys, and drive continuous conversions. We combine state-of-the-art AI technology with strategic execution to maximize your marketing ROI.
          </p>

          {/* Feature List */}
          <ul className="ai-marketing-list">
            <li className="ai-marketing-item">
              <CheckCircle2 className="ai-marketing-icon" />
              <span>AI-Driven Behavior-Based Campaign Triggers</span>
            </li>
            <li className="ai-marketing-item">
              <CheckCircle2 className="ai-marketing-icon" />
              <span>Omnichannel Customer Journey Automation</span>
            </li>
            <li className="ai-marketing-item">
              <CheckCircle2 className="ai-marketing-icon" />
              <span>Dynamic Ad & Content Optimization Loops</span>
            </li>
            <li className="ai-marketing-item">
              <CheckCircle2 className="ai-marketing-icon" />
              <span>Real-Time Performance Tracking & Analytics</span>
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default AiMarketingFirst;
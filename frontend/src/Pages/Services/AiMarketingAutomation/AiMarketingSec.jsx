import React from 'react';
import { GitBranch, Share2, TrendingUp, Sparkles, UserCheck, BarChart3 } from 'lucide-react';
import './AiMarketingSec.css';

const marketingServices = [
  {
    number: "01",
    icon: <GitBranch className="service-icon" />,
    title: "Customer Journey Mapping",
    description: "Awareness, engagement, conversion, retention."
  },
  {
    number: "02",
    icon: <Share2 className="service-icon" />,
    title: "Multi-Channel Automation",
    description: "Email, SMS, WhatsApp, social & push."
  },
  {
    number: "03",
    icon: <TrendingUp className="service-icon" />,
    title: "AI Lead Scoring",
    description: "Behavior and purchase intent based."
  },
  {
    number: "04",
    icon: <Sparkles className="service-icon" />,
    title: "AI Content & Creative",
    description: "AI-assisted, brand-focused content creation."
  },
  {
    number: "05",
    icon: <UserCheck className="service-icon" />,
    title: "AI Personalization",
    description: "Personalized experiences across every touchpoint."
  },
  {
    number: "06",
    icon: <BarChart3 className="service-icon" />,
    title: "Analytics & ROI Dashboards",
    description: "Track performance, conversions and revenue."
  }
];

const AiMarketingSec = () => {
  return (
    <section className="amf-section">
      {/* Background Glow */}
      <div className="amf-glow"></div>

      <div className="amf-container">
        
        {/* Section Heading matching reference image */}
        <div className="amf-header">
          <h2 className="amf-title">
            Everything Included In Our <span className="amf-gradient-ai">AI</span> <br />
            <span className="amf-gradient-market">Marketing Automation</span> <br />
            <span className="amf-white-text">Service</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="amf-grid">
          {marketingServices.map((service, index) => (
            <div key={index} className="amf-card">
              <div className="amf-card-top">
                <div className="amf-icon-box">
                  {service.icon}
                </div>
                <span className="amf-number">{service.number}</span>
              </div>
              <h3 className="amf-card-title">{service.title}</h3>
              <p className="amf-card-desc">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiMarketingSec;
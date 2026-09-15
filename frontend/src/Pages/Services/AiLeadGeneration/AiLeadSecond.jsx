import React from 'react';
import { Target, MessageSquareCode, Sparkles, Database, BarChart3, Zap } from 'lucide-react';
import './AiLeadSecond.css';

const servicesData = [
  {
    icon: <Target className="service-icon" />,
    title: "AI-Powered Prospecting",
    description: "Instantly extracts and verifies high-intent decision-makers tailored to your ideal customer profile."
  },
  {
    icon: <MessageSquareCode className="service-icon" />,
    title: "Omnichannel Outreach",
    description: "Automates multi-touch campaigns smoothly across Email, LinkedIn, WhatsApp, and SMS."
  },
  {
    icon: <Sparkles className="service-icon" />,
    title: "Dynamic AI Copywriting",
    description: "Generates hyper-personalized messages targeting individual pain points at scale."
  },
  {
    icon: <Database className="service-icon" />,
    title: "Advanced CRM Architecture",
    description: "Seamlessly integrates pipelines directly into GoHighLevel, HubSpot, or custom CRMs."
  },
  {
    icon: <BarChart3 className="service-icon" />,
    title: "Real-time Analytics & Reporting",
    description: "Tracks active pipelines, booked meetings, conversion rates, and closed revenue live."
  },
  {
    icon: <Zap className="service-icon" />,
    title: "Continuous Optimization",
    description: "Runs weekly script tests and prompt tuning to maximize your conversion ROI automatically."
  }
];

const AiLeadSecond = () => {
  return (
    <section className="service-section">
      {/* Background Glow */}
      <div className="service-glow"></div>

      <div className="service-container">
        
        {/* Section Heading */}
        <div className="service-header">
          <h2 className="service-title">
            What Powers Our <span className="gradient-ai">Autonomous</span> <br />
            <span className="gradient-lead">Lead Generation Ecosystem</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="service-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiLeadSecond;
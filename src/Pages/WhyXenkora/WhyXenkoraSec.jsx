import React from 'react';
import './WhyXenkoraSec.css';
import { Cpu, Users, BarChart3, Zap, Layers, ShieldCheck } from 'lucide-react';

const featuresData = [
  {
    icon: <Cpu size={22} />,
    title: 'Autonomous AI Agents',
    description: 'We deploy custom LLM workflows that automate lead routing, data enrichment, and real-time customer engagement 24/7.'
  },
  {
    icon: <Users size={22} />,
    title: 'Principal Engineers Only',
    description: 'Zero junior handover. Your architecture is built, audited, and scaled exclusively by senior architects with 7+ years track records.'
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Deterministic ROI Models',
    description: 'Full-funnel attribution linked directly to your CRM revenue. No vanity metrics or inflated impression reports.'
  },
  {
    icon: <Zap size={22} />,
    title: 'Sub-Second Latency Build',
    description: 'Edge-rendered Next.js and distributed database clusters engineered for extreme speed, global reach, and Core Web Vitals perfection.'
  },
  {
    icon: <Layers size={22} />,
    title: 'Unified Tech Stack',
    description: 'Cloud native, microservices, mobile apps, and AI wrappers deployed under one cohesive senior squad without vendor bloat.'
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Enterprise Security & SLA',
    description: 'SOC2-aligned coding standards, encrypted data pipelines, and guaranteed uptime SLAs for mission-critical platforms.'
  }
];

const WhyXenkoraSec = () => {
  return (
    <section className="xenkora-features-section">
      <div className="xenkora-container">
        
        {/* Section Heading */}
        <h2 className="xenkora-section-title">
          Core Pillars That Power <br />
          <span className="highlight-gradient">Xenkora Technologies</span>
        </h2>

        {/* 6-Card Grid (3x2 layout) */}
        <div className="features-grid">
          {featuresData.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="card-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyXenkoraSec;
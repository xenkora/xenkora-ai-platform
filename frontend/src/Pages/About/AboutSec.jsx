import React from 'react';
import './AboutSec.css';
import { Zap, Target, Lock } from 'lucide-react';

const metricsData = [
  {
    id: 'm1',
    value: '150+',
    label: 'Production Systems Shipped',
    subtext: 'MERN, Shopify & CRM architectures',
  },
  {
    id: 'm2',
    value: '3.5x',
    label: 'Avg. Revenue Velocity',
    subtext: 'Across automated lead funnels',
  },
  {
    id: 'm3',
    value: '99.9%',
    label: 'Workflow & API Uptime',
    subtext: 'Zero-drop webhook & bot execution',
  },
];

const pillarsData = [
  {
    id: 'p1',
    icon: <Zap size={20} className="pillar-icon amber-glow-icon" />,
    title: 'RAPID DEPLOYMENT, PREDICTABLE SCOPE',
    description:
      'Core web systems and automation pipelines ship in 2 to 4 weeks. Full architectural mapping upfront means zero budget bleed or scope creep.',
  },
  {
    id: 'p2',
    icon: <Target size={20} className="pillar-icon cyan-glow-icon" />,
    title: 'REVENUE-DRIVEN, NOT JUST UI',
    description:
      'Every React component, database schema, and CRM workflow is anchored to hard KPIs: conversion velocity, LTV expansion, and churn reduction.',
  },
  {
    id: 'p3',
    icon: <Lock size={20} className="pillar-icon green-glow-icon" />,
    title: 'CLEAN OWNERSHIP, ZERO LOCK-IN',
    description:
      'Clean MERN source code, documented REST APIs, and full asset handoff. You retain complete intellectual property ownership from day one.',
  },
];

const AboutSec = () => {
  return (
    <section className="about-authority-section">
      <div className="authority-container">
        
        {/* Section Header */}
        <div className="authority-header">
          <span className="authority-tag">SYSTEMS THAT COMPOUND</span>
          <h2>Engineered Authority. Measurable Velocity.</h2>
          <p>
            We replace bloated agency retainers with high-precision engineering—combining 
            custom MERN applications with autonomous growth stacks.
          </p>
        </div>

        {/* Top 3 Metrics Mapped */}
        <div className="metrics-row">
          {metricsData.map((item) => (
            <div key={item.id} className="metric-glass-card">
              <div className="metric-value">{item.value}</div>
              <div className="metric-label">{item.label}</div>
              <div className="metric-subtext">{item.subtext}</div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Feature / Pillar Cards Mapped */}
        <div className="pillars-row">
          {pillarsData.map((pillar) => (
            <div key={pillar.id} className="pillar-glass-card">
              <div className="pillar-icon-box">{pillar.icon}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSec;
import React from 'react';
import './AboutFir.css';
import { Sparkles, ArrowRight, Cpu, Globe2 } from 'lucide-react';

const AboutFir = () => {
  return (
    <section className="about-hybrid-section">
      {/* Ambient background glow layers */}
      <div className="ambient-glow glow-amber" />
      <div className="ambient-glow glow-cyan" />

      <div className="container-hybrid">
        {/* Top Badge */}
        <div className="badge-wrapper">
          <span className="hybrid-badge">
            <span className="badge-dot-amber" />
            <Sparkles size={14} className="badge-icon-cyan" />
            <span>ENGINEERED FOR DOMINANCE</span>
          </span>
        </div>

        {/* Main Display Headline */}
        <h2 className="hybrid-title">
          We Don't Just Write Code, <br />
          <span className="gradient-text-hybrid">We Engineer Autonomous Growth.</span>
        </h2>

        {/* Subtext Description */}
        <p className="hybrid-description">
          Xenkora is a full-stack AI automation and high-velocity digital engineering agency. 
          We combine enterprise MERN/Shopify architecture, autonomous WhatsApp workflows, and 
          algorithmic lead-gen systems—turning complex operations into compounding revenue engines.
        </p>

        {/* Secondary Trust / Remote-First Meta Strip */}
        <div className="meta-strip">
          <div className="meta-item">
            <Globe2 size={16} className="meta-icon" />
            <span>Remote-First Global Delivery (US, UK, ME, APAC)</span>
          </div>
          <span className="meta-divider">•</span>
          <div className="meta-item">
            <Cpu size={16} className="meta-icon" />
            <span>Full-Stack AI + MERN + CRM Ecosystems</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hybrid-cta-group">
         <a 
  href="https://wa.me/923222272737?text=Hi%20Xenkora%20Technologies,%20I%20want%20to%20discuss%20a%20new%20project."
  target="_blank" 
  rel="noopener noreferrer"
  className="btn-primary-gradient-hybrid"
>
  <span>Scale Your Brand</span>
  <ArrowRight size={16} />
</a>
        </div>
      </div>
    </section>
  );
};

export default AboutFir;
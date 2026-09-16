import React from 'react';
import './WhyXenkoraFir.css';
import { ArrowRight, Sparkles } from 'lucide-react';

const WhyXenkoraFir = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
   
        <div className="badge-pill">
          <Sparkles size={12} className="badge-icon" />
          <span>ENGINEERED FOR EXCELLENCE</span>
        </div>

        {/* Main Heading */}
        <h1 className="why-title">
          Why Industry Leaders Choose <br />
          Xenkora Technologies <span className="highlight-gradient">In 2026.</span>
        </h1>

        {/* Subtitle description */}
        <p className="why-description">
          We architect enterprise-grade digital infrastructure, high-conversion platforms, <br />
          and intelligent automation systems. Partner with senior-only engineering squads <br />
          committed to measurable business growth and technological dominance.
        </p>

        {/* Buttons Group */}
        <div className="button-group">
          <a 
  href="https://wa.me/923222272737?text=Hi%20Xenkora%20Technologies,%20I%20want%20to%20discuss%20a%20new%20project." 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn-primary inline-flex items-center gap-2"
>
  Schedule Architecture Review <ArrowRight size={16} />
</a>
        </div>

      </div>
    </section>
  );
};

export default WhyXenkoraFir;
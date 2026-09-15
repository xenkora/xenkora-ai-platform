import React from 'react';
import './WhyXenkoraThir.css';
import { TrendingUp, Terminal, Workflow, Database } from 'lucide-react';

const trendsData = [
  {
    icon: <Terminal size={22} />,
    title: 'LLM & Agentic Workflows Are Default',
    description: 'Manual operations scale linearly while intelligence scales infinitely. We replace repetitive enterprise logic with autonomous multi-agent pipelines.'
  },
  {
    icon: <Workflow size={22} />,
    title: 'Edge Architecture Rules Latency',
    description: 'Users bounce past 2 seconds. We engineer globally distributed edge runtimes that render interfaces instantaneously regardless of geography.'
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Deterministic Growth Over Vanity Ads',
    description: 'Blended acquisition costs are rising. Winners build proprietary conversion funnels and closed-loop attribution tied straight to bank ledgers.'
  },
  {
    icon: <Database size={22} />,
    title: 'First-Party Infrastructure Is Shield',
    description: 'Cookie deprecation broke legacy tracking. We deploy server-side event tracking and unified customer data lakes you actually own.'
  }
];

const WhyXenkoraThir = () => {
  return (
    <section className="xenkora-trends-section">
      <div className="xenkora-trends-container">
        
        {/* Top Pill */}
        <div className="trends-pill">
          <TrendingUp size={12} />
          <span>2026 ENGINEERING REALITY</span>
        </div>

        {/* Main Heading */}
        <h2 className="trends-title">
          The Tech Landscape <span className="highlight-gradient">Shifted.</span> <br />
          We Built For It.
        </h2>

        {/* 2x2 Bento/Card Grid */}
        <div className="trends-grid">
          {trendsData.map((item, index) => (
            <div className="trend-card" key={index}>
              <div className="trend-icon-box">
                {item.icon}
              </div>
              <h3 className="trend-card-title">{item.title}</h3>
              <p className="trend-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyXenkoraThir;
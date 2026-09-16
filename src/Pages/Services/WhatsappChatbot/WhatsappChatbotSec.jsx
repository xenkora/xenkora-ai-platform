import React from 'react';
import { MessageSquare, Bot, Zap, Calendar, Database, ShieldCheck } from 'lucide-react';
import './WhatsappChatbotSec.css'
const featureList = [
  {
    icon: <MessageSquare className="w-6 h-6 text-amber-400" />,
    title: "Instant 24/7 Auto-Reply",
    description: "Respond to customer inquiries within seconds on WhatsApp, eliminating wait times and maximizing conversion opportunities."
  },
  {
    icon: <Bot className="w-6 h-6 text-amber-400" />,
    title: "LLM Contextual Conversations",
    description: "Leverage advanced AI language models trained on your business data to deliver human-like, accurate replies."
  },
  {
    icon: <Calendar className="w-6 h-6 text-amber-400" />,
    title: "Automated Appointment Scheduling",
    description: "Allow leads to pick available slots and book appointments directly inside WhatsApp with Google/Calendly sync."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    title: "Broadcasting & Re-engagement",
    description: "Send automated WhatsApp campaign broadcasts, promotional updates, and cart recovery sequences smoothly."
  },
  {
    icon: <Database className="w-6 h-6 text-amber-400" />,
    title: "CRM & ERP Integration",
    description: "Automatically log all contact details, chat transcripts, and lead statuses directly into HubSpot, CRM, or custom backends."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    title: "Official Meta API Compliance",
    description: "Built strictly on Meta Cloud API standards ensuring 99.9% uptime, verified sender badges, and zero risk of ban."
  }
];

const WhatsappChatbotSec = () => {
  return (
    <section className="wa-features-section">
      <div className="wa-features-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Capabilities of Our <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">WhatsApp AI Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empower your sales and support teams with intelligent automation engineered for peak conversions on WhatsApp.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, idx) => (
            <div 
              key={idx}
              className="wa-feature-card group"
            >
              <div className="wa-feature-icon-box">
                {item.icon}
              </div>
              <h3 className="wa-feature-title">
                {item.title}
              </h3>
              <p className="wa-feature-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatsappChatbotSec;
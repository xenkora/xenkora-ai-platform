import React from 'react';
import './HeroSecSec.css'
const HeroSecSec = () => {
  const topTickerItems = [
    "Marketing",
    "SEO",
    "Performance Ads",
    "Branding",
    "Web Development",
    "Content Strategy",
    "Influencer Marketing",
    "UI/UX Design",
    "Cloud Solutions",
    "AI Automation",
    "App Development",
    "Cyber Security"
  ];

  const bottomTickerItems = [
    "Digital Transformation",
    "Custom Software",
    "E-Commerce Growth",
    "GoHighLevel Automation",
    "Meta & Google Ads",
    "Chatbot Engineering",
    "Full-Stack MERN",
    "API Integrations",
    "Conversion Rate Optimization",
    "SaaS Architecture",
    "Enterprise Solutions",
    "Growth Strategy"
  ];

  return (
    <section className="relative overflow-hidden hero-stats-section">
      
      {/* 1. Top Auto-Scrolling Marquee Strip */}
      <div className="w-full overflow-hidden bg-slate-900/40 border-y border-white/5 py-4 mb-12">
        <div className="flex w-max animate-marquee space-x-8">
          {[...topTickerItems, ...topTickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0 px-4">
              <span className="text-slate-300 font-medium text-base sm:text-lg tracking-wide">{item}</span>
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Counter Box */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1">99.8%</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Project Success Rate</p>
            </div>

            <div className="p-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-1">4.8x</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Average Client Scalability</p>
            </div>

            <div className="p-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1">250+</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Global Deployments</p>
            </div>

            <div className="p-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1">24/7</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Dedicated Tech Support</p>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Bottom Auto-Scrolling Marquee Strip */}
      <div className="w-full overflow-hidden bg-slate-900/40 border-y border-white/5 py-4 mt-12">
        <div className="flex w-max animate-marquee-reverse space-x-8">
          {[...bottomTickerItems, ...bottomTickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0 px-4">
              <span className="text-slate-300 font-medium text-base sm:text-lg tracking-wide">{item}</span>
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSecSec;
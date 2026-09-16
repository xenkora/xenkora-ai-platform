import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageSquare, Headset, Bot, MapPin, BarChart } from 'lucide-react';
import './HeroSecFour.css'
const HeroSecFour = () => {
  const aiServices = [
    {
      title: "AI Lead Generation",
      description: "Automated intelligence systems that fill your pipeline 24/7, on autopilot.",
      category: "GEN-AI",
      isFeatured: false,
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      path: "/services/ai-lead-generation"
    },
    {
      title: "AI Marketing Automation",
      description: "Smart funnels, predictive scoring & automated lifecycle journeys done for you.",
      category: "MARKETING",
      isFeatured: false,
      icon: <BarChart className="w-6 h-6 text-amber-400" />,
      path: "/services/ai-marketing-automation"
    },
    {
      title: "WhatsApp Chatbot Automation",
      description: "Convert chats into sales instantly with AI-powered conversational bots.",
      category: "CONVERSATIONAL",
      isFeatured: true,
      icon: <MessageSquare className="w-6 h-6 text-amber-400" />,
      path: "/services/whatsapp-chatbot"
    },
    {
      title: "AI Customer Support",
      description: "24/7 intelligent support agents fully trained on your brand voice and data.",
      category: "SUPPORT",
      isFeatured: false,
      icon: <Headset className="w-6 h-6 text-amber-400" />,
      path: "/services/ai-customer-support"
    },
    {
      title: "Custom Chatbot Development",
      description: "Tailored GPT-powered bots custom-built for any use case or platform.",
      category: "DEVELOPMENT",
      isFeatured: false,
      icon: <Bot className="w-6 h-6 text-amber-400" />,
      path: "/services/custom-chatbot"
    },
    {
      title: "Local Business Growth Automation",
      description: "GMB optimization, review generation & local SEO running on full autopilot.",
      category: "LOCAL SEO",
      isFeatured: false,
      icon: <MapPin className="w-6 h-6 text-amber-400" />,
      path: "/services/local-business-growth"
    }
  ];

  return (
    <section className="relative overflow-hidden ai-automation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Pill Badge */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>🤖 AI & AUTOMATION SUITE</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Unlock Next-Gen Efficiency <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Powered By Autonomous AI.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Embed intelligent algorithms into your core operations to scale faster, smarter, and completely hands-free.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className={`block group rounded-2xl p-6 transition-all duration-300 no-underline ${
                service.isFeatured
                  ? 'bg-gradient-to-b from-amber-950/60 to-slate-900/90 border-2 border-amber-500/60 shadow-2xl shadow-amber-500/15 hover:-translate-y-1.5'
                  : 'bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-slate-400 group-hover:text-amber-400 transition-colors">↗</span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-amber-400 transition-colors">
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSecFour;
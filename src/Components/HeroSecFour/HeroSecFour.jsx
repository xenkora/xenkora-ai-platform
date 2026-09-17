import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Framer Motion import kiya
import { ArrowRight, Sparkles, MessageSquare, Headset, Bot, MapPin, BarChart } from 'lucide-react';
import './HeroSecFour.css';

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
    <section className="relative overflow-hidden ai-automation-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Pill Badge Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg shadow-amber-500/10">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>🤖 AI & AUTOMATION SUITE</span>
          </div>
        </motion.div>

        {/* Section Heading Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Unlock Next-Gen Efficiency <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Powered By Autonomous AI.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Embed intelligent algorithms into your core operations to scale faster, smarter, and completely hands-free.
          </p>
        </motion.div>

        {/* Grid Layout with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }} // Har card thore delay se aayega
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.2 } }}
            >
              <Link
                to={service.path}
                className={`block group rounded-2xl p-6 transition-colors duration-300 no-underline h-full ${
                  service.isFeatured
                    ? 'bg-gradient-to-b from-amber-950/60 to-slate-900/90 border-2 border-amber-500/60 shadow-2xl shadow-amber-500/20'
                    : 'bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10'
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSecFour;
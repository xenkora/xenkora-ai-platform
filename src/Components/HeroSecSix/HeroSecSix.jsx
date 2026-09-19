import React from 'react';
import { motion } from 'framer-motion'; // 1. Framer Motion import kiya
import { Trophy, Rocket, ShieldCheck, Users, Zap, Sparkles, Check } from 'lucide-react';
import './HeroSecSix.css';
import {Slide} from 'react-awesome-reveal'

const HeroSecSix = () => {
  const trustFeatures = [
    {
      title: "Proven Engineering Track Record",
      description: "99.8% project success rate with robust, scalable digital solutions across global markets.",
      icon: <Trophy className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Performance-Obsessed Architecture",
      description: "Every line of code and marketing funnel engineered for maximum efficiency and speed.",
      icon: <Rocket className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Transparent & Accountable",
      description: "Real-time deployment dashboards, weekly sprint reports, and zero hidden costs.",
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Elite Tech Specialists",
      description: "No juniors on your projects. Work directly with senior software architects and strategists.",
      icon: <Users className="w-6 h-6 text-amber-400" />
    },
    {
      title: "24/7 Dedicated Support",
      description: "Round-the-clock technical maintenance and rapid response workflows for zero downtime.",
      icon: <Zap className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Autonomous AI Ecosystems",
      description: "Cutting-edge automation pipelines that deliver more output, faster, at a lower cost.",
      icon: <Sparkles className="w-6 h-6 text-amber-400" />
    }
  ];

  return (
    <section className="relative overflow-hidden why-us-section py-20" id="why-us">
      <Slide duration={1500}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Smooth Entry */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Why High-Growth Enterprises <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Trust Xenkora
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We combine high-end software development, AI automation, and strategic digital execution to deliver unmatched market dominance.
          </p>
        </motion.div>

        {/* 6 Grid Cards Layout with Unique Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }} // Har card ka alag delay sequence
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group h-full"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Verified Excellence</span>
                <Check className="w-4 h-4 text-amber-400" />
              </div>
            </motion.div>
          ))}
        </div>

        </div>
        </Slide>
    </section>
  );
};

export default HeroSecSix;
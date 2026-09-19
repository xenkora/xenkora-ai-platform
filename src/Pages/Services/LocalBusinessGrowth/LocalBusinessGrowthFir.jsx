import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './LocalBusinessGrowthFir.css';
import {Zoom,Slide} from 'react-awesome-reveal'
const LocalBusinessGrowthFir = () => {
  return (
    <section className="local-growth-section">
      <div className="local-growth-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <Slide>
          {/* Left: Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group local-growth-image-wrapper"
          >
            <div className="local-growth-image-glow" />
            <div className="local-growth-image-box">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Local Business Growth Automation" 
                className="local-growth-image"
              />
            </div>
            </motion.div>
            </Slide>

          <Zoom duration={1500}>
          {/* Right: Content */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white"
            >
              Dominate Local Markets With <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">AI Growth & Lead Automation</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              Scale your brick-and-mortar store, clinic, agency, or local service business effortlessly. We combine automated Google Review generation, missed-call text-back bots, local SEO optimization, and hyper-targeted lead workflows to keep your appointment calendar full.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3.5 pt-2"
            >
              {[
                "Instant Missed-Call Text Back AI Responder",
                "Automated 5-Star Google & Yelp Review Generation",
                "Hyper-Local SEO & Google Business Profile Optimization",
                "Omnichannel Booking Funnels & SMS Reminder Sequences"
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + (idx * 0.08) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-slate-200 text-sm sm:text-base font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

            </Zoom> 
        </div>
      </div>
    </section>
  );
};

export default LocalBusinessGrowthFir;
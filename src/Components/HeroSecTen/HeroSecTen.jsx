import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion import kiya
import './HeroSecTen.css';
import { Slide ,Bounce} from 'react-awesome-reveal';
const HeroSecTen = () => {
  const aiModelsList = [
    "Claude 3.5",
    "GPT-4o",
    "Google Gemini",
    "DALL-E 3",
    "Vicuna",
    "Whisper",
    "Bloom",
    "Llama 3",
    "Grok",
    "Stable Diffusion",
    "Phi-3",
    "Mistral Large"
  ];

  return (
    <section className="relative overflow-hidden ai-models-section py-20" id="ai-models">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <Slide>
        {/* Top Badge & Heading with Motion */}
        <div className="max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="ai-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10"
          >
            <span className="badge-dot animate-pulse w-2 h-2 rounded-full bg-amber-400" />
            <span>CUTTING-EDGE TECHNOLOGY</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            AI Models We Have <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Expertise In
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ai-subtitle mx-auto text-base sm:text-lg text-slate-400 max-w-2xl"
          >
            Our developers are experts in leveraging the most advanced AI and language models, ensuring your chatbot is intelligent, capable, and future-proof.
          </motion.p>
          </div>
          </Slide>

        <Bounce  duration={2500}>
        {/* Models Badges Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {aiModelsList.map((model, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }} // Har pill aik alag chote delay ke sath aayegi
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              className="ai-model-pill py-4 px-4 text-center cursor-default group rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/50 shadow-lg shadow-black/40 transition-colors duration-300 hover:bg-slate-900/90 hover:shadow-amber-500/10"
            >
              <span className="model-name block font-semibold text-slate-200 group-hover:text-amber-400 transition-colors text-sm sm:text-base">
                {model}
              </span>
            </motion.div>
          ))}
          </div>
          </Bounce>

      </div>
    </section>
  );
};

export default HeroSecTen;
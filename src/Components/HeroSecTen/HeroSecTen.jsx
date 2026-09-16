import React from 'react';
import './HeroSecTen.css'
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
    <section className="relative overflow-hidden ai-models-section" id="ai-models">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Badge & Heading */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="ai-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="badge-dot animate-pulse" />
            <span>CUTTING-EDGE TECHNOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            AI Models We Have <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Expertise In
            </span>
          </h2>

          <p className="ai-subtitle mx-auto text-base sm:text-lg">
            Our developers are experts in leveraging the most advanced AI and language models, ensuring your chatbot is intelligent, capable, and future-proof.
          </p>
        </div>

        {/* Models Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {aiModelsList.map((model, index) => (
            <div 
              key={index}
              className="ai-model-pill py-3.5 px-4 text-center cursor-default group"
            >
              <span className="model-name block font-semibold group-hover:text-amber-400 transition-colors">
                {model}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSecTen;
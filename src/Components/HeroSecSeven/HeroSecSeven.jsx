import React, { useState } from 'react';
import { Star, Plus } from 'lucide-react';
import AddReviewModal from './AddReviewModal';
import './HeroSecSeven.css';
import { Slide, Zoom } from 'react-awesome-reveal';
import { useTheme } from '../../Context/ThemeContext.jsx'; // Theme import kiya

const HeroSecSeven = () => {
  const [theme] = useTheme(); // Theme state get kiya

  const [testimonials, setTestimonials] = useState([
    {
      name: "Alexander Vance",
      role: "CTO, FinTech Global",
      review: "Xenkora's software engineering and API architectures are world-class. They delivered our enterprise platform 3 weeks ahead of schedule with zero bugs.",
      rating: 5
    },
    {
      name: "Dr. Aliza Rahman",
      role: "Founder, Apex Health Tech",
      review: "The AI customer support and automated workflow systems they built reduced our query resolution time by 75%. Absolutely revolutionary for our clinic.",
      rating: 5
    },
    {
      name: "Marcus Sterling",
      role: "Director, Nexus Real Estate",
      review: "From high-intent lead gen campaigns to custom CRM integrations, Xenkora completely scaled our digital pipeline. Closed 14 high-ticket properties in one quarter.",
      rating: 5
    },
    {
      name: "Sophia Martinez",
      role: "CMO, E-Commerce Elevate",
      review: "Their omnichannel performance marketing and growth strategies doubled our online revenue within 90 days. The ROI speaks for itself.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CEO, CloudScale Solutions",
      review: "Finding a senior-only team that understands complex cloud infrastructure and high-performance frontend engineering is rare. Xenkora nailed it.",
      rating: 5
    },
    {
      name: "Elena Rostova",
      role: "Head of Product, SaaSify",
      review: "The UI/UX design and design systems crafted by their team completely transformed our user engagement metrics. Retention is up by 40%.",
      rating: 5
    },
    {
      name: "Zainab Malik",
      role: "Managing Director, Vista Ventures",
      review: "Their WhatsApp automation and lead qualification bots generated over 1,500 qualified inquiries in our first month. Highly professional execution.",
      rating: 5
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newReview) => {
    setTestimonials([newReview, ...testimonials]);
  };

  return (
    <section className={`relative overflow-hidden testimonials-ticker-section py-12 transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50' : ''
    }`}>
       <Zoom duration={1500}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 hero-badge shadow-lg shadow-amber-500/10">
          <span className="badge-dot animate-pulse w-2 h-2 rounded-full bg-amber-400" />
          <span>GLOBAL CLIENT REVIEWS</span>
        </div>

        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 transition-colors duration-300 ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}>
          Trusted By <span className="gradient-text-testimonial">300+ Global Enterprises</span>
        </h2>

        <p className={`testimonials-subtitle mx-auto mb-6 text-base sm:text-lg transition-colors duration-300 ${
          theme === 'light' ? 'text-slate-700' : 'text-slate-400'
        }`}>
          Unfiltered feedback from founders, chief technology officers, and marketing leaders across international markets.
        </p>

        {/* Add Review Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all duration-300 shadow-lg shadow-amber-500/25 cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add Your Review</span>
        </button>
      </div>

     
      {/* Marquee Row */}
      <div className="marquee-wrapper py-4">
        <div className="marquee-track-left space-x-6 px-3">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div 
              key={index}
              className={`testimonial-card w-80 sm:w-96 p-6 flex flex-col justify-between rounded-2xl border transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white/90 border-slate-200 shadow-xl shadow-slate-200/50'
                  : 'bg-slate-900/60 border-white/10 shadow-lg shadow-black/40 backdrop-blur-xl'
              }`}
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(Number(item.rating) || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className={`testimonial-text text-sm mb-6 italic transition-colors ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  "{item.review}"
                </p>
              </div>

              <div className={`flex items-center gap-3 pt-4 border-t ${
                theme === 'light' ? 'border-slate-100' : 'border-white/5'
              }`}>
                <div className={`author-avatar shrink-0 flex items-center justify-center font-bold rounded-full w-10 h-10 ${
                  theme === 'light' ? 'bg-amber-500/10 text-amber-600' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {item.name ? item.name.charAt(0) : 'U'}
                </div>
                <div className="text-left">
                  <h4 className={`text-sm font-bold mb-0.5 transition-colors ${
                    theme === 'light' ? 'text-slate-900' : 'text-slate-100'
                  }`}>{item.name}</h4>
                  <p className={`x-small text-xs transition-colors ${
                    theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                  }`}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </Zoom>

      {/* Separate Modal Component Call */}
      <AddReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddReview={handleAddReview} 
      />

    </section>
  );
};

export default HeroSecSeven;
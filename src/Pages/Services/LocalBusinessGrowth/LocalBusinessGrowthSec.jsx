import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Star, MapPin, MessageSquare, CalendarCheck, TrendingUp } from 'lucide-react';
import './LocalBusinessGrowthSec.css';
import {Bounce} from 'react-awesome-reveal'
const localFeatures = [
  {
    icon: <PhoneCall className="w-6 h-6 text-amber-400" />,
    title: "Missed-Call Text-Back",
    description: "Never lose a caller to a competitor. Automatically text back missed calls within seconds to engage leads before they leave."
  },
  {
    icon: <Star className="w-6 h-6 text-amber-400" />,
    title: "Automated Review Generator",
    description: "Send automated post-service SMS/email review requests that boost your Google 5-star ratings and local reputation rapidly."
  },
  {
    icon: <MapPin className="w-6 h-6 text-amber-400" />,
    title: "Google Map Pack Dominance",
    description: "Optimize your Google Business Profile keywords, geotagging, and localized content to reach top 3 local search spots."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-amber-400" />,
    title: "Multi-Channel Webchat to SMS",
    description: "Convert website visitors directly into SMS conversations so you can message leads on the go from your phone."
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-amber-400" />,
    title: "Automated Appointment Reminders",
    description: "Eliminate no-shows with automated 2-way SMS booking confirmations, reminder sequences, and reschedule options."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
    title: "Database Reactivation Campaigns",
    description: "Re-engage past cold leads and past customers with targeted AI SMS/email offers to generate instant revenue bursts."
  }
];

const LocalBusinessGrowthSec = () => {
  return (
    <Bounce duration={2500}>
    <section className="local-features-section">
      <div className="local-features-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            Engineered For Local Scale: <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">Growth Automation Suite</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Turn your local business into a self-sustaining client acquisition engine with our proven automation tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localFeatures.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="local-feature-card group"
            >
              <div className="local-feature-icon-box">
                {item.icon}
              </div>
              <h3 className="local-feature-title">
                {item.title}
              </h3>
              <p className="local-feature-desc">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
      </section>
      </Bounce>
  );
};

export default LocalBusinessGrowthSec;
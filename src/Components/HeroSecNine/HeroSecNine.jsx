import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Framer Motion import kiya
import { Send, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './HeroSecNine.css';

const HeroSecNine = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_zr4va4x';
    const templateID = 'template_wf3w28w';
    const publicKey = 'Nv37BXe-8hYuojl5l';

    const templateParams = {
      fullName: fullName,
      email: email,
      phone: phone,
      website: website,
      projectDescription: projectDescription
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast.success('Form submitted successfully!');
      setFullName("");
      setEmail("");
      setPhone("");
      setProjectDescription("");
      setWebsite("");
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden contact-section py-20 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Branding / Value Props (Slide in from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10">
              <span className="badge-dot animate-pulse w-2 h-2 rounded-full bg-amber-400" />
              <span>INITIATE PARTNERSHIP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Let’s Build Your <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Next Digital Empire.
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Connect directly with our senior software architects and strategists. No middlemen, no automated runaround—pure execution.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "Direct consultation with senior tech leads",
                "Custom architecture blueprint in 24 hours",
                "Enterprise-grade security & scalability",
                "Rapid response workflows via Email & WhatsApp"
              ].map((perk, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="perk-dot shrink-0 w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                  <span className="text-slate-200 text-sm sm:text-base font-medium">{perk}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Interactive Form Box (Slide in from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="contact-form-box p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-amber-500/5 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="custom-input w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm sm:text-base"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-input w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm sm:text-base"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="custom-input w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm sm:text-base"
                  placeholder="e.g. +92 300 1234567"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Website / Portfolio Link
                </label>
                <input
                  type="url"
                  id="website"
                  value={website}
                  className="custom-input w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm sm:text-base"
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://yourdomain.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Project Description / Scope *
                </label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  rows="4"
                  className="custom-input w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm sm:text-base resize-none"
                  placeholder="Tell us about your project query..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="custom-submit-btn w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                disabled={loading}
              >
                <span>{loading ? 'Dispatching...' : 'Send Project Brief'}</span>
                <Send className="w-5 h-5" />
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSecNine;
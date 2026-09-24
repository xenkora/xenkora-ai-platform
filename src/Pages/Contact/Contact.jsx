import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import './Contact.css';
import { useTheme } from '../../Context/ThemeContext';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Zoom } from 'react-awesome-reveal';

const Contact = () => {
  const [theme] = useTheme();
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
    <Zoom duration={2000}>
      <section className={`contact-section py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
      }`}>
        {/* Ambient background glows */}
        <div className="ambient-glow glow-amber" />
        <div className="ambient-glow glow-cyan" />

        <div className="contact-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Header with Motion */}
          <div className="contact-header text-center max-w-2xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="contact-tag inline-block px-4 py-1.5 rounded-full text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10">
                INITIATE ENGAGEMENT
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 transition-colors duration-300 ${
                theme === 'light' ? '!text-black' : '!text-white'
              }`}
            >
              Let’s Engineer Your Next Leap
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Drop your project scope below. Our engineering leads will review your specs 
              and respond within 12 hours with a preliminary architectural roadmap.
            </motion.p>
          </div>

          {/* Contact Form Card with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className={`contact-glass-form p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden transition-colors duration-300 ${
              theme === 'light' 
                ? 'bg-white/90 border-slate-200 shadow-slate-200/50' 
                : 'bg-slate-900/60 border-white/10 shadow-black/50 backdrop-blur-2xl'
            }`}>
              
              <div className="form-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                
                <div className="form-group">
                  <label htmlFor="name" className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                    theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ color: theme === 'light' ? '#0f172a' : '#ffffff' }}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl border transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-300 placeholder-slate-400 focus:border-amber-500'
                        : 'bg-slate-950/60 border-white/10 text-white placeholder-slate-500 focus:border-amber-500/50'
                    }`}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                    theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    style={{ color: theme === 'light' ? '#0f172a' : '#ffffff' }}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl border transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-300 placeholder-slate-400 focus:border-amber-500'
                        : 'bg-slate-950/60 border-white/10 text-white placeholder-slate-500 focus:border-amber-500/50'
                    }`}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                    theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    style={{ color: theme === 'light' ? '#0f172a' : '#ffffff' }}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +92 300 1234567"
                    className={`w-full px-4 py-3 rounded-xl border transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-300 placeholder-slate-400 focus:border-amber-500'
                        : 'bg-slate-950/60 border-white/10 text-white placeholder-slate-500 focus:border-amber-500/50'
                    }`}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="website" className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                    theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Website / Portfolio Link
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={website}
                    style={{ color: theme === 'light' ? '#0f172a' : '#ffffff' }}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourdomain.com"
                    className={`w-full px-4 py-3 rounded-xl border transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-300 placeholder-slate-400 focus:border-amber-500'
                        : 'bg-slate-950/60 border-white/10 text-white placeholder-slate-500 focus:border-amber-500/50'
                    }`}
                  />
                </div>

              </div>

              <div className="form-group full-width mb-8">
                <label htmlFor="description" className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  Project Description / Scope *
                </label>
                <textarea
                  id="description"
                  rows="5"
                  style={{ color: theme === 'light' ? '#0f172a' : '#ffffff' }}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Tell us about your project query..."
                  className={`w-full px-4 py-3 rounded-xl border transition-all text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                    theme === 'light'
                      ? 'bg-slate-50 border-slate-300 placeholder-slate-400 focus:border-amber-500'
                      : 'bg-slate-950/60 border-white/10 text-white placeholder-slate-500 focus:border-amber-500/50'
                  }`}
                  required
                />
              </div>

              <div className="form-submit-row flex justify-end">
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary-gradient-contact w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                  disabled={loading}
                >
                  <span>{loading ? 'Dispatching...' : 'Dispatch Specs'}</span>
                  <Send size={16} />
                </motion.button>
              </div>

            </form>
          </motion.div>

        </div>
      </section>
    </Zoom>
  );
};

export default Contact;
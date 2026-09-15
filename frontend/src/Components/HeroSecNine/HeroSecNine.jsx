import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios'
import toast from 'react-hot-toast';
import './HeroSecNine.css'
const HeroSecNine = () => {
  const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [website, setWebsite] = useState('');
   const [projectDescription, setProjectDescription] = useState('');
 
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`http://localhost:8282/api/v1/create-contact` , {fullName,email,phone,website,projectDescription})
    
      if (data.success) {
        toast.success('Form submitted successfully!');
        setFullName("")
        setEmail("")
        setPhone("")
        setProjectDescription("")
        setWebsite("")
      }
    } catch (error) {
      console.log(error)
    }
 };
  
  
  return (
    <section className="relative overflow-hidden contact-section" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Form Column */}
          <div className="contact-form-box p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
            <form onSubmit={handleSubmit}>
              
              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="custom-input w-full"
                  placeholder="Enter your full name" 
                  required 
                />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-input w-full"
                  placeholder="name@company.com" 
                  required 
                />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Mobile Number *
                </label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="custom-input w-full"
                  placeholder="e.g. +92 300 1234567" 
                  required 
                />
              </div>

              
<div className="mb-5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                 Website link *
                </label>
              <input
                type="url"
                id="website"
                  value={website}
                   className="custom-input w-full"
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://yourdomain.com"
              />
            </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Project Brief / Description *
                </label>
                <textarea 
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  rows="4" 
                  className="custom-input w-full"
                  placeholder="tell us about your project querry..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="custom-submit-btn w-full py-4 font-bold text-white shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Project Brief</span>
                <Send className="w-5 h-5" />
              </button>

            </form>
          </div>

          {/* Left Column: Branding / Value Props */}
          <div className="space-y-6">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <span className="badge-dot animate-pulse" />
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
                <li key={idx} className="flex items-center gap-3">
                  <span className="perk-dot shrink-0" />
                  <span className="text-slate-200 text-sm sm:text-base font-medium">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSecNine;
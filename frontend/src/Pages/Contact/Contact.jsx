import React, { useState } from 'react';
import './Contact.css';
import { Send } from 'lucide-react';
import axios from 'axios'
import toast from 'react-hot-toast';
const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const backendUrl = import.meta.env.VITE_BACKEND_URL_xenkora || '';
const {data} = await axios.post(`${backendUrl}/api/v1/create-contact`, {fullName, email, phone, website, projectDescription});
    
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
    <section className="contact-section">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-amber" />
      <div className="ambient-glow glow-cyan" />

      <div className="contact-container">
        {/* Top Header */}
        <div className="contact-header">
          <span className="contact-tag">INITIATE ENGAGEMENT</span>
          <h2>Let’s Engineer Your Next Leap</h2>
          <p>
            Drop your project scope below. Our engineering leads will review your specs 
            and respond within 12 hours with a preliminary architectural roadmap.
          </p>
        </div>

        {/* Contact Form Card */}
        <form onSubmit={handleSubmit} className="contact-glass-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Muhammad Arsal"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Work Email *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="arsal@xenkora.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone / WhatsApp Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+92 300 0000000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="website">Website / Portfolio Link</label>
              <input
                type="url"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://yourdomain.com"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="description">Project Description / Scope *</label>
            <textarea
              id="description"
              rows="5"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="tell us about your project querry..."
              required
            />
          </div>

          <div className="form-submit-row">
            <button type="submit" className="btn-primary-gradient-contact">
              <span>Dispatch Specs</span>
              <Send size={15} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

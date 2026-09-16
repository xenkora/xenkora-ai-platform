import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Section 1: Brand Info & Contact */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block no-underline">
              <h3 className="text-2xl font-extrabold text-white">
                Xenkora<span className="text-amber-500">.</span>
              </h3>
            </Link>
            
            <p className="footer-brand-tagline">
              We Don't Just Market, We Grow Brands
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Xenkora Technologies is a fully remote virtual digital agency engineering brands that dominate the digital world, strategy, code and AI under one roof. Serving founders and businesses across Pakistan, the GCC, UK and North America.
            </p>

           <div className="space-y-2.5 pt-2">
              {/* Clickable WhatsApp Number */}
              <div className="footer-contact-item">
                <a 
                  href="https://wa.me/923222272737?text=Hi%20Xenkora%20Technologies,%20I%20found%20your%20contact%20number%20on%20your%20website%20and%20want%20to%20discuss%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors duration-200 no-underline"
                >
                  <div className="footer-icon-box">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+92 3222272737</span>
                </a>
              </div>

           <div className="footer-contact-item">
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=xenkoratechnologies@gmail.com&su=Project%20Inquiry&body=Hi%20Xenkora%20Technologies,%20I%20want%20to%20discuss%20a%20project%20with%20you." 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors duration-200 no-underline"
  >
    <div className="footer-icon-box">
      <Mail className="w-4 h-4" />
    </div>
    <span>xenkoratechnologies@gmail.com</span>
  </a>
</div>

              <div className="footer-contact-item">
                <div className="footer-icon-box">
                  <Globe className="w-4 h-4" />
                </div>
                <span>Remote first, worldwide</span>
              </div>
            </div>

            <div className="footer-social-icons pt-2">
              {[
                { icon: <FaFacebookF className="w-4 h-4" />, href: "https://www.facebook.com/XenkoraTechnologies", label: "Facebook" },
                { icon: <FaInstagram className="w-4 h-4" />, href: "https://www.instagram.com/xenkoratechnologies", label: "Instagram" },
                // { icon: <FaLinkedinIn className="w-4 h-4" />, href: "#", label: "LinkedIn" },
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="footer-social-btn"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              {[
                { name: "AI Lead Generation", path: "/services/ai-lead-generation" },
                { name: "AI Marketing Automation", path: "/services/ai-marketing-automation" },
                { name: "WhatsApp Chatbot Automation", path: "/services/whatsapp-chatbot" },
                { name: "AI Customer Support", path: "/services/ai-customer-support" },
                { name: "Custom Chatbot Development", path: "/services/custom-chatbot" },
                { name: "Local Business Growth Automation", path: "/services/local-business-growth" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/why-xenkora">Why Xenkora Technologies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Xenkora Technologies. All Rights Reserved.</p>
          <div className="footer-bottom-links flex items-center">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

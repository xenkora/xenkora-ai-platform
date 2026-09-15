import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoNav from '../../assets/logo2.png';
import { ChevronDown, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();
  const navbarRef = useRef(null);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesList = [
    { title: "AI Lead Generation", path: "/services/ai-lead-generation", desc: "Automated high-intent prospect targeting" },
    { title: "AI Marketing Automation", path: "/services/ai-marketing-automation", desc: "Omnichannel automated campaigns & workflows" },
    { title: "WhatsApp Chatbot Automation", path: "/services/whatsapp-chatbot", desc: "24/7 intelligent conversational sales bot" },
    { title: "AI Customer Support", path: "/services/ai-customer-support", desc: "Instant automated resolution for queries" },
    { title: "Custom Chatbot Development", path: "/services/custom-chatbot", desc: "Bespoke LLM-powered enterprise bots" },
    { title: "Local Business Growth Automation", path: "/services/local-business-growth", desc: "Hyper-local marketing & lead engines" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 py-3" ref={navbarRef}>
      <nav className="max-w-7xl mx-auto bg-slate-950/85 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-full px-4 lg:px-6 py-2.5 shadow-2xl shadow-black/80 transition-all duration-300">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoNav}
              alt="Xenkora Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                location.pathname === '/'
                  ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                  : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                location.pathname === '/about'
                  ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                  : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  location.pathname.startsWith('/services')
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              {/* Services Menu Box */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-slate-900/95 backdrop-blur-2xl border border-amber-500/20 rounded-2xl p-2 shadow-2xl shadow-black ring-1 ring-amber-500/10 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider px-3 py-1.5 flex items-center gap-1.5 border-b border-white/5 mb-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>AI Solutions</span>
                  </div>
                  <div className="space-y-0.5 max-h-[380px] overflow-y-auto custom-scrollbar">
                    {servicesList.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-3 py-2.5 rounded-xl hover:bg-amber-500/15 group transition-all duration-200"
                      >
                        <div className="text-sm font-medium text-slate-100 group-hover:text-amber-300 flex items-center justify-between">
                          <span>{item.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-amber-400" />
                        </div>
                        <p className="text-xs text-slate-400 group-hover:text-slate-300 mt-0.5 line-clamp-1">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                location.pathname.startsWith('/blog')
                  ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                  : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                location.pathname === '/contact'
                  ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                  : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/why-xenkora"
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-full transition-all duration-200"
            >
              Why Xenkora Technologies
            </Link>
          </div>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Start Project</span>
            </Link>
          </div>

          {/* Mobile Menu Toggler Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-200 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-xl"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-xl"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-xl"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 pl-3 border-l-2 border-amber-500/30 my-1 space-y-1">
                  {servicesList.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-300 hover:bg-amber-500/10 rounded-lg"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-xl"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-xl"
            >
              Contact
            </Link>

            <a
              href="#why-us"
              className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-xl"
            >
              Why Xenkora Technologies
            </a>

            <div className="pt-2">
              <Link
                to="/contact"
                className="block text-center w-full py-3 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 shadow-lg shadow-amber-600/30"
              >
                Start Project
              </Link>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;
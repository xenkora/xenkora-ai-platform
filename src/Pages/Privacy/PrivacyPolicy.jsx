import React from 'react';
import './PrivacyPolicy.css';
import { ShieldCheck, Lock, Mail, Globe, Server } from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext'; // Theme import kiya

const PrivacyPolicy = () => {
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <section className={`privacy-section py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
    }`}>
      {/* Ambient background glows */}
      <div className="ambient-glow glow-amber" />
      <div className="ambient-glow glow-cyan" />

      <div className="privacy-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Split Layout */}
        <div className={`privacy-header-card p-8 sm:p-10 rounded-3xl border shadow-xl mb-8 flex flex-col lg:flex-row justify-between gap-8 transition-colors duration-300 ${
          theme === 'light' 
            ? 'bg-white/90 border-slate-200 text-slate-900 shadow-slate-200/50' 
            : 'bg-slate-900/60 border-white/10 text-white shadow-black/40 backdrop-blur-xl'
        }`}>
          <div className="header-left max-w-xl">
            <span className="privacy-tag inline-block px-4 py-1.5 rounded-full text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10 mb-4">
              LEGAL COMPLIANCE
            </span>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 ${
              theme === 'light' ? '!text-black' : '!text-white'
            }`}>
              Privacy Policy
            </h1>
            <p className={`last-updated text-sm font-medium ${
              theme === 'light' ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Last updated: September 15, 2026
            </p>
          </div>
          <div className="header-right max-w-xl flex items-center">
            <p className={`text-base sm:text-lg leading-relaxed ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-300'
            }`}>
              This Privacy Policy explains how Xenkora Technologies collects, uses, stores, 
              and protects personal data when you use our website, AI automation pipelines, 
              custom MERN software, or CRM enterprise solutions.
            </p>
          </div>
        </div>

        {/* Intro Meta */}
        <div className={`privacy-intro-box p-6 sm:p-8 rounded-2xl border mb-12 transition-colors duration-300 ${
          theme === 'light' 
            ? 'bg-white/80 border-slate-200 text-slate-700 shadow-sm' 
            : 'bg-slate-900/40 border-white/10 text-slate-300 backdrop-blur-xl'
        }`}>
          <p className="text-base sm:text-lg leading-relaxed">
            This Privacy Policy ("we", "our", "us") applies to clients, partners, and users 
            globally (including US, UK, Middle East, and APAC regions). By accessing or using our 
            Services, you consent to the data practices described herein.
          </p>
        </div>

        {/* Content Body */}
        <div className="privacy-content-grid grid gap-8">
          
          {/* Section 1 */}
          <div className={`policy-block p-8 rounded-3xl border transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/50 border-white/10 backdrop-blur-xl'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'light' ? '!text-slate-900' : '!text-white'}`}>
              1. Who We Are
            </h2>
            <p className={`mb-6 leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              <strong className={theme === 'light' ? 'text-slate-900' : 'text-white'}>Xenkora Technologies</strong> provides full-stack AI automation, 
              WhatsApp chatbot systems, algorithmic lead-gen funnels, and enterprise MERN/Shopify 
              engineering for digital-first brands.
            </p>
            <div className={`contact-meta-box p-4 rounded-xl border flex flex-col gap-3 ${
              theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950/60 border-white/10 text-slate-200'
            }`}>
              <div className="meta-row flex items-center gap-3">
                <Mail size={18} className="text-amber-500" />
                <span><strong>Email:</strong> legal@xenkora.com / support@xenkora.com</span>
              </div>
              <div className="meta-row flex items-center gap-3">
                <Globe size={18} className="text-cyan-500" />
                <span><strong>Website:</strong> https://xenkora.com</span>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className={`policy-block p-8 rounded-3xl border transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/50 border-white/10 backdrop-blur-xl'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'light' ? '!text-slate-900' : '!text-white'}`}>
              2. Data We Collect
            </h2>
            <p className={`mb-4 leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              We collect data provided directly by you, automatically during system usage, or via authorized third-party integrations.
            </p>
            
            <h3 className={`text-lg font-semibold mt-6 mb-3 ${theme === 'light' ? 'text-slate-900' : 'text-amber-400'}`}>
              2.1 Information You Provide
            </h3>
            <ul className={`list-disc pl-6 space-y-2 mb-6 ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              <li>Account registration details (name, work email, phone number, company profile, billing specs)</li>
              <li>Project scope descriptions, API credentials, or database connection schemas shared for development</li>
              <li>WhatsApp/CRM conversation transcripts and automation workflow configurations</li>
              <li>Support requests and engineering comms</li>
            </ul>

            <h3 className={`text-lg font-semibold mt-6 mb-3 ${theme === 'light' ? 'text-slate-900' : 'text-amber-400'}`}>
              2.2 Automatically Collected Data
            </h3>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              <li>IP addresses, device metadata, and browser/system specs</li>
              <li>Server performance metrics, execution logs, and webhook delivery status</li>
              <li>Cookies and analytics telemetry for dashboard optimization</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className={`policy-block p-8 rounded-3xl border transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/50 border-white/10 backdrop-blur-xl'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'light' ? '!text-slate-900' : '!text-white'}`}>
              3. How We Use Personal Data
            </h2>
            <p className={`mb-4 leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              We process operational data strictly for high-velocity execution and compliance:
            </p>
            <ul className={`list-disc pl-6 space-y-2 mb-6 ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              <li>To deploy, maintain, and scale MERN, Shopify, and CRM/AI automation infrastructure</li>
              <li>To authenticate user sessions, manage API gateways, and enforce RBAC role authorization</li>
              <li>To execute automated WhatsApp and lead-gen pipelines per client configuration</li>
              <li>To process subscriptions, milestone invoices, and technical SLA reporting</li>
              <li>To comply with regulatory audit and cybersecurity legal obligations</li>
            </ul>
            <div className={`highlight-callout p-4 rounded-xl border flex items-start gap-3 ${
              theme === 'light' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
            }`}>
              <ShieldCheck size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Zero-Sale Policy:</strong> We do not sell, rent, or monetize client proprietary data or end-user lead lists to third parties.</span>
            </div>
          </div>

          {/* Section 4 */}
          <div className={`policy-block p-8 rounded-3xl border transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/50 border-white/10 backdrop-blur-xl'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'light' ? '!text-slate-900' : '!text-white'}`}>
              4. Legal Basis for Processing (GDPR, CCPA & Global Standards)
            </h2>
            <p className={`leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              We process data based on contractual necessity (delivering engineered software/funnels), 
              legitimate business interests (security hardening and system telemetry), explicit user 
              consent for WhatsApp/AI workflows, and statutory compliance obligations.
            </p>
          </div>

          {/* Section 5 */}
          <div className={`policy-block p-8 rounded-3xl border transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/50 border-white/10 backdrop-blur-xl'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'light' ? '!text-slate-900' : '!text-white'}`}>
              5. Data Security & Cryptographic Shielding
            </h2>
            <p className={`leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              All data at rest is encrypted via AES-256 standards, and data in transit utilizes 
              TLS 1.3 protocol. JWT token handlers, isolated MongoDB Atlas cluster tiers, and role-based 
              middleware safeguard administrative touchpoints.
            </p>
          </div>

          {/* Section 6 */}
          <div className={`policy-block p-8 rounded-3xl border transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/50 border-white/10 backdrop-blur-xl'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'light' ? '!text-slate-900' : '!text-white'}`}>
              6. Data Retention & Offboarding
            </h2>
            <p className={`leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              Operational logs and temporary build artifacts are retained for 90 days post-project 
              sign-off. Upon formal offboarding request, production database schemas and private repo 
              access credentials are purged or transferred completely to client ownership.
            </p>
          </div>

          {/* Section 7 */}
          <div className={`policy-block p-8 rounded-3xl border transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/50 border-white/10 backdrop-blur-xl'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'light' ? '!text-slate-900' : '!text-white'}`}>
              7. Your Privacy Rights
            </h2>
            <p className={`mb-4 leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              Depending on your jurisdiction, you retain rights to:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              <li>Access, rectify, or export stored configuration logs and profile metadata</li>
              <li>Revoke consent for active AI/WhatsApp automation webhooks</li>
              <li>Request complete erasure ("right to be forgotten") of non-statutory records</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className={`policy-block p-8 rounded-3xl border transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-slate-900/50 border-white/10 backdrop-blur-xl'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'light' ? '!text-slate-900' : '!text-white'}`}>
              8. Policy Updates
            </h2>
            <p className={`leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              Material updates to this privacy framework will be broadcasted via dashboard alerts 
              or registered work emails 14 days prior to enforcement.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
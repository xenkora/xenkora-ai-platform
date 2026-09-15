import React from 'react';
import './PrivacyPolicy.css';
import { ShieldCheck, Lock, Mail, Globe, Server } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <section className="privacy-section">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-amber" />
      <div className="ambient-glow glow-cyan" />

      <div className="privacy-container">
        {/* Top Header Split Layout */}
        <div className="privacy-header-card">
          <div className="header-left">
            <span className="privacy-tag">LEGAL COMPLIANCE</span>
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: September 15, 2026</p>
          </div>
          <div className="header-right">
            <p>
              This Privacy Policy explains how Xenkora Technologies collects, uses, stores, 
              and protects personal data when you use our website, AI automation pipelines, 
              custom MERN software, or CRM enterprise solutions.
            </p>
          </div>
        </div>

        {/* Intro Meta */}
        <div className="privacy-intro-box">
          <p>
            This Privacy Policy ("we", "our", "us") applies to clients, partners, and users 
            globally (including US, UK, Middle East, and APAC regions). By accessing or using our 
            Services, you consent to the data practices described herein.
          </p>
        </div>

        {/* Content Body */}
        <div className="privacy-content-grid">
          {/* Section 1 */}
          <div className="policy-block">
            <h2>1. Who We Are</h2>
            <p>
              <strong>Xenkora Technologies</strong> provides full-stack AI automation, 
              WhatsApp chatbot systems, algorithmic lead-gen funnels, and enterprise MERN/Shopify 
              engineering for digital-first brands.
            </p>
            <div className="contact-meta-box">
              <div className="meta-row">
                <Mail size={16} className="text-amber" />
                <span><strong>Email:</strong> legal@xenkora.com / support@xenkora.com</span>
              </div>
              <div className="meta-row">
                <Globe size={16} className="text-cyan" />
                <span><strong>Website:</strong> https://xenkora.com</span>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="policy-block">
            <h2>2. Data We Collect</h2>
            <p>We collect data provided directly by you, automatically during system usage, or via authorized third-party integrations.</p>
            
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Account registration details (name, work email, phone number, company profile, billing specs)</li>
              <li>Project scope descriptions, API credentials, or database connection schemas shared for development</li>
              <li>WhatsApp/CRM conversation transcripts and automation workflow configurations</li>
              <li>Support requests and engineering comms</li>
            </ul>

            <h3>2.2 Automatically Collected Data</h3>
            <ul>
              <li>IP addresses, device metadata, and browser/system specs</li>
              <li>Server performance metrics, execution logs, and webhook delivery status</li>
              <li>Cookies and analytics telemetry for dashboard optimization</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="policy-block">
            <h2>3. How We Use Personal Data</h2>
            <p>We process operational data strictly for high-velocity execution and compliance:</p>
            <ul>
              <li>To deploy, maintain, and scale MERN, Shopify, and CRM/AI automation infrastructure</li>
              <li>To authenticate user sessions, manage API gateways, and enforce RBAC role authorization</li>
              <li>To execute automated WhatsApp and lead-gen pipelines per client configuration</li>
              <li>To process subscriptions, milestone invoices, and technical SLA reporting</li>
              <li>To comply with regulatory audit and cybersecurity legal obligations</li>
            </ul>
            <div className="highlight-callout">
              <ShieldCheck size={18} className="text-emerald" />
              <span><strong>Zero-Sale Policy:</strong> We do not sell, rent, or monetize client proprietary data or end-user lead lists to third parties.</span>
            </div>
          </div>

          {/* Section 4 */}
          <div className="policy-block">
            <h2>4. Legal Basis for Processing (GDPR, CCPA & Global Standards)</h2>
            <p>
              We process data based on contractual necessity (delivering engineered software/funnels), 
              legitimate business interests (security hardening and system telemetry), explicit user 
              consent for WhatsApp/AI workflows, and statutory compliance obligations.
            </p>
          </div>

          {/* Section 5 */}
          <div className="policy-block">
            <h2>5. Data Security & Cryptographic Shielding</h2>
            <p>
              All data at rest is encrypted via AES-256 standards, and data in transit utilizes 
              TLS 1.3 protocol. JWT token handlers, isolated MongoDB Atlas cluster tiers, and role-based 
              middleware safeguard administrative touchpoints.
            </p>
          </div>

          {/* Section 6 */}
          <div className="policy-block">
            <h2>6. Data Retention & Offboarding</h2>
            <p>
              Operational logs and temporary build artifacts are retained for 90 days post-project 
              sign-off. Upon formal offboarding request, production database schemas and private repo 
              access credentials are purged or transferred completely to client ownership.
            </p>
          </div>

          {/* Section 7 */}
          <div className="policy-block">
            <h2>7. Your Privacy Rights</h2>
            <p>Depending on your jurisdiction, you retain rights to:</p>
            <ul>
              <li>Access, rectify, or export stored configuration logs and profile metadata</li>
              <li>Revoke consent for active AI/WhatsApp automation webhooks</li>
              <li>Request complete erasure ("right to be forgotten") of non-statutory records</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="policy-block">
            <h2>8. Policy Updates</h2>
            <p>
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
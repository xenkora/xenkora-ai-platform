import React from 'react';
import { Link } from 'react-router-dom'; // <-- Fix here
import './Blog.css';
import { ArrowRight, Sparkles } from 'lucide-react';

const servicesList = [
  { 
    title: "AI Lead Generation", 
    path: "/services/ai-lead-generation", 
    desc: "Automated high-intent prospect targeting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
  },
  { 
    title: "AI Marketing Automation", 
    path: "/services/ai-marketing-automation", 
    desc: "Omnichannel automated campaigns & workflows",
    image: "https://media.istockphoto.com/id/815815658/photo/cyborg-and-new-manketing-strategy-formula.jpg?s=1024x1024&w=is&k=20&c=olTx1oabTCWLoKroPWXoE-rgr7vZf_QLPjrgH33jd_o="
  },
  { 
    title: "WhatsApp Chatbot Automation", 
    path: "/services/whatsapp-chatbot", 
    desc: "24/7 intelligent conversational sales bot",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "AI Customer Support", 
    path: "/services/ai-customer-support", 
    desc: "Instant automated resolution for queries",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Custom Chatbot Development", 
    path: "/services/custom-chatbot", 
    desc: "Bespoke LLM-powered enterprise bots",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
  },
  { 
    title: "Local Business Growth Automation", 
    path: "/services/local-business-growth", 
    desc: "Hyper-local marketing & lead engines",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
  },
];

const Blog = () => {
  return (
    <section className="xenkora-blog-section">
      <div className="xenkora-blog-container">
        
        {/* Top Header: Title + 3-Line Description */}
        <div className="section-header">
          <div className="blog-badge">
            <Sparkles size={12} /> ENTERPRISE SOLUTIONS
          </div>
          <h2 className="blog-section-title">
            Architecting Growth For <br />
            <span className="highlight-gradient">Xenkora Technologies</span>
          </h2>
          <p className="blog-section-desc">
            Explore our battle-tested engineering verticals designed to automate pipeline velocity and scale infrastructure. 
            Each capability is built by senior squads with deterministic attribution tied directly to your core ledger metrics. 
            Select a solution below to review technical documentation and implementation roadmaps.
          </p>
        </div>

        {/* 3x2 Grid (2 items per row, 3 rows total) */}
        <div className="services-3x2-grid">
          {servicesList.map((service, index) => (
            <Link to={service.path} key={index} className="service-card-anchor">
              <article className="service-card">
                {/* Top: Image */}
                <div className="card-image-box">
                  <img src={service.image} alt={service.title} className="card-img" />
                  <div className="card-img-scrim" />
                </div>
                
                {/* Middle & Bottom: Name & Description */}
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-desc">{service.desc}</p>
                  <span className="card-link-text">
                    Open Solution <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
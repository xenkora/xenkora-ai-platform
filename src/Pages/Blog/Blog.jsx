import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import './Blog.css';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Zoom, Slide } from 'react-awesome-reveal';
import { useTheme } from '../../Context/ThemeContext.jsx'; // Theme import kiya

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
  const [theme] = useTheme(); // Theme state get kiya

  return (
    <section className={`xenkora-blog-section py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'text-white'
    }`}>
      <div className="xenkora-blog-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Slide>
        {/* Top Header: Title + 3-Line Description with Motion */}
        <div className="section-header text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="blog-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-500/10">
              <Sparkles size={14} /> ENTERPRISE SOLUTIONS
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`blog-section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight transition-colors duration-300 ${
              theme === 'light' ? '!text-black' : '!text-white'
            }`}
          >
            Architecting Growth For <br />
            <span className="highlight-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Xenkora Technologies
            </span>
          </motion.h2>

         
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`blog-section-desc text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-400'
            }`}
          >
            Explore our battle-tested engineering verticals designed to automate pipeline velocity and scale infrastructure. 
            Each capability is built by senior squads with deterministic attribution tied directly to your core ledger metrics. 
            Select a solution below to review technical documentation and implementation roadmaps.
          </motion.p>
           
          </div>
          </Slide>

 <Zoom duration={1000}>
        {/* 3x2 Grid (2 items per row, 3 rows total) with Staggered Motion */}
        <div className="services-3x2-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Link to={service.path} className="service-card-anchor block group h-full no-underline">
                <article className={`service-card rounded-3xl border overflow-hidden shadow-xl transition-all duration-300 h-full flex flex-col ${
                  theme === 'light'
                    ? 'bg-white/90 border-slate-200 shadow-slate-200/50 hover:border-amber-500/50'
                    : 'bg-slate-900/60 border-white/10 shadow-black/40 backdrop-blur-xl hover:border-amber-500/40'
                }`}>
                  
                  {/* Top: Image */}
                  <div className="card-image-box relative h-52 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="card-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className={`card-img-scrim absolute inset-0 ${
                      theme === 'light'
                        ? 'bg-gradient-to-t from-slate-900/60 via-transparent to-transparent'
                        : 'bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent'
                    }`} />
                  </div>
                  
                  {/* Middle & Bottom: Name & Description */}
                  <div className="card-body p-6 sm:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className={`card-title text-xl font-bold mb-2 transition-colors ${
                        theme === 'light' ? 'text-slate-900 group-hover:text-amber-600' : 'text-white group-hover:text-amber-400'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`card-desc text-sm sm:text-base mb-6 leading-relaxed transition-colors ${
                        theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {service.desc}
                      </p>
                    </div>

                    <span className="card-link-text inline-flex items-center gap-2 text-sm font-semibold text-amber-500 dark:text-amber-400 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                      <span>Open Solution</span> 
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                </article>
              </Link>
            </motion.div>
          ))}
        </div>
</Zoom>
      </div>
    </section>
  );
};

export default Blog;
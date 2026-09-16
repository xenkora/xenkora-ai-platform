import React from 'react';
import { Cpu, Code2, Database, Workflow, ShieldCheck, Sparkles } from 'lucide-react';
import './CustomChatbotSec.css'
const customFeatures = [
  {
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    title: "Custom LLM Fine-Tuning",
    description: "Fine-tune models (Llama 3, GPT-4o, Claude 3.5) on your company's domain knowledge and specific communication style."
  },
  {
    icon: <Database className="w-6 h-6 text-amber-400" />,
    title: "RAG & Vector Database Architecture",
    description: "Implement high-speed vector search (Pinecone, Qdrant) to retrieve accurate answers from millions of internal documents."
  },
  {
    icon: <Workflow className="w-6 h-6 text-amber-400" />,
    title: "Autonomous Action Execution",
    description: "Equip your AI bot with tool calling abilities to execute database queries, trigger webhooks, and process transactions."
  },
  {
    icon: <Code2 className="w-6 h-6 text-amber-400" />,
    title: "Custom UI/UX Widget Design",
    description: "Craft pixel-perfect, branded chat interface components with dark mode, animations, and voice inputs."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    title: "Multi-Agent System Orchestration",
    description: "Deploy specialized sub-agents working together (e.g. Sales Bot + Technical Support Bot + Billing Agent)."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    title: "Private Cloud & On-Premises Hosting",
    description: "Deploy securely on AWS, GCP, Azure, or private enterprise servers with zero data sharing to public models."
  }
];

const CustomChatbotSec = () => {
  return (
    <section className="custom-chatbot-section">
      <div className="custom-chatbot-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Engineered For Precision: <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 bg-clip-text text-transparent">Custom AI Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Standard chatbots have limitations. Our custom engineered solutions give you total control, security, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customFeatures.map((item, idx) => (
            <div 
              key={idx}
              className="custom-chatbot-card group"
            >
              <div className="custom-chatbot-icon-box">
                {item.icon}
              </div>
              <h3 className="custom-chatbot-title">
                {item.title}
              </h3>
              <p className="custom-chatbot-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomChatbotSec;
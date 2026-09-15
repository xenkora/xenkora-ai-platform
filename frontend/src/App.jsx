import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AiLeadHead from './Pages/Services/AiLeadGeneration/AiLeadHead';
import AiMarketingAutomation from './Pages/Services/AiMarketingAutomation/AiMarketingAutomation';
import WhatsappChatbot from './Pages/Services/WhatsappChatbot/WhatsappChatbot';
import AiCustomerSupport from './Pages/Services/AiCustomerSupport/AiCustomerSupport';
import CustomChatbot from './Pages/Services/CustomChatbot/CustomChatbot';
import LocalBusinessGrowth from './Pages/Services/LocalBusinessGrowth/LocalBusinessGrowth';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import PrivacyPolicy from './Pages/Privacy/PrivacyPolicy';
import WhyXenkora from './Pages/WhyXenkora/WhyXenkora';

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Home/>} 
          />
           <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services/ai-lead-generation" element={<AiLeadHead />} />
          <Route path="/services/ai-marketing-automation" element={<AiMarketingAutomation />} />
          <Route path="/services/whatsapp-chatbot" element={<WhatsappChatbot/>} />
          <Route path="/services/ai-customer-support" element={<AiCustomerSupport />} />
          <Route path="/services/custom-chatbot" element={<CustomChatbot />} />
          <Route path="/services/local-business-growth" element={<LocalBusinessGrowth />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/why-xenkora" element={<WhyXenkora/>} />
          
          

        </Routes>
      </div>

      <Footer />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid #334155'
          }
        }}
      />
    </div>
  );
};

export default App;
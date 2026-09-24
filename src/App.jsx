import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useTheme } from './Context/ThemeContext';
import ScrollToTop from './ScrollToTop';
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
  const [theme] = useTheme(); // Yahan theme mil raha hai ('light' ya 'dark')

  return (
    <div 
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-white text-black' 
          : 'bg-slate-950 text-slate-100'
      }`}
    >
      <div>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />
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
    </div>
  );
};

export default App;
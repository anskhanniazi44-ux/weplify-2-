
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Offers from './components/Offers.tsx';
import HostingPlans from './components/HostingPlans.tsx';
import Services from './components/Services.tsx';
import Portfolio from './components/Portfolio.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ChatAssistant from './components/ChatAssistant.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Offers />
        <HostingPlans />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;

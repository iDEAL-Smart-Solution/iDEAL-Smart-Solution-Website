// src/App.jsx
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CapabilityStrip from './components/CapabilityStrip.jsx';
import WhatWeBuild from './components/WhatWeBuild.jsx';
import Industries from './components/Industries.jsx';
import Products from './components/Products.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import HowWeBuild from './components/HowWeBuild.jsx';
import WhyIDEAL from './components/WhyIDEAL.jsx';
import About from './components/About.jsx';
import Founders from './components/Founders.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Capability / Credibility strip */}
        <CapabilityStrip />
        {/* 3. What We Build */}
        <WhatWeBuild />
        {/* 4. Industries */}
        <Industries />
        {/* 5. Our Products */}
        <Products />
        {/* 6. Case Studies */}
        <CaseStudies />
        {/* 7. How We Build */}
        <HowWeBuild />
        {/* 8. Why iDEAL */}
        <WhyIDEAL />
        {/* 9. About */}
        <About />
        {/* 10. Founders */}
        <Founders />
        {/* 11. Contact CTA */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

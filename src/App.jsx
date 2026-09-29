// src/App.jsx
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
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
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* 1. Hero */}
        <Hero />
        {/* Products lead the story: working systems first, capabilities next. */}
        <Products />
        <WhatWeBuild />
        <Industries />
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

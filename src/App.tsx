import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Founders from './components/Founders';
import News from './components/News';
import MarketplaceCTA from './components/MarketplaceCTA';
import Impact from './components/Impact';
import ComingSoon from './components/ComingSoon';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <WhatWeOffer />
        <About />
        <VisionMission />
        <Founders />
        <News />
        <MarketplaceCTA />
        <Impact />
        <ComingSoon />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Gallery from './components/sections/Gallery';
import Membership from './components/sections/Membership';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Features from './components/sections/Features';
import TrainerSection from './components/trainer/Index';
import MotivationalSection from './components/MotivationalSection/Index';

function App() {
  return (
    <div className="bg-black font-sans">
      <Navbar />
      <Hero />

    <TrainerSection></TrainerSection>
      <Features></Features>
      <Gallery />
       <MotivationalSection />
      <Membership />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Membership from './components/sections/Membership';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Features from './components/sections/Features';
import Text from './components/sections/Text';
import Font from './components/sections/Font';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
     <Text></Text>
      <Features></Features>
      {/* <About /> */}
      {/* <Services /> */}
      <Gallery />
      <Font />
      <Membership />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tsec from './components/Tsec';
import Fsec from './components/Fsec';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
     
      <Analytics />
      <Tsec />
      <Cards />
      <Fsec />
      <Newsletter />
      
      <Footer />
    </div>
  );
}

export default App;

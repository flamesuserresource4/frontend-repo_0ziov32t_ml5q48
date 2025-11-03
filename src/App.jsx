import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductTour from './components/ProductTour';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-white bg-black antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductTour />
      </main>
      <Footer />
    </div>
  );
}

export default App;

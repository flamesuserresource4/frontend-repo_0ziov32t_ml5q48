import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTABanner from './components/CTABanner';

function App() {
  return (
    <div className="font-inter text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTABanner />
      </main>
    </div>
  );
}

export default App;

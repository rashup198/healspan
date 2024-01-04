import React from 'react';
import './index.css';
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import OurClients from './components/OurClients';
import WhyUs from './components/WhyUs';
import WhatWeDo from './components/whatWeDo';

function App() {
  return (
    <>
      <div className="h-[100vh]"> 
        <Navbar />
        <Hero />
        <OurClients></OurClients>
        <WhyUs></WhyUs>
        <WhatWeDo></WhatWeDo>
      </div>
    </>
  );
}

export default App;

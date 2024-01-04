import React from 'react';
import './index.css';
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import OurClients from './components/OurClients';

function App() {
  return (
    <>
      <div className="h-[100vh]"> 
        <Navbar />
        <Hero />
        <OurClients></OurClients>
      </div>
    </>
  );
}

export default App;

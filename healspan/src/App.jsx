import React from 'react';
import './index.css';
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className="h-[100vh]"> 
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;

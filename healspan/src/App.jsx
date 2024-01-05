import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';


import WhatWeDo from './components/whatWeDo';
import Footer from './components/Footer';
import Collaborate from './components/collaborate';

function App() {
  return (
    <>
      <div className="h-[100vh]"> 
        
        <Hero />
        <WhatWeDo></WhatWeDo>
        <Collaborate></Collaborate>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

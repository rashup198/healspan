import React from 'react';
import hero from "../assets/hero.png";
import { Link } from 'react-router-dom';
import OurClients from './OurClients';
import WhyUs from './WhyUs';
import Collaborate from './collaborate';
import WhatWeDo from './whatWeDo';
import Footer from './Footer';

const Hero = () => {
  return (
    <div className='pt-[70px]'>
      
      <div className="bg-gradient-to-tr from-blue-700 via-blue-400 to-blue-200 flex flex-col md:flex-row justify-between p-[40px] md:p-[100px] ">
        <div className="left flex flex-col gap-y-[20px] md:gap-y-[40px]">
          <div className="parent text-[30px] md:text-[45px] font-semibold text-white">
            <h1>
              Claims Management
            </h1>
            <h1>
              Made hassle-free
            </h1>
          </div>

          <div className="child text-[14px] md:text-[17px] text-white max-w-[450px]">
            <p>
              We streamline cashless insurance claims documentation and queries for hospitals with our tech platform, ensuring hassle-free management.
            </p>
          </div>

          <div className="button flex mb-[20px] gap-[10px] md:gap-[20px] items-center">
           <Link to="/contact-us">
            <button className='bg-orange-600 p-2 md:p-3 rounded-md text-white pl-[20px] pr-[20px]'>
              Let's Talk
            </button>
            </Link>
            <Link to="/about-us"><p className='hover:underline hover:underline-offset-2 cursor-pointer text-white font-semibold text-[14px] md:text-[17px]'>Learn More</p></Link>
          </div>
        </div>

        <div className="right max-w-[100%] md:max-w-[600px]">
          <div className="">
            <img src={hero} className='border-[10px] border-orange-500 rounded-[10px] md:rounded-l-[120%] md:rounded-r-[50%]'></img>
          </div>
        </div>
      </div>
         <OurClients></OurClients>
         <WhyUs></WhyUs>
         <WhatWeDo></WhatWeDo>
         <Collaborate></Collaborate> 
         <Footer></Footer>
    </div>
  );
}

export default Hero;

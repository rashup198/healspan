import React from 'react';
import img1 from '../assets/hospital/APOLLOHOSP.NS_BIG.png';
import img2 from '../assets/hospital/dr-agarwals-eye-hospital-logo-940BA4DA1B-seeklogo.com.png';
import img3 from '../assets/hospital/LALPATHLAB.NS_BIG.png';
import img4 from '../assets/hospital/MAXHEALTH.NS_BIG.png';

const OurClients = () => {
  return (
    <div className="parent flex flex-col justify-center items-center">
      <h1 className="text-[20px] text-center md:text-center md:text-[50px] text-[#050505] font-bold font-sans pt-[60px] pb-[60px]">
        Trusted By The India's Leading Hospitals
      </h1>
      <div className="childParent flex flex-row justify-center items-center flex-wrap gap-[20px] md:flex-row md:gap-[100px]">
        <img src={img1} className="child w-[100px] md:w-[150px] lg:w-[200px]" alt="Hospital 1" />
        <img src={img2} className="child w-[150px] md:w-[250px] lg:w-[300px]" alt="Hospital 2" />
        <img src={img3} className="child w-[120px] md:w-[200px] lg:w-[250px]" alt="Hospital 3" />
        <img src={img4} className="child w-[150px] md:w-[250px] lg:w-[300px]" alt="Hospital 4" />
      </div>
    </div>
  );
};

export default OurClients;

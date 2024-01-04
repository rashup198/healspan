import React from 'react'
import img1 from "../assets/hospital/APOLLOHOSP.NS_BIG.png"
import img2 from "../assets/hospital/dr-agarwals-eye-hospital-logo-940BA4DA1B-seeklogo.com.png"
import img3 from "../assets/hospital/LALPATHLAB.NS_BIG.png"
import img4 from "../assets/hospital/MAXHEALTH.NS_BIG.png"

const OurClients = () => {
  return (
    <div>
      <div className="parent flex flex-col justify-center items-center ">
        <h1 className=' text-[50px] text-[#050505] font-bold font-sans  pt-[60px] pb-[60px]'>
            Trusted By The India's Leading Hospitals
        </h1>
        <div className="childParent flex gap-[100px] ">
            <img src={img1} className="child w-[100px]"></img>
            <img src={img2} className="child w-[250px]"></img>
            <img src={img3} className="child w-[200px]"></img>
            <img src={img4} className="child w-[270px]"></img>
        </div>

      </div>
    </div>
  )
}

export default OurClients

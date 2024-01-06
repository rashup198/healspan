import React from 'react'
import logo from "../assets/logo.svg"
import { FaLinkedin,FaLocationDot,FaPhone,  } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import Contact from './Contact';

const Footer = () => {
  return (
    <div className="">
    <div className='pl-[200px] pr-[200px] flex justify-between bg-[#f0eeee] mt-[20px] pb-3'>
        <div className="right flex flex-col justify-start">
            <div className="logo">
                <img src={logo} className='h-[200px] w-[400px]'></img>
            </div>
            <div className="social text-[35px] flex gap-[30px] ml-[40px] text-[#000000]">
                <a href='https://www.linkedin.com/company/healspan' target='_black' className=' text-[#0A66C2]'><FaLinkedin /></a>
                <a href='https://twitter.com/healspan'><FaXTwitter /></a>
            </div>
        </div>
        <div className="left max-w-[430px] flex flex-col gap-5 ">
          <h1 className=' text-[35px] mt-[30px] font-semibold'>Contact Us</h1>
          <a href='' className="flex items-center gap-3"><span className=' text-[#4c9eaa]'><FaLocationDot></FaLocationDot></span>KR4U Technologies service pvt ltd 91 Springboard,Gopala Krishna Complex, 45/3, Residency Road,MG Road, Bengaluru, Karnataka - 560025</a>
          <a className="flex items-center gap-3"><span className=' text-[#4c9eaa]' ><FaPhone></FaPhone></span>+91-8050071616</a>
          <a href = "mailto:info@healspan.com" target='_blank' className="flex items-center gap-3"><span className=' text-[#4c9eaa] text-[20px]'><IoIosMail /></span>info@healspan.com</a>
        </div>
    </div>   
    <p className='text-center'>Copyrights © KR4U Technologies service private limited. All rights reserved.</p> 
    
    </div>
    
  )
}

export default Footer

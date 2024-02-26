import React from 'react';
import logo from '../assets/logo.svg';
import { FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-[#f0eeee] mt-[20px] pb-3'>
      <div className='flex flex-col md:flex-row justify-between pl-[20px] pr-[20px] md:pl-[200px] md:pr-[200px]'>
        <div className='flex flex-col items-center md:items-start  md:flex-col md:justify-center'>
          <div className='logo'>
            <img src={logo} className='h-[110px] w-[240px] md:h-[110px]' alt='Logo' />
          </div>
          <div className='social text-[30px] flex gap-4 mt-4 md:mt-0 md:ml-[20px] mb-[20px]'>
            <a href='https://www.linkedin.com/company/healspan' target='_blank' rel='noopener noreferrer' className='text-[#0A66C2]'>
              <FaLinkedin />
            </a>
            <a href='https://twitter.com/healspan' target='_blank' rel='noopener noreferrer'>
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className='max-w-full md:max-w-[430px] flex flex-col gap-4 md:ml-12'>
          <h1 className='text-[25px] font-semibold'>Contact Us</h1>
          <a href='https://www.linkedin.com/company/healspan' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3'>
            <span className='text-[#4c9eaa]'>
              <FaLocationDot />
            </span>
            KR4U Technologies Service Pvt Ltd, 91 Springboard, Gopala Krishna Complex, 45/3, Residency Road, MG Road, Bengaluru, Karnataka - 560025
          </a>
          <a className='flex items-center gap-3'>
            <span className='text-[#4c9eaa]'>
              <FaPhone />
            </span>
            +91-8050071616
          </a>
          <a href='mailto:info@healspan.com' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3'>
            <span className='text-[#4c9eaa] text-[20px]'>
              <IoIosMail />
            </span>
            info@healspan.com
          </a>
        </div>
      </div>
      <div className=" bg-white">
      <p className='text-center mt-4'>Copyrights © KR4U Technologies Service Private Limited. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

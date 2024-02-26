import React from 'react'
import Team from './Team'
import Footer from './Footer'

const About = () => {
  return (
    <div> 
       
      <div className='text-center'>
        <h1 className='heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000]  pt-[110px]'>Who we are</h1>
      </div>
      <div className='mx-4 sm:mx-8 mt-4 sm:mt-8 mb-8 sm:mb-16 md:mb-32 md:pl-[40px] md:mt-[50px] md:pr-[40px] lg:mb-64'>
        <p className='heading text-[#000000] text-center text-base sm:text-lg md:text-2xl'>
        We are a bunch of people who believe healthcare should be accessible and convenient. We set out to improve the experience of all stakeholders in the tertiary healthcare system, solving one problem at a time.
        </p>
      </div>
      <div className=' md:mt-[20px] lg:-mt-[150px] mb-[50px]'>
      <Team></Team>
      </div>
      <Footer></Footer>  
    </div>
  )
}

export default About

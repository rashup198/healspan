import React from 'react'
import hero from"../assets/hero.png"

const Hero = () => {
  return (
    <div>
      <div className=" bg-[#0a3a83] flex justify-between p-[100px] ">
        <div className="left flex flex-col gap-y-[40px]">
            <div className="parent text-[45px] font-semibold text-white">
            <h1>
                Claims Management
            </h1>
            <h1>
                Made hassle free
            </h1>
            </div>

            <div className="child text-[17px] text-white max-w-[450px]">
                <p>
                We streamline cashless insurance claims documentation and queries for hospitals with our tech platform, ensuring hassle-free management.
                </p>
            </div>

            <div className="button flex gap-[20px] items-center">
                <button className='bg-orange-600 p-3 rounded-md text-white pl-[30px] pr-[30px]'>
                    Let's Talk
                </button>
                <p className=' hover:underline hover:underline-offset-2 cursor-pointer text-white font-semibold text-[17px]'>Learn More</p>
            </div>
        </div>

        <div className="right max-w-[600px]">
            <div className=" ">
            <img src={hero} className='rounded-l-[120%] rounded-r-[50%]'></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'

const WhyUs = () => {
  return (
    <div>
        <div className="parent">
            <div className="childParent bg-white pl-[160px] pr-[160px] pt-[100px]">
                
            <div className="child h-[380px] text-white text-[45px] font-semibold text-center rounded-lg bg-[#0b3c85]">
                <h1 className='pt-[20px]'>Why partner with us</h1>
                <div className="card select-none flex items-center justify-center mt-[50px]">
                        <div className='hover:shadow-xl shadow-xl ml-[40px] flex select-none rounded-xl p-4 md:p-6 flex-col justify-center items-center bg-white w-72 md:w-80 max-h-80'>
                            <h1 className='heading font-semibold text-xl md:text-2xl mt-4 md:mt-6 text-blue-950'>Fast Settlement</h1>
                            <ul className='text-[#164154] text-sm md:text-base p-2 md:p-4 text-justify list-disc'>
                            <li> Reduce insurance payment TAT by over 30%</li>
                            <li> Faster pre-auth to improve patient experience</li>
                            </ul>
                        </div>

                        <div className='hover:shadow-xl shadow-xl ml-[40px] flex select-none rounded-xl p-4 md:p-6 flex-col justify-center items-center bg-white w-72 md:w-80 max-h-80'>
                            <h1 className='heading font-semibold text-xl md:text-2xl mt-4 md:mt-6 text-blue-950'>Clear old receivables</h1>
                            <ul className='text-[#164154] text-sm md:text-base p-2 md:p-4 text-justify list-disc'>
                            <li>Clear long overdue claims in under 90 days</li>
                            <li>Receive claim settlement documentation</li>
                            </ul>
                        </div>

                        <div className='hover:shadow-xl shadow-xl ml-[40px] flex select-none rounded-xl p-4 md:p-6 flex-col justify-center items-center bg-white w-72 md:w-80 max-h-80'>
                            <h1 className='heading font-semibold text-xl md:text-2xl mt-4 md:mt-6 text-blue-950'>Maximum convenience</h1>
                            <ul className='text-[#164154] text-sm md:text-base p-2 md:p-4 text-justify list-disc'>
                            <li>Single point of contact for all claims</li>
                            <li>Reduce manual effort with end- to-end claims management</li>
                            </ul>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs

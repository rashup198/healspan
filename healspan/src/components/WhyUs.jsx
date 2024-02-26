import React from 'react';

const WhyUs = () => {
  return (
    <div>
      <div className="parent">
        <div className="childParent bg-white p-4 md:p-8 pt-8 md:pt-16">
          <div className="child text-white text-[24px] md:text-[45px] font-semibold text-center rounded-lg bg-gradient-to-tr from-blue-900 via-blue-700 to-sky-500 pb-5">
            <h1 className='pt-4 md:pt-4'>Why partner with us</h1>
            <div className="card select-none flex flex-col md:flex-row items-center justify-center md:justify-center md:items-center md:flex-wrap md:gap-[50px] mt-8 md:mt-9 md:pb-4">
              <div className='hover:shadow-xl shadow-xl mb-8 md:mb-0 flex select-none rounded-xl p-4 w-[80vw] md:p-6 flex-col justify-center items-center bg-white  md:w-80 max-h-80 md:max-h-full'>
                <h1 className='heading font-semibold text-xl md:text-2xl mt-2 mb-2 md:mt-6 text-blue-950'>Fast Settlement</h1>
                <ul className='text-[#164154] text-sm md:text-base p-2 md:p-4 text-justify list-disc'>
                  <li>Reduce insurance payment TAT by over 30%</li>
                  <li>Faster pre-auth to improve patient experience</li>
                </ul>
              </div>

              <div className='hover:shadow-xl shadow-xl mb-8 md:mb-0 flex select-none rounded-xl p-4 md:p-6 flex-col justify-center items-center bg-white w-[80vw] md:w-80 max-h-80 md:max-h-full'>
                <h1 className='heading font-semibold text-xl md:text-2xl  mt-2 mb-2 md:mt-6 text-blue-950'>Clear old receivables</h1>
                <ul className='text-[#164154] text-sm md:text-base p-2 md:p-4 text-justify list-disc'>
                  <li>Clear long overdue claims in under 90 days</li>
                  <li>Receive claim settlement documentation</li>
                </ul>
              </div>

              <div className='hover:shadow-xl shadow-xl flex select-none rounded-xl p-4 md:p-6 flex-col justify-center items-center bg-white  w-[80vw] md:w-80 max-h-80 md:max-h-full'>
                <h1 className='heading font-semibold text-xl md:text-2xl mt-2 mb-2 md:mt-6 text-blue-950'>Maximum convenience</h1>
                <ul className='text-[#164154] text-sm md:text-base p-2 md:p-4 text-justify list-disc'>
                  <li>Single point of contact for all claims</li>
                  <li>Reduce manual effort with end-to-end claims management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

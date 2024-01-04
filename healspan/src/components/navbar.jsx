import React from 'react'
import logo from "../assets/logo.svg"

const navbar = () => {
  return (
    <div className='flex justify-between items-center pl-[200px] pr-[200px] bg-[#1151b1]'>
      <div className="">
        <img src={logo}></img>
      </div>
      <div>
            <ul className=' flex gap-[60px] text-white p-5 text-[16px] font-semibold'>
              <li className='hover:text-[#a2ff5b] cursor-pointer'>
                Benefits
              </li>
              <li className='hover:text-[#a2ff5b] cursor-pointer'>
                What we do
              </li>
              <li  className='hover:text-[#a2ff5b] cursor-pointer'>
                About us
              </li>
            </ul>
          </div>
    </div>
  )
}

export default navbar

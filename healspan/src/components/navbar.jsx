import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex justify-between items-center pl-[200px] pr-[200px] bg-[#0a3a83]'>
      <div className="">
        <img src={logo}></img>
      </div>
      <div>
            <ul className=' flex gap-[60px] text-white p-5 text-[20px] font-semibold'>
              <li className=' hover:text-orange-500 hover:underline underline-offset-2 cursor-pointer'>
                Benefits
              </li>
              <Link to={"whatWeDo"}>
              <li className=' hover:text-orange-500 hover:underline underline-offset-2 cursor-pointer'>
                What we do
              </li>
              </Link>
              
              <li  className=' hover:text-orange-500 hover:underline underline-offset-2  cursor-pointer'>
                About us
              </li>
            </ul>
          </div>
    </div>
  )
}

export default navbar

import React from 'react'
import contact from "../assets/contact.jpg"
import { Link } from 'react-router-dom'

const Collaborate = () => {
  return (
    <div className='bg-gradient-to-tr from-blue-900 via-blue-700 to-sky-500 flex justify-between h-[300px] mt-[30px] pl-[200px] pr-[200px]'>
      <div className="right flex flex-col justify-center items-start text-white ">
        <h1 className=' font-bold text-[60px]'>Want To Collaborate?</h1>
       
       <Link to="/contact-us">
       <button className=' bg-orange-500 p-3 flex items-start mt-[30px] rounded-md w-fit'>
            Let's Talk
        </button>
       </Link> 
      </div>
      <div className="left mt-[15px]">
        <img src={contact} className='rounded-full h-[270px] w-[350px]'></img>
      </div>
    </div>
  )
}

export default Collaborate

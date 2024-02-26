import React from 'react';
import contact from '../assets/contact.jpg';
import { Link } from 'react-router-dom';

const Collaborate = () => {
  return (
    <div className='bg-gradient-to-tr from-blue-900 via-blue-700 to-sky-500 flex flex-col md:flex-row justify-between items-center h-[310px] md:h-[400px] mt-[30px] md:pl-[200px] md:pr-[200px] p-5'>
      <div className='text-white text-center md:text-left md:w-[50%]'>
        <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-8'>
          Want To Collaborate?
        </h1>
        <Link to='/contact-us'>
          <button className='bg-orange-500 p-3 md:p-4 lg:p-5 rounded-md'>
            Let's Talk
          </button>
        </Link>
      </div>
      <div className='mt-[15px] md:mt-0 md:w-[40%]'>
        <img src={contact} className='border-[7px] border-orange-500 rounded-full h-[170px] md:h-[310px] w-full object-cover' alt='Contact'></img>
      </div>
    </div>
  );
};

export default Collaborate;

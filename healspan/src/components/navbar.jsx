import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi'; // Import the icons from react-icons

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToWhatWeDo = () => {
    // Check if already on the "whatwedo" route
    if (location.pathname !== '/whatwedo') {
      scroll.scrollTo('whatwedo', {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    }
    closeMobileMenu();
  };

  return (
    <div className={`flex justify-between items-center w-full z-[500] pl-[20px] pr-[20px] md:pr-[200px] bg-[#0a3a83] fixed`}>
      <div className="">
        <Link to="/">
          <img src={logo} alt="Logo"></img>
        </Link>
      </div>
      <div className="hidden sm:flex">
        <ul className='flex gap-[60px] text-white p-5 text-[20px] font-semibold'>
          <Link to="/rashu">
            <ScrollLink to="whatwedo" smooth={true} duration={800} onClick={scrollToWhatWeDo}>
              <li className='hover:text-orange-500 hover:underline underline-offset-2 cursor-pointer'>
                What we do
              </li>
            </ScrollLink>
          </Link>
          <Link to="/about-us">
            <li className='hover:text-orange-500 hover:underline underline-offset-2 cursor-pointer'>
              About us
            </li>
          </Link>
          <Link to="/contact-us">
            <li className='hover:text-orange-500 hover:underline underline-offset-2 cursor-pointer'>
              Contact us
            </li>
          </Link>
        </ul>
      </div>
      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden fixed top-5 right-0 p-4 bg-opacity-50 z-50">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX className="h-6 w-6 text-white" /> : <FiMenu className="h-6 w-6 text-white" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-[45vh] bg-[#0a3a83] text-white">
          <ul className="flex flex-col justify-center items-center gap-[40px] text-[25px] mt-[60px]  p-8">
            <Link to="/" onClick={closeMobileMenu}>
              <ScrollLink to="whatwedo" onClick={closeMobileMenu} smooth={true} duration={800}>
                <li className='hover:text-orange-500 hover:underline underline-offset-2 cursor-pointer'>
                  What we do
                </li>
              </ScrollLink>
            </Link>
            <Link to="/about-us" onClick={closeMobileMenu}>
              <li className='hover:text-orange-500 hover:underline underline-offset-2 cursor-pointer'>
                About us
              </li>
            </Link>
            <Link to="/contact-us" onClick={closeMobileMenu}>
              <li className='hover:text-orange-500 hover:underline underline-offset-2 cursor-pointer'>
                Contact us
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

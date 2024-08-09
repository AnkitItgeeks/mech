import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

const NavBar = () => {
  return (
    <header className="bg-black z-50 bg-opacity-60 text-white sticky top-4 flex justify-between rounded-full min-w-[80%]">
      {/* bg-[#868d9d] */}
      <div className=" justify-end bg-opacity-60 pl-[24px]">
        <Link to="/">
          <img src={logo} className="bg-white bg-opacity-100 opacity-60   h-[53px] " alt="logo" />
        </Link>
      </div>
      <div className="flex w-[50%] items-center justify-around">
        <Link to="/" className="hover:bg-[#262b31] text-left rounded-md p-2 hover:text-white hover:scale-105 transition duration-150">Home</Link>
        <div className="cursor-pointer group relative z-50 hover:bg-[#262b31] text-left rounded-md p-2 hover:text-white hover:scale-105 transition duration-150">
          <div className="flex items-center gap-2">
            <p>Categories</p>
            <FaChevronDown />
          </div>
          <div className="absolute hidden top-full left-0 group-hover:flex bg-white text-black shadow-md flex-col w-max p-2 items-start">
            <p className="hover:bg-[#262b31] text-left rounded-md p-2 hover:text-white w-full">
              <Link to="/software-projects">Software Projects</Link>
            </p>
            <p className="hover:bg-[#262b31] text-left rounded-md p-2 hover:text-white w-full">
              <Link to="/electronics-projects">Electronics Projects</Link>
            </p>
          </div>
        </div>
        <Link to="/contactus" className="hover:bg-[#262b31] text-left rounded-md p-2 hover:text-white hover:scale-105 transition duration-150">Contact</Link>
        <Link to="/career" className="hover:bg-[#262b31] text-left rounded-md p-2 hover:text-white hover:scale-105 transition duration-150">Career</Link>
        <Link to="/aboutus" className="hover:bg-[#262b31] text-left rounded-md p-2 hover:text-white hover:scale-105 transition duration-150">About Us</Link>
      </div>
      <div className='pr-[24px] flex items-center'>
      <div className="bg-[#5c3119] rounded w-20  flex items-center justify-center">
        <Link to="/admin" className="text-white">Admin</Link>
      </div></div>
    </header>
  )
}

export default NavBar
import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'


const NavBar = () => {
    return (
        <header className="bg-[#868d9d] text-white flex justify-between">
            <div className='bg-white w-max'>
                <Link to="/"><img src={logo} className="App-logo h-[20px]" alt="logo" /></Link>
            </div>
            <div className='flex w-[50%] items-center justify-around'>
                <Link to="/" className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150'>Home</Link>
                <div className='cursor-pointer group relative z-50 hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150 '>
                    <div className='flex items-center gap-[10px] '><p>Categories</p> <FaChevronDown /></div>
                    <div className='absolute  hidden top-[100%] left-0 group-hover:flex bg-white text-black shadow-md flex-col w-max p-[5px] items-start '>
                        <p className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white w-full'><Link>Software Projects</Link></p>
                        <p className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white w-full'><Link>Electronics Projects</Link></p>
                    </div>
                </div>
                <Link to="/contactus" className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150'>Contact</Link>
                <Link to="/career" className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150'>Career</Link>
                <Link to="aboutus" className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150'>About Us</Link>
            </div>
            <div className='bg-black w-[220px] flex items-center justify-center'><Link to="/admin">Admin</Link></div>
        </header>
    )
}

export default NavBar
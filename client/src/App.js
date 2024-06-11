import logo from './mech-pro-sol.svg';
import './App.css';
import Project from './components/Project';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContacUs';
import CareerPage from './components/CareerPage';
import AboutUsPage from './components/AboutUs';
import { FaChevronDown } from 'react-icons/fa';

function App() {
  return (
    <BrowserRouter>
      <div className="App font-appContent flex flex-col gap-[100px]">
        <header className="bg-[#868d9d] text-white flex justify-between">
          <div className='bg-white w-max'>
            <img src={logo} className="App-logo h-[20px]" alt="logo" />
          </div>
          <div className='flex w-[70%] items-center justify-around'>
            <Link to="/" className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150'>Home</Link>
            <div className='cursor-pointer group relative hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150 '>
              <div className='flex items-center gap-[10px] '><p>Categories</p> <FaChevronDown /></div>
              <div className='absolute hidden top-[100%] left-0 group-hover:flex bg-white text-black shadow-md flex-col w-max p-[5px] items-start '>
                <p className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white w-full'><Link>Software Projects</Link></p>
                <p className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white w-full'><Link>Electronics Projects</Link></p>
              </div>
            </div>
            <Link to="/contactus" className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150'>Contact</Link>
            <Link to="/career" className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150'>Career</Link>
            <Link to="aboutus" className='hover:bg-[#262b31] text-left rounded-[4px] p-[5px] hover:text-white hover:scale-105 hover:ease-linear duration-150'>About Us</Link>
          </div>
        </header>

        <Routes>
          <Route path='/' element={<Project />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
        </Routes>
      </div >
    </BrowserRouter >
  );
}

export default App;

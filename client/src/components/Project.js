import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalecomeScreen from './LandingPageComponents/WelcomeScreen';
import SocialMedia from './LandingPageComponents/SocialMedia';
import ProductFeatures from './LandingPageComponents/ProductFeatures';
import BlogSection from './LandingPageComponents/BlogSection';
import Reviews from './LandingPageComponents/Reviews';

const Project = ({ posts }) => {
const navigate=useNavigate();
  // handle single post page and its navigation
  const handleOpenProduct = (id) => {
    // setOpenProduct(id);
    navigate(`/project/${id}`);
    };
  return (
    <>
    <WalecomeScreen posts={posts}/>
    <ProductFeatures/>
    <BlogSection/>
    <div className='flex w-full  gap-[10px] h-[83vh] overflow-x-auto'>
      {posts?.map((item, index) => (
        <div key={index} className='flex  flex-col border-[#5c3119] border w-150 h-80 gap-[10px]  rounded-[5px] cursor-pointer' onClick={() => handleOpenProduct(item._id)}>
          <div className='border w-full overflow-hidden rounded-[5px] h-60 aspect-square z-0'>
            <img className='w-full h-full z-0 rounded-[5px] group-hover:scale-105 group-hover:ease-linear duration-500 will-change-transform ' src={item?.imageUrl} alt='Nhi Hai' />
          </div>
          <div className='w-full'><p className='text-[#1e1e2f] text-[20px] font-appContent text-center font-semibold '>Category</p></div>
          {/* <div><p className='text-[#1e1e2f] font-appContent text-[14px]'>{item?.description}</p></div> */}
          {/* <p>${item?.price}</p> */}
        </div>
      ))
      }
      {/* {openProduct &&
        <div className='w-[20vw] h-[20vh] bg-white absolute'>
        </div>
      } */}
      
      
    </div>
    <Reviews/>
    </>
  );
};

export default Project;
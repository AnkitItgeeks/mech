import axios from 'axios';
import React, { useState } from 'react';

const Project = ({ posts }) => {
  return (
    <div className='flex w-full mx flex-wrap gap-[10px] h-fit'>
      {posts?.map((item, index) => (
        <div key={index} className='flex flex-col border-[#5c3119] border p-[5px] h-[550px] w-[24%] gap-[10px] group rounded-[5px] cursor-pointer'>
          <div className='border w-full overflow-hidden rounded-[5px] h-[75%] z-0'>
            <img className='w-full h-full z-0 rounded-[5px] group-hover:scale-105 group-hover:ease-linear duration-500 will-change-transform ' src={item?.imageUrl} alt='Nhi Hai' />
          </div>
          <div className='w-full'><p className='text-[#1e1e2f] font-appContent font-semibold '>{item?.title}</p></div>
          <div><p className='text-[#1e1e2f] font-appContent text-[14px]'>{item?.description}</p></div>
          <p className='text-green-700 font-semibold'>${item?.price}</p>
        </div>
      ))
      }
    </div>
  );
};

export default Project;
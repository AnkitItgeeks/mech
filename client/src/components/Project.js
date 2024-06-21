import axios from 'axios';
import React, { useState } from 'react';

const Project = ({ posts }) => {
  const [openProduct, setOpenProduct] = useState(false);
  return (
    <div className='flex w-full mx flex-wrap gap-[10px] h-[83vh] overflow-auto'>
      {posts?.map((item, index) => (
        <div key={index} className='flex flex-col border-[#5c3119] border w-[24%] h-[70%] gap-[10px] group rounded-[5px] cursor-pointer' onClick={() => setOpenProduct(true)}>
          <div className='border w-full overflow-hidden rounded-[5px] h-[60%] z-0'>
            <img className='w-full h-full z-0 rounded-[5px] group-hover:scale-105 group-hover:ease-linear duration-500 will-change-transform ' src={item?.imageUrl} alt='Nhi Hai' />
          </div>
          <div className='w-full'><p className='text-[#1e1e2f] font-appContent  font-semibold '>{item?.title}</p></div>
          <div><p className='text-[#1e1e2f] font-appContent text-[14px]'>{item?.description}</p></div>
          <p>${item?.price}</p>
        </div>
      ))
      }
      {/* {openProduct &&
        <div className='w-[20vw] h-[20vh] bg-white absolute'>
        </div>
      } */}
    </div>
  );
};

export default Project;
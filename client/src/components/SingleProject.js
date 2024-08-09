import React from 'react'
import { useParams } from 'react-router-dom'

function SingleProject({posts}) {
   const params= useParams('id')
   console.log(params.id);
   const singlePost=posts.find(item=>item._id===params.id);
    // this is a single project page
    console.log(singlePost);
  return (
    <div className='border flex'>
        <div className='w-[50%] p-[20px]'>
        <img className='rounded-xl' src={singlePost.imageUrl} alt={singlePost.title} /> 
        </div>
        <div className='w-[50%] flex flex-col gap-8 p-[20px]'>
        <h1 className='text-5xl font-appFont tracking-tight font-bold'>{singlePost.title}</h1>
        <p>{singlePost.description}</p>
        <p className='italic'>{singlePost.price}</p>
          <button className='bg-[#f5f5f5] text-[#000]
          font-appFont text-2xl font-bold rounded-xl p-4'>Add to Cart</button>
          {/* button for buy now */}
          <button className='bg-[#f5f5f5] text-[#000]
          font-appFont text-2xl font-bold rounded-xl p-4'>Buy Now</button>
        </div> 
    </div>
  )
}

export default SingleProject
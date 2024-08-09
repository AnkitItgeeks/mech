import React from 'react';
import ImageGrid from './ImageGrid';

const WelcomeScreen = ({posts}) => {
  return (
    <div className="h-screen flex pt-[160px] px-[100px]  ">
      <div className="p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000]">
          Welcome to Mechatronics Pro
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[#868d9d] mt-4">
          Innovative Mechatronics Solutions for a Smarter Tomorrow
        </p>
        <ImageGrid posts={posts}/>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
          <img
            src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Robotics Image 1"
            className="w-full hover:scale-105 group-hover:ease-linear duration-500 will-change-transform h-40 md:h-48 lg:h-56 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Robotics Image 2"
            className="w-full hover:scale-105 group-hover:ease-linear duration-500 will-change-transform h-40 md:h-48 lg:h-56 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Robotics Image 3"
            className="w-full hover:scale-105 group-hover:ease-linear duration-500 will-change-transform h-40 md:h-48 lg:h-56 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Robotics Image 4"
            className="w-full hover:scale-105 group-hover:ease-linear duration-500 will-change-transform h-40 md:h-48 lg:h-56 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Robotics Image 5"
            className="w-full hover:scale-105 group-hover:ease-linear duration-500 will-change-transform h-40 md:h-48 lg:h-56 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Robotics Image 6"
            className="w-full hover:scale-105 group-hover:ease-linear duration-500 will-change-transform h-40 md:h-48 lg:h-56 object-cover rounded-md"
          />
        </div> */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#5c3119] hover:bg-[#868d9d] text-[#000000] font-bold py-2 px-4 rounded-md"
          >
            Explore Our Products
          </button>
          <button
            className="bg-[#868d9d] hover:bg-[#5c3119] text-[#000000] font-bold py-2 px-4 rounded-md ml-4"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
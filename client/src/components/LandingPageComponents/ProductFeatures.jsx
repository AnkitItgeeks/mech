import React from 'react'
import { FaCog } from 'react-icons/fa'
import { FaChartLine, FaLock, FaRobot } from 'react-icons/fa6'
import SocialMedia from './SocialMedia'

function ProductFeatures() {
  return (
    <section className="py-10 rounded-2xl bg-white">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-4">Product Features</h2>
        <div className="flex flex-wrap items-baseline justify-center mb-12">
          <div className="w-full md:w-1/2 xl:w-1/4 p-6">
            <div className="bg-white rounded shadow-md p-4">
              {/* <i className="fas fa-robot text-4xl text-orange-500 mb-4" /> */}
              <div className='text-4xl text-orange-500 mb-4' ><FaRobot /></div>
              <h3 className="text-2xl font-bold mb-2">Autonomous Systems</h3>
              <p className="text-gray-600">Our mechatronics projects are designed to operate independently, making them perfect for applications that require minimal human intervention.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6">
            <div className="bg-white rounded shadow-md p-4">
              {/* <i className="fas fa-cog text-4xl text-blue-500 mb-4" /> */}
              <div className='text-4xl text-blue-500 mb-4' ><FaCog /></div>
              <h3 className="text-2xl font-bold mb-2">Customizable Hardware</h3>
              <p className="text-gray-600">Our mechatronics projects are  built with customizable hardware, allowing you to tailor the solution to your specific needs and present it as best as possible.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6">
            <div className="bg-white rounded shadow-md p-4">
              {/* <i className="fas fa-chart-line text-4xl text-green-500 mb-4" /> */}
              <div className='text-4xl text-green-500 mb-4' ><FaChartLine /></div>
              <h3 className="text-2xl font-bold mb-2">Real-time Data Analytics</h3>
              <p className="text-gray-600">Our mechatronics projects provide real-time data analytics, giving you insights into performance and allowing you to make data-driven decisions.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6">
            <div className="bg-white rounded shadow-md p-4">
              {/* <i className="fas fa-lock text-4xl text-purple-500 mb-4" /> */}
              <div className='text-4xl text-purple-500 mb-4' ><FaLock /></div>
              <h3 className="text-2xl font-bold mb-2">Secure Connectivity</h3>
              <p className="text-gray-600">Our mechatronics projects feature secure connectivity options, ensuring that your data is protected from unauthorized access and prevent from vulnarabilities.</p>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia/>
    </section>
  )
}

export default ProductFeatures
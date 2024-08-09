import React from 'react'

function BlogSection() {
  return (
    <section className="py-4 rounded-2xl bg-gray-100">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-4">Latest Blogs</h2>
        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-4">
              <img src="https://media.istockphoto.com/id/1066937548/photo/robot-car.jpg?s=1024x1024&w=is&k=20&c=8rAho9UZXpfmUJLE26pi6RmjD8tIPkWIVc-jvMnUaF4=" alt="Blog Image 1" className="w-full h-48 object-cover rounded-t" />
              <h3 className="text-2xl font-bold mb-2">Robotics in Manufacturing: Trends and Opportunities</h3>
              <p className="text-gray-600">Learn about the latest trends and opportunities in robotics in manufacturing, and how mechatronics projects are revolutionizing the industry.</p>
              <a href="#" className="text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out">Read More</a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-4">
              <img src="https://images.unsplash.com/photo-1527612820672-5b56351f7346?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Image 2" className="w-full h-48 object-cover rounded-t" />
              <h3 className="text-2xl font-bold mb-2">The Future of Autonomous Systems: What to Expect</h3>
              <p className="text-gray-600">Discover the latest advancements in autonomous systems and what the future holds for mechatronics projects in this field.</p>
              <a href="#" className="text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out">Read More</a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-4">
              <img src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Image 3" className="w-full h-48 object-cover rounded-t" />
              <h3 className="text-2xl font-bold mb-2">Mechatronics in Healthcare: Improving Patient Outcomes</h3>
              <p className="text-gray-600">Learn about the impact of mechatronics projects on healthcare and how they're improving patient outcomes.</p>
              <a href="#" className="text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out">Read More</a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">View All Blogs</a>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
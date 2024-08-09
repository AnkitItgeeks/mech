import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      review: 'This mechatronics kit is amazing! I was able to build a robot in just a few hours.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      review: 'I was impressed by the quality of the components and the instructions were easy to follow.',
    },
    {
      name: 'Bob Johnson',
      rating: 5,
      review: 'Ive never built anything like this before, but the kit made it so easy. Im hooked on mechatronics now!',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <div className="flex flex-wrap -mx-4">
          {reviews.map((review, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white shadow-md p-4 rounded">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold">{review.name}</span>
                  <span className="text-gray-600 ml-2">{review.rating}/5</span>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
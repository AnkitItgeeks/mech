import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        At XYZ Projects, we specialize in providing high-quality software and electronics projects to
        enthusiasts, hobbyists, and professionals alike. Our mission is to empower individuals to
        bring their ideas to life by offering a wide range of project kits and resources.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 20XX, XYZ Projects started as a small team of engineers passionate about
            electronics and software development. Over the years, we have grown into a trusted
            provider of project kits and resources, serving customers worldwide.
          </p>
          <p className="text-gray-700 mb-4">
            Our dedication to quality, innovation, and customer satisfaction sets us apart in
            the industry. We strive to continuously improve and expand our product offerings
            to meet the evolving needs of our customers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At XYZ Projects, our mission is to inspire creativity and innovation by providing
            accessible and affordable project kits and resources. We believe that everyone
            should have the opportunity to explore their interests and turn their ideas
            into reality, regardless of their background or experience level.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're a student looking to learn new skills, a hobbyist working on
            a personal project, or a professional seeking tools for prototyping and
            development, we're here to support you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

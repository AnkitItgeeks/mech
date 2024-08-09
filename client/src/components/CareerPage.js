import React from 'react';

const CareerPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Join Our Team</h1>
      <p className="text-lg text-gray-700 mb-8">
        We're always looking for talented individuals to join our team. If you're passionate about what you do
        and want to work in a collaborative environment, we'd love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Software Engineer</h2>
          <p className="text-gray-700 mb-4">
            We are seeking a skilled software engineer to join our development team. The ideal candidate should
            have experience with modern web technologies and a strong passion for building robust, scalable software.
          </p>
          <p className="text-gray-700 mb-4">Requirements:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Bachelor's degree in Computer Science or related field.</li>
            <li>Experience with JavaScript, React, and Node.js.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Apply Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">UX/UI Designer</h2>
          <p className="text-gray-700 mb-4">
            We are looking for a talented UX/UI designer to create engaging and intuitive user interfaces for
            our web applications. The ideal candidate should have a strong portfolio demonstrating experience
            designing user-friendly interfaces.
          </p>
          <p className="text-gray-700 mb-4">Requirements:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Bachelor's degree in Design or related field.</li>
            <li>Proficiency in design tools such as Sketch, Figma, or Adobe XD.</li>
            <li>Strong understanding of user-centered design principles.</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-[10px] w-[80%] mx-auto">
      <h2 className="text-[30px] font-semibold font-appFont text-center">Contact Us</h2>
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Thank you for contacting us! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col gap-[10px] w-[100%] mx-auto'>
          <div className="flex items-center gap-[10px] w-full">
            <label className="text-sm font-medium w-[10%] text-right" htmlFor="name">
              Name:
            </label>
            <input
              className="shadow border rounded p-[5px] w-[80%] leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <label className="text-sm font-medium w-[10%] text-right" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow border rounded p-[5px] w-[80%] leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <label className="text-sm font-medium w-[10%] text-right" htmlFor="message">
              Message:
            </label>
            <textarea
              className="shadow border rounded p-[5px] w-[80%] leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className='flex items-center justify-center gap-[10px] w-full'>
            <button className="bg-[#44484f] hover:bg-[#262b31] hover:scale-105 hover:ease-linear duration-300 will-change-transform text-white font-bold p-[5px] rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUs;

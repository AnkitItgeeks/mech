import React from 'react'
import { FaFacebookF, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

function SocialMedia() {
  return (
    <div className="flex justify-center mb-4">
        
      <ul className="flex flex-wrap justify-center mb-0">
        <li className="mr-6 mb-4">
          <a href="#" className="text-2xl text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
            {/* <i className="fab fa-facebook-f" /> */}
            <FaFacebookF />
          </a>
        </li>
        <li className="mr-6 mb-4">
          <a href="#" className="text-2xl text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
            {/* <i className="fab fa-twitter" /> */}
            <FaTwitter />
          </a>
        </li>
        <li className="mr-6 mb-4">
          <a href="#" className="text-2xl text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
            {/* <i className="fab fa-instagram" /> */}
            <FaInstagramSquare />
          </a>
        </li>
        <li className="mr-6 mb-4">
          <a href="#" className="text-2xl text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
            {/* <i className="fab fa-linkedin-in" /> */}
            <FaLinkedin />
          </a>
        </li>
        <li className="mr-6 mb-4">
          <a href="#" className="text-2xl text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
            {/* <i className="fab fa-youtube" /> */}
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
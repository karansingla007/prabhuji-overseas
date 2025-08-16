import React from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <div className="border-b border-gray-300 text-sm text-gray-700">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Left: Phone */}
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-yellow-600" />
          <a href="tel:+919518420838" className="font-semibold">
            +91 9518420838
          </a>
        </div>

        {/* Right: Career + Social */}
        <div className="flex items-center space-x-4">
          <a href="/career" className="flex items-center space-x-1">
            <MdWork className="text-red-600" />
            <span className="font-semibold">Career</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center border rounded-full hover:bg-gray-100"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center border rounded-full hover:bg-gray-100"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

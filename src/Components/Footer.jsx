import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-12">
      <div className="flex justify-between items-center px-8 py-6 border-b border-gray-600 flex-wrap">
        {/* Brand Name */}
        <h2 className="text-2xl font-bold">Claire Collection</h2>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <FaFacebook className="text-2xl cursor-pointer hover:text-gray-400 transition" />
          <BsInstagram className="text-2xl cursor-pointer hover:text-gray-400 transition" />
          <BsTwitterX className="text-2xl cursor-pointer hover:text-gray-400 transition" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4">
        <p className="text-gray-400">© Claire Collection 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

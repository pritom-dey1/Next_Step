import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/NextstepLogo.png';
const Footer = () => {
  return (
    <footer className="bg-white text-black pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
  <div className='flex items-center uppercase font-bold text-[30px] gap-1'>
    <img src={Logo} className="object-cover w-8" alt="logo" />
    <h2><span className="text-[#0a65cc]">NEXTSTEP</span></h2>
  </div>
          <p className="mt-1">
            Empowering your career with the right jobs, resources, and insights to help you succeed faster.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#0a65cc]">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><NavLink to="/" className="hover:text-blue-500 transition">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-500 transition">About</NavLink></li>
            <li><NavLink to="/jobs" className="hover:text-blue-500 transition">Jobs</NavLink></li>
            <li><NavLink to="/resources" className="hover:text-blue-500 transition">Resources</NavLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#0a65cc]">Resources</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Guides</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Tutorials</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-[#0a65cc]">Contact</h3>
          <p >support@nextstep.com</p>
          <p className="mt-1">+880 123 456 789</p>
          <p className="mt-1">Dhaka, Bangladesh</p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright */}
      <div className="max-w-[1300px] mx-auto px-4 mt-4 text-center text-[#0a65cc] text-sm font-bold">
        &copy; {new Date().getFullYear()} NEXTSTEP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

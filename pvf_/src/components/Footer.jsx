import React from 'react';

import instagram from '../assets_c/instagram.svg';
import facebook from '../assets_c/facebook.svg';
import twitter from '../assets_c/twitter.svg';
import linkedin from '../assets_c/linkedin.svg';


const Footer = () => {
  return (
    <section className="bg-gray-gradient text-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Description */}
        <div className="flex-1 mb-8 md:mb-0">
        <h1 className='w-full text-3xl font-bold  mb-4' >Creatorships</h1>
       
          <p className="font-poppins text-gray-400 text-lg leading-relaxed">
            Empowering creators and businesses through equity-based partnerships.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col md:flex-row justify-between mb-8 md:mb-0">
          <div className="flex flex-col mb-6 md:mb-0">
            <h4 className="font-poppins text-xl font-semibold mb-4">Explore Creatorships</h4>
            <ul className="space-y-2">
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">How It Works</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Our Partners</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Become a Partner</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Success Stories</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <h4 className="font-poppins text-xl font-semibold mb-4">Community & Support</h4>
            <ul className="space-y-2">
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Help Center</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Feedback</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Blog</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">News</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Updates</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-poppins text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Get in Touch</li>
              <li className="font-poppins text-gray-400 text-base hover:text-gray-300 cursor-pointer">Partnership Inquiries</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-6 mt-8">
        <p className="font-poppins text-gray-400 text-center text-sm">
          &copy; 2024 Creatorships. All Rights Reserved.
        </p>
        <div className="flex space-x-5 mt-4 md:mt-0">
     

<img src={instagram} alt="star" className="w-[50%] h-[50%] object-contain" />
<img src={facebook} alt="star" className="w-[50%] h-[50%] object-contain" />
<img src={linkedin} alt="star" className="w-[50%] h-[50%] object-contain" />
<img src={twitter} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from 'react';
// import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";
import Typed from 'react-typed'; // Make sure you use this component if needed
import star from '../assets_c/Star.svg';
import Shield from '../assets_c/Shield.svg';
import Send from '../assets_c/Send.svg';

const Tsec = () => {
  return (
    <section id="features" className="flex flex-col md:flex-row sm:py-16 py-12 px-6 md:px-12 bg-gray-900">
      <div className="flex-1 flex justify-center items-start flex-col px-4 py-12">
        <h2 className="font-poppins font-semibold text-[32px] md:text-[48px] text-white leading-[40px] md:leading-[66.8px] w-full">
          Connecting Creators and Businesses, <br className="sm:block hidden" /> for Mutual Growth.
        </h2>

        <p className="font-poppins font-normal text-gray-300 text-[16px] md:text-[18px] leading-[24px] md:leading-[30.8px] max-w-[470px] mt-5">
          Unlock the potential of your business by partnering with top creators. Our platform connects innovative businesses with influential creators, turning attention into long-term success. Build strong partnerships and grow together.
        </p>
    
        <button type="button" className="py-4 px-6 font-poppins font-medium text-[16px] md:text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none mt-10">
          Get Started
        </button>
      </div>
      
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
        <div className="flex flex-row p-6 rounded-[20px] mb-6 bg-gray-gradient feature-card">
          <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
            <img src={star} alt="star" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Influence & Reach</h4>
            <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px]">
              Leverage the influence and reach of top creators to boost your brand visibility and customer acquisition.
            </p>
          </div>
        </div>

        <div className="flex flex-row p-6 rounded-[20px] mb-6 bg-gray-gradient feature-card">
          <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
            <img src={Shield} alt="shield" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Equity & Security</h4>
            <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px]">
              Creators can secure equity in the businesses they promote, ensuring long-term financial gains and security.
            </p>
          </div>
        </div>

        <div className="flex flex-row p-6 rounded-[20px] mb-6 bg-gray-gradient feature-card">
          <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
            <img src={Send} alt="send" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Mutual Growth</h4>
            <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px]">
              Foster mutual growth by forming strong partnerships that benefit both creators and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tsec;

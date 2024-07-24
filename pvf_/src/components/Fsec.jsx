import React from 'react';
// import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";
import Typed from 'react-typed'; // Make sure you use this component if needed
import star from '../assets_c/Star.svg';
import Shield from '../assets_c/Shield.svg';
import Send from '../assets_c/Send.svg';

const Fsec = () => {
  return (
    <section id="features" className="flex flex-col md:flex-row sm:py-16 py-12 px-6 md:px-12 bg-gray-900">
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 py-10 relative flex-col">
        <div className="flex flex-row p-6 rounded-[20px] mb-6 bg-gray-gradient feature-card">
          <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
            <img src={star} alt="star" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Enhanced Visibility</h4>
            <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px]">
              Gain unparalleled exposure by collaborating with top-tier creators who resonate with your target audience.
            </p>
          </div>
        </div>

        <div className="flex flex-row p-6 rounded-[20px] mb-6 bg-gray-gradient feature-card">
          <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
            <img src={Shield} alt="shield" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Trusted Partnerships</h4>
            <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px]">
              Build reliable partnerships with creators who share your vision and values, fostering trust and authenticity.
            </p>
          </div>
        </div>

        <div className="flex flex-row p-6 rounded-[20px] mb-6 bg-gray-gradient feature-card">
          <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
            <img src={Send} alt="send" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Innovative Campaigns</h4>
            <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px]">
              Create innovative and engaging marketing campaigns that captivate audiences and drive meaningful engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-start flex-col px-4">
        <h2 className="font-poppins font-semibold text-[32px] md:text-[48px] text-white leading-[40px] md:leading-[66.8px] w-full">
          Elevate Your Business, <br className="sm:block hidden" /> with Strategic Partnerships.
        </h2>

        <p className="font-poppins font-normal text-gray-300 text-[16px] md:text-[18px] leading-[24px] md:leading-[30.8px] max-w-[470px] mt-5">
          Our platform empowers businesses to connect with influential creators, driving brand growth and customer loyalty through authentic and strategic collaborations.
        </p>
    
        <button type="button" className="py-4 px-6 font-poppins font-medium text-[16px] md:text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none mt-10">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Fsec;

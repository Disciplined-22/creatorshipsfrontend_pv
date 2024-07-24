import React from 'react';
import Single from '../assets/single.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-24 px-4 bg-gray-100 '>
      <div className='max-w-[1240px] mx-auto text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-900'>Our Platform Benefits</h1>
        <p className='font-poppins font-medium text-gray-700 mt-4'>Unlock exclusive advantages tailored for both creators and businesses</p>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-8 my-4 bg-white rounded-lg hover:scale-105 transform transition duration-300'>
          <img className='w-16 card_top_width mx-auto mt-[-3rem] bg-white p-2' src={Single} alt='Single' />
          <h2 className='text-xl md:text-2xl font-bold text-center py-6 md:py-8'>Benefits for Creators</h2>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-4 md:mx-8 mt-4 md:mt-8'>Access to Exclusive Brand Deals</p>
            <p className='py-2 border-b mx-4 md:mx-8'>Equity Opportunities in Partnered Businesses</p>
            <p className='py-2 border-b mx-4 md:mx-8'>Enhanced Monetization Strategies</p>
          </div>
          <button className='bg-[#00df9a] text-white w-full md:w-[300px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition-transform transform hover:scale-105'>Join Now</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-8 my-4 bg-white rounded-lg hover:scale-105 transform transition duration-300'>
          <img className='w-16 card_top_width mx-auto mt-[-3rem] bg-white p-2' src={Triple} alt='Triple' />
          <h2 className='text-xl md:text-2xl font-bold text-center py-6 md:py-8'>Benefits for Businesses</h2>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-4 md:mx-8 mt-4 md:mt-8'>Access to Influential Creators</p>
            <p className='py-2 border-b mx-4 md:mx-8'>Increased Brand Visibility and Customer Acquisition</p>
            <p className='py-2 border-b mx-4 md:mx-8'>Strategic Equity-Based Partnerships</p>
          </div>
          <button className='bg-[#00df9a] text-white w-full md:w-[300px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition-transform transform hover:scale-105'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

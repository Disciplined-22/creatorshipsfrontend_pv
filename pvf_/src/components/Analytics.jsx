import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-gray-100 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <img className='w-[500px] mx-auto my-4 rounded-lg shadow-lg' src={Laptop} alt='Connecting Creators and Businesses' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-poppins font-bold text-lg'>CONNECTING CREATORS AND BUSINESSES</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-poppins font-bold py-2 text-gray-900'>Form Mutual Growth Partnerships</h1>
          <p className='font-poppins text-gray-700 mt-4'>
            Unlock the potential of your business by partnering with top creators. Our platform connects innovative businesses with influential creators, turning attention into long-term success. Build strong partnerships and grow together.
          </p>
          <p className='font-poppins font-bold text-gray-900 mt-6'>Mutual Growth:</p>
          <ul className='list-disc ml-5 font-poppins text-gray-700 mt-2'>
            <li className='mb-2'><strong className='text-gray-900'>Businesses:</strong> Gain access to the vast audience and influence that creators have, turning attention into increased brand visibility and customer acquisition.</li>
            <li className='mb-2'><strong className='text-gray-900'>Creators:</strong> Obtain equity in businesses they promote, turning their influence and promotional efforts into long-term financial gains.</li>
          </ul>
          <button className='bg-[#00df9a] text-white w-[200px] rounded-md font-poppins font-medium my-6 mx-auto md:mx-0 py-3 transition-transform transform hover:scale-105'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

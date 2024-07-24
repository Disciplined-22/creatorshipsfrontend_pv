import React from 'react';
import Typed from 'react-typed';

const subheadingStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#E6E6FA', // Lavender
};


const Hero = () => {
  return (
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2'>
        CONNECTING CREATORS AND BUSINESSES
      </p>
      <h1 className='font-poppins md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
      Connect for 
            <span style={{ background: 'linear-gradient(100deg, #00DBDE 0%, #FC00FF 70%)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Success</span>{" "}
      </h1>
      <div className='flex justify-center items-center'>
        <p className='font-poppins md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          Empowering
        </p>
        <Typed
          className='font-poppins md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={['Creators', 'Businesses']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className='md:text-2xl text-xl font-bold' style={subheadingStyle}>
        Turn attention into long-term returns by partnering with innovative businesses or influential creators.
      </p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
        Get Started
      </button>
    </div>
  </div>
  
  
  );
};

export default Hero;

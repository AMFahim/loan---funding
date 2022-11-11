import React from 'react';
import UiButton from '../../../../components/common/ui/UiButton';
import heroImg from './../../../../Assets/image/finance-app.svg'

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 flex-row-reversed sm:grid-cols-1 gap-2 mx-8">
      <div className='pt-44'>
        <p className='text-primary font-poppins'>We are here for</p>
        <h1 className='text-7xl font-bold font-poppins pt-4'>Start or grow your own business</h1>
        <p className='font-poppins font-medium text-gray-500 pt-6 pb-6 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, rerum? Non minus odit reprehenderit qui.</p>
        <UiButton label="View More"></UiButton>
      </div>
      <div>
        <img src={heroImg} className="w-[100vw] h-[100vh]" alt="Finance app" />
      </div>
    </div>
  );
};

export default Hero;
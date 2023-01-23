import React from 'react';
import UiButton from '../../../../components/common/ui/UiButton';
import AboutCompanyImg from './../../../../Assets/image/AboutCompany.svg'

const AboutFunding = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 flex-row-reversed sm:grid-cols-1 gap-2 mx-8">
                <div>
                    <img src={AboutCompanyImg} className="w-[100vw] h-[100vh] py-auto" alt="Finance app" />
                </div>
                <div className='sm:pt-32'>
                    <p className='text-primary font-poppins'>About Funding</p>
                    <h1 className='text-3xl font-bold font-poppins pt-4'>A fast approach to business financing. Business funding made fast and simple.</h1>
                    <p className='font-poppins font-medium text-gray-500 pt-6 pb-6 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, rerum? Non minus odit reprehenderit qui.</p>
                    <p className='font-poppins font-semibold py-6 text-xl'>We Reimagined Fundraising.</p>
                    <ul>
                        <li className='p-1 font-poppins'><span className='text-primary text-lg'>(1)</span> <span className='text-lg font-semibold'>Fast </span>  Get a term sheet in 20 min</li>
                        <li className='p-1 font-poppins'><span className='text-primary text-lg'>(2)</span> <span className='text-lg font-semibold'>Flexible </span> Our data driven investments range from $1K to $1M</li>
                        <li className='p-1 pb-8 font-poppins'><span className='text-primary text-lg'>(3)</span> <span className='text-lg font-semibold'>Fair </span> No equity or personal guarantee</li>
                    </ul>
                    <UiButton label="Apply Now"></UiButton>
                </div>
            </div>
        </div>
    );
};

export default AboutFunding;
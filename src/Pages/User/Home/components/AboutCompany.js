import React from 'react';
import UiButton from '../../../../components/common/ui/UiButton';
import AboutCompanyImg from './../../../../Assets/image/AboutCompany.svg'

const AboutCompany = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 flex-row-reversed sm:grid-cols-1 gap-2 mx-8">
                <div>
                    <img src={AboutCompanyImg} className="w-[100vw] h-[100vh] py-auto" alt="Finance app" />
                </div>
                <div className='sm:pt-32'>
                    <p className='text-primary font-poppins'>About Comapny</p>
                    <h1 className='text-3xl font-bold font-poppins pt-4'>We have been working very efficiently with loan and funding for 25 years.</h1>
                    <p className='font-poppins font-medium text-gray-500 pt-6 pb-6 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, rerum? Non minus odit reprehenderit qui.</p>
                    <p className='font-poppins font-medium text-gray-500 py-6 text-xl'>In business, we focus on 3 things.</p>
                    <ul>
                        <li className='p-1'><span className='text-primary text-xl font-bold'>✓</span> Useful Info</li>
                        <li className='p-1'><span className='text-primary text-xl font-bold'>✓</span> Reliability</li>
                        <li className='p-1 pb-8'><span className='text-primary text-xl font-bold'>✓</span> Innovation</li>
                    </ul>
                    <UiButton label="View More"></UiButton>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;
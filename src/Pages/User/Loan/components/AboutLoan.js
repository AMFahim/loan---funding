import React from 'react';
import UiButton from '../../../../components/common/ui/UiButton';
import AboutCompanyImg from './../../../../Assets/image/AboutCompany.svg';

const AboutLoan = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 flex-row-reversed sm:grid-cols-1 gap-2 mx-8">
                <div>
                    <img src={AboutCompanyImg} className="w-[100vw] h-[100vh] py-auto" alt="Finance app" />
                </div>
                <div className='sm:pt-32'>
                    {/* <p className='text-primary font-poppins'>About Loan</p> */}
                    <h1 className='text-3xl font-bold font-poppins pt-4'>What is a finix loan?</h1>
                    <p className='font-poppins font-medium text-gray-500 pt-6 pb-6 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida</p>
                    <p className='font-poppins font-semibold py-6 text-xl'>Resources to help you with your Loan</p>
                    <ul>
                        <li className='p-1'><span className='text-primary text-xl font-bold'>✓</span> Business Plan</li>
                        <li className='p-1'><span className='text-primary text-xl font-bold'>✓</span> Budget Planner</li>
                        <li className='p-1 pb-8'><span className='text-primary text-xl font-bold'>✓</span> Cashflow Forecast</li>
                    </ul>
                    <UiButton label="Apply Now"></UiButton>
                </div>
            </div>
        </div>
    );
};

export default AboutLoan;
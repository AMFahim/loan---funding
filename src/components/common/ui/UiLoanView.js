import React from 'react';
// import heroImg from './../../../../Assets/image/finance-app.svg'
import LoanCategory from './../../../Assets/image/loanCategory.svg'
import {GoPrimitiveDot} from 'react-icons/go'

const UiLoanView = () => {
    return (
        <div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 flex-row-reversed sm:grid-cols-1 gap-2 mx-8">
                <div className='pt-12'>
                    <div className='font-poppins'>
                        <h1 className="text-2xl font-semibold">About Agricultural loan</h1>
                        <p className='text-lg text-gray-500 pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <h2 className='text-2xl font-semibold pt-6'>Get financing for whatever you need now</h2>
                        <ul>
                            <li className='flex text-gray-500 py-2'><GoPrimitiveDot className='text-primary mr-2'/> New Home</li>
                            <li className='flex text-gray-500'><GoPrimitiveDot className='text-primary mr-2'/> Home improvement loan</li>
                            <li className='flex text-gray-500 py-2'><GoPrimitiveDot className='text-primary mr-2'/> Home renovation</li>
                            <li className='flex text-gray-500'><GoPrimitiveDot className='text-primary mr-2'/> Land purchase</li>
                        
                        </ul>

                        <h3 className='text-2xl font-semibold pt-6'>Agricultural loan - Eligibility</h3>
                        <p className='text-lg text-gray-500 pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                </div>
                <div>
                    <img src={LoanCategory} className="w-[100vw] h-[100vh]" alt="Finance app" />
                </div>
            </div>
        </div>
    );
};

export default UiLoanView;
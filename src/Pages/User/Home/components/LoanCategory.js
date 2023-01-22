import React from 'react';
import { LoanCategoryData } from '../../../../Assets/data/local.database';

const LoanCategory = () => {
    return (
        <div>
            <div className='text-center font-poppins pt-12'>
                <p className='text-primary'>Knowledge Of The Market</p>
                <h2 className="text-4xl font-semibold">Only the best professional services</h2>
                <p className='px-auto text-gray-500 font-medium sm:px-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="flex p-12 justify-between font-poppins">
                {
                    LoanCategoryData.map(item => 
                        <div key={item.id} className="cursor-pointer">
                            <h3 className='text-6xl mx-8'>{item.icon}</h3>
                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default LoanCategory;    
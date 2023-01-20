import React from 'react';
import { TransparentProcess } from '../../../../Assets/data/local.database';

const Transparent = () => {
    return (
        <div>
            <div className='text-center pt-16 font-poppins'>
                <p className='text-base font-medium text-primary py-4'>Transparent Process</p>
                <h1 className='text-4xl font-bold'>Why People Choose Us</h1>
                <p className='font-poppins font-medium text-gray-500 pt-6 pb-6 text-lg px-4 sm:px-36'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='grid grid-cols-1 px-6 md:grid-cols-4 sm:grid-cols-4'>
                {
                    TransparentProcess.map(data =>
                        <div key={data.id} className='bg-transparent-card p-8 bg-no-repeat bg-contain font-poppins'>
                            <div className='p-8 text-center '>
                                <img className="h-12 px-14" src={data.img} alt={data.name}></img>
                                <h1 className='text-xl font-bold ml-[-40px]'>{data.name}</h1>
                                <p className='pt-4 text-gray-500 text-sm p-2 '>{data.detail}</p>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default Transparent;
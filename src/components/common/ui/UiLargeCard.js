import React from 'react';
import { Link } from 'react-router-dom';
import TimerLogo from "./../../../Assets/image/upcoming.svg";
import UiLargeArrowButton from './UiLargeArrowButton';
const UiLargeCard = () => {
    return (
        <div className='p-8 border-2 my-8 shadow-lg'>
            <h2 className='text-3xl font-poppins font-semibold text-gray-500 text-center'>Your Upcoming Loans Last Date For Paid.</h2>
            <img className='h-64 mx-auto' src={TimerLogo} alt="Upcoming Loans Date" />
            <h3 className='text-lg font-poppins font-semibold text-gray-500 text-center'>05/04/2023</h3>
            <Link to={"/"}>
                <UiLargeArrowButton label="Pay Now"/>
            </Link>
        </div>
    );
};

export default UiLargeCard;
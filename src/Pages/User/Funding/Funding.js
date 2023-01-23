import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import Transparent from '../Home/components/Transparent';
import AboutFunding from './components/AboutFunding';
import HowItWork from './components/HowItWork';

const Funding = () => {
    return (
        <MainLayout>
            <AboutFunding/>
            <Transparent />
            {/* <HowItWork /> */}
        </MainLayout>
    );
};

export default Funding;
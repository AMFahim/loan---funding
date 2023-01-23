import React from 'react';
import UiLoanView from '../../../components/common/ui/UiLoanView';
import MainLayout from '../../../Layout/MainLayout';
import LoanCategory from '../Home/components/LoanCategory';

const Services = () => {
    return (
        <MainLayout>
            <LoanCategory/>
            <UiLoanView/>
        </MainLayout>
    );
};

export default Services;
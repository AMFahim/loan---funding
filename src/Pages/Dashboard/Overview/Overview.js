import React from 'react';
import DashboardLayout from '../../../Layout/DashboardLayout';
import Loancard from './cards/LoanCard';
import UpcomingLoan from './cards/UpcomingLoan';

const Overview = (props) => {
    return (
        <DashboardLayout>
          <Loancard />
          <UpcomingLoan />
        </DashboardLayout>
    );
};

export default Overview;
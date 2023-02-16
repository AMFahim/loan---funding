import React from 'react';
import DashboardSidebar from '../components/common/shared/DashboardSidebar';
import DashboardTopbar from '../components/common/shared/DashboardTopbar';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <DashboardTopbar />
            <DashboardSidebar />
            <h2>This is Dashboard Layout</h2>
            {children}
        </div>
    );
};

export default DashboardLayout;
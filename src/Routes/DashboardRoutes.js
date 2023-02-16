import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from '../Pages/Dashboard/Overview/Overview';

const DashboardRoutes = () => {
    return (
       <Routes>
        <Route path={"/overview"} element={<Overview />}/>
       </Routes>
    );
};

export default DashboardRoutes;
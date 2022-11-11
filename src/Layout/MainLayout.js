import React from 'react';
// import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/shared/Navbar';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {/* <Outlet /> */}
      {children}
      <h1>This is footer</h1>
    </div>
  );
};

export default MainLayout;
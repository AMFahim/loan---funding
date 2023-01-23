import React from 'react';
import Footer from '../components/common/shared/Footer';
// import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/shared/Navbar';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {/* <Outlet /> */}
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;
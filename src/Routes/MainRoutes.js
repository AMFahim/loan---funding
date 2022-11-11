import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/User/Home/Home';
// import Header from '../Pages/User/Home/Header';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
          {/* <Route index element={<Header />} /> */}
          {/* <Route element={<Demo />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
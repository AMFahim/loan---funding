import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Pages/User/About/About';
import Home from '../Pages/User/Home/Home';
import Services from '../Pages/User/Services/Services';
// import Header from '../Pages/User/Home/Header';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
    </div>
  );
};

export default MainRoutes;
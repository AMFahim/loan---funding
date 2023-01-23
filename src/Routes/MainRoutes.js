import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Pages/User/About/About';
import Funding from '../Pages/User/Funding/Funding';
import Home from '../Pages/User/Home/Home';
import Loan from '../Pages/User/Loan/Loan';
import Services from '../Pages/User/Services/Services';
// import Header from '../Pages/User/Home/Header';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/Funding" element={<Funding />}/>
        <Route path="/Loans" element={<Loan />}/>
      </Routes>
    </div>
  );
};

export default MainRoutes;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Auth/login/Login';
import Register from '../Pages/Auth/Register';

const AuthRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    );
};

export default AuthRoutes;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Auth/login/Login';

const AuthRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
};

export default AuthRoutes;
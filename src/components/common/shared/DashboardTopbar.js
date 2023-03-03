import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "./../../../Assets/image/logo.png";
import {MdSpaceDashboard} from "react-icons/md";
import {HiFlag} from "react-icons/hi";
import {FaUserAlt} from "react-icons/fa";
import {GiTakeMyMoney, GiStabbedNote} from "react-icons/gi";
import {IoMdNotifications} from "react-icons/io";


const DashboardTopbar = () => {
    return (
        <div className='w-full'>
            <div className="navbar bg-primary text-white grid grid-cols-10 border-b-[3px]  py-4 h-20">
                <div className="col-span-2 px-10">
                    <Link to="/overview">
                        <img src={logo} alt="" className="w-9/12 h-12" />
                    </Link>
                </div>
                <div className="col-span-8 px-10 flex justify-end items-center">
                    <div>
                        <ul className="flex items-center space-x-4">
                            <li className="text-xl px-4 py-1 font-medium cursor-pointer text-primary-text">
                        
                            </li>

                            <li className="text-2xl px-4 py-1 font-semibold relative notification">
                                <span className="cursor-pointer text-primary-text">
                                    <IoMdNotifications />
                                </span>
                            </li>
                            <li className="text-2xl px-4 py-1 font-semibold relative account">
                                <span className="cursor-pointer text-primary-text">
                                    <FaUserAlt/>
                                </span>
                                <ul className="account-menu absolute z-10 hidden bg-white shadow-xl right-0 w-64 py-4 rounded border-2">
                                    <Link to="/profile">
                                        <li>profile</li>
                                    </Link>
                                    <Link to="/company-details">
                                        <li>company_details_profile</li>
                                    </Link>

                                    <li onClick={``}>sign_out</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopbar;
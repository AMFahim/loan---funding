import React from 'react';
import { NavLink } from 'react-router-dom';
import UiButton from '../ui/UiButton';
import Logo from "./../../../Assets/image/logo.png"

const navigation = [
  {name: 'Home', to: "/", current: false},
  {name: 'About', to: "/about", current: false},
  {name: 'Services', to: "/services", current: false},
  {name: 'Funding', to: "/Funding", current: false},
  {name: 'Loans', to: "/Loans", current: false},
  {name: 'Contact', to: "/contact", current: false},
]

const Navbar = () => {

  let activeStyle = {
    color: "#E73C3E"
  };
  return (
    <div className='sticky top-0'>
      <nav className="bg-white border-[1px] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex items-center">
            <img src={Logo} className="mr-px h-8 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Speedy</span>
          </NavLink>
          <div className="flex md:order-2">
            <UiButton label="Apply Now"></UiButton>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              {
                navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.to} 
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                    className="block py-2 pr-4 pl-3 text-base font-bold text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-[#E73C3E] duration-150 dark:text-white"
                    aria-current={item.current?'page': undefined}
                    >
                    {item.name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
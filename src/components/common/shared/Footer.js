import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {AiOutlineTwitter, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="relative bg-gray-800 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-white">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
           <BsFacebook className='m-3'/></button><button className="bg-white text-primary shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
           <AiOutlineTwitter className='m-3 text-sky-400'/></button><button className="bg-white text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
           <BsInstagram className='m-3 text-primary'/></button><button className="bg-white text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
           <AiFillLinkedin className='m-3 text-sky-600'/>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="text-white hover:text-primary font-semibold block pb-2 text-sm">About Us</Link>
              </li>
              <li>
                <Link className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Our Performance</Link>
              </li>
              <li>
                <Link className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Blog</Link>
              </li>
              <li>
                <Link className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Support</Link>
              </li>
              <li>
                <Link className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Loan Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-primary" target="_blank"> Abdul Mozid Fahim </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;
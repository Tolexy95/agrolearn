import React, { useState, useContext, useEffect } from "react";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import WebsiteLogo from "../../assets/AgroHive_logo.png";
import { FaRegClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SideBarContext } from "../../context/SideBarProvider";
import SideBar from "./SideBar";
import { CiLinkedin } from "react-icons/ci";



const ContactInfo = () => (
  // <div className="hidden lg:flex items-center justify-between p-2 px-16 text-sm font-bold font-inter">

  <div className="hidden lg:flex flex-col gap-3 cursor-pointer font-sora">

    <div className="flex items-center gap-2">
      <FaRegClock className="w-5 h-5 text-[#00cc3c]" />
      <h6>Mon - Fri 9:00 am - 4:00 pm</h6>
    </div>

    <div className="flex items-center gap-2">
      <BsEnvelope className="w-5 h-5 text-[#00cc3c]" />
      <h6>info@agrohive.co</h6>
    </div>

    <div className="flex items-center gap-5 text-[#6e7673] mb-5">
      <NavLink to="https://www.instagram.com/agro_hive/">
        <AiOutlineInstagram className="w-4 h-4 hover:text-[#00cc3c]" />
      </NavLink>
      <NavLink to="https://www.youtube.com/channel/UCCH8--Svxf2TO7TLDWdP3Kg">
        <BsYoutube className="w-4 h-4 hover:text-[#00cc3c]" />
      </NavLink>
      <NavLink to="https://www.facebook.com/agrohive?_rdc=1&_rdr">
        <FaFacebook className="w-4 h-4 hover:text-[#00cc3c]" />
      </NavLink>

      <NavLink to="https://www.linkedin.com/company/agrohive/">
        <CiLinkedin className="w-4 h-4 hover:text-[#00cc3c]" />
      </NavLink>
    </div>

  </div>
);


const Header = () => {
  const { isNavOpen, setIsNavOpen } = useContext(SideBarContext);
 

  return (
    <div className= {`${isNavOpen ? '' : 'bg-[#fff]'} font-inter text-sm sticky top-0`} style={{ zIndex: 10 }}>
   <div className="flex items-center justify-between pl-5 md:pl-16 pr-7 mt-7">
        
          <div className="w-40">
            <img src={WebsiteLogo} alt='website Logo' className='object-cover' />
          </div>
        
        <ul className="DESKTOP-MENU hidden lg:flex items-center font-bold text-[#6e7673] gap-5 space-x-6 text-base relative">
          <li>
            <NavLink
              exact
              to="/"
              className="relative hover:text-[#255946] hover:text-lg hover:font-semibold shadow-md">
              <span className="relative z-10">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="relative hover:text-[#255946] hover:text-lg hover:font-semibold shadow-md" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="relative hover:text-[#255946] hover:text-lg hover:font-semibold shadow-md">
              Services
             </NavLink>
          </li>
          <li>
            <NavLink
              to="/partner"
              className="relative hover:text-[#255946] hover:text-lg hover:font-semibold shadow-md">
              Our partners
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className="relative hover:text-[#255946] hover:text-lg hover:font-semibold shadow-md" >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="relative hover:text-[#255946] hover:text-lg hover:font-semibold shadow-md" >
              Contact
            </NavLink>
          </li>
        </ul>


        <ContactInfo />

        <div className={`${isNavOpen ? 'hidden' : 'block'} HAMBURGER-ICON flex lg:hidden`} onClick={() => setIsNavOpen(!isNavOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="6" x2="2" y2="6" />
            <line x1="22" y1="12" x2="8" y2="12" />
            <line x1="22" y1="18" x2="12" y2="18" />
          </svg>
        </div>
      </div>
      {isNavOpen && <SideBar />}
    </div>
  );
};


export default Header;

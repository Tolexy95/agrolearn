import React, { useContext } from "react";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import WebsiteLogo from "../../assets/AgroHive_logo.png";
import MobileLogo from "../../assets/AgroHive_logo_shape.png"
import { FaRegClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SideBarContext } from "../../context/SideBarProvider";
import SideBar from "./SideBar";
import { CiLinkedin } from "react-icons/ci";



const ContactInfo = () => (
  <div className="hidden lg:flex flex-col gap-3 cursor-pointer font-sora">

  <div className="flex items-center gap-2">
    <FaRegClock className="w-5 h-5 text-[#00cc3c]" />
    <h6>Mon - Fri 9:00 am - 4:00 pm</h6>
  </div>

  <div className="flex items-center gap-2">
    <BsEnvelope className="w-5 h-5 text-[#00cc3c]" />
    <h6>info@agrohive.co</h6>
  </div>
</div>
);


const Header = () => {
  const { isNavOpen, setIsNavOpen } = useContext(SideBarContext);

  return (
    <div className={`${isNavOpen ? '' : 'bg-[#fff]'} lg:bg-white  font-inter text-sm fixed w-full top-0 z-10 overflow-hidden` }>

      <div className="flex items-center justify-between p-5 lg:px-12 lg:py-0 ">

        <NavLink to="/" className="w-40 hidden lg:flex">
          <img src={WebsiteLogo} alt='website Logo' className='object-cover' />
        </NavLink>

        <NavLink to="/" className="flex lg:hidden">
          <img src={MobileLogo} alt='website Logo' className='object-cover w-10' />
        </NavLink>

        <ul className="DESKTOP-MENU hidden lg:flex items-center font-bold text-[#6e7673] gap-5 space-x-6 text-base">
          <li>
            <NavLink
              to="/"
              className="hover-text">
              <span className="">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover-text" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="hover-text">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/partner"
              className="hover-text">
              Our partners
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className="hover-text" >
              Courses
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/contact"
              className="hover-text" >
              Contact
            </NavLink>
          </li>
        </ul>

  <ContactInfo/>

  <div className="hidden lg:flex flex-col gap-2 my-2 _social-links  text-[#6e7673]">
    <NavLink to="https://www.instagram.com/agro_hive/">
      <AiOutlineInstagram className=" w-[21px] h-[21px]  hover:text-[#00cc3c]" />
    </NavLink>
    <NavLink to="https://www.youtube.com/channel/UCCH8--Svxf2TO7TLDWdP3Kg">
      <BsYoutube className="w-[21px] h-[21px]  hover:text-[#00cc3c]" />
    </NavLink>
    <NavLink to="https://www.facebook.com/agrohive?_rdc=1&_rdr">
      <FaFacebook className="w-[21px] h-[21px]  hover:text-[#00cc3c]" />
    </NavLink>

    <NavLink to="https://www.linkedin.com/company/agrohive/">
      <CiLinkedin className="w-[21px] h-[21px]  hover:text-[#00cc3c]" />
    </NavLink>
  </div>


        <div className={`${isNavOpen ? 'hidden' : 'block'} flex lg:hidden`} onClick={() => setIsNavOpen(!isNavOpen)}>
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

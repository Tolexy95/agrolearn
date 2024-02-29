import React, { useContext } from "react";
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
  <div className="hidden lg:flex text-[hsla(0,0%,100%,1)] items-center justify-between px-6 text-base font-bold h-16 bg-[#6e7673]">
    <div className="flex items-center gap-3">
      <NavLink to="https://www.instagram.com/agro_hive/">
        <AiOutlineInstagram className="w-5 h-5" />
      </NavLink>
      <NavLink to="https://www.youtube.com/channel/UCCH8--Svxf2TO7TLDWdP3Kg">
        <BsYoutube className="w-5 h-5" />
      </NavLink>
      <NavLink to="https://www.facebook.com/agrohive?_rdc=1&_rdr">
        <FaFacebook className="w-5 h-5" />
      </NavLink>

      <NavLink to="https://www.linkedin.com/company/agrohive/">
        <CiLinkedin className="w-5 h-5" />
      </NavLink>
    </div>

    <div className="flex items-center gap-8">
      <div className="flex items-center gap-2">
        <BsEnvelope className="w-5 h-5" />
        <h6>info@agrohive.co</h6>
      </div>

      <div className="flex items-center gap-2">
        <FaRegClock className="w-5 h-5" />
        <h6>Mon - Fri 9:00 am - 4:00 pm</h6>
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const { isNavOpen, setIsNavOpen } = useContext(SideBarContext);

  return (
    <div className="font-Inter">
      <div className="flex items-center justify-between px-6 mt-7">
        {!isNavOpen && (
          <div className="w-40">
            <img src={WebsiteLogo} alt='website Logo' className='object-cover' />
          </div>
        )}
        <ul className="DESKTOP-MENU hidden lg:flex items-center font-bold text-[#6e7673] gap-5 ">
          <li>
            <NavLink to="/" className="text-base">Home</NavLink>
          </li>
          <li>
            <NavLink className="text-base" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="" to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink className="" to="/partner">Our Partners</NavLink>
          </li>
          <li>
            <NavLink className="" to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink className="" to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <button>
            <NavLink href="/portal" className="btn w-full bg-[#00cc3c] text-white hover:bg-[#176300]">
              Visit Portal
            </NavLink>
          </button>
        </div>

        <div className="HAMBURGER-ICON flex lg:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
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


const Header = () => (
  <div className="font-Inter">
    <ContactInfo />
    <Navigation />
  </div>
);

export default Header;

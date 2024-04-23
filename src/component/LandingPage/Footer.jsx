import React, { useEffect, useState } from "react";
import agroImg from "../../assets/footer-icon.png";
import agrohive from "../../assets/agrohive-light.png";
import { PiEnvelopeThin } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import {FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []); // Run once on component mount

  return (
    <>
      <div className="bg-[#2b5e4c] -mt-7 lg:px-12 px-5 font-inter">
        <div className="flex lg:flex-row flex-col justify-between mt-7 ">
         
        <div className="mt-8  text-white">
            <img src={agrohive} alt="logo" className="h-10" />
            <p className="mb-6 mt-6 lg:w-[300px] leading-8">
              Access and hire well trained agricultural workforce that meets
              your agri-food business skills needs.
            </p>
            <div className="flex space-x-6 mt-10 text-white">
              <NavLink to="https://www.instagram.com/agrohive_hq?igsh=YzljYTk1ODg3Zg==">
                <AiOutlineInstagram className=" w-5 h-5  hover:text-[#00cc3c]" />
              </NavLink>
              <NavLink to="https://www.youtube.com/channel/UCCH8--Svxf2TO7TLDWdP3Kg">
                <BsYoutube className="w-5 h-5  hover:text-[#00cc3c]" />
              </NavLink>
              <NavLink to="https://www.facebook.com/agrohive?_rdc=1&_rdr">
                <FaFacebook className="w-5 h-5  hover:text-[#00cc3c]" />
              </NavLink>

              <NavLink to="https://www.linkedin.com/company/agrohive/">
              <FaLinkedinIn className="w-5 h-5  hover:text-[#00cc3c]"/>
              </NavLink>
            </div>
          </div>
          
          
          
          <div className="mt-8 text-white">
            <h1 className="mb-6 text-xl font-bold">links</h1>
            <ul className="flex flex-col gap-4 text-base">
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-green-500" >
                  About us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/service"
                  className="hover:text-green-500">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/partner"
                  className="hover:text-green-500">
                  Our partners
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className="hover:text-green-500" >
                  Courses
                </NavLink>
              </li>
            </ul>

          </div>

          <div className="mt-8  text-white text-base">
            <h1 className="mb-6  text-xl font-bold">contact</h1>

            <div className="flex gap-2 group mt-3">
              <PiEnvelopeThin className="mt-1 group-hover:text-white text-green-500 " />
              <p className="mb-6 group-hover:text-green-500 cursor-pointer">
                info@agrohive.co
              </p>
            </div>

            <hr />

            <div className="flex gap-2 mt-3 group hover:text-green-600 ">
              <IoLocationSharp className="mt-1 group-hover:text-white text-green-500" />
              <p className="mb-6 group-hover:text-green-500 ">
                10 Hughes Avenue, Alagomeji, Yaba, Lagos state.
              </p>
            </div>

            <hr/>
          </div>
        </div>

        
          <img
            src={agroImg}
            alt="Footer Image"
            className="object-cover right-0 bottom-0 absolute"
          />
       

        <div className="flex flex-col md:flex-row gap-2 justify-between text-white mt-10 text-sm pb-5 font-sora">
          <p className="">
            <NavLink to="/privacy" className="hover:text-green-500 "> Terms & Conditions / Privacy Policy</NavLink>
          </p>
          <p className="">AgroHive ©{year}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

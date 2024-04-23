import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
const ContactPage = () => {
  return (
    <div className="mt-28 mx-28">
      <h1 className="text-3xl font-bold flex items-center justify-center">
        Contact Us
      </h1>

      <div className="flex mt-8 gap-40">
        <div>
          <p className="text-sm text-[#9ea5a2] font-bold">CONTACT NOW </p>
          <h1 className="text-4xl text-green-900 font-bold">Leave A Message</h1>
          <p className="mt-10 text-[#9ea5a2]">We will get back to you within 24 hrs.</p>
          <div className="flex space-x-6 mt-10 ">
    
          <NavLink to="https://www.instagram.com/agro_hive/">
      <AiOutlineInstagram className=" w-5 h-5  hover:text-[#00cc3c]" />
    </NavLink>
    <NavLink to="https://www.youtube.com/channel/UCCH8--Svxf2TO7TLDWdP3Kg">
      <BsYoutube className="w-5 h-5  hover:text-[#00cc3c]" />
    </NavLink>
    <NavLink to="https://www.facebook.com/agrohive?_rdc=1&_rdr">
      <FaFacebook className="w-5 h-5  hover:text-[#00cc3c]" />
    </NavLink>
    <NavLink to="https://www.linkedin.com/company/agrohive/">
      <CiLinkedin className="w-5 h-5  hover:text-[#00cc3c]" />
    </NavLink>
            </div>
        </div>

        <div className="">
          <div className="flex gap-6">
          <input class=" border rounded px-12 py-4 focus:outline-none bg-[#f6f5f283]" type="text" placeholder="Full Name" />

            <input  class=" border rounded px-12 py-4 focus:outline-none bg-[#f6f5f283]"  type="email" placeholder="EMAIL ADDRESS" />
          </div>
          <div className="flex gap-6 mt-4">
            <input  class=" border rounded px-12 py-3 focus:outline-none bg-[#f6f5f283]"  type="number" placeholder="PHONE NUMBER" />
            <input  class=" border rounded px-12 py-3 focus:outline-none bg-[#f6f5f283]"  type="text" placeholder="SUBJECT" />
          </div>

          <div className="mt-8">
            <textarea  class=" border rounded px-4 py-2 w-full focus:outline-none bg-[#f6f5f283]" placeholder="Write Message " name="" id="" cols="30" rows="8"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

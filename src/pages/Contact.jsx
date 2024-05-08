import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import Button from "../component/Button/CustomButton";
import { ButtonSize, ButtonState } from "../component/Button/ButtonStyles";
const ContactPage = () => {
  return (
    <div className="mt-32 lg:mx-28">
      <h1 className="text-4xl text-center mb-28 font-bold items-center justify-center">
        CONTACT US
      </h1>

      <div className="flex flex-col mt-8 gap-40 lg:flex-row">
        <div className="">
          <p className="text-sm ml-5 text-[#9ea5a2] font-bold">CONTACT NOW </p>
          <h1 className="text-4xl px-5 text-green-900 font-bold">
            Leave A Message
          </h1>
          <p className="mt-10 ml-5 text-[#9ea5a2]">
            We will get back to you within 24 hrs.
          </p>
          <div className="flex  ml-5 space-x-6 mt-10 ">
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

        <div className="flex items-center flex-col ">
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <input
              class=" border rounded w-[276px] px-4 py-4 lg:w-[300px] focus:outline-none bg-[#f6f5f283]"
              type="text"
              placeholder="Full Name"
            />

            <input
              class="border w-[276px] px-4 py-4 lg:w-[300px] rounded focus:outline-none bg-[#f6f5f283]"
              type="email"
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <div className="flex items-center flex-col gap-6 mt-4 lg:flex-row">
            <input
              class=" border rounded w-[276px] lg:w-[300px] px-4 py-4 focus:outline-none bg-[#f6f5f283]"
              type="number"
              placeholder="PHONE NUMBER"
            />
            <input
              class=" border rounded w-[276px] lg:w-[300px] px-4 py-4 focus:outline-none bg-[#f6f5f283]"
              type="text"
              placeholder="SUBJECT"
            />
          </div>

          <div className="mt-8">
            <textarea
              class=" border rounded w-[275px] px-5 py-2 lg: lg:w-[620px] focus:outline-none bg-[#f6f5f283]"
              placeholder="Write Message "
              name=""
              id=""
              cols="30"
              rows="8"
            ></textarea>
          </div>
          <Button
            className={`${ButtonSize ? "w-50 md:w-56 py-5 mr-28 lg:mr-96 " : "w-1/2"}`}
            value="Send Message"
            size={ButtonSize.md}
            variant={ButtonState.PRIMARY}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-3 lg:space-y-0 lg:space-x-3 mt-20 text-center">
      <div>
        <h1 className="text-left text-green-900 text-lg font-bold px-16 ml-2">Visit Company</h1>
        <p className="px-16 ml-2 mt-2 text-left lg:w-[380px] text-[#6e7673] text-lg">10 Hughes Avenue, Alagomeji, Yaba, Lagos state.</p>
        <hr className="w-[250px] mt-4 ml-16 hidden md:block"  />
        <div className="hidden:block px-16 text-left lg:mt-5 lg:lg:w-[350px] ">
        <p className="text-[#6e7673] lg:text-lg">Klm 4 Old Orlu Road, Egbeada, Imo state.</p>
      </div>
      </div>
      <hr className=" lg:w-[290px] mt-4  lg:hidden" />
      <hr className="w-[290px] mt-4 lg:hidden"  />
      <div className="px-16 text-left sm:hidden">
        <p className="text-[#6e7673] lg:text-lg">Klm 4 Old Orlu Road, Egbeada, Imo state.</p>
      </div>
   
        <hr className="w-[290px] mt-5 lg:hidden" />

        <div className="mt-5">
          <h1 className=" px-16 text-left  text-green-900 text-lg font-bold">Call or Email</h1>
          <p className="mt-2 px-16 text-left lg:w-[320px] text-[#6e7673] lg:text-lg">
            info@agrohive.CO (+234) 8030-AGROHIVE
          </p>
        </div>

        <hr className="w-[290px] mt-4 lg:hidden" />

        <div className="mt-5">
          <h1 className="text-left px-16  text-green-900 text-lg font-bold">Country Email</h1>

<p className="px-16 mt-3 text-left leading-8 text-[#6e7673] lg:text-lg"> 
            Nigeria@agrohive.co Uganda@agrohive.co Liberia@agrohive.co
            Ivorycoast@agrohive.co diaspora@agrohive.co
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React from "react";
import agroImg from "../../assets/footer-icon.png";
import agrohive from "../../assets/agrohive-light.png";
import paperImage from "../../assets/ripped-paper-base-2.png";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiEnvelopeThin } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#2b5e4c]">
        <img src={paperImage} alt="logo" className="h-5" />
        <div className="flex lg:flex-row flex-col lg:gap-60 gap-8 ml-11 mt-7  ">
          <div className="mt-8  text-white">
            <img src={agrohive} alt="logo" className="h-10" />
            <p className="mb-6 mt-6 w-[300px] leading-8">
              Access and hire well trained agricultural workforces that meets
              your agri-food business skills needs.
            </p>
            <div className="flex space-x-6 mt-10 ">
              <IoLogoFacebook className="text-2xl hover:text-green-600" />
              <FaLinkedinIn className="text-2xl hover:text-green-600" />
              <FaYoutube className="text-2xl hover:text-green-600" />
              <FaInstagram className="text-2xl hover:text-green-600" />
            </div>
          </div>
          <div className="mt-8 text-white">
            <h1 className="mb-6 text-xl font-bold">links</h1>
            <div className="flex mt-9 gap-2 hover:text-green-500">
              <p className="mb-4 ">About us </p>
            </div>
            <div className="flex gap-2 hover:text-green-500">
              <p className="mb-4"> carrier </p>
            </div>
            <div className="flex gap-2 hover:text-green-500">
              <p className="mb-4"> We are hiring </p>
            </div>
            <div className="flex gap-2 hover:text-green-500">
              <p className="mb-6">Blog </p>
            </div>
          </div>
          <div className="text-white">
            <h1 className="mb-6  text-xl font-bold">contact</h1>

            <div className="flex gap-2 group">
              <PiPhoneCallFill className="mt-1 group-hover:text-white text-green-500" />
              <p className="mb-6 group-hover:text-green-500">
                (+234) 8030-AGROHIVE
              </p>
            </div>
            <hr />

            <div className="flex gap-2 mt-3 group">
              <PiEnvelopeThin className="mt-1 group-hover:text-white text-green-500 " />
              <p className="mb-6 group-hover:text-green-500">
                info@agrohive.co
              </p>
            </div>
            <hr />
            <div className="flex gap-2 mt-3 group hover:text-green-600">
              <IoLocationSharp className="mt-1 group-hover:text-white text-green-500" />
              <p className="mb-6 group-hover:text-green-500 ">
                10 Hughes Avenue, Alagomeji, Yaba, Lagos state.
              </p>
            </div>
            <hr class="w-full " />

            <div className="flex gap-2 mt-3 group hover:text-green-500">
              <IoLocationSharp className="mt-1 group-hover:text-white text-green-500" />
              <p className="mb-6 group-hover:text-green-500">
                Klm 4 Old Orlu Road, Egbeada, Imo state.
              </p>
            </div>
          </div>
        </div>

        <div className="h-24 flex justify-end relative">
          <div className=" inset-0 opacity-60 relative "></div>
          <img
            src={agroImg}
            alt="Footer Image"
            className="object-cover right-10 bottom-12 absolute "
          />
        </div>

        <div className="flex flex-row justify-between relative text-white">
          <div className="">
            <p className="ml-6">AgroHive ©2024</p>
          </div>
          <div>
            <p className="mr-6">
              Terms & Conditions / Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

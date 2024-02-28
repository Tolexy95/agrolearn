import React from "react";
import agroImg from "../../assets/bgimage.png";
import agrohive from "../../assets/agrohive-light.png";
import paperImage from "../../assets/ripped-paper-base-2.png"


const Footer = () => {
  return (
    <>
      <div className="bg-green-950">
      <img src={paperImage} alt="logo" className='h-5'/>
        <div className="flex lg:flex-row flex-col lg:gap-60 gap-8  lg:ml-60 ml-11 mt-7 ">
          <div className="mt-8  text-white">
            <img src={agrohive} alt="logo" className='h-10'/>
            <p className="mb-6 mt-6">About us </p>
            <p className="mb-6">carrier </p>
            <p className="mb-6">We are hiring </p>
            <p className="mb-6">Blog </p>
          </div>
          <div className="mt-8 text-white">
            <h1 className="mb-6  text-xl font-bold">links</h1>
            <p className="mb-6 mt-10">About us </p>
            <p className="mb-6"> carrier </p>
            <p className="mb-6"> We are hiring </p>
            <p className="mb-6">Blog </p>
          </div>
          <div className="mt-8  text-white">
            <h1 className="mb-6  text-xl font-bold">contact</h1>
            <p className="mb-6 mt-10">Business Marketing</p>
            <p className="mb-6">User Analytics </p>
            <p className="mb-6">Live chat</p>
            <p className="mb-6">Unlimited support</p>
          </div>
        </div>

        <div className="h-56 flex justify-end relative">
          <div className="absolute inset-0 opacity-60"></div>
          <img src={agroImg} alt="Footer Image" className="object-cover" />
        </div>

        <div className="flex flex-row justify-between relative text-white">
          <div className="">
            <p className="ml-6 mt-4 mb-10">AgroHive ©2024</p>
          </div>
          <div>
            <p className="mr-6 mt-4 mb-10">Terms & Conditions /
              Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

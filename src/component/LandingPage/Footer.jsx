import React from "react";
import agroImg from "../../assets/bgimage.png";
import agrohive from "../../assets/agrohive-light.png";
import paperImage from "../../assets/ripped-paper-base-2.png"


const Footer = () => {
  return (
    <>
      <div className="bg-[#255946] px-12">
      {/* <img src={paperImage} alt="logo" className='h-5'/> */}
        <div className="flex lg:flex-row flex-col justify-between text-xl py-24">
          <div className="mt-8 flex flex-col gap-3 text-white">
            <img src={agrohive} alt="logo" className='h-10'/>
            <p className="">About us </p>
            <p className="">carrier </p>
            <p className="">We are hiring </p>
            <p className="">Blog </p>
          </div>
          <div className="mt-8 text-white flex flex-col gap-3">
            <h1 className="text-xl font-bold">links</h1>
            <p className="">About us </p>
            <p className=""> carrier </p>
            <p className=""> We are hiring </p>
            <p className="">Blog </p>
          </div>
          <div className="mt-8  text-white flex flex-col gap-3">
            <h1 className="  text-xl font-bold">contact</h1>
            <p className="">Business Marketing</p>
            <p className="">User Analytics </p>
            <p className="">Live chat</p>
            <p className="">Unlimited support</p>
          </div>
        </div>

        <div className=" flex relative">
          <div className="absolute inset-0 opacity-60"></div>
          <img src={agroImg} alt="Footer Image" className="object-cover -z-10" />
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

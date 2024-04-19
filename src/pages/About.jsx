import React from 'react';
import about1 from '../assets/about-1.jpg'
import { IoMdCheckmark } from "react-icons/io";

const AboutPage = () => {
  return (
    <div className="">
       <h1 className="text-[38px] font-bold pb-24 text-[#255946] text-center">
        ABOUT US
      </h1>
      <div className="flex flex-col lg:flex-row lg:mx-20 mx-1 lg:space-x-10 pb-20">
        <div className="flex-1 ml-2 mb-10">
          <h1 className="text-left text-[#255946] leading-[40px] text-[38px] font-bold pb-8">
          At AgroHive, you can:
          </h1>
          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-green-500 text-2xl rounded-full p-1'/>
            <p className='text-[#176300]'>Onboard New Employees</p>
          </div>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
          Hire skilled agricultural talents for your agri-food business needs with ease.
          </p>
          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-green-500 text-2xl rounded-full p-1'/>
            <p className='text-[#176300]'>Get Trained And Certified</p>
          </div>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
          Opt-in for industry relevant training as an agricultural talent or agri-food business owner. Also, upskill your existing workforce with the right training and certifications required to improve your agri-food business productivity and profitability.
          </p>

          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-green-500 text-2xl rounded-full p-1'/>
            <p className='text-[#176300]'>Workforce Management and Performance Tracking</p>
          </div>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
          Cut down workforce management costs by 50%. We help agri-food businesses track their staff performance and increase workforce productivity.
          </p>

          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-green-500 text-2xl rounded-full p-1'/>
            <p className='text-[#176300]'>Find Sustainable Agrifood Jobs</p>
          </div>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
          We connect agricultural graduates and professionals with sustainable agri-food jobs. Join us today and get matched with hiring agri-food businesses.
          </p>
        </div>
        <div className="">
          <img
            className="rounded-lg"
            src={about1}
            alt="agricServiceman"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 
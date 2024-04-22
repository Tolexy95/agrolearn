import React from 'react';
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2-1.jpg'
import about3 from '../assets/about-2-2.jpg'
import { IoMdCheckmark } from "react-icons/io";
import { FaTractor } from "react-icons/fa6";
import { PiTreePalm } from "react-icons/pi";

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
            <IoMdCheckmark className='text-white bg-[#176300] text-xl rounded-full p-1'/>
            <p className='text-[#176300]'>Onboard New Employees</p>
          </div>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
          Hire skilled agricultural talents for your agri-food business needs with ease.
          </p>
          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-[#176300] text-xl rounded-full p-1'/>
            <p className='text-[#176300]'>Get Trained And Certified</p>
          </div>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
          Opt-in for industry relevant training as an agricultural talent or agri-food business owner. Also, upskill your existing workforce with the right training and certifications required to improve your agri-food business productivity and profitability.
          </p>

          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-[#176300] text-xl rounded-full p-1'/>
            <p className='text-[#176300]'>Workforce Management and Performance Tracking</p>
          </div>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
          Cut down workforce management costs by 50%. We help agri-food businesses track their staff performance and increase workforce productivity.
          </p>

          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-[#176300] text-2xl rounded-full p-1'/>
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

      <div className="flex flex-col lg:flex-row mb-32 lg:mx-20 mx-1 gap-10 pb-10">
        <div className="flex-1 px-10 text-center group py-6 shadow-lg rounded-md hover:bg-green-600">
        <div className='flex flex-col text-center lg:flex-row-reverse lg:gap-72 hover:text-white'>
        <FaTractor className='w-[60px] h-[60px] group-hover:text-white mx-auto pt-4 pb-4 text-[#00CC3C]'/>
          <h1 className="lg:text-left text-[#6E7673] group-hover:text-white text-center leading-[40px] font-semibold pb-2 hover:text-white">
          OUR MISSION
          </h1>
          </div>
          <p className='font-semibold text-[24px] mx-4 group-hover:text-white lg:mx-0 text-[#255946] lg:w-[407px] hover:text-white'>Using technology for skills
development & seamless access to quality agricultural talents, which will enhance agribusiness productivity across Africa.</p>
        </div>

        <div className="flex-1 py-6 px-10 shadow-lg mx-auto rounded-md hover:bg-green-600 group hover:text-white">
        <div className='flex flex-col md:flex-row lg:flex-row-reverse lg:gap-72'>
        <PiTreePalm className='w-[60px] h-[60px] group-hover:text-white mx-auto pt-4 pb-4 text-[#00CC3C]'/>
          <h1 className="lg:text-left text-center text-[#6E7673] leading-[40px] font-semibold pb-4 group-hover:text-white">
          OUR VISION
          </h1>
          </div>
          <p className='text-2xl lg:w-[250px] font-semibold text-center lg:mx-0 text-[#255946] group-hover:text-white'>To digitize
and simplify Africa’s
agricultural human resource management.</p>
        </div>
      </div>


      <div className="flex flex-col mt-14 lg:flex-row lg:mx-20 mx-1 lg:space-x-28 pb-20">

      <div className="relative mb-20">
          <img
            className="rounded-full"
            src={about3}
            alt="agricServiceWoman"
          />
           <img
            className=" absolute bottom-40 w-[200px] md:bottom-70 lg:bottom-80 lg:-left-16 lg:w-fit rounded-full"
            src={about2}
            alt="agricOrchardMan"
          />
        </div>

        <div className="flex-1 ml-2 mb-14">
          <h1 className="text-left text-[#255946] leading-[40px] text-[38px] font-bold pb-8">
          CORE VALUES
          </h1>
          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-[#176300] font-extrabold text-xl rounded-full p-1'/>
            <p className='text-[#176300]'>Dedication</p>
          </div>
          <p className="leading-8 text-[13px] text-[#6E7673] mx-4 pb-5">
          We believe that learning is a continuous process and we work towards empowering the next generation of agriculturists to become masters of their crafts.
          </p>
          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-[#176300] text-xl rounded-full p-1'/>
            <p className='text-[#176300]'>Collaboration</p>
          </div>
          <p className="leading-8 text-[13px] text-[#6E7673] mx-4 pb-5">
          We continuously build long lasting relationships with experts and relevant stakeholders in the agricultural sector, working across borders and putting our clients' satisfaction before personal gains.
          </p>

          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-[#176300] text-xl rounded-full p-1'/>
            <p className='text-[#176300]'>Passion</p>
          </div>
          <p className="leading-8 text-[13px] text-[#6E7673] mx-4 pb-5">
          We Pursue AgroHive’s goals with undeterred enthusiasm and unwavering zeal, we are always looking out for opportunities to inspire and be inspired.
          </p>

          <div className='flex items-center gap-1 pb-4'>
            <IoMdCheckmark className='text-white bg-[#176300] text-xl rounded-full p-1'/>
            <p className='text-[#176300]'>Integrity</p>
          </div>
          <p className="leading-8 text-[13px] text-[#6E7673] mx-4 pb-5">
          We believe that trust is key and we act accordingly.<br/>
We stay true to our words and are courageous in all<br/> we do.
We want our clients to hold us accountable.
          </p>
        </div>
        
      </div>

    </div>
  );
};

export default AboutPage; 
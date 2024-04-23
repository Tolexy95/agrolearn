import React from "react";
import agroServiveImg from "../assets/agrohiveservice1.jpg";
import { IoMdCheckmark } from "react-icons/io";
import ServiceOne from '../component/Service1';
import ServiceTwo from '../component/Service2';

const ServicesPage = () => {
  return (
    <div className="">
      <h1 className="text-[38px] font-bold pb-24 text-[#255946] text-center">
        OUR SERVICES
      </h1>
      <div className="flex flex-col lg:flex-row lg:mx-20 mx-1 lg:space-x-10 pb-20">
        <div className="flex-1 ml-2 mb-10">
          <h2 className="text-left text-[#9EA5A2] font-bold pb-3">
            WHAT WE’RE OFFERING
          </h2>

          <h1 className="text-left text-[#255946] leading-[40px] text-[38px] font-bold pb-8">
            Training, Staff Hiring & Workforce Management
          </h1>
          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5">
            Select a service from our range of diverse premium agricultural
            solutions that meets your agri-food business growth needs. We offer
            well-tailored solutions from blended upskilling training, staff
            outsourcing, workforce management, farm set-up solutions and
            extension services.
          </p>
          <div className="flex items-center gap-5 pb-5">
            <IoMdCheckmark className="text-white bg-green-500 rounded-full w-[40px] h-[40px] p-1" />
            <p className="text-[#255946] text-[18px]">Hire the best Agro talents</p>
          </div>
          <div className="flex items-center gap-5">
            <IoMdCheckmark className="text-white bg-green-500 rounded-full w-[40px] h-[40px] p-1" />
            <p className="text-[#255946] text-[18px]">
              Get the best training as an Agro expert
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-lg"
            src={agroServiveImg}
            alt="agricServiceman"
          />
        </div>
      </div>
      <ServiceOne/>
      <ServiceTwo/>
    </div>
  );
};

export default ServicesPage;
